interface NetworkError$1 extends Error {
    status: number;
    response?: Response;
}
interface UnknownError extends Error {
    status?: unknown;
    response?: unknown;
}
type ErrorTypes = NetworkError$1 | UnknownError;

type AbstractInstanceType<T> = T extends new (...args: any) => infer U ? U : T extends {
    prototype: infer U;
} ? U : never;
type DenormalizeObject<S extends Record<string, any>> = {
    [K in keyof S]: S[K] extends Schema ? Denormalize<S[K]> : S[K];
};
type DenormalizeNullableObject<S extends Record<string, any>> = {
    [K in keyof S]: S[K] extends Schema ? DenormalizeNullable<S[K]> : S[K];
};
type NormalizeObject<S extends Record<string, any>> = {
    [K in keyof S]: S[K] extends Schema ? Normalize<S[K]> : S[K];
};
type NormalizedNullableObject<S extends Record<string, any>> = {
    [K in keyof S]: S[K] extends Schema ? NormalizeNullable<S[K]> : S[K];
};
interface NestedSchemaClass<T = any> {
    schema: Record<string, Schema>;
    prototype: T;
}
interface RecordClass<T = any> extends NestedSchemaClass<T> {
    fromJS: (...args: any) => AbstractInstanceType<T>;
}
type DenormalizeNullableNestedSchema<S extends NestedSchemaClass> = keyof S['schema'] extends never ? S['prototype'] : string extends keyof S['schema'] ? S['prototype'] : S['prototype'] & {
    [K in keyof S['schema']]: DenormalizeNullable<S['schema'][K]>;
};
type DenormalizeReturnType<T> = T extends (input: any, unvisit: any) => [infer R, any, any] ? R : never;
type NormalizeReturnType<T> = T extends (...args: any) => infer R ? R : never;
type Denormalize<S> = S extends EntityInterface<infer U> ? U : S extends RecordClass ? AbstractInstanceType<S> : S extends {
    denormalizeOnly: (...args: any) => any;
} ? ReturnType<S['denormalizeOnly']> : S extends {
    denormalize: (...args: any) => any;
} ? DenormalizeReturnType<S['denormalize']> : S extends Serializable<infer T> ? T : S extends Array<infer F> ? Denormalize<F>[] : S extends {
    [K: string]: any;
} ? DenormalizeObject<S> : S;
type DenormalizeNullable<S> = S extends EntityInterface<any> ? DenormalizeNullableNestedSchema<S> | undefined : S extends RecordClass ? DenormalizeNullableNestedSchema<S> : S extends {
    _denormalizeNullable: (...args: any) => any;
} ? DenormalizeReturnType<S['_denormalizeNullable']> : S extends Serializable<infer T> ? T : S extends Array<infer F> ? Denormalize<F>[] | undefined : S extends {
    [K: string]: any;
} ? DenormalizeNullableObject<S> : S;
type Normalize<S> = S extends EntityInterface ? string : S extends RecordClass ? NormalizeObject<S['schema']> : S extends {
    normalize: (...args: any) => any;
} ? NormalizeReturnType<S['normalize']> : S extends Serializable<infer T> ? T : S extends Array<infer F> ? Normalize<F>[] : S extends {
    [K: string]: any;
} ? NormalizeObject<S> : S;
type NormalizeNullable<S> = S extends EntityInterface ? string | undefined : S extends RecordClass ? NormalizedNullableObject<S['schema']> : S extends {
    _normalizeNullable: (...args: any) => any;
} ? NormalizeReturnType<S['_normalizeNullable']> : S extends Serializable<infer T> ? T : S extends Array<infer F> ? Normalize<F>[] | undefined : S extends {
    [K: string]: any;
} ? NormalizedNullableObject<S> : S;
interface EntityMap<T = any> {
    readonly [k: string]: EntityInterface<T>;
}

interface SnapshotInterface {
    getResponse: <E extends Pick<EndpointInterface, 'key' | 'schema' | 'invalidIfStale'>, Args extends readonly [...Parameters<E['key']>]>(endpoint: E, ...args: Args) => {
        data: DenormalizeNullable<E['schema']>;
        expiryStatus: ExpiryStatusInterface;
        expiresAt: number;
    };
    getError: <E extends Pick<EndpointInterface, 'key'>, Args extends readonly [...Parameters<E['key']>]>(endpoint: E, ...args: Args) => ErrorTypes | undefined;
    readonly fetchedAt: number;
}
type ExpiryStatusInterface = 1 | 2 | 3;

/** Get the Params type for a given Shape */
type EndpointParam<E> = E extends (first: infer A, ...rest: any) => any ? A : E extends {
    key: (first: infer A, ...rest: any) => any;
} ? A : never;
/** What the function's promise resolves to */
type ResolveType<E extends (...args: any) => any> = ReturnType<E> extends Promise<infer R> ? R : never;
type PartialParameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? Partial<P> : never;

type FetchFunction<A extends readonly any[] = any, R = any> = (...args: A) => Promise<R>;
interface EndpointExtraOptions<F extends FetchFunction = FetchFunction> {
    /** Default data expiry length, will fall back to NetworkManager default if not defined */
    readonly dataExpiryLength?: number;
    /** Default error expiry length, will fall back to NetworkManager default if not defined */
    readonly errorExpiryLength?: number;
    /** Poll with at least this frequency in miliseconds */
    readonly pollFrequency?: number;
    /** Marks cached resources as invalid if they are stale */
    readonly invalidIfStale?: boolean;
    /** Determines whether to throw or fallback to */
    errorPolicy?(error: any): 'hard' | 'soft' | undefined;
    /** Enables optimistic updates for this request - uses return value as assumed network response */
    getOptimisticResponse?(snap: SnapshotInterface, ...args: Parameters<F>): ResolveType<F>;
    /** User-land extra data to send */
    readonly extra?: any;
}

type Schema = null | string | {
    [K: string]: any;
} | Schema[] | SchemaSimple | Serializable;
type Serializable<T extends {
    toJSON(): string;
} = {
    toJSON(): string;
}> = {
    prototype: T;
};
interface SchemaSimple<T = any> {
    normalize(input: any, parent: any, key: any, visit: (...args: any) => any, addEntity: (...args: any) => any, visitedEntities: Record<string, any>, storeEntities: any, args: any[]): any;
    denormalize(input: {}, unvisit: UnvisitFunction): [denormalized: T, found: boolean, suspend: boolean];
    denormalizeOnly?(input: {}, args: any, unvisit: (input: any, schema: any) => any): T;
    infer(args: readonly any[], indexes: NormalizedIndex, recurse: (...args: any) => any, entities: EntityTable): any;
}
interface SchemaSimpleNew<T = any> {
    normalize(input: any, parent: any, key: any, visit: (...args: any) => any, addEntity: (...args: any) => any, visitedEntities: Record<string, any>, storeEntities: any, args?: any[]): any;
    denormalizeOnly(input: {}, args: readonly any[], unvisit: (input: any, schema: any) => any): T;
    infer(args: readonly any[], indexes: NormalizedIndex, recurse: (...args: any) => any, entities: EntityTable): any;
}
interface SchemaClass$1<T = any, N = T | undefined> extends SchemaSimple<T> {
    _normalizeNullable(): any;
    _denormalizeNullable(): [N, boolean, boolean];
}
interface EntityInterface<T = any> extends SchemaSimple {
    createIfValid?(props: any): any;
    pk(params: any, parent?: any, key?: string, args?: any[]): string | undefined;
    readonly key: string;
    merge(existing: any, incoming: any): any;
    expiresAt?(meta: any, input: any): number;
    mergeWithStore?(existingMeta: any, incomingMeta: any, existing: any, incoming: any): any;
    mergeMetaWithStore?(existingMeta: any, incomingMeta: any, existing: any, incoming: any): any;
    useIncoming?(existingMeta: any, incomingMeta: any, existing: any, incoming: any): boolean;
    indexes?: any;
    schema: Record<string, Schema>;
    prototype: T;
}
/** Represents Array or Values */
interface PolymorphicInterface<T = any> extends SchemaSimpleNew<T> {
    readonly schema: any;
    _normalizeNullable(): any;
    _denormalizeNullable(): [any, boolean, boolean];
}
interface UnvisitFunction {
    (input: any, schema: any): [any, boolean, boolean] | any;
    og?: UnvisitFunction;
    setLocal?: (entity: any) => void;
}
interface NormalizedIndex {
    readonly [entityKey: string]: {
        readonly [indexName: string]: {
            readonly [lookup: string]: string;
        };
    };
}
interface EntityTable {
    [entityKey: string]: {
        [pk: string]: unknown;
    } | undefined;
}
/** Defines a networking endpoint */
interface EndpointInterface<F extends FetchFunction = FetchFunction, S extends Schema | undefined = Schema | undefined, M extends true | undefined = true | undefined> extends EndpointExtraOptions<F> {
    (...args: Parameters<F>): ReturnType<F>;
    key(...args: Parameters<F>): string;
    readonly sideEffect?: M;
    readonly schema?: S;
}
/** For retrieval requests */
type ReadEndpoint<F extends FetchFunction = FetchFunction, S extends Schema | undefined = Schema | undefined> = EndpointInterface<F, S, undefined>;

