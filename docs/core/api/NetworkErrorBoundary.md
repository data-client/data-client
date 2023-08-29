---
title: '<NetworkErrorBoundary />'
---

Displays a fallback component when a network error happens in its subtree.

:::info

Catches any error with `status` member.

:::

```tsx
interface Props {
  children: React.ReactNode;
  className?: string;
  fallbackComponent: React.ComponentType<{
    error: NetworkError;
    className?: string;
  }>;
}
export default class NetworkErrorBoundary extends React.Component<Props> {
  static defaultProps: {
    fallbackComponent: ({
      error,
    }: {
      error: NetworkError;
      className?: string;
    }) => JSX.Element;
  };
}
```

Custom fallback usage example:

```tsx
import React from 'react';
import {
  CacheProvider,
  NetworkErrorBoundary,
  NetworkError,
} from '@data-client/react';

function ErrorPage({
  error,
  className,
}: {
  error: NetworkError;
  className?: string;
}) {
  return (
    <div className={className}>
      {error.status} {error.response && error.response.statusText}
    </div>
  );
}

export default function App(): React.ReactElement {
  return (
    <CacheProvider>
      <NetworkErrorBoundary fallbackComponent={ErrorPage} className="error">
        <Router />
      </NetworkErrorBoundary>
    </CacheProvider>
  );
}
```

Note: Once `<NetworkErrorBoundary />` catches an error it will only render the fallback
until it is remounted. To get around this you'll likely want to place the boundary at
locations that will cause remounts when the error should be cleared. This is usually
below the route itself.
