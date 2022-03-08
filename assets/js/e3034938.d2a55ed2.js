"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[63908],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=s,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,o=new Array(r);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294);function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",hidden:n,className:s},t)}},9877:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(87462),s=n(67294),r=n(72389),o=n(45860),i=n(86010);const l="tabItem_LplD";function p(e){var t,n;const{lazy:r,block:p,defaultValue:c,values:u,groupId:d,className:m}=e,h=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=u??h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,o.lx)(y,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===c?c:c??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??(null==(n=h[0])?void 0:n.props.value);if(null!==g&&!y.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:b}=(0,o.UB)(),[v,T]=(0,s.useState)(g),w=[],{blockElementScrollPositionUntilNextRender:R}=(0,o.o5)();if(null!=d){const e=k[d];null!=e&&e!==v&&y.some((t=>t.value===e))&&T(e)}const N=e=>{const t=e.currentTarget,n=w.indexOf(t),a=y[n].value;a!==v&&(R(t),T(a),null!=d&&b(d,a))},x=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;n=w[t]||w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;n=w[t]||w[w.length-1];break}}null==(t=n)||t.focus()};return s.createElement("div",{className:"tabs-container"},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},m)},y.map((e=>{let{value:t,label:n,attributes:r}=e;return s.createElement("li",(0,a.Z)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:e=>w.push(e),onKeyDown:x,onFocus:N,onClick:N},r,{className:(0,i.Z)("tabs__item",l,null==r?void 0:r.className,{"tabs__item--active":v===t})}),n??t)}))),r?(0,s.cloneElement)(h.filter((e=>e.props.value===v))[0],{className:"margin-vert--md"}):s.createElement("div",{className:"margin-vert--md"},h.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function c(e){const t=(0,r.Z)();return s.createElement(p,(0,a.Z)({key:String(t)},e))}},2951:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var a=n(87462),s=(n(67294),n(3905)),r=n(9877),o=n(58215);const i={title:"Typing REST Endpoints"},l=void 0,p={unversionedId:"guides/rest-types",id:"version-6.0/guides/rest-types",title:"Typing REST Endpoints",description:"In REST design, many operations can be performed on a given type of data.",source:"@site/versioned_docs/version-6.0/guides/rest-types.md",sourceDirName:"guides",slug:"/guides/rest-types",permalink:"/docs/6.0/guides/rest-types",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/rest-types.md",tags:[],version:"6.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1631647374,formattedLastUpdatedAt:"9/14/2021",frontMatter:{title:"Typing REST Endpoints"},sidebar:"version-6.0/docs",previous:{title:"Custom endpoints",permalink:"/docs/6.0/guides/extending-endpoints"},next:{title:"Pagination",permalink:"/docs/6.0/guides/pagination"}},c={},u=[{value:"TL;DR",id:"tldr",level:2},{value:"RestEndpoint",id:"restendpoint",level:3},{value:"Usage",id:"usage",level:3},{value:"Problem",id:"problem",level:2},{value:"Generics, static methods, and this",id:"generics-static-methods-and-this",level:2},{value:"Solution: generics",id:"solution-generics",level:2},{value:"A limitation",id:"a-limitation",level:2},{value:"Workaround",id:"workaround",level:3},{value:"As Resource",id:"as-resource",level:2},{value:"Extending and adding endpoints",id:"extending-and-adding-endpoints",level:2},{value:"Typing rules of thumb",id:"typing-rules-of-thumb",level:2}],d={toc:u};function m(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"In REST design, many operations can be performed on a given type of data."),(0,s.kt)("p",null,"Attaching these operations to the type via static methods allows"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"A singular import for both class usage, typing, and endpoints"),(0,s.kt)("li",{parentName:"ul"},"Reducing code duplication by extracting common patterns into base classes")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"../api/Resource"},"Resource")," provides one such pattern, which makes getting started\nfast. However, even if the pattern generally matches your API design, there\nare often special operations or one-off cases where additional endpoints must\nbe extended or added."),(0,s.kt)("h2",{id:"tldr"},"TL;DR"),(0,s.kt)("h3",{id:"restendpoint"},"RestEndpoint"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"../api/types#restendpoint"},"RestEndpoint")," type is provided to conveniently declare\n",(0,s.kt)("a",{parentName:"p",href:"../api/Resource"},"Resource")," ",(0,s.kt)("a",{parentName:"p",href:"../api/Endpoint"},"Endpoint"),"s."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"RestEndpoint<\n  F extends FetchFunction = RestFetch,\n  S extends Schema | undefined = Schema | undefined,\n  M extends true | undefined = true | undefined\n>\n")),(0,s.kt)("h3",{id:"usage"},"Usage"),(0,s.kt)("p",null,"Here's an example of each endpoint's return typed followed by usage. For\na full explanation, continue reading below."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource, RestEndpoint, RestFetch } from '@rest-hooks/rest';\n\nclass MyResource extends Resource {\n  static list<T extends typeof Resource>(\n    this: T,\n  ): RestEndpoint<RestFetch, SchemaList<AbstractInstanceType<T>>, undefined> {\n    return super.list();\n  }\n\n  static create<T extends typeof Resource>(\n    this: T,\n  ): RestEndpoint<\n    RestFetch<{}, Partial<AbstractInstanceType<T>>>,\n    SchemaDetail<AbstractInstanceType<T>>,\n    true\n  > {\n    return super.create();\n  }\n\n  static filteredAndPaginatedList<T extends typeof Resource>(\n    this: T,\n  ): RestEndpoint<\n    RestFetch<{ filterA: boolean; sortby: string }>,\n    { results: T[]; nextPage: string },\n    undefined\n  > {\n    return super.list().extend({ schema: { results: [this], nextPage: '' } });\n  }\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import MyResource from 'resources/MyResource';\nimport { useResource } from 'rest-hooks';\n\nconst items = useResource(MyResource.list(), {});\nconst createMy = useFetcher(MyResource.create());\nconst { results, nextPage } = useResource(\n  MyResource.filteredAndPaginatedList(),\n  { filterA: true, sortby: 'first' },\n);\n")),(0,s.kt)("h2",{id:"problem"},"Problem"),(0,s.kt)("p",null,"To reduce code bloat, make development faster, reducing maintenance costs and reduce errors it is recommended\nto share common patterns in parent classes, and only specify what is specific to a given\nresource in that resource's class. Oftentimes this looks like simply its expected members\nand a pk() definition (though if you use a common field for pk() - you can also pull that up)."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"../api/Resource"},"Resource")," is an example attempt that is useful for many common REST patterns that\ncan be further extended and easily customized like so:"),(0,s.kt)(r.Z,{defaultValue:"bloat",values:[{label:"Bloat",value:"bloat"},{label:"Gets reduced to",value:"reduced"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"bloat",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"class User {\n  readonly id: string = '';\n  readonly username: string = '';\n  readonly createdAt: Date = new Date();\n\n  pk() {\n    return this.id;\n  }\n\n  static schema = {\n    createdAt: Date,\n  };\n\n  static detail() {\n    return new Endpoint(\n      ({ id }: { id: string }) => fetch(`/user/${id}`).then(res => res.json()),\n      { schema: User },\n    );\n  }\n\n  static list() {\n    return new Endpoint(() => fetch(`/user`).then(res => res.json()), {\n      schema: [User],\n    });\n  }\n\n  // ...even more endpoints for this Resource defined below\n}\n\nclass Post extends Resource {\n  readonly id: string = '';\n  readonly title: string = '';\n  readonly content: string = '';\n\n  pk() {\n    return this.id;\n  }\n\n  static detail() {\n    return new Endpoint(\n      ({ id }: { id: string }) => fetch(`/post/${id}`).then(res => res.json()),\n      { schema: Post },\n    );\n  }\n\n  static list() {\n    return new Endpoint(() => fetch(`/post`).then(res => res.json()), {\n      schema: [Post],\n    });\n  }\n\n  // ...even more endpoints for this Resource defined below\n}\n"))),(0,s.kt)(o.Z,{value:"reduced",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"class User extends Resource {\n  readonly id: string = '';\n  readonly username: string = '';\n  readonly createdAt: Date = new Date();\n\n  pk() {\n    return this.id;\n  }\n\n  static schema = {\n    createdAt: Date,\n  };\n\n  static urlRoot = '/user';\n}\n\nclass Post extends Resource {\n  readonly id: string = '';\n  readonly title: string = '';\n  readonly content: string = '';\n\n  pk() {\n    return this.id;\n  }\n\n  static urlRoot = '/post';\n}\n")))),(0,s.kt)("p",null,"Even in this overly simplistic case we're more than halving the lines of code.\nOnce the complexities of the real world kick in, this improvement expands."),(0,s.kt)("p",null,"However, we now have a problem. Before we were explictily specifying the ",(0,s.kt)("a",{parentName:"p",href:"../api/Endpoint"},"Endpoint"),"s'\nexpected shape via the ",(0,s.kt)("a",{parentName:"p",href:"../api/schema"},"schema"),". Now it if we use the common methods like .detail()\nwe lose our typing information."),(0,s.kt)("h2",{id:"generics-static-methods-and-this"},"Generics, static methods, and this"),(0,s.kt)("p",null,"To explain the solution - generic ",(0,s.kt)("inlineCode",{parentName:"p"},"this")," - let's simplify the example."),(0,s.kt)("p",null,"Here we'll define a static method that returns the type of the class - ",(0,s.kt)("inlineCode",{parentName:"p"},"Base"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"class Base {\n  static factory(): Base {\n    const obj = new this();\n    obj.extra = 5;\n    return obj;\n  }\n}\n")),(0,s.kt)("p",null,"If we inspect the runtime value, it says the type is ",(0,s.kt)("inlineCode",{parentName:"p"},"Base"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"// type is Base\nconst obj = Base.factory();\n// print Base\nconsole.log(typeof obj);\n")),(0,s.kt)("p",null,"Now we extend that class"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"class Child extends Base {\n  another = 5;\n}\n")),(0,s.kt)("p",null,"And call the same static method"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"// type is Base\nconst obj = Child.factory();\n// print Child\nconsole.log(typeof obj);\n")),(0,s.kt)("p",null,"TypeScript will implicitly type ",(0,s.kt)("inlineCode",{parentName:"p"},"obj")," as ",(0,s.kt)("inlineCode",{parentName:"p"},"Base"),", but at runtime, we can see it's really ",(0,s.kt)("inlineCode",{parentName:"p"},"Child")),(0,s.kt)("h2",{id:"solution-generics"},"Solution: generics"),(0,s.kt)("p",null,"Generics in TypeScript can be attached to parameters in any function and automatically inferred.\nSince ",(0,s.kt)("inlineCode",{parentName:"p"},"this")," is implicit, TypeScript allows you to explictly bind ",(0,s.kt)("inlineCode",{parentName:"p"},"this")," if you want a method's\nreturn type based on it:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"class Base {\n  static factory<T extends Base>(this: T): T {\n    const obj = new this();\n    obj.extra = 5;\n    return obj;\n  }\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"// type is Child\nconst obj = Child.factory();\n// print Child\nconsole.log(typeof obj);\n")),(0,s.kt)("p",null,"Now when we call the method defined in ",(0,s.kt)("inlineCode",{parentName:"p"},"Base")," on any descendant, it is typed appropriately!"),(0,s.kt)("h2",{id:"a-limitation"},"A limitation"),(0,s.kt)("p",null,"While generic ",(0,s.kt)("inlineCode",{parentName:"p"},"this")," is powerful in allowing correct typing even for inherited classes, it\nhas one annoying bug: ",(0,s.kt)("inlineCode",{parentName:"p"},"super")," calls incorrectly resolve to the constraint, rather than the generic."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"class Child extends Base {\n  extra: number = 0;\n\n  static factory<T extends Base>(this: T): T {\n    const obj = super.factory();\n    obj.extra = 2;\n    // @ts-expect-error - typescript says obj is not compatible with T\n    return obj;\n  }\n}\n")),(0,s.kt)("h3",{id:"workaround"},"Workaround"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"any")," is mostly to be avoided, but since we are careful to type our return\ntype correctly in the method, we can be confident the rest of our code will\nstill be protected."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"class Child extends Base {\n  extra: number = 0;\n\n  static factory<T extends Base>(this: T): T {\n    const obj = super.factory();\n    obj.extra = 2;\n    return obj as any;\n  }\n}\n")),(0,s.kt)("p",null,"This is only needed if we are setting the type directly from the super call.\nWe'll see below we only need to do this when we retain the schema from the super call.\nThis is also not necessary if ",(0,s.kt)("inlineCode",{parentName:"p"},"this.method()")," is called as this bug ",(0,s.kt)("em",{parentName:"p"},"only")," affects ",(0,s.kt)("inlineCode",{parentName:"p"},"super")),(0,s.kt)("h2",{id:"as-resource"},"As Resource"),(0,s.kt)("p",null,"Applying this to our original example, we get something along the lines of:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"class Resource {\n  static detail<T extends typeof Resource>(this: T) {\n    return new Endpoint(\n      props => fetch(this.url(props)).then(res => res.json()),\n      { schema: this },\n    );\n  }\n\n  static list<T extends typeof Resource>(this: T) {\n    return new Endpoint(\n      props => fetch(this.listUrl(props)).then(res => res.json()),\n      { schema: [this] },\n    );\n  }\n}\n")),(0,s.kt)("h2",{id:"extending-and-adding-endpoints"},"Extending and adding endpoints"),(0,s.kt)("p",null,"This means any time we define our own ",(0,s.kt)("a",{parentName:"p",href:"./extending-endpoints"},"custom endpoints")," we should\nbe sure to include generics so the types are alwalys correct."),(0,s.kt)("p",null,"For instance, we can change the expected response of the API to have the resource\ninside the 'data' attribute:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"class User extends Resource {\n  static detail<T extends typeof Resource>(this: T) {\n    return super.detail().extend({ schema: { data: this } });\n  }\n}\n")),(0,s.kt)("p",null,"If we were to explicitly type thing, we could use ",(0,s.kt)("inlineCode",{parentName:"p"},"RestEndpoint")),(0,s.kt)(r.Z,{defaultValue:"Schema",values:[{label:"Schema",value:"Schema"},{label:"Parameters",value:"Parameters"},{label:"Mutate",value:"Mutate"},{label:"Payload/Body",value:"Payload/Body"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"Schema",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"// typeof result is { data: User }\nconst result = useResource(User.detail(), { id });\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { RestEndpoint, RestFetch, Resource } from '@rest-hooks/rest';\n\nclass User extends Resource {\n  static detail<T extends typeof Resource>(\n    this: T,\n  ): RestEndpoint<RestFetch, { data: T }, undefined> {\n    return super.detail().extend({ schema: { data: this } });\n  }\n}\n\nconst { data: user } = useResource(User.detail(), { id: '5' });\n"))),(0,s.kt)(o.Z,{value:"Parameters",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"// typeof id is string\nconst result = useResource(User.detail(), { id });\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { RestEndpoint, RestFetch, Resource } from '@rest-hooks/rest';\n\nclass User extends Resource {\n  static detail<T extends typeof Resource>(\n    this: T,\n  ): RestEndpoint<\n    RestFetch<{ id: string }>,\n    SchemaDetail<AbstractInstanceType<T>>,\n    undefined\n  > {\n    // super.detail() resolves the Schema to be based on `typeof Resource`, rather than `T`\n    // which makes it incompatible with the return type correctly specified.\n    return super.detail() as any;\n  }\n}\n\nconst { data: user } = useResource(User.detail(), { id: '5' });\n"))),(0,s.kt)(o.Z,{value:"Mutate",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"// works\nconst updateUser = useFetcher(User.update());\n// typeerror - protected against mutable operations\nconst user = useResource(User.update());\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { RestEndpoint, RestFetch, Resource } from '@rest-hooks/rest';\n\nclass User extends Resource {\n  static update<T extends typeof Resource>(\n    this: T,\n  ): RestEndpoint<RestFetch, T, true> {\n    // super.update() resolves the Schema to be based on `typeof Resource`, rather than `T`\n    // which makes it incompatible with the return type correctly specified.\n    return super.update() as any;\n  }\n}\n\nconst { data: user } = useResource(User.detail(), { id: '5' });\n"))),(0,s.kt)(o.Z,{value:"Payload/Body",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"const updateUser = useFetcher(User.update());\n\nconst handleClick = useCallback(() => {\n  // works\n  const response = await updateUser({ id }, { username: 'bob' });\n  // typeerror\n  const failed = await updateUser({ id }, { username: 5 });\n  // typeerror\n  const failed = await updateUser({ id }, { usernme: 'bob' });\n}, [updateUser]);\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { RestEndpoint, RestFetch, Resource } from '@rest-hooks/rest';\n\nclass User extends Resource {\n  static update<T extends typeof Resource>(\n    this: T,\n  ): RestEndpoint<RestFetch<object, { username: string }>, T, true> {\n    // super.update() resolves the Schema to be based on `typeof Resource`, rather than `T`\n    // which makes it incompatible with the return type correctly specified.\n    return super.update() as any;\n  }\n}\n\nconst { data: user } = useResource(User.detail(), { id: '5' });\n")))),(0,s.kt)("h2",{id:"typing-rules-of-thumb"},"Typing rules of thumb"),(0,s.kt)("p",null,"Generally you want to type return values as specific as possible, but accept\nfunction arguments as loose as possible (like in hooks). To follow this principal:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"../api/types#restendpoint"},"RestEndpoint")," for endpoints in ",(0,s.kt)("a",{parentName:"li",href:"../api/Resource"},"Resource"),"s"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"../api/types#endpointinstance"},"EndpointInstance")," for anything that uses the ",(0,s.kt)("a",{parentName:"li",href:"../api/Endpoint"},"Endpoint")," class."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"../api/types#endpointinterface"},"EndpointInterface")," for any hook arguments")))}m.isMDXComponent=!0}}]);