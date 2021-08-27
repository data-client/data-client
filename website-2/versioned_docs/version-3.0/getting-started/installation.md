---
id: installation
title: Installation
original_id: installation
slug: /
---

Rest Hooks is a library for fetching structured data in a performant way with no boilerplate.

Its interface is declarative and minimal. A small structure declaration is all that is needed
for Rest Hooks to perform numerous fetching and caching optimizations while providing predictable,
precisely-typed data to consume.

Structured data means data composed of [Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
([maps](https://en.wikipedia.org/wiki/Associative_array))
and [Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
([lists](https://en.wikipedia.org/wiki/List_(abstract_data_type))), as opposed media
like images and videos. This makes it great for API calls regardless of form ([REST-like](https://restfulapi.net/),
[GraphQL](https://graphql.org/), [gRPC](https://grpc.io/)), serialization ([JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON), [YAML](https://en.wikipedia.org/wiki/YAML)),
or transport ([HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview), [WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API), [local](../guides/mocking-unfinished)).

## Install rest-hooks

Install the rest-hooks package into your project using [yarn](https://yarnpkg.com/en/)

<!--DOCUSAURUS_CODE_TABS-->
<!--yarn-->
```bash
yarn add rest-hooks
```
<!--npm-->
```bash
npm install rest-hooks
```
<!--END_DOCUSAURUS_CODE_TABS-->


## Include polyfill (optional IE support)

Rest-hooks is built to be compatible with old browsers, but assumes polyfills will
already be loaded. If you want to support old browsers like Internet Explorer, you'll
need to install core-js and import it at the entry point of your bundle.

<!--DOCUSAURUS_CODE_TABS-->
<!--yarn-->
```bash
yarn add core-js
```
<!--npm-->
```bash
npm install core-js
```
<!--END_DOCUSAURUS_CODE_TABS-->

#### `index.tsx`

```tsx
import 'core-js/stable';
// place the above line at top
```


## Add provider at top-level component

#### `index.tsx`

```tsx
import { CacheProvider } from 'rest-hooks';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <CacheProvider>
    <App />
  </CacheProvider>,
  document.body
);
```

Alternatively [integrate state with redux](../guides/redux.md)

## Add Suspense and ErrorBoundary

[Suspense](https://reactjs.org/blog/2018/11/13/react-conf-recap.html) will show a fallback while content is loading.

Put the `<Suspense/>` component around the point where you want the fallback to be shown.
Any usage of the hooks will need to be below this point in the tree.

Feel free to hook up multiple `<Suspense/>` points if you want to show loaders at different
points in your application.

[`<NetworkErrorBoundary/>`](../api/NetworkErrorBoundary.md) will handle fallbacks upon any network errors.

#### `App.tsx`

```tsx
import { Suspense } from 'react';
import { NetworkErrorBoundary } from 'rest-hooks';

const App = () => (
  <div>
    <h1>Main Title</h1>
    <Nav />
    <Suspense fallback={<Spinner />}>
      <NetworkErrorBoundary>
        <Routes />
      </NetworkErrorBoundary>
    </Suspense>
  </div>
);
```

[More about loading state](../guides/loading-state)