/* eslint-disable @typescript-eslint/ban-types */


interface EndpointOptions<
  F extends FetchFunction = FetchFunction,
  S extends Schema | undefined = undefined,
  M extends true | undefined = undefined,
> extends EndpointExtraOptions<F> {
  key?: (...args: Parameters<F>) => string;
  sideEffect?: M;
  schema?: S;
  [k: string]: any;
}

interface EndpointExtendOptions<
  F extends FetchFunction = FetchFunction,
  S extends Schema | undefined = Schema | undefined,
  M extends true | undefined = true | undefined,
> extends EndpointOptions<F, S, M> {
  fetch?: FetchFunction;
}

type KeyofEndpointInstance = keyof EndpointInstance<FetchFunction>;

type ExtendedEndpoint<
  O extends EndpointExtendOptions<F>,
  E extends EndpointInstance<
    FetchFunction,
    Schema | undefined,
    true | undefined
  >,
  F extends FetchFunction,
> = EndpointInstance<
  'fetch' extends keyof O ? Exclude<O['fetch'], undefined> : E['fetch'],
  'schema' extends keyof O ? O['schema'] : E['schema'],
  'sideEffect' extends keyof O ? O['sideEffect'] : E['sideEffect']
> &
  Omit<O, KeyofEndpointInstance> &
  Omit<E, KeyofEndpointInstance>;

/**
 * Defines an async data source.
 * @see https://resthooks.io/docs/api/Endpoint
 */
interface EndpointInstance<
  F extends (...args: any) => Promise<any> = FetchFunction,
  S extends Schema | undefined = Schema | undefined,
  M extends true | undefined = true | undefined,
> extends EndpointInstanceInterface<F, S, M> {
  extend<
    E extends EndpointInstance<
      (...args: any) => Promise<any>,
      Schema | undefined,
      true | undefined
    >,
    O extends EndpointExtendOptions<F> &
      Partial<Omit<E, keyof EndpointInstance<FetchFunction>>> &
      Record<string, unknown>,
  >(
    this: E,
    options: Readonly<O>,
  ): ExtendedEndpoint<typeof options, E, F>;
}

/**
 * Defines an async data source.
 * @see https://resthooks.io/docs/api/Endpoint
 */
interface EndpointInstanceInterface<
  F extends FetchFunction = FetchFunction,
  S extends Schema | undefined = Schema | undefined,
  M extends true | undefined = true | undefined,
> extends EndpointInterface<F, S, M> {
  constructor: EndpointConstructor;

  /**
   * Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.
   * @param thisArg The object to be used as the this object.
   * @param argArray A set of arguments to be passed to the function.
   */
  apply<E extends FetchFunction>(
    this: E,
    thisArg: ThisParameterType<E>,
    argArray?: Parameters<E>,
  ): ReturnType<E>;

  /**
   * Calls a method of an object, substituting another object for the current object.
   * @param thisArg The object to be used as the current object.
   * @param argArray A list of arguments to be passed to the method.
   */
  call<E extends FetchFunction>(
    this: E,
    thisArg: ThisParameterType<E>,
    ...argArray: Parameters<E>
  ): ReturnType<E>;

  /**
   * For a given function, creates a bound function that has the same body as the original function.
   * The this object of the bound function is associated with the specified object, and has the specified initial parameters.
   * @param thisArg An object to which the this keyword can refer inside the new function.
   * @param argArray A list of arguments to be passed to the new function.
   */
  bind<E extends FetchFunction, P extends PartialParameters<E>>(
    this: E,
    thisArg: ThisParameterType<E>,
    ...args: readonly [...P]
  ): EndpointInstance<
    (...args: readonly [...RemoveArray<Parameters<E>, P>]) => ReturnType<E>,
    S,
    M
  > &
    Omit<E, keyof EndpointInstance<FetchFunction>>;

  /** Returns a string representation of a function. */
  toString(): string;

  prototype: any;
  readonly length: number;

  // Non-standard extensions
  arguments: any;
  caller: F;

  key(...args: Parameters<F>): string;

  readonly sideEffect: M;

  readonly schema: S;

  fetch: F;

  /* utilities */
  /** @see https://resthooks.io/rest/api/Endpoint#testKey */
  testKey(key: string): boolean;
}

interface EndpointConstructor {
  new <
    F extends (
      this: EndpointInstance<FetchFunction> & E,
      params?: any,
      body?: any,
    ) => Promise<any>,
    S extends Schema | undefined = undefined,
    M extends true | undefined = undefined,
    E extends Record<string, any> = {},
  >(
    fetchFunction: F,
    options?: EndpointOptions<F, S, M> & E,
  ): EndpointInstance<F, S, M> & E;
  readonly prototype: Function;
}
declare let Endpoint: EndpointConstructor;


interface ExtendableEndpointConstructor {
  new <
    F extends (
      this: EndpointInstanceInterface<FetchFunction> & E,
      params?: any,
      body?: any,
    ) => Promise<any>,
    S extends Schema | undefined = undefined,
    M extends true | undefined = undefined,
    E extends Record<string, any> = {},
  >(
    RestFetch: F,
    options?: Readonly<EndpointOptions<F, S, M>> & E,
  ): EndpointInstanceInterface<F, S, M> & E;
  readonly prototype: Function;
}
declare let ExtendableEndpoint: ExtendableEndpointConstructor;

type RemoveArray<Orig extends any[], Rem extends any[]> = Rem extends [
  any,
  ...infer RestRem,
]
  ? Orig extends [any, ...infer RestOrig]
    ? RemoveArray<RestOrig, RestRem>
    : never
  : Orig;

type CollectionOptions<Parent extends any[] = [
    urlParams: Record<string, any>,
    body?: Record<string, any>
]> = {
    nestKey: (parent: any, key: string) => Record<string, any>;
    createCollectionFilter?: (...args: Parent) => (collectionKey: Record<string, string>) => boolean;
} | {
    argsKey: (...args: any) => Record<string, any>;
    createCollectionFilter?: (...args: Parent) => (collectionKey: Record<string, string>) => boolean;
};

/**
 * Marks entity as Invalid.
 *
 * This triggers suspense for all endpoints requiring it.
 * Optional (like variable sized Array and Values) will simply remove the item.
 * @see https://resthooks.io/rest/api/Invalidate
 */
declare class Invalidate<E extends EntityInterface & {
    process: any;
}> implements SchemaSimpleNew {
    protected _entity: E;
    constructor(entity: E);
    get key(): string;
    /** Normalize lifecycles **/
    normalize(input: any, parent: any, key: string | undefined, visit: (...args: any) => any, addEntity: (...args: any) => any, visitedEntities: Record<string, any>, storeEntities: Record<string, any>, args?: any[]): string | undefined;
    merge(existing: any, incoming: any): any;
    mergeWithStore(existingMeta: any, incomingMeta: any, existing: any, incoming: any): any;
    mergeMetaWithStore(existingMeta: {
        expiresAt: number;
        date: number;
        fetchedAt: number;
    }, incomingMeta: {
        expiresAt: number;
        date: number;
        fetchedAt: number;
    }, existing: any, incoming: any): {
        expiresAt: number;
        date: number;
        fetchedAt: number;
    };
    /** /End Normalize lifecycles **/
    infer(args: any, indexes: any, recurse: any): any;
    denormalizeOnly(id: string, args: readonly any[], unvisit: (input: any, schema: any) => any): AbstractInstanceType<E>;
    _denormalizeNullable(): [
        AbstractInstanceType<E> | undefined,
        boolean,
        false
    ];
    _normalizeNullable(): string | undefined;
}

/**
 * Marks entity as deleted.
 * @see https://resthooks.io/rest/api/Delete
 */
declare class Delete<E extends EntityInterface & {
    process: any;
}> extends Invalidate<E> implements SchemaClass {
    denormalize(id: string, unvisit: UnvisitFunction): [denormalized: AbstractInstanceType<E>, found: boolean, suspend: boolean];
}

