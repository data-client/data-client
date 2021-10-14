import {
  DispatchContext,
  ReceiveAction,
  actionTypes,
  ActionTypes,
} from '@rest-hooks/core';
import {
  Context,
  createContext,
  useCallback,
  useContext,
  useMemo,
} from 'react';
import React from 'react';
import { Fixture, actionFromFixture } from '@rest-hooks/test/mockState';
import * as RestHooksCore from '@rest-hooks/core';

const ControllerContext: Context<any> =
  RestHooksCore.ControllerContext ?? createContext({});

type Props = {
  children: React.ReactNode;
  fixtures: Fixture[];
  silenceMissing: boolean;
};

/** Can be used to mock responses based on fixtures provided.
 *
 * <MockResolver fixtures={postFixtures[state]}><MyComponent /></MockResolver>
 *
 * Place below <CacheProvider /> and above any components you want to mock.
 */
export default function MockResolver({
  children,
  fixtures,
  silenceMissing,
}: Props) {
  const fetchToReceiveAction = useMemo(() => {
    const actionMap: Record<string, ReceiveAction> = {};
    for (const fixture of fixtures) {
      const { key, action } = actionFromFixture(fixture);
      actionMap[key] = action;
    }
    return actionMap;
  }, [fixtures]);

  const controller = useContext(ControllerContext);
  const dispatch = useContext(DispatchContext);
  const dispatchInterceptor = useCallback(
    (action: ActionTypes) => {
      if (action.type === actionTypes.FETCH_TYPE) {
        const { key, resolve, reject } = action.meta;
        if (Object.prototype.hasOwnProperty.call(fetchToReceiveAction, key)) {
          // All updates must be async or React will complain about re-rendering in same pass
          setTimeout(() => {
            const receiveAction = fetchToReceiveAction[key];
            try {
              dispatch(receiveAction);
              // dispatch goes through user-code that can sometimes fail.
              // let's ensure we always complete the promise
            } finally {
              const complete = receiveAction.error ? reject : resolve;
              complete(receiveAction.payload);
            }
          }, 0);
          return Promise.resolve();
        }
        if (!silenceMissing) {
          // This is only a warn because sometimes this is intentional
          console.warn(
            `<MockResolver/> received a dispatch:
  ${JSON.stringify(action, undefined, 2)}
  for which there is no matching fixture.

  If you were expecting to see results, it is likely due to data not being found in fixtures.
  Double check your params and Endpoint match. For example:

  useResource(ArticleResource.list(), { maxResults: 10 });

  and

  {
  request: ArticleResource.list(),
  params: { maxResults: 10 },
  result: [],
  }`,
          );
        }
      } else if (action.type === actionTypes.SUBSCRIBE_TYPE) {
        const { key } = action.meta;
        if (Object.prototype.hasOwnProperty.call(fetchToReceiveAction, key)) {
          return Promise.resolve();
        }
      }
      return dispatch(action);
    },
    [dispatch, fetchToReceiveAction, silenceMissing],
  );
  const controllerInterceptor = useMemo(() => {
    const newController = Object.create(controller);
    newController.dispatch = dispatchInterceptor;
    return newController;
  }, [controller, dispatchInterceptor]);

  return (
    <DispatchContext.Provider value={dispatchInterceptor}>
      <ControllerContext.Provider value={controllerInterceptor}>
        {children}
      </ControllerContext.Provider>
    </DispatchContext.Provider>
  );
}

MockResolver.defaultProps = {
  silenceMissing: false,
};
