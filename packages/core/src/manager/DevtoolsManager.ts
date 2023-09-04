/* eslint-disable no-inner-declarations */
import type { DevToolsConfig } from './devtoolsTypes.js';
import type { Middleware } from './LogoutManager.js';
import { Controller, EndpointInterface } from '../index.js';
import createReducer from '../state/reducer/createReducer.js';
import type { Manager, State, ActionTypes } from '../types.js';

export type { DevToolsConfig };

let DEFAULT_CONFIG = {};

if (process.env.NODE_ENV !== 'production') {
  const extraEndpointKeys = [
    'dataExpiryLength',
    'errorExpiryLength',
    'errorPolicy',
    'invalidIfStale',
    'pollFrequency',
    'getOptimisticResponse',
    'update',
  ];

  function serializeEndpoint(endpoint: EndpointInterface) {
    const serial: any = {
      name: endpoint.name,
      schema: (endpoint.schema as any)?.toJSON?.() ?? endpoint.schema,
      sideEffect: endpoint.sideEffect,
    };
    extraEndpointKeys.forEach(key => {
      if (key in endpoint)
        serial[key] = endpoint[key as keyof EndpointInterface];
    });
    return serial;
  }

  const HASINTL = typeof Intl !== 'undefined';
  DEFAULT_CONFIG = {
    name: `Data Client: ${globalThis.document?.title}`,
    autoPause: true,
    actionSanitizer: (action: ActionTypes) => {
      if (!('endpoint' in action)) return action;
      return {
        ...action,
        endpoint: serializeEndpoint(action.endpoint),
      };
    },
    serialize: {
      options: undefined,
      /* istanbul ignore next */
      replacer: HASINTL
        ? (key: string | number | symbol, value: unknown) => {
            if (
              typeof value === 'number' &&
              typeof key === 'string' &&
              isFinite(value) &&
              (key === 'date' || key.endsWith('At'))
            ) {
              return Intl.DateTimeFormat('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                fractionalSecondDigits: 3,
              }).format(value);
            }
            return value;
          }
        : undefined,
    },
  };
}

/** Integrates with https://github.com/reduxjs/redux-devtools
 *
 * Options: https://github.com/reduxjs/redux-devtools/blob/main/extension/docs/API/Arguments.md
 *
 * @see https://dataclient.io/docs/api/DevToolsManager
 */
export default class DevToolsManager implements Manager {
  protected declare middleware: Middleware;
  protected declare devTools: undefined | any;
  protected started = false;
  protected actions: [ActionTypes, State<unknown>][] = [];
  protected declare controller: Controller;

  constructor(
    config?: DevToolsConfig,
    skipLogging?: (action: ActionTypes) => boolean,
  ) {
    /* istanbul ignore next */
    this.devTools =
      typeof window !== 'undefined' &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__.connect({
        ...DEFAULT_CONFIG,
        config,
      });
    if (process.env.NODE_ENV !== 'production' && this.devTools) {
      this.devTools.subscribe((msg: any) => {
        switch (msg.type) {
          case 'START':
            this.started = true;

            if (this.actions.length) {
              this.actions.forEach(([action, state]) => {
                this.handleAction(action, state);
              });
              this.actions = [];
            }
            break;
          case 'STOP':
            this.started = false;
            break;
          case 'DISPATCH':
            if (msg.payload.type === 'RESET') {
              this.controller.resetEntireStore();
            }
            break;
        }
      });
    }

    /* istanbul ignore if */
    /* istanbul ignore next */
    if (this.devTools) {
      this.middleware = controller => {
        this.controller = controller;
        const reducer = createReducer(controller as any);
        return next => action => {
          const ret = next(action);
          ret.then(() => {
            if (skipLogging?.(action)) return;
            const state = controller.getState();
            this.handleAction(action, state.optimistic.reduce(reducer, state));
          });
          return ret;
        };
      };
    } else {
      this.middleware = () => next => action => next(action);
    }
  }

  handleAction(action: any, state: any) {
    if (this.started) {
      this.devTools.send(action, state, undefined, 'RDC');
    } else {
      // queue actions
      this.actions.push([action, state]);
    }
  }

  /** Called when initial state is ready */
  init(state: State<any>) {
    /* istanbul ignore if */
    if (this.devTools) this.devTools.init(state);
  }

  /** Ensures all subscriptions are cleaned up. */
  cleanup() {}

  /** Attaches Manager to store
   *
   */
  getMiddleware() {
    return this.middleware;
  }
}
