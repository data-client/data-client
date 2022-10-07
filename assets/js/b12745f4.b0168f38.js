"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[73919],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=a.createContext({}),u=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(t),m=i,h=c["".concat(o,".").concat(m)]||c[m]||d[m]||r;return t?a.createElement(h,s(s({ref:n},p),{},{components:t})):a.createElement(h,s({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,s=new Array(r);s[0]=c;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var u=2;u<r;u++)s[u]=t[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},42531:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=t(87462),i=(t(67294),t(3905));const r={title:"Values"},s=void 0,l={unversionedId:"api/Values",id:"version-4.2/api/Values",title:"Values",description:"Like Array, Values are unbounded in size. The definition here describes the types of values to expect,",source:"@site/versioned_docs/version-4.2/api/Values.md",sourceDirName:"api",slug:"/api/Values",permalink:"/docs/4.2/api/Values",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/Values.md",tags:[],version:"4.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"Sep 6, 2021",frontMatter:{title:"Values"}},o={},u=[{value:"Instance Methods",id:"instance-methods",level:2},{value:"Usage",id:"usage",level:2},{value:"Output",id:"output",level:4},{value:"Dynamic entity types",id:"dynamic-entity-types",level:3},{value:"string schemaAttribute",id:"string-schemaattribute",level:4},{value:"function schemaAttribute",id:"function-schemaattribute",level:4},{value:"Output",id:"output-1",level:4}],p={toc:u};function d(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Like ",(0,i.kt)("a",{parentName:"p",href:"./Array"},"Array"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Values")," are unbounded in size. The definition here describes the types of values to expect,\nwith keys being any string."),(0,i.kt)("p",null,"Describes a map whose values follow the given schema."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"definition"),": ",(0,i.kt)("strong",{parentName:"li"},"required")," A singular schema that this array contains ",(0,i.kt)("em",{parentName:"li"},"or")," a mapping of schema to attribute values."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"schemaAttribute"),": ",(0,i.kt)("em",{parentName:"li"},"optional")," (required if ",(0,i.kt)("inlineCode",{parentName:"li"},"definition")," is not a singular schema) The attribute on each entity found that defines what schema, per the definition mapping, to use when normalizing.\nCan be a string or a function. If given a function, accepts the following arguments:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"value"),": The input value of the entity."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"parent"),": The parent object of the input array."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key"),": The key at which the input array appears on the parent object.")))),(0,i.kt)("h2",{id:"instance-methods"},"Instance Methods"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"define(definition)"),": When used, the ",(0,i.kt)("inlineCode",{parentName:"li"},"definition")," passed in will be merged with the original definition passed to the ",(0,i.kt)("inlineCode",{parentName:"li"},"Values")," constructor. This method tends to be useful for creating circular references in schema.")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const data = { firstThing: { id: 1 }, secondThing: { id: 2 } };\n\nclass Item extends Entity {\n  readonly id: number = 0;\n  pk() { return `${this.id}` };\n}\nconst valuesSchema = new schema.Values(Item);\n\nconst normalizedData = normalize(data, valuesSchema);\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const data = { firstThing: { id: 1 }, secondThing: { id: 2 } };\n\nclass Item extends Entity {\n  pk() { return this.id };\n}\nconst valuesSchema = new schema.Values(Item);\n\nconst normalizedData = normalize(data, valuesSchema);\n")),(0,i.kt)("h4",{id:"output"},"Output"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"{\n  entities: {\n    Item: { '1': { id: 1 }, '2': { id: 2 } }\n  },\n  result: { firstThing: 1, secondThing: 2 }\n}\n")),(0,i.kt)("h3",{id:"dynamic-entity-types"},"Dynamic entity types"),(0,i.kt)("p",null,"If your input data is an object that has values of more than one type of entity, but their schema is not easily defined by the key, you can use a mapping of schema, much like ",(0,i.kt)("inlineCode",{parentName:"p"},"schema.Union")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"schema.Array"),"."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note: If your data returns an object that you did not provide a mapping for, the original object will be returned in the result and an entity will not be created.")),(0,i.kt)("h4",{id:"string-schemaattribute"},"string schemaAttribute"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const data = {\n  '1': { id: 1, type: 'admin' },\n  '2': { id: 2, type: 'user' }\n};\n\nclass User extends Entity {\n  readonly id: number = 0;\n  readonly type = 'user' as const;\n  pk() { return `${this.id}`; }\n}\nclass Admin extends Entity {\n  readonly id: number = 0;\n  readonly type = 'admin' as const;\n  pk() { return `${this.id}`; }\n}\nconst valuesSchema = new schema.Values(\n  {\n    admin: Admin,\n    user: User\n  },\n  'type'\n);\n\nconst normalizedData = normalize(data, valuesSchema);\n")),(0,i.kt)("h4",{id:"function-schemaattribute"},"function schemaAttribute"),(0,i.kt)("p",null,"The return values should match a key in the ",(0,i.kt)("inlineCode",{parentName:"p"},"definition"),". Here we'll show the same behavior as the 'string'\ncase, except we'll append an 's'."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const data = {\n  '1': { id: 1, type: 'admin' },\n  '2': { id: 2, type: 'user' }\n};\n\nclass User extends Entity {\n  readonly id: number = 0;\n  readonly type = 'user' as const;\n  pk() { return `${this.id}`; }\n}\nclass Admin extends Entity {\n  readonly id: number = 0;\n  readonly type = 'admin' as const;\n  pk() { return `${this.id}`; }\n}\nconst valuesSchema = new schema.Values(\n  {\n    admins: Admin,\n    users: User\n  },\n  (input: any, parent: unknown, key: string) => `${input.type}s`\n);\n\nconst normalizedData = normalize(data, valuesSchema);\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const data = {\n  '1': { id: 1, type: 'admin' },\n  '2': { id: 2, type: 'user' }\n};\n\nclass User extends Entity {\n  pk() { return this.id; }\n}\nclass Admin extends Entity {\n  pk() { return this.id; }\n}\nconst valuesSchema = new schema.Values(\n  {\n    admins: Admin,\n    users: User\n  },\n  (input, parent, key) => `${input.type}s`\n);\n\nconst normalizedData = normalize(data, valuesSchema);\n")),(0,i.kt)("h4",{id:"output-1"},"Output"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"{\n  entities: {\n    Admin: { '1': { id: 1, type: 'admin' } },\n    User: { '2': { id: 2, type: 'user' } }\n  },\n  result: {\n    '1': { id: 1, schema: 'Admin' },\n    '2': { id: 2, schema: 'User' }\n  }\n}\n")))}d.isMDXComponent=!0}}]);