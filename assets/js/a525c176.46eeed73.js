"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[25604],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(t),h=o,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||i;return t?r.createElement(m,a(a({ref:n},d),{},{components:t})):r.createElement(m,a({ref:n},d))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},84272:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=t(87462),o=(t(67294),t(3905));const i={title:"Mocking unfinished endpoints",id:"mocking-unfinished",original_id:"mocking-unfinished"},a=void 0,s={unversionedId:"guides/mocking-unfinished",id:"version-4.1/guides/mocking-unfinished",title:"Mocking unfinished endpoints",description:"You have agreed to an API schema with a backend engineer who will implement it;",source:"@site/versioned_docs/version-4.1/guides/mocking-unfinished.md",sourceDirName:"guides",slug:"/guides/mocking-unfinished",permalink:"/docs/4.1/guides/mocking-unfinished",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/mocking-unfinished.md",tags:[],version:"4.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"9/6/2021",frontMatter:{title:"Mocking unfinished endpoints",id:"mocking-unfinished",original_id:"mocking-unfinished"},sidebar:"version-4.1/docs",previous:{title:"Transforming data on fetch",permalink:"/docs/4.1/guides/network-transform"},next:{title:"Computed Properties",permalink:"/docs/4.1/guides/computed-properties"}},c={},l=[],d={toc:l};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You have agreed to an API schema with a backend engineer who will implement it;\nbut they are starting to code the same time as you. It would be nice to easily\nmock the endpoint and use it in a way such that when the endpoint is done\nyou won't need to make major changes to your code."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"resource/RatingResource.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource, FetchOptions } from 'rest-hooks';\n\nexport default class RatingResource extends Resource {\n  readonly id: string = '';\n  readonly rating: number = 4.6;\n  readonly author: string = '';\n  readonly date: string = '1990-01-01T00:00:00Z';\n\n  pk() {\n    return this.id;\n  }\n\n  static urlRoot = '/ratings';\n\n  static getFetchOptions(): FetchOptions {\n    return {\n      dataExpiryLength: 10 * 60 * 1000, // 10 minutes\n    };\n  }\n\n  static listShape<T extends typeof Resource>(this: T) {\n    return {\n      ...super.listShape(),\n      fetch(params: Readonly<object>, body?: Readonly<object | string>) {\n        return Promise.resolve(\n          ['Morningstar', 'Seekingalpha', 'Morningstar', 'CNBC'].map(\n            author => ({\n              id: `${Math.random()}`,\n              rating: randomFloatInRange(2, 5).toFixed(1),\n              author,\n              date: '1990-01-01T00:00:00Z',\n            }),\n          ),\n        );\n      },\n    };\n  }\n}\n")),(0,o.kt)("p",null,"By mocking the ",(0,o.kt)("a",{parentName:"p",href:"/docs/4.1/api/FetchShape#fetchurl-string-body-payload-promiseany"},"fetch")," part of\n",(0,o.kt)("a",{parentName:"p",href:"/docs/4.1/api/FetchShape"},"FetchShape")," we can easily fake the data the server will return. Doing\nthis allows free use of the strongly typed RatingResource as normal throughout the codebase."),(0,o.kt)("p",null,"Once the API is implemented you can simply remove the custom fetch (and the entire listShape()\noverride if that's all it's doing)."),(0,o.kt)("p",null,"In this example we also set the dataExpiryLength to a longer time so the random values generated\npersist longer. This makes for a more realistic demo."))}u.isMDXComponent=!0}}]);