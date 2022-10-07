"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[34634],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(h,s(s({ref:t},d),{},{components:n})):a.createElement(h,s({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,s),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),o=n(86010),s=n(72389),i=n(67392),l=n(7094),p=n(12466);const d="tabList__CuJ",u="tabItem_LNqP";function c(e){var t,n;const{lazy:s,block:c,defaultValue:m,values:h,groupId:y,className:f}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=null!=h?h:k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,i.l)(b,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===m?m:null!=(t=null!=m?m:null==(n=k.find((e=>e.props.default)))?void 0:n.props.value)?t:k[0].props.value;if(null!==v&&!b.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:E}=(0,l.U)(),[T,w]=(0,r.useState)(v),x=[],{blockElementScrollPositionUntilNextRender:D}=(0,p.o5)();if(null!=y){const e=N[y];null!=e&&e!==T&&b.some((t=>t.value===e))&&w(e)}const j=e=>{const t=e.currentTarget,n=x.indexOf(t),a=b[n].value;a!==T&&(D(t),w(a),null!=y&&E(y,String(a)))},O=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=x.indexOf(e.currentTarget)+1;n=null!=(a=x[t])?a:x[0];break}case"ArrowLeft":{var r;const t=x.indexOf(e.currentTarget)-1;n=null!=(r=x[t])?r:x[x.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},f)},b.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>x.push(e),onKeyDown:O,onFocus:j,onClick:j},s,{className:(0,o.Z)("tabs__item",u,null==s?void 0:s.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),s?(0,r.cloneElement)(k.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function m(e){const t=(0,s.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},70523:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(65488),r=n(85162),o=n(67294);function s(e){let{children:t}=e;return o.createElement(a.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},o.createElement(r.Z,{value:"ts"},t[0]),o.createElement(r.Z,{value:"js"},t[1]))}},15945:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),o=n(65488),s=n(85162);n(70523);const i={title:"Entity and Data Normalization",sidebar_label:"Entity"},l=void 0,p={unversionedId:"getting-started/entity",id:"version-6.2/getting-started/entity",title:"Entity and Data Normalization",description:"Entities have a primary key. This enables easy access via a lookup table.",source:"@site/versioned_docs/version-6.2/getting-started/entity.md",sourceDirName:"getting-started",slug:"/getting-started/entity",permalink:"/docs/6.2/getting-started/entity",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/getting-started/entity.md",tags:[],version:"6.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1650951703,formattedLastUpdatedAt:"Apr 26, 2022",frontMatter:{title:"Entity and Data Normalization",sidebar_label:"Entity"},sidebar:"docs",previous:{title:"Data Dependencies",permalink:"/docs/6.2/getting-started/data-dependency"},next:{title:"Expiry Policy",permalink:"/docs/6.2/getting-started/expiry-policy"}},d={},u=[{value:"Mutations and Dynamic Data",id:"mutations-and-dynamic-data",level:2},{value:"Schema",id:"schema",level:2},{value:"Nesting",id:"nesting",level:3},{value:"Data Representations",id:"data-representations",level:3}],c={toc:u};function m(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/6.2/api/Entity"},"Entities")," have a primary key. This enables easy access via a lookup table.\nThis makes it easy to find, update, create, or delete the same data - no matter what\nendpoint it was used in."),(0,r.kt)(o.Z,{defaultValue:"State",values:[{label:"State",value:"State"},{label:"Response",value:"Response"},{label:"Endpoint",value:"Endpoint"},{label:"Entity",value:"Entity"},{label:"React",value:"React"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"State",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Entities cache",src:n(31923).Z,width:"1600",height:"596"}))),(0,r.kt)(s.Z,{value:"Response",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  { "id": 1, "title": "this is an entity" },\n  { "id": 2, "title": "this is the second entity" }\n]\n'))),(0,r.kt)(s.Z,{value:"Endpoint",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const PresentationList = new Endpoint(\n  () => fetch(`/presentations`).then(res => res.json()),\n  { schema: [PresentationEntity] },\n);\n"))),(0,r.kt)(s.Z,{value:"Entity",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"class PresentationEntity extends Entity {\n  readonly id: string = '';\n  readonly title: string = '';\n\n  pk() {\n    return this.id;\n  }\n}\n"))),(0,r.kt)(s.Z,{value:"React",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"export function PresentationsPage() {\n  const presentation = useSuspense(PresentationList, {});\n  return presentation.map(presentation => (\n    <div key={presentation.pk()}>{presentation.title}</div>\n  ));\n}\n")))),(0,r.kt)("p",null,"Extracting entities from a response is known as ",(0,r.kt)("inlineCode",{parentName:"p"},"normalization"),". Accessing a response reverses\nthe process via ",(0,r.kt)("inlineCode",{parentName:"p"},"denormalization"),"."),(0,r.kt)("admonition",{title:"Global Referential Equality",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Using entities expands Rest Hooks' global referential equality guarantee beyond the granularity of\nan entire endpoint response.")),(0,r.kt)("h2",{id:"mutations-and-dynamic-data"},"Mutations and Dynamic Data"),(0,r.kt)("p",null,"When an endpoint changes data, this is known as a ",(0,r.kt)("a",{parentName:"p",href:"/docs/6.2/guides/rpc"},"side effect"),". Marking an endpoint with ",(0,r.kt)("a",{parentName:"p",href:"/docs/6.2/api/Endpoint#sideeffect"},"sideEffect: true"),"\ntells Rest Hooks that this endpoint is not idempotent, and thus should not be allowed in hooks\nthat may call the endpoint an arbitrary number of times like ",(0,r.kt)("a",{parentName:"p",href:"/docs/6.2/api/useSuspense"},"useSuspense()")," or ",(0,r.kt)("a",{parentName:"p",href:"/docs/6.2/api/useFetch"},"useFetch()")),(0,r.kt)("p",null,"By including the changed data in the endpoint's response, Rest Hooks is able to able to update\nany entities it extracts by specifying the schema."),(0,r.kt)(o.Z,{defaultValue:"Create",values:[{label:"Create",value:"Create"},{label:"Update",value:"Update"},{label:"Delete",value:"Delete"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Create",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { schema, Endpoint } from '@rest-hooks/endpoint';\n\nconst todoCreate = new Endpoint(\n  (body: FormData) =>\n    fetch(`https://jsonplaceholder.typicode.com/todos/`, {\n      method: 'POST',\n      body,\n    }).then(res => res.json()),\n  { schema: Todo, sideEffect: true },\n);\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Example Usage")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useController } from 'rest-hooks';\n\nexport default function NewTodoForm() {\n  const { fetch } = useController();\n  return (\n    <Form onSubmit={e => fetch(todoCreate, new FormData(e.target))}>\n      <FormField name=\"title\" />\n    </Form>\n  );\n}\n")))),(0,r.kt)(s.Z,{value:"Update",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { schema, Endpoint } from '@rest-hooks/endpoint';\n\nconst todoUpdate = new Endpoint(\n  ({ id }: { id: number }, body: FormData) =>\n    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {\n      method: 'PUT',\n      body,\n    }).then(res => res.json()),\n  { schema: Todo, sideEffect: true },\n);\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Example Usage")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useController } from 'rest-hooks';\n\nexport default function UpdateTodoForm({ id }: { id: number }) {\n  const todo = useSuspense(todoDetail, { id });\n  const { fetch } = useController();\n  return (\n    <Form\n      onSubmit={e => fetch(todoUpdate, { id }, new FormData(e.target))}\n      initialValues={todo}\n    >\n      <FormField name=\"title\" />\n    </Form>\n  );\n}\n")))),(0,r.kt)(s.Z,{value:"Delete",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { schema, Endpoint } from '@rest-hooks/endpoint';\n\nconst todoDelete = new Endpoint(\n  ({ id }: { id: number }) =>\n    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {\n      method: 'DELETE',\n    }).then(() => ({ id })),\n  { schema: new schema.Delete(Todo), sideEffect: true },\n);\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Example Usage")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useController } from 'rest-hooks';\nimport ArticleResource from 'resources/article';\n\nexport default function TodoWithDelete({ todo }: { todo: Todo }) {\n  const { fetch } = useController();\n  return (\n    <div>\n      {todo.title}\n      <button onClick={() => del(todoDelete, { id: todo.id })}>Delete</button>\n    </div>\n  );\n}\n"))))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Mutations automatically update the normalized cache, resulting in consistent and fresh data.")),(0,r.kt)("h2",{id:"schema"},"Schema"),(0,r.kt)("p",null,"Schemas are a declarative definition of how to ",(0,r.kt)("a",{parentName:"p",href:"../api/schema"},"process responses")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../api/schema"},"where")," to expect ",(0,r.kt)("a",{parentName:"li",href:"/docs/6.2/api/Entity"},"Entities")),(0,r.kt)("li",{parentName:"ul"},"Classes to ",(0,r.kt)("a",{parentName:"li",href:"../guides/network-transform#deserializing-fields"},"deserialize fields"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Endpoint } from '@rest-hooks/endpoint';\n\nconst fetchTodoList = (params: any) =>\n  fetch(`https://jsonplaceholder.typicode.com/todos/`).then(res => res.json());\n\nconst todoList = new Endpoint(fetchTodoList, {\n  // highlight-next-line\n  schema: [Todo],\n  sideEffect: true,\n});\n")),(0,r.kt)("p",null,"Placing our ",(0,r.kt)("a",{parentName:"p",href:"/docs/6.2/api/Entity"},"Entity")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Todo")," in an array, tells Rest Hooks to expect\nan array of ",(0,r.kt)("inlineCode",{parentName:"p"},"Todos"),"."),(0,r.kt)("p",null,"Aside from array, there are a few more 'schemas' provided for various patterns. The first two (Object and Array)\nhave shorthands of using object and array literals."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/6.2/api/Object"},"Object"),": maps with known keys"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/6.2/api/Array"},"Array"),": variably sized arrays"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/6.2/api/Union"},"Union"),": select from many different types"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/6.2/api/Values"},"Values"),": maps with any keys - variably sized"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/6.2/api/Delete"},"Delete"),": remove an entity")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/6.2/api/schema"},"Learn more")),(0,r.kt)("h3",{id:"nesting"},"Nesting"),(0,r.kt)("p",null,"Additionally, ",(0,r.kt)("a",{parentName:"p",href:"/docs/6.2/api/Entity"},"Entities")," themselves can specify ",(0,r.kt)("a",{parentName:"p",href:"/docs/6.2/guides/nested-response"},"nested")," ",(0,r.kt)("a",{parentName:"p",href:"/docs/6.2/api/schema"},"schemas"),"\nby specifying a ",(0,r.kt)("a",{parentName:"p",href:"/docs/6.2/api/Entity#schema"},"static schema")," member."),(0,r.kt)(o.Z,{defaultValue:"Entity",values:[{label:"Entity",value:"Entity"},{label:"Response",value:"Response"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Entity",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Entity } from '@rest-hooks/endpoint';\n\nclass Todo extends Entity {\n  readonly id: number = 0;\n  readonly user: User = User.fromJS({});\n  readonly title: string = '';\n  readonly completed: boolean = false;\n\n  pk() {\n    return `${this.id}`;\n  }\n\n  // highlight-start\n  static schema = {\n    user: User,\n  };\n  // highlight-end\n}\n\nclass User extends Entity {\n  readonly id: number = 0;\n  readonly username: string = '';\n\n  pk() {\n    return `${this.id}`;\n  }\n}\n"))),(0,r.kt)(s.Z,{value:"Response",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 5,\n  "user": {\n    "id": 10,\n    "username": "bob",\n  },\n  "title": "Write some Entities",\n  "completed": false\n}\n')))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/6.2/guides/nested-response"},"Learn more")),(0,r.kt)("h3",{id:"data-representations"},"Data Representations"),(0,r.kt)("p",null,"Additionally, any ",(0,r.kt)("inlineCode",{parentName:"p"},"newable")," class that has a toJSON() method, can be ",(0,r.kt)("a",{parentName:"p",href:"../guides/network-transform#deserializing-fields"},"used as a schema"),". This will simply construct the object during denormalization.\nThis might be useful with representations like ",(0,r.kt)("a",{parentName:"p",href:"https://mikemcl.github.io/bignumber.js/"},"bignumber")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Entity } from '@rest-hooks/endpoint';\n\nclass Todo extends Entity {\n  readonly id: number = 0;\n  readonly user: User = User.fromJS({});\n  readonly title: string = '';\n  readonly completed: boolean = false;\n  // highlight-next-line\n  readonly dueDate: Date = new Date(0);\n\n  pk() {\n    return `${this.id}`;\n  }\n\n  static schema = {\n    user: User,\n    // highlight-next-line\n    dueDate: Date,\n  };\n}\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Due to the global referential equality guarantee - construction of members only occurs once\nper update.")))}m.isMDXComponent=!0},31923:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/entities-6a366805cb88019f8204eee7e3dba618.png"}}]);