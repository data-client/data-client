// eslint-env jest
import { WeakEntityMap, queryMemoized } from '@data-client/normalizr';
import { IDEntity } from '__tests__/new';
import { fromJS } from 'immutable';

import { denormalizeSimple } from './denormalize';
import { schema, DenormalizeNullable } from '../..';

let dateSpy: jest.SpyInstance<number, []>;
beforeAll(() => {
  dateSpy = jest
    // eslint-disable-next-line no-undef
    .spyOn(global.Date, 'now')
    .mockImplementation(() => new Date('2019-05-14T11:01:58.135Z').valueOf());
});
afterAll(() => {
  dateSpy.mockRestore();
});

const denormalize = denormalizeSimple;
class User extends IDEntity {
  name = '';
  isAdmin = false;
}

describe.each([
  ['direct', <T>(data: T) => data, <T>(data: T) => data],
  [
    'immutable',
    fromJS,
    (v: any) => (typeof v?.toJS === 'function' ? v.toJS() : v),
  ],
])(`input (%s)`, (_, createInput, createOutput) => {
  const SCHEMA_CASES = [
    ['All', new schema.Object({ results: new schema.All(User) })],
    [
      'Collection',
      new schema.Object({ results: new schema.Collection([User]) }),
    ],
  ] as const;
  if (_ === 'immutable') {
    delete (SCHEMA_CASES as any)[1];
  }

  describe.each(SCHEMA_CASES)(
    `${schema.Query.name} denormalization (%s schema)`,
    (_, usersSchema) => {
      const sortedUsers = new schema.Query(
        usersSchema,
        ({ results }, { asc } = { asc: false }) => {
          if (!results) return results;
          const sorted = [...results].sort((a, b) =>
            a.name.localeCompare(b.name),
          );
          if (asc) return sorted;
          return sorted.reverse();
        },
      );

      test('denormalize sorts', () => {
        const entities = {
          User: {
            1: { id: '1', name: 'Milo' },
            2: { id: '2', name: 'Jake' },
            3: { id: '3', name: 'Zeta' },
            4: { id: '4', name: 'Alpha' },
          },
          [new schema.Collection([User]).key]: {
            [new schema.Collection([User]).pk(undefined, undefined, '', [])]: [
              1, 2, 3, 4,
            ],
          },
        };
        const users: DenormalizeNullable<typeof sortedUsers> | symbol =
          queryMemoized(sortedUsers, [], createInput(entities), {}).data;
        expect(users).not.toEqual(expect.any(Symbol));
        if (typeof users === 'symbol') return;
        expect(users && users[0].name).toBe('Zeta');
        expect(users).toMatchSnapshot();
      });

      test('denormalize sorts with arg', () => {
        const entities = {
          User: {
            1: { id: '1', name: 'Milo' },
            2: { id: '2', name: 'Jake' },
            3: { id: '3', name: 'Zeta' },
            4: { id: '4', name: 'Alpha' },
          },
          [new schema.Collection([User]).key]: {
            [new schema.Collection([User]).pk(undefined, undefined, '', [
              { asc: true },
            ])]: [1, 2, 3, 4],
          },
        };
        expect(
          queryMemoized(
            sortedUsers,
            [{ asc: true }],
            createInput(entities),
            {},
            {},
            new WeakEntityMap(),
          ).data,
        ).toMatchSnapshot();
      });

      test.only('denormalizes should not be found when no entities are present', () => {
        const entities = {
          DOG: {
            1: { id: '1', name: 'Milo' },
            2: { id: '2', name: 'Jake' },
          },
        };
        const { data, isInvalid } = queryMemoized(
          sortedUsers,
          [],
          entities,
          {},
        );

        expect(createOutput(data)).toEqual(undefined);
      });

      test('denormalize aggregates', () => {
        const userCountByAdmin = new schema.Query(
          usersSchema,
          ({ results }, { isAdmin }: { isAdmin?: boolean } = {}) => {
            if (!results) return 0;
            if (isAdmin === undefined) return results.length;
            return results.filter(user => user.isAdmin === isAdmin).length;
          },
        );
        const entities = {
          User: {
            1: { id: '1', name: 'Milo' },
            2: { id: '2', name: 'Jake', isAdmin: true },
            3: { id: '3', name: 'Zeta' },
            4: { id: '4', name: 'Alpha' },
          },
          [new schema.Collection([User]).key]: {
            [new schema.Collection([User]).pk(undefined, undefined, '', [])]: [
              1, 2, 3, 4,
            ],
            [new schema.Collection([User]).pk(undefined, undefined, '', [
              { isAdmin: false },
            ])]: [1, 3, 4],
            [new schema.Collection([User]).pk(undefined, undefined, '', [
              { isAdmin: true },
            ])]: [2],
          },
        };
        const totalCount:
          | DenormalizeNullable<typeof userCountByAdmin>
          | symbol = queryMemoized(
          userCountByAdmin,
          [],
          createInput(entities),
          {},
        ).data;

        expect(totalCount).toBe(4);
        const nonAdminCount:
          | DenormalizeNullable<typeof userCountByAdmin>
          | symbol = queryMemoized(
          userCountByAdmin,
          [{ isAdmin: false }],
          createInput(entities),
          {},
          {},
          new WeakEntityMap(),
        ).data;
        expect(nonAdminCount).toBe(3);
        const adminCount:
          | DenormalizeNullable<typeof userCountByAdmin>
          | symbol = queryMemoized(
          userCountByAdmin,
          [{ isAdmin: true }],
          createInput(entities),
          {},
          {},
          new WeakEntityMap(),
        ).data;
        expect(adminCount).toBe(1);
        if (typeof totalCount === 'symbol') return;

        // typecheck
        totalCount !== undefined && totalCount + 5;
        // @ts-expect-error
        totalCount?.bob;
      });
    },
  );
});

describe('top level schema', () => {
  const sortedUsers = new schema.Query(
    new schema.Collection([User]),
    (results, { asc } = { asc: false }, ...args) => {
      if (!results) return results;
      const sorted = [...results].sort((a, b) => a.name.localeCompare(b.name));
      if (asc) return sorted;
      return sorted.reverse();
    },
  );

  test('denormalize sorts', () => {
    const entities = {
      User: {
        1: { id: '1', name: 'Milo' },
        2: { id: '2', name: 'Jake' },
        3: { id: '3', name: 'Zeta' },
        4: { id: '4', name: 'Alpha' },
      },
      [new schema.Collection([User]).key]: {
        [new schema.Collection([User]).pk({}, undefined, '', [])]: [1, 2, 3, 4],
      },
    };
    const users: DenormalizeNullable<typeof sortedUsers> | symbol =
      queryMemoized(sortedUsers, [], entities, {}).data;
    expect(users).not.toEqual(expect.any(Symbol));
    if (typeof users === 'symbol') return;
    expect(users && users[0].name).toBe('Zeta');
    expect(users).toMatchSnapshot();
  });

  test('denormalizes should not be found when no entities are present', () => {
    const entities = {
      DOG: {
        1: { id: '1', name: 'Milo' },
        2: { id: '2', name: 'Jake' },
      },
    };

    const value = queryMemoized(sortedUsers, [], entities, {}).data;

    expect(value).toEqual(undefined);
  });
});
