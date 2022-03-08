/*! For license information please see 3bc0aab4.7ade2662.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[48281],{62525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var i,s,l=o(e),c=1;c<arguments.length;c++){for(var u in i=Object(arguments[c]))n.call(i,u)&&(l[u]=i[u]);if(t){s=t(i);for(var p=0;p<s.length;p++)r.call(i,s[p])&&(l[s[p]]=i[s[p]])}}return l}},41535:(e,t,n)=>{var r=n(62525),o=60103,a=60106;var i=60109,s=60110,l=60112;var c=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),a=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),i=p("react.provider"),s=p("react.context"),l=p("react.forward_ref"),p("react.suspense"),c=p("react.memo"),u=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function m(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||d}function y(){}function g(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||d}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=m.prototype;var b=g.prototype=new y;b.constructor=g,r(b,m.prototype),b.isPureReactComponent=!0;var k=Array.isArray,v=Object.prototype.hasOwnProperty,w={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,n){var r,a={},i=null,s=null;if(null!=t)for(r in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)v.call(t,r)&&!j.hasOwnProperty(r)&&(a[r]=t[r]);var l=arguments.length-2;if(1===l)a.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===a[r]&&(a[r]=l[r]);return{$$typeof:o,type:e,key:i,ref:s,props:a,_owner:w.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var x=/\/+/g;function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,n,r,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case o:case a:l=!0}}if(l)return i=i(l=e),e=""===r?"."+T(l,0):r,k(i)?(n="",null!=e&&(n=e.replace(x,"$&/")+"/"),S(i,t,n,"",(function(e){return e}))):null!=i&&(P(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(x,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=""===r?".":r+":",k(e))for(var c=0;c<e.length;c++){var u=r+T(s=e[c],c);l+=S(s,t,n,u,i)}else if("function"==typeof(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e)))for(e=u.call(e),c=0;!(s=e.next()).done;)l+=S(s=s.value,t,n,u=r+T(s,c++),i);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function N(e,t,n){if(null==e)return e;var r=[],o=0;return S(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function R(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var _={current:null},E={transition:0}},27378:(e,t,n)=>{n(41535)},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(n),d=o,h=f["".concat(l,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},10515:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(27378),n(3905));const a={title:"Pagination"},i=void 0,s={unversionedId:"guides/pagination",id:"guides/pagination",title:"Pagination",description:"Tokens in Body",source:"@site/../docs/guides/pagination.md",sourceDirName:"guides",slug:"/guides/pagination",permalink:"/docs/next/guides/pagination",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/pagination.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1635114033,formattedLastUpdatedAt:"10/24/2021",frontMatter:{title:"Pagination"},sidebar:"docs",previous:{title:"Typing REST Endpoints",permalink:"/docs/next/guides/rest-types"},next:{title:"Authentication",permalink:"/docs/next/guides/auth"}},l={},c=[{value:"Tokens in Body",id:"tokens-in-body",level:2},{value:"Tokens in HTTP Headers",id:"tokens-in-http-headers",level:2},{value:"Code organization",id:"code-organization",level:2},{value:"Infinite Scrolling",id:"infinite-scrolling",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"tokens-in-body"},"Tokens in Body"),(0,o.kt)("p",null,"A common way APIs deal with pagination is the list view will return an object with both pagination information\nand the Array of results as another member."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"GET http://test.com/article/?page=abcd")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "nextPage": null,\n  "prevPage": "http://test.com/article/?page=aedcba",\n  "results": [\n    {\n      "id": 5,\n      "content": "have a merry christmas",\n      "author": 2,\n      "contributors": []\n    },\n    {\n      "id": 532,\n      "content": "never again",\n      "author": 23,\n      "contributors": [5]\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"To deal with our specific endpoint, we'll need to customize the ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/api/Endpoint"},"Endpoint")," of lists to\nunderstand how to normalize the results (via schema). Be sure to provide defaults in your schema for any members\nthat aren't entities."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"resources/ArticleResource.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource, SchemaList, AbstractInstanceType } from '@rest-hooks/rest';\nimport { UserResource } from 'resources';\n\nexport default class ArticleResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly content: string = '';\n  readonly author: number | null = null;\n  readonly contributors: number[] = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n  static urlRoot = 'http://test.com/article/';\n\n  static list<T extends typeof Resource>(this: T) {\n    return super.list().extend({\n      schema: { results: [this], nextPage: '', prevPage: '' },\n    });\n  }\n}\n")),(0,o.kt)("p",null,"Now we can use ",(0,o.kt)("inlineCode",{parentName:"p"},"list()")," to get not only the articles, but also our ",(0,o.kt)("inlineCode",{parentName:"p"},"nextPage"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"prevPage")," values. We can use those tokens to define our pagination buttons."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ArticleList.tsx")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useSuspense } from 'rest-hooks';\nimport ArticleResource from 'resources/ArticleResource';\n\nexport default function ArticleList() {\n  const { results: articles, nextPage, prevPage } = useSuspense(\n    ArticleResource.list(),\n    {},\n  );\n  return (\n    <>\n      <div>\n        {articles.map(article => (\n          <Article key={article.pk()} article={article} />\n        ))}\n      </div>\n      {prevPage && <Link to={prevPage}>\u2039 Prev</Link>}\n      {nextPage && <Link to={nextPage}>Next \u203a</Link>}\n    </>\n  );\n}\n")),(0,o.kt)("h2",{id:"tokens-in-http-headers"},"Tokens in HTTP Headers"),(0,o.kt)("p",null,"In some cases the pagination tokens will be embeded in HTTP headers, rather than part of the payload. In this\ncase you'll need to customize the ",(0,o.kt)("a",{parentName:"p",href:"../api/Endpoint"},"fetch()")," function\nfor ",(0,o.kt)("a",{parentName:"p",href:"../api/resource#list-endpoint"},"list()")," so the pagination headers are included fetch object."),(0,o.kt)("p",null,"We show the custom list() below. All other parts of the above example remain the same."),(0,o.kt)("p",null,"Pagination token is stored in the header ",(0,o.kt)("inlineCode",{parentName:"p"},"link")," for this example."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from '@rest-hooks/rest';\n\nexport default class ArticleResource extends Resource {\n  // same as above....\n\n  /** Endpoint to get a list of entities */\n  static list<T extends typeof Resource>(this: T) {\n    const instanceFetchResponse = this.fetchResponse.bind(this);\n\n    return super.list().extend({\n      fetch: async function (params: Readonly<Record<string, string | number>>) {\n        const response = await instanceFetchResponse(this.url(params), this.init);\n        return {\n          link: response.headers.get('link'),\n          results: await response.json().catch((error: any) => {\n            error.status = 400;\n            throw error;\n        };\n      },\n      schema: { results: [this], link: '' },\n    });\n  }\n}\n")),(0,o.kt)("h2",{id:"code-organization"},"Code organization"),(0,o.kt)("p",null,"If much of your ",(0,o.kt)("inlineCode",{parentName:"p"},"Resources")," share a similar pagination, you might\ntry extending from a base class that defines such common customizations."),(0,o.kt)("h2",{id:"infinite-scrolling"},"Infinite Scrolling"),(0,o.kt)("p",null,"Sometimes pagination results are presented as an infinite scrolling list.\n",(0,o.kt)("a",{parentName:"p",href:"./infinite-scrolling-pagination"},"Infinite scrolling pagination")," guide explains more about this."))}p.isMDXComponent=!0}}]);