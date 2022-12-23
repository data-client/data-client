Object.hasOwn =
  Object.hasOwn ||
  /* istanbul ignore next */ function hasOwn(it, key) {
    return Object.prototype.hasOwnProperty.call(it, key);
  };
export { Endpoint, Index } from '@rest-hooks/endpoint';
export type {
  EndpointExtraOptions as FetchOptions,
  EndpointParam,
  ReadEndpoint,
  MutateEndpoint,
  IndexParams,
  ArrayElement,
} from '@rest-hooks/endpoint';
export * from '@rest-hooks/react';
export type {
  FetchShape,
  ReadShape,
  MutateShape,
  DeleteShape,
  SetShapeParams,
  ParamsFromShape,
} from './endpoint/index.js';
export { default as makeCacheProvider } from '@rest-hooks/react/makeCacheProvider';
export { default as makeExternalCacheProvider } from '@rest-hooks/redux/makeCacheProvider';
export {
  CacheProvider as ExternalCacheProvider,
  PromiseifyMiddleware,
  mapMiddleware,
} from '@rest-hooks/redux';

export * as __INTERNAL__ from './internal.js';
export { useDenormalized } from './selectors/index.js';
// some of these overwrite @rest-hooks/react
export {
  useCache,
  useError,
  useExpiresAt,
  useFetchDispatcher,
  useFetcher,
  useInvalidateDispatcher,
  useInvalidator,
  useMeta,
  useResetter,
  useResource,
  useRetrieve,
  useSubscription,
  hasUsableData,
} from './hooks/index.js';
