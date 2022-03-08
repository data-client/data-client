"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[64594],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87799:(e,t,n)=>{n.d(t,{Z:()=>I});var r=n(87462),o=n(67294),s=n(10407),a=n(86010),i=n(95999),l=n(52263),c=n(91262),u=n(45860);const p="playgroundContainer_X_Ta",d="playgroundHeader_dyrN",m="playgroundEditor_Q6Y7",h="playgroundPreview_DzOI";var f=n(72389);function g(e){let{children:t}=e;return o.createElement("div",{className:(0,a.Z)(d)},t)}function y(){return o.createElement("div",null,"Loading...")}function k(){return o.createElement(o.Fragment,null,o.createElement(g,null,o.createElement(i.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Result")),o.createElement("div",{className:h},o.createElement(c.Z,{fallback:o.createElement(y,null)},(()=>o.createElement(o.Fragment,null,o.createElement(s.i5,null),o.createElement(s.IF,null))))))}function b(){const e=(0,f.Z)();return o.createElement(s.uz,{key:String(e),className:m})}function v(){return o.createElement(o.Fragment,null,o.createElement(g,null,o.createElement(i.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")),o.createElement(b,null))}function E(e){let{children:t,transformCode:n,...a}=e;const{siteConfig:{themeConfig:i}}=(0,l.Z)(),{liveCodeBlock:{playgroundPosition:c}}=i,d=(0,u.pJ)();return o.createElement("div",{className:p},o.createElement(s.nu,(0,r.Z)({code:t.replace(/\n$/,""),transformCode:n||(e=>`${e};`),theme:d},a),"top"===c?o.createElement(o.Fragment,null,o.createElement(k,null),o.createElement(v,null)):o.createElement(o.Fragment,null,o.createElement(v,null),o.createElement(k,null))))}var w=n(56922),N=n(23746);const R="codeBlockContainer_I0IT",x="codeBlockContent_wNvx",C="codeBlockTitle_BvAR",P="codeBlock_jd64",S="codeBlockStandalone_csWH",T="copyButton_wuS7",O="codeBlockLines_mRuA";const I=(Z=function(e){let{children:t,className:n="",metastring:s,title:l,language:c}=e;const{prism:p}=(0,u.LU)(),[d,m]=(0,o.useState)(!1),[h,f]=(0,o.useState)(!1);(0,o.useEffect)((()=>{f(!0)}),[]);const g=(0,u.bc)(s)||l,y=(0,u.pJ)();if(o.Children.toArray(t).some((e=>(0,o.isValidElement)(e))))return o.createElement(N.ZP,(0,r.Z)({},N.lG,{key:String(h),theme:y,code:"",language:"text"}),(e=>{let{className:r,style:s}=e;return o.createElement("pre",{tabIndex:0,className:(0,a.Z)(r,S,"thin-scrollbar",R,n,u.kM.common.codeBlock),style:s},o.createElement("code",{className:O},t))}));const k=Array.isArray(t)?t.join(""):t,b=c??(0,u.Vo)(n)??p.defaultLanguage,{highlightLines:v,code:E}=(0,u.nZ)(k,s,b),w=()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;const r=document.createElement("textarea"),o=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";const s=document.getSelection();let a=!1;s.rangeCount>0&&(a=s.getRangeAt(0)),n.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;let i=!1;try{i=document.execCommand("copy")}catch{}r.remove(),a&&(s.removeAllRanges(),s.addRange(a)),o&&o.focus()}(E),m(!0),setTimeout((()=>m(!1)),2e3)};return o.createElement(N.ZP,(0,r.Z)({},N.lG,{key:String(h),theme:y,code:E,language:b??"text"}),(e=>{let{className:t,style:s,tokens:l,getLineProps:c,getTokenProps:p}=e;return o.createElement("div",{className:(0,a.Z)(R,n,{[`language-${b}`]:b&&!n.includes(`language-${b}`)},u.kM.common.codeBlock)},g&&o.createElement("div",{style:s,className:C},g),o.createElement("div",{className:(0,a.Z)(x,b)},o.createElement("pre",{tabIndex:0,className:(0,a.Z)(t,P,"thin-scrollbar"),style:s},o.createElement("code",{className:O},l.map(((e,t)=>{1===e.length&&"\n"===e[0].content&&(e[0].content="");const n=c({line:e,key:t});return v.includes(t)&&(n.className+=" docusaurus-highlight-code-line"),o.createElement("span",(0,r.Z)({key:t},n),e.map(((e,t)=>o.createElement("span",(0,r.Z)({key:t},p({token:e,key:t}))))),o.createElement("br",null))})))),o.createElement("button",{type:"button","aria-label":(0,i.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,a.Z)(T,"clean-btn"),onClick:w},d?o.createElement(i.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):o.createElement(i.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))},function(e){return e.live?o.createElement(E,(0,r.Z)({scope:w.Z},e)):o.createElement(Z,e)});var Z},56922:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67294),o=n(15814);const s={React:r,...r,...o}},22329:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(87462),o=(n(67294),n(3905)),s=n(87799),a=n(66466);const i={title:"Using a custom networking library",sidebar_label:"Custom networking library"},l=void 0,c={unversionedId:"guides/custom-networking",id:"version-5.0/guides/custom-networking",title:"Using a custom networking library",description:"Resource.fetch() wraps the standard fetch.",source:"@site/versioned_docs/version-5.0/guides/custom-networking.md",sourceDirName:"guides",slug:"/guides/custom-networking",permalink:"/docs/5.0/guides/custom-networking",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/custom-networking.md",tags:[],version:"5.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1631077272,formattedLastUpdatedAt:"9/8/2021",frontMatter:{title:"Using a custom networking library",sidebar_label:"Custom networking library"},sidebar:"version-5.0/docs",previous:{title:"Capturing Mutation Side-Effects",permalink:"/docs/5.0/guides/rpc"},next:{title:"Custom cache lifetime",permalink:"/docs/5.0/guides/resource-lifetime"}},u={},p=[{value:"Fetch (default)",id:"fetch-default",level:2},{value:"Superagent",id:"superagent",level:2},{value:"Axios",id:"axios",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Resource.fetch()")," wraps the standard ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"},"fetch"),".\nOne key customization is ensuring every network related error thrown has a\nstatus member. This is useful in distinguishing code errors from networking errors,\nand is used in the ",(0,o.kt)("a",{parentName:"p",href:"../api/NetworkManager"},"NetworkManager"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"SimpleResource")," can be used as an abstract class to implement custom fetch methods\nwithout including the default."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you plan on using ",(0,o.kt)("a",{parentName:"p",href:"../api/NetworkErrorBoundary"},"NetworkErrorBoundary")," make sure\nto add a ",(0,o.kt)("inlineCode",{parentName:"p"},"status")," member to errors, as it catches only errors with a ",(0,o.kt)("inlineCode",{parentName:"p"},"status")," member."))),(0,o.kt)("h2",{id:"fetch-default"},"Fetch (default)"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"},"Fetch")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/github/fetch#installation"},"whatwg-fetch")," polyfill will be\nuseful in environments that don't support it, like node and older browsers\n(Internet Explorer). Be sure to include it in any bundles that need it."),(0,o.kt)("p",null,"This implementation is provided as a useful reference for building your own.\nFor the most up-to-date implementation, see the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/coinbase/rest-hooks/blob/master/packages/rest-hooks/src/resource/Resource.ts"},"source on master")),(0,o.kt)(s.Z,{className:"language-typescript",mdxType:"CodeBlock"},a.Z),(0,o.kt)("h2",{id:"superagent"},"Superagent"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://visionmedia.github.io/superagent/"},"Superagent")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { SimpleResource, Method } from '@rest-hooks/rest';\nimport type { SuperAgentRequest } from 'superagent';\n\nconst ResourceError = `JSON expected but not returned from API`;\n\n/**\n * Represents an entity to be retrieved from a server.\n * Typically 1:1 with a url endpoint.\n */\nexport default abstract class Resource extends SimpleResource {\n  /** A function to mutate all requests for fetch */\n  static fetchPlugin?: (request: SuperAgentRequest) => SuperAgentRequest;\n\n  /** Perform network request and resolve with json body */\n  static async fetch(\n    input: RequestInfo, init: RequestInit\n  ) {\n    let req = request[init.method](input).on('error', () => {});\n    if (this.fetchPlugin) req = req.use(this.fetchPlugin);\n    if (init.body) req = req.send(init.body);\n    return req.then(res => {\n      if (isInvalidResponse(res)) {\n        throw new Error(ResourceError);\n      }\n      return res.body;\n    });\n  }\n}\n\nexport const isInvalidResponse = (res: request.Response): boolean => {\n  // Empty is only valid when no response is expect (204)\n  const resEmptyIsExpected = res.text === '' && res.status === 204;\n  const resBodyEmpty = Object.keys(res.body).length === 0;\n  return !(res.type.includes('json') || resEmptyIsExpected) && resBodyEmpty;\n};\n")),(0,o.kt)("h2",{id:"axios"},"Axios"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/axios/axios"},"Axios")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { SimpleResource, Method } from '@rest-hooks/rest';\nimport axios from 'axios';\n\nexport default abstract class AxiosResource extends SimpleResource {\n  /** Perform network request and resolve with json body */\n  static async fetch(\n    input: RequestInfo, init: RequestInit\n  ) {\n    return await axios[init.method](input, init.body);\n  }\n}\n")))}m.isMDXComponent=!0},66466:(e,t,n)=>{n.d(t,{Z:()=>r});const r="import SimpleResource from '@rest-hooks/rest/SimpleResource';\n\nclass NetworkError extends Error {\n  declare status: number;\n  declare response: Response;\n  name = 'NetworkError';\n\n  constructor(response: Response) {\n    super(\n      response.statusText ||\n        /* istanbul ignore next */ `Network response not 'ok': ${response.status}`,\n    );\n    this.status = response.status;\n    this.response = response;\n  }\n}\n\n/**\n * Represents an entity to be retrieved from a server.\n * Typically 1:1 with a url endpoint.\n * @see https://resthooks.io/docs/api/resource\n */\nexport default abstract class Resource extends SimpleResource {\n  /** Perform network request and resolve with HTTP Response */\n  static fetchResponse(input: RequestInfo, init: RequestInit) {\n    let options: RequestInit = init;\n    if (!options.body || typeof options.body === 'string') {\n      options = {\n        ...options,\n        headers: {\n          'Content-Type': 'application/json',\n          ...options.headers,\n        },\n      };\n    }\n    return fetch(input, options)\n      .then(response => {\n        if (!response.ok) {\n          throw new NetworkError(response);\n        }\n        return response;\n      })\n      .catch(error => {\n        // ensure CORS, network down, and parse errors are still caught by NetworkErrorBoundary\n        if (error instanceof TypeError) {\n          (error as any).status = 400;\n        }\n        throw error;\n      });\n  }\n\n  /** Perform network request and resolve with json body */\n  static fetch(input: RequestInfo, init: RequestInit) {\n    return this.fetchResponse(input, init).then((response: Response) => {\n      if (\n        !response.headers.get('content-type')?.includes('json') ||\n        response.status === 204\n      )\n        return response.text();\n      return response.json().catch(error => {\n        error.status = 400;\n        throw error;\n      });\n    });\n  }\n}\n"}}]);