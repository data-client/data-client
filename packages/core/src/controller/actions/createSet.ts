import type {
  Denormalize,
  Queryable,
  SchemaArgs,
} from '@data-client/normalizr';

import { createMeta } from './createMeta.js';
import { SET_TYPE } from '../../actionTypes.js';
import type { SetAction } from '../../types.js';
import ensurePojo from '../ensurePojo.js';

export function createSet<S extends Queryable>(
  schema: S,
  {
    args,
    fetchedAt,
    value,
  }: {
    args: readonly [...SchemaArgs<S>];
    value: {} | ((previousValue: Denormalize<S>) => {});
    fetchedAt?: number;
  },
): SetAction<S> {
  return {
    type: SET_TYPE,
    schema,
    value,
    args: args.map(ensurePojo) as SchemaArgs<S>,
    meta: createMeta(60000, fetchedAt),
  };
}
