"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[32797],{74790:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const s={authors:["ntucker"],tags:["releases","rest-hooks"],title:"Rest Hooks 2.2 Released"},o=void 0,i={permalink:"/blog/2019/10/28/Rest-Hooks-2.2-Released",source:"@site/blog/2019-10-28-Rest-Hooks-2.2-Released.md",title:"Rest Hooks 2.2 Released",description:"2.2 comes with the eagerly awaited programmable optimistic updates. This enables two very important use cases:",date:"2019-10-28T00:00:00.000Z",formattedDate:"October 28, 2019",tags:[{label:"releases",permalink:"/blog/tags/releases"},{label:"rest-hooks",permalink:"/blog/tags/rest-hooks"}],readingTime:3.99,hasTruncateMarker:!0,authors:[{name:"Nathaniel Tucker",title:"Creator of Rest Hooks",url:"https://github.com/ntucker",imageURL:"https://github.com/ntucker.png",key:"ntucker"}],frontMatter:{authors:["ntucker"],tags:["releases","rest-hooks"],title:"Rest Hooks 2.2 Released"},prevItem:{title:"Rest Hooks 4.0 Released",permalink:"/blog/2019/12/24/Rest-Hooks-4.0-Released"},nextItem:{title:"Rest Hooks 2.1 Released",permalink:"/blog/2019/08/07/Rest-Hooks-2.1-Released"}},l={authorsImageUrls:[void 0]},u=[{value:"Optimistic update on create",id:"optimistic-update-on-create",level:2},{value:"Pagination",id:"pagination",level:3},{value:"useResourceNew() and useCacheNew()",id:"useresourcenew-and-usecachenew",level:2},{value:"useResetter()",id:"useresetter",level:2},{value:"Improved Union and Values support",id:"improved-union-and-values-support",level:2},{value:"Final notes",id:"final-notes",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("meta",{name:"docsearch:pagerank",content:"-100"})),(0,r.kt)("p",null,"2.2 comes with the eagerly awaited programmable optimistic updates. This enables two very important use cases:\noptimistic update on create and infinite pagination."),(0,r.kt)("p",null,"The bigger part of this release is introducing two new hooks that enable an incremental migration path to\n3.0 planned changes. ",(0,r.kt)("a",{parentName:"p",href:"https://resthooks.io/docs/2.2/api/useCacheNew"},"useCacheNew()")," and ",(0,r.kt)("a",{parentName:"p",href:"https://resthooks.io/docs/2.2/api/useresourcenew"},"useResourceNew()")," are added in this release, allowing incremental adoption of the new selection logic\nthat will become the default in 3.0. More details below."),(0,r.kt)("h2",{id:"optimistic-update-on-create"},"Optimistic update on create"),(0,r.kt)("p",null,"Mutation fetches can often change more than just the entities in their response. For example,\nissuing a create often means a subsequent request for a list of that resource will include the newly\ncreated entity. Previously the workaround for this case would be to issue a fetch immediately after\nthe mutation request. This is not ideal as it causes unnecessary network traffic, server load, and most\nimportantly a slower user experience."),(0,r.kt)("p",null,"However, since updates like these can be extremely varied and implementation-dependant, providing a solution\nthat is protocol agnostic requires careful tuning. Inverting control can also be dangerous as\na small bug in user-code can destroy the entire cache structure."),(0,r.kt)("p",null,"Introducing ",(0,r.kt)("a",{parentName:"p",href:"https://resthooks.io/docs/2.2/api/useFetcher#updateparams-destshape-destparams-updatefunction"},"updateParams"),"\na new third argument to the imperative fetch function."),(0,r.kt)("p",null,"Each tuple in the array represents a result entry to update. The first two members of the tuple represent\nthat result, while the third is a function defining how to update it with the results of the fetch call.\nTypeScript is invaluable here, as the very strict types ensure the function does not cause any cache state invariants\nto be violated."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const createArticle = useFetcher(ArticleResource.createShape());\n\ncreateArticle({ id: 1 }, {}, [\n  [\n    ArticleResource.listShape(),\n    {},\n    (newArticle, articles) => [...articles, newArticle],\n  ],\n]);\n")),(0,r.kt)("h3",{id:"pagination"},"Pagination"),(0,r.kt)("p",null,"This can also be used to support ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.2/guides/infinite-scrolling-pagination"},"pagination"),". Every time a new page is called, the results of that\npage can be aggregated on one result list. Here's the rough idea (this code hasn't been tested):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"class PaginatedArticleResource extends Resource {\n  readonly id: number | null = null;\n  readonly title: string = '';\n  readonly content: string = '';\n  readonly author: number | null = null;\n  readonly tags: string[] = [];\n\n  pk() {\n    return this.id;\n  }\n\n  static urlRoot = 'http://test.com/article/';\n\n  static listShape<T extends typeof Resource>(this: T) {\n    return {\n      ...super.listShape(),\n      schema: { results: [this.getEntitySchema()] },\n    };\n  }\n}\n\nfunction mergeArticles(\n  newPage: { results: string[] },\n  articles: { results?: string[] },\n): { results: string[] } {\n  return [...(articles.results || []), ...newPage.results];\n}\n\nfunction useNextPageFetcher() {\n  const getNextPage = useFetcher(ArticleResource.listShape());\n  return useCallback(() => {\n    return getNextPage({}, { cursor: 2 }, [\n      [ArticleResource.listShape(), {}, mergeArticles],\n    ]);\n  }, [getNextPage]);\n}\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/coinbase/rest-hooks/pull/153"},"Add optimistic update on create + configurable optimistic updates")),(0,r.kt)("h2",{id:"useresourcenew-and-usecachenew"},"useResourceNew() and useCacheNew()"),(0,r.kt)("p",null,"Previously for \u2018convenience\u2019 Rest Hooks\u2019 selectors would automatically \u2018dive\u2019 into results - directly returning the first entity or list of entities it found. This seemed convenient but had the assumption that there would 1) always be an entity in a schema 2) be only one top-level entity. This is a pretty big assumption to make, and violates the principal of protocol agnosticism. Furthermore, this somewhat arbitrary behavior is not obvious and easily results in confusion to new users. Since the legacy selector behavior can easily be composed on top of selectors\nreturning the entire results, we have decided to move to a less opinionated version for the two selector hooks - ",(0,r.kt)("inlineCode",{parentName:"p"},"useCache()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"useResource()"),"."),(0,r.kt)("p",null,"To make the transition easy, there are three phases. The first is in 2.2, which will introduce an opt-in to the new behavior by introducing\n",(0,r.kt)("a",{parentName:"p",href:"https://resthooks.io/docs/2.2/api/useresourcenew"},"useResourceNew()")," and ",(0,r.kt)("a",{parentName:"p",href:"https://resthooks.io/docs/2.2/api/useCacheNew"},"useCacheNew()"),". Upgrading to\n2.2 allows incremental adoption of the new behavior one component at a time. Then in 3.0, the current ",(0,r.kt)("inlineCode",{parentName:"p"},"useResource()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"useCache()")," will be renamed to ",(0,r.kt)("inlineCode",{parentName:"p"},"useResourceLegacy()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"useCacheLegacy()")," respectively. The new hooks will then take their place. This makes upgrading a simple rename as well, providing an additional time window of incremental adoption. However, at that point these hooks should be considered deprecrated. Finally, in the next minor/major version, the legacy hooks will be removed altogether."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/coinbase/rest-hooks/pull/135"},"Add useResourceNew() and useCacheNew()")),(0,r.kt)("h2",{id:"useresetter"},"useResetter()"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://resthooks.io/docs/2.2/api/useResetter"},"useResetter()")," is a simple hook that makes clearing the entire cache imperatively quite simple. This can be useful in cases such as a user changing authentication state by login/logout."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/coinbase/rest-hooks/pull/148"},"Add useResetter() which returns a function that can clear entire cache")),(0,r.kt)("h2",{id:"improved-union-and-values-support"},"Improved Union and Values support"),(0,r.kt)("p",null,"Additional tests and edge cases using Union and Value types have been added ensuring maximum schema flexibility."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/coinbase/rest-hooks/pull/135"},"Fully support Union and Values schemas in types and useDenormalized()")),(0,r.kt)("h2",{id:"final-notes"},"Final notes"),(0,r.kt)("p",null,"Please try out the new release and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/coinbase/rest-hooks/issues"},"give feedback"),"\nif there are any issues or if things are working great! We've got a lot of great new features\ncoming down the pipeline and we hope to see your contributions as well. \ud83d\ude0a"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/coinbase/rest-hooks/releases/tag/2.2.0"},"Full set of 2.2 release commits")))}p.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=u(n),d=r,m=h["".concat(l,".").concat(d)]||h[d]||p[d]||s;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<s;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);