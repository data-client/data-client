"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[69686],{50905:e=>{e.exports=JSON.parse('{"pluginId":"rest","version":"5.1","label":"5.1","banner":"unmaintained","badge":true,"noIndex":false,"className":"docs-version-5.1","isLast":false,"docsSidebars":{"docs":[{"type":"link","label":"Usage","href":"/rest/5.1/usage","docId":"usage"},{"type":"category","collapsed":false,"label":"Guides","items":[{"type":"link","label":"URL Patterns","href":"/rest/5.1/guides/url","docId":"guides/url"},{"type":"link","label":"Custom endpoints","href":"/rest/5.1/guides/extending-endpoints","docId":"guides/extending-endpoints"},{"type":"link","label":"Typing REST Endpoints","href":"/rest/5.1/guides/rest-types","docId":"guides/rest-types"},{"type":"link","label":"Pagination","href":"/rest/5.1/guides/pagination","docId":"guides/pagination"},{"type":"link","label":"Authentication","href":"/rest/5.1/guides/auth","docId":"guides/auth"},{"type":"link","label":"Transforming data on fetch","href":"/rest/5.1/guides/network-transform","docId":"guides/network-transform"},{"type":"link","label":"Mocking unfinished endpoints","href":"/rest/5.1/guides/mocking-unfinished","docId":"guides/mocking-unfinished"},{"type":"link","label":"Nesting related resources (server-side join)","href":"/rest/5.1/guides/nested-response","docId":"guides/nested-response"},{"type":"link","label":"Capturing Mutation Side-Effects","href":"/rest/5.1/guides/rpc","docId":"guides/rpc"},{"type":"link","label":"Computed Properties","href":"/rest/5.1/guides/computed-properties","docId":"guides/computed-properties"},{"type":"link","label":"Custom networking library","href":"/rest/5.1/guides/custom-networking","docId":"guides/custom-networking"}],"collapsible":true},{"type":"category","collapsed":false,"label":"API","items":[{"type":"link","label":"Resource","href":"/rest/5.1/api/resource","docId":"api/resource"},{"type":"link","label":"BaseResource","href":"/rest/5.1/api/BaseResource","docId":"api/BaseResource"},{"type":"link","label":"HookableResource","href":"/rest/5.1/api/HookableResource","docId":"api/HookableResource"},{"type":"category","label":"@rest-hooks/endpoint","collapsed":false,"items":[{"type":"link","label":"Endpoint","href":"/rest/5.1/api/Endpoint","docId":"api/Endpoint"},{"type":"link","label":"Index","href":"/rest/5.1/api/Index","docId":"api/Index"},{"type":"link","label":"Schema","href":"/rest/5.1/api/schema","docId":"api/schema"},{"type":"link","label":"Entity","href":"/rest/5.1/api/Entity","docId":"api/Entity"},{"type":"link","label":"schema.Object","href":"/rest/5.1/api/Object","docId":"api/Object"},{"type":"link","label":"schema.Array","href":"/rest/5.1/api/Array","docId":"api/Array"},{"type":"link","label":"schema.Union","href":"/rest/5.1/api/Union","docId":"api/Union"},{"type":"link","label":"schema.Values","href":"/rest/5.1/api/Values","docId":"api/Values"},{"type":"link","label":"schema.Delete","href":"/rest/5.1/api/Delete","docId":"api/Delete"},{"type":"link","label":"validateRequired","href":"/rest/5.1/api/validateRequired","docId":"api/validateRequired"},{"type":"link","label":"SimpleRecord","href":"/rest/5.1/api/SimpleRecord","docId":"api/SimpleRecord"}],"collapsible":true}],"collapsible":true}]},"docs":{"api/Array":{"id":"api/Array","title":"schema.Array","description":"schema.Array - Representing Arrays | Rest Hooks","sidebar":"docs"},"api/BaseResource":{"id":"api/BaseResource","title":"BaseResource","description":"BaseResource is an Entity with multiple Endpoints that operate on the data. All additional members are provided to make CRUD or other REST-like API definitions easy and terse.","sidebar":"docs"},"api/Delete":{"id":"api/Delete","title":"schema.Delete","description":"schema.Delete - Invalidating Entities | Rest Hooks","sidebar":"docs"},"api/Endpoint":{"id":"api/Endpoint","title":"Endpoint","description":"Endpoint defines a standard interface that describes the nature of an networking endpoint.","sidebar":"docs"},"api/Entity":{"id":"api/Entity","title":"Entity","description":"Entity - Declarative Data Normalization | Rest Hooks","sidebar":"docs"},"api/HookableResource":{"id":"api/HookableResource","title":"HookableResource","description":"HookableResource is just like Resource but its endpoints are hooks.","sidebar":"docs"},"api/Index":{"id":"api/Index","title":"Index","description":"","sidebar":"docs"},"api/Object":{"id":"api/Object","title":"schema.Object","description":"schema.Values - Representing Objects with known keys | Rest Hooks","sidebar":"docs"},"api/resource":{"id":"api/resource","title":"Resource","description":"Resource is an Entity with multiple Endpoints that operate on the data. All additional members are provided to make CRUD or other REST-like API definitions easy and terse.","sidebar":"docs"},"api/schema":{"id":"api/schema","title":"Schema Quick Start","description":"Consider a typical blog post. The API response for a single post might look something like this:","sidebar":"docs"},"api/SimpleRecord":{"id":"api/SimpleRecord","title":"SimpleRecord","description":"Use schema.Object instead.","sidebar":"docs"},"api/Union":{"id":"api/Union","title":"schema.Union","description":"schema.Union - Representing a Union of possible types | Rest Hooks","sidebar":"docs"},"api/validateRequired":{"id":"api/validateRequired","title":"validateRequired","description":"Returns a string message if any keys of requiredDefaults are missing in processedEntity. This","sidebar":"docs"},"api/Values":{"id":"api/Values","title":"schema.Values","description":"schema.Values - Representing Objects with arbitrary keys | Rest Hooks","sidebar":"docs"},"guides/auth":{"id":"guides/auth","title":"Resource Authentication","description":"All network requests are run through the static getFetchInit optionally","sidebar":"docs"},"guides/computed-properties":{"id":"guides/computed-properties","title":"Computed Properties","description":"Resource classes are just normal classes, so any common derived data can just be added as","sidebar":"docs"},"guides/custom-networking":{"id":"guides/custom-networking","title":"Using a custom networking library","description":"Resource.fetch() wraps the standard fetch.","sidebar":"docs"},"guides/extending-endpoints":{"id":"guides/extending-endpoints","title":"Custom endpoints","description":"Previously we saw how we could use","sidebar":"docs"},"guides/mocking-unfinished":{"id":"guides/mocking-unfinished","title":"Mocking unfinished endpoints","description":"You have agreed to an API schema with a backend engineer who will implement it;","sidebar":"docs"},"guides/nested-response":{"id":"guides/nested-response","title":"Resources with nested structure","description":"Say you have a foreignkey author, and an array of foreign keys to contributors.","sidebar":"docs"},"guides/network-transform":{"id":"guides/network-transform","title":"Transforming data on fetch","description":"All network requests flow through the fetch() method, so any transforms needed can simply","sidebar":"docs"},"guides/pagination":{"id":"guides/pagination","title":"Pagination","description":"Tokens in Body","sidebar":"docs"},"guides/rest-types":{"id":"guides/rest-types","title":"Typing REST Endpoints","description":"In REST design, many operations can be performed on a given type of data.","sidebar":"docs"},"guides/rpc":{"id":"guides/rpc","title":"Capturing Mutation Side-Effects","description":"How to deal with side-effects","sidebar":"docs"},"guides/url":{"id":"guides/url","title":"URL Patterns","description":"Common REST urls resemble the following:","sidebar":"docs"},"usage":{"id":"usage","title":"REST","description":"Using REST APIs with Rest Hooks","sidebar":"docs"}}}')}}]);