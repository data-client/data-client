"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7590],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=u(r),g=o,f=c["".concat(p,".").concat(g)]||c[g]||d[g]||a;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},55653:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={title:"Upgrading @rest-hooks/test to 4"},i=void 0,s={unversionedId:"upgrade/upgrading-test-to-four",id:"version-6.3/upgrade/upgrading-test-to-four",title:"Upgrading @rest-hooks/test to 4",description:"Breaking Changes",source:"@site/versioned_docs/version-6.3/upgrade/upgrading-test-to-four.md",sourceDirName:"upgrade",slug:"/upgrade/upgrading-test-to-four",permalink:"/docs/6.3/upgrade/upgrading-test-to-four",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/upgrade/upgrading-test-to-four.md",tags:[],version:"6.3",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1663622540,formattedLastUpdatedAt:"Sep 19, 2022",frontMatter:{title:"Upgrading @rest-hooks/test to 4"},sidebar:"docs",previous:{title:"Upgrading @rest-hooks/test to 6",permalink:"/docs/6.3/upgrade/upgrading-test-to-six"},next:{title:"Upgrading @rest-hooks/test to 3",permalink:"/docs/6.3/upgrade/upgrading-test-to-three"}},p={},u=[{value:"Breaking Changes",id:"breaking-changes",level:2},{value:"Guide",id:"guide",level:2}],l={toc:u};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"breaking-changes"},"Breaking Changes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Requires node 10+ (and not node 13 less than 13.7)"),(0,o.kt)("li",{parentName:"ul"},"No nested exports - only allowed usage:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"import { /* something */ } from '@rest-hooks/test';")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"import packageJson from '@rest-hooks/test/package.json';"))))),(0,o.kt)("h2",{id:"guide"},"Guide"),(0,o.kt)("p",null,"1) Ensure you are using at least node version 10 or above"),(0,o.kt)("p",null,"2) Search for ",(0,o.kt)("inlineCode",{parentName:"p"},"'@rest-hooks/test/")," to find any imports\nthat import from nested members."))}d.isMDXComponent=!0}}]);