type Constructor = abstract new (...args: any[]) => {};
type IDClass = abstract new (...args: any[]) => {
    id: string | number | undefined;
};
type PKClass = abstract new (...args: any[]) => {
    pk(parent?: any, key?: string, args?: readonly any[]): string | undefined;
};
type ValidSchemas<TInstance> = {
    [k in keyof TInstance]?: Schema;
};
type EntityOptions<TInstance extends {}> = {
    readonly schema?: ValidSchemas<TInstance>;
    readonly pk?: ((value: TInstance, parent?: any, key?: string) => string | undefined) | keyof TInstance;
    readonly key?: string;
} & {
    readonly [K in Extract<keyof IEntityClass, 'process' | 'merge' | 'expiresAt' | 'createIfValid' | 'mergeWithStore' | 'validate' | 'shouldReorder' | 'useIncoming'>]?: IEntityClass<abstract new (...args: any[]) => TInstance>[K];
};
interface RequiredPKOptions<TInstance extends {}> extends EntityOptions<TInstance> {
    readonly pk: ((value: TInstance, parent?: any, key?: string) => string | undefined) | keyof TInstance;
}
interface IEntityClass<TBase extends Constructor = any> {
    toJSON(): {
        name: string;
        schema: {
            [k: string]: Schema;
        };
        key: string;
    };
    /** Defines nested entities
     *
     * @see https://resthooks.io/rest/api/Entity#schema
     */
    schema: {
        [k: string]: Schema;
    };
    /** Returns the globally unique identifier for the static Entity
     *
     * @see https://resthooks.io/docs/api/Entity#key
     */
    key: string;
    /** Defines indexes to enable lookup by
     *
     * @see https://resthooks.io/rest/api/Entity#indexes
     */
    indexes?: readonly string[] | undefined;
    /**
     * A unique identifier for each Entity
     *
     * @see https://resthooks.io/docs/api/Entity#pk
     * @param [value] POJO of the entity or subset used
     * @param [parent] When normalizing, the object which included the entity
     * @param [key] When normalizing, the key where this entity was found
     */
    pk<T extends (abstract new (...args: any[]) => IEntityInstance & InstanceType<TBase>) & IEntityClass & TBase>(this: T, value: Partial<AbstractInstanceType<T>>, parent?: any, key?: string, args?: any[]): string | undefined;
    /** Return true to merge incoming data; false keeps existing entity
     *
     * @see https://resthooks.io/docs/api/schema.Entity#useIncoming
     */
    useIncoming(existingMeta: {
        date: number;
        fetchedAt: number;
    }, incomingMeta: {
        date: number;
        fetchedAt: number;
    }, existing: any, incoming: any): boolean;
    /** Determines the order of incoming entity vs entity already in store\
     *
     * @see https://resthooks.io/docs/api/schema.Entity#shouldReorder
     * @returns true if incoming entity should be first argument of merge()
     */
    shouldReorder(existingMeta: {
        date: number;
        fetchedAt: number;
    }, incomingMeta: {
        date: number;
        fetchedAt: number;
    }, existing: any, incoming: any): boolean;
    /** Creates new instance copying over defined values of arguments
     *
     * @see https://resthooks.io/docs/api/schema.Entity#merge
     */
    merge(existing: any, incoming: any): any;
    /** Run when an existing entity is found in the store
     *
     * @see https://resthooks.io/docs/api/schema.Entity#mergeWithStore
     */
    mergeWithStore(existingMeta: {
        date: number;
        fetchedAt: number;
    }, incomingMeta: {
        date: number;
        fetchedAt: number;
    }, existing: any, incoming: any): any;
    /** Run when an existing entity is found in the store
     *
     * @see https://resthooks.io/docs/api/schema.Entity#mergeMetaWithStore
     */
    mergeMetaWithStore(existingMeta: {
        expiresAt: number;
        date: number;
        fetchedAt: number;
    }, incomingMeta: {
        expiresAt: number;
        date: number;
        fetchedAt: number;
    }, existing: any, incoming: any): {
        expiresAt: number;
        date: number;
        fetchedAt: number;
    };
    /** Factory method to convert from Plain JS Objects.
     *
     * @param [props] Plain Object of properties to assign.
     */
    fromJS<T extends (abstract new (...args: any[]) => IEntityInstance & InstanceType<TBase>) & IEntityClass & TBase>(this: T, props?: Partial<AbstractInstanceType<T>>): AbstractInstanceType<T>;
    /** Called when denormalizing an entity to create an instance when 'valid'
     *
     * @param [props] Plain Object of properties to assign.
     * @see https://resthooks.io/docs/api/Entity#createIfValid
     */
    createIfValid<T extends (abstract new (...args: any[]) => IEntityInstance & InstanceType<TBase>) & IEntityClass & TBase>(this: T, props: Partial<AbstractInstanceType<T>>): AbstractInstanceType<T> | undefined;
    /** Do any transformations when first receiving input
     *
     * @see https://resthooks.io/docs/api/Entity#process
     */
    process(input: any, parent: any, key: string | undefined): any;
    normalize(input: any, parent: any, key: string | undefined, visit: (...args: any) => any, addEntity: (...args: any) => any, visitedEntities: Record<string, any>): any;
    /** Do any transformations when first receiving input
     *
     * @see https://resthooks.io/docs/api/Entity#validate
     */
    validate(processedEntity: any): string | undefined;
    /** Attempts to infer results
     *
     * @see https://resthooks.io/docs/api/Entity#infer
     */
    infer(args: readonly any[], indexes: NormalizedIndex, recurse: any): any;
    denormalize<T extends (abstract new (...args: any[]) => IEntityInstance & InstanceType<TBase>) & IEntityClass & TBase>(this: T, input: any, unvisit: UnvisitFunction): [denormalized: AbstractInstanceType<T>, found: boolean, suspend: boolean];
    denormalizeOnly<T extends (abstract new (...args: any[]) => IEntityInstance & InstanceType<TBase>) & IEntityClass & TBase>(this: T, input: any, unvisit: (input: any, schema: any) => any): AbstractInstanceType<T>;
    /** All instance defaults set */
    readonly defaults: any;
}
interface IEntityInstance {
    /**
     * A unique identifier for each Entity
     *
     * @param [parent] When normalizing, the object which included the entity
     * @param [key] When normalizing, the key where this entity was found
     */
    pk(parent?: any, key?: string, args?: readonly any[]): string | undefined;
}

/**
 * Represents arrays
 * @see https://resthooks.io/rest/api/Array
 */
declare class Array$1<S extends Schema = Schema> implements SchemaClass {
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
    storeEntities: any,
    args?: any[],
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

  denormalizeOnly(
    input: {},
    args: readonly any[],
    unvisit: (input: any, schema: any) => any,
  ): (S extends EntityMap<infer T> ? T : Denormalize<S>)[];

  infer(
    args: readonly any[],
    indexes: NormalizedIndex,
    recurse: (...args: any) => any,
  ): any;
}

/**
 * Retrieves all entities in cache
 *
 * @see https://resthooks.io/rest/api/AllSchema
 */
declare class All<
  S extends EntityMap | EntityInterface = EntityMap | EntityInterface,
> implements SchemaClass
{
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
    storeEntities: any,
    args?: any[],
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

  denormalizeOnly(
    input: {},
    args: readonly any[],
    unvisit: (input: any, schema: any) => any,
  ): (S extends EntityMap<infer T> ? T : Denormalize<S>)[];

  infer(
    args: readonly any[],
    indexes: NormalizedIndex,
    recurse: (...args: any) => any,
    entities: EntityTable,
  ): any;
}

/**
 * Represents objects with statically known members
 * @see https://resthooks.io/rest/api/Object
 */
declare class Object$1<O extends Record<string, any> = Record<string, Schema>>
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
    storeEntities: any,
    args?: any[],
  ): NormalizeObject<O>;

  _normalizeNullable(): NormalizedNullableObject<O>;

  denormalize(
    // eslint-disable-next-line @typescript-eslint/ban-types
    input: {},
    unvisit: UnvisitFunction,
  ): [denormalized: DenormalizeObject<O>, found: boolean, suspend: boolean];

  _denormalizeNullable(): [DenormalizeNullableObject<O>, false, boolean];

  denormalizeOnly(
    input: {},
    args: readonly any[],
    unvisit: (input: any, schema: any) => any,
  ): DenormalizeObject<O>;

  infer(
    args: readonly any[],
    indexes: NormalizedIndex,
    recurse: (...args: any) => any,
  ): any;
}

/**
 * Represents polymorphic values.
 * @see https://resthooks.io/rest/api/Union
 */
declare class Union<Choices extends EntityMap = any> implements SchemaClass {
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
    storeEntities: any,
    args?: any[],
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

  denormalizeOnly(
    input: {},
    args: readonly any[],
    unvisit: (input: any, schema: any) => any,
  ): AbstractInstanceType<Choices[keyof Choices]>;

