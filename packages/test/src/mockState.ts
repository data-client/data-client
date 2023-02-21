import {
  ReceiveAction,
  State,
  ActionTypes,
  Controller,
  __INTERNAL__,
} from '@rest-hooks/react';

import { collapseFixture } from './collapseFixture.js';
import type { Fixture, Interceptor } from './fixtureTypes.js';

const { initialState, createReducer } = __INTERNAL__;

export default function mockInitialState(
  fixtures: Fixture[] = [],
): State<unknown> {
  const actions: ReceiveAction[] = [];
  const dispatch = (action: any) => {
    actions.push(action);
    return Promise.resolve();
  };
  const controller = new Controller({ dispatch });
  const reducer: (
    state: State<unknown> | undefined,
    action: ActionTypes,
  ) => State<unknown> = createReducer(controller);

  fixtures.forEach(fixture => {
    dispatchFixture(fixture, fixture.args, controller);
  });
  return actions.reduce(reducer, initialState);
}

function dispatchFixture(
  fixture: Fixture,
  args: any[],
  controller: Controller,
  fetchedAt?: number,
) {
  // eslint-disable-next-line prefer-const
  let { endpoint } = fixture;
  const { response, error } = collapseFixture(fixture, args, {});
  if (controller.resolve) {
    controller.resolve(endpoint, {
      args,
      response,
      error,
      fetchedAt: fetchedAt ?? Date.now(),
    });
  } else {
    if (error === true) {
      controller.setError(endpoint, ...args, response);
    } else {
      controller.setResponse(endpoint, ...args, response);
    }
  }
}
