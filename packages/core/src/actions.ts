import type {
  Denormalize,
  EndpointInterface,
  Queryable,
  ResolveType,
  UnknownError,
} from '@data-client/normalizr';

import type {
  SET_TYPE,
  RESET_TYPE,
  FETCH_TYPE,
  SUBSCRIBE_TYPE,
  UNSUBSCRIBE_TYPE,
  INVALIDATE_TYPE,
  GC_TYPE,
  OPTIMISTIC_TYPE,
  INVALIDATEALL_TYPE,
  EXPIREALL_TYPE,
  SET_RESPONSE_TYPE,
} from './actionTypes.js';
import type { EndpointUpdateFunction } from './controller/types.js';

type EndpointAndUpdate<E extends EndpointInterface> = EndpointInterface & {
  update?: EndpointUpdateFunction<E>;
};
type EndpointDefault = EndpointInterface & {
  update?: EndpointUpdateFunction<EndpointInterface>;
};

/** General meta-data for operators */
export interface ActionMeta {
  readonly fetchedAt: number;
  readonly date: number;
  readonly expiresAt: number;
}

/** Action for Controller.set() */
export interface SetAction<S extends Queryable = any> {
  type: typeof SET_TYPE;
  schema: S;
  args: readonly any[];
  meta: ActionMeta;
  value: {} | ((previousValue: Denormalize<S>) => {});
}

/* setResponse */
export interface SetResponseActionBase<
  E extends EndpointAndUpdate<E> = EndpointDefault,
> {
  type: typeof SET_RESPONSE_TYPE;
  endpoint: E;
  args: readonly any[];
  key: string;
  meta: ActionMeta;
}
export interface SetResponseActionSuccess<
  E extends EndpointAndUpdate<E> = EndpointDefault,
> extends SetResponseActionBase<E> {
  response: ResolveType<E>;
  error?: false;
}
export interface SetResponseActionError<
  E extends EndpointAndUpdate<E> = EndpointDefault,
> extends SetResponseActionBase<E> {
  response: UnknownError;
  error: true;
}
/** Action for Controller.setResponse() */
export type SetResponseAction<
  E extends EndpointAndUpdate<E> = EndpointDefault,
> = SetResponseActionSuccess<E> | SetResponseActionError<E>;

/* FETCH */
export interface FetchMeta {
  fetchedAt: number;
  resolve: (value?: any | PromiseLike<any>) => void;
  reject: (reason?: any) => void;
  promise: PromiseLike<any>;
}

/** Action for Controller.fetch() */
export interface FetchAction<E extends EndpointAndUpdate<E> = EndpointDefault> {
  type: typeof FETCH_TYPE;
  endpoint: E;
  args: readonly [...Parameters<E>];
  key: string;
  meta: FetchMeta;
}

/* OPTIMISTIC */
/** Action for Endpoint.getOptimisticResponse() */
export interface OptimisticAction<
  E extends EndpointAndUpdate<E> = EndpointDefault,
> {
  type: typeof OPTIMISTIC_TYPE;
  endpoint: E;
  args: readonly any[];
  key: string;
  meta: ActionMeta;
  error?: false;
}

/* SUBSCRIBE */
/** Action for Controller.subscribe() */
export interface SubscribeAction<
  E extends EndpointAndUpdate<E> = EndpointDefault,
> {
  type: typeof SUBSCRIBE_TYPE;
  endpoint: E;
  args: readonly any[];
  key: string;
}

/** Action for Controller.unsubscribe() */
export interface UnsubscribeAction<
  E extends EndpointAndUpdate<E> = EndpointDefault,
> {
  type: typeof UNSUBSCRIBE_TYPE;
  endpoint: E;
  args: readonly any[];
  key: string;
}

/* EXPIRY */
export interface ExpireAllAction {
  type: typeof EXPIREALL_TYPE;
  testKey: (key: string) => boolean;
}

/* INVALIDATE */
export interface InvalidateAllAction {
  type: typeof INVALIDATEALL_TYPE;
  testKey: (key: string) => boolean;
}

export interface InvalidateAction {
  type: typeof INVALIDATE_TYPE;
  key: string;
}

/* RESET */
export interface ResetAction {
  type: typeof RESET_TYPE;
  date: number;
}

/* GC */
export interface GCAction {
  type: typeof GC_TYPE;
  entities: [string, string][];
  endpoints: string[];
}

export type ActionTypes =
  | FetchAction
  | OptimisticAction
  | SetAction
  | SetResponseAction
  | SubscribeAction
  | UnsubscribeAction
  | InvalidateAction
  | InvalidateAllAction
  | ExpireAllAction
  | ResetAction
  | GCAction;