  infer(
    args: readonly any[],
    indexes: NormalizedIndex,
    recurse: (...args: any) => any,
  ): any;
}

/**
 * Represents variably sized objects
 * @see https://resthooks.io/rest/api/Values
 */
declare class Values<Choices extends Schema = any> implements SchemaClass {
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
    storeEntities: any,
    args?: any[],
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

  denormalizeOnly(
    input: {},
    args: readonly any[],
    unvisit: (input: any, schema: any) => any,
  ): Record<
    string,
    Choices extends EntityMap<infer T> ? T : Denormalize<Choices>
  >;

  infer(
    args: readonly any[],
    indexes: NormalizedIndex,
    recurse: (...args: any) => any,
  ): any;
}

declare class CollectionInterface<
  S extends PolymorphicInterface = any,
  Parent extends any[] = any,
> {
  addWith<P extends any[] = Parent>(
    merge: (existing: any, incoming: any) => any,
    createCollectionFilter?: (
      ...args: P
    ) => (collectionKey: Record<string, string>) => boolean,
  ): Collection<S, P>;

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
    args: any[],
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
  denormalizeOnly(
    input: any,
    args: readonly any[],
    unvisit: (input: any, schema: any) => any,
  ): ReturnType<S['denormalizeOnly']>;

  _denormalizeNullable(): ReturnType<S['_denormalizeNullable']>;
  _normalizeNullable(): ReturnType<S['_normalizeNullable']>;

  push: S extends { denormalizeOnly(...args: any): (infer Return)[] }
    ? Collection<PolymorphicInterface<Return>, Parent>
    : never;

  unshift: S extends { denormalizeOnly(...args: any): (infer Return)[] }
    ? Collection<PolymorphicInterface<Return>, Parent>
    : never;

  assign: S extends { denormalizeOnly(...args: any): Record<string, unknown> }
    ? Collection<S, Parent>
    : never;
}
type CollectionFromSchema<
  S extends any[] | PolymorphicInterface = any,
  Parent extends any[] = [
    urlParams: Record<string, any>,
    body?: Record<string, any>,
  ],
> = CollectionInterface<S extends any[] ? Array$1<S[number]> : S, Parent>;

interface CollectionConstructor {
  new <
    S extends SchemaSimpleNew[] | PolymorphicInterface = any,
    Parent extends any[] = [
      urlParams: Record<string, any>,
      body?: Record<string, any>,
    ],
  >(
    schema: S,
    options?: CollectionOptions,
  ): CollectionFromSchema<S, Parent>;
  readonly prototype: CollectionInterface;
}
declare let CollectionRoot: CollectionConstructor;

/**
 * Entities but for Arrays instead of classes
 * @see https://resthooks.io/rest/api/Collection
 */
declare class Collection<
  S extends any[] | PolymorphicInterface = any,
  Parent extends any[] = [
    urlParams: Record<string, any>,
    body?: Record<string, any>,
  ],
> extends CollectionRoot<S, Parent> {}

type StrategyFunction<T> = (value: any, parent: any, key: string) => T;
type SchemaFunction<K = string> = (
  value: any,
  parent: any,
  key: string,
) => K;
type MergeFunction = (entityA: any, entityB: any) => any;
type SchemaAttributeFunction<S extends Schema> = (
  value: any,
  parent: any,
  key: string,
) => S;

type UnionResult<Choices extends EntityMap> = {
  id: string;
  schema: keyof Choices;
};
interface SchemaClass<T = any, N = T | undefined>
  extends SchemaSimple<T> {
  // this is not an actual member, but is needed for the recursive NormalizeNullable<> type algo
  _normalizeNullable(): any;
  // this is not an actual member, but is needed for the recursive DenormalizeNullable<> type algo
  _denormalizeNullable(): [N, boolean, boolean];
}

// id is in Instance, so we default to that as pk
/**
 * Represents data that should be deduped by specifying a primary key.
 * @see https://resthooks.io/docs/api/schema.Entity
 */
declare function Entity$1<TBase extends PKClass>(
  Base: TBase,
  opt?: EntityOptions<InstanceType<TBase>>,
): IEntityClass<TBase> & TBase;

// id is in Instance, so we default to that as pk
declare function Entity$1<TBase extends IDClass>(
  Base: TBase,
  opt?: EntityOptions<InstanceType<TBase>>,
): IEntityClass<TBase> & TBase & (new (...args: any[]) => IEntityInstance);

// pk was specified in options, so we don't need to redefine
declare function Entity$1<TBase extends Constructor>(
  Base: TBase,
  opt: RequiredPKOptions<InstanceType<TBase>>,
): IEntityClass<TBase> & TBase & (new (...args: any[]) => IEntityInstance);

type schema_d_Delete<E extends EntityInterface & {
    process: any;
}> = Delete<E>;
declare const schema_d_Delete: typeof Delete;
type schema_d_EntityMap<T = any> = EntityMap<T>;
type schema_d_Invalidate<E extends EntityInterface & {
    process: any;
}> = Invalidate<E>;
declare const schema_d_Invalidate: typeof Invalidate;
type schema_d_UnvisitFunction = UnvisitFunction;
type schema_d_All<S extends EntityMap | EntityInterface = EntityMap | EntityInterface> = All<S>;
declare const schema_d_All: typeof All;
type schema_d_Union<Choices extends EntityMap = any> = Union<Choices>;
declare const schema_d_Union: typeof Union;
type schema_d_Values<Choices extends Schema = any> = Values<Choices>;
declare const schema_d_Values: typeof Values;
type schema_d_CollectionInterface<S extends PolymorphicInterface = any, Parent extends any[] = any> = CollectionInterface<S, Parent>;
declare const schema_d_CollectionInterface: typeof CollectionInterface;
type schema_d_CollectionFromSchema<S extends any[] | PolymorphicInterface = any, Parent extends any[] = [
    urlParams: Record<string, any>,
    body?: Record<string, any>,
  ]> = CollectionFromSchema<S, Parent>;
type schema_d_CollectionConstructor = CollectionConstructor;
declare const schema_d_CollectionRoot: typeof CollectionRoot;
type schema_d_Collection<S extends any[] | PolymorphicInterface = any, Parent extends any[] = [
    urlParams: Record<string, any>,
    body?: Record<string, any>,
  ]> = Collection<S, Parent>;
declare const schema_d_Collection: typeof Collection;
type schema_d_StrategyFunction<T> = StrategyFunction<T>;
type schema_d_SchemaFunction<K = string> = SchemaFunction<K>;
type schema_d_MergeFunction = MergeFunction;
type schema_d_SchemaAttributeFunction<S extends Schema> = SchemaAttributeFunction<S>;
type schema_d_UnionResult<Choices extends EntityMap> = UnionResult<Choices>;
type schema_d_SchemaClass<T = any, N = T | undefined> = SchemaClass<T, N>;
type schema_d_EntityInterface<T = any> = EntityInterface<T>;
declare namespace schema_d {
  export {
    schema_d_Delete as Delete,
    schema_d_EntityMap as EntityMap,
    schema_d_Invalidate as Invalidate,
    schema_d_UnvisitFunction as UnvisitFunction,
    Array$1 as Array,
    schema_d_All as All,
    Object$1 as Object,
    schema_d_Union as Union,
    schema_d_Values as Values,
    schema_d_CollectionInterface as CollectionInterface,
    schema_d_CollectionFromSchema as CollectionFromSchema,
    schema_d_CollectionConstructor as CollectionConstructor,
    schema_d_CollectionRoot as CollectionRoot,
    schema_d_Collection as Collection,
    schema_d_StrategyFunction as StrategyFunction,
    schema_d_SchemaFunction as SchemaFunction,
    schema_d_MergeFunction as MergeFunction,
    schema_d_SchemaAttributeFunction as SchemaAttributeFunction,
    schema_d_UnionResult as UnionResult,
    schema_d_SchemaClass as SchemaClass,
    Entity$1 as Entity,
    schema_d_EntityInterface as EntityInterface,
  };
}

declare const Entity_base: IEntityClass<abstract new (...args: any[]) => {
    pk(parent?: any, key?: string | undefined, args?: readonly any[] | undefined): string | undefined;
}> & (abstract new (...args: any[]) => {
    pk(parent?: any, key?: string | undefined, args?: readonly any[] | undefined): string | undefined;
});
/**
 * Represents data that should be deduped by specifying a primary key.
 * @see https://resthooks.io/docs/api/Entity
 */
