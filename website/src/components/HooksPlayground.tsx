import React, { useEffect, useState, memo } from 'react';
import * as restHooks from 'rest-hooks';
import * as rest from '@rest-hooks/rest';
import * as hooks from '@rest-hooks/hooks';
import * as graphql from '@rest-hooks/graphql';
import BigNumber from 'bignumber.js';
import { FixtureEndpoint } from '@rest-hooks/test';

import {
  TodoResource as BaseTodoResource,
  Todo,
  TodoEndpoint,
} from './Playground/resources/TodoResource';
import Playground from './Playground';
import ResetableErrorBoundary from './ResettableErrorBoundary';

const mockFetch = (getResponse, name, delay = 150) => {
  const fetch = (...args) =>
    new Promise(resolve =>
      setTimeout(() => resolve(getResponse(...args)), delay),
    );
  if (name)
    Object.defineProperty(fetch, 'name', { value: name, writable: false });
  return fetch;
};

const mockLastUpdated = ({ id }) =>
  fetch(`/api/currentTime/${id}`).then(res => res.json());
class TimedEntity extends rest.Entity {
  id = '';
  pk() {
    return this.id;
  }

  static schema = {
    updatedAt: Date,
  };
}

const lastUpdated = new restHooks.Endpoint(mockLastUpdated, {
  schema: TimedEntity,
});

function CurrentTime() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const intervalID = setInterval(() => setTime(new Date()));
    return () => clearInterval(intervalID);
  }, []);
  return (
    <time>
      {Intl.DateTimeFormat('en-US', { timeStyle: 'long' }).format(time)}
    </time>
  );
}

const TodoResource = {
  ...BaseTodoResource,
  getList: BaseTodoResource.getList.extend({
    process(todos) {
      return todos.slice(0, 7);
    },
  }),
};

const scope = {
  ...restHooks,
  ...rest,
  ...graphql,
  ...hooks,
  mockFetch,
  BigNumber,
  lastUpdated,
  TimedEntity,
  CurrentTime,
  ResetableErrorBoundary,
};
const scopeWithEndpoint = {
  ...scope,
  Todo,
  TodoResource,
  TodoEndpoint,
};

const HooksPlayground = ({
  children,
  endpointCode,
  groupId,
  hidden = false,
  defaultOpen,
  row = false,
  fixtures,
}) => (
  <Playground
    scope={endpointCode || Array.isArray(children) ? scope : scopeWithEndpoint}
    noInline
    groupId={groupId}
    defaultOpen={defaultOpen}
    row={row}
    hidden={hidden}
    fixtures={fixtures}
  >
    {typeof children === 'string'
      ? (endpointCode ? endpointCode + '\n\n' : '') + children
      : Array.isArray(children)
      ? children
      : children.props.children}
  </Playground>
);
HooksPlayground.defaultProps = {
  defaultOpen: 'n' as const,
  fixtures: [] as FixtureEndpoint[],
};
export default memo(HooksPlayground);

//child.props.children.props.title
