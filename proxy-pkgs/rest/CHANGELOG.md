# Change Log

## 7.4.1

### Patch Changes

- 4317adb94c: Collection based pagination now replaces the non-list members on page

  This allows members like nextPage or 'cursor' to be updated when
  each page is fetched making it easier to know which page to fetch next.

- a097d25e7a: controller.fetchIfStale() resolves to data from store if it does not fetch
- Updated dependencies [4317adb94c]
  - @data-client/rest@0.7.1

## 7.4.0

### Minor Changes

- c8c5575e5a: Add 'paginationField' parameter to [RestEndpoint](https://dataclient.io/rest/api/RestEndpoint#paginationfield) and [createResource](https://dataclient.io/rest/api/createResource#paginationfield)

  This adds a '[getPage](https://dataclient.io/rest/api/RestEndpoint#getPage)' member; similar to getList.push/unshift but for [pagination](https://dataclient.io/rest/guides/pagination).

  ```ts
  const TodoResource = createResource({
    path: '/todos/:id',
    schema: Todo,
    paginationField: 'page',
  }).getList.getPage({ page: '2' });
  ```

### Patch Changes

- c8c5575e5a: Fix case where sometimes paginating would not update a collection

  This was due to the comparison not using string serialization (canonical form for collection comparisons)

- c8c5575e5a: Ignore 'undefined' parameters in collection matching
- Updated dependencies [c8c5575e5a]
- Updated dependencies [c8c5575e5a]
- Updated dependencies [c8c5575e5a]
  - @data-client/rest@0.7.0

## 7.3.0

### Minor Changes

- af8b76079f: Support FormData in Resource updates and creates

### Patch Changes

- Updated dependencies [af8b76079f]
  - @data-client/rest@0.6.0

## 7.2.0

### Minor Changes

- 51b4b0d188: Deprecate Resource.create
- 51b4b0d188: Add Resource.extend()

  This is polymorphic, and has three forms

  Set any field based on arguments:

  ```ts
  Resource.extend('fieldName', { path: 'mypath/:id' });
  ```

  Override any of the provided endpoints with options:

  ```ts
  Resource.extend({
    getList: {
      path: 'mypath/:id',
    },
    update: {
      body: {} as Other,
    },
  });
  ```

  Function to compute derived endpoints:

  ```ts
  Resource.extend(base => ({
    getByComment: base.getList.extend({
      path: 'repos/:owner/:repo/issues/comments/:comment/reactions',
    }),
  }));
  ```

  Idea credits: @Dav3rs

- 51b4b0d188: Remove createResource pagination field in favor of getList.paginated

### Patch Changes

- 51b4b0d188: Fix endpoint.push/unshift/assign method type
- Updated dependencies [51b4b0d188]
- Updated dependencies [51b4b0d188]
- Updated dependencies [51b4b0d188]
- Updated dependencies [51b4b0d188]
  - @data-client/rest@0.5.0

## 7.1.2

### Patch Changes

- 8a71700644: fix: Support Collections with boolean parameters
- Updated dependencies [8a71700644]
- Updated dependencies [8a71700644]
- Updated dependencies [8a71700644]
  - @data-client/rest@0.4.0

## 7.1.1

### Patch Changes

- 8af1b5a8ef: Detect unusable pk when pk is serialized
- Updated dependencies [7b835f113a]
- Updated dependencies [8af1b5a8ef]
  - @data-client/rest@0.3.1

## 7.1.0

### Minor Changes

- ab9c805a6c: Add createResource() paginationField argument
  When supplied, will enable Resource.getNextPage

### Patch Changes

- 1efd401bef: fix(types): RestEndpoint.push/unshift/assign return type is no longer nested Promises
- 12c2596453: fix: Ensure Entit.key can be set in v8 browsers
- 1efd401bef: enhance: createResource() throws with path not containing any :path
- Updated dependencies [1efd401bef]
- Updated dependencies [12c2596453]
- Updated dependencies [ab9c805a6c]
- Updated dependencies [1efd401bef]
  - @data-client/rest@0.3.0

## 7.0.0

### Major Changes

- bf141cb5a5: Removed deprecated Endpoint.optimisticUpdate -> use Endpoint.getOptimisticResponse
- 9788090c55: RestEndpoint's getRequestInit and getHeaders optionally return a promise
- 9788090c55: GetEndpoint and MutateEndpoint parameters changed to what NewXEndpoint was.
- 9788090c55: createResource() generics changed to O extends ResourceGenerics
  This allows customizing the Resource type with body and searchParams
- 9788090c55: createResource().getList uses a Collection, which .create appends to
  Remove any Endpoint.update as it is not necessary and will not work
- 011cc20732: Remove FetchShape compatibility.
  This removes support for the legacy hooks in 'rest-hooks' like useResource()

### Patch Changes

- 9788090c55: Fix Collection creates (like push, unshift) normalizing when no collections are in store
- 9788090c55: Fix Collections handling single item with Union schema
- Updated dependencies [bf141cb5a5]
- Updated dependencies [9788090c55]
- Updated dependencies [9788090c55]
- Updated dependencies [9788090c55]
- Updated dependencies [9788090c55]
- Updated dependencies [9788090c55]
- Updated dependencies [9788090c55]
- Updated dependencies [011cc20732]
  - @data-client/rest@0.2.0

## 6.7.2

### Patch Changes

- 1517a5d2c8: Support more symbols in path args by ending name when encountered
- 73a2be1484: Proxy to @data-client

## 6.7.1

### Patch Changes

- 33d55f9bf5: Remove false positive Resource.delete with 200 response type but empty text

## 6.7.0

### Minor Changes

- c8398fb1ca: Add 'optimistic' option to createResource()

### Patch Changes

- 03dda411e7: Non-nested Collections will infer
- ad8cfea1b5: Resource.partialUpdate's body members should always be optional
- acc1fdde9d: Improve type compatibility with TS 5.1 and `undefined` searchParams
- 03dda411e7: Update createCollectionFilter's collectionKey type to reflect values are always strings
- Updated dependencies [82de0b66dd]
- Updated dependencies [03dda411e7]
- Updated dependencies [03dda411e7]
  - @rest-hooks/endpoint@3.8.4

## 6.6.3

### Patch Changes

- b356a8df7e: Improve loose null typing
- 3f3413060a: Collections now have a default argsKey
- 880fce3411: Disallow non-object when all path members are optional
- 880fce3411: Simplify ParamFetch<> type algorithm
- Updated dependencies [3f3413060a]
  - @rest-hooks/endpoint@3.8.3

## 6.6.2

### Patch Changes

- d4aa8bdbdb: fix: Another type exports fix
- Updated dependencies [d4aa8bdbdb]
  - @rest-hooks/endpoint@3.8.2

## 6.6.1

### Patch Changes

- e7aab4063e: fix: TypeScript 'cannot be named without reference' by adding type exports
- e7aab4063e: Collections match schemas on interfaces, rather than realized types
- e7aab4063e: Use Invalidate instead of Delete in /new/createResource (same thing, diff name)
- Updated dependencies [e7aab4063e]
- Updated dependencies [e7aab4063e]
- Updated dependencies [c01a884942]
  - @rest-hooks/endpoint@3.8.1

## 6.6.0

### Minor Changes

- 93a08592c6: Added RestEndpoint.paginated('cursor').
  Place the name of the pagination field instead of writing a function
- e00fd0516c: Values() removes deleted members like Array
- 93a08592c6: Add RestEndpoint collections extenders: push/unshift/assign/insert
- 93a08592c6: Support using args[] during normalization/denormalization
- 93a08592c6: Entity.pk() has a fourth argument: args[]
- 93a08592c6: Add next/createResource: Uses Collections and has more options from RestEndpoint
  [Migration PR](https://github.com/data-client/rest-hooks/pull/2606) of examples is a good example of how to migrate
- 7910c901e7: Add INVALID symbol
- 93a08592c6: Add Collections - entities but for Arrays or Values
- e00fd0516c: Add schema.denormalizeOnly optimized path for normalizr 11+
- 7910c901e7: Add schema.Invalidate (new name for Delete)

### Patch Changes

- 67e9eae3ac: Use type widening in RestEndpoint and createResource constructors for non-generics
- 93f103e3af: Values members are skipped if they are falsy
- Updated dependencies [e00fd0516c]
- Updated dependencies [a005bd06af]
- Updated dependencies [93f103e3af]
- Updated dependencies [68a5944091]
- Updated dependencies [93a08592c6]
- Updated dependencies [93a08592c6]
- Updated dependencies [0c7ca6310d]
- Updated dependencies [a005bd06af]
- Updated dependencies [7910c901e7]
- Updated dependencies [93a08592c6]
- Updated dependencies [e00fd0516c]
- Updated dependencies [7910c901e7]
  - @rest-hooks/endpoint@3.8.0

## 6.5.0

### Minor Changes

- 54aad5e028: Type RestEndpoint.update in constructor and .extends

### Patch Changes

- 775352c9ab: Add commonjs export for /next

## 6.4.0

### Minor Changes

- e1d43231f9: Add RestEndpoint in @rest-hooks/rest/next - has async getRequestInit and getHeaders

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

### [6.3.12](https://github.com/data-client/rest-hooks/compare/@rest-hooks/rest@6.3.11...@rest-hooks/rest@6.3.12) (2023-03-21)

### 💅 Enhancement

- Improve legacy TypeScript compatibility ([#2505](https://github.com/data-client/rest-hooks/issues/2505)) ([8bcaf1a](https://github.com/data-client/rest-hooks/commit/8bcaf1a9b7af7769d7984ca1afc4b1ac40adf060))

### [6.3.11](https://github.com/data-client/rest-hooks/compare/@rest-hooks/rest@6.3.10...@rest-hooks/rest@6.3.11) (2023-03-19)

### 💅 Enhancement

- Improve types with null checks off ([#2502](https://github.com/data-client/rest-hooks/issues/2502)) ([8bb970f](https://github.com/data-client/rest-hooks/commit/8bb970f0362b98acd46fb75ab6dd1dfa071121e2))

### 🐛 Bug Fix

- Legacy type compatibility ([02870c0](https://github.com/data-client/rest-hooks/commit/02870c0054b6b7ad3b09c1ec42574a267df02492))

### [6.3.10](https://github.com/data-client/rest-hooks/compare/@rest-hooks/rest@6.3.9...@rest-hooks/rest@6.3.10) (2023-03-15)

### 📦 Package

- Update babel packages ([#2487](https://github.com/data-client/rest-hooks/issues/2487)) ([3fc9efc](https://github.com/data-client/rest-hooks/commit/3fc9efc0bfc818ae7b4a1113cf6f7daa8bbcba8c))

### [6.3.9](https://github.com/data-client/rest-hooks/compare/@rest-hooks/rest@6.3.8...@rest-hooks/rest@6.3.9) (2023-03-12)

**Note:** Version bump only for package @rest-hooks/rest

### [6.3.8](https://github.com/data-client/rest-hooks/compare/@rest-hooks/rest@6.3.6...@rest-hooks/rest@6.3.8) (2023-03-02)

### 🚀 Features

- Add Entity lifecycle overrides to mixin options ([#2468](https://github.com/data-client/rest-hooks/issues/2468)) ([24e8ec6](https://github.com/data-client/rest-hooks/commit/24e8ec6a5bac201f673d85a6ab9836a2c11502f6))

### 📦 Package

- Update babel packages ([#2457](https://github.com/data-client/rest-hooks/issues/2457)) ([45c4a0a](https://github.com/data-client/rest-hooks/commit/45c4a0ab4ebd6112db75e8c6f09e5ad1add74c8b))

### [6.3.7](https://github.com/data-client/rest-hooks/compare/@rest-hooks/rest@6.3.5...@rest-hooks/rest@6.3.6) (2023-02-21)

### 💅 Enhancement

- Use null-object over Object.hasOwn when possible ([#2441](https://github.com/data-client/rest-hooks/issues/2441)) ([28f3fe8](https://github.com/data-client/rest-hooks/commit/28f3fe8890da119c7fa6498d4617a66da74ed0b4))

### [6.3.5](https://github.com/data-client/rest-hooks/compare/@rest-hooks/rest@6.3.4...@rest-hooks/rest@6.3.5) (2023-02-14)

### 💅 Enhancement

- Default RestEndpoint name based on url path ([#2436](https://github.com/data-client/rest-hooks/issues/2436)) ([13e2d4d](https://github.com/data-client/rest-hooks/commit/13e2d4de1b6eaae9fe2fbaca62eb6c6480990815))

### [6.3.4](https://github.com/data-client/rest-hooks/compare/@rest-hooks/rest@6.3.3...@rest-hooks/rest@6.3.4) (2023-02-11)

**Note:** Version bump only for package @rest-hooks/rest

### [6.3.3](https://github.com/data-client/rest-hooks/compare/@rest-hooks/rest@6.3.2...@rest-hooks/rest@6.3.3) (2023-01-30)

### 🐛 Bug Fix

- Typing when using .extend({body}) with no path ([#2397](https://github.com/data-client/rest-hooks/issues/2397)) ([411013a](https://github.com/data-client/rest-hooks/commit/411013ac44bf30054ebf59c692ff8dfa7eccc9b3))

### 📝 Documentation

- Update github organization to data-client ([#2396](https://github.com/data-client/rest-hooks/issues/2396)) ([45faab1](https://github.com/data-client/rest-hooks/commit/45faab1962cad292d1f77a0a997e8c321a6917db))

### [6.3.2](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/rest@6.3.1...@rest-hooks/rest@6.3.2) (2023-01-29)

### 💅 Enhancement

- Improve .extends() type edge cases ([4c347bf](https://github.com/coinbase/rest-hooks/commit/4c347bfdcb5c355b109e261fcea64b405b62584f))

### [6.3.1](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/rest@6.3.0...@rest-hooks/rest@6.3.1) (2023-01-29)

### 💅 Enhancement

- Improve strictNullChecks: false compatibility ([#2386](https://github.com/coinbase/rest-hooks/issues/2386)) ([1cfb5a5](https://github.com/coinbase/rest-hooks/commit/1cfb5a53564719952ee30b1b3160cd32f6bd2603))

### 🐛 Bug Fix

- Improve resource endpoint .extend() works with searchParams ([#2386](https://github.com/coinbase/rest-hooks/issues/2386)) ([e33e155](https://github.com/coinbase/rest-hooks/commit/e33e15580c309a3453ba57afec006e496f64c23b))

### 📝 Documentation

- Add Interceptor to testing docs ([80ebf4d](https://github.com/coinbase/rest-hooks/commit/80ebf4d1e6678bba588eab444d919232b42995e8))

## [6.3.0](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/rest@6.2.6...@rest-hooks/rest@6.3.0) (2023-01-23)

### 🚀 Features

- Add RestEndpoint.testKey() ([#2380](https://github.com/coinbase/rest-hooks/issues/2380)) ([c84c08f](https://github.com/coinbase/rest-hooks/commit/c84c08f4a135d87ed1aaedf36f7ab689154cba50))
- makeRenderRestHook(CacheProvider) and React 18 testing ([#2328](https://github.com/coinbase/rest-hooks/issues/2328)) ([0e9e51e](https://github.com/coinbase/rest-hooks/commit/0e9e51e3bce3c9c978888a734c43be8d1fe3ae55))
- More fleixble types for hookableResource ([6d388af](https://github.com/coinbase/rest-hooks/commit/6d388afcb178a3d139c807e8b3163bcea371f86c))

### 💅 Enhancement

- Remove deprecated string.substr() calls ([de3ed4f](https://github.com/coinbase/rest-hooks/commit/de3ed4f6db938aece3e3926e35de5a1c51a195c5))

### [6.2.7](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/rest@6.2.6...@rest-hooks/rest@6.2.7) (2023-01-23)

### 🚀 Features

- makeRenderRestHook(CacheProvider) and React 18 testing ([#2328](https://github.com/coinbase/rest-hooks/issues/2328)) ([0e9e51e](https://github.com/coinbase/rest-hooks/commit/0e9e51e3bce3c9c978888a734c43be8d1fe3ae55))
- More fleixble types for hookableResource ([6d388af](https://github.com/coinbase/rest-hooks/commit/6d388afcb178a3d139c807e8b3163bcea371f86c))

### 💅 Enhancement

- Remove deprecated string.substr() calls ([3c4a724](https://github.com/coinbase/rest-hooks/commit/3c4a72442f53d76bc67cc612f7e8fbc14686fb4c))

### [6.2.6](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/rest@6.2.5...@rest-hooks/rest@6.2.6) (2023-01-14)

**Note:** Version bump only for package @rest-hooks/rest

### [6.2.5](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/rest@6.2.4...@rest-hooks/rest@6.2.5) (2023-01-12)

### 🐛 Bug Fix

- body type specified in RestEndpoint constructor ([#2355](https://github.com/coinbase/rest-hooks/issues/2355)) ([3caabee](https://github.com/coinbase/rest-hooks/commit/3caabeee0b573d1352bb218662e384c0d35344b6))
- paginated() should replace all results to ensure updated cursor ([#2354](https://github.com/coinbase/rest-hooks/issues/2354)) ([95c9653](https://github.com/coinbase/rest-hooks/commit/95c96537a2eab29bec572b10bd1a243407fc6296))

### 📦 Package

- Update babel packages ([#2348](https://github.com/coinbase/rest-hooks/issues/2348)) ([5d0a68e](https://github.com/coinbase/rest-hooks/commit/5d0a68ea00b021effeae185fcdea415cf50c0328))

### [6.2.4](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/rest@6.2.3...@rest-hooks/rest@6.2.4) (2022-12-23)

### 📦 Package

- Update babel packages ([#2339](https://github.com/coinbase/rest-hooks/issues/2339)) ([2cc99b9](https://github.com/coinbase/rest-hooks/commit/2cc99b99aeece58b0e7674ca80d3372555612c63))

### 📝 Documentation

- Add 7, 7.1 blog; new intro ([#2326](https://github.com/coinbase/rest-hooks/issues/2326)) ([b76c134](https://github.com/coinbase/rest-hooks/commit/b76c134cd8d0675c0eef7413ba3fddb6262443cb))
- Updates to the docs ([#2335](https://github.com/coinbase/rest-hooks/issues/2335)) ([73c8d9f](https://github.com/coinbase/rest-hooks/commit/73c8d9f4b403412cd766955305461aa7d8ebb462))
- Yet another docs change pr ([#2338](https://github.com/coinbase/rest-hooks/issues/2338)) ([52c2f83](https://github.com/coinbase/rest-hooks/commit/52c2f83d20106f8557ef8538a348c4bbac77dd53))

### [6.2.3](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/rest@6.2.2...@rest-hooks/rest@6.2.3) (2022-12-06)

### 💅 Enhancement

- Allow extend({searchParams}) without path arg ([#2320](https://github.com/coinbase/rest-hooks/issues/2320)) ([2c8ff55](https://github.com/coinbase/rest-hooks/commit/2c8ff556e317483beadc7cc4eb4339edd5a6ec7e))
- Reduce bundlesize via custom Object.hasOwn polyfill ([#2322](https://github.com/coinbase/rest-hooks/issues/2322)) ([1f8009d](https://github.com/coinbase/rest-hooks/commit/1f8009d9849cfb784f072a1078b4d12b37d59a04))

### [6.2.2](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/rest@6.2.1...@rest-hooks/rest@6.2.2) (2022-12-05)

### 💅 Enhancement

- Detect html bad responses ([#2311](https://github.com/coinbase/rest-hooks/issues/2311)) ([674001b](https://github.com/coinbase/rest-hooks/commit/674001bb697017c925d9f138744e94826fa1c519))
- Include Object.hasOwn polyfill ([#2309](https://github.com/coinbase/rest-hooks/issues/2309)) ([14b93f6](https://github.com/coinbase/rest-hooks/commit/14b93f67f0589df5813909e0c1acd4cacad0a3ee))

### 🐛 Bug Fix

- Network down/ CORS errors should be 'soft' by default ([#2302](https://github.com/coinbase/rest-hooks/issues/2302)) ([2545ce8](https://github.com/coinbase/rest-hooks/commit/2545ce8164e69905773738d7da0e170b3810a48e))

### 📦 Package

- Update babel packages ([#2308](https://github.com/coinbase/rest-hooks/issues/2308)) ([e3ee5ee](https://github.com/coinbase/rest-hooks/commit/e3ee5ee57431971ba4bdb47b48ed89933412374c))

### [6.2.1](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/rest@6.2.0-beta.0...@rest-hooks/rest@6.2.1) (2022-11-22)

**Note:** Version bump only for package @rest-hooks/rest

## [6.2.0](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/rest@6.1.1...@rest-hooks/rest@6.2.0) (2022-11-13)

### 🚀 Features

- Add packages react and redux ([#2270](https://github.com/coinbase/rest-hooks/issues/2270)) ([6e28f5f](https://github.com/coinbase/rest-hooks/commit/6e28f5f465b6f4f5d444b56234f212863aeade31))

### [6.1.1](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/rest@6.1.0...@rest-hooks/rest@6.1.1) (2022-11-09)

### 💅 Enhancement

- Add searchParams arg for RestEndpoint typing ([#2266](https://github.com/coinbase/rest-hooks/issues/2266)) ([828e425](https://github.com/coinbase/rest-hooks/commit/828e425374ca1cb2d6e18fe0014397e2aa34dd1e))

### 📝 Documentation

- Cut 6.5 of docs ([#2259](https://github.com/coinbase/rest-hooks/issues/2259)) ([777695b](https://github.com/coinbase/rest-hooks/commit/777695b474ddd63710cf720caa4a079929f0537a))

## [6.1.0](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/rest@6.0.2...@rest-hooks/rest@6.1.0) (2022-11-06)

### 🚀 Features

- Exporting schema.All and Query ([e710e61](https://github.com/coinbase/rest-hooks/commit/e710e619adf23e23d83350df47e9e08eb43307dc))

### 💅 Enhancement

- Get rid of extraneous type BaseResource ([#2251](https://github.com/coinbase/rest-hooks/issues/2251)) ([fa5b457](https://github.com/coinbase/rest-hooks/commit/fa5b4573240d7d77d74aa824cdd2cfc05040078f))

### 📦 Package

- Update babel packages ([#2255](https://github.com/coinbase/rest-hooks/issues/2255)) ([4d739a9](https://github.com/coinbase/rest-hooks/commit/4d739a9dbe2d9796f21e24ebb2022e10575bd0c4))

### 📝 Documentation

- More random docs updates ([#2245](https://github.com/coinbase/rest-hooks/issues/2245)) ([361082a](https://github.com/coinbase/rest-hooks/commit/361082a3f6994f365712a4beb15f642ac24bc7ee))

### [6.0.2](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/rest@6.0.1...@rest-hooks/rest@6.0.2) (2022-10-28)

### 📦 Package

- Update babel packages ([#2227](https://github.com/coinbase/rest-hooks/issues/2227)) ([4e652a1](https://github.com/coinbase/rest-hooks/commit/4e652a13552cbf467ca140738f9603aba06cffee))

### 📝 Documentation

- Add summary list guide ([#2218](https://github.com/coinbase/rest-hooks/issues/2218)) ([ed0af27](https://github.com/coinbase/rest-hooks/commit/ed0af27d839097c5297087b2b765de8dcbeea113))
- Show typing information in live editor ([#2236](https://github.com/coinbase/rest-hooks/issues/2236)) ([20fb530](https://github.com/coinbase/rest-hooks/commit/20fb530f8091831b23556c98f6c88068e3879035))
- Update readmes ([e2c6438](https://github.com/coinbase/rest-hooks/commit/e2c64382312c7dcca11662789477c3a6929640be))

### [6.0.1](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/rest@6.0.0...@rest-hooks/rest@6.0.1) (2022-10-14)

### 💅 Enhancement

- Allow body-only RestEndpoint.extend() ([#2216](https://github.com/coinbase/rest-hooks/issues/2216)) ([658e5da](https://github.com/coinbase/rest-hooks/commit/658e5da7a6d67374f77d7513e4f1baa1b25aeecd))
- Use process() option to infer return type of RestEndpoint ([#2197](https://github.com/coinbase/rest-hooks/issues/2197)) ([37f635b](https://github.com/coinbase/rest-hooks/commit/37f635bc1371840419917e34cf85097898d7d8b4))

### 📝 Documentation

- Fix mobile usability SEO ([#2206](https://github.com/coinbase/rest-hooks/issues/2206)) ([c7eb5e9](https://github.com/coinbase/rest-hooks/commit/c7eb5e9e51b3fa42e996b27c6d42ba317028f292))
- Website updates for google ([#2212](https://github.com/coinbase/rest-hooks/issues/2212)) ([ef21019](https://github.com/coinbase/rest-hooks/commit/ef21019e54f7c14713e198c0b1c9a9b5a7005ff2))

## [6.0.0](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/rest@5.2.0...@rest-hooks/rest@6.0.0) (2022-10-01)

### ⚠ 💥 BREAKING CHANGES

- Removed BaseResource, Resource, HookableResource

### 🚀 Features

- RestEndpoint, createResource, hookifyResource ([#2187](https://github.com/coinbase/rest-hooks/issues/2187)) ([b48314b](https://github.com/coinbase/rest-hooks/commit/b48314bfe56f162ca4094d6e436b1ac1c4a9d477))

### 📦 Package

- Update all non-major dependencies ([#2190](https://github.com/coinbase/rest-hooks/issues/2190)) ([c2c7403](https://github.com/coinbase/rest-hooks/commit/c2c74033ecf2004ddebaf064af64f37894f20dec))
- Update babel packages ([#2192](https://github.com/coinbase/rest-hooks/issues/2192)) ([7c9d3bc](https://github.com/coinbase/rest-hooks/commit/7c9d3bc8ea3019490a1f9e1978c3709b346d582d))

### 📝 Documentation

- Add react-native related keywords ([fe66dcd](https://github.com/coinbase/rest-hooks/commit/fe66dcdcf3948e6d2142004d0f6b0d043f9b4fb4))

## [5.2.0](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/rest@5.1.1...@rest-hooks/rest@5.2.0) (2022-09-19)

### 🚀 Features

- Move schema implementations to @rest-hooks/endpoint ([#2159](https://github.com/coinbase/rest-hooks/issues/2159)) ([a4be8c0](https://github.com/coinbase/rest-hooks/commit/a4be8c08ea515a27254ea480da2baffa1534b09d))

### 💅 Enhancement

- Object.prototype.hasOwnProperty -> Object.hasOwn ([bdbc6a4](https://github.com/coinbase/rest-hooks/commit/bdbc6a49350cae24a9d8cda0d4e360ce20cb91cd))

### 🐛 Bug Fix

- React native to use es6 modules ([#2180](https://github.com/coinbase/rest-hooks/issues/2180)) ([31524ea](https://github.com/coinbase/rest-hooks/commit/31524ea2cbe6ab4bf4cfe77659ac5e69b0319763))

### 📦 Package

- Update babel packages ([#2174](https://github.com/coinbase/rest-hooks/issues/2174)) ([dab7ac7](https://github.com/coinbase/rest-hooks/commit/dab7ac798850fc0519ffe5793601757b10d949b2))

## [5.2.0-beta.1](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/rest@5.1.1...@rest-hooks/rest@5.2.0-beta.1) (2022-09-17)

### 🚀 Features

- Move schema implementations to @rest-hooks/endpoint ([#2159](https://github.com/coinbase/rest-hooks/issues/2159)) ([a4be8c0](https://github.com/coinbase/rest-hooks/commit/a4be8c08ea515a27254ea480da2baffa1534b09d))

### 💅 Enhancement

- Object.prototype.hasOwnProperty -> Object.hasOwn ([bdbc6a4](https://github.com/coinbase/rest-hooks/commit/bdbc6a49350cae24a9d8cda0d4e360ce20cb91cd))

### 📦 Package

- Update babel packages ([#2174](https://github.com/coinbase/rest-hooks/issues/2174)) ([dab7ac7](https://github.com/coinbase/rest-hooks/commit/dab7ac798850fc0519ffe5793601757b10d949b2))

## [5.2.0-beta.0](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/rest@5.1.1...@rest-hooks/rest@5.2.0-beta.0) (2022-09-16)

### 🚀 Features

- Move schema implementations to @rest-hooks/endpoint ([#2159](https://github.com/coinbase/rest-hooks/issues/2159)) ([ffaed57](https://github.com/coinbase/rest-hooks/commit/ffaed57a3b397f6eeb69ab3a9fd51366b298b3e5))

### 📦 Package

- Update babel packages ([#2174](https://github.com/coinbase/rest-hooks/issues/2174)) ([dab7ac7](https://github.com/coinbase/rest-hooks/commit/dab7ac798850fc0519ffe5793601757b10d949b2))

### [5.1.1](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/rest@5.0.6...@rest-hooks/rest@5.1.1) (2022-09-10)

### 📦 Package

- Update all non-major dependencies ([#2119](https://github.com/coinbase/rest-hooks/issues/2119)) ([3003348](https://github.com/coinbase/rest-hooks/commit/3003348ba96781085a6f8a6a86a882438ba2b5ea))
- Update all non-major dependencies ([#2136](https://github.com/coinbase/rest-hooks/issues/2136)) ([f7c8649](https://github.com/coinbase/rest-hooks/commit/f7c864998abc68cae1a4130f2de50e055c7a5269))
- Update all non-major dependencies ([#2150](https://github.com/coinbase/rest-hooks/issues/2150)) ([eb480f1](https://github.com/coinbase/rest-hooks/commit/eb480f1f567944208483c9239256e7bcf81351e7))
- Update babel packages ([#2124](https://github.com/coinbase/rest-hooks/issues/2124)) ([bab76ae](https://github.com/coinbase/rest-hooks/commit/bab76ae4ac54474634d3cb323b69ef9be5773a03))
- Update babel packages ([#2140](https://github.com/coinbase/rest-hooks/issues/2140)) ([bc4d12d](https://github.com/coinbase/rest-hooks/commit/bc4d12d5369f4eee17f32d9379793cfc9b679d61))
- Update babel packages ([#2161](https://github.com/coinbase/rest-hooks/issues/2161)) ([31b2c8f](https://github.com/coinbase/rest-hooks/commit/31b2c8ff3d9f9001c31f3f5c15bec1321a15361d))
- Update JS test packages to v29 (major) ([#2141](https://github.com/coinbase/rest-hooks/issues/2141)) ([70759cf](https://github.com/coinbase/rest-hooks/commit/70759cfc8a2de9d42a060727d9f91fe4e6945296))

### [5.1.0](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/rest@5.0.6...@rest-hooks/rest@5.1.0) (2022-09-04)

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

### [5.0.6](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/rest@5.0.5...@rest-hooks/rest@5.0.6) (2022-07-26)

### 📦 Package

- Update all non-major dependencies ([#2113](https://github.com/coinbase/rest-hooks/issues/2113)) ([f9b7a6e](https://github.com/coinbase/rest-hooks/commit/f9b7a6e5b19a0d6f26208af517451affa161b070))

### [5.0.5](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/rest@5.0.4...@rest-hooks/rest@5.0.5) (2022-07-23)

### 🐛 Bug Fix

- Ensure dual package hazard solved for non-node ([#2099](https://github.com/coinbase/rest-hooks/issues/2099)) ([6206e64](https://github.com/coinbase/rest-hooks/commit/6206e6463a7c3699d5c1d1b248e4d5418b1327f1))

### [5.0.4](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/rest@5.0.2...@rest-hooks/rest@5.0.4) (2022-07-20)

### 🐛 Bug Fix

- Fix package exports support for latest resolve pkg ([#2062](https://github.com/coinbase/rest-hooks/issues/2062)) ([0088494](https://github.com/coinbase/rest-hooks/commit/0088494e5cab91da7becebe7d9b62796fb9f4f2e))

### [5.0.2](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/rest@5.0.1...@rest-hooks/rest@5.0.2) (2022-05-30)

### 📦 Package

- Use @babel/runtime@^7.13.0 to use CJS/ESM exports support ([#2019](https://github.com/coinbase/rest-hooks/issues/2019)) ([78a22f2](https://github.com/coinbase/rest-hooks/commit/78a22f29f86527ac10eb2c9b031984e044226dce))

### [5.0.1](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/rest@5.0.0...@rest-hooks/rest@5.0.1) (2022-04-30)

### 📝 Documentation

- Update README with newest practices ([#1920](https://github.com/coinbase/rest-hooks/issues/1920)) ([9bbd76c](https://github.com/coinbase/rest-hooks/commit/9bbd76c4fb20125d6318bd8ac5cc4238be4ab3d5))

## [5.0.0](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/rest@4.0.0...@rest-hooks/rest@5.0.0) (2022-04-10)

### ⚠ 💥 BREAKING CHANGES

- fetch(Resource.create(), {}, body) -> fetch(Resource.create(), body)
- Removed Resource.useFetchInit(). Use HookableResource
  instead

### 🚀 Features

- HookableResource - endpoints as hooks ([#1891](https://github.com/coinbase/rest-hooks/issues/1891)) ([dcd9fbb](https://github.com/coinbase/rest-hooks/commit/dcd9fbb4f4ce5583503187317ea0e065f5d31f1a))
- Resource.create() can take 1-2 args ([ed4f55c](https://github.com/coinbase/rest-hooks/commit/ed4f55c8b4b80eb93f3c01108c2177b97f5dc4e8))
- Simplify Resource.create() & Resource.list() arguments ([153f8fa](https://github.com/coinbase/rest-hooks/commit/153f8fac3ff64a3b9fc3df31c7ce31ad8193633a))

## [4.0.0](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/rest@3.0.3...@rest-hooks/rest@4.0.0) (2022-04-08)

### ⚠ 💥 BREAKING CHANGES

- - Removed EntityRecord

* Removed SimpleResource
* New BaseResource
* RestFetch, FetchMutate, FetchGet first arg is entire args instead of
  just params

fix: imports

### 🚀 Features

- Improved Resource ([7d7c79c](https://github.com/coinbase/rest-hooks/commit/7d7c79cb062d564b6b591629c4e836eb00024d48))

### [3.0.3](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/rest@3.0.2...@rest-hooks/rest@3.0.3) (2022-02-26)

### 🐛 Bug Fix

- Resource.url properties are enumerable when provided ([#1737](https://github.com/coinbase/rest-hooks/issues/1737)) ([500ab87](https://github.com/coinbase/rest-hooks/commit/500ab87ebc49d5d573c6ed5a79f6e9501537fa70))

### [3.0.2](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/rest@3.0.1...@rest-hooks/rest@3.0.2) (2022-02-15)

### 🐛 Bug Fix

- Only import from explicit dependencies ([#1705](https://github.com/coinbase/rest-hooks/issues/1705)) ([b7c2eeb](https://github.com/coinbase/rest-hooks/commit/b7c2eeb38c41be0181e84bf0efbc3502bc85c75c))

### [3.0.1](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/rest@3.0.0...@rest-hooks/rest@3.0.1) (2021-10-11)

### 📝 Documentation

- Only validate circleCI badge against master ([#1322](https://github.com/coinbase/rest-hooks/issues/1322)) ([04e9642](https://github.com/coinbase/rest-hooks/commit/04e96426a865cbef362947da3a8f74f7347859e9))

## [3.0.0](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/rest@3.0.0-beta.2...@rest-hooks/rest@3.0.0) (2021-09-08)

**Note:** Version bump only for package @rest-hooks/rest

## [3.0.0-beta.2](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/rest@3.0.0-beta.1...@rest-hooks/rest@3.0.0-beta.2) (2021-09-06)

### 💅 Enhancement

- Give errors a name ([#1195](https://github.com/coinbase/rest-hooks/issues/1195)) ([caa1cd4](https://github.com/coinbase/rest-hooks/commit/caa1cd4c365eedc0e6bc8df6b00b9bfdf6492c63))
- Improve NetworkError debuggability ([#1172](https://github.com/coinbase/rest-hooks/issues/1172)) ([9fb64bb](https://github.com/coinbase/rest-hooks/commit/9fb64bbf31827c65eaa1e6b0617e46f685d9ea58))

### 📝 Documentation

- Add subscriptions to colocate ([#1175](https://github.com/coinbase/rest-hooks/issues/1175)) ([b311a61](https://github.com/coinbase/rest-hooks/commit/b311a6143d9b9087bae56591e531ff9030d6b704))
- Rework introduction ([#614](https://github.com/coinbase/rest-hooks/issues/614)) ([85bc2a9](https://github.com/coinbase/rest-hooks/commit/85bc2a9a53ec751ca64b18894012167f6fb8e609))

## [3.0.0-beta.1](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/rest@3.0.0-beta.0...@rest-hooks/rest@3.0.0-beta.1) (2021-08-21)

### 🐛 Bug Fix

- useFetchInit() hook calls same amount every render ([#1123](https://github.com/coinbase/rest-hooks/issues/1123)) ([6cd0b7c](https://github.com/coinbase/rest-hooks/commit/6cd0b7cc57de59b5f394942dfa9a3a08d9f2e912))

## [3.0.0-beta.0](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/rest@2.1.4...@rest-hooks/rest@3.0.0-beta.0) (2021-06-30)

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
- Normalize merges entities, entitymeta, indexes ([#915](https://github.com/coinbase/rest-hooks/issues/915)) ([bd21d8c](https://github.com/coinbase/rest-hooks/commit/bd21d8ce0d004a56e6853918d9fb9ecaa2c730a8))
- Use 'exports' package.json member ([#955](https://github.com/coinbase/rest-hooks/issues/955)) ([7e9d39f](https://github.com/coinbase/rest-hooks/commit/7e9d39f15b4b321352ece0caddb93e2c414df8ae))

### 💅 Enhancement

- Different babel targets for cjs and umd builds ([#989](https://github.com/coinbase/rest-hooks/issues/989)) ([f054814](https://github.com/coinbase/rest-hooks/commit/f05481410cf8daa2101d4dbda826e56ad10ec723))
- Entities normalize to POJO ([#940](https://github.com/coinbase/rest-hooks/issues/940)) ([75ebdfe](https://github.com/coinbase/rest-hooks/commit/75ebdfe641ccf57fca35c44a94077e4a314e44d7))
- Remove 'fallback' package.json exports ([#992](https://github.com/coinbase/rest-hooks/issues/992)) ([dc95f9d](https://github.com/coinbase/rest-hooks/commit/dc95f9dbad20d5740218c52c906596b6a3d6eae4))
- SimpleResource is deprecated ([#991](https://github.com/coinbase/rest-hooks/issues/991)) ([cf5c0bf](https://github.com/coinbase/rest-hooks/commit/cf5c0bfb5f732b9dd80945cf670d1ffbf9913942))

### 📝 Documentation

- Add doc links to jsdocs ([#966](https://github.com/coinbase/rest-hooks/issues/966)) ([dc7fcfe](https://github.com/coinbase/rest-hooks/commit/dc7fcfec24c30d5f405d24ccc1828620d837ea6b))

### [2.1.4](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/rest@2.1.3...@rest-hooks/rest@2.1.4) (2021-06-09)

### 💅 Enhancement

- 'module' entrypoint targets 2019 browsers ([#905](https://github.com/coinbase/rest-hooks/issues/905)) ([d988abe](https://github.com/coinbase/rest-hooks/commit/d988abe063fc67c74fce12e234c9c3ffdb7cc230))

### [2.1.3](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/rest@2.1.2...@rest-hooks/rest@2.1.3) (2021-06-02)

### 💅 Enhancement

- Improve autoimport handling in vscode ([#890](https://github.com/coinbase/rest-hooks/issues/890)) ([f8f2bef](https://github.com/coinbase/rest-hooks/commit/f8f2bef411183676009c6a9df24a26d147c6d9f6))

### [2.1.2](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/rest@2.1.1...@rest-hooks/rest@2.1.2) (2021-05-24)

### 💅 Enhancement

- Simplify url logic for Resource ([#806](https://github.com/coinbase/rest-hooks/issues/806)) ([8f1bb8a](https://github.com/coinbase/rest-hooks/commit/8f1bb8a2ea1eec3e24a5f9e7e2d534cd818d05ab))

### [2.1.1](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/rest@2.1.0...@rest-hooks/rest@2.1.1) (2021-04-26)

### 💅 Enhancement

- Flexible url parameters for RestEndpoint ([#776](https://github.com/coinbase/rest-hooks/issues/776)) ([382d3b1](https://github.com/coinbase/rest-hooks/commit/382d3b112ebee0141260b0a41600568a02fda3fb))

## [2.1.0](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/rest@2.0.6...@rest-hooks/rest@2.1.0) (2021-04-24)

### 🚀 Features

- Endpoint parameters can be of any length ([#767](https://github.com/coinbase/rest-hooks/issues/767)) ([552f837](https://github.com/coinbase/rest-hooks/commit/552f83740279376288879a661ff487c5c6f1d469))

### 💅 Enhancement

- Schema assistance for Delete ([#756](https://github.com/coinbase/rest-hooks/issues/756)) ([4dd6a5a](https://github.com/coinbase/rest-hooks/commit/4dd6a5a3f6f0f6bf024731a082dc48afa74cb327))
- Support TypeScript 3.7 ([#752](https://github.com/coinbase/rest-hooks/issues/752)) ([68a10e0](https://github.com/coinbase/rest-hooks/commit/68a10e06dc0718f5e480097e6056a7a7954d1161))

### [2.0.6](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/rest@2.0.5...@rest-hooks/rest@2.0.6) (2021-04-12)

### 🐛 Bug Fix

- Relax DeleteShape def to be back-compat ([#743](https://github.com/coinbase/rest-hooks/issues/743)) ([20aa3a0](https://github.com/coinbase/rest-hooks/commit/20aa3a09bbe4419c23e37b331ca3208349f0e07c))

### [2.0.5](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/rest@2.0.4...@rest-hooks/rest@2.0.5) (2021-04-12)

### 💅 Enhancement

- Refined deleteShape() definition ([#734](https://github.com/coinbase/rest-hooks/issues/734)) ([e34526d](https://github.com/coinbase/rest-hooks/commit/e34526d5dde5a2cc317cd9428ededc6a9893dc41))

### [2.0.4](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/rest@2.0.3...@rest-hooks/rest@2.0.4) (2021-04-04)

### 💅 Enhancement

- Throw error when urlRoot is not defined ([#688](https://github.com/coinbase/rest-hooks/issues/688)) ([038bfcf](https://github.com/coinbase/rest-hooks/commit/038bfcf79963043f1f991b54dc1badfa5d70775c))

### [2.0.3](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/rest@2.0.2...@rest-hooks/rest@2.0.3) (2021-03-26)

### 🐛 Bug Fix

- Compatibility with TypeScript strict: false ([#683](https://github.com/coinbase/rest-hooks/issues/683)) ([8a6e7ed](https://github.com/coinbase/rest-hooks/commit/8a6e7ed4d179555c4ba5cb8957b1c63697a1ce1a))

### [2.0.2](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/rest@2.0.1...@rest-hooks/rest@2.0.2) (2021-03-16)

### 🐛 Bug Fix

- typeof Resource === typeof SimpleResource ([#662](https://github.com/coinbase/rest-hooks/issues/662)) ([4174149](https://github.com/coinbase/rest-hooks/commit/417414947a8a470ee84d3d98ee47646d6ca12798))

### [2.0.1](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/rest@2.0.0...@rest-hooks/rest@2.0.1) (2021-03-14)

### 📝 Documentation

- Update package tags ([#650](https://github.com/coinbase/rest-hooks/issues/650)) ([4ef465a](https://github.com/coinbase/rest-hooks/commit/4ef465a129cd59668cd9c3542bb9ec03c84d2a4d))

## [2.0.0](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/rest@1.0.4...@rest-hooks/rest@2.0.0) (2021-03-08)

### ⚠ 💥 BREAKING CHANGES

- getFetchInit() -> useFetchInit()

* getFetchInit() is called during fetch
* useFetchInit() should be used for hooks

### 🚀 Features

- Add Resource.useFetchInit() ([#635](https://github.com/coinbase/rest-hooks/issues/635)) ([9571870](https://github.com/coinbase/rest-hooks/commit/957187071bc5b654e2f8273b7527f44f27cf0139))

### [1.0.4](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/rest@1.0.3...@rest-hooks/rest@1.0.4) (2021-02-24)

### 💅 Enhancement

- Explicitly defined Resource endpoint return types ([#576](https://github.com/coinbase/rest-hooks/issues/576)) ([bc72fa7](https://github.com/coinbase/rest-hooks/commit/bc72fa76a76f769479e6ae3f2e8515a8a9e2e8d2))

### [1.0.3](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/rest@1.0.2...@rest-hooks/rest@1.0.3) (2021-02-23)

### 🐛 Bug Fix

- Support non-JSON payloads (like FormData) ([#552](https://github.com/coinbase/rest-hooks/issues/552)) ([82e68ac](https://github.com/coinbase/rest-hooks/commit/82e68ac8975fc4fa8ba468fe525662b6cbd627c1))

### 📝 Documentation

- Typos and minor improvements ([#561](https://github.com/coinbase/rest-hooks/issues/561)) ([aed902a](https://github.com/coinbase/rest-hooks/commit/aed902a7ee8a50f7f08fab261efa528a82c52b19))

### [1.0.2](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/rest@1.0.1...@rest-hooks/rest@1.0.2) (2021-02-04)

### 📦 Package

- Relax @babel/runtime requirement to ^7.7.2 ([#513](https://github.com/coinbase/rest-hooks/issues/513)) ([cc95b21](https://github.com/coinbase/rest-hooks/commit/cc95b219fbddebfbf334728887ca6d2fa070fce1))

### 📝 Documentation

- Link improvements, flesh out test readme ([#511](https://github.com/coinbase/rest-hooks/issues/511)) ([9cab431](https://github.com/coinbase/rest-hooks/commit/9cab431803a8b7d9c18e02b3e9cb7e336215ccdb))

### [1.0.1](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/rest@1.0.0...@rest-hooks/rest@1.0.1) (2021-01-30)

### 💅 Enhancement

- Add jsdocs deprecations to deprecated methods ([#487](https://github.com/coinbase/rest-hooks/issues/487)) ([cc7d626](https://github.com/coinbase/rest-hooks/commit/cc7d6269e752335e6502b7ada0da21a881c2afb6))
- Expand matches peerdeps for endpoint ([#504](https://github.com/coinbase/rest-hooks/issues/504)) ([9682b7c](https://github.com/coinbase/rest-hooks/commit/9682b7ce955419fa7e1095c377b45400758fd101))
- Improve malformed entity detection ([#494](https://github.com/coinbase/rest-hooks/issues/494)) ([b8bb07f](https://github.com/coinbase/rest-hooks/commit/b8bb07f480549a97254a4fdf6b00acd9cb89a9eb))

### 🐛 Bug Fix

- Widen Resource.delete() just like other endpoints ([#503](https://github.com/coinbase/rest-hooks/issues/503)) ([2aaa882](https://github.com/coinbase/rest-hooks/commit/2aaa8829487574ca05d71163af44053f52b304d8))

### 📝 Documentation

- Add chat badge ([#501](https://github.com/coinbase/rest-hooks/issues/501)) ([787e250](https://github.com/coinbase/rest-hooks/commit/787e25022f8a8949e5dfb818c63fd1574dbd2787))

## 1.0.0 (2021-01-19)

### ⚠ 💥 BREAKING CHANGES

- Resources will resolve with any nested
  entities from their schemas, rather than the `pk` of those
  entities

### 🚀 Features

- Add @rest-hooks/rest package ([#375](https://github.com/coinbase/rest-hooks/issues/375)) ([5e5c125](https://github.com/coinbase/rest-hooks/commit/5e5c125d3396ebbb8514aea6fc80b4dfceb0da27))
- Add RestEndpoint type ([#427](https://github.com/coinbase/rest-hooks/issues/427)) ([dc47667](https://github.com/coinbase/rest-hooks/commit/dc47667cca768d16f3c11e42af5daf8cfa1c2fcf))
- Re-export normalizr from 'rest' lib ([4362686](https://github.com/coinbase/rest-hooks/commit/436268601a482e2358d873f8aa1a1c1eecc6f652))
- Resources can have nested entities ([#469](https://github.com/coinbase/rest-hooks/issues/469)) ([4eeeaae](https://github.com/coinbase/rest-hooks/commit/4eeeaae1026715be4e72a66cd94d81934f2b0ce7))
- Simple AbortController integration ([#392](https://github.com/coinbase/rest-hooks/issues/392)) ([899563d](https://github.com/coinbase/rest-hooks/commit/899563deccaccc214c3504b91b96e1460ddfab2f))
- Support extra endpoint members and inheritance ([#387](https://github.com/coinbase/rest-hooks/issues/387)) ([6ad5486](https://github.com/coinbase/rest-hooks/commit/6ad5486b6e333d8721b74fd4fb1b7ed783461435))

### 💅 Enhancement

- Keep legacy Resource ([#376](https://github.com/coinbase/rest-hooks/issues/376)) ([fdd1f7c](https://github.com/coinbase/rest-hooks/commit/fdd1f7cd276871d1f92e2a7bd17118a3e6df12e9))
- Memoize Resource endpoints ([#390](https://github.com/coinbase/rest-hooks/issues/390)) ([67bc90f](https://github.com/coinbase/rest-hooks/commit/67bc90f1417bc11f2836574e92618439b6289b22))
- Remove Readonly on Resource endpoint schemas ([#468](https://github.com/coinbase/rest-hooks/issues/468)) ([0b98987](https://github.com/coinbase/rest-hooks/commit/0b989872d2712c92114061b541cdf74f51ed189d))
- Simplify endpoint memoization and provide new extensions ([#391](https://github.com/coinbase/rest-hooks/issues/391)) ([d874d0b](https://github.com/coinbase/rest-hooks/commit/d874d0b3e6433a616d2dbecd8076715f5caefaeb))
- Widen RestFetch types to make overriding not break ([#479](https://github.com/coinbase/rest-hooks/issues/479)) ([2bccf12](https://github.com/coinbase/rest-hooks/commit/2bccf12f7892ccbc1d342bd529b3659c2935fb71))

### 🐛 Bug Fix

- Handle entities updated with new indexes ([#384](https://github.com/coinbase/rest-hooks/issues/384)) ([2ee3bb6](https://github.com/coinbase/rest-hooks/commit/2ee3bb60217bed1f91a6d3d086b354ce151b8e0c))
- Infer useFetcher() has no body when not present in fetch ([#385](https://github.com/coinbase/rest-hooks/issues/385)) ([22dd399](https://github.com/coinbase/rest-hooks/commit/22dd3995c519e1990f2388b6365494cec873d04a))
- Resource endpoint memoization ([744431e](https://github.com/coinbase/rest-hooks/commit/744431ef435dfab1969cd883f01b6a4b50b6c75d))
- TypeScript 4 compatibility ([#406](https://github.com/coinbase/rest-hooks/issues/406)) ([5d82e24](https://github.com/coinbase/rest-hooks/commit/5d82e2416b68992f6efccb63f694010ef1ea28e8))

### 📦 Package

- Rely on latest endpoint ([801f5e7](https://github.com/coinbase/rest-hooks/commit/801f5e7fcdd10bc8526615042a2e40a946222a9c))
- Use @babel/runtime @ 7.12 ([e631f6a](https://github.com/coinbase/rest-hooks/commit/e631f6a8c435c5ef74b3809c8950a2caceca8763))

### 📝 Documentation

- Update nested response docs with behaviors of rest package ([#471](https://github.com/coinbase/rest-hooks/issues/471)) ([04fe9b3](https://github.com/coinbase/rest-hooks/commit/04fe9b390e4e097605a96f268168d8918c4948df))

### [0.6.1](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/rest@0.6.0...@rest-hooks/rest@0.6.1) (2021-01-19)

### 💅 Enhancement

- Widen RestFetch types to make overriding not break ([#479](https://github.com/coinbase/rest-hooks/issues/479)) ([2bccf12](https://github.com/coinbase/rest-hooks/commit/2bccf12f7892ccbc1d342bd529b3659c2935fb71))

### 📝 Documentation

- Update nested response docs with behaviors of rest package ([#471](https://github.com/coinbase/rest-hooks/issues/471)) ([04fe9b3](https://github.com/coinbase/rest-hooks/commit/04fe9b390e4e097605a96f268168d8918c4948df))

## 0.6.0 (2021-01-15)

- feat: Resources can have nested entities (#469) ([4eeeaae](https://github.com/coinbase/rest-hooks/commit/4eeeaae)), closes [#469](https://github.com/coinbase/rest-hooks/issues/469)
- enhance: Remove Readonly on Resource endpoint schemas (#468) ([0b98987](https://github.com/coinbase/rest-hooks/commit/0b98987)), closes [#468](https://github.com/coinbase/rest-hooks/issues/468)

### BREAKING CHANGE

- Resources will resolve with any nested
  entities from their schemas, rather than the `pk` of those
  entities

## <small>0.5.1 (2021-01-06)</small>

- pkg: Use @babel/runtime @ 7.12 ([e631f6a](https://github.com/coinbase/rest-hooks/commit/e631f6a))

## 0.5.0 (2020-12-08)

- feat: Add RestEndpoint type (#427) ([dc47667](https://github.com/coinbase/rest-hooks/commit/dc47667)), closes [#427](https://github.com/coinbase/rest-hooks/issues/427)

## <small>0.4.1 (2020-09-08)</small>

- fix: TypeScript 4 compatibility (#406) ([5d82e24](https://github.com/coinbase/rest-hooks/commit/5d82e24)), closes [#406](https://github.com/coinbase/rest-hooks/issues/406)

## 0.4.0 (2020-08-09)

- feat: Simple AbortController integration (#392) ([899563d](https://github.com/coinbase/rest-hooks/commit/899563d)), closes [#392](https://github.com/coinbase/rest-hooks/issues/392)
- pkg: Rely on latest endpoint ([801f5e7](https://github.com/coinbase/rest-hooks/commit/801f5e7))

## <small>0.3.1 (2020-08-09)</small>

- enhance: Simplify endpoint memoization and provide new extensions (#391) ([d874d0b](https://github.com/coinbase/rest-hooks/commit/d874d0b)), closes [#391](https://github.com/coinbase/rest-hooks/issues/391)
- fix: Resource endpoint memoization ([744431e](https://github.com/coinbase/rest-hooks/commit/744431e))

## 0.3.0 (2020-08-08)

- enhance: Memoize Resource endpoints (#390) ([67bc90f](https://github.com/coinbase/rest-hooks/commit/67bc90f)), closes [#390](https://github.com/coinbase/rest-hooks/issues/390)
- internal: Test using endpoints directly (#389) ([bb0e8fd](https://github.com/coinbase/rest-hooks/commit/bb0e8fd)), closes [#389](https://github.com/coinbase/rest-hooks/issues/389)
- feat: Support extra endpoint members and inheritance (#387) ([6ad5486](https://github.com/coinbase/rest-hooks/commit/6ad5486)), closes [#387](https://github.com/coinbase/rest-hooks/issues/387)

## <small>0.2.1 (2020-08-04)</small>

- fix: Handle entities updated with new indexes (#384) ([2ee3bb6](https://github.com/coinbase/rest-hooks/commit/2ee3bb6)), closes [#384](https://github.com/coinbase/rest-hooks/issues/384)
- fix: Infer useFetcher() has no body when not present in fetch (#385) ([22dd399](https://github.com/coinbase/rest-hooks/commit/22dd399)), closes [#385](https://github.com/coinbase/rest-hooks/issues/385)

## 0.2.0 (2020-07-31)

- feat: Re-export normalizr from 'rest' lib ([4362686](https://github.com/coinbase/rest-hooks/commit/4362686))

## 0.1.0 (2020-07-27)

- enhance: Keep legacy Resource (#376) ([fdd1f7c](https://github.com/coinbase/rest-hooks/commit/fdd1f7c)), closes [#376](https://github.com/coinbase/rest-hooks/issues/376)
- feat: Add @rest-hooks/rest package (#375) ([5e5c125](https://github.com/coinbase/rest-hooks/commit/5e5c125)), closes [#375](https://github.com/coinbase/rest-hooks/issues/375)