declare abstract class Entity extends Entity_base {
    /**
     * A unique identifier for each Entity
     *
     * @param [parent] When normalizing, the object which included the entity
     * @param [key] When normalizing, the key where this entity was found
     */
    abstract pk(parent?: any, key?: string, args?: readonly any[]): string | undefined;
    /** Control how automatic schema validation is handled
     *
     * `undefined`: Defaults - throw error in worst offense
     * 'warn': only ever warn
     * 'silent': Don't bother with processing at all
     *
     * Note: this only applies to non-nested members.
     */
    protected static automaticValidation?: 'warn' | 'silent';
    /** Return true to merge incoming data; false keeps existing entity
     *
     * @see https://resthooks.io/docs/api/schema.Entity#useIncoming
     */
    static useIncoming(existingMeta: {
        date: number;
        fetchedAt: number;
    }, incomingMeta: {
        date: number;
        fetchedAt: number;
    }, existing: any, incoming: any): boolean;
    /** Run when an existing entity is found in the store */
    static mergeWithStore(existingMeta: {
        date: number;
        fetchedAt: number;
    } | undefined, incomingMeta: {
        date: number;
        fetchedAt: number;
    }, existing: any, incoming: any): any;
    static mergeMetaWithStore(existingMeta: {
        expiresAt: number;
        date: number;
        fetchedAt: number;
    }, incomingMeta: {
        expiresAt: number;
        date: number;
        fetchedAt: number;
    }, existing: any, incoming: any): {
        expiresAt: number;
        date: number;
        fetchedAt: number;
    };
    /** Factory method to convert from Plain JS Objects.
     *
     * @param [props] Plain Object of properties to assign.
     */
    static fromJS: <T extends typeof Entity>(this: T, props?: Partial<AbstractInstanceType<T>>) => AbstractInstanceType<T>;
    /**
     * A unique identifier for each Entity
     *
     * @param [value] POJO of the entity or subset used
     * @param [parent] When normalizing, the object which included the entity
     * @param [key] When normalizing, the key where this entity was found
     */
    static pk: <T extends typeof Entity>(this: T, value: Partial<AbstractInstanceType<T>>, parent?: any, key?: string, args?: any[]) => string | undefined;
    /** Do any transformations when first receiving input */
    static process(input: any, parent: any, key: string | undefined): any;
    static validate(processedEntity: any): string | undefined;
    static denormalize<T extends typeof Entity>(this: T, input: any, unvisit: UnvisitFunction): [denormalized: AbstractInstanceType<T>, found: boolean, suspend: boolean];
    /** Used by denormalize to set nested members */
    protected static set?(entity: any, key: string, value: any): void;
}

declare function validateRequired(processedEntity: any, requiredDefaults: Record<string, unknown>): string | undefined;

declare const DELETED: unique symbol;
declare const INVALID: symbol;

/**
 * Performant lookups by secondary indexes
 * @see https://resthooks.io/docs/api/Index
 */
declare class Index<S extends Schema, P = Readonly<IndexParams<S>>> {
    schema: S;
    constructor(schema: S, key?: (params: P) => string);
    key(params?: P): string;
}
type ArrayElement<ArrayType extends unknown[] | readonly unknown[]> = ArrayType[number];
type IndexParams<S extends Schema> = S extends {
    indexes: readonly string[];
} ? {
    [K in Extract<ArrayElement<S['indexes']>, keyof AbstractInstanceType<S>>]?: AbstractInstanceType<S>[K];
} : Readonly<object>;

/**
 * Programmatic cache reading
 * @see https://resthooks.io/rest/api/Query
 */
declare class Query<S extends SchemaSimple, P extends any[] = [], R = Denormalize<S>> {
    schema: QuerySchema<S, R>;
    process: (entries: Denormalize<S>, ...args: P) => R;
    readonly sideEffect: undefined;
    constructor(schema: S, process?: (entries: Denormalize<S>, ...args: P) => R);
    key(...args: P): string;
    protected createQuerySchema(schema: SchemaSimple): any;
}
type QuerySchema<Schema, R> = Exclude<Schema, 'denormalize' | '_denormalizeNullable'> & {
    denormalize(input: {}, unvisit: UnvisitFunction): [denormalized: R, found: boolean, suspend: boolean];
    _denormalizeNullable(input: {}, unvisit: UnvisitFunction): [denormalized: R | undefined, found: boolean, suspend: boolean];
    denormalizeOnly(input: {}, args: readonly any[], unvisit: (input: any, schema: any) => any): R;
};

declare class AbortOptimistic extends Error {
}

type ExtractCollection<S extends Schema | undefined> = S extends CollectionInterface ? S : S extends Object$1<infer T> ? ExtractObject<T> : S extends Exclude<Schema, {
    [K: string]: any;
}> ? never : S extends {
    [K: string]: Schema;
} ? ExtractObject<S> : never;
type ExtractObject<S extends Record<string, any>> = {
    [K in keyof S]: S[K] extends Schema ? ExtractCollection<S[K]> : never;
}[keyof S];

type OnlyOptional<S extends string> = S extends `${infer K}?` ? K : never;
type OnlyRequired<S extends string> = S extends `${string}?` ? never : S;
/** Computes the union of keys for a path string */
type PathKeys<S extends string> = string extends S ? string : S extends `${infer A}\\:${infer B}` ? PathKeys<A> | PathKeys<B> : S extends `${infer A}\\?${infer B}` ? PathKeys<A> | PathKeys<B> : PathSplits<S>;
type PathSplits<S extends string> = S extends `${string}:${infer K}${'/' | ',' | '%' | '&'}${infer R}` ? PathSplits<`:${K}`> | PathSplits<R> : S extends `${string}:${infer K}:${infer R}` ? PathSplits<`:${K}`> | PathSplits<`:${R}`> : S extends `${string}:${infer K}` ? K : never;
/** Parameters for a given path */
type PathArgs<S extends string> = PathKeys<S> extends never ? unknown : KeysToArgs<PathKeys<S>>;
type KeysToArgs<Key extends string> = {
    [K in Key as OnlyOptional<K>]?: string | number;
} & (OnlyRequired<Key> extends never ? unknown : {
    [K in Key as OnlyRequired<K>]: string | number;
});
type PathArgsAndSearch<S extends string> = OnlyRequired<PathKeys<S>> extends never ? Record<string, number | string | boolean> | undefined : {
    [K in PathKeys<S> as OnlyRequired<K>]: string | number;
} & Record<string, number | string>;
/** Removes the last :token */
type ShortenPath<S extends string> = string extends S ? string : S extends `${infer B}:${infer R}` ? TrimColon<`${B}:${ShortenPath<R>}`> : '';
type TrimColon<S extends string> = string extends S ? string : S extends `${infer R}:` ? R : S;
type ResourcePath = string;

type OptionsToFunction<O extends PartialRestGenerics, E extends RestInstanceBase & {
    body?: any;
}, F extends FetchFunction> = 'path' extends keyof O ? RestFetch<'searchParams' extends keyof O ? O['searchParams'] & PathArgs<Exclude<O['path'], undefined>> : PathArgs<Exclude<O['path'], undefined>>, 'body' extends keyof O ? O['body'] : E['body'], O['process'] extends {} ? ReturnType<O['process']> : ResolveType<F>> : 'body' extends keyof O ? RestFetch<'searchParams' extends keyof O ? O['searchParams'] & PathArgs<Exclude<E['path'], undefined>> : PathArgs<Exclude<E['path'], undefined>>, O['body'], O['process'] extends {} ? ReturnType<O['process']> : ResolveType<F>> : 'searchParams' extends keyof O ? RestFetch<O['searchParams'] & PathArgs<Exclude<E['path'], undefined>>, E['body'], O['process'] extends {} ? ReturnType<O['process']> : ResolveType<F>> : (this: ThisParameterType<F>, ...args: Parameters<F>) => Promise<O['process'] extends {} ? ReturnType<O['process']> : ResolveType<F>>;

type EndpointUpdateFunction<Source extends FetchFunction, Schema, Updaters extends Record<string, any> = Record<string, any>> = (source: ResultEntry<Source & {
    schema: Schema;
}>, ...args: Parameters<Source>) => {
    [K in keyof Updaters]: (result: Updaters[K]) => Updaters[K];
};
type ResultEntry<E extends FetchFunction & {
    schema: any;
}> = E['schema'] extends undefined | null ? ResolveType<E> : Normalize<E['schema']>;

/* eslint-disable @typescript-eslint/ban-types */


interface RestInstanceBase<
  F extends FetchFunction = FetchFunction,
  S extends Schema | undefined = any,
  M extends true | undefined = true | undefined,
  O extends {
    path: string;
    body?: any;
    searchParams?: any;
  } = { path: string },
