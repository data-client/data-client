import { Endpoint } from '@rest-hooks/endpoint';
import type { EndpointInstance } from '@rest-hooks/endpoint';
import type { FetchShape } from '@rest-hooks/core/endpoint/shapes';

type ShapeTypeToSideEffect<T extends 'read' | 'mutate' | 'delete' | undefined> =
  T extends 'read' | undefined ? undefined : true;

const SIDEEFFECT_TYPES: (string | undefined)[] = ['mutate', 'delete'];

export default function shapeToEndpoint<
  Shape extends Partial<FetchShape<any, any>>,
>(
  shape: Shape,
): Shape['fetch'] extends (...args: any) => Promise<any>
  ? EndpointInstance<
      Shape['fetch'],
      Shape['schema'],
      ShapeTypeToSideEffect<Shape['type']>
    > &
      Shape['options']
  : Shape['options'] & { key: Shape['getFetchKey'] } {
  // make this identity function for endpoints
  if ((shape as any).key) return shape as any;
  const sideEffect = SIDEEFFECT_TYPES.includes(shape.type);
  const options = {
    ...shape.options,
    key: shape.getFetchKey,
    schema: shape.schema,
    ...((sideEffect && { sideEffect }) as any),
  };
  if (Object.prototype.hasOwnProperty.call(shape, 'fetch'))
    return new Endpoint(shape.fetch as any, options);

  return options as any;
}
