import React from 'react';
import { Entity } from '@rest-hooks/normalizr';
import { CoolerArticleResource } from '__tests__/new';
import { renderHook, RenderHookOptions } from '@testing-library/react-hooks';

// relative imports to avoid circular dependency in tsconfig references
import { Endpoint } from '@rest-hooks/endpoint';
import { StateContext } from '@rest-hooks/core';

import { makeRenderRestHook, makeCacheProvider } from '../../../../test';
import { useExpiresAt } from '../hooks';
import { payload } from '../test-fixtures';
import { State, useDenormalized } from '../..';

export default class IDEntity extends Entity {
  readonly id: string | number | undefined = undefined;
  pk(parent?: any, key?: string): string | undefined {
    return `${this.id}`;
  }
}
class Ingredients extends IDEntity {
  readonly name = '';
}
class Tacos extends IDEntity {
  readonly type = '';
  readonly ingredients: Ingredients[] = [];

  static schema = {
    ingredients: [Ingredients],
  };
}

describe('useExpiresAt()', () => {
  let renderRestHook: ReturnType<typeof makeRenderRestHook>;
  beforeEach(() => {
    renderRestHook = makeRenderRestHook(makeCacheProvider);
  });

  it('age is minimum of entities', () => {
    const ListTaco = new Endpoint(
      (a: Record<string, unknown>) => Promise.resolve({}),
      {
        schema: [Tacos],
        key: () => 'listtaco',
      },
    );
    const state = {
      entities: {
        Tacos: {
          '1': { id: '1', type: 'foo', ingredients: ['1'] },
          '2': { id: '2', type: 'bar', ingredients: [] },
        },
        Ingredients: {
          '1': { id: '1', name: 'rice' },
        },
      },
      entityMeta: {
        Tacos: {
          '1': { date: 0, expiresAt: 1000 },
          '2': { date: 0, expiresAt: 2000 },
        },
        Ingredients: {
          '1': { date: 0, expiresAt: 500 },
        },
      },
      indexes: {},
      results: { [ListTaco.key({})]: ['1', '2'] },
      meta: {},
      optimistic: [],
      lastReset: -Infinity,
    };

    const wrapper = function ConfiguredCacheProvider({
      children,
    }: {
      children: React.ReactNode;
    }) {
      return (
        <StateContext.Provider value={state}>{children}</StateContext.Provider>
      );
    };

    const { result } = renderHook(
      () => {
        const [denormalized, ready, deleted, resolvedEntities] =
          useDenormalized(ListTaco, {}, state);
        return useExpiresAt(ListTaco, {}, resolvedEntities);
      },
      { wrapper },
    );
    expect(result.current).toBe(500);
  });

  it('age ignores unused entities', () => {
    const ListTaco = new Endpoint(
      (a: Record<string, unknown>) => Promise.resolve({}),
      {
        schema: [Tacos],
        key: () => 'listtaco',
      },
    );
    const DetailTaco = new Endpoint((a: { id: any }) => Promise.resolve({}), {
      schema: Tacos,
      key: ({ id }: { id: any }) => `detailtaco ${id}`,
    });
    const state: State<unknown> = {
      entities: {
        Tacos: {
          1: { id: '1', type: 'foo', ingredients: ['1'] },
          2: { id: '2', type: 'bar', ingredients: [] },
          3: { id: '3', type: 'a', ingredients: [] },
        },
        Ingredients: {
          1: { id: '1', name: 'rice' },
          2: { id: '2', name: 'beans' },
        },
      },
      entityMeta: {
        Tacos: {
          1: { date: 0, expiresAt: 1000 },
          2: { date: 0, expiresAt: 2000 },
          3: { date: 0, expiresAt: 0 },
        },
        Ingredients: {
          1: { date: 0, expiresAt: 500 },
          2: { date: 0, expiresAt: 0 },
        },
      },
      indexes: {},
      results: { [ListTaco.key({})]: ['1', '2'] },
      meta: {},
      optimistic: [],
      lastReset: -Infinity,
    };

    const wrapper = function ConfiguredCacheProvider({
      children,
    }: {
      children: React.ReactNode;
    }) {
      return (
        <StateContext.Provider value={state}>{children}</StateContext.Provider>
      );
    };

    const { result } = renderHook(
      () => {
        const [denormalized, ready, deleted, resolvedEntities] =
          useDenormalized(ListTaco, {}, state);
        return useExpiresAt(ListTaco, {}, resolvedEntities);
      },
      { wrapper },
    );
    expect(result.current).toBe(500);

    const { result: result2 } = renderHook(
      () => {
        const [denormalized, ready, deleted, resolvedEntities] =
          useDenormalized(DetailTaco, { id: '2' }, state);
        return useExpiresAt(DetailTaco, { id: '2' }, resolvedEntities);
      },
      { wrapper },
    );
    expect(result2.current).toBe(2000);
  });
});
