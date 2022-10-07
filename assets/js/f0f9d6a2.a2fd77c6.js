"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[66473],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,g=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(g,a(a({ref:t},d),{},{components:n})):r.createElement(g,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},42588:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={title:"Mocking unfinished endpoints"},a=void 0,s={unversionedId:"guides/mocking-unfinished",id:"version-5.1/guides/mocking-unfinished",title:"Mocking unfinished endpoints",description:"You have agreed to an API schema with a backend engineer who will implement it;",source:"@site/rest_versioned_docs/version-5.1/guides/mocking-unfinished.md",sourceDirName:"guides",slug:"/guides/mocking-unfinished",permalink:"/rest/5.1/guides/mocking-unfinished",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/rest/guides/mocking-unfinished.md",tags:[],version:"5.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1663622540,formattedLastUpdatedAt:"Sep 19, 2022",frontMatter:{title:"Mocking unfinished endpoints"},sidebar:"docs",previous:{title:"Transforming data on fetch",permalink:"/rest/5.1/guides/network-transform"},next:{title:"Nesting related resources (server-side join)",permalink:"/rest/5.1/guides/nested-response"}},c={},l=[],d={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You have agreed to an API schema with a backend engineer who will implement it;\nbut they are starting to code the same time as you. It would be nice to easily\nmock the endpoint and use it in a way such that when the endpoint is done\nyou won't need to make major changes to your code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="resource/RatingResource.ts"',title:'"resource/RatingResource.ts"'},"import { Resource } from '@rest-hooks/rest';\nimport { EndpointExtraOptions } from '@rest-hooks/endpoint';\n\nexport default class RatingResource extends Resource {\n  readonly id: string = '';\n  readonly rating: number = 4.6;\n  readonly author: string = '';\n  readonly date: string = '1990-01-01T00:00:00Z';\n\n  pk() {\n    return this.id;\n  }\n\n  static urlRoot = '/ratings';\n\n  static getEndpointExtra(): EndpointExtraOptions {\n    return {\n      dataExpiryLength: 10 * 60 * 1000, // 10 minutes\n    };\n  }\n\n  static list<T extends typeof Resource>(this: T) {\n    return super.list().extend({\n      fetch(params: Readonly<object>, body?: Readonly<object | string>) {\n        return Promise.resolve(\n          ['Morningstar', 'Seekingalpha', 'Morningstar', 'CNBC'].map(\n            author => ({\n              id: `${Math.random()}`,\n              rating: randomFloatInRange(2, 5).toFixed(1),\n              author,\n              date: '1990-01-01T00:00:00Z',\n            }),\n          ),\n        );\n      },\n    });\n  }\n}\n")),(0,o.kt)("p",null,"By mocking the\n",(0,o.kt)("a",{parentName:"p",href:"/rest/5.1/api/Endpoint"},"Endpoint")," we can easily fake the data the server will return. Doing\nthis allows free use of the strongly typed RatingResource as normal throughout the codebase."),(0,o.kt)("p",null,"Once the API is implemented you can simply remove the custom fetch (and the entire list()\noverride if that's all it's doing)."),(0,o.kt)("p",null,"In this example we also set the dataExpiryLength to a longer time so the random values generated\npersist longer. This makes for a more realistic demo."))}u.isMDXComponent=!0}}]);