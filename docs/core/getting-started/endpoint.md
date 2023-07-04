---
title: Define Async Methods (Endpoints)
sidebar_label: Define Methods
---

<head>
  <title>Defining Asynchronous Methods (Endpoints) for Reactive Data Client</title>
  <meta name="docsearch:pagerank" content="40"/>
</head>

import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import LanguageTabs from '@site/src/components/LanguageTabs';
import ProtocolTabs from '@site/src/components/ProtocolTabs';
import PkgInstall from '@site/src/components/PkgInstall';
import TypeScriptEditor from '@site/src/components/TypeScriptEditor';

[Endpoints](/rest/api/RestEndpoint) are the [_methods_](<https://en.wikipedia.org/wiki/Method_(computer_programming)>) of your data. [Entities](/rest/api/Entity) are a type of [Schema](../concepts/normalization.md), which define the data model. [Resources](/rest/api/createResource) are
a collection of `endpoints` around one `schema`.

<Tabs
defaultValue="rest"
groupId="protocol"
values={[
{ label: 'Rest', value: 'rest' },
{ label: 'GraphQL', value: 'gql' },
{ label: 'Promise', value: 'other' },
]}>
<TabItem value="rest">

  <PkgInstall pkgs="@data-client/rest" />

<TypeScriptEditor row={false}>

```typescript title="api/Todo"
import { Entity } from '@data-client/rest';
import { createResource } from '@data-client/rest';

export class Todo extends Entity {
  id = 0;
  userId = 0;
  title = '';
  completed = false;

  pk() {
    return `${this.id}`;
  }
  static key = 'Todo';
}

export const TodoResource = createResource({
  urlPrefix: 'https://jsonplaceholder.typicode.com',
  path: '/todos/:id',
  schema: Todo,
  searchParams: {} as { userId?: string | number } | undefined,
});
```

```typescript title="Methods"
import { TodoResource } from './api/Todo';

// GET https://jsonplaceholder.typicode.com/todos/5
TodoResource.get({ id: 5 });
// GET https://jsonplaceholder.typicode.com/todos
TodoResource.getList();
// GET https://jsonplaceholder.typicode.com/todos?userId=1
TodoResource.getList({ userId: 1 });
// POST https://jsonplaceholder.typicode.com/todos
TodoResource.create({ title: 'my todo' });
// PUT https://jsonplaceholder.typicode.com/todos/5
TodoResource.update({ id: 5 }, { title: 'my todo' });
// PATCH https://jsonplaceholder.typicode.com/todos/5
TodoResource.partialUpdate({ id: 5 }, { title: 'my todo' });
// DELETE https://jsonplaceholder.typicode.com/todos/5
TodoResource.delete({ id: 5 });
```

</TypeScriptEditor>

  </TabItem>
  <TabItem value="gql">

  <PkgInstall pkgs="@data-client/graphql" />

<TypeScriptEditor row={false}>

```typescript title="api/Todo"
import { GQLEndpoint, GQLEntity } from '@data-client/graphql';

const gql = new GQLEndpoint('/');

export class Todo extends GQLEntity {
  title = '';
  completed = false;

  static key = 'Todo';
}

export const TodoResource = {
  getList: gql.query(
    `
  query GetTodos {
    todo {
      id
      title
      completed
    }
  }
`,
    { todos: new schema.Collection([Todo]) },
  ),
  update: gql.mutation(
    `mutation UpdateTodo($todo: Todo!) {
    updateTodo(todo: $todo) {
      id
      title
      completed
    }
  }`,
    { updateTodo: Todo },
  ),
};
```

</TypeScriptEditor>

  </TabItem>
  <TabItem value="other">

  <PkgInstall pkgs="@data-client/endpoint" />

In case you have existing class and/or api definitions, you can use
[Endpoint](/rest/api/Endpoint) and [schema.Entity](/rest/api/schema.Entity) to make them useable in RDC.

<TypeScriptEditor row={false}>

```typescript title="existing/Todo"
export class Todo {
  id = 0;
  userId = 0;
  title = '';
  completed = false;
}

/* These are just examples but it could be any promise API */
export const getTodo = (id: string) =>
  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>
    res.json(),
  );

export const getTodoList = () =>
  fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json());

export const updateTodo = (id: string, body: Partial<Todo>) =>
  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    method: 'PUT',
    body: JSON.stringify(body),
  }).then(res => res.json());

export const createTodo = (body: Partial<Todo>) =>
  fetch(`https://jsonplaceholder.typicode.com/todos`, {
    method: 'POST',
    body: JSON.stringify(body),
  }).then(res => res.json());
```

```typescript title="api/Todo"
import { schema, Endpoint } from '@data-client/endpoint';
import {
  Todo,
  getTodo,
  getTodoList,
  updateTodo,
  createTodo,
} from '../existing/Todo';

export const TodoEntity = schema.Entity(Todo, { key: 'Todo' });

export const TodoResource = {
  get: new Endpoint(getTodo, { schema: TodoEntity }),
  getList: new Endpoint(getTodoList, {
    schema: new schema.Collection([TodoEntity]),
  }),
  update: new Endpoint(updateTodo, { schema: TodoEntity, sideEffect: true }),
  create: new Endpoint(createTodo, { schema: TodoEntity, sideEffect: true }),
};
```

</TypeScriptEditor>

  </TabItem>
</Tabs>

<!--
  <TabItem value="sse">

```ts
import type { Manager, Middleware } from '@data-client/core';
import type { EndpointInterface } from '@data-client/endpoint';

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
            controller.setResponse(
              this.endpoints[msg.type],
              ...msg.args,
              msg.data,
            );
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

  </TabItem>
<TabItem value="img">

<PkgInstall pkgs="@data-client/img" />

</TabItem>
-->

It's highly encouraged to design APIs with consistent patterns. Because of this,
you can extend our protocol specific helpers. After choosing your protocol, you can
read up on the full docs for reach protocol [REST](/rest), [GraphQL](/graphql),
[Image/binary](../guides/img-media.md), [Websockets+SSE](../api/Manager.md#middleware-data-stream)

To use your own protocol or existing helpers, use the lower-level primitives from
[@data-client/endpoint](https://www.npmjs.com/package/@data-client/endpoint) like [Endpoint](/rest/api/Endpoint) and [schema.Entity](/rest/api/schema.Entity).
[See `Promise` tab above]
