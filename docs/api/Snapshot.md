---
title: Snapshot
---

<head>
  <title>Controller - Imperative Controls for Rest Hooks</title>
</head>

import LanguageTabs from '@site/src/components/LanguageTabs';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import EndpointInterfaceSource from '!!raw-loader!../../packages/endpoint/src/SnapshotInterface.ts';
import CodeBlock from '@theme/CodeBlock';
import GenericsTabs from '@site/src/components/GenericsTabs';

<GenericsTabs>

```ts
interface Snapshot {
  getResponse(endpoint, ...args)​ => { data, expiryStatus, expiresAt };
  getError(endpoint, ...args)​ => ErrorTypes | undefined;
  date: number;
}
```
<CodeBlock className="language-typescript">{EndpointInterfaceSource}</CodeBlock>

</GenericsTabs>





:::tip

Use [Controller.snapshot()](./Controller.md#snapshot) to construct a snapshot

:::

## getResponse(endpoint, ...args) {#getResponse}

```ts title="returns"
{
  data: DenormalizeNullable<E['schema']>;
  expiryStatus: ExpiryStatus;
  expiresAt: number;
}
```

Gets the (globally referentially stable) response for a given endpoint/args pair from state given.

### data

The denormalize response data. Guarantees global referential stability for all members.

### expiryStatus

```ts
export enum ExpiryStatus {
  Invalid = 1,
  InvalidIfStale,
  Valid,
}
```

#### Valid

- Will never suspend.
- Might fetch if data is stale

#### InvalidIfStale

- Will suspend if data is stale.
- Might fetch if data is stale

#### Invalid

- Will always suspend
- Will always fetch

### expiresAt

A number representing time when it expires. Compare to Date.now().


## getError(endpoint, ...args) {#getError}

Gets the error, if any, for a given endpoint. Returns undefined for no errors.


## date

When the fetch was called that resulted in this snapshot.
