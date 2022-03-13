import { ReadShape, ParamsFromShape } from '@rest-hooks/core/endpoint/index';
import { useMemo } from 'react';
import {
  EndpointInterface,
  DenormalizeNullable,
  Schema,
  FetchFunction,
} from '@rest-hooks/endpoint';
import shapeToEndpoint from '@rest-hooks/core/endpoint/adapter';
import useCacheNew from '@rest-hooks/core/react-integration/newhooks/useCache';

/**
 * Access a response if it is available.
 *
 * `useCache` guarantees referential equality globally.
 * @see https://resthooks.io/docs/api/useCache
 */
export default function useCache<
  E extends
    | Pick<
        EndpointInterface<FetchFunction, Schema | undefined, undefined>,
        'key' | 'schema' | 'invalidIfStale'
      >
    | Pick<ReadShape<any, any>, 'getFetchKey' | 'schema' | 'options'>,
  Args extends
    | (E extends { key: any }
        ? readonly [...Parameters<E['key']>]
        : readonly [ParamsFromShape<E>])
    | readonly [null],
>(
  endpoint: E,
  ...args: Args
): Args extends [null] ? undefined : DenormalizeNullable<E['schema']> {
  const adaptedEndpoint: any = useMemo(() => {
    return shapeToEndpoint(endpoint);
    // we currently don't support shape changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return useCacheNew(adaptedEndpoint, ...args);
}
