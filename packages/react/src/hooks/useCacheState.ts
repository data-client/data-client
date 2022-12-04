import type { State } from '@rest-hooks/core';
import React, { useContext } from 'react';
import 'core-js/es/object/has-own';

import { StateContext, StoreContext } from '../context.js';

const useCacheState: () => State<unknown> =
  typeof window === 'undefined' && Object.hasOwn(React, 'useSyncExternalStore')
    ? () => {
        const store = useContext(StoreContext);
        const state = useContext(StateContext);
        const syncState = React.useSyncExternalStore(
          store.subscribe,
          store.getState,
          store.getState,
        );
        return store.uninitialized ? state : syncState;
      }
    : () => useContext(StateContext);

export default useCacheState;
