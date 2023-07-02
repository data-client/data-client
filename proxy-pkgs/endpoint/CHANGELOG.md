# Change Log

## 3.8.5

### Patch Changes

- 73a2be1484: Proxy to @data-client

## 3.8.4

### Patch Changes

- 82de0b66dd: Set Collection key in constructor
- 03dda411e7: Non-nested Collections will infer
- 03dda411e7: Update createCollectionFilter's collectionKey type to reflect values are always strings

## 3.8.3

### Patch Changes

- 3f3413060a: Collections now have a default argsKey

## 3.8.2

### Patch Changes

- d4aa8bdbdb: fix: Another type exports fix

## 3.8.1

### Patch Changes

- e7aab4063e: fix: TypeScript 'cannot be named without reference' by adding type exports
- e7aab4063e: Collections match schemas on interfaces, rather than realized types
- c01a884942: fix: Collection should expose .cacehWith to vary cache on its Entity

## 3.8.0

### Minor Changes

- e00fd0516c: Values() removes deleted members like Array
- a005bd06af: Invalidate/Delete support normalizr 11 lifecycles (required for 12?)
- 68a5944091: Add Entity.mergeMeta()
- 93a08592c6: Support using args[] during normalization/denormalization
- 93a08592c6: Entity.pk() has a fourth argument: args[]
- 0c7ca6310d: Entity.infer() supports new usage
- 7910c901e7: Add INVALID symbol
- 93a08592c6: Add Collections - entities but for Arrays or Values
- e00fd0516c: Add schema.denormalizeOnly optimized path for normalizr 11+
- 7910c901e7: Add schema.Invalidate (new name for Delete)

### Patch Changes

- 93f103e3af: Values members are skipped if they are falsy
- a005bd06af: mergeMeta -> mergeMetaWithStore() for consistent naming

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

### [3.7.4](https://github.com/data-client/rest-hooks/compare/@rest-hooks/endpoint@3.7.3...@rest-hooks/endpoint@3.7.4) (2023-03-21)

### 💅 Enhancement

