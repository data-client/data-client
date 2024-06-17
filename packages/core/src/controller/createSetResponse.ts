import type { EndpointInterface, ResolveType } from '@data-client/normalizr';

import ensurePojo from './ensurePojo.js';
import { EndpointUpdateFunction } from './types.js';
import { SET_RESPONSE_TYPE } from '../actionTypes.js';
import type { SetResponseAction, SetResponseMeta } from '../types.js';

export default function createSetResponse<
  E extends EndpointInterface & {
    update?: EndpointUpdateFunction<E>;
  },
>(
  endpoint: E,
  options: {
    args: readonly [...Parameters<E>];
    response: Error;
    fetchedAt?: number;
    error: true;
  },
): SetResponseAction<E>;

export default function createSetResponse<
  E extends EndpointInterface & {
    update?: EndpointUpdateFunction<E>;
  },
>(
  endpoint: E,
  options: {
    args: readonly [...Parameters<E>];
    response: ResolveType<E>;
    fetchedAt?: number;
    error?: false;
  },
): SetResponseAction<E>;

export default function createSetResponse<
  E extends EndpointInterface & {
    update?: EndpointUpdateFunction<E>;
  },
>(
  endpoint: E,
  {
    args,
    fetchedAt,
    response,
    error = false,
  }: {
    args: readonly [...Parameters<E>];
    response: any;
    fetchedAt?: number;
    error?: boolean;
  },
): SetResponseAction<E> {
  const expiryLength: number =
    error ?
      endpoint.errorExpiryLength ?? 1000
    : endpoint.dataExpiryLength ?? 60000;
  /* istanbul ignore next */
  if (process.env.NODE_ENV === 'development' && expiryLength < 0) {
    throw new Error('Negative expiry length are not allowed.');
  }
  const now = Date.now();
  const meta: SetResponseMeta = {
    args: args.map(ensurePojo),
    fetchedAt: fetchedAt ?? now,
    date: now,
    expiresAt: now + expiryLength,
    key: endpoint.key(...args),
  };

  const action: SetResponseAction<E> = {
    type: SET_RESPONSE_TYPE,
    payload: response,
    endpoint: endpoint,
    meta,
  };
  if (error) (action as any).error = true;
  return action;
}
