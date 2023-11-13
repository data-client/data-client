import type { schema } from './index.js';
import type {
  SchemaSimple,
  Schema,
  PolymorphicInterface,
} from './interface.js';
import type { EntityMap } from './normal.js';
import { CollectionOptions } from './schemas/Collection.js';
import { default as Invalidate } from './schemas/Invalidate.js';

export { EntityMap, Invalidate };

export { EntityInterface } from './interface.js';

export type CollectionArrayAdder<S extends PolymorphicInterface> =
  S extends (
    {
      // ensure we are an array type
      denormalize(...args: any): any[];
      // get what we are an array of
      schema: infer T;
    }
  ) ?
    // TODO: eventually we want to allow singular or list and infer the return based on arguments
    T
  : never;

export interface CollectionInterface<
  S extends PolymorphicInterface = any,
  Args extends any[] = any[],
  Parent = any,
> {
  addWith<P extends any[] = Args>(
    merge: (existing: any, incoming: any) => any,
    createCollectionFilter?: (
      ...args: P
    ) => (collectionKey: Record<string, string>) => boolean,
  ): schema.Collection<S, P>;

  readonly cacheWith: object;

  readonly schema: S;
  readonly key: string;
  pk(value: any, parent: any, key: string, args: any[]): string;
  normalize(
    input: any,
    parent: Parent,
    key: string,
    visit: (...args: any) => any,
    addEntity: (...args: any) => any,
    visitedEntities: Record<string, any>,
    storeEntities: any,
    args: Args,
  ): string;

  merge(existing: any, incoming: any): any;
  shouldReorder(
    existingMeta: {
      date: number;
      fetchedAt: number;
    },
    incomingMeta: {
      date: number;
      fetchedAt: number;
    },
    existing: any,
    incoming: any,
  ): boolean;

  mergeWithStore(
    existingMeta: {
      date: number;
      fetchedAt: number;
    },
    incomingMeta: {
      date: number;
      fetchedAt: number;
    },
    existing: any,
    incoming: any,
  ): any;

  mergeMetaWithStore(
    existingMeta: {
      expiresAt: number;
      date: number;
      fetchedAt: number;
    },
    incomingMeta: {
      expiresAt: number;
      date: number;
      fetchedAt: number;
    },
    existing: any,
    incoming: any,
  ): {
    expiresAt: number;
    date: number;
    fetchedAt: number;
  };

  infer(
    args: unknown,
    indexes: unknown,
    recurse: unknown,
    entities: unknown,
  ): any;

  createIfValid: (value: any) => any | undefined;
  denormalize(
    input: any,
    args: readonly any[],
    unvisit: (input: any, schema: any) => any,
  ): ReturnType<S['denormalize']>;

  _denormalizeNullable(): ReturnType<S['_denormalizeNullable']>;
  _normalizeNullable(): ReturnType<S['_normalizeNullable']>;

  /** Schema to place at the *end* of this Collection
   * @see https://dataclient.io/rest/api/Collection#push
   */
  push: CollectionArrayAdder<S>;

  /** Schema to place at the *beginning* of this Collection
   * @see https://dataclient.io/rest/api/Collection#unshift
   */
  unshift: CollectionArrayAdder<S>;

  /** Schema to merge with a Values Collection
   * @see https://dataclient.io/rest/api/Collection#assign
   */
  assign: S extends { denormalize(...args: any): Record<string, unknown> } ?
    schema.Collection<S, Args, Parent>
  : never;
}
export type CollectionFromSchema<
  S extends any[] | PolymorphicInterface = any,
  Args extends any[] = [
    urlParams: Record<string, any>,
    body?: Record<string, any>,
  ],
  Parent = any,
> = CollectionInterface<
  S extends any[] ? schema.Array<S[number]> : S,
  Args,
  Parent
>;

export interface CollectionConstructor {
  new <
    S extends SchemaSimple[] | PolymorphicInterface = any,
    Args extends any[] = [
      urlParams: Record<string, any>,
      body?: Record<string, any>,
    ],
    Parent = any,
  >(
    schema: S,
    options?: CollectionOptions<Args, Parent>,
  ): CollectionFromSchema<S, Args, Parent>;
  readonly prototype: CollectionInterface;
}

export type StrategyFunction<T> = (value: any, parent: any, key: string) => T;
export type SchemaFunction<K = string> = (
  value: any,
  parent: any,
  key: string,
) => K;
export type MergeFunction = (entityA: any, entityB: any) => any;
export type SchemaAttributeFunction<S extends Schema> = (
  value: any,
  parent: any,
  key: string,
) => S;
export type UnionResult<Choices extends EntityMap> = {
  id: string;
  schema: keyof Choices;
};