> extends EndpointInstanceInterface<F, S, M> {
  readonly body?: 'body' extends keyof O ? O['body'] : any;
  readonly searchParams?: 'searchParams' extends keyof O
    ? O['searchParams']
    : // unknown is identity with '&' type operator
      unknown;

  /** Pattern to construct url based on Url Parameters
   * @see https://resthooks.io/rest/api/RestEndpoint#path
   */
  readonly path: O['path'];
  /** Prepended to all urls
   * @see https://resthooks.io/rest/api/RestEndpoint#urlPrefix
   */
  readonly urlPrefix: string;
  readonly requestInit: RequestInit;
  readonly method: string;
  readonly signal: AbortSignal | undefined;

  /* fetch lifecycles */
  /* before-fetch */
  url(...args: Parameters<F>): string;
  /** @see https://resthooks.io/rest/api/RestEndpoint#getRequestInit */
  getRequestInit(
    this: any,
    body?: RequestInit['body'] | Record<string, unknown>,
  ): Promise<RequestInit> | RequestInit;
  /** @see https://resthooks.io/rest/api/RestEndpoint#getHeaders */
  getHeaders(headers: HeadersInit): Promise<HeadersInit> | HeadersInit;
  /* after-fetch */
  /** @see https://resthooks.io/rest/api/RestEndpoint#fetchResponse */
  fetchResponse(input: RequestInfo, init: RequestInit): Promise<Response>;
  /** @see https://resthooks.io/rest/api/RestEndpoint#parseResponse */
  parseResponse(response: Response): Promise<any>;
  /** @see https://resthooks.io/rest/api/RestEndpoint#process */
  process(value: any, ...args: Parameters<F>): ResolveType<F>;

  /* utilities */
  /** @see https://resthooks.io/rest/api/RestEndpoint#testKey */
  testKey(key: string): boolean;

  /* extenders */
  // TODO: figure out better way than wrapping whole options in Readonly<> + making O extend from {}
  //       this is just a hack to handle when no members of PartialRestGenerics are present
  //       Note: Using overloading (like paginated did) struggles because typescript does not have a clear way of distinguishing one
  //       should be used from the other (due to same problem with every member being partial)
  extend<E extends RestInstanceBase, O extends PartialRestGenerics | {}>(
    this: E,
    options: Readonly<RestEndpointExtendOptions<O, E, F> & O>,
  ): RestExtendedEndpoint<O, E>;
  paginated<
    E extends RestInstanceBase<FetchFunction, any, undefined>,
    A extends any[],
  >(
    this: E,
    removeCursor: (...args: A) => readonly [...Parameters<E>],
  ): PaginationEndpoint<E, A>;
  paginated<
    E extends RestInstanceBase<FetchFunction, any, undefined>,
    C extends string,
  >(
    this: E,
    cursorField: C,
  ): PaginationFieldEndpoint<E, C>;
}

interface RestInstance<
  F extends FetchFunction = FetchFunction,
  S extends Schema | undefined = any,
  M extends true | undefined = true | undefined,
  O extends {
    path: string;
    body?: any;
    searchParams?: any;
  } = { path: string },
> extends RestInstanceBase<F, S, M, O> {
  push: AddEndpoint<F, S, O>;
  unshift: AddEndpoint<F, S, O>;
  assign: AddEndpoint<F, S, O>;
}

type RestEndpointExtendOptions<
  O extends PartialRestGenerics,
  E extends RestInstanceBase,
  F extends FetchFunction,
> = RestEndpointOptions<
  OptionsToFunction<O, E, F>,
  'schema' extends keyof O
    ? Extract<O['schema'], Schema | undefined>
    : E['schema']
> &
  Partial<Omit<E, KeyofRestEndpoint | keyof PartialRestGenerics>>;

type OptionsToRestEndpoint<
  O extends PartialRestGenerics,
  E extends RestInstanceBase & { body?: any },
  F extends FetchFunction,
> = 'path' extends keyof O
  ? RestType<
      'searchParams' extends keyof O
        ? O['searchParams'] extends undefined
          ? PathArgs<Exclude<O['path'], undefined>>
          : O['searchParams'] & PathArgs<Exclude<O['path'], undefined>>
        : PathArgs<Exclude<O['path'], undefined>>,
      'body' extends keyof O ? O['body'] : E['body'],
      'schema' extends keyof O ? O['schema'] : E['schema'],
      'method' extends keyof O ? MethodToSide<O['method']> : E['sideEffect'],
      O['process'] extends {} ? ReturnType<O['process']> : ResolveType<F>,
      {
        path: Exclude<O['path'], undefined>;
        body: 'body' extends keyof O ? O['body'] : E['body'];
        searchParams: 'searchParams' extends keyof O
          ? O['searchParams']
          : E['searchParams'];
      }
    >
  : 'body' extends keyof O
  ? RestType<
      'searchParams' extends keyof O
        ? O['searchParams'] extends undefined
          ? PathArgs<Exclude<O['path'], undefined>>
          : O['searchParams'] & PathArgs<Exclude<E['path'], undefined>>
        : PathArgs<Exclude<E['path'], undefined>>,
      O['body'],
      'schema' extends keyof O ? O['schema'] : E['schema'],
      'method' extends keyof O ? MethodToSide<O['method']> : E['sideEffect'],
      O['process'] extends {} ? ReturnType<O['process']> : ResolveType<F>,
      {
        path: E['path'];
        body: O['body'];
        searchParams: 'searchParams' extends keyof O
          ? O['searchParams']
          : E['searchParams'];
      }
    >
  : 'searchParams' extends keyof O
  ? RestType<
      O['searchParams'] extends undefined
        ? PathArgs<Exclude<O['path'], undefined>>
        : O['searchParams'] & PathArgs<Exclude<E['path'], undefined>>,
      E['body'],
      'schema' extends keyof O ? O['schema'] : E['schema'],
      'method' extends keyof O ? MethodToSide<O['method']> : E['sideEffect'],
      O['process'] extends {} ? ReturnType<O['process']> : ResolveType<F>,
      {
        path: E['path'];
        body: E['body'];
        searchParams: O['searchParams'];
      }
    >
  : RestInstance<
      F,
      'schema' extends keyof O ? O['schema'] : E['schema'],
      'method' extends keyof O ? MethodToSide<O['method']> : E['sideEffect'],
      {
        path: 'path' extends keyof O
          ? Exclude<O['path'], undefined>
          : E['path'];
        body: 'body' extends keyof O ? O['body'] : E['body'];
        searchParams: 'searchParams' extends keyof O
          ? O['searchParams']
          : E['searchParams'];
      }
    >;

type RestExtendedEndpoint<
  O extends PartialRestGenerics,
  E extends RestInstanceBase,
> = OptionsToRestEndpoint<
  O,
  E,
  RestInstance<
    (
      ...args: Parameters<E>
    ) => O['process'] extends {}
      ? Promise<ReturnType<O['process']>>
      : ReturnType<E>,
    'schema' extends keyof O ? O['schema'] : E['schema'],
    'method' extends keyof O ? MethodToSide<O['method']> : E['sideEffect']
  >
> &
  Omit<O, KeyofRestEndpoint> &
  Omit<E, KeyofRestEndpoint | keyof O>;

interface PartialRestGenerics {
  readonly path?: string;
  readonly schema?: Schema | undefined;
  readonly method?: string;
  /** Only used for types */
  readonly body?: any;
  /** Only used for types */
  readonly searchParams?: any;
  /** @see https://resthooks.io/rest/api/RestEndpoint#process */
  process?(value: any, ...args: any): any;
}
interface RestGenerics extends PartialRestGenerics {
  readonly path: string;
}

type PaginationEndpoint<
  E extends RestInstanceBase,
  A extends any[],
> = RestInstance<
  ParamFetchNoBody<A[0], ResolveType<E>>,
  E['schema'],
  E['sideEffect'],
  Pick<E, 'path' | 'searchParams' | 'body'> & {
    searchParams: Omit<A[0], keyof PathArgs<E['path']>>;
  }
>;
type PaginationFieldEndpoint<
  E extends RestInstanceBase,
  C extends string,
> = RestInstance<
  ParamFetchNoBody<
    { [K in C]: string | number | boolean } & E['searchParams'] &
      PathArgs<Exclude<E['path'], undefined>>,
    ResolveType<E>
  >,
  E['schema'],
  E['sideEffect'],
  Pick<E, 'path' | 'searchParams' | 'body'> & {
    searchParams: { [K in C]: string | number | boolean } & E['searchParams'];
  }
>;
type AddEndpoint<
  F extends FetchFunction = FetchFunction,
  S extends Schema | undefined = any,
  O extends {
    path: string;
    body?: any;
    searchParams?: any;
  } = { path: string },
