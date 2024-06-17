import { Article, PollingArticleResource } from '__tests__/new';

import { actionTypes, Controller, initialState } from '../..';
import { SubscribeAction, UnsubscribeAction } from '../../types';
import SubscriptionManager, { Subscription } from '../SubscriptionManager.js';

const { UNSUBSCRIBE_TYPE, SUBSCRIBE_TYPE, SET_RESPONSE_TYPE } = actionTypes;

function onError(e: any) {
  e.preventDefault();
}
beforeEach(() => {
  if (typeof addEventListener === 'function')
    addEventListener('error', onError);
});
afterEach(() => {
  if (typeof removeEventListener === 'function')
    removeEventListener('error', onError);
});

describe('SubscriptionManager', () => {
  class TestSubscription implements Subscription {
    add = jest.fn();
    remove = jest.fn(() => true);
    cleanup = jest.fn();
  }
  const manager = new SubscriptionManager(TestSubscription);
  const getState = () => initialState;

  describe('getMiddleware()', () => {
    it('should return the same value every call', () => {
      const a = manager.getMiddleware();
      expect(a).toBe(manager.getMiddleware());
      expect(a).toBe(manager.getMiddleware());
    });
  });

  describe('cleanup()', () => {
    it('should cleanup all Subcription members', () => {
      const sub = new TestSubscription();
      (manager as any).subscriptions[
        PollingArticleResource.get.key({ id: 5 })
      ] = sub;
      manager.cleanup();
      expect(sub.cleanup.mock.calls.length).toBe(1);
    });
  });

  describe('middleware', () => {
    function createSubscribeAction(
      payload: Record<string, any>,
      reject = false,
    ): SubscribeAction {
      const fetch =
        reject ?
          () => Promise.reject(new Error('Failed'))
        : () => Promise.resolve(payload);
      return {
        type: SUBSCRIBE_TYPE,
        endpoint: PollingArticleResource.get,
        meta: {
          key: PollingArticleResource.get.key({ id: payload.id }),
          args: [{ id: payload.id }],
        },
      };
    }
    function createUnsubscribeAction(
      payload: Record<string, any>,
    ): UnsubscribeAction {
      return {
        type: UNSUBSCRIBE_TYPE,
        endpoint: PollingArticleResource.get,
        meta: {
          key: PollingArticleResource.get.key({ id: payload.id }),
          args: [{ id: payload.id }],
        },
      };
    }

    const manager = new SubscriptionManager(TestSubscription);
    const middleware = manager.getMiddleware();
    const next = jest.fn();
    const dispatch = () => Promise.resolve();
    const controller = new Controller({ dispatch, getState });
    const API: Controller & { controller: Controller } = Object.create(
      controller,
      {
        controller: { value: controller },
      },
    );
    it('subscribe should add a subscription', () => {
      const action = createSubscribeAction({ id: 5 });
      middleware(API)(next)(action);

      expect(next).not.toHaveBeenCalled();
      expect((manager as any).subscriptions[action.meta.key]).toBeDefined();
    });
    it('subscribe should add a subscription (no frequency)', () => {
      const action = createSubscribeAction({ id: 597 });
      middleware(API)(next)(action);

      expect(next).not.toHaveBeenCalled();
      expect((manager as any).subscriptions[action.meta.key]).toBeDefined();
    });

    it('subscribe with same should call subscription.add', () => {
      const action = createSubscribeAction({ id: 5, title: 'four' });
      middleware(API)(next)(action);

      expect(
        (manager as any).subscriptions[action.meta.key].add.mock.calls.length,
      ).toBe(1);
      middleware(API)(next)(action);
      expect(
        (manager as any).subscriptions[action.meta.key].add.mock.calls.length,
      ).toBe(2);
    });
    it('subscribe with another should create another', () => {
      const action = createSubscribeAction({ id: 7, title: 'four cakes' });
      middleware(API)(next)(action);

      expect((manager as any).subscriptions[action.meta.key]).toBeDefined();
      expect(
        (manager as any).subscriptions[action.meta.key].add.mock.calls.length,
      ).toBe(0);
    });
    it('subscribe with another should not call previous', () => {
      expect(
        (manager as any).subscriptions[
          PollingArticleResource.get.key({ id: 5 })
        ].add.mock.calls.length,
      ).toBe(2);
    });

    it('unsubscribe should delete when remove returns true', () => {
      const action = createUnsubscribeAction({ id: 7, title: 'four cakes' });
      (manager as any).subscriptions[action.meta.key].remove.mockImplementation(
        () => true,
      );

      middleware(API)(next)(action);

      expect((manager as any).subscriptions[action.meta.key]).not.toBeDefined();
    });

    it('unsubscribe should delete when remove returns true (no frequency)', () => {
      middleware(API)(next)(
        createSubscribeAction({ id: 50, title: 'four cakes' }),
      );

      const action = createUnsubscribeAction({ id: 50, title: 'four cakes' });
      (manager as any).subscriptions[action.meta.key].remove.mockImplementation(
        () => true,
      );

      middleware(API)(next)(action);

      expect((manager as any).subscriptions[action.meta.key]).not.toBeDefined();
    });

    it('unsubscribe should not delete when remove returns false', () => {
      const action = createUnsubscribeAction({ id: 5, title: 'four cakes' });
      (manager as any).subscriptions[action.meta.key].remove.mockImplementation(
        () => false,
      );

      middleware(API)(next)(action);

      expect((manager as any).subscriptions[action.meta.key]).toBeDefined();
      expect(
        (manager as any).subscriptions[action.meta.key].remove.mock.calls
          .length,
      ).toBe(1);
    });

    it('unsubscribe should do nothing when there was no subscription already', () => {
      const oldError = console.error;
      const spy = (console.error = jest.fn());

      const action = createUnsubscribeAction({ id: 25 });

      middleware(API)(next)(action);

      expect((manager as any).subscriptions[action.meta.key]).not.toBeDefined();

      expect(spy.mock.calls[0]).toMatchInlineSnapshot(`
        [
          "Mismatched unsubscribe: GET http://test.com/article/25 is not subscribed",
        ]
      `);
      console.error = oldError;
    });

    it('should let other actions pass through', () => {
      const action = { type: SET_RESPONSE_TYPE };
      next.mockReset();

      middleware(API)(next)(action as any);

      expect(next.mock.calls.length).toBe(1);
    });
  });
});
