import type {
  UpdateFunction,
  Schema,
  EndpointExtraOptions,
  EndpointInterface,
} from '@data-client/normalizr';
import { FSAWithPayloadAndMeta, FSAWithMeta } from 'flux-standard-action';

import {
  RECEIVE_TYPE,
  RESET_TYPE,
  FETCH_TYPE,
  SUBSCRIBE_TYPE,
  UNSUBSCRIBE_TYPE,
  INVALIDATE_TYPE,
  GC_TYPE,
  OPTIMISTIC_TYPE,
} from './actionTypes.js';
import type { EndpointUpdateFunction } from './controller/types.js';
import { ErrorableFSAWithPayloadAndMeta } from './fsa.js';

export interface ReceiveMeta<S extends Schema | undefined> {
  schema?: S;
  key: string;
  args?: readonly any[];
  updaters?: Record<string, UpdateFunction<S, any>>;
  update?: (result: any, ...args: any) => Record<string, (...args: any) => any>;
  fetchedAt?: number;
  date: number;
  expiresAt: number;
  errorPolicy?: (error: any) => 'hard' | 'soft' | undefined;
}

export type ReceiveAction<
  Payload extends object | string | number | null =
    | object
    | string
    | number
    | null,
  S extends Schema | undefined = any,
> = ErrorableFSAWithPayloadAndMeta<
  typeof RECEIVE_TYPE,
  Payload,
  ReceiveMeta<S>
>;

export type OptimisticAction<
  E extends EndpointInterface & {
    update?: EndpointUpdateFunction<E>;
  } = EndpointInterface & {
    update?: EndpointUpdateFunction<EndpointInterface>;
  },
> = {
  type: typeof OPTIMISTIC_TYPE;
  meta: {
    schema: E['schema'];
    key: string;
    args: readonly any[];
    update?: (
      result: any,
      ...args: any
    ) => Record<string, (...args: any) => any>;
    fetchedAt: number;
    date: number;
    expiresAt: number;
    errorPolicy?: (error: any) => 'hard' | 'soft' | undefined;
  };
  endpoint: E;
  error?: undefined;
};

export interface ResetAction {
  type: typeof RESET_TYPE;
  date: number | Date;
}

interface FetchMeta<
  Payload extends object | string | number | null =
    | object
    | string
    | number
    | null,
  S extends Schema | undefined = any,
> {
  type?: 'read' | 'mutate' | 'delete';
  schema?: S;
  key: string;
  args?: readonly any[];
  updaters?: Record<string, UpdateFunction<S, any>>;
  update?: (result: any, ...args: any) => Record<string, (...args: any) => any>;
  options?: EndpointExtraOptions;
  throttle: boolean;
  resolve: (value?: any | PromiseLike<any>) => void;
  reject: (reason?: any) => void;
  promise: PromiseLike<any>;
  createdAt: number | Date;
  optimisticResponse?: Payload;
  // indicates whether network manager processed it
  nm?: boolean;
}

export interface FetchAction<
  Payload extends object | string | number | null =
    | object
    | string
    | number
    | null,
  S extends Schema | undefined = any,
> extends FSAWithPayloadAndMeta<
    typeof FETCH_TYPE,
    () => Promise<Payload>,
    FetchMeta<any, any>
  > {
  meta: FetchMeta<Payload, S>;
  endpoint?: undefined;
}

export interface SubscribeAction
  extends FSAWithMeta<typeof SUBSCRIBE_TYPE, undefined, any> {
  meta: {
    args?: readonly any[];
    schema: Schema | undefined;
    fetch: () => Promise<any>;
    key: string;
    options: EndpointExtraOptions | undefined;
  };
  endpoint?: undefined;
}

export interface UnsubscribeAction
  extends FSAWithMeta<typeof UNSUBSCRIBE_TYPE, undefined, any> {
  meta: {
    args?: readonly any[];
    key: string;
    options: EndpointExtraOptions | undefined;
  };
  endpoint?: undefined;
}

export interface InvalidateAction
  extends FSAWithMeta<typeof INVALIDATE_TYPE, undefined, any> {
  meta: {
    key: string;
  };
}

export interface GCAction {
  type: typeof GC_TYPE;
  entities: [string, string][];
  results: string[];
}

// put other actions here in union
export type ActionTypes =
  | FetchAction
  | OptimisticAction
  | ReceiveAction
  | SubscribeAction
  | UnsubscribeAction
  | InvalidateAction
  | ResetAction
  | GCAction;
