import React, { memo } from 'react';

function MonacoPreloads() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: preloadScript }}
        type="application/javascript"
      />
    </>
  );
}
export default memo(MonacoPreloads);

const monacoPreloads = [
  'https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/editor/editor.main.js',
  //'https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/editor/editor.main.css',
  'https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/editor/editor.main.nls.js',
  'https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/basic-languages/typescript/typescript.js',
  'https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/language/typescript/tsMode.js',
];
const workerPreloads = [
  'https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/base/worker/workerMain.js',
  'https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/language/typescript/tsWorker.js',
];

const preloadScript = `
if (!/bot|googlebot|crawler|spider|robot|crawling|Mobile|Android|BlackBerry/i.test(
  navigator.userAgent,
) && !window.monacoPreloaded) {
[${monacoPreloads.map(href => `'${href}'`).join(',')}].forEach(href => {
window.monacoPreloaded = true;
var link = document.createElement("link");
link.href = href;
link.rel = "preload";
link.as = href.endsWith('.js') ? 'script' : 'style';
document.head.appendChild(link);
});
[${workerPreloads.map(href => `'${href}'`).join(',')}].forEach(href => {
window.monacoPreloaded = true;
var link = document.createElement("link");
link.href = href;
link.rel = "prefetch";
link.as = 'script';
document.head.appendChild(link);
});
}
`;
