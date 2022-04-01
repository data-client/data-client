/* eslint-disable @typescript-eslint/ban-ts-comment */
import { StateContext } from '@rest-hooks/core/react-integration/context';
import { ExpiryStatus } from '@rest-hooks/endpoint';
import useController from '@rest-hooks/core/react-integration/hooks/useController';
import {
  EndpointInterface,
  Denormalize,
  Schema,
  FetchFunction,
} from '@rest-hooks/endpoint';
import { useContext, useMemo } from 'react';

/**
 * Request a resource if it is not in cache.
 * @see https://resthooks.io/docs/api/useFetch
 */
export default function useFetch<
  E extends EndpointInterface<FetchFunction, Schema | undefined, undefined>,
  Args extends readonly [...Parameters<E>] | readonly [null],
>(endpoint: E, ...args: Args) {
  const state = useContext(StateContext);
  const controller = useController();

  const key = args[0] !== null ? endpoint.key(...args) : '';
  const cacheResults = key && state.results[key];
  const meta = state.meta[key];

  // Compute denormalized value
  const { expiryStatus, expiresAt } = useMemo(() => {
    // @ts-ignore
    return controller.getResponse(endpoint, ...args, state) as {
      data: Denormalize<E['schema']>;
      expiryStatus: ExpiryStatus;
      expiresAt: number;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    cacheResults,
    state.indexes,
    state.entities,
    state.entityMeta,
    meta,
    key,
  ]);

  // If we are hard invalid we must fetch regardless of triggering or staleness
  const forceFetch = expiryStatus === ExpiryStatus.Invalid;

  const maybePromise = useMemo(() => {
    // null params mean don't do anything
    if ((Date.now() <= expiresAt && !forceFetch) || !key) return;
    // @ts-ignore
    return controller.fetch(endpoint, ...args);
    // we need to check against serialized params, since params can change frequently
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expiresAt, controller, key, forceFetch, state.lastReset]);

  return maybePromise;
}
