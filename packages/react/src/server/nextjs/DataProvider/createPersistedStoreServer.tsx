import {
  Controller,
  Manager,
  NetworkManager,
  State,
  createReducer,
  initialState,
  applyManager,
} from '@data-client/core';
import type { ComponentProps } from 'react';

import type DataProvider from '../../../components/DataProvider.js';
import {
  ExternalDataProvider,
  PromiseifyMiddleware,
} from '../../redux/index.js';
import { createStore, applyMiddleware } from '../../redux/redux.js';

export default function createPersistedStore(managers?: Manager[]) {
  const controller = new Controller();
  managers = managers ?? [new NetworkManager()];
  const nm: NetworkManager = managers.find(
    m => m instanceof NetworkManager,
  ) as any;
  if (nm === undefined)
    throw new Error('managers must include a NetworkManager');
  const reducer = createReducer(controller);
  const enhancer = applyMiddleware(
    // redux 5's types are wrong and do not allow any return typing from next, which is incorrect.
    // `next: (action: unknown) => unknown`: allows any action, but disallows all return types.
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ...applyManager(managers, controller),
    PromiseifyMiddleware,
  );
  const store = createStore(reducer, initialState as any, enhancer);
  managers.forEach(manager => manager.init?.(store.getState()));

  const selector = (state: any) => state;

  const getState = () => selector(store.getState());

  const initPromise: Promise<State<any>> = (async () => {
    let firstRender = true;
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const inFlightFetches = nm.allSettled();
      if (inFlightFetches) {
        firstRender = false;
        await inFlightFetches;
        continue;
      }
      if (firstRender) {
        firstRender = false;
        // TODO: instead of waiting 10ms - see if we can wait until next part of react is streamed and race with nm getting new fetches
        await new Promise(resolve => setTimeout(resolve, 10));
        continue;
      }
      break;
    }
    return getState();
  })();

  const StoreDataProvider = ({ children }: ProviderProps) => {
    return (
      <ExternalDataProvider
        store={store}
        selector={selector}
        controller={controller}
      >
        {children}
      </ExternalDataProvider>
    );
  };

  return [StoreDataProvider, initPromise] as const;
}

type ProviderProps = Omit<
  Partial<ComponentProps<typeof DataProvider>>,
  'initialState'
> & {
  children: React.ReactNode;
  initPromise: Promise<State<any>>;
};
