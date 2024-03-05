---
id: createResource
title: createResource
---

<head>
  <title>createResource() - TypeScript definition for REST API resources</title>
  <meta name="docsearch:pagerank" content="30"/>
</head>

import LanguageTabs from '@site/src/components/LanguageTabs';
import StackBlitz from '@site/src/components/StackBlitz';
import EndpointPlayground from '@site/src/components/HTTP/EndpointPlayground';
import TypeScriptEditor from '@site/src/components/TypeScriptEditor';
import DeleteProcess from './_DeleteProcess.mdx';

`Resources` are a collection of [RestEndpoints](./RestEndpoint.md) that operate on a common
data by sharing a [schema](./schema.md)

## Usage

```ts title="api/TodoResource.ts"
export class Todo extends Entity {
  id = '';
  title = '';
  completed = false;
  pk() {
    return this.id;
  }
  static key = 'Todo';
}

const TodoResource = createResource({
  urlPrefix: 'https://jsonplaceholder.typicode.com',
  path: '/todos/:id',
  schema: Todo,
});
```

```ts title="Resources start with 6 Endpoints"
const todo = useSuspense(TodoResource.get, { id: '5' });
const todos = useSuspense(TodoResource.getList);
controller.fetch(TodoResource.getList.push, {
  title: 'finish installing reactive data client',
});
controller.fetch(
  TodoResource.update,
  { id: '5' },
  { ...todo, completed: true },
);
controller.fetch(
  TodoResource.partialUpdate,
  { id: '5' },
  { completed: true },
);
controller.fetch(TodoResource.delete, { id: '5' });
```

## Arguments

```ts
{
  path: string;
  schema: Schema;
  urlPrefix?: string;
  body?: any;
  searchParams?: any;
  paginationField?: string;
  optimistic?: boolean;
  Endpoint?: typeof RestEndpoint;
  Collection?: typeof Collection;
} & EndpointExtraOptions
```

### path

