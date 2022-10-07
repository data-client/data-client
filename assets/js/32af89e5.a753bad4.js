"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3142],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(p,".").concat(f)]||d[f]||l[f]||s;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},32059:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const s={title:"Cross-orgin requests with JSONP",id:"jsonp",original_id:"jsonp"},i=void 0,a={unversionedId:"guides/jsonp",id:"version-4.5/guides/jsonp",title:"Cross-orgin requests with JSONP",description:"JSONP is a method for sending JSON data without worrying about cross-domain issues. This",source:"@site/versioned_docs/version-4.5/guides/jsonp.md",sourceDirName:"guides",slug:"/guides/jsonp",permalink:"/docs/4.5/guides/jsonp",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/jsonp.md",tags:[],version:"4.5",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"Sep 6, 2021",frontMatter:{title:"Cross-orgin requests with JSONP",id:"jsonp",original_id:"jsonp"}},p={},c=[],u={toc:c};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"JSONP is a method for sending JSON data without worrying about cross-domain issues. This\nis sometimes needed when calling third-party APIs that don't come with appropriate\n",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"},"CORS")," settings."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import jsonp from 'superagent-jsonp';\nimport { Resource } from 'rest-hooks';\n\nexport default class ArticleResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly content: string = '';\n\n  pk() {\n    return this.id;\n  }\n  static urlRoot = 'http://test.com/article/';\n\n  // OPERATIVE LINE HERE\n  static fetchPlugin = jsonp;\n}\n")),(0,o.kt)("p",null,"Using the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/superagent-jsonp"},"jsonp plugin")," for superagent makes this quite easy."))}l.isMDXComponent=!0}}]);