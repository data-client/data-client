---
title: Introducing the Relational Data Client
sidebar_label: Introduction
slug: /
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

<head>
  <title>Introducing The Relational Data Client for React: Rest Hooks ✨</title>
  <meta name="docsearch:pagerank" content="10"/>
</head>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import LanguageTabs from '@site/src/components/LanguageTabs';
import ProtocolTabs from '@site/src/components/ProtocolTabs';
import HooksPlayground from '@site/src/components/HooksPlayground';

Rest Hooks provides safe and performant [client access](./api/useSuspense.md) and [mutation](./api/Controller.md#fetch) over [remote data protocols](https://www.freecodecamp.org/news/what-is-an-api-in-english-please-b880a3214a82/).
Both pull/fetch ([REST](/rest) and [GraphQL](/graphql)) and push/stream ([WebSockets or Server Sent Events](./api/Manager.md#middleware-data-stream)) can be used simultaneously.

We call Rest Hooks a Relational Data Client because it has similar goals
to [Relational Databases](https://en.wikipedia.org/wiki/Relational_database)
but for interactive application clients. Because of this, **if your backend uses a [RDBMS](https://en.wikipedia.org/wiki/Relational_database) like [Postgres](https://www.postgresql.org/)
or [MySQL](https://www.mysql.com/) this is a good indication Rest Hooks might be for you**. Respectively,
just like one might choose [flat files](https://www.techopedia.com/definition/25956/flat-file) over database storage,
sometimes a less powerful client library is sufficient.

This is no small task. To achieve this, Rest Hooks' design is aimed at **treating remote data like it is
local**. This means component logic should be no more complex than useState and setState.

## Define API {#endpoint}

[Endpoints](./getting-started/endpoint.md) are the _methods_ of your data. At their core they
are simply asynchronous functions. However, they also define anything else relevant to the [API](https://www.freecodecamp.org/news/what-is-an-api-in-english-please-b880a3214a82/)
like [expiry policy](./getting-started/expiry-policy.md), [data model](./getting-started/entity.md), [validation](./getting-started/validation.md), and [types](/rest/api/RestEndpoint#typing).

<ThemedImage
alt="Endpoints used in many contexts"
sources={{
    light: useBaseUrl('/img/endpoint-many.png'),
    dark: useBaseUrl('/img/endpoint-many.dark.png'),
  }}
style={{float: "right",marginLeft:"10px"}}
width="415" height="184"
/>

By _decoupling_ endpoint definitions from their usage, we are able to reuse them in many contexts.

- Easy reuse in different **components** eases co-locating data dependencies
- Reuse with different **[hooks](./api/useSuspense.md)** and **[imperative actions](./api/Controller.md)** allows different behaviors with the same endpoint
- Reuse across different **[platforms](./getting-started/installation.md)** like React Native, React web, or even beyond React in Angular, Svelte, Vue, or Node
- Published as **packages** independent of their consumption

Endpoints are extensible and composable, with protocol implementations ([REST](/rest), [GraphQL](/graphql), [Websockets+SSE](./api/Manager.md#middleware-data-stream), [Img/binary](./guides/img-media.md))
to get started quickly, extend, and share common patterns.

<ProtocolTabs>

```ts
import { RestEndpoint } from '@rest-hooks/rest';

const getTodo = new RestEndpoint({
  urlPrefix: 'https://jsonplaceholder.typicode.com',
  path: '/todos/:id',
});
```

```ts
import { GQLEndpoint } from '@rest-hooks/graphql';

const gql = new GQLEndpoint('/');
export const getTodo = gql.query(`
  query GetTodo($id: ID!) {
    todo(id: $id) {
      id
      title
      completed
    }
  }
`);
```

</ProtocolTabs>

## Co-locate data dependencies

Make your components reusable by binding the data [where you need it](./getting-started/data-dependency.md) with the one-line [useSuspense()](./api/useSuspense.md).

```tsx {4}
import { useSuspense } from '@rest-hooks/react';

export default function TodoDetail({ id }: { id: number }) {
  const todo = useSuspense(getTodo, { id });

  return <div>{todo.title}</div>;
}
render(<TodoDetail id={1} />);
```

No more prop drilling, or cumbersome external state management. Rest Hooks guarantees global referential equality,
data safety and performance.

Co-location also allows [Server Side Rendering](./guides/ssr.md) to incrementally stream HTML, greatly reducing [TTFB](https://web.dev/ttfb/).
[Rest Hooks SSR](./guides/ssr.md) automatically hydrates its store, allowing immediate interactive mutations with **zero** client-side
fetches on first load.

## Handle loading/error

Avoid 100s of loading spinners by placing [AsyncBoundary](./api/AsyncBoundary.md) around many suspending components.

Typically these are placed at or above navigational boundaries like pages, routes or modals.

```tsx {5,8}
import { AsyncBoundary } from '@rest-hooks/react';

function App() {
  return (
    <AsyncBoundary>
      <AnotherRoute />
      <TodoDetail id={5} />
    </AsyncBoundary>
  );
}
```

[Non-Suspense fallback handling](./getting-started/data-dependency.md#stateful) can also be used for certain
cases in React 16 and 17

## Mutations

Mutations present another case of reuse - this time of our data. This case is even more critical
because it can not just lead to code bloat, but data ingrity, tearing, and general application jankiness.

When we call our mutation method/endpoint, we need to ensure **all** uses of that data are updated.
Otherwise we're stuck with the complexity, performance, and stuttery application jank of attempting
to cascade endpoint refreshes.

### Keep data consistent and fresh {#entities}

[Entities](./getting-started/endpoint.md) define our data model.

This enables a [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) storage pattern, which
prevents 'data tearing' jank and improves performance.

<ProtocolTabs>

```ts
import { Entity } from '@rest-hooks/rest';

export class Todo extends Entity {
  userId = 0;
  id = 0;
  title = '';
  completed = false;

  pk() {
    return `${this.id}`;
  }
}
```

```ts
import { GQLEntity } from '@rest-hooks/graphql';

export class Todo extends GQLEntity {
  userId = 0;
  id = 0;
  title = '';
  completed = false;
}
```

</ProtocolTabs>

The [pk()](/rest/api/Entity#pk) (primary key) method is used to build a lookup table. This is
commonly known as data normalization. To avoid bugs, application jank and performance problems,
it is critical to [choose the right (normalized) state structure](https://beta.reactjs.org/learn/choosing-the-state-structure).

We can now bind our Entity to both our get endpoint and update endpoint, providing our runtime
data integrity as well as TypeScript definitions.

<ProtocolTabs>

```ts {6,13}
import { RestEndpoint } from '@rest-hooks/rest';

export const getTodo = new RestEndpoint({
  urlPrefix: 'https://jsonplaceholder.typicode.com',
  path: '/todos/:id',
  schema: Todo,
});

export const updateTodo = new RestEndpoint({
  urlPrefix: 'https://jsonplaceholder.typicode.com',
  path: '/todos/:id',
  method: 'PUT',
  schema: Todo,
});
```

```ts {14,25}
import { GQLEndpoint } from '@rest-hooks/graphql';

const gql = new GQLEndpoint('/');

export const getTodo = gql.query(
  `query GetTodo($id: ID!) {
    todo(id: $id) {
      id
      title
      completed
    }
  }
`,
  { todo: Todo },
);

export const updateTodo = gql.mutation(
  `mutation UpdateTodo($todo: Todo!) {
    updateTodo(todo: $todo) {
      id
      title
      completed
    }
  }`,
  { updateTodo: Todo },
);
```

</ProtocolTabs>

### Tell react to update

Just like `setState()`, we must make React aware of the any mutations so it can rerender.

[Controller](./api/Controller.md) provides this functionality in a type-safe manner.
[Controller.fetch()](./api/Controller.md#fetch) lets us trigger mutations.

We can [useController](./api/useController.md) to access it in React components.

```tsx
import { useController } from '@rest-hooks/react';

function ArticleEdit() {
  const ctrl = useController();
  // highlight-next-line
  const handleSubmit = data => ctrl.fetch(todoUpdate, { id }, data);
  return <ArticleForm onSubmit={handleSubmit} />;
}
```

<details><summary><b>Tracking imperative loading/error state</b></summary>

[useLoading()](./api/useLoading.md) enhances async functions by tracking their loading and error states.

```tsx
import { useController } from '@rest-hooks/react';
import { useLoading } from '@rest-hooks/hooks';

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

React 18 version with [useTransition](https://beta.reactjs.org/apis/react/useTransition)

```tsx
import { useTransition } from 'react';
import { useController } from '@rest-hooks/react';
import { useLoading } from '@rest-hooks/hooks';

function ArticleEdit() {
  const ctrl = useController();
  const [loading, startTransition] = useTransition();
  const handleSubmit = data =>
    startTransition(() => ctrl.fetch(todoUpdate, { id }, data));
  return <ArticleForm onSubmit={handleSubmit} loading={loading} />;
}
```

</details>

### More data modeling

What if our entity is not the top level item? Here we define the `todoList`
endpoint with `[Todo]` as its schema. [Schemas](./getting-started/entity.md#schema) tell Rest Hooks _where_ to find
the Entities. By placing inside a list, Rest Hooks knows to expect a response
where each item of the list is the entity specified.

```typescript {6}
import { RestEndpoint } from '@rest-hooks/rest';

export const getTodoList = new RestEndpoint({
  urlPrefix: 'https://jsonplaceholder.typicode.com',
  path: '/todos',
  schema: [Todo],
});
```

[Schemas](./getting-started/entity.md) also automatically infer and enforce the response type, ensuring
the variable `todos` will be typed precisely.

```tsx {4}
import { useSuspense } from '@rest-hooks/react';

export default function TodoListComponent() {
  const todos = useSuspense(getTodoList);

  return (
    <div>
      {todos.map(todo => (
        <TodoListItem key={todo.pk()} todo={todo} />
      ))}
    </div>
  );
}
```

Now we've used our data model in three cases - `getTodo`, `getTodoList` and `updateTodo`. Data consistency
(as well as referential equality) will be guaranteed between the endpoints, even after mutations occur.

### Organizing Endpoints

At this point we've defined `todoDetail`, `todoList` and `todoUpdate`. You might have noticed
that these endpoint definitions share some logic and information. For this reason Rest Hooks
encourages extracting shared logic among endpoints.

[Resources](/rest/api/createResource) are collections of endpoints that operate on the same data.

```typescript
import { Entity, createResource } from '@rest-hooks/rest';

class Todo extends Entity {
  id = 0;
  userId = 0;
  title = '';
  completed = false;

  pk() {
    return `${this.id}`;
  }
}

const TodoResource = createResource({
  urlPrefix: 'https://jsonplaceholder.typicode.com',
  path: '/todos/:id',
  schema: Todo,
});
```

[Introduction to Resource](/rest)

<details><summary><b>Resource Endpoints</b></summary>

```typescript
// read
// GET https://jsonplaceholder.typicode.com/todos/5
const todo = useSuspense(TodoResource.get, { id: 5 });

// GET https://jsonplaceholder.typicode.com/todos
const todos = useSuspense(TodoResource.getList);

// mutate
// POST https://jsonplaceholder.typicode.com/todos
const ctrl = useController();
ctrl.fetch(TodoResource.create, { title: 'my todo' });

// PUT https://jsonplaceholder.typicode.com/todos/5
const ctrl = useController();
ctrl.fetch(TodoResource.update, { id: 5 }, { title: 'my todo' });

// PATCH https://jsonplaceholder.typicode.com/todos/5
const ctrl = useController();
ctrl.fetch(TodoResource.partialUpdate, { id: 5 }, { title: 'my todo' });

// DELETE https://jsonplaceholder.typicode.com/todos/5
const ctrl = useController();
ctrl.fetch(TodoResource.delete, { id: 5 });
```

</details>

### Zero delay mutations {#optimistic-updates}

[Controller.fetch](./api/Controller.md#fetch) call the mutation endpoint, and update React based on the response.
While [useTransition](https://beta.reactjs.org/apis/react/useTransition) improves the experience,
the UI still ultimately waits on the fetch completion to update.

For many cases like toggling todo.completed, incrementing an upvote, or dragging and drop
a frame this can be too slow!

We can optionally tell Rest Hooks to perform the React renders immediately. To do this
we'll need to specify _how_.

[getOptimisticResponse](/rest/guides/optimistic-updates) is just like [setState with an updater function](https://beta.reactjs.org/apis/react/useState#updating-state-based-on-the-previous-state). Using [snap](./api/Snapshot.md) for access to the store to get the previous
value, as well as the fetch arguments, we return the _expected_ fetch response.

```typescript
export const updateTodo = new RestEndpoint({
  urlPrefix: 'https://jsonplaceholder.typicode.com',
  path: '/todos/:id',
  method: 'PUT',
  schema: Todo,
  // highlight-start
  getOptimisticResponse(snap, { id }, body) {
    return {
      id,
      ...body,
    };
  },
  // highlight-end
});
```

Rest Hooks ensures [data integrity against any possible networking failure or race condition](/rest/guides/optimistic-updates#optimistic-transforms), so don't
worry about network failures, multiple mutation calls editing the same data, or other common
problems in asynchronous programming.

### Remotely triggered mutations

Sometimes data change is initiated remotely - either due to other users on the site, admins, etc. Declarative
[expiry policy](./getting-started/expiry-policy.md) controls allow tight control over updates due to fetching.

However, for data that changes frequently (like exchange price tickers, or live conversations) sometimes push-based
protocols are used like Websockets or Server Sent Events. Rest Hooks has a [powerful middleware layer called Managers](./api/Manager.md),
which can be used to [initiate data updates](./api/Manager.md#data-stream) when receiving new data pushed from the server.

<details><summary><b>StreamManager</b></summary>

```typescript
import type { Manager, Middleware } from '@rest-hooks/core';
import type { EndpointInterface } from '@rest-hooks/endpoint';

export default class StreamManager implements Manager {
  protected declare middleware: Middleware;
  protected declare evtSource: WebSocket | EventSource;
  protected declare endpoints: Record<string, EndpointInterface>;

  constructor(
    evtSource: WebSocket | EventSource,
    endpoints: Record<string, EndpointInterface>,
  ) {
    this.evtSource = evtSource;
    this.endpoints = endpoints;

    this.middleware = controller => {
      this.evtSource.onmessage = event => {
        try {
          const msg = JSON.parse(event.data);
          if (msg.type in this.endpoints)
            controller.setResponse(this.endpoints[msg.type], ...msg.args, msg.data);
        } catch (e) {
          console.error('Failed to handle message');
          console.error(e);
        }
      };
      return next => async action => next(action);
    };
  }

  cleanup() {
    this.evtSource.close();
  }

  getMiddleware() {
    return this.middleware;
  }
}
```

</details>

If we don't want the full data stream, we can [useSubscription()](./api/useSubscription.md) or [useLive()](./api/useLive.md)
to ensure we only listen to the data we care about.

Endpoints with [pollFrequency](/rest/api/RestEndpoint#pollfrequency) allow reusing the existing HTTP endpoints, eliminating
the need for additional websocket or SSE backends.
Polling is globally orchestrated by the [SubscriptionManager](./api/SubscriptionManager.md), so even with many
components subscribed Rest Hooks will never overfetch.

[//]: # 'TODO: ## Relational joins and nesting'

## Debugging

<img src={require('@site/static/img/redux-devtools-logo.jpg').default} width="75" height="75" alt="redux-devtools" style={{ float: 'left', "marginRight": "var(--ifm-paragraph-margin-bottom)" }} />

Add the Redux DevTools for
[chrome extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)
or
[firefox extension](https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/)

Click the icon to open the [inspector](./guides/debugging.md), which allows you to observe dispatched actions,
their effect on the cache state as well as current cache state.

## Mock data

Writing `FixtureEndpoint`s is a standard format that can be used across all `@rest-hooks/test` helpers as well as your own uses.

<Tabs
defaultValue="detail"
values={[
{ label: 'Detail', value: 'detail' },
{ label: 'Update', value: 'update' },
{ label: '404 error', value: 'detail404' },
]}>
<TabItem value="detail">

```typescript
import type { FixtureEndpoint } from '@rest-hooks/test';
import { todoDetail } from './todo';

const todoDetailFixture: FixtureEndpoint = {
  endpoint: todoDetail,
  args: [{ id: 5 }] as const,
  response: {
    id: 5,
    title: 'Star Rest Hooks on Github',
    userId: 11,
    completed: false,
  },
};
```

</TabItem>
<TabItem value="update">

```typescript
import type { FixtureEndpoint } from '@rest-hooks/test';
import { todoUpdate } from './todo';

const todoUpdateFixture: FixtureEndpoint = {
  endpoint: todoUpdate,
  args: [{ id: 5 }, { completed: true }] as const,
  response: {
    id: 5,
    title: 'Star Rest Hooks on Github',
    userId: 11,
    completed: true,
  },
};
```

</TabItem>
<TabItem value="detail404">

```typescript
import type { FixtureEndpoint } from '@rest-hooks/test';
import { todoDetail } from './todo';

const todoDetail404Fixture: FixtureEndpoint = {
  endpoint: todoDetail,
  args: [{ id: 9001 }] as const,
  response: { status: 404, response: 'Not found' },
  error: true,
};
```

</TabItem>
</Tabs>

- [Mock data for storybook](./guides/storybook.md) with [MockResolver](./api/MockResolver.md)
- [Test hooks](./guides/unit-testing-hooks.md) with [makeRenderRestHook()](./api/makeRenderRestHook.md)
- [Test components](./guides/unit-testing-components.md) with [MockResolver](./api/MockResolver.md) and [mockInitialState()](./api/mockInitialState.md)

## Demo

<Tabs
  defaultValue="todo"
  values={[
    { label: 'Todo', value: 'todo' },
    { label: 'GitHub', value: 'github' },
    { label: 'NextJS SSR', value: 'nextjs' },
  ]}
  groupId="Demos"
>
  <TabItem value="todo">

<iframe
  src="https://stackblitz.com/github/coinbase/rest-hooks/tree/master/examples/todo-app?embed=1&file=src%2Fpages%2FHome%2FTodoListComponent.tsx&hidedevtools=1&view=both&ctl=1"
  width="100%"
  height="500"
></iframe>

[Open demo in own tab](https://stackblitz.com/github/coinbase/rest-hooks/tree/master/examples/todo-app?file=src%2Fpages%2FHome%2FTodoListComponent.tsx)

[Explore on github](https://github.com/coinbase/rest-hooks/tree/master/examples/todo-app)
</TabItem>

  <TabItem value="github">
<iframe
  src="https://stackblitz.com/github/coinbase/rest-hooks/tree/master/examples/github-app?embed=1&file=src%2Fpages%2FIssueList.tsx&hidedevtools=1&view=preview&ctl=1"
  width="100%"
  height="500"
></iframe>

[Open demo in own tab](https://stackblitz.com/github/coinbase/rest-hooks/tree/master/examples/github-app?file=src%2Fpages%2FIssueList.tsx)

[Explore on github](https://github.com/coinbase/rest-hooks/tree/master/examples/github-app)
</TabItem>
  <TabItem value="nextjs">

<iframe
  src="https://stackblitz.com/github/coinbase/rest-hooks/tree/master/examples/nextjs?embed=1&file=src%2Fpages%2FHome%2FTodoListComponent.tsx&hidedevtools=1&view=both&ctl=1"
  width="100%"
  height="500"
></iframe>

[Open demo in own tab](https://stackblitz.com/github/coinbase/rest-hooks/tree/master/examples/nextjs?file=pages%2FAssetPrice.tsx)

[Explore on github](https://github.com/coinbase/rest-hooks/tree/master/examples/nextjs)
</TabItem>
</Tabs>
