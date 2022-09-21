"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[25766],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(r),g=o,f=d["".concat(p,".").concat(g)]||d[g]||u[g]||a;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},34557:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={title:"Upgrading @rest-hooks/test to 6"},s=void 0,i={unversionedId:"upgrade/upgrading-test-to-six",id:"version-6.3/upgrade/upgrading-test-to-six",title:"Upgrading @rest-hooks/test to 6",description:"@rest-hooks/test uses react-hooks-testing-library internally. Version 7",source:"@site/versioned_docs/version-6.3/upgrade/upgrading-test-to-six.md",sourceDirName:"upgrade",slug:"/upgrade/upgrading-test-to-six",permalink:"/docs/6.3/upgrade/upgrading-test-to-six",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/upgrade/upgrading-test-to-six.md",tags:[],version:"6.3",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1663622540,formattedLastUpdatedAt:"Sep 19, 2022",frontMatter:{title:"Upgrading @rest-hooks/test to 6"},sidebar:"docs",previous:{title:"Upgrading @rest-hooks/test to 7",permalink:"/docs/6.3/upgrade/upgrading-test-to-seven"},next:{title:"Upgrading @rest-hooks/test to 4",permalink:"/docs/6.3/upgrade/upgrading-test-to-four"}},p={},l=[],c={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@rest-hooks/test")," uses ",(0,o.kt)("inlineCode",{parentName:"p"},"react-hooks-testing-library")," internally. Version 7\nhas a major version upgrade for this library, so the following ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/testing-library/react-hooks-testing-library/releases/tag/v7.0.0"},"breaking changes"),"\nalso apply to ",(0,o.kt)("inlineCode",{parentName:"p"},"@rest-hooks/test@6")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"'suppressErrorOutput will now work when explicitly called, even if the\nRHTL_DISABLE_ERROR_FILTERING env variable has been set' (from\nreact-hooks-testing-library)"),(0,o.kt)("li",{parentName:"ul"},"requires node 12 or above")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@rest-hooks/test@6")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/coinbase/rest-hooks/releases/tag/%40rest-hooks%2Ftest%406.0.0"},"Release notes")))}u.isMDXComponent=!0}}]);