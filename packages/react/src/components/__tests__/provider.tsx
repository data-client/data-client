// eslint-env jest
import {
  NetworkManager,
  actionTypes,
  SubscriptionManager,
  Manager,
  Middleware,
  Controller,
} from '@rest-hooks/core';
import { act, render } from '@testing-library/react';
import { CoolerArticle, CoolerArticleResource } from '__tests__/new';
import nock from 'nock';
import React, { useContext, Suspense } from 'react';

import { DispatchContext, StateContext } from '../../context';
import { useSuspense } from '../../hooks';
import { payload } from '../../test-fixtures';
import CacheProvider from '../CacheProvider';

const { RECEIVE_TYPE } = actionTypes;

describe('<CacheProvider />', () => {
  let warnspy: jest.SpyInstance;
  let debugspy: jest.SpyInstance;
  beforeEach(() => {
    warnspy = jest.spyOn(global.console, 'warn').mockImplementation(() => {});
    debugspy = jest.spyOn(global.console, 'debug').mockImplementation(() => {});
  });
  afterEach(() => {
    warnspy.mockRestore();
    debugspy.mockRestore();
  });

  beforeAll(() => {
    nock(/.*/)
      .persist()
      .defaultReplyHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Access-Token',
        'Content-Type': 'application/json',
      })
      .options(/.*/)
      .reply(200)
      .get(`/article-cooler/${payload.id}`)
      .reply(200, payload);
  });

  afterAll(() => {
    nock.cleanAll();
  });

  it('should warn users about missing Suspense', () => {
    const Component = () => {
      const article = useSuspense(CoolerArticleResource.get, { id: 5 });
      return <div>{article.title}</div>;
    };
    const tree = (
      <CacheProvider>
        <Component />
      </CacheProvider>
    );
    const { getByText } = render(tree);
    const msg = getByText('Uncaught Suspense.');
    expect(msg).toBeDefined();
    expect(warnspy).toHaveBeenCalled();
    expect(warnspy.mock.calls).toMatchSnapshot();
  });

  it('should not warn if Suspense is provided', () => {
    const Component = () => {
      const article = useSuspense(CoolerArticleResource.get, { id: 5 });
      return <div>{article.title}</div>;
    };
    const tree = (
      <CacheProvider>
        <Suspense fallback="loading">
          <Component />
        </Suspense>
      </CacheProvider>
    );
    const { getByText } = render(tree);
    const msg = getByText('loading');
    expect(msg).toBeDefined();
    expect(warnspy).not.toHaveBeenCalled();
  });

  it('should not change dispatch function on re-render', () => {
    let dispatch;
    let count = 0;
    function DispatchTester() {
      dispatch = useContext(DispatchContext);
      count++;
      return null;
    }
    const chil = <DispatchTester />;
    const tree = <CacheProvider>{chil}</CacheProvider>;
    const { rerender } = render(tree);
    expect(dispatch).toBeDefined();
    let curDisp = dispatch;
    rerender(tree);
    expect(curDisp).toBe(dispatch);
    expect(count).toBe(1);
    rerender(<CacheProvider>{chil}</CacheProvider>);
    expect(curDisp).toBe(dispatch);
    expect(count).toBe(1);
    const managers: any[] = [new NetworkManager()];
    rerender(<CacheProvider managers={managers}>{chil}</CacheProvider>);
    expect(count).toBe(2);
    curDisp = dispatch;
    rerender(<CacheProvider managers={managers}>{chil}</CacheProvider>);
    expect(curDisp).toBe(dispatch);
    expect(count).toBe(2);
    rerender(
      <DispatchContext.Provider value={() => Promise.resolve()}>
        {chil}
      </DispatchContext.Provider>,
    );
    expect(curDisp).not.toBe(dispatch);
    expect(count).toBe(3);
  });
  it('should change state', () => {
    let dispatch: any, state;
    let count = 0;
    function ContextTester() {
      dispatch = useContext(DispatchContext);
      state = useContext(StateContext);
      count++;
      return null;
    }
    const chil = <ContextTester />;
    const tree = <CacheProvider>{chil}</CacheProvider>;
    render(tree);
    expect(dispatch).toBeDefined();
    expect(state).toBeDefined();
    const action = {
      type: RECEIVE_TYPE,
      payload: { id: 5, title: 'hi', content: 'more things here' },
      meta: {
        schema: CoolerArticle,
        key: CoolerArticleResource.get.key({ id: 5 }),
        mutate: false,
        date: 50,
        expiresAt: 55,
      },
    };
    act(() => {
      dispatch(action);
    });
    expect(count).toBe(2);
    expect(state).toMatchSnapshot();
  });

  it('should have SubscriptionManager in default managers', () => {
    const subManagers = CacheProvider.defaultProps.managers.filter(
      manager => manager instanceof SubscriptionManager,
    );
    expect(subManagers.length).toBe(1);
  });

  it('should ignore dispatches after unmount', async () => {
    class InjectorManager implements Manager {
      protected declare middleware: Middleware;
      declare controller: Controller;

      constructor() {
        this.middleware = controller => {
          this.controller = controller;
          return next => async action => {
            await next(action);
          };
        };
      }

      cleanup() {}

      getMiddleware() {
        return this.middleware;
      }
    }
    const injector = new InjectorManager();
    const managers = [injector, ...CacheProvider.defaultProps.managers];
    let resolve: (r: any) => void = () => {};
    const endpoint = CoolerArticleResource.get.extend({
      fetch() {
        return new Promise(res => {
          resolve = res;
        });
      },
    });
    const Component = () => {
      const article = useSuspense(endpoint, { id: 5 });
      return <div>{article.title}</div>;
    };
    const tree = (
      <CacheProvider managers={managers}>
        <Suspense fallback="loading">
          <Component />
        </Suspense>
      </CacheProvider>
    );
    const { getByText, unmount } = render(tree);
    const msg = getByText('loading');
    expect(msg).toBeDefined();
    unmount();
    expect(debugspy).not.toHaveBeenCalled();
    await act(() =>
      injector.controller.setResponse(
        endpoint,
        { id: 5 },
        { id: 5, title: 'hi' },
      ),
    );
    expect(debugspy).toHaveBeenCalled();
    expect(debugspy.mock.calls[0]).toMatchInlineSnapshot(`
      [
        "Action dispatched after CacheProvider unmounted. This will be ignored.",
      ]
    `);
  });
});
