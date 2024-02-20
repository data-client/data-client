import type Cache from './cache.js';
import { INVALID } from './symbol.js';
import { UNDEF } from './UNDEF.js';
import type { EntityInterface } from '../interface.js';
import { isEntity } from '../isEntity.js';
import { denormalize as arrayDenormalize } from '../schemas/Array.js';
import { isImmutable } from '../schemas/ImmutableUtils.js';
import { denormalize as objectDenormalize } from '../schemas/Object.js';
import type { Path } from '../types.js';
import { type GetEntity } from '../WeakEntityMap.js';

function unvisitEntity(
  entityOrId: Record<string, any> | string,
  schema: EntityInterface,
  args: readonly any[],
  unvisit: (input: any, schema: any) => any,
  getEntity: GetEntity,
  cache: Cache,
): object | undefined | symbol {
  const entity =
    typeof entityOrId === 'object' ? entityOrId : (
      getEntity({ key: schema.key, pk: entityOrId })
    );
  if (typeof entity === 'symbol' && typeof schema.denormalize === 'function') {
    return schema.denormalize(entity, args, unvisit);
  }

  if (
    entity === undefined &&
    typeof entityOrId === 'string' &&
    entityOrId !== '' &&
    entityOrId !== 'undefined'
  ) {
    // we cannot perform lookups with `undefined`, so we use a special object to represent undefined
    // we're actually using this call to ensure we update the cache if a nested schema changes from `undefined`
    // this is because cache.getEntity adds this key,pk as a dependency of anything it is nested under
    return cache.getEntity(entityOrId, schema, UNDEF, localCacheKey => {
      localCacheKey[entityOrId] = undefined;
    });
  }

  if (typeof entity !== 'object' || entity === null) {
    return entity as any;
  }

  const pk =
    // normalize must always place a string, because pk() return value is string | undefined
    // therefore no need to check for numbers
    typeof entityOrId === 'string' ? entityOrId : (
      schema.pk(
        isImmutable(entity) ? (entity as any).toJS() : entity,
        undefined,
        undefined,
        args,
      )
    );

  // if we can't generate a working pk we cannot do cache lookups properly,
  // so simply denormalize without caching
  if (pk === undefined || pk === '' || pk === 'undefined') {
    return noCacheGetEntity(localCacheKey =>
      unvisitEntityObject(entity, schema, unvisit, '', localCacheKey, args),
    );
  }

  // last function computes if it is not in any caches
  return cache.getEntity(pk, schema, entity, localCacheKey =>
    unvisitEntityObject(entity, schema, unvisit, pk, localCacheKey, args),
  );
}

function noCacheGetEntity(
  computeValue: (localCacheKey: Record<string, any>) => void,
): object | undefined | symbol {
  const localCacheKey = {};
  computeValue(localCacheKey);

  return localCacheKey[''];
}

function unvisitEntityObject(
  entity: object,
  schema: EntityInterface<any>,
  unvisit: (input: any, schema: any) => any,
  pk: string,
  localCacheKey: Record<string, any>,
  args: readonly any[],
): void {
  const entityCopy = (localCacheKey[pk] =
    isImmutable(entity) ?
      schema.createIfValid(entity.toObject())
    : schema.createIfValid(entity));

  if (entityCopy === undefined) {
    // undefined indicates we should suspense (perhaps failed validation)
    localCacheKey[pk] = INVALID;
  } else {
    if (typeof schema.denormalize === 'function') {
      localCacheKey[pk] = schema.denormalize(entityCopy, args, unvisit);
    }
  }
}

const getUnvisit = (
  getEntity: GetEntity,
  cache: Cache,
  args: readonly any[],
) => {
  function unvisit(input: any, schema: any): any {
    if (!schema) return input;

    if (input === null || input === undefined) {
      return input;
    }

    if (typeof schema.denormalize !== 'function') {
      // deserialize fields (like Temporal.Instant)
      if (typeof schema === 'function') {
        return schema(input);
      }

      // shorthand for object, array
      if (typeof schema === 'object') {
        const method =
          Array.isArray(schema) ? arrayDenormalize : objectDenormalize;
        return method(schema, input, args, unvisit);
      }
    } else {
      if (isEntity(schema)) {
        return unvisitEntity(input, schema, args, unvisit, getEntity, cache);
      }

      return schema.denormalize(input, args, unvisit);
    }

    return input;
  }

  return (input: any, schema: any): { data: any; paths: Path[] } => {
    // in the case where WeakMap cannot be used
    // this test ensures null is properly excluded from WeakMap
    const cachable = Object(input) === input && Object(schema) === schema;
    return cache.getResults(input, cachable, () => unvisit(input, schema));
  };
};
export default getUnvisit;
