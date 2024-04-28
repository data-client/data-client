cp ./packages/core/index.d.ts ./website/src/components/Playground/editor-types/@data-client/core.d.ts
echo 'type NoInfer<T> = T;' >> ./website/src/components/Playground/editor-types/@data-client/core.d.ts
cp ./packages/endpoint/index.d.ts ./website/src/components/Playground/editor-types/@data-client/endpoint.d.ts
echo 'type NoInfer<T> = T;' >> ./website/src/components/Playground/editor-types/@data-client/endpoint.d.ts
cp ./packages/graphql/index.d.ts ./website/src/components/Playground/editor-types/@data-client/graphql.d.ts
cp ./packages/hooks/index.d.ts ./website/src/components/Playground/editor-types/@data-client/hooks.d.ts
cp ./packages/normalizr/index.d.ts ./website/src/components/Playground/editor-types/@data-client/normalizr.d.ts
echo 'type NoInfer<T> = T;' >> ./website/src/components/Playground/editor-types/@data-client/normalizr.d.ts
cp ./packages/react/index.d.ts ./website/src/components/Playground/editor-types/@data-client/react.d.ts
echo 'type NoInfer<T> = T;' >> ./website/src/components/Playground/editor-types/@data-client/react.d.ts
cp ./packages/rest/index.d.ts ./website/src/components/Playground/editor-types/@data-client/rest.d.ts
echo 'type NoInfer<T> = T;' >> ./website/src/components/Playground/editor-types/@data-client/rest.d.ts
mkdir -p ./website/src/components/Playground/editor-types/@data-client/rest
mkdir -p ./website/src/components/Playground/editor-types/@data-client/core
mkdir -p ./website/src/components/Playground/editor-types/@data-client/react
cp ./packages/rest/next.d.ts ./website/src/components/Playground/editor-types/@data-client/rest/next.d.ts
cp ./packages/core/next.d.ts ./website/src/components/Playground/editor-types/@data-client/core/next.d.ts
cp ./packages/react/next.d.ts ./website/src/components/Playground/editor-types/@data-client/react/next.d.ts
cp ./node_modules/@types/react/index.d.ts ./website/src/components/Playground/editor-types/react.d.ts
rm ./website/src/components/Playground/editor-types/globals.d.ts
yarn run rollup --config ./scripts/globals.rollup.config.js