Passed to [RestEndpoint.path](./RestEndpoint.md#path)

### schema

Passed to [RestEndpoint.schema](./RestEndpoint.md#schema)

### urlPrefix

Passed to [RestEndpoint.urlPrefix](./RestEndpoint.md#urlPrefix)

### searchParams

Passed to [RestEndpoint.searchParams](./RestEndpoint.md#searchParams) for [getList](#getlist) and [getList.push](#push)

### body

Passed to [RestEndpoint.body](./RestEndpoint.md#body) for [getList.push](#push) [update](#update) and [partialUpdate](#partialupdate)

### paginationField

If specified, will add [Resource.getList.getPage](#getpage) method on the `Resource`.

### optimistic

`true` makes all mutation endpoints [optimistic](../guides/optimistic-updates.md), making <abbr title="User Interface">UI</abbr>
updates immediate, even before fetch completion.

### Endpoint

Class used to construct the members.

```ts
import { RestEndpoint } from '@data-client/rest';

export default class AuthdEndpoint<
  O extends RestGenerics = any,
> extends RestEndpoint<O> {
  async getRequestInit(body: any): Promise<RequestInit> {
    return {
      ...(await super.getRequestInit(body)),
      credentials: 'same-origin',
    };
  }
}
const TodoResource = createResource({
  path: '/todos/:id',
  schema: Todo,
  // highlight-next-line
  Endpoint: AuthdEndpoint,
});
```

### Collection

[Collection Class](./Collection.md) used to construct [getList](#getlist) schema.

```ts
import { schema, createResource } from '@data-client/rest';

class MyCollection<
  S extends any[] | PolymorphicInterface = any,
  Parent extends any[] = [urlParams: any, body?: any],
> extends schema.Collection<S, Parent> {
  // getList.push should add to Collections regardless of its 'orderBy' argument
  // in other words: `orderBy` is a non-filtering argument - it does not influence which results are returned
  nonFilterArgumentKeys(key: string) {
    return key === 'orderBy';
  }
}
const TodoResource = createResource({
  path: '/todos/:id',
  searchParams: {} as { userId?: string; orderBy?: string } | undefined,
  schema: Todo,
  // highlight-next-line
  Collection: MyCollection,
});
```

### [EndpointExtraOptions](./RestEndpoint.md#endpoint-life-cycles)

## Members

These provide the standard [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete)
[endpoints](./Endpoint.md)s common in [REST](https://www.restapitutorial.com/) APIs. Feel free to [customize or add
new endpoints](#extend-new) based to match your API.

```ts
const PostResource = createResource({
  schema: Post,
  path: '/:group/posts/:id',
  searchParams: {} as { author?: string },
  paginationField: 'page',
});
```

| Name                        | Method                                                                     | Args                                                | Schema                                                |
| --------------------------- | -------------------------------------------------------------------------- | --------------------------------------------------- | ----------------------------------------------------- |
| [get](#get)                 | [GET](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET)       | `[{group: string; id: string}]`                     | [Post](./Entity.md)                                   |
| [getList](#getlist)         | [GET](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET)       | `[{group: string; author?: string}]`                | [Collection([Post])](./Collection.md)                 |
| [getList.push](#push)       | [POST](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST)     | `[{group: string; author?: string}, Partial<Post>]` | [Collection([Post]).push](./Collection.md#push)       |
| [getList.unshift](#unshift) | [POST](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST)     | `[{group: string; author?: string}, Partial<Post>]` | [Collection([Post]).unshift](./Collection.md#unshift) |
| [getList.getPage](#getpage) | [GET](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET)       | `[{group: string; author?: string; page: string}]`  | [Collection([Post]).addWith](./Collection.md#addWith) |
| [update](#update)           | [PUT](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PUT)       | `[{group: string; id: string }, Partial<Post>]`     | [Post](./Entity.md)                                   |
| [partialUpdate](#update)    | [PATCH](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PATCH)   | `[{group: string; id: string }, Partial<Post>]`     | [Post](./Entity.md)                                   |
| [delete](#delete)           | [DELETE](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/DELETE) | `[{group: string; id: string }]`                    | [Invalidate(Post)](./Invalidate.md)                   |

### get

Retrieve a singular entity.

<EndpointPlayground input="/react/posts/1" init={{method: 'GET', headers: {'Content-Type': 'application/json'}}} status={200} response={{  "id": "1","group": "react","title": "this post",author: 'clara',}}>

```typescript title="Post" collapsed
export default class Post extends Entity {
  id = '';
  title = '';
  group = '';
  author = '';
  pk() {
    return this.id;
  }
}
```

```typescript title="Resource"
import Post from './Post';
export const PostResource = createResource({
  schema: Post,
  path: '/:group/posts/:id',
  searchParams: {} as { author?: string },
});
```

```typescript title="Request" column
import { PostResource } from './Resource';
PostResource.get({
  group: 'react',
  id: '1',
});
```

</EndpointPlayground>

| Field  | Value             |
| :----: | ----------------- |
| method | 'GET'             |
|  path  | [path](#path)     |
| schema | [schema](#schema) |

Commonly used with [useSuspense()](/docs/api/useSuspense), [Controller.invalidate](/docs/api/Controller#invalidate), [Controller.expireAll](/docs/api/Controller#expireAll)

### getList

Retrieve a list of entities.

<EndpointPlayground input="/react/posts?author=clara" init={{method: 'GET', headers: {'Content-Type': 'application/json'}}} status={200} response={[{ "id": "1","group": "react","title": "this post",author: 'clara',}]}>

```typescript title="Post" collapsed
export default class Post extends Entity {
  id = '';
  title = '';
  group = '';
  author = '';
  pk() {
    return this.id;
  }
}
```

```typescript title="Resource"
import Post from './Post';
export const PostResource = createResource({
  schema: Post,
  path: '/:group/posts/:id',
  searchParams: {} as { author?: string },
});
```

```typescript title="Request" column
import { PostResource } from './Resource';
PostResource.getList({
  group: 'react',
  author: 'clara',
});
```

</EndpointPlayground>

|      Field      | Value                                                |
| :-------------: | ---------------------------------------------------- |
|     method      | 'GET'                                                |
|      path       | removeLastArg([path](#path))                         |
|  searchParams   | [searchParams](#searchparams)                        |
| paginationField | [paginationField](#paginationfield)                  |
|     schema      | [new schema.Collection(\[schema\])](./Collection.md) |

<!-- prettier-ignore-start -->
```ts
createResource({ path: '/:first/:second' }).getList.path === '/:first';
createResource({ path: '/:first' }).getList.path === '/';
```
<!-- prettier-ignore-end -->

Commonly used with [useSuspense()](/docs/api/useSuspense), [Controller.invalidate](/docs/api/Controller#invalidate), [Controller.expireAll](/docs/api/Controller#expireAll)

### getList.push {#push}

[RestEndpoint.push](./RestEndpoint.md#push) creates a new entity and pushes it to the end of getList. Use [getList.unshift](#unshift)
to place at the beginning instead.

<EndpointPlayground input="/react/posts?author=clara" init={{method: 'POST', headers: {'Content-Type': 'application/json', Body: JSON.stringify({ "title": "winning" })}}} status={201} response={{  "id": "2","group": "react","title": "winning",author: 'clara',}}>

```typescript title="Post" collapsed
export default class Post extends Entity {
  id = '';
  title = '';
  group = '';
  author = '';
  pk() {
    return this.id;
  }
}
```

```typescript title="Resource"
import Post from './Post';
export const PostResource = createResource({
  schema: Post,
  path: '/:group/posts/:id',
  searchParams: {} as { author?: string },
});
```

```typescript title="Request" column
import { PostResource } from './Resource';
PostResource.getList.push(
  { group: 'react', author: 'clara' },
  { title: 'winning' },
);
```

</EndpointPlayground>

|    Field     | Value                                       |
| :----------: | ------------------------------------------- |
|    method    | 'POST'                                      |
|     path     | removeLastArg([path](#path))                |
| searchParams | [searchParams](#searchparams)               |
|     body     | [body](#body)                               |
|    schema    | getList.[schema.push](./Collection.md#push) |

Commonly used with [Controller.fetch](/docs/api/Controller#fetch)

### getList.unshift {#unshift}

[RestEndpoint.unshift](./RestEndpoint.md#unshift) creates a new entity and pushes it to the beginning of getList.

<EndpointPlayground input="/react/posts?author=clara" init={{method: 'POST', headers: {'Content-Type': 'application/json', Body: JSON.stringify({ "title": "winning" })}}} status={201} response={{  "id": "2","group": "react","title": "winning",author: 'clara',}}>

```typescript title="Post" collapsed
export default class Post extends Entity {
  id = '';
  title = '';
  group = '';
  author = '';
  pk() {
    return this.id;
  }
}
```

```typescript title="Resource"
import Post from './Post';
export const PostResource = createResource({
  schema: Post,
  path: '/:group/posts/:id',
  searchParams: {} as { author?: string },
});
```

```typescript title="Request" column
import { PostResource } from './Resource';
PostResource.getList.unshift(
  { group: 'react', author: 'clara' },
  { title: 'winning' },
);
```

</EndpointPlayground>

|    Field     | Value                                             |
| :----------: | ------------------------------------------------- |
|    method    | 'POST'                                            |
|     path     | removeLastArg([path](#path))                      |
| searchParams | [searchParams](#searchparams)                     |
|     body     | [body](#body)                                     |
|    schema    | getList.[schema.unshift](./Collection.md#unshift) |

Commonly used with [Controller.fetch](/docs/api/Controller#fetch)

### getList.getPage {#getpage}

[RestEndpoint.getPage](./RestEndpoint.md#getpage) retrieves another [page](../guides/pagination.md#infinite-scrolling) appending to getList ensuring there are no duplicates.

This member is only available when [paginationField](#paginationfield) is specified.

<EndpointPlayground input="/react/posts?author=clara&page=2" init={{method: 'GET', headers: {'Content-Type': 'application/json'}}} status={200} response={[{ "id": "5","group": "react","title": "second page",author: 'clara',}]}>

```typescript title="Post" collapsed
export default class Post extends Entity {
  id = '';
  title = '';
  group = '';
  author = '';
  pk() {
    return this.id;
  }
}
```

```typescript title="Resource"
import Post from './Post';
export const PostResource = createResource({
  schema: Post,
  path: '/:group/posts/:id',
  searchParams: {} as { author?: string },
  paginationField: 'page',
});
```

```typescript title="Request" column
import { PostResource } from './Resource';
PostResource.getList.getPage({
  group: 'react',
  author: 'clara',
  page: 2,
});
```

</EndpointPlayground>

|      Field      | Value                                               |
| :-------------: | --------------------------------------------------- |
|     method      | 'GET'                                               |
|      path       | removeLastArg([path](#path))                        |
|  searchParams   | [searchParams](#searchparams)                       |
| paginationField | [paginationField](#paginationfield)                 |
|     schema      | [getList.schema.addWith](./RestEndpoint.md#getpage) |

args: `PathToArgs(shortenPath(path)) & searchParams & \{ [paginationField]: string | number \}`

Commonly used with [Controller.fetch](/docs/api/Controller#fetch)

### update

Update an entity.

<EndpointPlayground input="/react/posts/1" init={{method: 'PUT', headers: {'Content-Type': 'application/json', Body: JSON.stringify({ "title": "updated title", author: 'clara' })}}} status={200} response={{  "id": "1","group": "react","title": "updated title",author: 'clara',}}>

```typescript title="Post" collapsed
export default class Post extends Entity {
  id = '';
  title = '';
  group = '';
  author = '';
  pk() {
    return this.id;
  }
}
```

```typescript title="Resource"
import Post from './Post';
export const PostResource = createResource({
  schema: Post,
  path: '/:group/posts/:id',
  searchParams: {} as { author?: string },
});
```

```typescript title="Request" column
import { PostResource } from './Resource';
PostResource.update(
  { group: 'react', id: '1' },
  { title: 'updated title', author: 'clara' },
);
```

</EndpointPlayground>

| Field  | Value             |
| :----: | ----------------- |
| method | 'PUT'             |
|  path  | [path](#path)     |
|  body  | [body](#body)     |
| schema | [schema](#schema) |

Commonly used with [Controller.fetch](/docs/api/Controller#fetch)

### partialUpdate

Update some subset of fields of an entity.

<EndpointPlayground input="/react/posts/1" init={{method: 'PATCH', headers: {'Content-Type': 'application/json', Body: JSON.stringify({ "title": "updated title" })}}} status={200} response={{  "id": "1","group": "react","title": "updated title",author: 'clara',}}>

```typescript title="Post" collapsed
export default class Post extends Entity {
  id = '';
  title = '';
  group = '';
  author = '';
  pk() {
    return this.id;
  }
}
```

```typescript title="Resource"
import Post from './Post';
export const PostResource = createResource({
  schema: Post,
  path: '/:group/posts/:id',
  searchParams: {} as { author?: string },
});
```

```typescript title="Request" column
import { PostResource } from './Resource';
PostResource.partialUpdate(
  { group: 'react', id: '1' },
  { title: 'updated title' },
);
```

</EndpointPlayground>

| Field  | Value             |
| :----: | ----------------- |
| method | 'PATCH'           |
|  path  | [path](#path)     |
|  body  | [body](#body)     |
| schema | [schema](#schema) |

Commonly used with [Controller.fetch](/docs/api/Controller#fetch)

### delete

Deletes an entity.

<EndpointPlayground input="/react/posts/1" init={{method: 'DELETE', headers: {'Content-Type': 'application/json', }}} status={200} response={{ "id": "1" }}>

```typescript title="Post" collapsed
export default class Post extends Entity {
  id = '';
  title = '';
  group = '';
  author = '';
  pk() {
    return this.id;
  }
}
```

```typescript title="Resource"
import Post from './Post';
export const PostResource = createResource({
  schema: Post,
  path: '/:group/posts/:id',
  searchParams: {} as { author?: string },
});
```

```typescript title="Request" column
import { PostResource } from './Resource';
PostResource.delete({ group: 'react', id: '1' });
```

</EndpointPlayground>

|  Field  | Value                                            |
| :-----: | ------------------------------------------------ |
| method  | 'DELETE'                                         |
|  path   | [path](#path)                                    |
| schema  | [new schema.Invalidate(schema)](./Invalidate.md) |
| process | <DeleteProcess />                                |

Commonly used with [Controller.fetch](/docs/api/Controller#fetch)

#### Response

```json
{ "id": "xyz" }
```

Response should either be the [pk](./Entity.md#pk) as a string (like `'xyz'`). Or an object with the members needed to compute
[Entity.pk](./Entity.md#pk) (like `{id: 'xyz'}`).

If no response is provided, the `process` implementation will attempt to use the url parameters sent as an object to compute
the [Entity.pk](./Entity.md#pk). This enables the default implementation to still work with no response, so long as standard
arguments are used.

This allows [schema.Invalidate](./Invalidate.md) to remove the entity from the [entity table](/docs/concepts/normalization)

### extend() {#extend}

`createResource` builds a great starting point, but often endpoints need to be [further customized](./RestEndpoint.md#typing).

`extend()` is polymorphic with three forms:

#### Batch extension of known members {#extend-override}

```ts
export const CommentResource = createResource({
  path: '/repos/:owner/:repo/issues/comments/:id',
  schema: Comment,
}).extend({
  getList: { path: '/repos/:owner/:repo/issues/:number/comments' },
  update: { body: { body: '' } },
});
```

#### Adding new members {#extend-new}

```ts
export const UserResource = createGithubResource({
  path: '/users/:login',
  schema: User,
}).extend('current', {
  path: '/user',
  schema: User,
});
```

#### Function form (to get BaseResource/super) {#extend-function}

```ts
export const IssueResource= createResource({
  path: '/repos/:owner/:repo/issues/:number',
  schema: Issue,
  pollFrequency: 60000,
  searchParams: {} as IssueFilters | undefined,
}).extend(BaseResource => ({
  search: BaseResource.getList.extend({
    path: '/search/issues\\?q=:q?%20repo\\::owner/:repo&page=:page?',
    schema: {
      results: {
        incompleteResults: false,
        items: BaseIssueResource.getList.schema.results,
        totalCount: 0,
      },
      link: '',
    },
  })
)});
```

#### Github CommentResource

<StackBlitz app="github-app" file="src/pages/IssueDetail/CommentsList.tsx,src/resources/Comment.ts" initialpath="/reactjs/rfcs/issue/68" view="editor" height={600} />

## Function Inheritance Patterns

To reuse code around `Resource` design, you can create your own function that calls createResource().
This has similar effects as class-based inheritance.

```typescript
import {
  createResource,
  RestEndpoint,
  type EndpointExtraOptions,
  type RestGenerics,
  type ResourceGenerics,
  type ResourceOptions,
} from '@data-client/rest';

export class AuthdEndpoint<
  O extends RestGenerics = any,
> extends RestEndpoint<O> {
  async getRequestInit(body: any): Promise<RequestInit> {
    return {
      ...(await super.getRequestInit(body)),
      credentials: 'same-origin',
    };
  }
}

export function createMyResource<O extends ResourceGenerics = any>({
  schema,
  Endpoint = AuthdEndpoint,
  ...extraOptions
}: Readonly<O> & ResourceOptions) {
  return createResource({
    Endpoint,
    schema,
    ...extraOptions,
  }).extend({
    getList: {
      schema: {
        results: new schema.Collection([schema]),
        total: 0,
        limit: 0,
        skip: 0,
      },
    },
  });
}
```

#### Github Example

<StackBlitz app="github-app" file="src/resources/Base.ts" view="editor" height={750} />
