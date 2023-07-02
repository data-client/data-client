# ![🛌🎣 Data Client Testing](../../packages/data-client/rest_hooks_logo_and_text.svg?sanitize=true)

[![Coverage Status](https://img.shields.io/codecov/c/gh/data-client/data-client/master.svg?style=flat-square)](https://app.codecov.io/gh/data-client/data-client?branch=master)

<div align="center">

**[🏁Guides](https://dataclient.io/docs/guides/storybook)** &nbsp;|&nbsp; [🏁API Reference](https://dataclient.io/docs/api/makeRenderRestHook)

</div>

## Features

- [x] [Mocking for Storybook](https://dataclient.io/docs/guides/storybook)
- [x] [Fixtures for component tests](https://dataclient.io/docs/guides/unit-testing-components)
- [x] [Hook unit testing utility](https://dataclient.io/docs/guides/unit-testing-hooks)

## Usage

<details>
<summary><b>Resource</b></summary>

```typescript
import { Resource } from '@data-client/rest';

export default class ArticleResource extends Resource {
  readonly id: number | undefined = undefined;
  readonly content: string = '';
  readonly author: number | null = null;
  readonly contributors: number[] = [];

  pk() {
    return this.id?.toString();
  }
  static urlRoot = 'http://test.com/article/';
}
```

</details>

<details>
<summary><b>Fixtures</b></summary>

```typescript
export default {
  full: [
    {
      request: ArticleResource.list(),
      params: { maxResults: 10 },
      result: [
        {
          id: 5,
          content: 'have a merry christmas',
          author: 2,
          contributors: [],
        },
        {
          id: 532,
          content: 'never again',
          author: 23,
          contributors: [5],
        },
      ],
    },
  ],
  empty: [
    {
      request: ArticleResource.list(),
      params: { maxResults: 10 },
      result: [],
    },
  ],
  error: [
    {
      request: ArticleResource.list(),
      params: { maxResults: 10 },
      result: { message: 'Bad request', status: 400, name: 'Not Found' },
      error: true,
    },
  ],
  loading: [],
};
```

</details>

<details open><summary><b>Storybook</b></summary>

```typescript
import { MockResolver } from '@data-client/test';
import type { Fixture } from '@data-client/test';
import { Story } from '@storybook/react/types-6-0';

import ArticleList from 'ArticleList';
import options from './fixtures';

export default {
  title: 'Pages/ArticleList',
  component: ArticleList,
};

export const FullArticleList = ({ result }) => (
  <MockResolver fixtures={options[result]}>
    <ArticleList maxResults={10} />
  </MockResolver>
);
```

</details>

<details open><summary><b>Hook Unit Test</b></summary>

```typescript
import { CacheProvider } from '@data-client/react';
import { makeRenderRestHook } from '@data-client/test';
import options from './fixtures';

const renderRestHook = makeRenderRestHook(CacheProvider);

it('should resolve list', async () => {
  const { result } = renderRestHook(
    () => {
      return useSuspense(ArticleResource.list(), {
        maxResults: 10,
      });
    },
    { initialFixtures: options.full },
  );
  expect(result.current).toBeDefined();
  expect(result.current.length).toBe(2);
  expect(result.current[0]).toBeInstanceOf(ArticleResource);
});

it('should throw errors on bad network', async () => {
  const { result } = renderRestHook(
    () => {
      return useSuspense(ArticleResource.list(), {
        maxResults: 10,
      });
    },
    { initialFixtures: options.error },
  );
  expect(result.error).toBeDefined();
  expect((result.error as any).status).toBe(400);
});
```

</details>
