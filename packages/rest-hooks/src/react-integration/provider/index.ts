import { CacheProvider as CoreCacheProvider } from '@rest-hooks/core';
import {
  SubscriptionManager,
  PollingSubscription,
  DevToolsManager,
} from 'rest-hooks/manager/index';
import PromiseifyMiddleware from 'rest-hooks/react-integration/provider/PromiseifyMiddleware';
import ExternalCacheProvider from 'rest-hooks/react-integration/provider/ExternalCacheProvider';

const CacheProvider: typeof CoreCacheProvider = props =>
  CoreCacheProvider(props);
CacheProvider.defaultProps = {
  ...CoreCacheProvider.defaultProps,
  managers: [
    ...CoreCacheProvider.defaultProps.managers,
    new SubscriptionManager(PollingSubscription),
  ],
};
/* istanbul ignore next */
if (process.env.NODE_ENV !== 'production') {
  CacheProvider.defaultProps.managers.unshift(new DevToolsManager());
  if (CacheProvider.defaultProps.managers.length > 1) {
    // swap so devtools is right after networkmanager
    [
      CacheProvider.defaultProps.managers[1],
      CacheProvider.defaultProps.managers[0],
    ] = CacheProvider.defaultProps.managers.slice(0, 2);
  }
}

export { CacheProvider, ExternalCacheProvider, PromiseifyMiddleware };
export { default as mapMiddleware } from 'rest-hooks/react-integration/provider/mapMiddleware';
