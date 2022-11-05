import type {
  SchemaSimple,
  Schema,
  UnvisitFunction,
  NormalizedIndex,
  EntityTable,
  EntityInterface,
} from './interface.js';
import type {
  AbstractInstanceType,
  Normalize,
  NormalizeNullable,
  Denormalize,
  DenormalizeNullable,
  DenormalizeObject,
  DenormalizeNullableObject,
  NormalizeObject,
  NormalizedNullableObject,
  EntityMap,
} from './normal.js';
import { default as Delete } from './schemas/Delete.js';

export { Delete, EntityMap };

export { EntityInterface } from './interface.js';

export class Array<S extends Schema = Schema> implements SchemaClass {
  constructor(
    definition: S,
    schemaAttribute?: S extends EntityMap<infer T>
      ? keyof T | SchemaFunction<keyof S>
      : undefined,
  );

  define(definition: Schema): void;
  readonly isSingleSchema: S extends EntityMap ? false : true;
  readonly schema: S;
  normalize(
    input: any,
    parent: any,
    key: any,
    visit: (...args: any) => any,
    addEntity: (...args: any) => any,
    visitedEntities: Record<string, any>,
  ): (S extends EntityMap ? UnionResult<S> : Normalize<S>)[];

  _normalizeNullable():
    | (S extends EntityMap ? UnionResult<S> : Normalize<S>)[]
    | undefined;

  denormalize(
    // eslint-disable-next-line @typescript-eslint/ban-types
    input: {},
    unvisit: UnvisitFunction,
  ): [
    denormalized: (S extends EntityMap<infer T> ? T : Denormalize<S>)[],
    found: boolean,
    suspend: boolean,
  ];

  _denormalizeNullable(): [
    (S extends EntityMap<infer T> ? T : Denormalize<S>)[] | undefined,
    false,
    boolean,
  ];

  infer(
    args: readonly any[],
    indexes: NormalizedIndex,
    recurse: (...args: any) => any,
  ): any;
}

export class Query<
  S extends EntityMap | EntityInterface = EntityMap | EntityInterface,
> implements SchemaClass
{
  process(
    entries: (S extends EntityMap<infer T> ? T : Denormalize<S>)[],
    context: any,
  ): (S extends EntityMap<infer T> ? T : Denormalize<S>)[];

  constructor(
    definition: S,
    options?: {
      schemaAttribute?: S extends EntityMap<infer T>
        ? keyof T | SchemaFunction<keyof S>
        : undefined;
      process?: (
        entries: (S extends EntityMap<infer T> ? T : Denormalize<S>)[],
        context: any,
      ) => (S extends EntityMap<infer T> ? T : Denormalize<S>)[];
    },
  );

  define(definition: Schema): void;
  readonly isSingleSchema: S extends EntityMap ? false : true;
  readonly schema: S;
  normalize(
    input: any,
    parent: any,
    key: any,
    visit: (...args: any) => any,
    addEntity: (...args: any) => any,
    visitedEntities: Record<string, any>,
  ): (S extends EntityMap ? UnionResult<S> : Normalize<S>)[];

  _normalizeNullable():
    | (S extends EntityMap ? UnionResult<S> : Normalize<S>)[]
    | undefined;

  denormalize(
    // eslint-disable-next-line @typescript-eslint/ban-types
    input: {},
    unvisit: UnvisitFunction,
  ): [
    denormalized: (S extends EntityMap<infer T> ? T : Denormalize<S>)[],
    found: boolean,
    suspend: boolean,
  ];

  _denormalizeNullable(): [
    (S extends EntityMap<infer T> ? T : Denormalize<S>)[] | undefined,
    false,
    boolean,
  ];

  infer(
    args: readonly any[],
    indexes: NormalizedIndex,
    recurse: (...args: any) => any,
  ): any;
}

