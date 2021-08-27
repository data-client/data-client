---
id: unit-testing-hooks
title: Unit testing hooks
original_id: unit-testing-hooks
---

Hooks allow you to pull complex behaviors out of your components into succinct,
composable functions. This makes testing component behavior potentially much
easier. But how does this work if you want to use hooks from `rest-hooks`?

We have provided some simple utilities to reduce boilerplate for unit tests
that are wrappers around [@testing-library/react-hooks](https://github.com/testing-library/react-hooks-testing-library)'s [renderHook()](https://react-hooks-testing-library.com/reference/api#renderhook-options).

We want a [renderRestHook()](../api/makeRenderRestHook#renderresthook) function that renders in the context of both
a `Provider` and `Suspense` boundary.

To support both providers, you must choose among two provider-generators to
send as args to the [renderRestHook()](../api/makeRenderRestHook#renderresthook) generator.

These will generally be done during test setup. It's important to call cleanup
upon test completion.

> Note:
>
> `renderRestHook()` creates a Provider context with new manager instances. This means each call
> to `renderRestHook()` will result in a completely fresh cache state as well as manager state.

### Example:

<!--DOCUSAURUS_CODE_TABS-->

<!--CacheProvider-->

```typescript
import nock from 'nock';
import { makeRenderRestHook, makeCacheProvider } from '@rest-hooks/test';

describe('useResource()', () => {
  let renderRestHook: ReturnType<typeof makeRenderRestHook>;

  beforeEach(() => {
    nock('http://test.com')
      .get(`/article/0`)
      .reply(403, {});
    renderRestHook = makeRenderRestHook(makeCacheProvider);
  });

  afterEach(() => {
    renderRestHook.cleanup();
  });

  it('should throw errors on bad network', async () => {
    const { result, waitForNextUpdate } = renderRestHook(() => {
      return useResource(ArticleResource.detailShape(), {
        title: '0',
      });
    });
    expect(result.current).toBe(null);
    await waitForNextUpdate();
    expect(result.error).toBeDefined();
    expect((result.error as any).status).toBe(403);
  });
});
```

<!--ExternalCacheProvider-->

```typescript
import nock from 'nock';
import { makeRenderRestHook, makeExternalCacheProvider } from '@rest-hooks/test';

describe('useResource()', () => {
  let renderRestHook: ReturnType<typeof makeRenderRestHook>;

  beforeEach(() => {
    nock('http://test.com')
      .get(`/article/0`)
      .reply(403, {});
    renderRestHook = makeRenderRestHook(makeExternalCacheProvider);
  });

  afterEach(() => {
    renderRestHook.cleanup();
  });

  it('should throw errors on bad network', async () => {
    const { result, waitForNextUpdate } = renderRestHook(() => {
      return useResource(ArticleResource.detailShape(), {
        title: '0',
      });
    });
    expect(result.current).toBe(null);
    await waitForNextUpdate();
    expect(result.error).toBeDefined();
    expect((result.error as any).status).toBe(403);
  });
});
```

<!--END_DOCUSAURUS_CODE_TABS-->
