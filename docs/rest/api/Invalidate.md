---
title: schema.Invalidate - Invalidating Entities
sidebar_label: schema.Invalidate
---

import HooksPlayground from '@site/src/components/HooksPlayground';
import { RestEndpoint } from '@data-client/rest';

# schema.Invalidate

Describes entities to be marked as [INVALID](/docs/concepts/expiry-policy#invalid). This removes items from a
collection, or [forces suspense](/docs/concepts/expiry-policy#any-endpoint-with-an-entity) for endpoints where the entity is required. 

Constructor:

- `entity` which entity to invalidate. The input is used to compute the pk() for lookup.

## Usage

<HooksPlayground groupId="schema" defaultOpen="y" fixtures={[
{
endpoint: new RestEndpoint({path: '/users'}),
args: [],
response: [
    { id: '123', name: 'Jim' },
    { id: '456', name: 'Jane' },
    { id: '555', name: 'Phone' },
  ],
delay: 150,
},
{
  endpoint: new RestEndpoint({path: '/users/:id', method: 'DELETE' }),
  response({id}) {
    return {id}
  },
  delay: 150,
}
]}>

```typescript title="api/User"
import { Entity, RestEndpoint } from '@data-client/rest';

class User extends Entity {
  id = '';
  name = '';
  pk() {
    return this.id;
  }
}
export const getUsers = new RestEndpoint({
  path: '/users',
  schema: new schema.Collection([User]),
});
export const deleteUser = new RestEndpoint({
  path: '/users/:id',
  method: 'DELETE',
  schema: new schema.Invalidate(User),
});
```

```tsx title="UserPage"
import { getUsers, deleteUser } from './api/User';

function UsersPage() {
  const users = useSuspense(getUsers);
  const ctrl = useController();
  return (
    <div>
      {users.map(user => (
        <div key={user.pk()}>
          {user.name}{' '}
          <span
            style={{ cursor: 'pointer' }}
            onClick={() => ctrl.fetch(deleteUser, { id: user.id })}
          >
            ❌
          </span>
        </div>
      ))}
    </div>
  );
}
render(<UsersPage />);
```

</HooksPlayground>

### Batch Invalidation

Here we add another endpoint for deleting many entities at a time. Here we
pass in a list of ids, and the response is an empty string.

Constructing an article response using the `params` argument in fetch empowers
the normalized cache to know which entities to invalidate when the request is success,
or if optimistic updates are used.

```typescript
import { Resource, schema } from '@data-client/rest';

class MyResource extends Resource {
  static deleteList<T extends typeof MyResource>(this: T) {
    const init = this.getFetchInit({ method: 'DELETE' });
    return new Endpoint(
      (params: readonly string[]) =>
        this.fetch(this.url(params).then(() => params.map(id => ({ id })))),
      {
        ...this.getEndpointExtra(),
        schema: [new schemas.Invalidate(this)],
      },
    );
  }
}
```

```tsx
function MyTable() {
  const { selectedIds } = useFields(TableForm);
  const list = useSuspense(MyResource.list());
  const ctrl = useController();

  return (
    <div>
      <header>
        <span>My Table</span>
        <button onClick={() => ctrl.fetch(MyResource.delete, selectedIds)}>
          Delete
        </button>
      </header>
      <TableBody data={list} form={TableForm} />
    </div>
  );
}
```

### Impact on useSuspense()

When entities are invalidated in a result currently being presented in React, useSuspense()
will consider them invalid

- For optional Entities, they are simply removed
- For required Entities, this invalidates the entire response re-triggering suspense.