export class Object<O extends Record<string, any> = Record<string, Schema>>
  implements SchemaClass
{
  constructor(definition: O);
  define(definition: Schema): void;
  readonly schema: O;
  normalize(
    input: any,
    parent: any,
    key: any,
    visit: (...args: any) => any,
    addEntity: (...args: any) => any,
    visitedEntities: Record<string, any>,
  ): NormalizeObject<O>;

  _normalizeNullable(): NormalizedNullableObject<O>;

  denormalize(
    // eslint-disable-next-line @typescript-eslint/ban-types
    input: {},
    unvisit: UnvisitFunction,
  ): [denormalized: DenormalizeObject<O>, found: boolean, suspend: boolean];

  _denormalizeNullable(): [DenormalizeNullableObject<O>, false, boolean];

  infer(
    args: readonly any[],
    indexes: NormalizedIndex,
    recurse: (...args: any) => any,
  ): any;
}

export class Union<Choices extends EntityMap = any> implements SchemaClass {
  constructor(
    definition: Choices,
    schemaAttribute:
      | keyof AbstractInstanceType<Choices[keyof Choices]>
      | SchemaFunction<keyof Choices>,
  );

  define(definition: Schema): void;
  inferSchema: SchemaAttributeFunction<Choices[keyof Choices]>;
  getSchemaAttribute: SchemaFunction<keyof Choices>;
  readonly schema: Choices;
  normalize(
    input: any,
    parent: any,
    key: any,
    visit: (...args: any) => any,
    addEntity: (...args: any) => any,
    visitedEntities: Record<string, any>,
  ): UnionResult<Choices>;

  _normalizeNullable(): UnionResult<Choices> | undefined;

  denormalize(
    // eslint-disable-next-line @typescript-eslint/ban-types
    input: {},
    unvisit: UnvisitFunction,
  ): [
    denormalized: AbstractInstanceType<Choices[keyof Choices]>,
    found: boolean,
    suspend: boolean,
  ];

  _denormalizeNullable(): [
    AbstractInstanceType<Choices[keyof Choices]> | undefined,
    false,
    boolean,
  ];

  infer(
    args: readonly any[],
    indexes: NormalizedIndex,
    recurse: (...args: any) => any,
  ): any;
}

export class Values<Choices extends Schema = any> implements SchemaClass {
  constructor(
    definition: Choices,
    schemaAttribute?: Choices extends EntityMap<infer T>
      ? keyof T | SchemaFunction<keyof Choices>
      : undefined,
  );

  define(definition: Schema): void;
  readonly isSingleSchema: Choices extends EntityMap ? false : true;
  inferSchema: SchemaAttributeFunction<
    Choices extends EntityMap ? Choices[keyof Choices] : Choices
  >;

  getSchemaAttribute: Choices extends EntityMap
    ? SchemaFunction<keyof Choices>
    : false;

  readonly schema: Choices;
  normalize(
    input: any,
    parent: any,
    key: any,
    visit: (...args: any) => any,
    addEntity: (...args: any) => any,
    visitedEntities: Record<string, any>,
  ): Record<
    string,
    Choices extends EntityMap ? UnionResult<Choices> : Normalize<Choices>
  >;

  _normalizeNullable():
    | Record<
        string,
        Choices extends EntityMap
          ? UnionResult<Choices>
          : NormalizeNullable<Choices>
      >
    | undefined;

  denormalize(
    // eslint-disable-next-line @typescript-eslint/ban-types
    input: {},
    unvisit: UnvisitFunction,
  ): [
    denormalized: Record<
      string,
      Choices extends EntityMap<infer T> ? T : Denormalize<Choices>
    >,
    found: boolean,
    suspend: boolean,
  ];

  _denormalizeNullable(): [
    Record<
      string,
      Choices extends EntityMap<infer T>
        ? T | undefined
        : DenormalizeNullable<Choices>
    >,
    false,
    boolean,
  ];

  infer(
    args: readonly any[],
    indexes: NormalizedIndex,
    recurse: (...args: any) => any,
  ): any;
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
export type { UnvisitFunction };
export type UnionResult<Choices extends EntityMap> = {
  id: string;
  schema: keyof Choices;
};
export interface SchemaClass<T = any, N = T | undefined>
  extends SchemaSimple<T> {
  // this is not an actual member, but is needed for the recursive NormalizeNullable<> type algo
  _normalizeNullable(): any;
  // this is not an actual member, but is needed for the recursive DenormalizeNullable<> type algo
  _denormalizeNullable(): [N, boolean, boolean];
}
