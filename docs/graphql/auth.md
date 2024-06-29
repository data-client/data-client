---
title: GraphQL Authentication patterns for Reactive Data Client
sidebar_label: Authentication
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# GraphQL Authentication

## Cookie Auth

Here's an example using simple cookie auth:

```ts title="schema/endpoint.ts"
export const gql = new GQLEndpoint('https://nosy-baritone.glitch.me', {
  getRequestInit(body: any): Promise<RequestInit> {
    return {
      ...super.getRequestInit(body),
      credentials: 'same-origin',
    };
  }
});
export default gql;
```

## Access Tokens

Here we'll use a member variable to track the access token and send it
in a header.

```ts title="schema/endpoint.ts"
export const gql = new GQLEndpoint('https://nosy-baritone.glitch.me', {
  getHeaders(headers: HeadersInit): HeadersInit {
    return {
      ...headers,
      'Access-Token': this.accessToken,
    };
  },
});
export default gql;
```

Then be sure to set the access token upon login:

```ts
import gql from 'schema/endpoint';

function Auth() {
  const handleLogin = useCallback(
    async e => {
      const { accessToken } = await login(new FormData(e.target));
      // success!
      // highlight-next-line
      gql.accessToken = accessToken;
    },
    [login],
  );

  return <AuthForm onSubmit={handleLogin} />;
}
```

## 401 Logout Handling

In case a users authorization expires, the server will typically responsd to indicate
as such. The standard way of doing this is with a 401. [LogoutManager](/docs/api/LogoutManager)
can be used to easily trigger any de-authorization cleanup.
