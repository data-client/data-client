/*! For license information please see 4b8874cb.ccb0c24a.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[53200],{62525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var i,l,s=o(e),p=1;p<arguments.length;p++){for(var u in i=Object(arguments[p]))r.call(i,u)&&(s[u]=i[u]);if(t){l=t(i);for(var c=0;c<l.length;c++)n.call(i,l[c])&&(s[l[c]]=i[l[c]])}}return s}},41535:(e,t,r)=>{var n=r(62525),o=60103,a=60106;var i=60109,l=60110,s=60112;var p=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var c=Symbol.for;o=c("react.element"),a=c("react.portal"),c("react.fragment"),c("react.strict_mode"),c("react.profiler"),i=c("react.provider"),l=c("react.context"),s=c("react.forward_ref"),c("react.suspense"),p=c("react.memo"),u=c("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k={};function m(e,t,r){this.props=e,this.context=t,this.refs=k,this.updater=r||f}function h(){}function y(e,t,r){this.props=e,this.context=t,this.refs=k,this.updater=r||f}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=m.prototype;var v=y.prototype=new h;v.constructor=y,n(v,m.prototype),v.isPureReactComponent=!0;var b=Array.isArray,g=Object.prototype.hasOwnProperty,w={current:null},R={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,r){var n,a={},i=null,l=null;if(null!=t)for(n in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)g.call(t,n)&&!R.hasOwnProperty(n)&&(a[n]=t[n]);var s=arguments.length-2;if(1===s)a.children=r;else if(1<s){for(var p=Array(s),u=0;u<s;u++)p[u]=arguments[u+2];a.children=p}if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===a[n]&&(a[n]=s[n]);return{$$typeof:o,type:e,key:i,ref:l,props:a,_owner:w.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var x=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function O(e,t,r,n,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case o:case a:s=!0}}if(s)return i=i(s=e),e=""===n?"."+P(s,0):n,b(i)?(r="",null!=e&&(r=e.replace(x,"$&/")+"/"),O(i,t,r,"",(function(e){return e}))):null!=i&&(C(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(x,"$&/")+"/")+e)),t.push(i)),1;if(s=0,n=""===n?".":n+":",b(e))for(var p=0;p<e.length;p++){var u=n+P(l=e[p],p);s+=O(l,t,r,u,i)}else if("function"==typeof(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e)))for(e=u.call(e),p=0;!(l=e.next()).done;)s+=O(l=l.value,t,r,u=n+P(l,p++),i);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function j(e,t,r){if(null==e)return e;var n=[],o=0;return O(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function S(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var H={current:null},E={transition:0}},27378:(e,t,r)=>{r(41535)},3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),f=o,k=d["".concat(s,".").concat(f)]||d[f]||c[f]||a;return r?n.createElement(k,i(i({ref:t},u),{},{components:r})):n.createElement(k,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},77052:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(87462),o=(r(27378),r(3905));const a={title:"makeRenderRestHook()"},i=void 0,l={unversionedId:"api/makeRenderRestHook",id:"api/makeRenderRestHook",title:"makeRenderRestHook()",description:"makeRenderRestHook() is useful to test hooks that rely on the rest-hooks. It creates a renderRestHook()",source:"@site/../docs/api/makeRenderRestHook.md",sourceDirName:"api",slug:"/api/makeRenderRestHook",permalink:"/docs/next/api/makeRenderRestHook",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/makeRenderRestHook.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1635114033,formattedLastUpdatedAt:"10/24/2021",frontMatter:{title:"makeRenderRestHook()"},sidebar:"docs",previous:{title:"<MockResolver />",permalink:"/docs/next/api/MockResolver"},next:{title:"makeCacheProvider()",permalink:"/docs/next/api/makeCacheProvider"}},s={},p=[{value:"Arguments",id:"arguments",level:2},{value:"makeProvider",id:"makeprovider",level:3},{value:"renderRestHook()",id:"renderresthook",level:2},{value:"Arguments",id:"arguments-1",level:3},{value:"callback",id:"callback",level:4},{value:"options.initialFixtures",id:"optionsinitialfixtures",level:4},{value:"options.resolverFixtures",id:"optionsresolverfixtures",level:3},{value:"options.initialProps",id:"optionsinitialprops",level:4},{value:"options.wrapper",id:"optionswrapper",level:4},{value:"cleanup()",id:"cleanup",level:3},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:2}],u=(c="CacheProvider",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var c;const d={toc:p};function f(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"function makeRenderRestHook(makeProvider: ProviderType): RenderRestHookFunction;\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"makeRenderRestHook()")," is useful to test hooks that rely on the ",(0,o.kt)("inlineCode",{parentName:"p"},"rest-hooks"),". It creates a renderRestHook()\nfunction that mirrors ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/testing-library/react-hooks-testing-library"},"@testing-library/react-hooks"),"'s ",(0,o.kt)("a",{parentName:"p",href:"https://react-hooks-testing-library.com/reference/api#renderhook-options"},"renderHook()")," but does so with a ",(0,o.kt)("inlineCode",{parentName:"p"},"<Suspense/>")," boundary\nas well as in a ",(0,o.kt)("inlineCode",{parentName:"p"},"<Provider />")," context."),(0,o.kt)("h2",{id:"arguments"},"Arguments"),(0,o.kt)("h3",{id:"makeprovider"},"makeProvider"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"type ProviderType = (\n  managers: Manager[],\n  initialState?: State<unknown>,\n) => React.ComponentType<{\n  children: React.ReactChild;\n}>;\n")),(0,o.kt)("p",null,"Function to generate the provider used in ",(0,o.kt)("inlineCode",{parentName:"p"},"renderRestHook()"),". The purpose of this is to unify construction of\nproviders as they both are initialized in a very different fashion."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/api/makeCacheProvider"},"makeCacheProvider()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/api/makeExternalCacheProvider"},"makeExternalCacheProvider()"))),(0,o.kt)("h2",{id:"renderresthook"},"renderRestHook()"),(0,o.kt)("p",null,"Returned from makeRenderRestHook():"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"type RenderRestHookFunction = {\n  <P, R>(\n    callback: (props: P) => R,\n    options?: {\n      initialProps?: P;\n      initialFixtures?: FixtureEndpoint[];\n      resolverFixtures?: FixtureEndpoint[];\n      wrapper?: React.ComponentType;\n      // @deprecated\n      results?: Fixture[];\n    },\n  ): {\n    readonly result: {\n      readonly current: R;\n      readonly error: Error;\n    };\n    readonly waitForNextUpdate: () => Promise<void>;\n    readonly unmount: () => boolean;\n    readonly rerender: (hookProps?: P | undefined) => void;\n  };\n  cleanup(): void;\n};\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"renderRestHook()")," creates a Provider context with new manager instances. This means each call\nto ",(0,o.kt)("inlineCode",{parentName:"p"},"renderRestHook()")," will result in a completely fresh cache state as well as manager state."),(0,o.kt)("h3",{id:"arguments-1"},"Arguments"),(0,o.kt)("h4",{id:"callback"},"callback"),(0,o.kt)("p",null,"Hooks to run inside React. Return value will become available in ",(0,o.kt)("inlineCode",{parentName:"p"},"result")),(0,o.kt)("h4",{id:"optionsinitialfixtures"},"options.initialFixtures"),(0,o.kt)("p",null,"Can be used to prime the cache if test expects cache values to already be filled. Takes same\n",(0,o.kt)("a",{parentName:"p",href:"../api/MockResolver#fixtures"},"array of fixtures as MockResolver")),(0,o.kt)("p",null,"This has the same effect as initializing ",(0,o.kt)("a",{parentName:"p",href:"../api/CacheProvider"},(0,o.kt)(u,{mdxType:"CacheProvider"}))," with ",(0,o.kt)("a",{parentName:"p",href:"../api/mockInitialState"},"mockInitialState()")),(0,o.kt)("h3",{id:"optionsresolverfixtures"},"options.resolverFixtures"),(0,o.kt)("p",null,"These fixtures are used to resolve any new requests. This is most useful for mocking imperative fetches like mutations, but can also allow testing suspending states or transitions."),(0,o.kt)("p",null,"Wrrks by adding ",(0,o.kt)("a",{parentName:"p",href:"../api/MockResolver"},"MockResolver")," as a wrapper."),(0,o.kt)("h4",{id:"optionsinitialprops"},"options.initialProps"),(0,o.kt)("p",null,"The initial values to pass to the callback function"),(0,o.kt)("h4",{id:"optionswrapper"},"options.wrapper"),(0,o.kt)("p",null,"Pass a React Component as the wrapper option to have it rendered around the inner element"),(0,o.kt)("h3",{id:"cleanup"},"cleanup()"),(0,o.kt)("p",null,"Cleans up all managers used in tests. Should be run in ",(0,o.kt)("inlineCode",{parentName:"p"},"afterEach()")," to ensure each test starts fresh."),(0,o.kt)("h3",{id:"returns"},"Returns"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"result")," (",(0,o.kt)("inlineCode",{parentName:"li"},"object"),")",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"current")," (",(0,o.kt)("inlineCode",{parentName:"li"},"any"),") - the return value of the ",(0,o.kt)("inlineCode",{parentName:"li"},"callback")," function"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"error")," (",(0,o.kt)("inlineCode",{parentName:"li"},"Error"),") - the error that was thrown if the ",(0,o.kt)("inlineCode",{parentName:"li"},"callback")," function threw an error during rendering"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"waitForNextUpdate")," (",(0,o.kt)("inlineCode",{parentName:"li"},"function"),") - returns a ",(0,o.kt)("inlineCode",{parentName:"li"},"Promise")," that resolves the next time the hook renders, commonly when state is updated as the result of a asynchronous action."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"rerender")," (",(0,o.kt)("inlineCode",{parentName:"li"},"function([newProps])"),") - function to rerender the test component including any hooks called in the ",(0,o.kt)("inlineCode",{parentName:"li"},"callback")," function. If ",(0,o.kt)("inlineCode",{parentName:"li"},"newProps")," are passed, the will replace the ",(0,o.kt)("inlineCode",{parentName:"li"},"initialProps")," passed the the ",(0,o.kt)("inlineCode",{parentName:"li"},"callback")," function for future renders."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"unmount")," (",(0,o.kt)("inlineCode",{parentName:"li"},"function()"),") - function to unmount the test component, commonly used to trigger cleanup effects for ",(0,o.kt)("inlineCode",{parentName:"li"},"useEffect")," hooks.")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://react-hooks-testing-library.com/reference/api#renderhook-result"},"@testing-library/react-hooks reference")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { makeRenderRestHook, makeCacheProvider } from '@rest-hooks/test';\n\nconst payload = {\n  id: 5,\n  title: 'hi ho',\n  content: 'whatever',\n  tags: ['a', 'best', 'react'],\n};\n\nbeforeEach(() => {\n  nock('http://test.com')\n    .get(`/article-cooler/${payload.id}`)\n    .reply(200, payload);\n  renderRestHook = makeRenderRestHook(makeCacheProvider);\n});\n\nit('should resolve useSuspense()', async () => {\n  const { result, waitForNextUpdate } = renderRestHook(() => {\n    return useSuspense(ArticleResource.detail(), payload);\n  });\n  expect(result.current).toBeUndefined();\n  await waitForNextUpdate();\n  expect(result.current instanceof ArticleResource).toBe(true);\n  expect(result.current.title).toBe(payload.title);\n});\n")))}f.isMDXComponent=!0}}]);