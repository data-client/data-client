import { NormalizedIndex } from '@rest-hooks/normalizr';
import { Middleware } from '@rest-hooks/use-enhanced-reducer';
import { FSAWithPayloadAndMeta, FSAWithMeta, FSA } from 'flux-standard-action';
import type {
  UpdateFunction,
  AbstractInstanceType,
  Schema,
  FetchFunction,
  EndpointExtraOptions,
} from '@rest-hooks/endpoint';

import { ErrorableFSAWithPayloadAndMeta } from './fsa';
import { FetchShape } from './endpoint';
import {
  RECEIVE_TYPE,
  RESET_TYPE,
  FETCH_TYPE,
  SUBSCRIBE_TYPE,
  UNSUBSCRIBE_TYPE,
  INVALIDATE_TYPE,
  GC_TYPE,
} from './actionTypes';

export type { AbstractInstanceType, UpdateFunction };

export type ReceiveTypes = typeof RECEIVE_TYPE;

export type PK = string;

export interface NetworkError extends Error {
  status: number;
  response?: Response;
}

export interface UnknownError extends Error {
  status?: unknown;
  response?: unknown;
}

export type State<T> = Readonly<{
  entities: {
    readonly [entityKey: string]: { readonly [pk: string]: T } | undefined;
  };
  indexes: NormalizedIndex;
  results: { readonly [key: string]: unknown | PK[] | PK | undefined };
  meta: {
    readonly [key: string]: {
      readonly date: number;
      readonly error?: NetworkError | UnknownError;
      readonly expiresAt: number;
      readonly prevExpiresAt?: number;
      readonly invalidated?: boolean;
    };
  };
  entityMeta: {
    readonly [entityKey: string]: {
      readonly [pk: string]: {
        readonly date: number;
        readonly expiresAt: number;
      };
    };
  };
  optimistic: ReceiveAction[];
}>;

export type FetchOptions<F extends FetchFunction = FetchFunction> =
  EndpointExtraOptions<F>;

export interface ReceiveMeta<S extends Schema | undefined> {
  schema: S;
  key: string;
  args?: readonly any[];
  updaters?: Record<string, UpdateFunction<S, any>>;
  update?: (result: any, ...args: any) => Record<string, (...args: any) => any>;
  date: number;
  expiresAt: number;
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

export type ResetAction = FSA<typeof RESET_TYPE>;

interface FetchMeta<
  Payload extends object | string | number | null =
    | object
    | string
    | number
    | null,
  S extends Schema | undefined = any,
> {
  type: FetchShape<any, any>['type'];
  schema: S;
  key: string;
  args?: readonly any[];
  updaters?: Record<string, UpdateFunction<S, any>>;
  update?: (result: any, ...args: any) => Record<string, (...args: any) => any>;
  options?: FetchOptions;
  throttle: boolean;
  resolve: (value?: any | PromiseLike<any>) => void;
  reject: (reason?: any) => void;
  promise: PromiseLike<any>;
  createdAt: Date;
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
}

export interface SubscribeAction
  extends FSAWithMeta<typeof SUBSCRIBE_TYPE, undefined, any> {
  meta: {
    schema: Schema | undefined;
    fetch: () => Promise<any>;
    key: string;
    options: FetchOptions | undefined;
  };
}

export interface UnsubscribeAction
  extends FSAWithMeta<typeof UNSUBSCRIBE_TYPE, undefined, any> {
  meta: {
    key: string;
    options: FetchOptions | undefined;
  };
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

export type ResponseActions = ReceiveAction;

// put other actions here in union
export type ActionTypes =
  | FetchAction
  | ReceiveAction
  | SubscribeAction
  | UnsubscribeAction
  | InvalidateAction
  | ResetAction
  | GCAction;

export interface Manager {
  getMiddleware(): Middleware;
  cleanup(): void;
  init?: (state: State<any>) => void;
}
