import type Cache from './cache.js';
import type { EntityInterface } from '../interface.js';
import type { DenormalizeCache, Path } from '../types.js';
import WeakEntityMap, {
  type Dep,
  type GetEntity,
  depToPaths,
} from '../WeakEntityMap.js';

export default class GlobalCache implements Cache {
  private dependencies: Dep[] = [];
  private cycleCache: Record<string, Record<string, number>> = {};
  private cycleIndex = -1;
  private localCache: Record<string, Record<string, any>> = {};

  private declare getCache: (
    pk: string,
    schema: EntityInterface,
  ) => WeakEntityMap<object, any>;

  private declare _getEntity: GetEntity;
  private declare resultCache: DenormalizeCache['results'][string];

  constructor(
    getEntity: GetEntity,
    entityCache: DenormalizeCache['entities'],
    resultCache: DenormalizeCache['results'][string],
  ) {
    this._getEntity = getEntity;
    this.getCache = getEntityCaches(entityCache);
    this.resultCache = resultCache;
  }

  getEntity(
    pk: string,
    schema: EntityInterface,
    entity: any,
    computeValue: (localCacheKey: Record<string, any>) => void,
  ): object | undefined | symbol {
    const key = schema.key;
    const { localCacheKey, cycleCacheKey } = this.getCacheKey(key);

    if (!localCacheKey[pk]) {
      const globalCache: WeakEntityMap<object, EntityCacheValue> =
        this.getCache(pk, schema);
      const [cacheValue, cachePath] = globalCache.get(entity, this._getEntity);
      // TODO: what if this just returned the deps - then we don't need to store them

      if (cachePath) {
        localCacheKey[pk] = cacheValue.value;
        // TODO: can we store the cache values instead of tracking *all* their sources?
        // this is only used for setting results cache correctly. if we got this far we will def need to set as we would have already tried getting it
        this.dependencies.push(...cacheValue.dependencies);
        return cacheValue.value;
      }
      // if we don't find in denormalize cache then do full denormalize
      else {
        const trackingIndex = this.dependencies.length;
        cycleCacheKey[pk] = trackingIndex;
        this.dependencies.push({ entity, path: { key, pk } });

        /** NON-GLOBAL_CACHE CODE */
        computeValue(localCacheKey);
        /** /END NON-GLOBAL_CACHE CODE */

        delete cycleCacheKey[pk];
        // if in cycle, use the start of the cycle to track all deps
        // otherwise, we use our own trackingIndex
        const localKey = this.dependencies.slice(
          this.cycleIndex === -1 ? trackingIndex : this.cycleIndex,
        );
        const cacheValue: EntityCacheValue = {
          dependencies: localKey,
          value: localCacheKey[pk],
        };
        globalCache.set(localKey, cacheValue);

        // start of cycle - reset cycle detection
        if (this.cycleIndex === trackingIndex) {
          this.cycleIndex = -1;
        }
      }
    } else {
      // cycle detected
      if (pk in cycleCacheKey) {
        this.cycleIndex = cycleCacheKey[pk];
      } else {
        // with no cycle, globalCacheEntry will have already been set
        this.dependencies.push({ entity, path: { key, pk } });
      }
    }
    return localCacheKey[pk];
  }

  private getCacheKey(key: string) {
    if (!(key in this.localCache)) {
      this.localCache[key] = Object.create(null);
    }
    if (!(key in this.cycleCache)) {
      this.cycleCache[key] = Object.create(null);
    }
    const localCacheKey = this.localCache[key];
    const cycleCacheKey = this.cycleCache[key];
    return { localCacheKey, cycleCacheKey };
  }

  getResults(
    input: any,
    cachable: boolean,
    computeValue: () => any,
  ): {
    data: any;
    paths: Path[];
  } {
    if (!cachable) {
      return { data: computeValue(), paths: this.paths() };
    }

    let [data, paths] = this.resultCache.get(input, this._getEntity);

    if (paths === undefined) {
      data = computeValue();
      // we want to do this before we add our 'input' entry
      paths = this.paths();
      // for the first entry, `path` is ignored so empty members is fine
      this.dependencies.unshift({ entity: input, path: { key: '', pk: '' } });
      this.resultCache.set(this.dependencies, data);
    }

    return { data, paths };
  }

  protected paths() {
    return depToPaths(this.dependencies);
  }
}

interface EntityCacheValue {
  dependencies: Dep[];
  value: object | symbol | undefined;
}

const getEntityCaches = (entityCache: DenormalizeCache['entities']) => {
  return (pk: string, schema: EntityInterface) => {
    const key = schema.key;
    // collections should use the entities they collect over
    // TODO: this should be based on a public interface
    const entityInstance: EntityInterface = (schema.cacheWith as any) ?? schema;

    if (!(key in entityCache)) {
      entityCache[key] = Object.create(null);
    }
    const entityCacheKey = entityCache[key];
    if (!entityCacheKey[pk])
      entityCacheKey[pk] = new WeakMap<
        EntityInterface,
        WeakEntityMap<object, any>
      >();

    let wem: WeakEntityMap<object, any> = entityCacheKey[pk].get(
      entityInstance,
    ) as any;
    if (!wem) {
      wem = new WeakEntityMap<object, any>();
      entityCacheKey[pk].set(entityInstance, wem);
    }

    return wem;
  };
};