> = RestInstanceBase<
  RestFetch<
    'searchParams' extends keyof O
      ? O['searchParams'] extends undefined
        ? PathArgs<Exclude<O['path'], undefined>>
        : O['searchParams'] & PathArgs<Exclude<O['path'], undefined>>
      : PathArgs<Exclude<O['path'], undefined>>,
    any,
    ResolveType<F>
  >,
  ExtractCollection<S>,
  true,
  Omit<O, 'body'>
> & { method: 'POST' };

type BodyDefault<O extends RestGenerics> = 'body' extends keyof O
  ? O['body']
  : O['method'] extends 'POST' | 'PUT' | 'PATCH'
  ? Record<string, unknown> | FormData
  : undefined;

type OptionsBodyDefault<O extends RestGenerics> = 'body' extends keyof O
  ? O
  : O['method'] extends 'POST' | 'PUT' | 'PATCH'
  ? O & { body: any }
  : O & { body: undefined };

interface RestEndpointOptions<
  F extends FetchFunction = FetchFunction,
  S extends Schema | undefined = undefined,
> extends EndpointExtraOptions<F> {
  urlPrefix?: string;
  requestInit?: RequestInit;
  getHeaders?(headers: HeadersInit): Promise<HeadersInit> | HeadersInit;
  getRequestInit?(body: any): Promise<RequestInit> | RequestInit;
  fetchResponse?(input: RequestInfo, init: RequestInit): Promise<any>;
  parseResponse?(response: Response): Promise<any>;

  sideEffect?: true | undefined;
  name?: string;
  signal?: AbortSignal;
  fetch?: F;
  key?(...args: Parameters<F>): string;
  url?(...args: Parameters<F>): string;
  update?: EndpointUpdateFunction<F, S>;
}

type RestEndpointConstructorOptions<O extends RestGenerics = any> =
  RestEndpointOptions<
    RestFetch<
      'searchParams' extends keyof O
        ? O['searchParams'] extends undefined
          ? PathArgs<O['path']>
          : O['searchParams'] & PathArgs<O['path']>
        : PathArgs<O['path']>,
      BodyDefault<O>,
      O['process'] extends {}
        ? ReturnType<O['process']>
        : any /*Denormalize<O['schema']>*/
    >,
    O['schema']
  >;

interface RestEndpointConstructor {
  new <O extends RestGenerics = any>({
    method,
    sideEffect,
    name,
    ...options
  }: RestEndpointConstructorOptions<O> & Readonly<O>): RestInstance<
    RestFetch<
      'searchParams' extends keyof O
        ? O['searchParams'] extends undefined
          ? PathArgs<O['path']>
          : O['searchParams'] & PathArgs<O['path']>
        : PathArgs<O['path']>,
      BodyDefault<O>,
      O['process'] extends {}
        ? ReturnType<O['process']>
        : any /*Denormalize<O['schema']>*/
    >,
    'schema' extends keyof O ? O['schema'] : undefined,
    MethodToSide<O['method']>,
    OptionsBodyDefault<O>
  >;
  readonly prototype: RestInstanceBase;
}

/** Simplifies endpoint definitions that follow REST patterns
 *
 * @see https://resthooks.io/rest/api/RestEndpoint
 */
declare let RestEndpoint: RestEndpointConstructor;


type MethodToSide<M> = M extends string
  ? M extends 'GET'
    ? undefined
    : true
  : undefined;

/** RestEndpoint types simplified */
type RestType<
  UrlParams = any,
  Body = any,
  S extends Schema | undefined = Schema | undefined,
  M extends true | undefined = true | undefined,
  R = any,
  O extends {
    path: string;
    body?: any;
    searchParams?: any;
  } = { path: string },
  // eslint-disable-next-line @typescript-eslint/ban-types
> = IfTypeScriptLooseNull<
  RestInstance<
    keyof UrlParams extends never
      ? (this: EndpointInstanceInterface, body?: Body) => Promise<R>
      : // even with loose null, this will only be true when all members are optional
      {} extends UrlParams
      ?
          | ((this: EndpointInstanceInterface, body?: Body) => Promise<R>)
          | ((
              this: EndpointInstanceInterface,
              params: UrlParams,
              body?: Body,
            ) => Promise<R>)
      : (
          this: EndpointInstanceInterface,
          params: UrlParams,
          body?: Body,
        ) => Promise<R>,
    S,
    M,
    O
  >,
  Body extends {}
    ? RestTypeWithBody<UrlParams, S, M, Body, R, O>
    : RestTypeNoBody<UrlParams, S, M, R, O>
>;

type RestTypeWithBody<
  UrlParams = any,
  S extends Schema | undefined = Schema | undefined,
  M extends true | undefined = true | undefined,
  Body = any,
  R = any /*Denormalize<S>*/,
  O extends {
    path: string;
    body?: any;
    searchParams?: any;
  } = { path: string; body: any },
> = RestInstance<ParamFetchWithBody<UrlParams, Body, R>, S, M, O>;

type RestTypeNoBody<
  UrlParams = any,
  S extends Schema | undefined = Schema | undefined,
  M extends true | undefined = true | undefined,
  R = any /*Denormalize<S>*/,
  O extends {
    path: string;
    body?: undefined;
    searchParams?: any;
  } = { path: string; body: undefined },
> = RestInstance<ParamFetchNoBody<UrlParams, R>, S, M, O>;

/** Simple parameters, and body fetch functions */
type RestFetch<
  UrlParams,
  // eslint-disable-next-line @typescript-eslint/ban-types
  Body = {},
  Resolve = any,
> = IfTypeScriptLooseNull<
  | ParamFetchNoBody<UrlParams, Resolve>
  | ParamFetchWithBody<UrlParams, Body, Resolve>,
  Body extends {}
    ? ParamFetchWithBody<UrlParams, Body, Resolve>
    : ParamFetchNoBody<UrlParams, Resolve>
>;

type ParamFetchWithBody<P, B = {}, R = any> =
  // we must always allow undefined in a union and give it a type without params
  P extends undefined
    ? (this: EndpointInstanceInterface, body: B) => Promise<R>
    : // even with loose null, this will only be true when all members are optional
    {} extends P
    ? // this safely handles PathArgs with no members that results in a simple `unknown` type
      keyof P extends never
      ? (this: EndpointInstanceInterface, body: B) => Promise<R>
      :
          | ((
              this: EndpointInstanceInterface,
              params: P,
              body: B,
            ) => Promise<R>)
          | ((this: EndpointInstanceInterface, body: B) => Promise<R>)
    : (this: EndpointInstanceInterface, params: P, body: B) => Promise<R>;

type ParamFetchNoBody<P, R = any> =
  // we must always allow undefined in a union and give it a type without params
  P extends undefined
    ? (this: EndpointInstanceInterface) => Promise<R>
    : // even with loose null, this will only be true when all members are optional
    {} extends P
    ? // this safely handles PathArgs with no members that results in a simple `unknown` type
      keyof P extends never
      ? (this: EndpointInstanceInterface) => Promise<R>
      :
          | ((this: EndpointInstanceInterface, params: P) => Promise<R>)
          | ((this: EndpointInstanceInterface) => Promise<R>)
    : (this: EndpointInstanceInterface, params: P) => Promise<R>;

type IfTypeScriptLooseNull<Y, N> = 1 | undefined extends 1 ? Y : N;

type KeyofRestEndpoint = keyof RestInstance;

type FromFallBack<K extends keyof E, O, E> = K extends keyof O
  ? O[K]
  : E[K];

type FetchMutate<
  A extends readonly any[] =  // eslint-disable-next-line @typescript-eslint/ban-types
    | [any, {}]
    // eslint-disable-next-line @typescript-eslint/ban-types
    | [{}],
  R = any,
> = (this: RestInstance, ...args: A) => Promise<R>;

type FetchGet<A extends readonly any[] = [any], R = any> = (
  this: RestInstance,
  ...args: A
) => Promise<R>;

type Defaults<O, D> = {
  [K in keyof O | keyof D]: K extends keyof O
    ? Exclude<O[K], undefined>
    : D[Extract<K, keyof D>];
};

type GetEndpoint<
  O extends {
    readonly path: string;
    readonly schema: Schema;
    /** Only used for types */
    readonly searchParams?: any;
  } = {
    path: string;
    schema: Schema;
  },
> = RestTypeNoBody<
  'searchParams' extends keyof O
    ? O['searchParams'] extends undefined
      ? PathArgs<O['path']>
      : O['searchParams'] & PathArgs<O['path']>
    : PathArgs<O['path']>,
  O['schema'],
  undefined,
  any,
  O & { body: undefined }
>;

type MutateEndpoint<
  O extends {
    readonly path: string;
    readonly schema: Schema;
    /** Only used for types */
    readonly searchParams?: any;
    /** Only used for types */
    readonly body?: any;
  } = {
    path: string;
    body: any;
    schema: Schema;
  },
