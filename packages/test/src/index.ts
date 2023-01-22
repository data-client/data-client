Object.hasOwn =
  Object.hasOwn ||
  /* istanbul ignore next */ function hasOwn(it, key) {
    return Object.prototype.hasOwnProperty.call(it, key);
  };
export { default as MockResolver } from './MockResolver.js';
import makeRenderRestHook from './makeRenderRestHook.js';
import MockProvider from './MockProvider.js';
import mockInitialState from './mockState.js';
export type {
  FixtureEndpoint,
  SuccessFixtureEndpoint,
  ErrorFixtureEndpoint,
  Fixture,
  SuccessFixture,
  ErrorFixture,
} from './mockState.js';
export { act } from './renderHook.cjs';

export { makeRenderRestHook, MockProvider, mockInitialState };
