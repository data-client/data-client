import { State, reducer, CacheProvider, Manager } from '@rest-hooks/core';
import { ExternalCacheProvider, PromiseifyMiddleware } from 'rest-hooks';
import React, { useEffect } from 'react';

// Extension of the DeepPartial type defined by Redux which handles unknown
type DeepPartialWithUnknown<T> = {
  [K in keyof T]?: T[K] extends unknown
    ? any
    : T[K] extends object
    ? DeepPartialWithUnknown<T[K]>
    : T[K];
};

let makeExternalCacheProvider: (
  managers: Manager[],
  initialState?: DeepPartialWithUnknown<State<any>>,
) => (props: { children: React.ReactNode }) => JSX.Element;

try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { createStore, applyMiddleware } = require('redux');
  makeExternalCacheProvider = function makeExternal(
    managers: Manager[],
    initialState?: DeepPartialWithUnknown<State<any>>,
  ) {
    const store = createStore(
      reducer,
      initialState,
      applyMiddleware(
        ...managers.map(manager => manager.getMiddleware()),
        PromiseifyMiddleware,
      ),
    );

    return function ConfiguredExternalCacheProvider({
      children,
    }: {
      children: React.ReactNode;
    }) {
      // this is not handled in ExternalCacheProvider as it doesn't
      // own its managers. Since we are owning them here, we should ensure it happens
      useEffect(() => {
        for (let i = 0; i < managers.length; ++i) {
          managers[i].init?.(store.getState());
        }
        return () => {
          console.log('unmount external');
          for (let i = 0; i < managers.length; ++i) {
            managers[i].cleanup();
          }
        };
      }, []);

      return (
        <ExternalCacheProvider store={store} selector={(s: State<any>) => s}>
          {children}
        </ExternalCacheProvider>
      );
    };
  };
} catch (e) {
  makeExternalCacheProvider = function makeExternal(
    managers: Manager[],
    initialState?: DeepPartialWithUnknown<State<any>>,
  ): (props: { children: React.ReactNode }) => JSX.Element {
    throw new Error(
      'Using makeExternalCacheProvider() requires redux to be installed as a peerDependency to rest-hooks',
    );
  };
}

const makeCacheProvider = (
  managers: Manager[],
  initialState?: State<unknown>,
) => {
  return function ConfiguredCacheProvider({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <CacheProvider managers={managers} initialState={initialState}>
        {children}
      </CacheProvider>
    );
  };
};

export { makeExternalCacheProvider, makeCacheProvider };
