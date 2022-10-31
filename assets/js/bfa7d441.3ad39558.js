(self.webpackChunk=self.webpackChunk||[]).push([[34265],{38029:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=n(87462),s=(n(27378),n(3905)),a=n(90008),o=n(26008);const i={title:"Transforming data on fetch"},l=void 0,c={unversionedId:"guides/network-transform",id:"guides/network-transform",title:"Transforming data on fetch",description:"All network requests flow through the fetch() method, so any transforms needed can simply",source:"@site/../docs/rest/guides/network-transform.md",sourceDirName:"guides",slug:"/guides/network-transform",permalink:"/rest/guides/network-transform",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/rest/guides/network-transform.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1666925835,formattedLastUpdatedAt:"Oct 28, 2022",frontMatter:{title:"Transforming data on fetch"},sidebar:"docs",previous:{title:"Optimistic Updates",permalink:"/rest/guides/optimistic-updates"},next:{title:"Mocking unfinished endpoints",permalink:"/rest/guides/mocking-unfinished"}},u={},d=[{value:"Snakes to camels",id:"snakes-to-camels",level:2},{value:"Deserializing fields",id:"deserializing-fields",level:2},{value:"Case of the missing <code>Id</code>",id:"case-of-the-missing-id",level:2},{value:"Using HTTP Headers",id:"using-http-headers",level:2},{value:"Name calling",id:"name-calling",level:2}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"All network requests flow through the ",(0,s.kt)("inlineCode",{parentName:"p"},"fetch()")," method, so any transforms needed can simply\nbe done by overriding it with a call to super."),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"Note: If you retain control over the API design, generally it's preferred to\nupdate the data sent over the network. Keeping the client as ",(0,s.kt)("inlineCode",{parentName:"p"},"thin")," as possible\nis helpful to both performance and complexity."),(0,s.kt)("p",{parentName:"admonition"},"That said, in many cases you want to consume APIs you don't have control over -\nbe they public APIs, or due to internal organizational structure.")),(0,s.kt)("h2",{id:"snakes-to-camels"},"Snakes to camels"),(0,s.kt)("p",null,"Commonly APIs are designed with keys using ",(0,s.kt)("inlineCode",{parentName:"p"},"snake_case"),", but many in typescript/javascript\nprefer ",(0,s.kt)("inlineCode",{parentName:"p"},"camelCase"),". This snippet lets us make the transform needed."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="CamelResource.ts"',title:'"CamelResource.ts"'},"import { camelCase, snakeCase } from 'lodash';\nimport { RestEndpoint, RestGenerics  } from '@rest-hooks/rest';\n\nfunction deeplyApplyKeyTransform(obj: any, transform: (key: string) => string) {\n  const ret: Record<string, any> = Array.isArray(obj) ? [] : {};\n  Object.keys(obj).forEach(key => {\n    if (obj[key] != null && typeof obj[key] === 'object') {\n      ret[transform(key)] = deeplyApplyKeyTransform(obj[key], transform);\n    } else {\n      ret[transform(key)] = obj[key];\n    }\n  });\n  return ret;\n}\n\nclass CamelEndpoint<O Extends RestGenerics = any> extends RestEndpoint<O> {\n  getRequestInit(body) {\n    // we'll need to do the inverse operation when sending data back to the server\n    if (body) {\n      return super.getRequestInit(deeplyApplyKeyTransform(body, snakeCase));\n    }\n    return super.getRequestInit(body);\n  }\n  process(value) {\n    return deeplyApplyKeyTransform(value, camelCase);\n  }\n}\n")),(0,s.kt)("h2",{id:"deserializing-fields"},"Deserializing fields"),(0,s.kt)("p",null,"In many cases, data sent through JSON is serialized into strings since JSON\nonly has a few primitive types. Common examples include ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/ISO_8601"},"ISO 8601"),"\nfor dates or even strings for decimals that require high precision (",(0,s.kt)("a",{parentName:"p",href:"https://floating-point-gui.de/"},"floats can be lossy"),").\nKeeping data in the serialized form is often fine, especially if it is only being used to\nbe displayed. However, this can be problematic when derived data is computed like adding time to a date\nor multiplying two numbers."),(0,s.kt)("p",null,"In this case, simply use the ",(0,s.kt)("a",{parentName:"p",href:"/rest/api/Entity#schema"},"static schema")," with ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date"},"Date")," and ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/MikeMcl/bignumber.js"},"BigNumber")),(0,s.kt)(a.Z,{groupId:"schema",defaultOpen:"y",fixtures:[{endpoint:new o.Z({path:"/price/:exchangePair"}),args:[{exchangePair:"btc-usd"}],response:{exchangePair:"btc-usd",price:"32982389239823983298329832.238923982389328932893298",updatedAt:(new Date).toISOString()},delay:150}],mdxType:"HooksPlayground"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="api/Price.ts"',title:'"api/Price.ts"'},"import BigNumber from 'bignumber.js';\n\nexport class ExchangePrice extends Entity {\n  exchangePair = '';\n  updatedAt = new Date(0);\n  price = new BigNumber(0);\n  pk() {\n    return this.exchangePair;\n  }\n\n  static schema = {\n    updatedAt: Date,\n    price: BigNumber,\n  };\n}\nexport const getPrice = new RestEndpoint({\n  path: '/price/:exchangePair',\n  schema: ExchangePrice,\n});\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="PricePage.tsx"',title:'"PricePage.tsx"'},"import { getPrice } from './api/Price';\n\nfunction PricePage() {\n  const currentPrice = useSuspense(getPrice, { exchangePair: 'btc-usd' });\n  return (\n    <div>\n      {currentPrice.price.toPrecision(2)} as of{' '}\n      <time>\n        {Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(\n          currentPrice.updatedAt,\n        )}\n      </time>\n    </div>\n  );\n}\nrender(<PricePage />);\n"))),(0,s.kt)("h2",{id:"case-of-the-missing-id"},"Case of the missing ",(0,s.kt)("inlineCode",{parentName:"h2"},"Id")),(0,s.kt)("p",null,"You now want to interface with a great new streaming site called ",(0,s.kt)("inlineCode",{parentName:"p"},"mystreamsite.tv"),". It has\na simple API to retireve information about current streams. You can get a stream with the\nurl pattern ",(0,s.kt)("inlineCode",{parentName:"p"},"https://mystreamsite.tv/[username]/"),". However, for some reason they don't\nreturn the username in the response body! You want to be able to refer to it and it's\nthe only uniquely defining identifier for the class."),(0,s.kt)("p",null,"We can simply parse the username from the request url itself and add that to the\nresponse."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="GET https://mystreamsite.tv/ntucker/"',title:'"GET','https://mystreamsite.tv/ntucker/"':!0},'{\n  "title": "When I\'m Grandmaster, I will play faster.",\n  "game": "Starcraft II",\n  "current_viewers": 1337,\n  "live": true\n}\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="api/Stream.ts"',title:'"api/Stream.ts"'},"const USERNAME_MATCHER = /.*\\/([^\\/]+)\\/?/;\n\nclass Stream extends Entity {\n  readonly username: string = '';\n  readonly title: string = '';\n  readonly game: string = '';\n  readonly currentViewers: number = 0;\n  readonly live: boolean = false;\n\n  pk() {\n    return this.username;\n  }\n}\n\nconst getStream = new RestEndpoint({\n  urlPrefix: 'https://mystreamsite.tv',\n  path: '/:username',\n  schema: Stream,\n  process(value, { username }) {\n    value.username = username;\n    return value;\n  },\n});\n")),(0,s.kt)("h2",{id:"using-http-headers"},"Using HTTP Headers"),(0,s.kt)("p",null,"HTTP ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Headers"},"Headers")," are accessible in the fetch\n",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Response"},"Response"),". ",(0,s.kt)("a",{parentName:"p",href:"/rest/api/RestEndpoint#fetchResponse"},"RestEndpoint.fetchResponse()"),"\ncan be used to construct ",(0,s.kt)("a",{parentName:"p",href:"/rest/api/RestEndpoint"},"RestEndpoint"),"."),(0,s.kt)("p",null,"Sometimes this is used for cursor based ",(0,s.kt)("a",{parentName:"p",href:"/rest/guides/pagination#tokens-in-http-headers"},"pagination"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { RestEndpoint, RestGenerics } from '@rest-hooks/rest';\n\nclass GithubEndpoint<O extends RestGenerics = any> extends RestEndpoint<O> {\n  async parseResponse(response: Response) {\n    const results = await super.parseResponse(response);\n    if (\n      (response.headers && response.headers.has('link')) ||\n      Array.isArray(results)\n    ) {\n      return {\n        link: response.headers.get('link'),\n        results,\n      };\n    }\n    return results;\n  }\n}\n")),(0,s.kt)("h2",{id:"name-calling"},"Name calling"),(0,s.kt)("p",null,"Sometimes an API might change a key name, or choose one you don't like. Of course\nyou have much better naming standards, so instead of your ",(0,s.kt)("inlineCode",{parentName:"p"},"Resource")," class definition\nand all your code, you just want to remap that key."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="ArticleResource.ts"',title:'"ArticleResource.ts"'},"class RenamedEndpoint<O extends RestGenerics = any> extends RestEndpoint<O> {\n  getRequestInit(body) {\n    if (body && 'carrotsUsed' in body) {\n      const newBody = { ...body, carrotsUSedIsThisNameTooLong: carrotsUsed };\n      delete newBody.carrotsUsed;\n      return super.getRequestInit(newBody);\n    }\n    return super.getRequestInit(body);\n  }\n  process(value) {\n    if ('carrotsUsedIsThisNameTooLong' in value) {\n      // ok to mutate jsonResponse since we control it\n      value.carrotsUsed = value.carrotsUsedIsThisNameTooLong;\n      delete value.carrotsUsedIsThisNameTooLong;\n    }\n    return value;\n  }\n}\n")))}m.isMDXComponent=!0},69762:(e,t,n)=>{"use strict";const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]});t.Z=r},90008:(e,t,n)=>{"use strict";n.d(t,{Z:()=>$});var r=n(67294),s=n(87462),a=n(49544),o=n(86010),i=n(11614),l=n(6832),c=n(99401),u=n(69762),d=n(45440),p=n(13743);function m(e){let{fixtures:t}=e;return r.createElement("div",{className:d.Z.fixtureBlock},t.map((e=>r.createElement("div",{key:e.endpoint.key(...e.args),className:d.Z.fixtureItem},r.createElement("div",{className:d.Z.fixtureHeader},e.endpoint.key(...e.args)),r.createElement(g,{fixture:e})))))}var h=(0,r.memo)(m);function g(e){let{fixture:t}=e;return"function"==typeof t.response?"function":r.createElement(p.Z,{language:"json",className:d.Z.fixtureJson},JSON.stringify(t.response))}var f=n(62974),y=n(80086),b=n(45045),k=n(76226),v=n(30573);let E;if("undefined"!=typeof window&&!/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent)){const e=["rest","core","endpoint","normalizr","graphql","hooks"],t=["react","rest-hooks","@rest-hooks/rest","@rest-hooks/graphql","@rest-hooks/hooks","bignumber.js"];if(!E){const r=v.Z.init();r.then((e=>{e&&(E=e,e.languages.typescript.typescriptDefaults.setCompilerOptions({allowNonTsExtensions:!0,target:e.languages.typescript.ScriptTarget.ES2017,jsx:e.languages.typescript.JsxEmit.React,strict:!0,strictNullChecks:!0,lib:["dom","esnext"],module:e.languages.typescript.ModuleKind.ESNext,moduleResolution:e.languages.typescript.ModuleResolutionKind.NodeJs,typeRoots:["node_modules/@types"],allowSyntheticDefaultImports:!0,skipLibCheck:!0,noImplicitAny:!1}),e.editor.defineTheme("prism",{base:"vs-dark",inherit:!0,rules:[{token:"number",foreground:"f78c6c"},{token:"string",foreground:"b6d986"},{token:"keyword",fontStyle:"italic",foreground:"7da4f6"},{token:"type",foreground:"ffcb6b"},{token:"delimiter",foreground:"C792EA"},{token:"tag",foreground:"FF5590"}],colors:{"editor.foreground":"#bfc7d5"}}),e.languages.registerCompletionItemProvider("typescript",{triggerCharacters:["'",'"',".","/"],provideCompletionItems:(n,r)=>{const s=n.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:r.lineNumber,endColumn:r.column});if(/(([\s|\n]+from\s+)|(\brequire\b\s*\())["|'][^'^"]*$/.test(s))return s.endsWith(".")||s.endsWith("/")?void 0:{suggestions:t.map((t=>({label:t,kind:e.languages.CompletionItemKind.Module,insertText:t})))}}}))})),Promise.allSettled([r,n.e(37956).then(n.t.bind(n,70637,23)),n.e(49033).then(n.t.bind(n,7712,23)),n.e(42713).then(n.t.bind(n,93716,23)),n.e(78789).then(n.t.bind(n,52031,23)),...e.map((e=>n(73795)(`./${e}.d.ts`)))]).then((t=>{let[n,...r]=t;if("fulfilled"!==n.status||!n.value)return;const s=n.value,[a,o,i,l,...c]=r.map((e=>"fulfilled"===e.status?e.value.default:""));return s.languages.typescript.typescriptDefaults.addExtraLib("declare module \"react/jsx-runtime\" {\n        import './';\n      }","file:///node_modules/@types/react/jsx-runtime.d.ts"),s.languages.typescript.typescriptDefaults.addExtraLib("import * as React from 'react'\n\n    declare global {\n      namespace JSX {\n        interface IntrinsicElements {\n          strike: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;\n        }\n      }\n    }","file:///node_modules/@types/react/more.d.ts"),s.languages.typescript.typescriptDefaults.addExtraLib("declare function render(component:JSX.Element):void;\n        declare function CurrentTime(props: {}):JSX.Element;\n        declare function ResetableErrorBoundary(props: { children: JSX.ReactChild }):JSX.Element;\n        declare function randomFloatInRange(min: number, max: number, decimals?: number): number;"),s.languages.typescript.typescriptDefaults.addExtraLib(a,"es2022"),s.languages.typescript.typescriptDefaults.addExtraLib(`declare module "react" { ${o} }`,"file:///node_modules/@types/react/index.d.ts"),s.languages.typescript.typescriptDefaults.addExtraLib(`declare module "bignumber.js" { ${i} }`,"file:///node_modules/bignumber.js/index.d.ts"),s.languages.typescript.typescriptDefaults.addExtraLib(`declare module "rest-hooks" { ${l} }`,"file:///node_modules/rest-hooks/index.d.ts"),s.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${l} }`),c.forEach(((t,n)=>{const r=e[n];s.languages.typescript.typescriptDefaults.addExtraLib(`declare module "@rest-hooks/${r}" { ${t} }`,`file:///node_modules/@rest-hooks/${t}/index.d.ts`),"rest"===r&&s.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${t} }`)})),s.languages.typescript.javascriptDefaults.setEagerModelSync(!0),s}))}}const w=(0,r.memo)(k.ZP);const x={scrollbar:{alwaysConsumeMouseWheel:!1},minimap:{enabled:!1},wordWrap:"on",scrollBeyondLastLine:!1,wrappingIndent:"indent",lineNumbers:"off",folding:!1,fontLigatures:!0,fontFamily:'"Roboto Mono",SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',fontSize:"13px",lineHeight:19};const N=(0,r.memo)(a.uz);var Z=n(3495).Z?function(e){let{onChange:t,code:n,path:s}=e;s.endsWith(".tsx")||s.endsWith(".ts")||(s+=".tsx"),function(e,t){const n=function(e){const t=(0,k.Ik)(),n=(0,r.useRef)();return(0,r.useEffect)((()=>{t&&t.languages.typescript.getTypeScriptWorker().then((e=>e())).then((e=>{n.current=e}))}),[t]),n}();(0,r.useCallback)((function(){n.current&&e(n.current)}),t)}((e=>{e.getEmitOutput(`file:///${s}`).then((e=>{t(e.outputFiles[0].text)}))}),[t,s]);const[o,i]=(0,r.useState)("100%"),l=(0,r.useCallback)((e=>{const t=e.getDomNode(),n=t.getElementsByClassName("view-lines")[0];let r=0;const s=19*e.getModel().getLineCount()+10;t.style.height=s+"px",i(s),e.layout(),e.onDidChangeModelDecorations((()=>{setTimeout((()=>{const a=19*n.childElementCount+10;r=n.childElementCount,t.style.height=a+"px",i(s),e.layout()}),0)}))}),[]);return r.createElement(w,{path:s,defaultLanguage:"typescript",onChange:t,defaultValue:n,options:x,theme:"prism",onMount:l,height:o,loading:r.createElement(a.uz,{language:"tsx",code:n,disabled:!0})})}:function(e){let{onChange:t,code:n}=e;return r.createElement(N,{onChange:t,code:n})};function C(){return r.createElement(r.Fragment,null,R.map(((e,t)=>r.createElement("link",{key:t,rel:"preload",href:e,as:e.endsWith(".js")?"script":"style"}))),P.map(((e,t)=>r.createElement("link",{key:t+R.length,rel:"prefetch",href:e,as:"script"}))))}var S=(0,r.memo)(C);const R=["https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/editor/editor.main.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/editor/editor.main.nls.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/basic-languages/typescript/typescript.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/language/typescript/tsMode.js"],P=["https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/base/worker/workerMain.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/language/typescript/tsWorker.js"];var I;function O(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(u.Z);return r.createElement("div",{className:d.Z.tabs,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:s,label:a}=n;return r.createElement("div",{role:"tab",tabIndex:e===s?0:-1,"aria-selected":e===s,key:s,className:(0,o.Z)(d.Z.tab,{[d.Z.selected]:e===s}),onFocus:t,onClick:t,value:s},a)})))}function j(e){let{children:t}=e;return r.createElement(f.Z,{className:d.Z.tabControls},r.createElement("div",{className:d.Z.title},t),r.createElement(O,null))}function A(e){let{title:t,fixtures:n}=e;const{values:s}=(0,r.useContext)(u.Z),a=s.length>0;return r.createElement(r.Fragment,null,n.length?r.createElement(r.Fragment,null,r.createElement(f.Z,{className:d.Z.small},"Fixtures"),r.createElement(h,{fixtures:n})):null,a?r.createElement(j,null,t):null)}function T(e){let{children:t,transformCode:n,groupId:i,defaultOpen:u,row:p,hidden:m,fixtures:h,includeEndpoints:g,...f}=e;const{liveCodeBlock:{playgroundPosition:y}}=(0,l.Z)().siteConfig.themeConfig,b=(0,c.p)();return r.createElement("div",{className:(0,o.Z)(d.Z.playgroundContainer,{[d.Z.row]:p,[d.Z.hidden]:m})},r.createElement(a.nu,(0,s.Z)({theme:b},f),r.createElement(_,{reverse:"top"===y,row:p,fixtures:h,includeEndpoints:g,groupId:i,defaultOpen:u},t)),r.createElement(S,null))}function _(e){let{reverse:t,children:n,row:s,fixtures:i,includeEndpoints:l,groupId:c,defaultOpen:u}=e;const p=(0,r.useMemo)((()=>(1e4*Math.random()).toPrecision(4).toString()),[]),m=(0,r.useMemo)((()=>"string"==typeof n?[{code:n.replace(/\n$/,""),collapsed:!1}]:(Array.isArray(n)?n:[n]).filter((e=>e.props.children)).map((e=>"string"==typeof e.props.children?e.props:e.props.children.props)).map((e=>{let{children:t,title:n="",collapsed:r=!1,path:s}=e;return{code:t.replace(/\n$/,""),title:n.replaceAll('"',""),collapsed:r,path:s}}))),[n]),[h,g]=(0,r.useReducer)(U,void 0,(()=>m.map((e=>{let{code:t}=e;return t})))),f=(0,r.useMemo)((()=>m.map(((e,t)=>e=>{g({i:t,code:e})}))),[m.length]),[k,v]=(0,r.useState)((()=>m.map((e=>{let{collapsed:t}=e;return t})))),E=h.join("\n");return r.createElement(D,{reverse:t},r.createElement("div",null,r.createElement(A,{fixtures:!s&&i}),s&&m.length>1?r.createElement(H,{titles:m.map((e=>{let{title:t}=e;return t})),closedList:k,onClick:e=>v((t=>t.map(((t,n)=>n!==e))))}):null,m.map(((e,t)=>{let{title:n,path:a}=e;return r.createElement(r.Fragment,{key:t},!s&&n?r.createElement(z,{onClick:()=>v((e=>{const n=[...e];return n[t]=!n[t],n})),closed:k[t],title:n}):null,r.createElement("div",{key:t,className:(0,o.Z)(d.Z.playgroundEditor,{[d.Z.hidden]:k[t]})},r.createElement(Z,{key:t,onChange:f[t],code:h[t],path:"/"+p+"/"+(a||n||"default.tsx")})))}))),r.createElement(b.Z,{fallback:r.createElement(a.nu,{key:"preview",code:'render(() => "Loading...");',noInline:!0},r.createElement(y.Z,{key:"preview",includeEndpoints:l,groupId:c,defaultOpen:u,row:s,fixtures:i}))},r.createElement(L,{code:E,includeEndpoints:l,groupId:c,defaultOpen:u,row:s,fixtures:i})))}A.defaultProps={title:r.createElement(i.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Editor"),fixtures:[]},T.defaultProps={row:!1,hidden:!1};const M="object"==typeof navigator&&/bot|googlebot|crawler|spider|robot|crawling/i.test(null==(I=navigator)?void 0:I.userAgent),L=(0,r.lazy)((()=>M?Promise.resolve({default:e=>null}):Promise.all([n.e(86429),n.e(87876),n.e(97277),n.e(26750)]).then(n.bind(n,41380))));function D(e){let{children:t,reverse:n}=e;const r=[...t];return r.reverse(),n?r:t}function U(e,t){const n=[...e];return n[t.i]=t.code,n}function z(e){let{onClick:t,closed:n,title:s}=e;return r.createElement(f.Z,{className:d.Z.small,onClick:t},r.createElement("span",{className:(0,o.Z)(d.Z.arrow,n?d.Z.right:d.Z.down)},"\u25b6"),s)}function H(e){let{titles:t,closedList:n,onClick:s}=e;const{values:a}=(0,r.useContext)(u.Z),i=a.length>0;return r.createElement(f.Z,{className:(0,o.Z)({[d.Z.small]:i,[d.Z.subtabs]:i},d.Z.noupper,d.Z.tabControls)},r.createElement("div",{className:d.Z.tabs,role:"tablist","aria-orientation":"horizontal"},t.map(((e,t)=>r.createElement("div",{role:"tab",key:t,onClick:()=>s(t),className:(0,o.Z)(d.Z.tab,{[d.Z.selected]:!n[t]})},e)))))}D.defaultProps={reverse:!1};const F=e=>{let{children:t,groupId:n,hidden:s=!1,defaultOpen:a,row:o=!1,fixtures:i}=e;return r.createElement(T,{includeEndpoints:!Array.isArray(t),noInline:!0,groupId:n,defaultOpen:a,row:o,hidden:s,fixtures:i},"string"==typeof t||Array.isArray(t)?t:t.props.children)};F.defaultProps={defaultOpen:"n",fixtures:[]};var $=(0,r.memo)(F)},45045:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(19666),s=n(67294);function a(e){let{fallback:t,children:n}=e;return s.createElement(r.Z,{fallback:t},(()=>s.createElement(s.Suspense,{fallback:t},n)))}},62974:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(67294),s=n(86010),a=n(45440);function o(e){let{children:t,className:n,onClick:o}=e;return r.createElement("div",{className:(0,s.Z)(a.Z.playgroundHeader,n,o?a.Z.clickable:null),onClick:o},t)}},80086:(e,t,n)=>{"use strict";n.d(t,{Z:()=>j});var r=n(67294),s=n(11614),a=n(27093),o=n(26127),i=n(82038),l=n(83611),c=n(39714),u=n(86010),d=n(76602),p=n(63735),m=n(45440),h=n(32041),g=n(97723),f=n(70524);function y(e){let{value:t}=e;const n="dark"===(0,f.I)().colorMode,s=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),a=(0,r.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem 0 0.8rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(227, 227, 227)"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial",padding:"7px 7px 7px 0",margin:"-7px calc(0.5em - 7px) -7px 0"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:s[t]}}},base0B:"rgb(191, 199, 213)"})),[n,s]);return r.createElement(g.L,{shouldExpandNode:b,data:t,valueRenderer:v,theme:a,hideRoot:!0})}function b(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const k="undefined"!=typeof Intl;function v(e,t){const n=arguments.length<=2?void 0:arguments[2];return k&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function E(e){let{toggle:t,selectedValue:n}=e;const s="y"===n,a=s?m.Z.right:m.Z.left;return r.createElement(r.Fragment,null,r.createElement("div",{className:m.Z.debugToggle,onClick:t},"Store",r.createElement("span",{className:(0,u.Z)(m.Z.arrow,a,m.Z.vertical)},"\u25b6")),s?r.createElement(N,null):null)}var w=(0,r.memo)(E);function x(){const e=(0,r.useContext)(h.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,t}),[e]);return r.createElement(y,{value:t})}const N=(0,r.memo)(x);var Z=n(45045);function C(e){let{groupId:t,defaultOpen:n,row:s,fixtures:h}=e;const{tabGroupChoices:g,setTabGroupChoices:f}=(0,d.U)(),[y,b]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:k}=(0,p.o5)();if(null!=t){const e=g[t];null!=e&&e!==y&&b(e)}const v=(0,r.useCallback)((e=>{k(e.currentTarget),b((e=>"y"===e?"n":"y")),f(t,"y"===y?"n":"y")}),[k,t,y,f]),E=(0,r.useMemo)((()=>[new l.Z,new a.Z(o.Z)]),[]),x=!("n"===y||!s);return r.createElement(i.nq,{managers:E},r.createElement(c.Z,{fixtures:h,silenceMissing:!0},r.createElement("div",{className:(0,u.Z)(m.Z.playgroundPreview,{[m.Z.hidden]:x})},r.createElement(Z.Z,{fallback:r.createElement(R,null)},r.createElement(P,null))),r.createElement(w,{selectedValue:y,toggle:v})))}var S=(0,r.memo)(C);function R(){return r.createElement("div",null,"Loading...")}const P=(0,r.lazy)((()=>Promise.all([n.e(86429),n.e(87876),n.e(97277),n.e(26750)]).then(n.bind(n,15929))));var I=n(62974);function O(e){let{groupId:t,defaultOpen:n,row:a,fixtures:o}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(I.Z,null,r.createElement(s.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),r.createElement("div",{className:m.Z.playgroundResult},r.createElement(S,{groupId:t,defaultOpen:n,row:a,fixtures:o})))}var j=(0,r.memo)(O)},3495:(e,t)=>{"use strict";const n="undefined"!=typeof window&&!/bot|googlebot|crawler|spider|robot|crawling|Mobile|Android|BlackBerry/i.test(navigator.userAgent);t.Z=n},57489:(e,t,n)=>{"use strict";var r=n(67294),s=n(72887);const a={React:r,...r,...s};t.Z=a},45440:(e,t)=>{"use strict";t.Z={playgroundContainer:"playgroundContainer_sLUA",playgroundHeader:"playgroundHeader_Zx4K",tabControls:"tabControls_trxh",row:"row_YGZs",hidden:"hidden_Hh8i",small:"small_xksL",clickable:"clickable_YHiX",noupper:"noupper_WDCF",subtabs:"subtabs_XtJb",playgroundEditor:"playgroundEditor_lYwu",closed:"closed_QJMa",arrow:"arrow_tivA",vertical:"vertical_OMeC",right:"right_vs_C",left:"left_iDcB",up:"up_H4F7",down:"down_oRky",playgroundPreview:"playgroundPreview_rk9R",playgroundError:"playgroundError_sRnA",playgroundResult:"playgroundResult_tefG",debugToggle:"debugToggle_zlro",title:"title_poUY",tabs:"tabs_m54V",tab:"tab_bTGw",selected:"selected_QXZk",fixtureBlock:"fixtureBlock_mpRK",fixtureItem:"fixtureItem_Jd6V",fixtureHeader:"fixtureHeader_KYel",fixtureJson:"fixtureJson_HnbR"}},73795:(e,t,n)=>{var r={"./core.d.ts":[90734,30007],"./endpoint.d.ts":[73118,72901],"./graphql.d.ts":[60467,99076],"./hooks.d.ts":[56890,22595],"./normalizr.d.ts":[14991,12192],"./rest.d.ts":[42714,46324]};function s(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],s=t[0];return n.e(t[1]).then((()=>n.t(s,23)))}s.keys=()=>Object.keys(r),s.id=73795,e.exports=s},26008:(e,t,n)=>{"use strict";n.d(t,{Z:()=>w});var r=n(70760),s=n(11857);function a(e,t){e.type=e.sideEffect?"mutate":"read",e.options={...t},delete e.options.key,delete e.options.schema,delete e.options.sideEffect,delete e.options.fetch,delete e.options.getFetchKey,delete e.options.options,0===Object.keys(e.options).length&&delete e.options,void 0===e.schema&&(e.schema=null)}let o=!1;try{Function()}catch(x){o=!0}class i extends Function{constructor(e,t){let n;return o?(n=function(){return n.fetch(...arguments)},Object.setPrototypeOf(n,new.target.prototype)):(super("return arguments.callee.fetch.apply(arguments.callee, arguments)"),n=this),n.getFetchKey=e=>n.key(e),e&&(n.fetch=e),t&&"name"in t?(n.__name=t.name,delete t.name):e&&(n.__name=e.name),Object.assign(n,t),Object.defineProperty(n,"name",{get:function(){return this.__name}}),a(n,t),n}key(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return`${this.name} ${JSON.stringify(t)}`}bind(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];const s=this.fetch,a=this.key;return this.extend({fetch(){return s.apply(null!=e?e:this,n)},key(){return a.apply(this,n)}})}extend(e){class t extends this.constructor{}Object.assign(t.prototype,this);const n=new t(e.fetch,e);return a(n,{...this.options,...e}),n}}var l=n(92586);const c={};const u={};const d=Object.prototype,p=Object.getPrototypeOf;class m extends Error{constructor(e){super(e.statusText||`Network response not 'ok': ${e.status}`),this.name="NetworkError",this.status=e.status,this.response=e}}function h(e){return!("function"!=typeof e.hasOwnProperty||!(Object.hasOwnProperty.call(e,"__ownerID")||e._map&&Object.hasOwnProperty.call(e._map,"__ownerID")))}const g=e=>{let[t,,n]=e;return void 0!==t&&!n};const f=(e,t,n)=>{if(h(t))return function(e,t,n){let r=!0,s=!1;return[Object.keys(e).reduce(((t,a)=>{const o=`${a}`,[i,l,c]=n(t.get(o),e[o]);return l||(r=!1),c&&(s=!0),t.has(o)?t.set(o,i):t}),t),r,s]}(e,t,n);const r={...t};let s=!0,a=!1;return Object.keys(e).forEach((t=>{const[o,i,l]=n(r[t],e[t]);void 0!==r[t]&&(r[t]=o),l&&(a=!0),i||(s=!1)})),[r,s,a]};function y(e){if("object"!=typeof e)return!1;if(void 0===e||e instanceof class extends class{constructor(e,t){this.schema=void 0,t&&(this._schemaAttribute="string"==typeof t?e=>e[t]:t),this.define(e)}get isSingleSchema(){return!this._schemaAttribute}define(e){this.schema=e}getSchemaAttribute(e,t,n){return!this.isSingleSchema&&this._schemaAttribute(e,t,n)}inferSchema(e,t,n){if(this.isSingleSchema)return this.schema;const r=this.getSchemaAttribute(e,t,n);return this.schema[r]}normalizeValue(e,t,n,r,s,a){const o=this.inferSchema(e,t,n);if(!o)return e;const i=r(e,t,n,o,s,a);return this.isSingleSchema||null==i?i:{id:i,schema:this.getSchemaAttribute(e,t,n)}}denormalizeValue(e,t){const n=!this.isSingleSchema&&(h(e)?e.get("schema"):e.schema);return this.isSingleSchema||n?t((this.isSingleSchema?void 0:h(e)?e.get("id"):e.id)||e,this.isSingleSchema?this.schema:this.schema[n]):[e,!0,!1]}}{normalize(e,t,n,r,s,a){const o=(e=>Array.isArray(e)?e:Object.keys(e).map((t=>e[t])))(e);return o.map(((e,o)=>this.normalizeValue(e,t,n,r,s,a))).filter((e=>null!=e))}denormalize(e,t){return[e.map?e.map((e=>this.denormalizeValue(e,t))).filter(g).map((e=>{let[t]=e;return t})):e,!0,!1]}infer(e,t,n){}toJSON(){return[this.schema]}}||Array.isArray(e))return[];const t=e instanceof class{constructor(e){this.schema=void 0,this.define(e)}define(e){this.schema=Object.keys(e).reduce(((t,n)=>({...t,[n]:e[n]})),this.schema||{})}normalize(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return((e,t,n,r,s,a,o)=>{const i={...t};return Object.keys(e).forEach((n=>{const r=e[n],l=s(t[n],t,n,r,a,o);null==l?delete i[n]:i[n]=l})),i})(this.schema,...t)}denormalize(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return f(this.schema,...t)}infer(e,t,n){return function(e,t,n,r){const s={};for(const a of Object.keys(e))s[a]=r(e[a],t,n);return s}(this.schema,e,t,n)}}?e.schema:e;for(const n in t){if(!t[n])continue;const e=y(t[n]);if(!1!==e)return e.unshift(n),e}return!1}function b(e,t){const n=y(e.schema);if(!1===n)throw new Error("schema has no array");return function(r){for(var s=arguments.length,a=new Array(s>1?s-1:0),o=1;o<s;o++)a[o-1]=arguments[o];return{[e.key(...t(...a))]:e=>{const t=k(e,n),s=new Set(t),a=k(r,n).filter((e=>!s.has(e))),o=[...t,...a];return v(e,n,o)}}}}const k=(e,t)=>{let n=e;for(const r of t){if(!n)return[];n=n[r]}return n||[]},v=(e,t,n)=>{if(0===t.length)return n;const r={...e};let s=r;for(let a=0;a<t.length-1;a++){const e=t[a];s=s[e]={...s[e]}}return s[t[t.length-1]]=n,r};var E=(0,s.Z)("hasBody");class w extends i{constructor(e){var t;super(null!=(t=e.fetch)?t:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];const s=(0,r.Z)(this,E)[E]&&t.length<2?{}:t[0]||{},a=(0,r.Z)(this,E)[E]?t[t.length-1]:void 0;return this.fetchResponse(this.url(s),this.getRequestInit(a)).then(this.parseResponse).then((e=>this.process(e,...t)))},e),Object.defineProperty(this,E,{writable:!0,value:void 0}),"sideEffect"in this||(this.sideEffect="GET"!==e.method&&void 0!==e.method||void 0),void 0===this.method&&(this.method=this.sideEffect?"POST":"GET"),void 0===this.urlPrefix&&(this.urlPrefix=""),(0,r.Z)(this,E)[E]=!("body"in this&&void 0===this.body||["GET","DELETE"].includes(this.method))}key(){return`${this.method} ${this.url((0,r.Z)(this,E)[E]&&arguments.length<2?{}:(arguments.length<=0?void 0:arguments[0])||{})}`}url(e){void 0===e&&(e={});const t=(n=this.path,Object.hasOwn(c,n)||(c[n]=(0,l.MY)(n,{encode:encodeURIComponent,validate:!1})),c[n])(e);var n;const r=function(e){return Object.hasOwn(u,e)||(u[e]=new Set((0,l.Qc)(e).map((e=>"string"==typeof e?e:`${e.name}`)))),u[e]}(this.path),s={};return Object.keys(e).forEach((t=>{r.has(t)||(s[t]=e[t])})),Object.keys(s).length?`${this.urlPrefix}${t}?${function(e){const t=new URLSearchParams(e);return t.sort(),t.toString()}(s)}`:`${this.urlPrefix}${t}`}getHeaders(e){return e}getRequestInit(e){const t=null!==(n=e)&&"object"==typeof n&&p(n)===d;var n;t&&(e=JSON.stringify(e));const r={...this.requestInit,method:this.method,signal:this.signal,body:e};return e&&!t||(r.headers={"Content-Type":"application/json",...r.headers}),r.headers=this.getHeaders(r.headers),r}fetchResponse(e,t){return fetch(e,t).then((e=>{if(!e.ok)throw new m(e);return e})).catch((e=>{throw e instanceof TypeError&&(e.status=400),e}))}parseResponse(e){var t;return null!=(t=e.headers.get("content-type"))&&t.includes("json")&&204!==e.status?e.json().catch((e=>{throw e.status=400,e})):e.text()}process(e){return e}errorPolicy(e){return e.status>=500?"soft":void 0}extend(e){class t extends this.constructor{}Object.assign(t.prototype,this);return new t(this.name?{name:this.name,fetch:this.fetch,...e}:{fetch:this.fetch,...e})}paginated(e){return this.extend({update:b(this,e)})}}}}]);