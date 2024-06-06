'use client';
import { type CacheProvider } from '@data-client/react';
import { useMemo, type ComponentProps } from 'react';

import createPersistedStore from './createPersistedStore.js';

export default function ServerProvider({
  children,
  ...props
}: ProviderProps): React.ReactElement {
  const [ServerCacheProvider] = useMemo(createPersistedStore, []);

  return <ServerCacheProvider {...props}>{children}</ServerCacheProvider>;
}

type ProviderProps = Omit<
  Partial<ComponentProps<typeof CacheProvider>>,
  'initialState'
> & {
  children: React.ReactNode;
};
