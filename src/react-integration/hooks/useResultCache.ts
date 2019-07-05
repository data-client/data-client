import { useContext, useMemo } from 'react';

import { ReadShape } from '~/resource';
import { StateContext } from '../context';
import { makeResults } from '~/state/selectors';

type Resolved<P extends Promise<any>> = P extends Promise<infer R> ? R : any;

// TODO: actually track fetch return type - it's always 'any' now
/** Access result body if available.
 *
 * Useful for retrieving response meta-data like pagination info
 */
export default function useResultCache<
  Params extends Readonly<object>,
  D extends object
>(
  { getUrl, fetch }: ReadShape<any, Params, any>,
  params: Params | null,
  defaults?: D,
): D extends undefined
  ? Resolved<ReturnType<typeof fetch>> | null
  : Readonly<D> {
  const state = useContext(StateContext);
  // TODO: make sure getUrl stays the same
  const resultSelector = useMemo(() => makeResults((p: Params) => getUrl(p)), [
    getUrl,
  ]);
  const results = useMemo(
    () => params && resultSelector(state, params),
    // params must be serialized in check
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [params && getUrl(params), resultSelector, state],
  );
  if (defaults && !results) {
    return defaults as any;
  }
  return results as any;
}
