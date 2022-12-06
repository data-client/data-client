(self.webpackChunk=self.webpackChunk||[]).push([[74914],{15960:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=n(87462),a=(n(27378),n(3905)),s=(n(65559),n(30433),n(47885),n(90008)),i=n(41191);const o={title:"schema.Array"},l=void 0,c={unversionedId:"api/Array",id:"api/Array",title:"schema.Array",description:"schema.Array - Representing Arrays | Rest Hooks",source:"@site/../docs/rest/api/Array.md",sourceDirName:"api",slug:"/api/Array",permalink:"/rest/api/Array",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/rest/api/Array.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1667922965,formattedLastUpdatedAt:"Nov 8, 2022",frontMatter:{title:"schema.Array"},sidebar:"docs",previous:{title:"schema.Object",permalink:"/rest/api/Object"},next:{title:"schema.Union",permalink:"/rest/api/Union"}},u={},d=[{value:"Instance Methods",id:"instance-methods",level:2},{value:"Usage",id:"usage",level:2},{value:"Polymorphic types",id:"polymorphic-types",level:3},{value:"string schemaAttribute",id:"string-schemaattribute",level:4},{value:"function schemaAttribute",id:"function-schemaattribute",level:4}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"schema.Array - Representing Arrays | Rest Hooks")),(0,a.kt)("p",null,"Creates a schema to normalize an array of schemas. If the input value is an ",(0,a.kt)("a",{parentName:"p",href:"/rest/api/Object"},"Object")," instead of an ",(0,a.kt)("inlineCode",{parentName:"p"},"Array"),",\nthe normalized result will be an ",(0,a.kt)("inlineCode",{parentName:"p"},"Array")," of the ",(0,a.kt)("a",{parentName:"p",href:"/rest/api/Object"},"Object"),"'s values."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note: The same behavior can be defined with shorthand syntax: ",(0,a.kt)("inlineCode",{parentName:"em"},"[ mySchema ]"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"definition"),": ",(0,a.kt)("strong",{parentName:"li"},"required")," A singular schema that this array contains ",(0,a.kt)("em",{parentName:"li"},"or")," a mapping of attribute values to schema."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"schemaAttribute"),": ",(0,a.kt)("em",{parentName:"li"},"optional")," (required if ",(0,a.kt)("inlineCode",{parentName:"li"},"definition")," is not a singular schema) The attribute on each entity found that defines what schema, per the definition mapping, to use when normalizing.\nCan be a string or a function. If given a function, accepts the following arguments:\n",(0,a.kt)("em",{parentName:"li"}," ",(0,a.kt)("inlineCode",{parentName:"em"},"value"),": The input value of the entity.\n")," ",(0,a.kt)("inlineCode",{parentName:"li"},"parent"),": The parent object of the input array. ","*"," ",(0,a.kt)("inlineCode",{parentName:"li"},"key"),": The key at which the input array appears on the parent object.")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"For unbounded collections with ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," keys, use ",(0,a.kt)("a",{parentName:"p",href:"/rest/api/Values"},"schema.Values"))),(0,a.kt)("h2",{id:"instance-methods"},"Instance Methods"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"define(definition)"),": When used, the ",(0,a.kt)("inlineCode",{parentName:"li"},"definition")," passed in will be merged with the original definition passed to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Array")," constructor. This method tends to be useful for creating circular references in schema.")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"To describe a simple array of a singular entity type:"),(0,a.kt)(s.Z,{groupId:"schema",defaultOpen:"y",fixtures:[{endpoint:new i.Z({path:"/users"}),args:[],response:[{id:"123",name:"Jim"},{id:"456",name:"Jane"}],delay:150}],mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="Users.tsx"',title:'"Users.tsx"'},"export class User extends Entity {\n  id = '';\n  name = '';\n  pk() {\n    return this.id;\n  }\n}\nexport const getUsers = new RestEndpoint({\n  path: '/users',\n  schema: new schema.Array(User),\n});\nfunction UsersPage() {\n  const users = useSuspense(getUsers);\n  return (\n    <div>\n      {users.map(user => (\n        <div key={user.pk()}>{user.name}</div>\n      ))}\n    </div>\n  );\n}\nrender(<UsersPage />);\n"))),(0,a.kt)("h3",{id:"polymorphic-types"},"Polymorphic types"),(0,a.kt)("p",null,"If your input data is an array of more than one type of entity, it is necessary to define a schema mapping."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If your data returns an object that you did not provide a mapping for, the original object will be returned in the result and an entity will not be created.")),(0,a.kt)("h4",{id:"string-schemaattribute"},"string schemaAttribute"),(0,a.kt)(s.Z,{groupId:"schema",defaultOpen:"y",fixtures:[{endpoint:new i.Z({path:"/feed"}),args:[],response:[{id:1,type:"link",url:"https://ntucker.true.io",title:"Nate site"},{id:10,type:"post",content:"good day!"}],delay:150}],mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="api/Feed.ts"',title:'"api/Feed.ts"'},"export abstract class FeedItem extends Entity {\n  readonly id: number = 0;\n  declare readonly type: 'link' | 'post';\n  pk() {\n    return `${this.id}`;\n  }\n}\nexport class Link extends FeedItem {\n  readonly type = 'link' as const;\n  readonly url: string = '';\n  readonly title: string = '';\n}\nexport class Post extends FeedItem {\n  readonly type = 'post' as const;\n  readonly content: string = '';\n}\nexport const getFeed = new RestEndpoint({\n  path: '/feed',\n  schema: new schema.Array(\n    {\n      link: Link,\n      post: Post,\n    },\n    'type',\n  ),\n});\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="FeedList.tsx" collapsed',title:'"FeedList.tsx"',collapsed:!0},"import { getFeed, Link, Post } from './api/Feed';\n\nfunction FeedList() {\n  const feedItems = useSuspense(getFeed);\n  return (\n    <div>\n      {feedItems.map(item =>\n        item.type === 'link' ? (\n          <LinkItem link={item} key={item.pk()} />\n        ) : (\n          <PostItem post={item} key={item.pk()} />\n        ),\n      )}\n    </div>\n  );\n}\nfunction LinkItem({ link }: { link: Link }) {\n  return <a href={link.url}>{link.title}</a>;\n}\nfunction PostItem({ post }: { post: Post }) {\n  return <div>{post.content}</div>;\n}\nrender(<FeedList />);\n"))),(0,a.kt)("h4",{id:"function-schemaattribute"},"function schemaAttribute"),(0,a.kt)("p",null,"The return values should match a key in the ",(0,a.kt)("inlineCode",{parentName:"p"},"definition"),". Here we'll show the same behavior as the 'string'\ncase, except we'll append an 's'."),(0,a.kt)(s.Z,{groupId:"schema",defaultOpen:"y",fixtures:[{endpoint:new i.Z({path:"/feed"}),args:[],response:[{id:1,type:"link",url:"https://ntucker.true.io",title:"Nate site"},{id:10,type:"post",content:"good day!"}],delay:150}],mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="api/Feed.ts"',title:'"api/Feed.ts"'},"export abstract class FeedItem extends Entity {\n  readonly id: number = 0;\n  declare readonly type: 'link' | 'post';\n  pk() {\n    return `${this.id}`;\n  }\n}\nexport class Link extends FeedItem {\n  readonly type = 'link' as const;\n  readonly url: string = '';\n  readonly title: string = '';\n}\nexport class Post extends FeedItem {\n  readonly type = 'post' as const;\n  readonly content: string = '';\n}\nexport const getFeed = new RestEndpoint({\n  path: '/feed',\n  schema: new schema.Array(\n    {\n      links: Link,\n      posts: Post,\n    },\n    (input: Link | Post, parent, key) => `${input.type}s`,\n  ),\n});\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="FeedList.tsx" collapsed',title:'"FeedList.tsx"',collapsed:!0},"import { getFeed, Link, Post } from './api/Feed';\n\nfunction FeedList() {\n  const feedItems = useSuspense(getFeed);\n  return (\n    <div>\n      {feedItems.map(item =>\n        item.type === 'link' ? (\n          <LinkItem link={item} key={item.pk()} />\n        ) : (\n          <PostItem post={item} key={item.pk()} />\n        ),\n      )}\n    </div>\n  );\n}\nfunction LinkItem({ link }: { link: Link }) {\n  return <a href={link.url}>{link.title}</a>;\n}\nfunction PostItem({ post }: { post: Post }) {\n  return <div>{post.content}</div>;\n}\nrender(<FeedList />);\n"))))}m.isMDXComponent=!0},30433:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(67294),a=n(86010),s="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(s,i),hidden:n},t)}},65559:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(87462),a=n(67294),s=n(86010),i=n(5730),o=n(20636),l=n(76602),c=n(63735),u="tabList__CuJ",d="tabItem_LNqP";function p(e){const{lazy:t,block:n,defaultValue:i,values:p,groupId:m,className:h}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=p??f.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),y=(0,o.l)(g,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===i?i:i??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==b&&!g.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:v}=(0,l.U)(),[E,x]=(0,a.useState)(b),w=[],{blockElementScrollPositionUntilNextRender:Z}=(0,c.o5)();if(null!=m){const e=k[m];null!=e&&e!==E&&g.some((t=>t.value===e))&&x(e)}const N=e=>{const t=e.currentTarget,n=w.indexOf(t),r=g[n].value;r!==E&&(Z(t),x(r),null!=m&&v(m,String(r)))},C=e=>{let t=null;switch(e.key){case"Enter":N(e);break;case"ArrowRight":{const n=w.indexOf(e.currentTarget)+1;t=w[n]??w[0];break}case"ArrowLeft":{const n=w.indexOf(e.currentTarget)-1;t=w[n]??w[w.length-1];break}}t?.focus()};return a.createElement("div",{className:(0,s.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},h)},g.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>w.push(e),onKeyDown:C,onClick:N},i,{className:(0,s.Z)("tabs__item",d,i?.className,{"tabs__item--active":E===t})}),n??t)}))),t?(0,a.cloneElement)(f.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function m(e){const t=(0,i.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},69762:(e,t,n)=>{"use strict";const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]});t.Z=r},90008:(e,t,n)=>{"use strict";n.d(t,{Z:()=>U});var r=n(67294),a=n(87462),s=n(99401),i=n(11614),o=n(6832),l=n(86010),c=n(49544),u=n(69762),d=n(45045),p=n(13743),m=n(45440);function h(e){let{fixtures:t}=e;return r.createElement("div",{className:m.Z.fixtureBlock},t.map((e=>r.createElement("div",{key:e.endpoint.key(...e.args),className:m.Z.fixtureItem},r.createElement("div",{className:m.Z.fixtureHeader},e.endpoint.key(...e.args)),r.createElement(g,{fixture:e})))))}var f=(0,r.memo)(h);function g(e){let{fixture:t}=e;return"function"==typeof t.response?"function":r.createElement(p.Z,{language:"json",className:m.Z.fixtureJson},JSON.stringify(t.response))}var y=n(62974);function b(){return r.createElement(r.Fragment,null,r.createElement("script",{dangerouslySetInnerHTML:{__html:v},type:"application/javascript"}))}var k=(0,r.memo)(b);const v=`\nif (!/bot|googlebot|crawler|spider|robot|crawling|Mobile|Android|BlackBerry/i.test(\n  navigator.userAgent,\n) && !window.monacoPreloaded) {\n[${["https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/editor/editor.main.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/editor/editor.main.nls.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/basic-languages/typescript/typescript.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/language/typescript/tsMode.js"].map((e=>`'${e}'`)).join(",")}].forEach(href => {\nwindow.monacoPreloaded = true;\nvar link = document.createElement("link");\nlink.href = href;\nlink.rel = "preload";\nlink.as = href.endsWith('.js') ? 'script' : 'style';\ndocument.head.appendChild(link);\n});\n[${["https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/base/worker/workerMain.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/language/typescript/tsWorker.js"].map((e=>`'${e}'`)).join(",")}].forEach(href => {\nwindow.monacoPreloaded = true;\nvar link = document.createElement("link");\nlink.href = href;\nlink.rel = "prefetch";\nlink.as = 'script';\ndocument.head.appendChild(link);\n});\n}\n`;var E=n(76226),x=n(30573);let w;if("undefined"!=typeof window&&!/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent)){const e=["rest","core","react","endpoint","normalizr","graphql","hooks"],t=["react","rest-hooks","@rest-hooks/rest","@rest-hooks/react","@rest-hooks/graphql","@rest-hooks/hooks","bignumber.js"];if(!w){const r=x.Z.init();r.then((e=>{e&&(w=e,e.languages.typescript.typescriptDefaults.setCompilerOptions({allowNonTsExtensions:!0,target:e.languages.typescript.ScriptTarget.ES2017,jsx:e.languages.typescript.JsxEmit.React,strict:!0,strictNullChecks:!0,exactOptionalPropertyTypes:!0,lib:["dom","esnext"],module:e.languages.typescript.ModuleKind.ESNext,moduleResolution:e.languages.typescript.ModuleResolutionKind.NodeJs,typeRoots:["node_modules/@types"],allowSyntheticDefaultImports:!0,skipLibCheck:!0,noImplicitAny:!1}),e.editor.defineTheme("prism",{base:"vs-dark",inherit:!0,rules:[{token:"number",foreground:"f78c6c"},{token:"string",foreground:"b6d986"},{token:"keyword",fontStyle:"italic",foreground:"7da4f6"},{token:"type",foreground:"ffcb6b"},{token:"delimiter",foreground:"C792EA"},{token:"tag",foreground:"FF5590"}],colors:{"editor.foreground":"#bfc7d5","editor.inactiveSelectionBackground":"#484d5b"}}),e.languages.registerCompletionItemProvider("typescript",{triggerCharacters:["'",'"',".","/"],provideCompletionItems:(n,r)=>{const a=n.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:r.lineNumber,endColumn:r.column});if(/(([\s|\n]+from\s+)|(\brequire\b\s*\())["|'][^'^"]*$/.test(a)){if(a.endsWith(".")||a.endsWith("/")){const t=e.editor.getModels().map((e=>e.uri.path)).map((t=>{const n=/\/\d+\//g.exec(t)?.[0]??"",r=t.substring(n.length-1);return{label:r,insertText:r.replace(/\.tsx?$/,""),kind:e.languages.CompletionItemKind.Module}}));if(!t.length)return;return{suggestions:t}}return{suggestions:t.map((t=>({label:t,kind:e.languages.CompletionItemKind.Module,insertText:t})))}}}}))})),Promise.allSettled([r,n.e(37956).then(n.t.bind(n,70637,23)),n.e(49033).then(n.t.bind(n,7712,23)),n.e(42713).then(n.t.bind(n,93716,23)),n.e(78789).then(n.t.bind(n,52031,23)),...e.map((e=>n(73795)(`./${e}.d.ts`)))]).then((t=>{let[n,...r]=t;if("fulfilled"!==n.status||!n.value)return;const a=n.value,[s,i,o,l,...c]=r.map((e=>"fulfilled"===e.status?e.value.default:""));return a.languages.typescript.typescriptDefaults.addExtraLib("declare module \"react/jsx-runtime\" {\n        import './';\n      }","file:///node_modules/@types/react/jsx-runtime.d.ts"),a.languages.typescript.typescriptDefaults.addExtraLib("import * as React from 'react'\n\n    declare global {\n      namespace JSX {\n        interface IntrinsicElements {\n          strike: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;\n        }\n      }\n    }","file:///node_modules/@types/react/more.d.ts"),a.languages.typescript.typescriptDefaults.addExtraLib("declare function render(component:JSX.Element):void;\n        declare function CurrentTime(props: {}):JSX.Element;\n        declare function ResetableErrorBoundary(props: { children: JSX.ReactChild }):JSX.Element;\n        declare function randomFloatInRange(min: number, max: number, decimals?: number): number;"),a.languages.typescript.typescriptDefaults.addExtraLib(s,"es2022"),a.languages.typescript.typescriptDefaults.addExtraLib(`declare module "react" { ${i} }`,"file:///node_modules/@types/react/index.d.ts"),a.languages.typescript.typescriptDefaults.addExtraLib(`declare module "bignumber.js" { ${o} }`,"file:///node_modules/bignumber.js/index.d.ts"),a.languages.typescript.typescriptDefaults.addExtraLib(`declare module "rest-hooks" { ${l} }`,"file:///node_modules/rest-hooks/index.d.ts"),a.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${i} }`),c.forEach(((t,n)=>{const r=e[n];a.languages.typescript.typescriptDefaults.addExtraLib(`declare module "@rest-hooks/${r}" { ${t} }`,`file:///node_modules/@rest-hooks/${t}/index.d.ts`),["rest","react"].includes(r)&&a.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${t} }`)})),a.languages.typescript.typescriptDefaults.setEagerModelSync(!0),a}))}}const Z=(0,r.memo)(E.ZP);const N={scrollbar:{alwaysConsumeMouseWheel:!1},minimap:{enabled:!1},wordWrap:"on",scrollBeyondLastLine:!1,wrappingIndent:"indent",lineNumbers:"off",folding:!1,fontLigatures:!0,fontFamily:'"Roboto Mono",SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',fontSize:"13px",lineHeight:19};const C=(0,r.memo)(c.uz);var I=n(3495).Z?function(e){let{onChange:t,code:n,path:a,autoFocus:s=!1,...i}=e;a.endsWith(".tsx")||a.endsWith(".ts")||(a+=".tsx"),function(e,t){const n=function(e){const t=(0,E.Ik)(),n=(0,r.useRef)();return(0,r.useEffect)((()=>{t&&t.languages.typescript.getTypeScriptWorker().then((e=>e())).then((e=>{n.current=e}))}),[t]),n}();(0,r.useCallback)((function(){n.current&&e(n.current)}),t)}((e=>{e.getEmitOutput(`file:///${a}`).then((e=>{t(e.outputFiles[0].text)}))}),[t,a]);const[o,l]=(0,r.useState)("100%"),u=(0,r.useCallback)((e=>{s&&e.focus();const t=Object.keys(i).map((e=>/\{(\d+)\}/.exec(e)?.[1])).filter(Boolean);t.length&&e.setSelections(t.map((e=>{const t=Number.parseInt(e,10);return{selectionStartLineNumber:t,selectionStartColumn:0,positionLineNumber:t+1,positionColumn:0}})));const n=e.getDomNode(),r=n.getElementsByClassName("view-lines")[0];let a=0;const o=19*e.getModel().getLineCount()+10;n.style.height=o+"px",l(o),e.layout(),e.onDidChangeModelDecorations((()=>{setTimeout((()=>{const t=19*r.childElementCount+10;a=r.childElementCount,n.style.height=t+"px",l(o),e.layout()}),0)}))}),[]);return r.createElement(Z,{path:a,defaultLanguage:"typescript",onChange:t,defaultValue:n,options:N,theme:"prism",onMount:u,height:o,loading:r.createElement(c.uz,{language:"tsx",code:n,disabled:!0})})}:function(e){let{onChange:t,code:n}=e;return r.createElement(C,{onChange:t,code:n})},S=n(80086);function j(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(u.Z);return r.createElement("div",{className:m.Z.tabs,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:a,label:s}=n;return r.createElement("div",{role:"tab",tabIndex:e===a?0:-1,"aria-selected":e===a,key:a,className:(0,l.Z)(m.Z.tab,{[m.Z.selected]:e===a}),onFocus:t,onClick:t,value:a},s)})))}function A(e){let{children:t}=e;return r.createElement(y.Z,{className:m.Z.tabControls},r.createElement("div",{className:m.Z.title},t),r.createElement(j,null))}function O(e){let{title:t,fixtures:n}=e;const{values:a}=(0,r.useContext)(u.Z),s=a.length>0;return r.createElement(r.Fragment,null,n.length?r.createElement(r.Fragment,null,r.createElement(y.Z,{className:m.Z.small},"Fixtures"),r.createElement(f,{fixtures:n})):null,s?r.createElement(A,null,t):null)}function _(e){let{children:t,transformCode:n,groupId:i,defaultOpen:u,row:d,hidden:p,fixtures:h,includeEndpoints:f,...g}=e;const{liveCodeBlock:{playgroundPosition:y}}=(0,o.Z)().siteConfig.themeConfig,b=(0,s.p)();return r.createElement(r.Fragment,null,r.createElement("div",{className:(0,l.Z)(m.Z.playgroundContainer,{[m.Z.row]:d,[m.Z.hidden]:p})},r.createElement(c.nu,(0,a.Z)({theme:b},g),r.createElement(L,{reverse:"top"===y,row:d,fixtures:h,includeEndpoints:f,groupId:i,defaultOpen:u},t))),r.createElement(k,null))}function L(e){let{reverse:t,children:n,row:s,fixtures:i,includeEndpoints:o,groupId:u,defaultOpen:p}=e;const h=(0,r.useMemo)((()=>(1e4*Math.random()).toPrecision(4).toString()),[]),f=(0,r.useMemo)((()=>"string"==typeof n?[{code:n.replace(/\n$/,""),collapsed:!1}]:(Array.isArray(n)?n:[n]).filter((e=>e.props.children)).map((e=>"string"==typeof e.props.children?e.props:e.props.children.props)).map((e=>{let{children:t,title:n="",collapsed:r=!1,path:a,...s}=e;return{code:t.replace(/\n$/,""),title:n.replaceAll('"',""),collapsed:r,path:a,...s}}))),[n]),[g,y]=(0,r.useReducer)(R,void 0,(()=>f.map((e=>{let{code:t}=e;return t})))),b=(0,r.useMemo)((()=>f.map(((e,t)=>e=>{y({i:t,code:e})}))),[f.length]),[k,v]=(0,r.useState)((()=>f.map((e=>{let{collapsed:t}=e;return t})))),E=g.join("\n");return r.createElement(F,{reverse:t},r.createElement("div",null,r.createElement(O,{fixtures:!s&&i}),s&&f.length>1?r.createElement($,{titles:f.map((e=>{let{title:t}=e;return t})),closedList:k,onClick:e=>v((t=>t.map(((t,n)=>n!==e))))}):null,f.map(((e,t)=>{let{title:n,path:i,code:o,collapsed:c,...u}=e;return r.createElement(r.Fragment,{key:t},!s&&n?r.createElement(M,{onClick:()=>v((e=>{const n=[...e];return n[t]=!n[t],n})),closed:k[t],title:n}):null,r.createElement("div",{key:t,className:(0,l.Z)(m.Z.playgroundEditor,{[m.Z.hidden]:k[t]})},r.createElement(I,(0,a.Z)({key:t,onChange:b[t],code:g[t],path:"/"+h+"/"+(i||n||"default.tsx")},u))))}))),r.createElement(d.Z,{fallback:r.createElement(c.nu,{key:"preview",code:'render(() => "Loading...");',noInline:!0},r.createElement(S.Z,{key:"preview",includeEndpoints:o,groupId:u,defaultOpen:p,row:s,fixtures:i}))},r.createElement(T,{code:E,includeEndpoints:o,groupId:u,defaultOpen:p,row:s,fixtures:i})))}O.defaultProps={title:r.createElement(i.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Editor"),fixtures:[]},_.defaultProps={row:!1,hidden:!1};const P="object"==typeof navigator&&/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator?.userAgent),T=(0,r.lazy)((()=>P?Promise.resolve({default:e=>null}):Promise.all([n.e(86429),n.e(87876),n.e(73287),n.e(26750)]).then(n.bind(n,41380))));function F(e){let{children:t,reverse:n}=e;const r=[...t];return r.reverse(),n?r:t}function R(e,t){const n=[...e];return n[t.i]=t.code,n}function M(e){let{onClick:t,closed:n,title:a}=e;return r.createElement(y.Z,{className:m.Z.small,onClick:t},r.createElement("span",{className:(0,l.Z)(m.Z.arrow,n?m.Z.right:m.Z.down)},"\u25b6"),a)}function $(e){let{titles:t,closedList:n,onClick:a}=e;const{values:s}=(0,r.useContext)(u.Z),i=s.length>0;return r.createElement(y.Z,{className:(0,l.Z)({[m.Z.small]:i,[m.Z.subtabs]:i},m.Z.noupper,m.Z.tabControls)},r.createElement("div",{className:m.Z.tabs,role:"tablist","aria-orientation":"horizontal"},t.map(((e,t)=>r.createElement("div",{role:"tab",key:t,onClick:()=>a(t),className:(0,l.Z)(m.Z.tab,{[m.Z.selected]:!n[t]})},e)))))}F.defaultProps={reverse:!1};const D=e=>{let{children:t,groupId:n,hidden:a=!1,defaultOpen:s,row:i=!1,fixtures:o}=e;return r.createElement(_,{includeEndpoints:!Array.isArray(t),noInline:!0,groupId:n,defaultOpen:s,row:i,hidden:a,fixtures:o},"string"==typeof t||Array.isArray(t)?t:t.props.children)};D.defaultProps={defaultOpen:"n",fixtures:[]};var U=(0,r.memo)(D)},47885:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(30433),a=n(65559),s=n(67294);function i(e){let{children:t}=e;return s.createElement(a.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},s.createElement(r.Z,{value:"ts"},t[0]),s.createElement(r.Z,{value:"js"},t[1]))}},45045:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(19666),a=n(67294);function s(e){let{fallback:t,children:n}=e;return a.createElement(r.Z,{fallback:t},(()=>a.createElement(a.Suspense,{fallback:t},n)))}},62974:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(67294),a=n(86010),s=n(45440);function i(e){let{children:t,className:n,onClick:i}=e;return r.createElement("div",{className:(0,a.Z)(s.Z.playgroundHeader,n,i?s.Z.clickable:null),onClick:i},t)}},80086:(e,t,n)=>{"use strict";n.d(t,{Z:()=>_});var r=n(67294),a=n(11614),s=n(92785),i=n(92954),o=n(48256),l=n(3604),c=n(39714),u=n(86010),d=n(76602),p=n(63735),m=n(45440),h=n(29451),f=n(50634),g=n(70524);function y(e){let{value:t}=e;const n="dark"===(0,g.I)().colorMode,a=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),s=(0,r.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem 0 0.8rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(227, 227, 227)"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial",padding:"7px 7px 7px 0",margin:"-7px calc(0.5em - 7px) -7px 0"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:a[t]}}},base0B:"rgb(191, 199, 213)"})),[n,a]);return r.createElement(f.L,{shouldExpandNode:b,data:t,valueRenderer:v,theme:s,hideRoot:!0})}function b(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const k="undefined"!=typeof Intl;function v(e,t){const n=arguments.length<=2?void 0:arguments[2];return k&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function E(e){let{toggle:t,selectedValue:n}=e;const a="y"===n,s=a?m.Z.right:m.Z.left;return r.createElement(r.Fragment,null,r.createElement("div",{className:m.Z.debugToggle,onClick:t},"Store",r.createElement("span",{className:(0,u.Z)(m.Z.arrow,s,m.Z.vertical)},"\u25b6")),a?r.createElement(Z,null):null)}var x=(0,r.memo)(E);function w(){const e=(0,r.useContext)(h.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,t}),[e]);return r.createElement(y,{value:t})}const Z=(0,r.memo)(w);var N=n(45045);function C(e){let{groupId:t,defaultOpen:n,row:a,fixtures:h}=e;const{tabGroupChoices:f,setTabGroupChoices:g}=(0,d.U)(),[y,b]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:k}=(0,p.o5)();if(null!=t){const e=f[t];null!=e&&e!==y&&b(e)}const v=(0,r.useCallback)((e=>{k(e.currentTarget),b((e=>"y"===e?"n":"y")),g(t,"y"===y?"n":"y")}),[k,t,y,g]),E=(0,r.useMemo)((()=>[new s.Z,new i.Z(o.Z)]),[]),w=!("n"===y||!a);return r.createElement(l.Z,{managers:E},r.createElement(c.Z,{fixtures:h,silenceMissing:!0},r.createElement("div",{className:(0,u.Z)(m.Z.playgroundPreview,{[m.Z.hidden]:w})},r.createElement(N.Z,{fallback:r.createElement(S,null)},r.createElement(j,null))),r.createElement(x,{selectedValue:y,toggle:v})))}var I=(0,r.memo)(C);function S(){return r.createElement("div",null,"Loading...")}const j=(0,r.lazy)((()=>Promise.all([n.e(86429),n.e(87876),n.e(73287),n.e(26750)]).then(n.bind(n,15929))));var A=n(62974);function O(e){let{groupId:t,defaultOpen:n,row:s,fixtures:i}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(A.Z,null,r.createElement(a.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),r.createElement("div",{className:m.Z.playgroundResult},r.createElement(I,{groupId:t,defaultOpen:n,row:s,fixtures:i})))}var _=(0,r.memo)(O)},3495:(e,t)=>{"use strict";const n="undefined"!=typeof window&&!/bot|googlebot|crawler|spider|robot|crawling|Mobile|Android|BlackBerry/i.test(navigator.userAgent);t.Z=n},57489:(e,t,n)=>{"use strict";var r=n(67294),a=n(64820);const s={React:r,...r,...a};t.Z=s},45440:(e,t)=>{"use strict";t.Z={playgroundContainer:"playgroundContainer_sLUA",playgroundHeader:"playgroundHeader_Zx4K",tabControls:"tabControls_trxh",row:"row_YGZs",hidden:"hidden_Hh8i",small:"small_xksL",clickable:"clickable_YHiX",noupper:"noupper_WDCF",subtabs:"subtabs_XtJb",playgroundEditor:"playgroundEditor_lYwu",closed:"closed_QJMa",arrow:"arrow_tivA",vertical:"vertical_OMeC",right:"right_vs_C",left:"left_iDcB",up:"up_H4F7",down:"down_oRky",playgroundPreview:"playgroundPreview_rk9R",playgroundError:"playgroundError_sRnA",playgroundResult:"playgroundResult_tefG",debugToggle:"debugToggle_zlro",title:"title_poUY",tabs:"tabs_m54V",tab:"tab_bTGw",selected:"selected_QXZk",fixtureBlock:"fixtureBlock_mpRK",fixtureItem:"fixtureItem_Jd6V",fixtureHeader:"fixtureHeader_KYel",fixtureJson:"fixtureJson_HnbR"}},73795:(e,t,n)=>{var r={"./core.d.ts":[90734,30007],"./endpoint.d.ts":[73118,72901],"./graphql.d.ts":[60467,99076],"./hooks.d.ts":[56890,22595],"./normalizr.d.ts":[14991,12192],"./react.d.ts":[61019,97359],"./rest.d.ts":[42714,46324]};function a(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return n.e(t[1]).then((()=>n.t(a,23)))}a.keys=()=>Object.keys(r),a.id=73795,e.exports=a},41191:(e,t,n)=>{"use strict";n.d(t,{Z:()=>x});var r=n(70760),a=n(11857);function s(e,t){e.type=e.sideEffect?"mutate":"read",e.options={...t},delete e.options.key,delete e.options.schema,delete e.options.sideEffect,delete e.options.fetch,delete e.options.getFetchKey,delete e.options.options,0===Object.keys(e.options).length&&delete e.options,void 0===e.schema&&(e.schema=null)}let i=!1;try{Function()}catch(w){i=!0}class o extends Function{constructor(e,t){let n;return i?(n=function(){return n.fetch(...arguments)},Object.setPrototypeOf(n,new.target.prototype)):(super("return arguments.callee.fetch.apply(arguments.callee, arguments)"),n=this),n.getFetchKey=e=>n.key(e),e&&(n.fetch=e),t&&"name"in t?(n.__name=t.name,delete t.name):e&&(n.__name=e.name),Object.assign(n,t),Object.defineProperty(n,"name",{get:function(){return this.__name}}),s(n,t),n}key(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return`${this.name} ${JSON.stringify(t)}`}bind(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];const a=this.fetch,s=this.key;return this.extend({fetch(){return a.apply(null!=e?e:this,n)},key(){return s.apply(this,n)}})}extend(e){class t extends this.constructor{}Object.assign(t.prototype,this);const n=new t(e.fetch,e);return s(n,{...this.options,...e}),n}}class l extends Error{constructor(e){super(e.statusText||`Network response not 'ok': ${e.status}`),this.name="NetworkError",this.status=e.status,this.response=e}}function c(e){return!("function"!=typeof e.hasOwnProperty||!(Object.hasOwnProperty.call(e,"__ownerID")||e._map&&Object.hasOwnProperty.call(e._map,"__ownerID")))}const u=e=>{let[t,,n]=e;return void 0!==t&&!n};const d=(e,t,n)=>{if(c(t))return function(e,t,n){let r=!0,a=!1;return[Object.keys(e).reduce(((t,s)=>{const i=`${s}`,[o,l,c]=n(t.get(i),e[i]);return l||(r=!1),c&&(a=!0),t.has(i)?t.set(i,o):t}),t),r,a]}(e,t,n);const r={...t};let a=!0,s=!1;return Object.keys(e).forEach((t=>{const[i,o,l]=n(r[t],e[t]);void 0!==r[t]&&(r[t]=i),l&&(s=!0),o||(a=!1)})),[r,a,s]};function p(e){if("object"!=typeof e)return!1;if(void 0===e||e instanceof class extends class{constructor(e,t){this.schema=void 0,t&&(this._schemaAttribute="string"==typeof t?e=>e[t]:t),this.define(e)}get isSingleSchema(){return!this._schemaAttribute}define(e){this.schema=e}getSchemaAttribute(e,t,n){return!this.isSingleSchema&&this._schemaAttribute(e,t,n)}inferSchema(e,t,n){if(this.isSingleSchema)return this.schema;const r=this.getSchemaAttribute(e,t,n);return this.schema[r]}normalizeValue(e,t,n,r,a,s){const i=this.inferSchema(e,t,n);if(!i)return e;const o=r(e,t,n,i,a,s);return this.isSingleSchema||null==o?o:{id:o,schema:this.getSchemaAttribute(e,t,n)}}denormalizeValue(e,t){const n=!this.isSingleSchema&&(c(e)?e.get("schema"):e.schema);return this.isSingleSchema||n?t((this.isSingleSchema?void 0:c(e)?e.get("id"):e.id)||e,this.isSingleSchema?this.schema:this.schema[n]):[e,!0,!1]}}{normalize(e,t,n,r,a,s){const i=(e=>Array.isArray(e)?e:Object.keys(e).map((t=>e[t])))(e);return i.map(((e,i)=>this.normalizeValue(e,t,n,r,a,s))).filter((e=>null!=e))}denormalize(e,t){return[e.map?e.map((e=>this.denormalizeValue(e,t))).filter(u).map((e=>{let[t]=e;return t})):e,!0,!1]}infer(e,t,n,r){}toJSON(){return[this.schema]}}||Array.isArray(e))return[];const t=e instanceof class{constructor(e){this.schema=void 0,this.define(e)}define(e){this.schema=Object.keys(e).reduce(((t,n)=>({...t,[n]:e[n]})),this.schema||{})}normalize(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return((e,t,n,r,a,s,i)=>{const o={...t};return Object.keys(e).forEach((n=>{const r=e[n],l=a(t[n],t,n,r,s,i);null==l?delete o[n]:o[n]=l})),o})(this.schema,...t)}denormalize(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return d(this.schema,...t)}infer(e,t,n,r){return function(e,t,n,r,a){const s={};for(const i of Object.keys(e))s[i]=r(e[i],t,n,a);return s}(this.schema,e,t,n,r)}}?e.schema:e;for(const n in t){if(!t[n])continue;const e=p(t[n]);if(!1!==e)return e.unshift(n),e}return!1}function m(e,t){const n=p(e.schema);if(!1===n)throw new Error("schema has no array");return function(r){for(var a=arguments.length,s=new Array(a>1?a-1:0),i=1;i<a;i++)s[i-1]=arguments[i];return{[e.key(...t(...s))]:e=>{const t=h(e,n),a=new Set(t),s=h(r,n).filter((e=>!a.has(e))),i=[...t,...s];return f(e,n,i)}}}}const h=(e,t)=>{let n=e;for(const r of t){if(!n)return[];n=n[r]}return n||[]},f=(e,t,n)=>{if(0===t.length)return n;const r={...e};let a=r;for(let s=0;s<t.length-1;s++){const e=t[s];a=a[e]={...a[e]}}return a[t[t.length-1]]=n,r};var g=n(92586);const y={};const b={};const k=Object.prototype,v=Object.getPrototypeOf;var E=(0,a.Z)("hasBody");class x extends o{constructor(e){var t;super(null!=(t=e.fetch)?t:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];const a=(0,r.Z)(this,E)[E]&&t.length<2?{}:t[0]||{},s=(0,r.Z)(this,E)[E]?t[t.length-1]:void 0;return this.fetchResponse(this.url(a),this.getRequestInit(s)).then((e=>this.parseResponse(e))).then((e=>this.process(e,...t)))},e),Object.defineProperty(this,E,{writable:!0,value:void 0}),"sideEffect"in this||(this.sideEffect="GET"!==e.method&&void 0!==e.method||void 0),void 0===this.method&&(this.method=this.sideEffect?"POST":"GET"),void 0===this.urlPrefix&&(this.urlPrefix=""),(0,r.Z)(this,E)[E]=!("body"in this&&void 0===this.body||["GET","DELETE"].includes(this.method))}key(){return`${this.method} ${this.url((0,r.Z)(this,E)[E]&&arguments.length<2?{}:(arguments.length<=0?void 0:arguments[0])||{})}`}url(e){void 0===e&&(e={});const t=(n=this.path,Object.hasOwn(y,n)||(y[n]=(0,g.MY)(n,{encode:encodeURIComponent,validate:!1})),y[n])(e);var n;const r=function(e){return Object.hasOwn(b,e)||(b[e]=new Set((0,g.Qc)(e).map((e=>"string"==typeof e?e:`${e.name}`)))),b[e]}(this.path),a={};return Object.keys(e).forEach((t=>{r.has(t)||(a[t]=e[t])})),Object.keys(a).length?`${this.urlPrefix}${t}?${function(e){const t=new URLSearchParams(e);return t.sort(),t.toString()}(a)}`:`${this.urlPrefix}${t}`}getHeaders(e){return e}getRequestInit(e){const t=null!==(n=e)&&"object"==typeof n&&v(n)===k;var n;t&&(e=JSON.stringify(e));const r={...this.requestInit,method:this.method,signal:this.signal,body:e};return e&&!t||(r.headers={"Content-Type":"application/json",...r.headers}),r.headers=this.getHeaders(r.headers),r}fetchResponse(e,t){return fetch(e,t).then((e=>{if(!e.ok)throw new l(e);return e})).catch((e=>{throw e instanceof TypeError&&(e.status=500),e}))}parseResponse(e){var t;return 204===e.status?Promise.resolve(null):null!=(t=e.headers.get("content-type"))&&t.includes("json")?e.json().catch((e=>{throw e.status=400,e})):e.text().then((t=>{if(["string","undefined"].includes(typeof this.schema)||null===this.schema)return t;const n=new l(e);throw n.status=404,n.message=`Unexpected text response for schema ${this.schema}`,n}))}process(e){return e}errorPolicy(e){return e.status>=500?"soft":void 0}extend(e){class t extends this.constructor{}Object.assign(t.prototype,this);return new t(this.name?{name:this.name,fetch:this.fetch,...e}:{fetch:this.fetch,...e})}paginated(e){return this.extend({update:m(this,e)})}}}}]);