import { loader } from '@monaco-editor/react';

import { MONACO_VERSION } from './MonacoPreloads';

export let monacoMaster;

if (
  typeof window !== 'undefined' &&
  !/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent)
) {
  const rhDeps = [
    'rest',
    'rest/next',
    'react/next',
    'core/next',
    'core',
    'react',
    'endpoint',
    'normalizr',
    'graphql',
    'hooks',
  ] as const;

  const suggestionDependencies = [
    'react',
    '@data-client/rest',
    '@data-client/react',
    '@data-client/graphql',
    '@data-client/hooks',
    'bignumber.js',
  ];

  if (!monacoMaster) {
    loader.config({
      paths: {
        vs: `https://cdn.jsdelivr.net/npm/monaco-editor@${MONACO_VERSION}/min/vs`,
      },
    });
    const monacoPromise = loader.init();
    monacoPromise.then(monaco => {
      // or make sure that it exists by other ways
      if (!monaco) return;
      monacoMaster = monaco;
      monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
        allowNonTsExtensions: true,
        target: monaco.languages.typescript.ScriptTarget.ES2017,
        jsx: monaco.languages.typescript.JsxEmit.ReactJSX,
        strict: true,
        strictNullChecks: true,
        exactOptionalPropertyTypes: true,
        lib: ['dom', 'esnext'],
        module: monaco.languages.typescript.ModuleKind.ESNext,
        moduleResolution:
          monaco.languages.typescript.ModuleResolutionKind.NodeJs,
        typeRoots: ['node_modules/@types'],
        allowSyntheticDefaultImports: true,
        skipLibCheck: true,
        noImplicitAny: false,
      });
      // TODO: load theme from docusaurus config
      // see https://microsoft.github.io/monaco-editor/playground.html for full options
      monaco.editor.defineTheme('prism', {
        base: 'vs-dark',
        inherit: true,
        rules: [
          { token: 'number', foreground: 'f78c6c' },
          { token: 'string', foreground: 'b6d986' },
          {
            token: 'keyword',
            fontStyle: 'italic',
            foreground: '7da4f6',
          },
          // type definitions variables like const X or class X
          { token: 'type', foreground: 'ffcb6b' },
          { token: 'delimiter', foreground: 'C792EA' },

          { token: 'tag', foreground: 'FF5590' },
        ],
        colors: {
          //'editor.background': '#292d3e',
          'editor.foreground': '#bfc7d5',
          //'editor.lineHighlightBorder': '#33384d',
          'editor.inactiveSelectionBackground': '#484d5b',
        },
      });
      //monaco.languages.typescript.getTypeScriptWorker().then(worker => worker)
      // go to definition
      monaco.editor.registerEditorOpener({
        openCodeEditor(sourceEditor, resource, selectionOrPosition) {
          if (resource.path.startsWith('/')) {
            // alternatively set model directly in the editor if you have your own tab/navigation implementation\
            const model = monaco.editor.getModel(resource);
            const destinationEditor = monaco.editor
              .getEditors()
              .find(editor => editor.getModel() === model);
            if (!destinationEditor) return false;
            // focus event is handled by editor to show that tab
            destinationEditor.focus();
            requestIdleCallback(() => {
              if (monaco.Range.isIRange(selectionOrPosition)) {
                destinationEditor.revealRangeInCenterIfOutsideViewport(
                  selectionOrPosition,
                );
                destinationEditor.setSelection(selectionOrPosition);
              } else {
                if (selectionOrPosition) {
                  destinationEditor.revealPositionInCenterIfOutsideViewport(
                    selectionOrPosition,
                  );
                  destinationEditor.setPosition(selectionOrPosition);
                }
              }
              destinationEditor.focus();
            });

            return true;
          }
          return false;
        },
      });
      // autocomplete imports
      monaco.languages.registerCompletionItemProvider('typescript', {
        // These characters should trigger our `provideCompletionItems` function
        triggerCharacters: ["'", '"', '.', '/'],
        // Function which returns a list of autocompletion ietems. If we return an empty array, there won't be any autocompletion.
        provideCompletionItems: (model, position) => {
          // Get all the text content before the cursor
          const textUntilPosition = model.getValueInRange({
            startLineNumber: 1,
            startColumn: 1,
            endLineNumber: position.lineNumber,
            endColumn: position.column,
          });
          // Match things like `from "` and `require("`
          if (
            /(([\s|\n]+from\s+)|(\brequire\b\s*\())["|'][^'^"]*$/.test(
              textUntilPosition,
            )
          ) {
            // It's probably a `import` statement or `require` call
            if (
              textUntilPosition.endsWith('.') ||
              textUntilPosition.endsWith('/')
            ) {
              //const thisId = /\/\d+\//g.exec(model.uri.path)?.[0];
              //if (!thisId) return;
              const completions = monaco.editor
                .getModels()
                .map(model => model.uri.path)
                /*.filter(
                  path => path.startsWith(thisId) && path !== model.uri.path,
                )*/
                .map(path => {
                  const candidateId = /\/\d+\//g.exec(path)?.[0] ?? '';
                  const file = path.substring(candidateId.length - 1);
                  return {
                    // Show the full file path for label
                    label: file,
                    // Don't keep extension for JS files
                    insertText: file.replace(/\.tsx?$/, ''),
                    kind: monaco.languages.CompletionItemKind.Module,
                  };
                });
              if (!completions.length) return;
              return { suggestions: completions };
              // User is trying to import a file
              /*return Object.keys(this.props.files)
              .filter(path => path !== this.props.path)
              .map(path => {
                let file = getRelativePath(this.props.path, path);
                // Only show files that match the prefix typed by user
                if (file.startsWith(prefix)) {
                  // Remove typed text from the path so that don't insert it twice
                  file = file.slice(typed.length);
                  return {
                    // Show the full file path for label
                    label: file,
                    // Don't keep extension for JS files
                    insertText: file.replace(/\.js$/, ''),
                    kind: monaco.languages.CompletionItemKind.File,
                  };
                }
                return null;
              })
              .filter(Boolean);*/
            } else {
              // User is trying to import a dependency
              return {
                suggestions: suggestionDependencies.map(name => ({
                  label: name,
                  //detail: suggestionDependencies[name],
                  kind: monaco.languages.CompletionItemKind.Module,
                  insertText: name,
                })),
              };
            }
          }
        },
      });
    });

    Promise.allSettled([
      monacoPromise,
      import(
        /* webpackChunkName: 'es2022DTS', webpackPreload: true */ '!!raw-loader?esModule=false!./editor-types/lib.es2022.object.d.ts'
      ),
      import(
        /* webpackChunkName: 'reactDTS', webpackPreload: true */ '!!raw-loader?esModule=false!./editor-types/react.d.ts'
      ),
      import(
        /* webpackChunkName: 'bignumberDTS', webpackPreload: true */ '!!raw-loader?esModule=false!./editor-types/bignumber.d.ts'
      ),
      import(
        /* webpackChunkName: 'uuidDTS', webpackPreload: true */ '!!raw-loader?esModule=false!./editor-types/uuid.d.ts'
      ),
      ...rhDeps.map(
        dep =>
          import(
            /* webpackChunkName: '[request]', webpackPreload: true */ `!!raw-loader?esModule=false!./editor-types/@data-client/${dep}.d.ts`
          ),
      ),
    ]).then(([mPromise, ...settles]) => {
      if (mPromise.status !== 'fulfilled' || !mPromise.value) return;
      const monaco = mPromise.value;
      const [es2022, react, bignumber, uuid, ...rhLibs] = settles.map(result =>
        result.status === 'fulfilled' ? result.value.default : '',
      );

      monaco.languages.typescript.typescriptDefaults.addExtraLib(
        `declare module "react/jsx-runtime" {
        import './';
      }`,
        'file:///node_modules/@types/react/jsx-runtime.d.ts',
      );
      monaco.languages.typescript.typescriptDefaults.addExtraLib(
        `import * as React from 'react'

    declare global {
      namespace JSX {
        interface IntrinsicElements {
          strike: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        }
      }
    }`,
        'file:///node_modules/@types/react/more.d.ts',
      );
      monaco.languages.typescript.typescriptDefaults.addExtraLib(
        `declare function render(component:JSX.Element):void;
        declare function CurrentTime(props: {}):JSX.Element;
        declare function CancelButton(props: { onClick: () => void }):JSX.Element;
        declare function Avatar(props: { src: string }):JSX.Element;
        declare function Formatted({ downColor, formatter, formatterFn, timeout, transition, transitionLength, upColor, value, stylePrefix, }: NumberProps):JSX.Element
        declare function ResetableErrorBoundary(props: { children: JSX.ReactChild }):JSX.Element;
        declare function randomFloatInRange(min: number, max: number, decimals?: number): number;
        declare class FloatSerializer extends Number {}
        declare interface NumberProps {
          /**
           * Color value when the component flashes 'down'.
           */
          downColor?: string;
          /**
           * One of the built in formatters.
           */
          formatter?: 'currency' | 'percentage' | 'number';
          /**
           * Pass your own formatter function.
           */
          formatterFn?: Formatter;
          /**
           * Prefix for the CSS selectors in the DOM.
           */
          stylePrefix?: string;
          /**
           * Amount of time the flashed state is visible for, in milliseconds.
           */
          timeout?: number;
          /**
           * Custom CSS transition property.
           */
          transition?: string;
          /**
           * Transition length, in milliseconds.
           */
          transitionLength?: number;
          /**
           * Color value when the component flashes 'up'.
           */
          upColor?: string;
          /**
           * Value to display. The only required prop.
           */
          value: number;
        }`,
      );
      monaco.languages.typescript.typescriptDefaults.addExtraLib(
        es2022,
        'es2022',
      );
      monaco.languages.typescript.typescriptDefaults.addExtraLib(
        `declare module "react" { ${react} }`,
        'file:///node_modules/@types/react/index.d.ts',
      );
      monaco.languages.typescript.typescriptDefaults.addExtraLib(
        `declare module "bignumber.js" { ${bignumber} }`,
        'file:///node_modules/bignumber.js/index.d.ts',
      );
      monaco.languages.typescript.typescriptDefaults.addExtraLib(
        `declare module "uuid" { ${uuid} }`,
        'file:///node_modules/@types/uuid/index.d.ts',
      );
      monaco.languages.typescript.typescriptDefaults.addExtraLib(
        `declare globals { ${react} }`,
      );

      rhLibs.forEach((lib, i) => {
        const dep = rhDeps[i];
        monaco.languages.typescript.typescriptDefaults.addExtraLib(
          `declare module "@data-client/${dep}" { ${lib} }`,
          `file:///node_modules/@data-client/${dep}/index.d.ts`,
        );
        if (['rest', 'react'].includes(dep)) {
          monaco.languages.typescript.typescriptDefaults.addExtraLib(
            `declare globals { ${lib} }`,
          );
        }
      });

      monaco.languages.typescript.typescriptDefaults.setEagerModelSync(true);
      return monaco;
    });
  }
}
