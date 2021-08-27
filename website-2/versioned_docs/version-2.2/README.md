---
---
## 🏁 Getting Started

- [Installation](getting-started/installation.md)
- [Usage](getting-started/usage.md)

## 💬 API

- [Resource](api/Resource.md)
  - [Endpoint](api/Endpoint.md)
- Hooks:
  - [useResource](api/useresource)
  - [useFetcher](api/useFetcher.md)
  - [useCache](api/useCache.md)
  - [useSubscription](api/useSubscription.md)
  - [useRetrieve](api/useRetrieve.md)
- Components:
  - [CacheProvider](api/CacheProvider.md)
  - [ExternalCacheProvider](api/ExternalCacheProvider.md)
  - [NetworkErrorBoundary](api/NetworkErrorBoundary.md)
- [Manager](api/Manager.md)s
  - [NetworkManager](api/NetworkManager.md)
  - [SubscriptionManager](api/SubscriptionManager.md)
    - [PollingSubscription](api/PollingSubscription.md)

## 🎎 Patterns & Examples

- 🔰 Basics
  - [Handling loading state](getting-started/data-dependency#async-fallbacks-loadingerror)
  - [Dealing with network errors](getting-started/data-dependency#async-fallbacks-loadingerror)
  - [Fetching multiple resources at once](guides/fetch-multiple.md)
  - [Pagination](guides/pagination.md)
  - [Understanding Immutability](guides/immutability.md)
  - [Mocking unfinished endpoints](guides/mocking-unfinished.md)
  - [Redux integration](guides/redux.md)
- 🖧 Defining your network interface
  - [Defining your Resource types](guides/resource-types.md)
  - [Computed properties](guides/computed-properties.md)
  - [Multicolumn primary keys](guides/multi-pk.md)
  - [Transforming data on network load](guides/network-transform.md)
  - [Authentication](guides/auth.md)
  - [Cross-orgin requests with JSONP](guides/jsonp.md)
  - [Custom networking library](guides/custom-networking.md)
  - [Custom cache lifetime](guides/resource-lifetime.md)
- 💨 Performance Optimizations (optional)
  - [Nesting related resources (server-side join)](guides/nested-response.md)
  - [Cross-resource multi-update RPC (dealing with side-effects)](guides/rpc.md)
