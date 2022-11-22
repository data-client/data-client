"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[88400],{30433:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(67294),n=r(86010),o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:r},t)}},65559:(e,t,r)=>{r.d(t,{Z:()=>m});var a=r(87462),n=r(67294),o=r(86010),l=r(5730),s=r(20636),i=r(76602),c=r(63735),u="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:r,block:l,defaultValue:d,values:m,groupId:v,className:h}=e,f=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=m??f.map((e=>{let{props:{value:t,label:r,attributes:a}}=e;return{value:t,label:r,attributes:a}})),g=(0,s.l)(b,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===d?d:d??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:x}=(0,i.U)(),[E,N]=(0,n.useState)(y),O=[],{blockElementScrollPositionUntilNextRender:P}=(0,c.o5)();if(null!=v){const e=k[v];null!=e&&e!==E&&b.some((t=>t.value===e))&&N(e)}const w=e=>{const t=e.currentTarget,r=O.indexOf(t),a=b[r].value;a!==E&&(P(t),N(a),null!=v&&x(v,String(a)))},C=e=>{var t;let r=null;switch(e.key){case"Enter":w(e);break;case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;r=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;r=O[t]??O[O.length-1];break}}null==(t=r)||t.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},h)},b.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>O.push(e),onKeyDown:C,onClick:w},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":E===t})}),r??t)}))),r?(0,n.cloneElement)(f.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function m(e){const t=(0,l.Z)();return n.createElement(d,(0,a.Z)({key:String(t)},e))}},52393:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(13743),n=r(30433),o=r(65559),l=r(67294);function s(e){let{pkgs:t,dev:r=!1}=e;return l.createElement(o.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},l.createElement(n.Z,{value:"yarn"},l.createElement(a.Z,{className:"language-bash"},"yarn add ",r?"--dev ":"",t)),l.createElement(n.Z,{value:"npm"},l.createElement(a.Z,{className:"language-bash"},"npm install --save",r?"Dev ":""," ",t)))}},57489:(e,t,r)=>{var a=r(67294),n=r(64820);const o={React:a,...a,...n};t.Z=o},28045:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=r(87462),n=(r(67294),r(3905)),o=r(52393);const l={title:"<ExternalCacheProvider />"},s=void 0,i={unversionedId:"api/ExternalCacheProvider",id:"version-7.0/api/ExternalCacheProvider",title:"<ExternalCacheProvider />",description:"Integrates external stores with rest-hooks. Should be placed as high as possible",source:"@site/versioned_docs/version-7.0/api/ExternalCacheProvider.md",sourceDirName:"api",slug:"/api/ExternalCacheProvider",permalink:"/docs/7.0/api/ExternalCacheProvider",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/ExternalCacheProvider.md",tags:[],version:"7.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1669081963,formattedLastUpdatedAt:"Nov 22, 2022",frontMatter:{title:"<ExternalCacheProvider />"},sidebar:"docs",previous:{title:"<CacheProvider />",permalink:"/docs/7.0/api/CacheProvider"},next:{title:"<AsyncBoundary />",permalink:"/docs/7.0/api/AsyncBoundary"}},c={},u=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"store",id:"store",level:2},{value:"selector",id:"selector",level:2}],p={toc:u};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Integrates external stores with ",(0,n.kt)("inlineCode",{parentName:"p"},"rest-hooks"),". Should be placed as high as possible\nin application tree as any usage of the hooks is only possible for components below the provider\nin the React tree."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"Is a replacement for ",(0,n.kt)("a",{parentName:"strong",href:"/docs/7.0/api/CacheProvider"},"<CacheProvider /",">")," - do ",(0,n.kt)("em",{parentName:"strong"},"NOT")," use both at once"))),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)(o.Z,{pkgs:"@rest-hooks/redux redux",mdxType:"PkgTabs"}),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="index.tsx"',title:'"index.tsx"'},"import { ExternalCacheProvider } from '@rest-hooks/redux';\nimport ReactDOM from 'react-dom';\n\nimport { store, selector } from './store';\n\nReactDOM.render(\n  <ExternalCacheProvider store={store} selector={selector}>\n    <App />\n  </ExternalCacheProvider>,\n  document.body,\n);\n")),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"/docs/7.0/guides/redux"},"redux example")," for a more complete example."),(0,n.kt)("h2",{id:"store"},"store"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"interface Store<S> {\n  subscribe(listener: () => void): () => void;\n  dispatch: React.Dispatch<ActionTypes>;\n  getState(): S;\n}\n")),(0,n.kt)("p",null,"Store simply needs to conform to this interface. A common implementation is a ",(0,n.kt)("a",{parentName:"p",href:"https://redux.js.org/api/store"},"redux store"),",\nbut theoretically any external store could be used."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/7.0/guides/redux"},"Read more about integrating redux.")),(0,n.kt)("h2",{id:"selector"},"selector"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"(state: S) => State<unknown>\n")),(0,n.kt)("p",null,"This function is used to retrieve the ",(0,n.kt)("inlineCode",{parentName:"p"},"rest-hooks")," specific part of the store's state tree."))}d.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,v=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return r?a.createElement(v,l(l({ref:t},u),{},{components:r})):a.createElement(v,l({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);