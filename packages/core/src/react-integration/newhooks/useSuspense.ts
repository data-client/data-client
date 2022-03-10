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
import { nullResponse } from '@rest-hooks/core/react-integration/newhooks/constants';

/**
 * Ensure an endpoint is available.
 * Suspends until it is.
 *
 * `useSuspense` guarantees referential equality globally.
 * @see https://resthooks.io/docs/api/useSuspense
 * @throws {Promise} If data is not yet available.
 * @throws {NetworkError} If fetch fails.
 */
export default function useSuspense<
  E extends EndpointInterface<FetchFunction, Schema | undefined, undefined>,
  Args extends readonly [...Parameters<E>] | readonly [null],
>(
  endpoint: E,
  ...args: Args
): Args extends [null]
  ? undefined
  : E['schema'] extends Exclude<Schema, null>
  ? Denormalize<E['schema']>
  : ReturnType<E> {
  const state = useContext(StateContext);
  const controller = useController();

  const key = args[0] !== null ? endpoint.key(...args) : '';
  const cacheResults = key && state.results[key];
  const meta = state.meta[key];

  // Compute denormalized value
  const { data, expiryStatus, expiresAt } = useMemo(() => {
    if (!key) return nullResponse;
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

  // @ts-ignore
  const error = key ? controller.getError(endpoint, ...args, state) : undefined;

  // If we are hard invalid we must fetch regardless of triggering or staleness
  const forceFetch = expiryStatus === ExpiryStatus.Invalid;

  const maybePromise = useMemo(() => {
    // null params mean don't do anything
    if ((Date.now() <= expiresAt && !forceFetch) || !key) return;

    return controller.fetch(endpoint, ...(args as readonly [...Parameters<E>]));
    // we need to check against serialized params, since params can change frequently
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expiresAt, controller, key, forceFetch, state.lastReset]);

  // fully "valid" data will not suspend even if it is not fresh
  if (expiryStatus !== ExpiryStatus.Valid && maybePromise) {
    throw maybePromise;
  }

  if (error) throw error;

  return data as any;
}
