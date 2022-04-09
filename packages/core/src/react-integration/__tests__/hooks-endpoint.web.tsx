import { CoolerArticleResource, PaginatedArticleResource } from '__tests__/new';
import React, { Suspense, useEffect } from 'react';
import { render, act } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import nock from 'nock';

// relative imports to avoid circular dependency in tsconfig references
import {
  makeRenderRestHook,
  makeCacheProvider,
  mockInitialState,
} from '../../../../test';
import { ControllerContext, DispatchContext, StateContext } from '../context';
import { useController } from '../hooks';
import { State, ActionTypes } from '../../types';
import { INVALIDATE_TYPE, RESET_TYPE } from '../../actionTypes';
import { articlesPages } from '../test-fixtures';
import { Controller } from '../..';

async function testDispatchFetch(
  Component: React.FunctionComponent<any>,
  payloads: any[],
) {
  const dispatch = jest.fn();
  const controller = new Controller({ dispatch });
  const tree = (
    <ControllerContext.Provider value={controller}>
      <DispatchContext.Provider value={dispatch}>
        <Suspense fallback={null}>
          <Component />
        </Suspense>
      </DispatchContext.Provider>
    </ControllerContext.Provider>
  );
  render(tree);
  expect(dispatch).toHaveBeenCalledTimes(payloads.length);
  let i = 0;
  for (const call of dispatch.mock.calls) {
    delete call[0]?.meta?.createdAt;
    delete call[0]?.meta?.promise;
    expect(call[0]).toMatchSnapshot();
    const action = call[0];
    const res = await action.payload();
    expect(res).toEqual(payloads[i]);
    i++;
  }
}

function testRestHook(
  callback: () => void,
  state: State<unknown>,
  dispatch = (v: ActionTypes) => Promise.resolve(),
) {
  const controller = new Controller({ dispatch });
  return renderHook(callback, {
    wrapper: function Wrapper({ children }: { children: React.ReactNode }) {
      return (
        <ControllerContext.Provider value={controller}>
          <DispatchContext.Provider value={dispatch}>
            <StateContext.Provider value={state}>
              {children}
            </StateContext.Provider>
          </DispatchContext.Provider>
        </ControllerContext.Provider>
      );
    },
  });
}

let mynock: nock.Scope;

beforeAll(() => {
  nock(/.*/)
    .persist()
    .defaultReplyHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    })
    .options(/.*/)
    .reply(200);
  mynock = nock(/.*/).defaultReplyHeaders({
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  });
});

afterAll(() => {
  nock.cleanAll();
});

