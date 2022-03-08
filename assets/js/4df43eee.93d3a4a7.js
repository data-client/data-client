/*! For license information please see 4df43eee.93d3a4a7.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[70425,37103,68047,714,18961,36701,68649,901],{62525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,s){for(var o,i,l=a(e),c=1;c<arguments.length;c++){for(var p in o=Object(arguments[c]))n.call(o,p)&&(l[p]=o[p]);if(t){i=t(o);for(var u=0;u<i.length;u++)r.call(o,i[u])&&(l[i[u]]=o[i[u]])}}return l}},41535:(e,t,n)=>{var r=n(62525),a=60103,s=60106;var o=60109,i=60110,l=60112;var c=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;a=u("react.element"),s=u("react.portal"),u("react.fragment"),u("react.strict_mode"),u("react.profiler"),o=u("react.provider"),i=u("react.context"),l=u("react.forward_ref"),u("react.suspense"),c=u("react.memo"),p=u("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function f(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}function y(){}function b(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}f.prototype.isReactComponent={},f.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},f.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=f.prototype;var g=b.prototype=new y;g.constructor=b,r(g,f.prototype),g.isPureReactComponent=!0;var k=Array.isArray,v=Object.prototype.hasOwnProperty,w={current:null},T={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,n){var r,s={},o=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(o=""+t.key),t)v.call(t,r)&&!T.hasOwnProperty(r)&&(s[r]=t[r]);var l=arguments.length-2;if(1===l)s.children=n;else if(1<l){for(var c=Array(l),p=0;p<l;p++)c[p]=arguments[p+2];s.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===s[r]&&(s[r]=l[r]);return{$$typeof:a,type:e,key:o,ref:i,props:s,_owner:w.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var R=/\/+/g;function j(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function E(e,t,n,r,o){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var l=!1;if(null===e)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case a:case s:l=!0}}if(l)return o=o(l=e),e=""===r?"."+j(l,0):r,k(o)?(n="",null!=e&&(n=e.replace(R,"$&/")+"/"),E(o,t,n,"",(function(e){return e}))):null!=o&&(x(o)&&(o=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(R,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=""===r?".":r+":",k(e))for(var c=0;c<e.length;c++){var p=r+j(i=e[c],c);l+=E(i,t,n,p,o)}else if("function"==typeof(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e)))for(e=p.call(e),c=0;!(i=e.next()).done;)l+=E(i=i.value,t,n,p=r+j(i,c++),o);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function S(e,t,n){if(null==e)return e;var r=[],a=0;return E(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function O(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var C={current:null},P={transition:0}},27378:(e,t,n)=>{n(41535)},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||s;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294);function a(e){let{children:t,hidden:n,className:a}=e;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(87462),a=n(67294),s=n(72389),o=n(45860),i=n(86010);const l="tabItem_LplD";function c(e){var t,n;const{lazy:s,block:c,defaultValue:p,values:u,groupId:d,className:h}=e,m=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=u??m.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),y=(0,o.lx)(f,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===p?p:p??(null==(t=m.find((e=>e.props.default)))?void 0:t.props.value)??(null==(n=m[0])?void 0:n.props.value);if(null!==b&&!f.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:k}=(0,o.UB)(),[v,w]=(0,a.useState)(b),T=[],{blockElementScrollPositionUntilNextRender:N}=(0,o.o5)();if(null!=d){const e=g[d];null!=e&&e!==v&&f.some((t=>t.value===e))&&w(e)}const x=e=>{const t=e.currentTarget,n=T.indexOf(t),r=f[n].value;r!==v&&(N(t),w(r),null!=d&&k(d,r))},R=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]||T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]||T[T.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},h)},f.map((e=>{let{value:t,label:n,attributes:s}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:e=>T.push(e),onKeyDown:R,onFocus:x,onClick:x},s,{className:(0,i.Z)("tabs__item",l,null==s?void 0:s.className,{"tabs__item--active":v===t})}),n??t)}))),s?(0,a.cloneElement)(m.filter((e=>e.props.value===v))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},m.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function p(e){const t=(0,s.Z)();return a.createElement(c,(0,r.Z)({key:String(t)},e))}},11806:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(87462),a=(n(27378),n(3905)),s=n(9877),o=n(58215);const i={title:"Typing REST Endpoints"},l=void 0,c={unversionedId:"guides/rest-types",id:"guides/rest-types",title:"Typing REST Endpoints",description:"In REST design, many operations can be performed on a given type of data.",source:"@site/../docs/guides/rest-types.md",sourceDirName:"guides",slug:"/guides/rest-types",permalink:"/docs/next/guides/rest-types",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/rest-types.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1635114033,formattedLastUpdatedAt:"10/24/2021",frontMatter:{title:"Typing REST Endpoints"},sidebar:"docs",previous:{title:"Custom endpoints",permalink:"/docs/next/guides/extending-endpoints"},next:{title:"Pagination",permalink:"/docs/next/guides/pagination"}},p={},u=[{value:"TL;DR",id:"tldr",level:2},{value:"RestEndpoint",id:"restendpoint",level:3},{value:"Usage",id:"usage",level:3},{value:"Problem",id:"problem",level:2},{value:"Generics, static methods, and this",id:"generics-static-methods-and-this",level:2},{value:"Solution: generics",id:"solution-generics",level:2},{value:"A limitation",id:"a-limitation",level:2},{value:"Workaround",id:"workaround",level:3},{value:"As Resource",id:"as-resource",level:2},{value:"Extending and adding endpoints",id:"extending-and-adding-endpoints",level:2},{value:"Typing rules of thumb",id:"typing-rules-of-thumb",level:2}],d={toc:u};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In REST design, many operations can be performed on a given type of data."),(0,a.kt)("p",null,"Attaching these operations to the type via static methods allows"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A singular import for both class usage, typing, and endpoints"),(0,a.kt)("li",{parentName:"ul"},"Reducing code duplication by extracting common patterns into base classes")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../api/Resource"},"Resource")," provides one such pattern, which makes getting started\nfast. However, even if the pattern generally matches your API design, there\nare often special operations or one-off cases where additional endpoints must\nbe extended or added."),(0,a.kt)("h2",{id:"tldr"},"TL;DR"),(0,a.kt)("h3",{id:"restendpoint"},"RestEndpoint"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../api/types#restendpoint"},"RestEndpoint")," type is provided to conveniently declare\n",(0,a.kt)("a",{parentName:"p",href:"../api/Resource"},"Resource")," ",(0,a.kt)("a",{parentName:"p",href:"../api/Endpoint"},"Endpoint"),"s."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"RestEndpoint<\n  F extends FetchFunction = RestFetch,\n  S extends Schema | undefined = Schema | undefined,\n  M extends true | undefined = true | undefined\n>\n")),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Here's an example of each endpoint's return typed followed by usage. For\na full explanation, continue reading below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource, RestEndpoint, RestFetch } from '@rest-hooks/rest';\n\nclass MyResource extends Resource {\n  static list<T extends typeof Resource>(\n    this: T,\n  ): RestEndpoint<RestFetch, SchemaList<AbstractInstanceType<T>>, undefined> {\n    return super.list();\n  }\n\n  static create<T extends typeof Resource>(\n    this: T,\n  ): RestEndpoint<\n    RestFetch<{}, Partial<AbstractInstanceType<T>>>,\n    SchemaDetail<AbstractInstanceType<T>>,\n    true\n  > {\n    return super.create();\n  }\n\n  static filteredAndPaginatedList<T extends typeof Resource>(\n    this: T,\n  ): RestEndpoint<\n    RestFetch<{ filterA: boolean; sortby: string }>,\n    { results: T[]; nextPage: string },\n    undefined\n  > {\n    return super.list().extend({ schema: { results: [this], nextPage: '' } });\n  }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import MyResource from 'resources/MyResource';\nimport { useSuspense, useController } from 'rest-hooks';\n\nconst items = useSuspense(MyResource.list(), {});\nconst { fetch } = useController();\nconst createMy = payload => fetch(MyResource.create(), {}, payload);\nconst { results, nextPage } = useSuspense(\n  MyResource.filteredAndPaginatedList(),\n  { filterA: true, sortby: 'first' },\n);\n")),(0,a.kt)("h2",{id:"problem"},"Problem"),(0,a.kt)("p",null,"To reduce code bloat, make development faster, reducing maintenance costs and reduce errors it is recommended\nto share common patterns in parent classes, and only specify what is specific to a given\nresource in that resource's class. Oftentimes this looks like simply its expected members\nand a pk() definition (though if you use a common field for pk() - you can also pull that up)."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../api/Resource"},"Resource")," is an example attempt that is useful for many common REST patterns that\ncan be further extended and easily customized like so:"),(0,a.kt)(s.Z,{defaultValue:"bloat",values:[{label:"Bloat",value:"bloat"},{label:"Gets reduced to",value:"reduced"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"bloat",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class User {\n  readonly id: string = '';\n  readonly username: string = '';\n  readonly createdAt: Date = new Date();\n\n  pk() {\n    return this.id;\n  }\n\n  static schema = {\n    createdAt: Date,\n  };\n\n  static detail() {\n    return new Endpoint(\n      ({ id }: { id: string }) => fetch(`/user/${id}`).then(res => res.json()),\n      { schema: User },\n    );\n  }\n\n  static list() {\n    return new Endpoint(() => fetch(`/user`).then(res => res.json()), {\n      schema: [User],\n    });\n  }\n\n  // ...even more endpoints for this Resource defined below\n}\n\nclass Post extends Resource {\n  readonly id: string = '';\n  readonly title: string = '';\n  readonly content: string = '';\n\n  pk() {\n    return this.id;\n  }\n\n  static detail() {\n    return new Endpoint(\n      ({ id }: { id: string }) => fetch(`/post/${id}`).then(res => res.json()),\n      { schema: Post },\n    );\n  }\n\n  static list() {\n    return new Endpoint(() => fetch(`/post`).then(res => res.json()), {\n      schema: [Post],\n    });\n  }\n\n  // ...even more endpoints for this Resource defined below\n}\n"))),(0,a.kt)(o.Z,{value:"reduced",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class User extends Resource {\n  readonly id: string = '';\n  readonly username: string = '';\n  readonly createdAt: Date = new Date();\n\n  pk() {\n    return this.id;\n  }\n\n  static schema = {\n    createdAt: Date,\n  };\n\n  static urlRoot = '/user';\n}\n\nclass Post extends Resource {\n  readonly id: string = '';\n  readonly title: string = '';\n  readonly content: string = '';\n\n  pk() {\n    return this.id;\n  }\n\n  static urlRoot = '/post';\n}\n")))),(0,a.kt)("p",null,"Even in this overly simplistic case we're more than halving the lines of code.\nOnce the complexities of the real world kick in, this improvement expands."),(0,a.kt)("p",null,"However, we now have a problem. Before we were explictily specifying the ",(0,a.kt)("a",{parentName:"p",href:"../api/Endpoint"},"Endpoint"),"s'\nexpected shape via the ",(0,a.kt)("a",{parentName:"p",href:"../api/schema"},"schema"),". Now it if we use the common methods like .detail()\nwe lose our typing information."),(0,a.kt)("h2",{id:"generics-static-methods-and-this"},"Generics, static methods, and this"),(0,a.kt)("p",null,"To explain the solution - generic ",(0,a.kt)("inlineCode",{parentName:"p"},"this")," - let's simplify the example."),(0,a.kt)("p",null,"Here we'll define a static method that returns the type of the class - ",(0,a.kt)("inlineCode",{parentName:"p"},"Base"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class Base {\n  static factory(): Base {\n    const obj = new this();\n    obj.extra = 5;\n    return obj;\n  }\n}\n")),(0,a.kt)("p",null,"If we inspect the runtime value, it says the type is ",(0,a.kt)("inlineCode",{parentName:"p"},"Base"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// type is Base\nconst obj = Base.factory();\n// print Base\nconsole.log(typeof obj);\n")),(0,a.kt)("p",null,"Now we extend that class"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class Child extends Base {\n  another = 5;\n}\n")),(0,a.kt)("p",null,"And call the same static method"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// type is Base\nconst obj = Child.factory();\n// print Child\nconsole.log(typeof obj);\n")),(0,a.kt)("p",null,"TypeScript will implicitly type ",(0,a.kt)("inlineCode",{parentName:"p"},"obj")," as ",(0,a.kt)("inlineCode",{parentName:"p"},"Base"),", but at runtime, we can see it's really ",(0,a.kt)("inlineCode",{parentName:"p"},"Child")),(0,a.kt)("h2",{id:"solution-generics"},"Solution: generics"),(0,a.kt)("p",null,"Generics in TypeScript can be attached to parameters in any function and automatically inferred.\nSince ",(0,a.kt)("inlineCode",{parentName:"p"},"this")," is implicit, TypeScript allows you to explictly bind ",(0,a.kt)("inlineCode",{parentName:"p"},"this")," if you want a method's\nreturn type based on it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class Base {\n  static factory<T extends Base>(this: T): T {\n    const obj = new this();\n    obj.extra = 5;\n    return obj;\n  }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// type is Child\nconst obj = Child.factory();\n// print Child\nconsole.log(typeof obj);\n")),(0,a.kt)("p",null,"Now when we call the method defined in ",(0,a.kt)("inlineCode",{parentName:"p"},"Base")," on any descendant, it is typed appropriately!"),(0,a.kt)("h2",{id:"a-limitation"},"A limitation"),(0,a.kt)("p",null,"While generic ",(0,a.kt)("inlineCode",{parentName:"p"},"this")," is powerful in allowing correct typing even for inherited classes, it\nhas one annoying bug: ",(0,a.kt)("inlineCode",{parentName:"p"},"super")," calls incorrectly resolve to the constraint, rather than the generic."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class Child extends Base {\n  extra: number = 0;\n\n  static factory<T extends Base>(this: T): T {\n    const obj = super.factory();\n    obj.extra = 2;\n    // @ts-expect-error - typescript says obj is not compatible with T\n    return obj;\n  }\n}\n")),(0,a.kt)("h3",{id:"workaround"},"Workaround"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"any")," is mostly to be avoided, but since we are careful to type our return\ntype correctly in the method, we can be confident the rest of our code will\nstill be protected."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class Child extends Base {\n  extra: number = 0;\n\n  static factory<T extends Base>(this: T): T {\n    const obj = super.factory();\n    obj.extra = 2;\n    return obj as any;\n  }\n}\n")),(0,a.kt)("p",null,"This is only needed if we are setting the type directly from the super call.\nWe'll see below we only need to do this when we retain the schema from the super call.\nThis is also not necessary if ",(0,a.kt)("inlineCode",{parentName:"p"},"this.method()")," is called as this bug ",(0,a.kt)("em",{parentName:"p"},"only")," affects ",(0,a.kt)("inlineCode",{parentName:"p"},"super")),(0,a.kt)("h2",{id:"as-resource"},"As Resource"),(0,a.kt)("p",null,"Applying this to our original example, we get something along the lines of:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class Resource {\n  static detail<T extends typeof Resource>(this: T) {\n    return new Endpoint(\n      props => fetch(this.url(props)).then(res => res.json()),\n      { schema: this },\n    );\n  }\n\n  static list<T extends typeof Resource>(this: T) {\n    return new Endpoint(\n      props => fetch(this.listUrl(props)).then(res => res.json()),\n      { schema: [this] },\n    );\n  }\n}\n")),(0,a.kt)("h2",{id:"extending-and-adding-endpoints"},"Extending and adding endpoints"),(0,a.kt)("p",null,"This means any time we define our own ",(0,a.kt)("a",{parentName:"p",href:"./extending-endpoints"},"custom endpoints")," we should\nbe sure to include generics so the types are alwalys correct."),(0,a.kt)("p",null,"For instance, we can change the expected response of the API to have the resource\ninside the 'data' attribute:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class User extends Resource {\n  static detail<T extends typeof Resource>(this: T) {\n    return super.detail().extend({ schema: { data: this } });\n  }\n}\n")),(0,a.kt)("p",null,"If we were to explicitly type thing, we could use ",(0,a.kt)("inlineCode",{parentName:"p"},"RestEndpoint")),(0,a.kt)(s.Z,{defaultValue:"Schema",values:[{label:"Schema",value:"Schema"},{label:"Parameters",value:"Parameters"},{label:"Mutate",value:"Mutate"},{label:"Payload/Body",value:"Payload/Body"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Schema",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// typeof result is { data: User }\nconst result = useSuspense(User.detail(), { id });\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { RestEndpoint, RestFetch, Resource } from '@rest-hooks/rest';\n\nclass User extends Resource {\n  static detail<T extends typeof Resource>(\n    this: T,\n  ): RestEndpoint<RestFetch, { data: T }, undefined> {\n    return super.detail().extend({ schema: { data: this } });\n  }\n}\n\nconst { data: user } = useSuspense(User.detail(), { id: '5' });\n"))),(0,a.kt)(o.Z,{value:"Parameters",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// typeof id is string\nconst result = useSuspense(User.detail(), { id });\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { RestEndpoint, RestFetch, Resource } from '@rest-hooks/rest';\n\nclass User extends Resource {\n  static detail<T extends typeof Resource>(\n    this: T,\n  ): RestEndpoint<\n    RestFetch<{ id: string }>,\n    SchemaDetail<AbstractInstanceType<T>>,\n    undefined\n  > {\n    // super.detail() resolves the Schema to be based on `typeof Resource`, rather than `T`\n    // which makes it incompatible with the return type correctly specified.\n    return super.detail() as any;\n  }\n}\n\nconst { data: user } = useSuspense(User.detail(), { id: '5' });\n"))),(0,a.kt)(o.Z,{value:"Mutate",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// works\nconst { fetch } = useController();\nconst updateUser = (id, payload) => fetch(User.update(), { id }, payload);\n// typeerror - protected against mutable operations\nconst user = useSuspense(User.update());\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { RestEndpoint, RestFetch, Resource } from '@rest-hooks/rest';\n\nclass User extends Resource {\n  static update<T extends typeof Resource>(\n    this: T,\n  ): RestEndpoint<RestFetch, T, true> {\n    // super.update() resolves the Schema to be based on `typeof Resource`, rather than `T`\n    // which makes it incompatible with the return type correctly specified.\n    return super.update() as any;\n  }\n}\n\nconst { data: user } = useSuspense(User.detail(), { id: '5' });\n"))),(0,a.kt)(o.Z,{value:"Payload/Body",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const { fetch } = useController();\n\nconst handleClick = useCallback(() => {\n  // works\n  const response = await fetch(User.update(), { id }, { username: 'bob' });\n  // typeerror\n  const failed = await fetch(User.update(), { id }, { username: 5 });\n  // typeerror\n  const failed = await fetch(User.update(), { id }, { usernme: 'bob' });\n}, [fetch]);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { RestEndpoint, RestFetch, Resource } from '@rest-hooks/rest';\n\nclass User extends Resource {\n  static update<T extends typeof Resource>(\n    this: T,\n  ): RestEndpoint<RestFetch<object, { username: string }>, T, true> {\n    // super.update() resolves the Schema to be based on `typeof Resource`, rather than `T`\n    // which makes it incompatible with the return type correctly specified.\n    return super.update() as any;\n  }\n}\n\nconst { data: user } = useSuspense(User.detail(), { id: '5' });\n")))),(0,a.kt)("h2",{id:"typing-rules-of-thumb"},"Typing rules of thumb"),(0,a.kt)("p",null,"Generally you want to type return values as specific as possible, but accept\nfunction arguments as loose as possible (like in hooks). To follow this principal:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../api/types#restendpoint"},"RestEndpoint")," for endpoints in ",(0,a.kt)("a",{parentName:"li",href:"../api/Resource"},"Resource"),"s"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../api/types#endpointinstance"},"EndpointInstance")," for anything that uses the ",(0,a.kt)("a",{parentName:"li",href:"../api/Endpoint"},"Endpoint")," class."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../api/types#endpointinterface"},"EndpointInterface")," for any hook arguments")))}h.isMDXComponent=!0}}]);