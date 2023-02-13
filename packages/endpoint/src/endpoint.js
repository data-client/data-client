function runCompat(endpoint, options) {
  endpoint.type = endpoint.sideEffect ? 'mutate' : 'read';
  endpoint.options = { ...options };
  delete endpoint.options.key;
  delete endpoint.options.schema;
  delete endpoint.options.sideEffect;
  delete endpoint.options.fetch;
  delete endpoint.options.getFetchKey;
  delete endpoint.options.options;
  if (Object.keys(endpoint.options).length === 0) {
    delete endpoint.options;
  }
  if (endpoint.schema === undefined) endpoint.schema = null;
}

let CSP = false;
try {
  Function();
} catch (e) {
  /* istanbul ignore next */
  CSP = true;
  // TODO: figure out how to supress the error log instead of tell people it's okay
  /* istanbul ignore next */
  console.error(
    'Content Security Policy: The previous CSP log can be safely ignored - @rest-hooks/endpoint will use setPrototypeOf instead',
  );
}

/**
 * Defines an async data source.
 * @see https://resthooks.io/docs/api/Endpoint
 */
export default class Endpoint extends Function {
  constructor(fetchFunction, options) {
    let self;
    // TODO: Test the fallback?
    /* istanbul ignore if */
    /* istanbul ignore next */
    if (CSP) {
      self = (...args) => self.fetch(...args);
      Object.setPrototypeOf(self, new.target.prototype);
    } else {
      super('return arguments.callee.fetch.apply(arguments.callee, arguments)');
      self = this;
    }
    /** The following is for compatibility with FetchShape */
    self.getFetchKey = params => self.key(params);

    if (fetchFunction) self.fetch = fetchFunction;

    if (options && 'name' in options) {
      self.__name = options.name;
      delete options.name;
    } else if (fetchFunction) {
      self.__name = fetchFunction.name;
      if (
        /* istanbul ignore else */ process.env.NODE_ENV !== 'production' &&
        (fetchFunction.name === 'anonymous' || fetchFunction.name === '') &&
        (!options || !('key' in options)) &&
        this.key === Endpoint.prototype.key
      ) {
        console.error(
          'Endpoint: Autonaming failure.\n\nEndpoint initialized with anonymous function.\nPlease add `name` option or hoist the function definition. https://resthooks.io/rest/api/Endpoint#name',
        );
      }
    }
    Object.assign(self, options);
    Object.defineProperty(self, 'name', {
      get: function () {
        return this.__name;
      },
    });

    /** The following is for compatibility with FetchShape */
    runCompat(self, options);
    return self;
  }

  key(...args) {
    return `${this.name} ${JSON.stringify(args)}`;
  }

  bind(thisArg, ...args) {
    const fetchFunc = this.fetch;
    const keyFunc = this.key;
    return this.extend({
      fetch() {
        return fetchFunc.apply(thisArg ?? this, args);
      },
      key() {
        return keyFunc.apply(this, args);
      },
    });
  }

  extend(options) {
    // make a constructor/prototype based off this
    // extend from it and init with options sent
    class E extends this.constructor {}

    Object.assign(E.prototype, this);
    const instance = new E(options.fetch, options);

    /** The following is for compatibility with FetchShape */
    runCompat(instance, { ...this.options, ...options });

    return instance;
  }

  /* istanbul ignore next */
  static {
    /* istanbul ignore if */
    if (runCompat.name !== 'runCompat') {
      this.prototype.key = function (...args) {
        console.error('Rest Hooks Error: https://resthooks.io/errors/osid');
        return `${this.name} ${JSON.stringify(args)}`;
      };
    }
  }
}
export const ExtendableEndpoint = Endpoint;
