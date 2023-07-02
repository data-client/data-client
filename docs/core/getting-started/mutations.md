---
title: Data mutations
sidebar_label: Mutate Data
---

import ProtocolTabs from '@site/src/components/ProtocolTabs';
import HooksPlayground from '@site/src/components/HooksPlayground';
import { TodoResource } from '@site/src/components/Demo/code/todo-app/rest/resources';

<head>
  <title>Mutating Asynchronous Data with Reactive Data Client</title>
  <meta name="docsearch:pagerank" content="40"/>
</head>

## Tell react to update

Just like [setState()](https://react.dev/reference/react/useState#setstate), we must make React aware of the any mutations so it can rerender.

[Controller](../api/Controller.md) from [useController](../api/useController.md) provides this functionality in a type-safe manner.
[Controller.fetch()](../api/Controller.md#fetch) lets us trigger async mutations.

[//]: # 'TODO: Add create, and delete examples as well (in tabs)'

<HooksPlayground defaultOpen="n" row>

```ts title="api/Todo" collapsed
export class Todo extends Entity {
  id = 0;
  userId = 0;
  title = '';
  completed = false;
  pk() {
    return `${this.id}`;
  }
}
export const TodoResource = createResource({
  urlPrefix: 'https://jsonplaceholder.typicode.com',
  path: '/todos/:id',
  schema: Todo,
});
```

```tsx title="Todo" {8}
import { useSuspense } from '@data-client/react';
import { TodoResource } from './api/Todo';

function TodoDetail({ id }: { id: number }) {
  const todo = useSuspense(TodoResource.get, { id });
  const ctrl = useController();
  const updateWith = title => () =>
    ctrl.fetch(TodoResource.partialUpdate, { id }, { title });
  return (
    <div>
      <div>{todo.title}</div>
      <button onClick={updateWith('🥑')}>🥑</button>
      <button onClick={updateWith('💖')}>💖</button>
    </div>
  );
}
render(<TodoDetail id={1} />);
```

</HooksPlayground>

Reactive Data Client uses the fetch response to safely update all components. This not only more than doubles
performance, but dramatically reduces server load that comes up sequential fetches.

<details>
<summary><b>Tracking imperative loading/error state</b></summary>

[useLoading()](../api/useLoading.md) enhances async functions by tracking their loading and error states.

```tsx
import { useController } from '@data-client/react';
import { useLoading } from '@data-client/hooks';

function ArticleEdit() {
  const ctrl = useController();
  // highlight-next-line
  const [handleSubmit, loading, error] = useLoading(
    data => ctrl.fetch(todoUpdate, { id }, data),
    [ctrl],
  );
  return <ArticleForm onSubmit={handleSubmit} loading={loading} />;
}
```

React 18 version with [useTransition](https://react.dev/reference/react/useTransition)

```tsx
import { useTransition } from 'react';
import { useController } from '@data-client/react';
import { useLoading } from '@data-client/hooks';

function ArticleEdit() {
  const ctrl = useController();
  const [loading, startTransition] = useTransition();
  const handleSubmit = data =>
    startTransition(() => ctrl.fetch(todoUpdate, { id }, data));
  return <ArticleForm onSubmit={handleSubmit} loading={loading} />;
}
```

</details>

## Zero delay mutations {#optimistic-updates}

[Controller.fetch](../api/Controller.md#fetch) call the mutation endpoint, and update React based on the response.
While [useTransition](https://react.dev/reference/react/useTransition) improves the experience,
the UI still ultimately waits on the fetch completion to update.

For many cases like toggling todo.completed, incrementing an upvote, or dragging and drop
a frame this can be too slow!

<HooksPlayground defaultOpen="n" row fixtures={[
{
  endpoint: TodoResource.getList,
  async response(...args) {
    return (await TodoResource.getList(...args)).slice(0, 7);
  },
},
{
  endpoint: TodoResource.partialUpdate,
  async response(...args) {
    return {
      ...(await TodoResource.partialUpdate(...args)),
      id: args?.[0]?.id,
    };
  },
},
{
  endpoint: TodoResource.create,
  async response(...args) {
    return {
      ...(await TodoResource.create(...args)),
      id: args?.[args.length - 1]?.id,
    };
  },
},
]}>

```ts title="api/Todo" {14}
export class Todo extends Entity {
  id = 0;
  userId = 0;
  title = '';
  completed = false;
  pk() {
    return `${this.id}`;
  }
}
export const TodoResource = createResource({
  urlPrefix: 'https://jsonplaceholder.typicode.com',
  path: '/todos/:id',
  schema: Todo,
  optimistic: true,
});
```

```tsx title="TodoItem" {12-16} collapsed
import { useController } from '@data-client/react';
import { TodoResource, Todo } from './api/Todo';

export function TodoItem({ todo }: { todo: Todo }) {
  const ctrl = useController();
  return (
    <label style={{ display: 'block' }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={e =>
          ctrl.fetch(
            TodoResource.partialUpdate,
            { id: todo.id },
            { completed: e.currentTarget.checked },
          )
        }
      />
      {todo.completed ? <strike>{todo.title}</strike> : todo.title}
    </label>
  );
}
```

```tsx title="TodoList" collapsed
import { useSuspense } from '@data-client/react';
import { TodoItem } from './TodoItem';
import { TodoResource, Todo } from './api/Todo';

function TodoList() {
  const todos = useSuspense(TodoResource.getList);
  return (
    <div>
      {todos.map(todo => (
        <TodoItem key={todo.pk()} todo={todo} />
      ))}
    </div>
  );
}
render(<TodoList />);
```

</HooksPlayground>

[getOptimisticResponse](/rest/guides/optimistic-updates) is just like [setState with an updater function](https://react.dev/reference/react/useState#updating-state-based-on-the-previous-state). Using [snap](../api/Snapshot.md) for access to the store to get the previous
value, as well as the fetch arguments, we return the _expected_ fetch response.

```typescript
export const increment = new RestEndpoint({
  path: '/api/count/increment',
  method: 'POST',
  name: 'increment',
  // highlight-start
  getOptimisticResponse(snap) {
    const { data } = snap.getResponse(getCount);
    if (!data) throw new AbortOptimistic();
    return {
      count: data.count + 1,
    };
  },
  // highlight-end
});
```

Reactive Data Client ensures [data integrity against any possible networking failure or race condition](/rest/guides/optimistic-updates#optimistic-transforms), so don't
worry about network failures, multiple mutation calls editing the same data, or other common
problems in asynchronous programming.
