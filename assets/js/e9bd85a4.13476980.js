"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[58489],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(o,".").concat(m)]||u[m]||d[m]||l;return n?a.createElement(f,s(s({ref:t},p),{},{components:n})):a.createElement(f,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<l;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},86769:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),l=n(70523);const s={title:"SimpleRecord"},i=void 0,o={unversionedId:"api/SimpleRecord",id:"version-5.1/api/SimpleRecord",title:"SimpleRecord",description:"Use schema.Object instead.",source:"@site/rest_versioned_docs/version-5.1/api/SimpleRecord.md",sourceDirName:"api",slug:"/api/SimpleRecord",permalink:"/rest/5.1/api/SimpleRecord",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/rest/api/SimpleRecord.md",tags:[],version:"5.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1663622540,formattedLastUpdatedAt:"Sep 19, 2022",frontMatter:{title:"SimpleRecord"},sidebar:"docs",previous:{title:"validateRequired",permalink:"/rest/5.1/api/validateRequired"}},c={},p=[{value:"Factory method",id:"factory-method",level:2},{value:"static fromJS&lt;T extends typeof SimpleRecord&gt;(this: T, props: Partial&lt;AbstractInstanceType&lt;T&gt;&gt;): AbstractInstanceType&lt;T&gt;",id:"static-fromjst-extends-typeof-simplerecordthis-t-props-partialabstractinstancetypet-abstractinstancetypet",level:3},{value:"Data methods",id:"data-methods",level:2},{value:"static merge&lt;T extends typeof SimpleRecord&gt;(first: InstanceType&lt;T&gt;, second: InstanceType&lt;T&gt;) =&gt; InstanceType&lt;T&gt;",id:"static-merget-extends-typeof-simplerecordfirst-instancetypet-second-instancetypet--instancetypet",level:3},{value:"static hasDefined&lt;T extends typeof SimpleRecord&gt;(instance: InstanceType&lt;T&gt;, key: keyof InstanceType&lt;T&gt;) =&gt; boolean",id:"static-hasdefinedt-extends-typeof-simplerecordinstance-instancetypet-key-keyof-instancetypet--boolean",level:3},{value:"static toObjectDefined&lt;T extends typeof SimpleRecord&gt;(instance: AbstractInstanceType&lt;T&gt;) =&gt; Partial&lt;InstanceType&lt;T&gt;&gt;",id:"static-toobjectdefinedt-extends-typeof-simplerecordinstance-abstractinstancetypet--partialinstancetypet",level:3},{value:"static keysDefined&lt;T extends typeof SimpleRecord&gt;(instance: InstanceType&lt;T&gt;) =&gt; (keyof InstanceType&lt;T&gt;)[]",id:"static-keysdefinedt-extends-typeof-simplerecordinstance-instancetypet--keyof-instancetypet",level:3},{value:"static schema: { k: keyof this: Schema }",id:"static-schema--k-keyof-this-schema-",level:3},{value:"Optional members",id:"optional-members",level:4}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Deprecated",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Use ",(0,r.kt)("a",{parentName:"p",href:"./Object"},"schema.Object")," instead.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SimpleRecord")," provides a simple immutable interface to store values that have\ndefaults. When constructed it distinguishes between actually set values and ones\nonly provided by defaults. This is useful to produce accurate merging algorithms\nwhen dealing with partial data definitions."),(0,r.kt)(l.Z,{mdxType:"LanguageTabs"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { SimpleRecord } from '@rest-hooks/legacy';\n\nexport default class Article extends SimpleRecord {\n  readonly id: number | undefined = undefined;\n  readonly title: string = '';\n  readonly content: string = '';\n  readonly author: number | null = null;\n  readonly tags: string[] = [];\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { SimpleRecord } from '@rest-hooks/legacy';\n\nexport default class Article extends SimpleRecord {\n  id = undefined;\n  title = '';\n  content = '';\n  author = null;\n  tags = [];\n}\n"))),(0,r.kt)("h2",{id:"factory-method"},"Factory method"),(0,r.kt)("h3",{id:"static-fromjst-extends-typeof-simplerecordthis-t-props-partialabstractinstancetypet-abstractinstancetypet"},"static fromJS<T extends typeof SimpleRecord",">","(this: T, props: Partial<AbstractInstanceType<T",">",">","): AbstractInstanceType<T",">"),(0,r.kt)("p",null,"This is used to create instances of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Resource")," you defined. Will copy over props provided to\nthe instance in construction, among other things. ",(0,r.kt)("em",{parentName:"p"},"Be sure to always call ",(0,r.kt)("inlineCode",{parentName:"em"},"super.fromJS()")," when\noverriding.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const articleA = Article.fromJS({\n  title: 'The best library',\n  tags: ['Immutable'],\n});\nconst articleB = Article.fromJS({\n  content: 'A long droning paragraph',\n  tags: ['React', 'TypeScript'],\n});\n")),(0,r.kt)("h2",{id:"data-methods"},"Data methods"),(0,r.kt)("h3",{id:"static-merget-extends-typeof-simplerecordfirst-instancetypet-second-instancetypet--instancetypet"},"static merge<T extends typeof SimpleRecord",">","(first: InstanceType<T",">",", second: InstanceType<T",">",") => InstanceType<T",">"),(0,r.kt)("p",null,"Takes only the defined (non-default) values of first and second and creates a new instance copying them over.\nSecond will override values of first. Merge is shallow, so you'll need to override this to do any deep merges."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const mergedArticle = Article.merge(articleA, articleB);\nconsole.log(mergedArticle);\n/*\n{\n  id: undefined,\n  title: 'The best library',\n  content: 'A long droning paragraph',\n  author: null,\n  tags: ['React', 'TypeScript'],\n}\n*/\n")),(0,r.kt)("h3",{id:"static-hasdefinedt-extends-typeof-simplerecordinstance-instancetypet-key-keyof-instancetypet--boolean"},"static hasDefined<T extends typeof SimpleRecord",">","(instance: InstanceType<T",">",", key: keyof InstanceType<T",">",") => boolean"),(0,r.kt)("p",null,"Returns whether provided ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," is defined (non-default) in ",(0,r.kt)("inlineCode",{parentName:"p"},"instance"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"console.log(articleA.hasDefined('title'));\n/* true */\nconsole.log(articleA.hasDefined('content'));\n/* false */\n")),(0,r.kt)("h3",{id:"static-toobjectdefinedt-extends-typeof-simplerecordinstance-abstractinstancetypet--partialinstancetypet"},"static toObjectDefined<T extends typeof SimpleRecord",">","(instance: AbstractInstanceType<T",">",") => Partial<InstanceType<T",">",">"),(0,r.kt)("p",null,"Returns an ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")," with only the defined (non-default) members of ",(0,r.kt)("inlineCode",{parentName:"p"},"instance"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"console.log(mergedArticle.toObjectDefined());\n/*\n{\n  title: 'The best library',\n  content: 'A long droning paragraph',\n  tags: ['React', 'TypeScript'],\n}\n*/\n")),(0,r.kt)("h3",{id:"static-keysdefinedt-extends-typeof-simplerecordinstance-instancetypet--keyof-instancetypet"},"static keysDefined<T extends typeof SimpleRecord",">","(instance: InstanceType<T",">",") => (keyof InstanceType<T",">",")[]"),(0,r.kt)("p",null,"Returns an ",(0,r.kt)("inlineCode",{parentName:"p"},"Array")," of all defined (non-default) keys of ",(0,r.kt)("inlineCode",{parentName:"p"},"instance"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"console.log(mergedArticle.keysDefined());\n/* ['title', 'content', 'tags'] */\n")),(0,r.kt)("h3",{id:"static-schema--k-keyof-this-schema-"},"static schema: { ","[k: keyof this]",": Schema }"),(0,r.kt)("p",null,"Set this to ",(0,r.kt)("a",{parentName:"p",href:"/rest/guides/nested-response"},"define entities nested")," inside this one."),(0,r.kt)("p",null,"Additionally can be used to ",(0,r.kt)("a",{parentName:"p",href:"/rest/guides/network-transform#deserializing-fields"},"declare field deserialization")),(0,r.kt)("h4",{id:"optional-members"},"Optional members"),(0,r.kt)("p",null,"Entities references here whose default values in the Record definition itself are\nconsidered 'optional'"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"class UserResponse extends SimpleRecord {\n  readonly data: User | null = null; // this field is optional\n  readonly lastUpdated: Date = new Date(0);\n\n  static schema = {\n    data: User,\n    lastUpdated: Date,\n  }\n}\n")))}u.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,s),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),l=n(86010),s=n(72389),i=n(67392),o=n(7094),c=n(12466);const p="tabList__CuJ",d="tabItem_LNqP";function u(e){var t,n;const{lazy:s,block:u,defaultValue:m,values:f,groupId:y,className:h}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=null!=f?f:g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,i.l)(b,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===m?m:null!=(t=null!=m?m:null==(n=g.find((e=>e.props.default)))?void 0:n.props.value)?t:g[0].props.value;if(null!==k&&!b.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:T,setTabGroupChoices:S}=(0,o.U)(),[N,w]=(0,r.useState)(k),x=[],{blockElementScrollPositionUntilNextRender:O}=(0,c.o5)();if(null!=y){const e=T[y];null!=e&&e!==N&&b.some((t=>t.value===e))&&w(e)}const R=e=>{const t=e.currentTarget,n=x.indexOf(t),a=b[n].value;a!==N&&(O(t),w(a),null!=y&&S(y,String(a)))},I=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=x.indexOf(e.currentTarget)+1;n=null!=(a=x[t])?a:x[0];break}case"ArrowLeft":{var r;const t=x.indexOf(e.currentTarget)-1;n=null!=(r=x[t])?r:x[x.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":u},h)},b.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>x.push(e),onKeyDown:I,onFocus:R,onClick:R},s,{className:(0,l.Z)("tabs__item",d,null==s?void 0:s.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),s?(0,r.cloneElement)(g.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,s.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},70523:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(65488),r=n(85162),l=n(67294);function s(e){let{children:t}=e;return l.createElement(a.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},l.createElement(r.Z,{value:"ts"},t[0]),l.createElement(r.Z,{value:"js"},t[1]))}}}]);