describe('useController.fetch', () => {
  const payload = { id: 1, content: 'hi' };

  it('should dispatch an action that fetches a create', async () => {
    mynock.post(`/article-cooler/`).reply(201, payload);

    function DispatchTester() {
      const { fetch } = useController();
      fetch(CoolerArticleResource.create(), { content: 'hi' }).then(v => {
        v.author;
        /*
        // @ts-expect-error
        v.doesnotexist;*/
      });
      return null;
    }
    await testDispatchFetch(DispatchTester, [payload]);
  });

  it('should handle zero argument Endpoints', async () => {
    const endpoint = CoolerArticleResource.list().extend({
      fetch() {
        return CoolerArticleResource.list().call(this as any, {});
      },
      url() {
        return '';
      },
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function DispatchTester() {
      const { fetch } = useController();
      fetch(endpoint).then(v => {
        v[0].author;
        /*
        // @ts-expect-error
        v.doesnotexist;*/
      });
      return null;
    }
  });

  it('should dispatch an action with updater in the meta if update shapes params are passed in', async () => {
    mynock.post(`/article-cooler/`).reply(201, payload);

    function DispatchTester() {
      const { fetch } = useController();
      const params = { content: 'hi' };
      fetch(CoolerArticleResource.create(), params).then(v => {
        v.title;
        /*
        // @ts-expect-error
        v.doesnotexist;*/
      });
      return null;
    }
    await testDispatchFetch(DispatchTester, [payload]);
  });

  it('should refresh get details', async () => {
    mynock.get(`/article-cooler/${payload.id}`).reply(200, payload);

    function DispatchTester() {
      const { fetch } = useController();
      // @ts-expect-error
      () => fetch(CoolerArticleResource.detail(), {}, { content: 'hi' });
      fetch(CoolerArticleResource.detail(), { id: payload.id }).then(v => {
        v.title;
        /*
        // @ts-expect-error
        v.doesnotexist;*/
      });
      return null;
    }
    await testDispatchFetch(DispatchTester, [payload]);
  });

  it('should console.error() a warning when fetching without a Provider', () => {
    const oldError = console.error;
    const spy = (console.error = jest.fn());
    renderHook(() => {
      const { fetch } = useController();
      fetch(CoolerArticleResource.create(), { content: 'hi' });
      return null;
    });
    expect(spy.mock.calls[0]).toMatchInlineSnapshot(`
      Array [
        "It appears you are trying to use Rest Hooks without a provider.
      Follow instructions: https://resthooks.io/docs/getting-started/installation#add-provider-at-top-level-component",
      ]
    `);
    console.error = oldError;
  });

  it('should dispatch an action that fetches a partial update', async () => {
    mynock.patch(`/article-cooler/1`).reply(200, payload);

    function DispatchTester() {
      const { fetch } = useController();
      fetch(
        CoolerArticleResource.partialUpdate(),
        { id: payload.id },
        { content: 'changed' },
      );
      return null;
    }
    await testDispatchFetch(DispatchTester, [payload]);
  });

  it('should dispatch an action that fetches a full update', async () => {
    mynock.put(`/article-cooler/1`).reply(200, payload);

    function DispatchTester() {
      const { fetch } = useController();
      fetch(
        CoolerArticleResource.update(),
        { id: payload.id },
        { content: 'changed' },
      );
      return null;
    }
    await testDispatchFetch(DispatchTester, [payload]);
  });
});

describe('useController().invalidate', () => {
  it('should not invalidate anything if params is null', () => {
    const state = mockInitialState([
      {
        request: PaginatedArticleResource.list(),
        params: {},
        result: articlesPages,
      },
    ]);
    const dispatch = jest.fn();
    let invalidate: any;
    testRestHook(
      () => {
        invalidate = useController().invalidate;
      },
      state,
      dispatch,
    );
    invalidate(PaginatedArticleResource.list(), null);
    expect(dispatch).not.toHaveBeenCalled();
  });
  it('should return a function that dispatches an action to invalidate a resource', () => {
    const state = mockInitialState([
      {
        request: PaginatedArticleResource.list(),
        params: {},
        result: articlesPages,
      },
    ]);
    const dispatch = jest.fn();
    let invalidate: any;
    testRestHook(
      () => {
        invalidate = useController().invalidate;
      },
      state,
      dispatch,
    );
    invalidate(PaginatedArticleResource.list(), {});
    expect(dispatch).toHaveBeenCalledWith({
      type: INVALIDATE_TYPE,
      meta: {
        key: 'GET http://test.com/article-paginated/',
      },
    });
  });
  it('should return the same === function each time', () => {
    const track = jest.fn();

    const { rerender } = renderHook(() => {
      const { invalidate } = useController();
      useEffect(track, [invalidate]);
    });
    expect(track.mock.calls.length).toBe(1);
    for (let i = 0; i < 4; ++i) {
      rerender();
    }
    expect(track.mock.calls.length).toBe(1);
  });
});

describe('useController().reset', () => {
  afterEach(() => {
    jest.useRealTimers();
  });
  it('should return a function that dispatches an action to reset the cache', async () => {
    jest.useFakeTimers();
    const state = mockInitialState([
      {
        endpoint: PaginatedArticleResource.list(),
        args: [{}],
        response: articlesPages,
      },
    ]);
    const dispatch = jest.fn();
    let reset: () => Promise<void> = () => Promise.resolve();
    testRestHook(
      () => {
        reset = useController().resetEntireStore;
      },
      state,
      dispatch,
    );
    await act(reset);
    expect(dispatch).toHaveBeenCalledWith({
      type: RESET_TYPE,
      date: Date.now(),
    });
  });
  it('should return the same === function each time', () => {
    const track = jest.fn();

    const { rerender } = renderHook(() => {
      const reset = useController().resetEntireStore;
      useEffect(track, [reset]);
    });
    expect(track.mock.calls.length).toBe(1);
    for (let i = 0; i < 4; ++i) {
      rerender();
    }
    expect(track.mock.calls.length).toBe(1);
  });
});