> = RestTypeWithBody<
  'searchParams' extends keyof O
    ? O['searchParams'] extends undefined
      ? PathArgs<O['path']>
      : O['searchParams'] & PathArgs<O['path']>
    : PathArgs<O['path']>,
  O['schema'],
  true,
  O['body'],
  any,
  O
>;

interface ResourceGenerics {
    /** @see https://resthooks.io/rest/api/createResource#path */
    readonly path: ResourcePath;
    /** @see https://resthooks.io/rest/api/createResource#schema */
    readonly schema: Schema;
    /** @see https://resthooks.io/rest/api/createResource#paginationfield */
    readonly paginationField?: string;
    /** Only used for types */
    /** @see https://dataclient.io/rest/api/createResource#body */
    readonly body?: any;
    /** Only used for types */
    /** @see https://resthooks.io/rest/api/createResource#searchParams */
    readonly searchParams?: any;
}
interface ResourceOptions {
    /** @see https://resthooks.io/rest/api/createResource#endpoint */
    Endpoint?: typeof RestEndpoint;
    /** @see https://resthooks.io/rest/api/createResource#optimistic */
    optimistic?: boolean;
    /** @see https://resthooks.io/rest/api/createResource#urlprefix */
    urlPrefix?: string;
    requestInit?: RequestInit;
    getHeaders?(headers: HeadersInit): Promise<HeadersInit> | HeadersInit;
    getRequestInit?(body: any): Promise<RequestInit> | RequestInit;
    fetchResponse?(input: RequestInfo, init: RequestInit): Promise<any>;
    parseResponse?(response: Response): Promise<any>;
    /** Default data expiry length, will fall back to NetworkManager default if not defined */
    readonly dataExpiryLength?: number;
    /** Default error expiry length, will fall back to NetworkManager default if not defined */
    readonly errorExpiryLength?: number;
    /** Poll with at least this frequency in miliseconds */
    readonly pollFrequency?: number;
    /** Marks cached resources as invalid if they are stale */
    readonly invalidIfStale?: boolean;
    /** Determines whether to throw or fallback to */
    errorPolicy?(error: any): 'hard' | 'soft' | undefined;
}

/** Creates collection of Endpoints for common operations on a given data/schema.
 *
 * @see https://resthooks.io/rest/api/createResource
 */
declare function createResource<O extends ResourceGenerics>({ path, schema, Endpoint, optimistic, paginationField, ...extraOptions }: Readonly<O> & ResourceOptions): Resource<O>;
interface Resource<O extends ResourceGenerics = {
    path: ResourcePath;
    schema: any;
}> {
    /** Get a singular item
     *
     * @see https://resthooks.io/rest/api/createResource#get
     */
    get: GetEndpoint<{
        path: O['path'];
        schema: O['schema'];
    }>;
    /** Get a list of item
     *
     * @see https://resthooks.io/rest/api/createResource#getlist
     */
    getList: 'searchParams' extends keyof O ? GetEndpoint<{
        path: ShortenPath<O['path']>;
        schema: Collection<[O['schema']]>;
        searchParams: O['searchParams'];
    }> : GetEndpoint<{
        path: ShortenPath<O['path']>;
        schema: Collection<[O['schema']]>;
        searchParams: Record<string, number | string | boolean> | undefined;
    }>;
    /** Get a list of item
     *
     * @see https://dataclient.io/rest/api/createResource#getNextPage
     */
    getNextPage: 'paginationField' extends keyof O ? PaginationFieldEndpoint<'searchParams' extends keyof O ? GetEndpoint<{
        path: ShortenPath<O['path']>;
        schema: Collection<[O['schema']]>;
        searchParams: O['searchParams'];
    }> : GetEndpoint<{
        path: ShortenPath<O['path']>;
        schema: Collection<[O['schema']]>;
        searchParams: Record<string, number | string | boolean> | undefined;
    }>, Exclude<O['paginationField'], undefined>> : undefined;
    /** Create a new item (POST)
     *
     * @see https://resthooks.io/rest/api/createResource#create
     */
    create: 'searchParams' extends keyof O ? MutateEndpoint<{
        path: ShortenPath<O['path']>;
        schema: Collection<[O['schema']]>['push'];
        body: 'body' extends keyof O ? O['body'] : Partial<Denormalize<O['schema']>>;
        searchParams: O['searchParams'];
    }> : MutateEndpoint<{
        path: ShortenPath<O['path']>;
        schema: Collection<[O['schema']]>['push'];
        body: 'body' extends keyof O ? O['body'] : Partial<Denormalize<O['schema']>>;
    }>;
    /** Update an item (PUT)
     *
     * @see https://resthooks.io/rest/api/createResource#update
     */
    update: 'body' extends keyof O ? MutateEndpoint<{
        path: O['path'];
        body: O['body'];
        schema: O['schema'];
    }> : MutateEndpoint<{
        path: O['path'];
        body: Partial<Denormalize<O['schema']>>;
        schema: O['schema'];
    }>;
    /** Update an item (PATCH)
     *
     * @see https://resthooks.io/rest/api/createResource#partialupdate
     */
    partialUpdate: 'body' extends keyof O ? MutateEndpoint<{
        path: O['path'];
        body: Partial<O['body']>;
        schema: O['schema'];
    }> : MutateEndpoint<{
        path: O['path'];
        body: Partial<Denormalize<O['schema']>>;
        schema: O['schema'];
    }>;
    /** Delete an item (DELETE)
     *
     * @see https://resthooks.io/rest/api/createResource#delete
     */
    delete: RestTypeNoBody<PathArgs<O['path']>, O['schema'] extends EntityInterface & {
        process: any;
    } ? Invalidate<O['schema']> : O['schema'], undefined, Partial<PathArgs<O['path']>>, {
        path: O['path'];
    }>;
}

interface HookableEndpointInterface extends EndpointInterface {
    extend(...args: any): HookableEndpointInterface;
}
/** Turns a collection of Endpoints (Resource) into a collection of hooks.
 * This is useful for Endpoints that need hooks to prepare their fetch requests.
 *
 * @see https://resthooks.io/rest/api/hookifyResource
 */
declare function hookifyResource<R extends {}>(resource: R, useRequestInit: () => RequestInit): HookResource<R>;
type HookResource<R extends {}> = {
    [K in Extract<keyof R, string> as `use${Capitalize<K>}`]: () => R[K];
};

/** An error with a Rest Endpoint fetch
 *
 * @see https://resthooks.io/rest/api/NetworkError
 */
declare class NetworkError extends Error {
    status: number;
    response: Response;
    name: string;
    constructor(response: Response);
}

declare function paginationUpdate<E extends {
    schema: Schema;
    key: any;
} & ((...args: any) => Promise<any>), A extends any[]>(endpoint: E, removeCursor: (...args: A) => readonly [...Parameters<typeof endpoint>]): (newPage: any, ...args: A) => {
    [x: number]: (existing: any) => any;
};

export { AbortOptimistic, AbstractInstanceType, AddEndpoint, Array$1 as Array, ArrayElement, BodyDefault, Collection, DELETED, Defaults, Denormalize, DenormalizeNullable, Endpoint, EndpointExtendOptions, EndpointExtraOptions, EndpointInstance, EndpointInstanceInterface, EndpointInterface, EndpointOptions, EndpointParam, Entity, ErrorTypes, ExpiryStatusInterface, ExtendableEndpoint, FetchFunction, FetchGet, FetchMutate, FromFallBack, GetEndpoint, HookResource, HookableEndpointInterface, INVALID, Index, IndexParams, Invalidate, KeyofEndpointInstance, KeyofRestEndpoint, KeysToArgs, MethodToSide, MutateEndpoint, NetworkError, Normalize, NormalizeNullable, OptionsToFunction, PaginationEndpoint, PaginationFieldEndpoint, ParamFetchNoBody, ParamFetchWithBody, PartialRestGenerics, PathArgs, PathArgsAndSearch, PathKeys, PolymorphicInterface, Query, ReadEndpoint, ResolveType, Resource, ResourceGenerics, ResourceOptions, RestEndpoint, RestEndpointConstructor, RestEndpointConstructorOptions, RestEndpointExtendOptions, RestEndpointOptions, RestExtendedEndpoint, RestFetch, RestGenerics, RestInstance, RestInstanceBase, RestType, RestTypeNoBody, RestTypeWithBody, Schema, SchemaClass$1 as SchemaClass, SchemaSimple, SchemaSimpleNew, ShortenPath, SnapshotInterface, UnknownError, createResource, hookifyResource, paginationUpdate, schema_d as schema, validateRequired };
