/*! For license information please see 752ea934.aa6be4b9.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[68098,37103,68047,714,18961,36701,68649,901],{62525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,i){for(var o,l,s=a(e),u=1;u<arguments.length;u++){for(var c in o=Object(arguments[u]))n.call(o,c)&&(s[c]=o[c]);if(t){l=t(o);for(var p=0;p<l.length;p++)r.call(o,l[p])&&(s[l[p]]=o[l[p]])}}return s}},41535:(e,t,n)=>{var r=n(62525),a=60103,i=60106;var o=60109,l=60110,s=60112;var u=60115,c=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;a=p("react.element"),i=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),o=p("react.provider"),l=p("react.context"),s=p("react.forward_ref"),p("react.suspense"),u=p("react.memo"),c=p("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function h(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||f}function v(){}function y(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||f}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=h.prototype;var b=y.prototype=new v;b.constructor=y,r(b,h.prototype),b.isPureReactComponent=!0;var k=Array.isArray,g=Object.prototype.hasOwnProperty,w={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,n){var r,i={},o=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(o=""+t.key),t)g.call(t,r)&&!N.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(1===s)i.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===i[r]&&(i[r]=s[r]);return{$$typeof:a,type:e,key:o,ref:l,props:i,_owner:w.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var E=/\/+/g;function x(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function T(e,t,n,r,o){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case a:case i:s=!0}}if(s)return o=o(s=e),e=""===r?"."+x(s,0):r,k(o)?(n="",null!=e&&(n=e.replace(E,"$&/")+"/"),T(o,t,n,"",(function(e){return e}))):null!=o&&(O(o)&&(o=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(E,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=""===r?".":r+":",k(e))for(var u=0;u<e.length;u++){var c=r+x(l=e[u],u);s+=T(l,t,n,c,o)}else if("function"==typeof(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e)))for(e=c.call(e),u=0;!(l=e.next()).done;)s+=T(l=l.value,t,n,c=r+x(l,u++),o);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function I(e,t,n){if(null==e)return e;var r=[],a=0;return T(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function S(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var _={current:null},P={transition:0}},27378:(e,t,n)=>{n(41535)},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294);function a(e){let{children:t,hidden:n,className:a}=e;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(87462),a=n(67294),i=n(72389),o=n(45860),l=n(86010);const s="tabItem_LplD";function u(e){var t,n;const{lazy:i,block:u,defaultValue:c,values:p,groupId:d,className:f}=e,m=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=p??m.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),v=(0,o.lx)(h,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===c?c:c??(null==(t=m.find((e=>e.props.default)))?void 0:t.props.value)??(null==(n=m[0])?void 0:n.props.value);if(null!==y&&!h.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:k}=(0,o.UB)(),[g,w]=(0,a.useState)(y),N=[],{blockElementScrollPositionUntilNextRender:j}=(0,o.o5)();if(null!=d){const e=b[d];null!=e&&e!==g&&h.some((t=>t.value===e))&&w(e)}const O=e=>{const t=e.currentTarget,n=N.indexOf(t),r=h[n].value;r!==g&&(j(t),w(r),null!=d&&k(d,r))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]||N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]||N[N.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":u},f)},h.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,key:t,ref:e=>N.push(e),onKeyDown:E,onFocus:O,onClick:O},i,{className:(0,l.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":g===t})}),n??t)}))),i?(0,a.cloneElement)(m.filter((e=>e.props.value===g))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},m.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==g})))))}function c(e){const t=(0,i.Z)();return a.createElement(u,(0,r.Z)({key:String(t)},e))}},11048:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(9877),a=n(58215),i=n(67294);function o(e){let{children:t}=e;return i.createElement(r.Z,{defaultValue:"simple",groupId:"with-generics",values:[{label:"Type",value:"simple"},{label:"With Generics",value:"generics"}]},i.createElement(a.Z,{value:"simple"},t[0]),i.createElement(a.Z,{value:"generics"},t[1]))}},4052:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(27378),n(3905)),i=n(11048);const o={title:"useInvalidator()"},l=void 0,s={unversionedId:"api/useInvalidator",id:"api/useInvalidator",title:"useInvalidator()",description:"Use Controller.invalidate() instead",source:"@site/../docs/api/useInvalidator.md",sourceDirName:"api",slug:"/api/useInvalidator",permalink:"/docs/next/api/useInvalidator",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/useInvalidator.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1635114033,formattedLastUpdatedAt:"10/24/2021",frontMatter:{title:"useInvalidator()"},sidebar:"docs",previous:{title:"useFetcher()",permalink:"/docs/next/api/useFetcher"},next:{title:"useResetter()",permalink:"/docs/next/api/useResetter"}},u={},c=[{value:"Example",id:"example",level:3},{value:"Internals",id:"internals",level:3},{value:"Invalidate an entity",id:"invalidate-an-entity",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Use ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/Controller#invalidate"},"Controller.invalidate()")," instead"))),(0,a.kt)(i.Z,{mdxType:"GenericsTabs"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function useInvalidator(\n  endpoint: ReadEndpoint,\n): (params: object | null) => void;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function useInvalidator<Params extends Readonly<object>, S extends Schema>(\n  endpoint: ReadEndpoint<(p: Params) => Promise<any>, S>,\n): (params: Params | null) => void;\n"))),(0,a.kt)("p",null,"Mostly useful for imperatively invalidating the cache, with a similar signature to\n",(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/useFetcher"},"useFetcher"),"."),(0,a.kt)("p",null,"Sending a ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," to params results in a no-op."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Forces refetching and suspense on ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/useSuspense"},"useSuspense")," with the same Endpoint\nand parameters."),(0,a.kt)("p",{parentName:"blockquote"},"To refresh while continuing to display stale data - ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/useFetcher"},"useFetcher")," instead.")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function ArticleName({ id }: { id: string }) {\n  const article = useSuspense(ArticleResource.detail(), { id });\n  const invalidateArticle = useInvalidator(ArticleResource.detail());\n\n  return (\n    <div>\n      <h1>{article.title}<h1>\n      <button onClick={() => invalidateArticle({ id })}>Fetch &amp; suspend</button>\n    </div>\n  );\n}\n")),(0,a.kt)("h3",{id:"internals"},"Internals"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"set expiresAt to 0.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This triggers useFetch."))),(0,a.kt)("li",{parentName:"ul"},"deletes results entry.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This only allows direct read from the cache if inferred results."))),(0,a.kt)("li",{parentName:"ul"},"sets meta.invalidated to true.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This is used to determine whether to throw promise (trigger suspense)")))),(0,a.kt)("h2",{id:"invalidate-an-entity"},"Invalidate an entity"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useInvalidator()")," invalidates a particular response. If you're looking to invalidate ",(0,a.kt)("em",{parentName:"p"},"every"),"\nresponse containing a particular entity, use the ",(0,a.kt)("a",{parentName:"p",href:"./Delete"},"Delete"),"\nSchema. This causes all responses with that entity marked as required to suspend."),(0,a.kt)("p",null,"In case this isn't an actual endpoint, simply fake the ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const InvalidateArticle = new Endpoint(\n  (params) => Promise.resolve(params),\n  { schema: new schemas.Delete(ArticleResource) }\n);\n\nfunction ArticleName({ id }: { id: string }) {\n  const article = useSuspense(ArticleResource.detail(), { id });\n  const invalidateAllWithArticle = useFetcher(InvalidateArticle);\n\n  return (\n    <div>\n      <h1>{article.title}<h1>\n      <button onClick={() => invalidateAllWithArticle({ id })}>Fetch &amp; suspend</button>\n    </div>\n  );\n}\n")),(0,a.kt)("p",null,"The fetch should resolve to an object that can compute the ",(0,a.kt)("inlineCode",{parentName:"p"},"pk()")," (like 'id')\nof the entity. This is needed so Rest Hooks knows which entity is being deleted."),(0,a.kt)("p",null,"If the actual server response does not include this information, typically\nyou can pass through relevant information from the params themselves."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const InvalidateArticle = new Endpoint(\n  ({ id }) => {\n    // disregard response from API since it's just an empty string\n    await fetch(`/article/${id}`, { method: 'DELETE' });\n    return { id };\n  },\n  { schema: new schemas.Delete(ArticleResource) },\n);\n")),(0,a.kt)("p",null,"This is actually what the default ",(0,a.kt)("a",{parentName:"p",href:"./resource#delete-endpoint"},"Resource.delete()")," does."))}d.isMDXComponent=!0}}]);