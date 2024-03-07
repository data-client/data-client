import data from './data.json' assert { type: 'json' };
import {
  Entity,
  normalize,
  denormalize,
  inferResults,
  WeakEntityMap,
  denormalizeCached,
  initialState,
} from './dist/index.js';
import { printStatus } from './printStatus.js';
import {
  ProjectSchema,
  ProjectQuery,
  ProjectQuerySorted,
  ProjectWithBuildTypesDescription,
  ProjectSchemaMixin,
  User,
} from './schemas.js';
import userData from './user.json' assert { type: 'json' };

const { result, entities } = normalize(data, ProjectSchema);
const queryState = normalize(data, ProjectQuery);
queryState.result = inferResults(
  ProjectQuery,
  [],
  queryState.indexes,
  queryState.entities,
);
const queryInfer = inferResults(
  ProjectQuerySorted,
  [],
  queryState.indexes,
  queryState.entities,
);

let githubState = normalize(userData, User);

const actionMeta = {
  fetchedAt: Date.now(),
  date: Date.now(),
  expiresAt: Date.now() + 10000000,
}

export default function addNormlizrSuite(suite) {
  let denormCache = {
    entities: {},
    endpoints: {
      '/fake': new WeakEntityMap(),
      '/fakeQuery': new WeakEntityMap(),
    },
  };
  // prime the cache
  denormalizeCached(
    result,
    ProjectSchema,
    entities,
    denormCache.entities,
    denormCache.endpoints['/fake'],
    [],
  );
  denormalizeCached(
    queryState.result,
    ProjectQuery,
    queryState.entities,
    denormCache.entities,
    denormCache.endpoints['/fakeQuery'],
    [],
  );
  %OptimizeFunctionOnNextCall(denormalizeCached);
  %OptimizeFunctionOnNextCall(denormalize);
  %OptimizeFunctionOnNextCall(normalize);

  return suite
    .add('normalizeLong', () => {
      return normalize(
        data,
        ProjectSchema,
        [],
        initialState.entities,
        initialState.indexes,
        initialState.entityMeta,
        actionMeta,
      );
    })
    .add('infer All', () => {
      return inferResults(
        ProjectQuery,
        [],
        queryState.indexes,
        queryState.entities,
      );
    })
    .add('denormalizeLong', () => {
      return denormalizeCached(result, ProjectSchema, entities);
    })
    .add('denormalizeLong donotcache', () => {
      return denormalize(result, ProjectSchema, entities);
    })
    .add('denormalizeShort donotcache 500x', () => {
      for (let i = 0; i < 500; ++i) {
        denormalize('gnoff', User, githubState.entities);
      }
    })
    .add('denormalizeShort 500x', () => {
      for (let i = 0; i < 500; ++i) {
        denormalizeCached('gnoff', User, githubState.entities);
      }
    })
    .add('denormalizeShort 500x withCache', () => {
      for (let i = 0; i < 500; ++i) {
        denormalizeCached('gnoff', User, githubState.entities,denormCache.entities,denormCache.endpoints['/user'], []);
      }
    })
    .add('denormalizeLong with mixin Entity', () => {
      return denormalizeCached(result, ProjectSchemaMixin, entities);
    })
    .add('denormalizeLong withCache', () => {
      return denormalizeCached(
        result,
        ProjectSchema,
        entities,
        denormCache.entities,
        denormCache.endpoints['/fake'],
        [],
      );
    })
    .add('denormalizeLongAndShort withEntityCacheOnly', () => {
      denormalizeCached(
        result,
        ProjectSchema,
        entities,
        denormCache.entities,
      );
      denormalizeCached(
        'gnoff',
        User,
        githubState.entities,
        denormCache.entities,
      );
    })
    .add('denormalizeLong All withCache', () => {
      return denormalizeCached(
        queryState.result,
        ProjectQuery,
        queryState.entities,
        denormCache.entities,
        denormCache.endpoints['/fakeQuery'],
        [],
      );
    })
    .add('denormalizeLong Query-sorted withCache', () => {
      return denormalizeCached(
        queryInfer,
        ProjectQuerySorted,
        queryState.entities,
        denormCache.entities,
        denormCache.endpoints['/fakeQuery'],
        [],
      );
    })
    .on('complete', function () {
      if (process.env.SHOW_OPTIMIZATION) {
        printStatus(denormalizeCached);
        printStatus(Entity.normalize);
        printStatus(Entity.denormalize);
        printStatus(ProjectWithBuildTypesDescription.prototype.pk);
        printStatus(Entity.merge);
        printStatus(Entity.validate);
      }
    });
}