- Improve legacy TypeScript compatibility ([#2505](https://github.com/data-client/rest-hooks/issues/2505)) ([8bcaf1a](https://github.com/data-client/rest-hooks/commit/8bcaf1a9b7af7769d7984ca1afc4b1ac40adf060))

### [3.7.3](https://github.com/data-client/rest-hooks/compare/@rest-hooks/endpoint@3.7.2...@rest-hooks/endpoint@3.7.3) (2023-03-19)

### 🐛 Bug Fix

- Legacy type compatibility ([02870c0](https://github.com/data-client/rest-hooks/commit/02870c0054b6b7ad3b09c1ec42574a267df02492))

### 📦 Package

- Update `typescript` to v5 ([#2494](https://github.com/data-client/rest-hooks/issues/2494)) ([52094d9](https://github.com/data-client/rest-hooks/commit/52094d981670384f15427892f0db45fba0419bb2))

### [3.7.2](https://github.com/data-client/rest-hooks/compare/@rest-hooks/endpoint@3.7.1...@rest-hooks/endpoint@3.7.2) (2023-03-15)

### 💅 Enhancement

- Avoid CSP check if we find a CS Policy ([132582e](https://github.com/data-client/rest-hooks/commit/132582eda80fb7a30637da1a2280fd6be15922c6))
- Include extension in all imports ([#2482](https://github.com/data-client/rest-hooks/issues/2482)) ([9d57220](https://github.com/data-client/rest-hooks/commit/9d57220d4cb82fa3090f4127b277bcf6b62a34b1))

### 📦 Package

- Update babel packages ([#2487](https://github.com/data-client/rest-hooks/issues/2487)) ([3fc9efc](https://github.com/data-client/rest-hooks/commit/3fc9efc0bfc818ae7b4a1113cf6f7daa8bbcba8c))

### [3.7.1](https://github.com/data-client/rest-hooks/compare/@rest-hooks/endpoint@3.7.0...@rest-hooks/endpoint@3.7.1) (2023-03-12)

### 🐛 Bug Fix

- Keep same Entity.key algo even when mangling is detected ([e219f0a](https://github.com/data-client/rest-hooks/commit/e219f0a91d60d7a31a1ab26d0245b317556eb6e8))

### 📝 Documentation

- Update relational guide ([#2472](https://github.com/data-client/rest-hooks/issues/2472)) ([3b07608](https://github.com/data-client/rest-hooks/commit/3b0760808bafe3f0fcacd1c30668343e9b4dd470))

### [3.7.0](https://github.com/data-client/rest-hooks/compare/@rest-hooks/endpoint@3.6.0...@rest-hooks/endpoint@3.7.0) (2023-03-02)

### 🚀 Features

- Add Entity lifecycle overrides to mixin options ([#2468](https://github.com/data-client/rest-hooks/issues/2468)) ([24e8ec6](https://github.com/data-client/rest-hooks/commit/24e8ec6a5bac201f673d85a6ab9836a2c11502f6))
- Add mixin schema.Entity() ([#2449](https://github.com/data-client/rest-hooks/issues/2449)) ([6c5d5db](https://github.com/data-client/rest-hooks/commit/6c5d5db7f5856c21927e9fa389c09ead11e93ea0))

### 🐛 Bug Fix

- Remove accidental import ([908e6d6](https://github.com/data-client/rest-hooks/commit/908e6d627daf8de8ce7d07f9cc1d29e8c8399352))

### 📦 Package

- Update babel packages ([#2457](https://github.com/data-client/rest-hooks/issues/2457)) ([45c4a0a](https://github.com/data-client/rest-hooks/commit/45c4a0ab4ebd6112db75e8c6f09e5ad1add74c8b))

## [3.6.0](https://github.com/data-client/rest-hooks/compare/@rest-hooks/endpoint@3.5.1...@rest-hooks/endpoint@3.6.0) (2023-02-21)

### 🚀 Features

- Add Endpoint.testKey ([#2439](https://github.com/data-client/rest-hooks/issues/2439)) ([d183216](https://github.com/data-client/rest-hooks/commit/d1832163aea11b69106d96955a0da58825dc8753))

### 💅 Enhancement

- Do not key on schema in result cache ([#2448](https://github.com/data-client/rest-hooks/issues/2448)) ([14bd762](https://github.com/data-client/rest-hooks/commit/14bd76225701b8d443fc41d006995da3c2532050))
- Global denormalize cache lookups up to 25x faster ([#2444](https://github.com/data-client/rest-hooks/issues/2444)) ([f963675](https://github.com/data-client/rest-hooks/commit/f963675ecde98b9008cedef192b938654a59de05))
- Make Entity.\_\_defaults non-enumerable ([1a836e4](https://github.com/data-client/rest-hooks/commit/1a836e43286f1866b62b61789f824f02ba0674d0))

### 🐛 Bug Fix

- Entity.defaults should work with inheritance ([#2440](https://github.com/data-client/rest-hooks/issues/2440)) ([44e8534](https://github.com/data-client/rest-hooks/commit/44e85349f129c8c611412b7e0a824fea6895e214))

### [3.5.1](https://github.com/data-client/rest-hooks/compare/@rest-hooks/endpoint@3.5.0...@rest-hooks/endpoint@3.5.1) (2023-02-14)

### 💅 Enhancement

- Default RestEndpoint name based on url path ([#2436](https://github.com/data-client/rest-hooks/issues/2436)) ([13e2d4d](https://github.com/data-client/rest-hooks/commit/13e2d4de1b6eaae9fe2fbaca62eb6c6480990815))
- Denormalize code clean and slight optimize ([#2434](https://github.com/data-client/rest-hooks/issues/2434)) ([64eb635](https://github.com/data-client/rest-hooks/commit/64eb635bbef725abfab4537e15ae7cb1c467abc9))
- Improve autonaming failure detection for Endpoint ([#2435](https://github.com/data-client/rest-hooks/issues/2435)) ([5287bd4](https://github.com/data-client/rest-hooks/commit/5287bd43fc059bf5f5503a42eeb919fd1190d835))
- Use self-overwriting memoization pattern ([#2437](https://github.com/data-client/rest-hooks/issues/2437)) ([395e3d8](https://github.com/data-client/rest-hooks/commit/395e3d8ca554552736b4b7c3c3af823ca6290ae9))
- Use self-overwriting pattern to limit error spam ([#2438](https://github.com/data-client/rest-hooks/issues/2438)) ([88750ee](https://github.com/data-client/rest-hooks/commit/88750ee92c635dc101c832f829cea1ed4accd455))

## [3.5.0](https://github.com/data-client/rest-hooks/compare/@rest-hooks/endpoint@3.4.1...@rest-hooks/endpoint@3.5.0) (2023-02-11)

### 🚀 Features

- Allow direct assignment to Entity.key ([#2430](https://github.com/data-client/rest-hooks/issues/2430)) ([b248903](https://github.com/data-client/rest-hooks/commit/b2489032c8ebc8f542fccafa046df906f52cab72))
- Entity.createIfValid() lifecycle ([#2417](https://github.com/data-client/rest-hooks/issues/2417)) ([41153c6](https://github.com/data-client/rest-hooks/commit/41153c63f9e3b32ef48cf6a3f0a81d1d1185c17b))

### 💅 Enhancement

- Alert users of class mangling issues ([#2428](https://github.com/data-client/rest-hooks/issues/2428)) ([7f67b82](https://github.com/data-client/rest-hooks/commit/7f67b8255f9938fce2a125df5c31eb73380bc844))

### 📦 Package

- Update all non-major dependencies ([#2399](https://github.com/data-client/rest-hooks/issues/2399)) ([7efa267](https://github.com/data-client/rest-hooks/commit/7efa2677f11fee08ddbe8251d0fe80023aec152f))

### [3.4.1](https://github.com/data-client/rest-hooks/compare/@rest-hooks/endpoint@3.4.0...@rest-hooks/endpoint@3.4.1) (2023-01-30)

### 📝 Documentation

- Update github organization to data-client ([#2396](https://github.com/data-client/rest-hooks/issues/2396)) ([45faab1](https://github.com/data-client/rest-hooks/commit/45faab1962cad292d1f77a0a997e8c321a6917db))

## [3.4.0](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/endpoint@3.3.0...@rest-hooks/endpoint@3.4.0) (2023-01-29)

### 🚀 Features

- Add Entity.mergeWithStore() ([#2384](https://github.com/coinbase/rest-hooks/issues/2384)) ([617d3f1](https://github.com/coinbase/rest-hooks/commit/617d3f1618784542ec7f3675efa44aaf8105f348))

### 📝 Documentation

- Add Entity.mergeWithStore() ([e2ac322](https://github.com/coinbase/rest-hooks/commit/e2ac3222a0cfd1d3698787f8eb2bcc433636dbcf))

### [3.3.0](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/endpoint@3.2.8...@rest-hooks/endpoint@3.3.0) (2023-01-23)

### 🚀 Features

- Allow arbitrary return types for Query ([#2371](https://github.com/coinbase/rest-hooks/issues/2371)) ([b73cc3b](https://github.com/coinbase/rest-hooks/commit/b73cc3b025e7f96a97ebd3fb25f79c991d8b7936))

### 💅 Enhancement

- Inform user when CSP feature detection causes console error ([085449c](https://github.com/coinbase/rest-hooks/commit/085449c3d008a1e6e6bd9ad9d2a141d506f8bb3f))

### [3.2.8](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/endpoint@3.2.7...@rest-hooks/endpoint@3.2.8) (2023-01-14)

### 📦 Package

- Update linting packages ([#2351](https://github.com/coinbase/rest-hooks/issues/2351)) ([d3498ea](https://github.com/coinbase/rest-hooks/commit/d3498ea396dfbfdc745ec6e68920a714d8870fe8))

### [3.2.7](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/endpoint@3.2.6...@rest-hooks/endpoint@3.2.7) (2023-01-12)

### 📦 Package

- Update babel packages ([#2348](https://github.com/coinbase/rest-hooks/issues/2348)) ([5d0a68e](https://github.com/coinbase/rest-hooks/commit/5d0a68ea00b021effeae185fcdea415cf50c0328))

### [3.2.6](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/endpoint@3.2.5...@rest-hooks/endpoint@3.2.6) (2022-12-23)

### 📦 Package

- Update all non-major dependencies ([#2325](https://github.com/coinbase/rest-hooks/issues/2325)) ([e8a6809](https://github.com/coinbase/rest-hooks/commit/e8a68098423a577f58b3c5ab8ec079eb8812094e))
- Update babel packages ([#2339](https://github.com/coinbase/rest-hooks/issues/2339)) ([2cc99b9](https://github.com/coinbase/rest-hooks/commit/2cc99b99aeece58b0e7674ca80d3372555612c63))

### 📝 Documentation

- Add 7, 7.1 blog; new intro ([#2326](https://github.com/coinbase/rest-hooks/issues/2326)) ([b76c134](https://github.com/coinbase/rest-hooks/commit/b76c134cd8d0675c0eef7413ba3fddb6262443cb))
- Updates to the docs ([#2335](https://github.com/coinbase/rest-hooks/issues/2335)) ([73c8d9f](https://github.com/coinbase/rest-hooks/commit/73c8d9f4b403412cd766955305461aa7d8ebb462))

### [3.2.5](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/endpoint@3.2.4...@rest-hooks/endpoint@3.2.5) (2022-12-06)

### 💅 Enhancement

- Reduce bundlesize via custom Object.hasOwn polyfill ([#2322](https://github.com/coinbase/rest-hooks/issues/2322)) ([1f8009d](https://github.com/coinbase/rest-hooks/commit/1f8009d9849cfb784f072a1078b4d12b37d59a04))

### [3.2.4](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/endpoint@3.2.3...@rest-hooks/endpoint@3.2.4) (2022-12-05)

### 💅 Enhancement

- Detect html bad responses ([#2311](https://github.com/coinbase/rest-hooks/issues/2311)) ([674001b](https://github.com/coinbase/rest-hooks/commit/674001bb697017c925d9f138744e94826fa1c519))
- Include Object.hasOwn polyfill ([#2309](https://github.com/coinbase/rest-hooks/issues/2309)) ([14b93f6](https://github.com/coinbase/rest-hooks/commit/14b93f67f0589df5813909e0c1acd4cacad0a3ee))
- Update doc link in normalize error ([042237a](https://github.com/coinbase/rest-hooks/commit/042237a0196c9ec3d9e00d1ad0f12334daf3f3df))

### 📦 Package

- Update babel packages ([#2308](https://github.com/coinbase/rest-hooks/issues/2308)) ([e3ee5ee](https://github.com/coinbase/rest-hooks/commit/e3ee5ee57431971ba4bdb47b48ed89933412374c))

### [3.2.3](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/endpoint@3.2.2...@rest-hooks/endpoint@3.2.3) (2022-11-22)

### 📦 Package

- Update all non-major dependencies ([#2278](https://github.com/coinbase/rest-hooks/issues/2278)) ([f3c52d4](https://github.com/coinbase/rest-hooks/commit/f3c52d4d290caee2197501f4b524bc509c18291e))

### [3.2.2](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/endpoint@3.2.1...@rest-hooks/endpoint@3.2.2) (2022-11-13)

**Note:** Version bump only for package @rest-hooks/endpoint

### [3.2.1](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/endpoint@3.2.0...@rest-hooks/endpoint@3.2.1) (2022-11-09)

### 📝 Documentation

- Cut 6.5 of docs ([#2259](https://github.com/coinbase/rest-hooks/issues/2259)) ([777695b](https://github.com/coinbase/rest-hooks/commit/777695b474ddd63710cf720caa4a079929f0537a))

## [3.2.0](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/endpoint@3.1.0...@rest-hooks/endpoint@3.2.0) (2022-11-06)

### 🚀 Features

- Add Query and schema.All ([#2229](https://github.com/coinbase/rest-hooks/issues/2229)) ([ddc03ff](https://github.com/coinbase/rest-hooks/commit/ddc03ff39b7ce8415db37b735bb81aa862807bb2))

### 📦 Package

- Update babel packages ([#2255](https://github.com/coinbase/rest-hooks/issues/2255)) ([4d739a9](https://github.com/coinbase/rest-hooks/commit/4d739a9dbe2d9796f21e24ebb2022e10575bd0c4))

## [3.1.0](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/endpoint@3.0.1...@rest-hooks/endpoint@3.1.0) (2022-10-28)

### 🚀 Features

- Support infer for Endpoints with string or number args ([#2226](https://github.com/coinbase/rest-hooks/issues/2226)) ([ff9bcc0](https://github.com/coinbase/rest-hooks/commit/ff9bcc0382dc41d1bf47754c1493320847e103cc))

### 🐛 Bug Fix

- Add 'hard' are error policy type option ([7977941](https://github.com/coinbase/rest-hooks/commit/79779411716fce15ce5fa25b35b14021db1e25a0))
- Array polymorphic types ([5f2182e](https://github.com/coinbase/rest-hooks/commit/5f2182e6f210bbdad6278dd4f7c352896dee359f))

### 📦 Package

- Update babel packages ([#2227](https://github.com/coinbase/rest-hooks/issues/2227)) ([4e652a1](https://github.com/coinbase/rest-hooks/commit/4e652a13552cbf467ca140738f9603aba06cffee))

### 📝 Documentation

- Show typing information in live editor ([#2236](https://github.com/coinbase/rest-hooks/issues/2236)) ([20fb530](https://github.com/coinbase/rest-hooks/commit/20fb530f8091831b23556c98f6c88068e3879035))

### [3.0.1](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/endpoint@3.0.0...@rest-hooks/endpoint@3.0.1) (2022-10-01)

### 💅 Enhancement

- Improve types ([31e3d63](https://github.com/coinbase/rest-hooks/commit/31e3d63080939409f791e3c8ecb266ab23d1265b))

### 📦 Package

- Update all non-major dependencies ([#2190](https://github.com/coinbase/rest-hooks/issues/2190)) ([c2c7403](https://github.com/coinbase/rest-hooks/commit/c2c74033ecf2004ddebaf064af64f37894f20dec))
- Update all non-major dependencies ([#2193](https://github.com/coinbase/rest-hooks/issues/2193)) ([2abaf51](https://github.com/coinbase/rest-hooks/commit/2abaf5179ae9f30df405c800284d0a5aa41b2ffe))
- Update babel packages ([#2192](https://github.com/coinbase/rest-hooks/issues/2192)) ([7c9d3bc](https://github.com/coinbase/rest-hooks/commit/7c9d3bc8ea3019490a1f9e1978c3709b346d582d))

### 📝 Documentation

- Add react-native related keywords ([fe66dcd](https://github.com/coinbase/rest-hooks/commit/fe66dcdcf3948e6d2142004d0f6b0d043f9b4fb4))

## [3.0.0](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/endpoint@2.3.1...@rest-hooks/endpoint@3.0.0) (2022-09-19)

### ⚠ 💥 BREAKING CHANGES

- Requires handling endpoints without schema

### 🚀 Features

- Entity.denormalize handles symbol input ([0817c1e](https://github.com/coinbase/rest-hooks/commit/0817c1e56132ef02c38dfc7c226ba84dc272fce5))
- Move schema implementations to @rest-hooks/endpoint ([#2159](https://github.com/coinbase/rest-hooks/issues/2159)) ([a4be8c0](https://github.com/coinbase/rest-hooks/commit/a4be8c08ea515a27254ea480da2baffa1534b09d))

### 💅 Enhancement

- Get rid of legacy \_schema member type ([7a42da4](https://github.com/coinbase/rest-hooks/commit/7a42da4f5c3357eb1963d8fd990851a554034671))
- Object.prototype.hasOwnProperty -> Object.hasOwn ([bdbc6a4](https://github.com/coinbase/rest-hooks/commit/bdbc6a49350cae24a9d8cda0d4e360ce20cb91cd))

### 🐛 Bug Fix

- React native to use es6 modules ([#2180](https://github.com/coinbase/rest-hooks/issues/2180)) ([31524ea](https://github.com/coinbase/rest-hooks/commit/31524ea2cbe6ab4bf4cfe77659ac5e69b0319763))

### 📦 Package

- Update babel packages ([#2174](https://github.com/coinbase/rest-hooks/issues/2174)) ([dab7ac7](https://github.com/coinbase/rest-hooks/commit/dab7ac798850fc0519ffe5793601757b10d949b2))

## [3.0.0-beta.1](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/endpoint@2.3.1...@rest-hooks/endpoint@3.0.0-beta.1) (2022-09-17)

### ⚠ 💥 BREAKING CHANGES

- Requires handling endpoints without schema

### 🚀 Features

- Entity.denormalize handles symbol input ([0817c1e](https://github.com/coinbase/rest-hooks/commit/0817c1e56132ef02c38dfc7c226ba84dc272fce5))
- Move schema implementations to @rest-hooks/endpoint ([#2159](https://github.com/coinbase/rest-hooks/issues/2159)) ([a4be8c0](https://github.com/coinbase/rest-hooks/commit/a4be8c08ea515a27254ea480da2baffa1534b09d))

### 💅 Enhancement

- Get rid of legacy \_schema member type ([7a42da4](https://github.com/coinbase/rest-hooks/commit/7a42da4f5c3357eb1963d8fd990851a554034671))
- Object.prototype.hasOwnProperty -> Object.hasOwn ([bdbc6a4](https://github.com/coinbase/rest-hooks/commit/bdbc6a49350cae24a9d8cda0d4e360ce20cb91cd))

### 📦 Package

- Update babel packages ([#2174](https://github.com/coinbase/rest-hooks/issues/2174)) ([dab7ac7](https://github.com/coinbase/rest-hooks/commit/dab7ac798850fc0519ffe5793601757b10d949b2))

## [3.0.0-beta.0](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/endpoint@2.3.1...@rest-hooks/endpoint@3.0.0-beta.0) (2022-09-16)

### ⚠ 💥 BREAKING CHANGES

- Requires handling endpoints without schema

### 🚀 Features

- Move schema implementations to @rest-hooks/endpoint ([#2159](https://github.com/coinbase/rest-hooks/issues/2159)) ([ffaed57](https://github.com/coinbase/rest-hooks/commit/ffaed57a3b397f6eeb69ab3a9fd51366b298b3e5))

### 💅 Enhancement

- Get rid of legacy \_schema member type ([3245cdc](https://github.com/coinbase/rest-hooks/commit/3245cdc4c0e82b1ceee77c81d920c46df1c87e37))

### 📦 Package

- Update babel packages ([#2174](https://github.com/coinbase/rest-hooks/issues/2174)) ([dab7ac7](https://github.com/coinbase/rest-hooks/commit/dab7ac798850fc0519ffe5793601757b10d949b2))

### [2.3.1](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/endpoint@2.3.0...@rest-hooks/endpoint@2.3.1) (2022-09-10)

### 📦 Package

- Update babel packages ([#2161](https://github.com/coinbase/rest-hooks/issues/2161)) ([31b2c8f](https://github.com/coinbase/rest-hooks/commit/31b2c8ff3d9f9001c31f3f5c15bec1321a15361d))

## [2.3.0](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/endpoint@2.2.12...@rest-hooks/endpoint@2.3.0) (2022-09-04)

### 🚀 Features

- Add EndpointInstanceInterface ([89a76b5](https://github.com/coinbase/rest-hooks/commit/89a76b50c8d89ea3d7fa19e70274f391b147017e))
- Add validateRequired() ([#2116](https://github.com/coinbase/rest-hooks/issues/2116)) ([85e2bd9](https://github.com/coinbase/rest-hooks/commit/85e2bd9ef2696694ce18c713d35d2c9aaabbedc1))

### 📦 Package

- Update all non-major dependencies ([#2119](https://github.com/coinbase/rest-hooks/issues/2119)) ([3003348](https://github.com/coinbase/rest-hooks/commit/3003348ba96781085a6f8a6a86a882438ba2b5ea))
- Update all non-major dependencies ([#2136](https://github.com/coinbase/rest-hooks/issues/2136)) ([f7c8649](https://github.com/coinbase/rest-hooks/commit/f7c864998abc68cae1a4130f2de50e055c7a5269))
- Update all non-major dependencies ([#2150](https://github.com/coinbase/rest-hooks/issues/2150)) ([eb480f1](https://github.com/coinbase/rest-hooks/commit/eb480f1f567944208483c9239256e7bcf81351e7))
- Update babel packages ([#2124](https://github.com/coinbase/rest-hooks/issues/2124)) ([bab76ae](https://github.com/coinbase/rest-hooks/commit/bab76ae4ac54474634d3cb323b69ef9be5773a03))
- Update babel packages ([#2140](https://github.com/coinbase/rest-hooks/issues/2140)) ([bc4d12d](https://github.com/coinbase/rest-hooks/commit/bc4d12d5369f4eee17f32d9379793cfc9b679d61))
- Update JS test packages to v29 (major) ([#2141](https://github.com/coinbase/rest-hooks/issues/2141)) ([70759cf](https://github.com/coinbase/rest-hooks/commit/70759cfc8a2de9d42a060727d9f91fe4e6945296))

### [2.2.12](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/endpoint@2.2.11...@rest-hooks/endpoint@2.2.12) (2022-07-26)

### 📦 Package

- Update all non-major dependencies ([#2113](https://github.com/coinbase/rest-hooks/issues/2113)) ([f9b7a6e](https://github.com/coinbase/rest-hooks/commit/f9b7a6e5b19a0d6f26208af517451affa161b070))

### [2.2.11](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/endpoint@2.2.10...@rest-hooks/endpoint@2.2.11) (2022-07-23)

### 🐛 Bug Fix

- Ensure dual package hazard solved for non-node ([#2099](https://github.com/coinbase/rest-hooks/issues/2099)) ([6206e64](https://github.com/coinbase/rest-hooks/commit/6206e6463a7c3699d5c1d1b248e4d5418b1327f1))

### [2.2.10](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/endpoint@2.2.7...@rest-hooks/endpoint@2.2.10) (2022-07-20)

### 🐛 Bug Fix

- Fix package exports support for latest resolve pkg ([#2062](https://github.com/coinbase/rest-hooks/issues/2062)) ([0088494](https://github.com/coinbase/rest-hooks/commit/0088494e5cab91da7becebe7d9b62796fb9f4f2e))

### [2.2.7](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/endpoint@2.2.6...@rest-hooks/endpoint@2.2.7) (2022-05-30)

### 📦 Package

- Use @babel/runtime@^7.13.0 to use CJS/ESM exports support ([#2019](https://github.com/coinbase/rest-hooks/issues/2019)) ([78a22f2](https://github.com/coinbase/rest-hooks/commit/78a22f29f86527ac10eb2c9b031984e044226dce))

### [2.2.6](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/endpoint@2.2.5...@rest-hooks/endpoint@2.2.6) (2022-04-30)

### 📝 Documentation

- Update README with newest practices ([#1920](https://github.com/coinbase/rest-hooks/issues/1920)) ([9bbd76c](https://github.com/coinbase/rest-hooks/commit/9bbd76c4fb20125d6318bd8ac5cc4238be4ab3d5))

### [2.2.5](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/endpoint@2.2.4...@rest-hooks/endpoint@2.2.5) (2022-04-16)

**Note:** Version bump only for package @rest-hooks/endpoint

### [2.2.4](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/endpoint@2.2.3...@rest-hooks/endpoint@2.2.4) (2022-04-11)

### 💅 Enhancement

- Improve type inference for getFetchKey ([#1896](https://github.com/coinbase/rest-hooks/issues/1896)) ([36b11af](https://github.com/coinbase/rest-hooks/commit/36b11af67b08183288ad295ff0303eaf78f01dba))

### [2.2.3](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/endpoint@2.2.2...@rest-hooks/endpoint@2.2.3) (2022-04-08)

**Note:** Version bump only for package @rest-hooks/endpoint

### [2.2.2](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/endpoint@2.2.1...@rest-hooks/endpoint@2.2.2) (2022-04-02)

**Note:** Version bump only for package @rest-hooks/endpoint

### [2.2.1](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/endpoint@2.2.0-beta.4...@rest-hooks/endpoint@2.2.1) (2022-04-01)

### 💅 Enhancement

- Hooks should type return value based on 'null' arg ([#1783](https://github.com/coinbase/rest-hooks/issues/1783)) ([d14673e](https://github.com/coinbase/rest-hooks/commit/d14673eab0dad3f02edb54f7bf37e6fed1c47a62))
- Loosen SnapshotInterface to allow compatible but distinct versions ([#1786](https://github.com/coinbase/rest-hooks/issues/1786)) ([7b31f4d](https://github.com/coinbase/rest-hooks/commit/7b31f4df787e4c0a838dc897a81755abbccf1984))

## [2.2.0](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/endpoint@2.1.0...@rest-hooks/endpoint@2.2.0) (2022-03-17)

### 🚀 Features

- Add endpoint.optimisticUpdater ([#1616](https://github.com/coinbase/rest-hooks/issues/1616)) ([7a99fae](https://github.com/coinbase/rest-hooks/commit/7a99fae20ee9abf5f2121c1f1719bdcce3e78d98))

### 💅 Enhancement

- Fetch resolution only removes the optimistic update corresponding to that fetch ([#1653](https://github.com/coinbase/rest-hooks/issues/1653)) ([2fd93f2](https://github.com/coinbase/rest-hooks/commit/2fd93f235074d134200e81ddb16792647b3cffad))
- Hooks should type return value based on 'null' arg ([#1783](https://github.com/coinbase/rest-hooks/issues/1783)) ([d14673e](https://github.com/coinbase/rest-hooks/commit/d14673eab0dad3f02edb54f7bf37e6fed1c47a62))
- Loosen SnapshotInterface to allow compatible but distinct versions ([#1786](https://github.com/coinbase/rest-hooks/issues/1786)) ([7b31f4d](https://github.com/coinbase/rest-hooks/commit/7b31f4df787e4c0a838dc897a81755abbccf1984))
- optimisticUpdater -> getOptimisticResponse ([#1769](https://github.com/coinbase/rest-hooks/issues/1769)) ([4d1cd66](https://github.com/coinbase/rest-hooks/commit/4d1cd66ea2677868aba402d362b9896dffc24462))

## [2.2.0-beta.4](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/endpoint@2.2.0-beta.3...@rest-hooks/endpoint@2.2.0-beta.4) (2022-03-10)

**Note:** Version bump only for package @rest-hooks/endpoint

## [2.2.0-beta.3](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/endpoint@2.2.0-beta.2...@rest-hooks/endpoint@2.2.0-beta.3) (2022-03-08)

### ⚠ 💥 BREAKING CHANGES

- Rename optimisticUpdater -> getOptimisticResponse

### 💅 Enhancement

- optimisticUpdater -> getOptimisticResponse ([#1769](https://github.com/coinbase/rest-hooks/issues/1769)) ([4d1cd66](https://github.com/coinbase/rest-hooks/commit/4d1cd66ea2677868aba402d362b9896dffc24462))

## [2.2.0-beta.2](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/endpoint@2.2.0-beta.0...@rest-hooks/endpoint@2.2.0-beta.2) (2022-02-15)

### 💅 Enhancement

- Fetch resolution only removes the optimistic update corresponding to that fetch ([#1653](https://github.com/coinbase/rest-hooks/issues/1653)) ([2fd93f2](https://github.com/coinbase/rest-hooks/commit/2fd93f235074d134200e81ddb16792647b3cffad))

## [2.2.0-beta.1](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/endpoint@2.2.0-beta.0...@rest-hooks/endpoint@2.2.0-beta.1) (2022-01-31)

### 💅 Enhancement

- Fetch resolution only removes the optimistic update corresponding to that fetch ([#1653](https://github.com/coinbase/rest-hooks/issues/1653)) ([2fd93f2](https://github.com/coinbase/rest-hooks/commit/2fd93f235074d134200e81ddb16792647b3cffad))

## [2.2.0-beta.0](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/endpoint@2.1.0...@rest-hooks/endpoint@2.2.0-beta.0) (2022-01-23)

### 🚀 Features

- Add endpoint.optimisticUpdater ([#1616](https://github.com/coinbase/rest-hooks/issues/1616)) ([7a99fae](https://github.com/coinbase/rest-hooks/commit/7a99fae20ee9abf5f2121c1f1719bdcce3e78d98))

## [2.1.0](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/endpoint@2.0.3...@rest-hooks/endpoint@2.1.0) (2021-11-26)

### 🚀 Features

- useSuspense, useFetch, remaining hooks typed for Endpoint ([#1440](https://github.com/coinbase/rest-hooks/issues/1440)) ([2039d2c](https://github.com/coinbase/rest-hooks/commit/2039d2c4bf280b5a3c570824c25af3a4cc39af0d))

### 🐛 Bug Fix

- useFetcher() work with zero argument Endpoint ([#1514](https://github.com/coinbase/rest-hooks/issues/1514)) ([c5ac9e7](https://github.com/coinbase/rest-hooks/commit/c5ac9e7a1d66f57ddcee5c343b239cf2d6d5f782))

### [2.0.3](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/endpoint@2.0.2...@rest-hooks/endpoint@2.0.3) (2021-10-11)

### 📝 Documentation

- Only validate circleCI badge against master ([#1322](https://github.com/coinbase/rest-hooks/issues/1322)) ([04e9642](https://github.com/coinbase/rest-hooks/commit/04e96426a865cbef362947da3a8f74f7347859e9))

### [2.0.2](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/endpoint@2.0.1...@rest-hooks/endpoint@2.0.2) (2021-09-29)

**Note:** Version bump only for package @rest-hooks/endpoint

### [2.0.1](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/endpoint@2.0.0...@rest-hooks/endpoint@2.0.1) (2021-09-29)

**Note:** Version bump only for package @rest-hooks/endpoint

## [2.0.0](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/endpoint@2.0.0-beta.2...@rest-hooks/endpoint@2.0.0) (2021-09-08)

**Note:** Version bump only for package @rest-hooks/endpoint

## [2.0.0-beta.2](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/endpoint@2.0.0-beta.1...@rest-hooks/endpoint@2.0.0-beta.2) (2021-09-06)

**Note:** Version bump only for package @rest-hooks/endpoint

## [2.0.0-beta.1](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/endpoint@1.2.3...@rest-hooks/endpoint@2.0.0-beta.1) (2021-07-12)

### ⚠ 💥 BREAKING CHANGES

- - Importing directly from hidden files is no longer supported
- Node>=12
- - Removed: SyntheticError (untriggerable since https://github.com/coinbase/rest-hooks/pull/938)

* @rest-hooks/rest: 500s are 'soft', else 'hard'
* PollingSubscription: any errors are 'soft'
* @rest-hooks/endpoint: no default errorPolicy, therefore all errors are
  'hard'

- - fromJS() -> process() to customize init

* normalize results in POJO rather than instances
* FlatEntity, SimpleRecord removed (use @rest-hooks/legacy)
* peerDep @rest-hooks/endpoint > 2

### 🚀 Features

- Add errorPolicy to endpoint options ([#971](https://github.com/coinbase/rest-hooks/issues/971)) ([836f05b](https://github.com/coinbase/rest-hooks/commit/836f05b407b5ac96c8f094e652221aa5a95300b0))
- Use 'exports' package.json member ([#955](https://github.com/coinbase/rest-hooks/issues/955)) ([7e9d39f](https://github.com/coinbase/rest-hooks/commit/7e9d39f15b4b321352ece0caddb93e2c414df8ae))

### 💅 Enhancement

- Different babel targets for cjs and umd builds ([#989](https://github.com/coinbase/rest-hooks/issues/989)) ([f054814](https://github.com/coinbase/rest-hooks/commit/f05481410cf8daa2101d4dbda826e56ad10ec723))
- Entities normalize to POJO ([#940](https://github.com/coinbase/rest-hooks/issues/940)) ([75ebdfe](https://github.com/coinbase/rest-hooks/commit/75ebdfe641ccf57fca35c44a94077e4a314e44d7))
- Give Endpoint.extend() type a name ([#969](https://github.com/coinbase/rest-hooks/issues/969)) ([5afec16](https://github.com/coinbase/rest-hooks/commit/5afec16727f18af6d6acb52b7c0f094555d43e04))
- Remove 'fallback' package.json exports ([#992](https://github.com/coinbase/rest-hooks/issues/992)) ([dc95f9d](https://github.com/coinbase/rest-hooks/commit/dc95f9dbad20d5740218c52c906596b6a3d6eae4))

### 📝 Documentation

- Add doc links to jsdocs ([#966](https://github.com/coinbase/rest-hooks/issues/966)) ([dc7fcfe](https://github.com/coinbase/rest-hooks/commit/dc7fcfec24c30d5f405d24ccc1828620d837ea6b))

## [2.0.0-beta.0](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/endpoint@1.2.2...@rest-hooks/endpoint@2.0.0-beta.0) (2021-06-30)

### ⚠ 💥 BREAKING CHANGES

- - Importing directly from hidden files is no longer supported
- Node>=12
- - Removed: SyntheticError (untriggerable since https://github.com/coinbase/rest-hooks/pull/938)

* @rest-hooks/rest: 500s are 'soft', else 'hard'
* PollingSubscription: any errors are 'soft'
* @rest-hooks/endpoint: no default errorPolicy, therefore all errors are
  'hard'

- - fromJS() -> process() to customize init

* normalize results in POJO rather than instances
* FlatEntity, SimpleRecord removed (use @rest-hooks/legacy)
* peerDep @rest-hooks/endpoint > 2

### 🚀 Features

- Add errorPolicy to endpoint options ([#971](https://github.com/coinbase/rest-hooks/issues/971)) ([836f05b](https://github.com/coinbase/rest-hooks/commit/836f05b407b5ac96c8f094e652221aa5a95300b0))
- Use 'exports' package.json member ([#955](https://github.com/coinbase/rest-hooks/issues/955)) ([7e9d39f](https://github.com/coinbase/rest-hooks/commit/7e9d39f15b4b321352ece0caddb93e2c414df8ae))

### 💅 Enhancement

- Different babel targets for cjs and umd builds ([#989](https://github.com/coinbase/rest-hooks/issues/989)) ([f054814](https://github.com/coinbase/rest-hooks/commit/f05481410cf8daa2101d4dbda826e56ad10ec723))
- Entities normalize to POJO ([#940](https://github.com/coinbase/rest-hooks/issues/940)) ([75ebdfe](https://github.com/coinbase/rest-hooks/commit/75ebdfe641ccf57fca35c44a94077e4a314e44d7))
- Give Endpoint.extend() type a name ([#969](https://github.com/coinbase/rest-hooks/issues/969)) ([5afec16](https://github.com/coinbase/rest-hooks/commit/5afec16727f18af6d6acb52b7c0f094555d43e04))
- Remove 'fallback' package.json exports ([#992](https://github.com/coinbase/rest-hooks/issues/992)) ([dc95f9d](https://github.com/coinbase/rest-hooks/commit/dc95f9dbad20d5740218c52c906596b6a3d6eae4))

### 📝 Documentation

- Add doc links to jsdocs ([#966](https://github.com/coinbase/rest-hooks/issues/966)) ([dc7fcfe](https://github.com/coinbase/rest-hooks/commit/dc7fcfec24c30d5f405d24ccc1828620d837ea6b))

### [1.2.3](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/endpoint@1.2.2...@rest-hooks/endpoint@1.2.3) (2021-07-06)

**Note:** Version bump only for package @rest-hooks/endpoint

### [1.2.2](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/endpoint@1.2.1...@rest-hooks/endpoint@1.2.2) (2021-06-19)

**Note:** Version bump only for package @rest-hooks/endpoint

### [1.2.1](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/endpoint@1.2.0...@rest-hooks/endpoint@1.2.1) (2021-06-16)

**Note:** Version bump only for package @rest-hooks/endpoint

## [1.2.0](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/endpoint@1.1.6...@rest-hooks/endpoint@1.2.0) (2021-06-13)

### 🚀 Features

- Endpoint.name ([#914](https://github.com/coinbase/rest-hooks/issues/914)) ([aa5f80d](https://github.com/coinbase/rest-hooks/commit/aa5f80db6c47ff975b1d257352315a57b87addce))

### [1.1.6](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/endpoint@1.1.5...@rest-hooks/endpoint@1.1.6) (2021-06-09)

### 💅 Enhancement

- 'module' entrypoint targets 2019 browsers ([#905](https://github.com/coinbase/rest-hooks/issues/905)) ([d988abe](https://github.com/coinbase/rest-hooks/commit/d988abe063fc67c74fce12e234c9c3ffdb7cc230))

### [1.1.5](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/endpoint@1.1.3...@rest-hooks/endpoint@1.1.5) (2021-06-02)

### 💅 Enhancement

- Improve autoimport handling in vscode ([#890](https://github.com/coinbase/rest-hooks/issues/890)) ([f8f2bef](https://github.com/coinbase/rest-hooks/commit/f8f2bef411183676009c6a9df24a26d147c6d9f6))

### [1.1.4](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/endpoint@1.1.3...@rest-hooks/endpoint@1.1.4) (2021-05-30)

**Note:** Version bump only for package @rest-hooks/endpoint

### [1.1.3](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/endpoint@1.1.2...@rest-hooks/endpoint@1.1.3) (2021-05-24)

**Note:** Version bump only for package @rest-hooks/endpoint

### [1.1.2](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/endpoint@1.1.1...@rest-hooks/endpoint@1.1.2) (2021-05-24)

**Note:** Version bump only for package @rest-hooks/endpoint

### [1.1.1](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/endpoint@1.1.0...@rest-hooks/endpoint@1.1.1) (2021-04-25)

**Note:** Version bump only for package @rest-hooks/endpoint

## [1.1.0](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/endpoint@1.0.12...@rest-hooks/endpoint@1.1.0) (2021-04-24)

### 🚀 Features

- Endpoint parameters can be of any length ([#767](https://github.com/coinbase/rest-hooks/issues/767)) ([552f837](https://github.com/coinbase/rest-hooks/commit/552f83740279376288879a661ff487c5c6f1d469))
- Endpoint.bind() ([#762](https://github.com/coinbase/rest-hooks/issues/762)) ([b5ad3dd](https://github.com/coinbase/rest-hooks/commit/b5ad3dd8478bc8edbdfe752080e72024bc1686da))

### 💅 Enhancement

- Support TypeScript 3.7 ([#752](https://github.com/coinbase/rest-hooks/issues/752)) ([68a10e0](https://github.com/coinbase/rest-hooks/commit/68a10e06dc0718f5e480097e6056a7a7954d1161))

### [1.0.12](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/endpoint@1.0.11...@rest-hooks/endpoint@1.0.12) (2021-04-12)

**Note:** Version bump only for package @rest-hooks/endpoint

### [1.0.11](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/endpoint@1.0.10...@rest-hooks/endpoint@1.0.11) (2021-04-12)

**Note:** Version bump only for package @rest-hooks/endpoint

### [1.0.10](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/endpoint@1.0.9...@rest-hooks/endpoint@1.0.10) (2021-04-04)

### 🐛 Bug Fix

- Endpoint 'type' in loose typescript mode ([#712](https://github.com/coinbase/rest-hooks/issues/712)) ([9ef9c4f](https://github.com/coinbase/rest-hooks/commit/9ef9c4ffc2813a597f15b571f639ad23fd8d6a03))

### [1.0.9](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/endpoint@1.0.8...@rest-hooks/endpoint@1.0.9) (2021-03-26)

### 🐛 Bug Fix

- Compatibility with TypeScript strict: false ([#683](https://github.com/coinbase/rest-hooks/issues/683)) ([8a6e7ed](https://github.com/coinbase/rest-hooks/commit/8a6e7ed4d179555c4ba5cb8957b1c63697a1ce1a))

### [1.0.8](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/endpoint@1.0.7...@rest-hooks/endpoint@1.0.8) (2021-03-24)

### 💅 Enhancement

- Mark Endpoint's back-compat members as 'deprecated' ([#665](https://github.com/coinbase/rest-hooks/issues/665)) ([6feade0](https://github.com/coinbase/rest-hooks/commit/6feade0ad28eb96c7906793b05d49991294ce858))

### 🐛 Bug Fix

- 'type' inferred from 'sideEffects' correct in union case ([#678](https://github.com/coinbase/rest-hooks/issues/678)) ([2cda690](https://github.com/coinbase/rest-hooks/commit/2cda6900cc3c653637452772ec5439a60354b140))

### [1.0.7](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/endpoint@1.0.6...@rest-hooks/endpoint@1.0.7) (2021-03-14)

### 📝 Documentation

- Update package tags ([#650](https://github.com/coinbase/rest-hooks/issues/650)) ([4ef465a](https://github.com/coinbase/rest-hooks/commit/4ef465a129cd59668cd9c3542bb9ec03c84d2a4d))

### [1.0.6](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/endpoint@1.0.5...@rest-hooks/endpoint@1.0.6) (2021-03-08)

**Note:** Version bump only for package @rest-hooks/endpoint

### [1.0.5](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/endpoint@1.0.4...@rest-hooks/endpoint@1.0.5) (2021-03-03)

**Note:** Version bump only for package @rest-hooks/endpoint

### [1.0.4](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/endpoint@1.0.3...@rest-hooks/endpoint@1.0.4) (2021-03-01)

### 💅 Enhancement

- Support 'undefined' as schema ([#583](https://github.com/coinbase/rest-hooks/issues/583)) ([1e81470](https://github.com/coinbase/rest-hooks/commit/7ef172a3d8469b182cc7a19055920a308841b59e))

### 🐛 Bug Fix

- Gracefully handle primitive entity responses ([#584](https://github.com/coinbase/rest-hooks/issues/584)) ([322b4c6](https://github.com/coinbase/rest-hooks/commit/322b4c6615ea02b09baf0bcfc9b214bb8be1ba4f))

### 📝 Documentation

- Typos and minor improvements ([#561](https://github.com/coinbase/rest-hooks/issues/561)) ([aed902a](https://github.com/coinbase/rest-hooks/commit/aed902a7ee8a50f7f08fab261efa528a82c52b19))

### [1.0.3](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/endpoint@1.0.2...@rest-hooks/endpoint@1.0.3) (2021-02-04)

### 📦 Package

- Relax @babel/runtime requirement to ^7.7.2 ([#513](https://github.com/coinbase/rest-hooks/issues/513)) ([cc95b21](https://github.com/coinbase/rest-hooks/commit/cc95b219fbddebfbf334728887ca6d2fa070fce1))

### 📝 Documentation

- Link improvements, flesh out test readme ([#511](https://github.com/coinbase/rest-hooks/issues/511)) ([9cab431](https://github.com/coinbase/rest-hooks/commit/9cab431803a8b7d9c18e02b3e9cb7e336215ccdb))

### [1.0.2](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/endpoint@1.0.1...@rest-hooks/endpoint@1.0.2) (2021-01-30)

### 🐛 Bug Fix

- Ensure Endpoint doesn't trigger CSP ([#505](https://github.com/coinbase/rest-hooks/issues/505)) ([a5a0011](https://github.com/coinbase/rest-hooks/commit/a5a00119c8888ce5c0440d2045febd9985fd2a8e))

### [1.0.1](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/endpoint@1.0.0...@rest-hooks/endpoint@1.0.1) (2021-01-24)

**Note:** Version bump only for package @rest-hooks/endpoint

## 1.0.0 (2021-01-19)

### ⚠ 💥 BREAKING CHANGES

- Remove `normalize`, `denormalize`; use
  `normalizr` package for those
- getFetchOptions() -> getEndpointExtra()

### 🚀 Features

- Add @rest-hooks/endpoint package ([#359](https://github.com/coinbase/rest-hooks/issues/359)) ([642bb1a](https://github.com/coinbase/rest-hooks/commit/642bb1a206ce80bae627574f6b1beacf34be3293))
- Add @rest-hooks/rest package ([#375](https://github.com/coinbase/rest-hooks/issues/375)) ([5e5c125](https://github.com/coinbase/rest-hooks/commit/5e5c125d3396ebbb8514aea6fc80b4dfceb0da27))
- Infer return type from schema ([2dccff4](https://github.com/coinbase/rest-hooks/commit/2dccff44042db4b2869e851156d4363fdd9cc764))
- Simple AbortController integration ([#392](https://github.com/coinbase/rest-hooks/issues/392)) ([899563d](https://github.com/coinbase/rest-hooks/commit/899563deccaccc214c3504b91b96e1460ddfab2f))
- Support extra endpoint members and inheritance ([#387](https://github.com/coinbase/rest-hooks/issues/387)) ([6ad5486](https://github.com/coinbase/rest-hooks/commit/6ad5486b6e333d8721b74fd4fb1b7ed783461435))
- Support helper methods ([c3fb075](https://github.com/coinbase/rest-hooks/commit/c3fb075b390e7c8db28d53962563b92b65d7869d))

### 💅 Enhancement

- `endpoint` package only exports definitions ([#473](https://github.com/coinbase/rest-hooks/issues/473)) ([51dcafe](https://github.com/coinbase/rest-hooks/commit/51dcafe98631998a1db1959f2796d7122d96960b))
- EndpointInstance defaults should match everything ([d7067ba](https://github.com/coinbase/rest-hooks/commit/d7067baf68e03c0b389c4349fee18571e9172062))
- Improve endpoint ([#364](https://github.com/coinbase/rest-hooks/issues/364)) ([503dd29](https://github.com/coinbase/rest-hooks/commit/503dd29f7cb89ecf1659d065932eae33f0855e1d))
- Make Endpoint compatible with FetchShape ([caa967c](https://github.com/coinbase/rest-hooks/commit/caa967ceaa0c1288b15711b0c18b132689b94cc1))
- Resource uses endpoint ([#365](https://github.com/coinbase/rest-hooks/issues/365)) ([4472106](https://github.com/coinbase/rest-hooks/commit/4472106afd05ad060399f0cd3a872ed07e3350ec))

### 🐛 Bug Fix

- Ambient files now typechecked, fixed some types there ([#372](https://github.com/coinbase/rest-hooks/issues/372)) ([223d4a4](https://github.com/coinbase/rest-hooks/commit/223d4a478ae4b6ba7d42f9d1c2b9deca5b228c8d))
- Compile types for endpoint ([a1b4195](https://github.com/coinbase/rest-hooks/commit/a1b4195083420356779deada24290b77092a45d0))
- Export Endpoint through core ([8b60dea](https://github.com/coinbase/rest-hooks/commit/8b60dea6c85518bbd32b088440e591614d3a11f0))
- Export type correctly in endpoint ([#401](https://github.com/coinbase/rest-hooks/issues/401)) ([f2b033a](https://github.com/coinbase/rest-hooks/commit/f2b033a7f7fd6614ad0d7a25093948f26c495db4))
- extend() correctly keeps options for FetchShape compat ([bf522a2](https://github.com/coinbase/rest-hooks/commit/bf522a2d138dc6bc700e9e5b7f9c9bc1dfd9e148))
- Infer useFetcher() has no body when not present in fetch ([#385](https://github.com/coinbase/rest-hooks/issues/385)) ([22dd399](https://github.com/coinbase/rest-hooks/commit/22dd3995c519e1990f2388b6365494cec873d04a))
- Only export AbstractInstanceType in type-world ([#396](https://github.com/coinbase/rest-hooks/issues/396)) ([131fa45](https://github.com/coinbase/rest-hooks/commit/131fa45063be8fe3dc861dc3639d38dc430580dc))
- Publish endpoint ambient typescript declarations ([2e982ca](https://github.com/coinbase/rest-hooks/commit/2e982caf484da6f2970506b803d4eb52ce0c558d))
- Remove broken type ([09e8268](https://github.com/coinbase/rest-hooks/commit/09e826841efc9d3cf1b6432ca2977fb0f8f558bd))
- Remove broken type ([316e5a0](https://github.com/coinbase/rest-hooks/commit/316e5a0945d79ad82748a0e100d3a4a5c788e44c))

### 📦 Package

- Use @babel/runtime @ 7.12 ([e631f6a](https://github.com/coinbase/rest-hooks/commit/e631f6a8c435c5ef74b3809c8950a2caceca8763))

### 📝 Documentation

- Add Endpoint to API section ([73428b0](https://github.com/coinbase/rest-hooks/commit/73428b01a5759c8079ca3b0de5aa51e77f2e2dde))
- Add more to readme ([2fc29e5](https://github.com/coinbase/rest-hooks/commit/2fc29e5f94512a1fa9fb4b2777679a7499e360da))
- Fix tags ([987f0ed](https://github.com/coinbase/rest-hooks/commit/987f0ed7d4980c3276bb8c9701f606364dad93d8))

## [0.8.0](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/endpoint@0.7.4...@rest-hooks/endpoint@0.8.0) (2021-01-19)

### ⚠ 💥 BREAKING CHANGES

- Remove `normalize`, `denormalize`; use
  `normalizr` package for those

### 💅 Enhancement

- `endpoint` package only exports definitions ([#473](https://github.com/coinbase/rest-hooks/issues/473)) ([51dcafe](https://github.com/coinbase/rest-hooks/commit/51dcafe98631998a1db1959f2796d7122d96960b))

## <small>0.7.4 (2021-01-14)</small>

**Note:** Version bump only for package @rest-hooks/endpoint

## <small>0.7.3 (2021-01-06)</small>

- pkg: Use @babel/runtime @ 7.12 ([e631f6a](https://github.com/coinbase/rest-hooks/commit/e631f6a))

## <small>0.7.2 (2020-09-08)</small>

- internal: Upgrade build pkgs (#404) ([dc56530](https://github.com/coinbase/rest-hooks/commit/dc56530)), closes [#404](https://github.com/coinbase/rest-hooks/issues/404)
- enhance: EndpointInstance defaults should match everything ([d7067ba](https://github.com/coinbase/rest-hooks/commit/d7067ba))

## <small>0.7.1 (2020-08-13)</small>

- fix: Export type correctly in endpoint (#401) ([f2b033a](https://github.com/coinbase/rest-hooks/commit/f2b033a)), closes [#401](https://github.com/coinbase/rest-hooks/issues/401)

## 0.7.0 (2020-08-12)

- fix: Only export AbstractInstanceType in type-world (#396) ([131fa45](https://github.com/coinbase/rest-hooks/commit/131fa45)), closes [#396](https://github.com/coinbase/rest-hooks/issues/396)
- feat: Simple AbortController integration (#392) ([899563d](https://github.com/coinbase/rest-hooks/commit/899563d)), closes [#392](https://github.com/coinbase/rest-hooks/issues/392)

## <small>0.6.1 (2020-08-09)</small>

- fix: extend() correctly keeps options for FetchShape compat ([bf522a2](https://github.com/coinbase/rest-hooks/commit/bf522a2))

## 0.6.0 (2020-08-08)

- internal: Test using endpoints directly (#389) ([bb0e8fd](https://github.com/coinbase/rest-hooks/commit/bb0e8fd)), closes [#389](https://github.com/coinbase/rest-hooks/issues/389)
- feat: Support extra endpoint members and inheritance (#387) ([6ad5486](https://github.com/coinbase/rest-hooks/commit/6ad5486)), closes [#387](https://github.com/coinbase/rest-hooks/issues/387)

## <small>0.5.3 (2020-08-04)</small>

- fix: Infer useFetcher() has no body when not present in fetch (#385) ([22dd399](https://github.com/coinbase/rest-hooks/commit/22dd399)), closes [#385](https://github.com/coinbase/rest-hooks/issues/385)

## <small>0.5.2 (2020-07-31)</small>

**Note:** Version bump only for package @rest-hooks/endpoint

## <small>0.5.1 (2020-07-27)</small>

**Note:** Version bump only for package @rest-hooks/endpoint

## 0.5.0 (2020-07-27)

- feat: Add @rest-hooks/rest package (#375) ([5e5c125](https://github.com/coinbase/rest-hooks/commit/5e5c125)), closes [#375](https://github.com/coinbase/rest-hooks/issues/375)
- feat: Support helper methods ([c3fb075](https://github.com/coinbase/rest-hooks/commit/c3fb075))

## <small>0.4.3 (2020-07-22)</small>

- fix: Ambient files now typechecked, fixed some types there (#372) ([223d4a4](https://github.com/coinbase/rest-hooks/commit/223d4a4)), closes [#372](https://github.com/coinbase/rest-hooks/issues/372)

## <small>0.4.2 (2020-07-22)</small>

- fix: Remove broken type ([09e8268](https://github.com/coinbase/rest-hooks/commit/09e8268))
- fix: Remove broken type ([316e5a0](https://github.com/coinbase/rest-hooks/commit/316e5a0))

## <small>0.4.1 (2020-07-20)</small>

- fix: Export Endpoint through core ([8b60dea](https://github.com/coinbase/rest-hooks/commit/8b60dea))

## 0.4.0 (2020-07-14)

- enhance: Resource uses endpoint (#365) ([4472106](https://github.com/coinbase/rest-hooks/commit/4472106)), closes [#365](https://github.com/coinbase/rest-hooks/issues/365)

### BREAKING CHANGE

- getFetchOptions() -> getEndpointExtra()

## <small>0.3.2 (2020-07-14)</small>

- fix: Publish endpoint ambient typescript declarations ([2e982ca](https://github.com/coinbase/rest-hooks/commit/2e982ca))

## <small>0.3.1 (2020-07-13)</small>

- docs: Add Endpoint to API section ([73428b0](https://github.com/coinbase/rest-hooks/commit/73428b0))
- enhance: Improve endpoint (#364) ([503dd29](https://github.com/coinbase/rest-hooks/commit/503dd29)), closes [#364](https://github.com/coinbase/rest-hooks/issues/364)
- enhance: Make Endpoint compatible with FetchShape ([caa967c](https://github.com/coinbase/rest-hooks/commit/caa967c))

## 0.3.0 (2020-07-13)

- feat: Infer return type from schema ([2dccff4](https://github.com/coinbase/rest-hooks/commit/2dccff4))
- docs: Add more to readme ([2fc29e5](https://github.com/coinbase/rest-hooks/commit/2fc29e5))
- docs: Fix tags ([987f0ed](https://github.com/coinbase/rest-hooks/commit/987f0ed))

## 0.2.0 (2020-07-12)

- fix: Compile types for endpoint ([a1b4195](https://github.com/coinbase/rest-hooks/commit/a1b4195))
- internal: Move readme to top level endpoint folder ([36f6194](https://github.com/coinbase/rest-hooks/commit/36f6194))
- feat: Add @rest-hooks/endpoint package (#359) ([642bb1a](https://github.com/coinbase/rest-hooks/commit/642bb1a)), closes [#359](https://github.com/coinbase/rest-hooks/issues/359)
