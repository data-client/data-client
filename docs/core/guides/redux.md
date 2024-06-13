---
id: redux
title: Redux integration
---

<head>
    <title>Empowering Redux with Reactive Data Client</title>
</head>

import PkgTabs from '@site/src/components/PkgTabs';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Using [redux](https://redux.js.org/) is completely optional. However, for many it means easy integration or migration
with existing projects, or just a nice centralized state management abstraction.

Integration is fairly straightforward as Reactive Data Client already uses the same paradigms as redux under
the hood. However, care should be taken to integrate the reducer and [middlewares](../api/Manager.md) properly
or it won't work as expected.

First make sure you have redux installed:

<PkgTabs pkgs="@data-client/redux redux" />

Note: react-redux is _not_ needed for this integration (though you will need it if you want to use redux directly as well).

Then you'll want to use the [&lt;ExternalDataProvider /\>](../api/ExternalDataProvider.md) instead of
[&lt;DataProvider /\>](../api/DataProvider.md) and pass in the store and a selector function to grab
the Reactive Data Client specific part of the state.

:::info Note

You should only use ONE provider; nested another provider will override the previous.

:::

:::info Note

Reactive Data Client manager middlewares return promises, which is different from how redux middlewares work.
Because of this, if you want to integrate both, you'll need to place all redux middlewares
after the `PromiseifyMiddleware` adapter, and place all Reactive Data Client manager middlewares before.

:::

<Tabs
defaultValue="data-client"
values={[
{ label: 'just Reactive Data Client', value: 'data-client' },
{ label: 'with React-Redux', value: 'react-redux' },
]}>
<TabItem value="data-client">

#### `index.tsx`

```tsx
import {
  SubscriptionManager,
  PollingSubscription,
  ExternalDataProvider,
  PromiseifyMiddleware,
  applyManager,
  initialState,
  createReducer,
  NetworkManager,
  Controller,
} from '@data-client/redux';
import { createStore, applyMiddleware } from 'redux';
import ReactDOM from 'react-dom';

const networkManager = new NetworkManager();
const subscriptionManager = new SubscriptionManager(PollingSubscription);
const controller = new Controller();

const store = createStore(
  createReducer(controller),
  initialState,
  applyMiddleware(
    ...applyManager([networkManager, subscriptionManager], controller),
    // place Reactive Data Client built middlewares before PromiseifyMiddleware
    PromiseifyMiddleware,
    // place redux middlewares after PromiseifyMiddleware
  ),
);
const selector = state => state;

// managers optionally provide initialization subroutine
for (const manager of [networkManager, subscriptionManager]) {
  manager.init?.(selector(store.getState()));
}

ReactDOM.render(
  <ExternalDataProvider
    store={store}
    selector={selector}
    controller={controller}
  >
    <App />
  </ExternalDataProvider>,
  document.body,
);
```

</TabItem>
<TabItem value="react-redux">

#### `index.tsx`

```tsx
import {
  SubscriptionManager,
  PollingSubscription,
  ExternalDataProvider,
  PromiseifyMiddleware,
  applyManager,
  initialState,
  createReducer,
  NetworkManager,
  Controller,
} from '@data-client/redux';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

const manager = new NetworkManager();
const subscriptionManager = new SubscriptionManager(PollingSubscription);
const controller = new Controller();

const store = createStore(
  createReducer(controller),
  initialState,
  applyMiddleware(
    ...applyManager([networkManager, subscriptionManager], controller),
    // place Reactive Data Client built middlewares before PromiseifyMiddleware
    PromiseifyMiddleware,
    // place redux middlewares after PromiseifyMiddleware
  ),
);
const selector = state => state;

// managers optionally provide initialization subroutine
for (const manager of [networkManager, subscriptionManager]) {
  manager.init?.(selector(store.getState()));
}

ReactDOM.render(
  <ExternalDataProvider
    store={store}
    selector={selector}
    controller={controller}
  >
    <Provider store={store}>
      <App />
    </Provider>
  </ExternalDataProvider>,
  document.body,
);
```

</TabItem>
</Tabs>

Above we have the simplest case where the entire redux store is used for Reactive Data Client.
However, more commonly you will be integrating with other state. In this case, you
will need to use the `selector` prop of `<ExternalDataProvider/>` to specify
where in the state tree the Reactive Data Client information is.

```typescript
// ...
// highlight-next-line
const selector = state => state.dataClient;

const store = createStore(
  // Now we have other reducers
  // highlight-start
  combineReducers({
    dataClient: dataClientReducer,
    myOtherState: otherReducer,
  }),
  // highlight-end
  applyMiddleware(
    ...mapMiddleware(selector)(
      ...applyManager([networkManager, subscriptionManager], controller),
    ),
    PromiseifyMiddleware,
  ),
);
// ...
```

Here we store Reactive Data Client state information in the 'dataClient' part of the tree.

## Redux devtools

[Redux DevTools](https://github.com/reduxjs/redux-devtools) allows easy inspection of current
state and transitions in the Reactive Data Client store.

Simply wrap the return value of `applyMiddleware()` with `composeWithDevTools()`

```typescript
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  createReducer(controller),
  initialState,
  // highlight-start
  composeWithDevTools({
    trace: true,
  })(
    // highlight-end
    applyMiddleware(
      ...applyManager([networkManager, subscriptionManager], controller),
      // place Reactive Data Client built middlewares before PromiseifyMiddleware
      PromiseifyMiddleware,
      // place redux middlewares after PromiseifyMiddleware
    ),
    // highlight-next-line
  ),
);
```
