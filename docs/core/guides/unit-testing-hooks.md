---
title: Unit testing hooks
---

import PkgTabs from '@site/src/components/PkgTabs';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::warning

Be careful when using [jest.mock](https://jestjs.io/docs/jest-object#jestmockmodulename-factory-options) on modules like Reactive Data Client. Eliminating expected
exports can lead to hard-to trace
errors like `TypeError: Class extends value undefined is not a function or null`.

Instead either do a [partial mock](https://jestjs.io/docs/mock-functions#mocking-partials),
or better [mockResolvedValue](https://jestjs.io/docs/mock-functions#mocking-modules) on your
endpoints.

:::

Hooks allow you to pull complex behaviors out of your components into succinct,
composable functions. This makes testing component behavior potentially much
easier. But how does this work if you want to use hooks from `Reactive Data Client`?

We have provided some simple utilities to reduce boilerplate for unit tests
that are wrappers around [@testing-library/react-hooks](https://github.com/testing-library/react-hooks-testing-library)'s [renderHook()](https://react-hooks-testing-library.com/reference/api#renderhook-options).

We want a [renderDataHook()](../api/renderDataHook.md) function that renders in the context of both
a `Provider` and `Suspense` boundary.

These will generally be done during test setup. It's important to call cleanup
upon test completion.

:::note

`renderDataHook()` creates a Provider context with new manager instances. This means each call
to `renderDataHook()` will result in a completely fresh cache state as well as manager state.

:::

### Polyfill fetch in node

Node doesn't come with fetch out of the box, so we need to be sure to polyfill it.

<PkgTabs pkgs="whatwg-fetch" dev />

### Jest

```js
// jest.config.js
module.exports = {
  // other things
  setupFiles: ['./testSetup.js'],
};
```

```js
// testSetup.js
require('whatwg-fetch');
```

### Example:

<Tabs
defaultValue="DataProvider"
values={[
{ label: '@data-client/react', value: 'DataProvider' },
{ label: '@data-client/react/redux', value: 'ExternalDataProvider' },
]}>
<TabItem value="DataProvider">

```typescript
import nock from 'nock';
import { renderDataHook } from '@data-client/test';

describe('useSuspense()', () => {
  beforeEach(() => {
    nock(/.*/)
      .persist()
      .defaultReplyHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      })
      .options(/.*/)
      .reply(200)
      .get(`/article/0`)
      .reply(403, {});
  });

  afterEach(() => {
    nock.cleanAll();
  });

  it('should throw errors on bad network', async () => {
    const { result, waitFor } = renderDataHook(() => {
      return useSuspense(ArticleResource.get, {
        title: '0',
      });
    });
    expect(result.current).toBeUndefined();
    await waitFor(() => expect(result.current).toBeDefined());
    expect(result.error).toBeDefined();
    expect((result.error as any).status).toBe(403);
  });
});
```

</TabItem>
<TabItem value="ExternalDataProvider">

```typescript
import nock from 'nock';
import { makeRenderDataHook } from '@data-client/test';
import { DataProvider } from '@data-client/react/redux';

describe('useSuspense()', () => {
  let renderDataHook: ReturnType<typeof makeRenderDataHook>;

  beforeEach(() => {
    nock(/.*/)
      .persist()
      .defaultReplyHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      })
      .options(/.*/)
      .reply(200)
      .get(`/article/0`)
      .reply(403, {});
    renderDataHook = makeRenderDataHook(DataProvider);
  });

  afterEach(() => {
    nock.cleanAll();
  });

  it('should throw errors on bad network', async () => {
    const { result, waitFor } = renderDataHook(() => {
      return useSuspense(ArticleResource.get, {
        title: '0',
      });
    });
    expect(result.current).toBeUndefined();
    await waitFor(() => expect(result.current).toBeDefined());
    expect(result.error).toBeDefined();
    expect((result.error as any).status).toBe(403);
  });
});
```

</TabItem>
</Tabs>
