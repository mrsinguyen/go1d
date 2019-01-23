import isFunction = require("lodash/isFunction");

function safeInvoke(func, ...args): any {
  if (isFunction(func)) {
    return func(...args);
  }

  return undefined;
}

export default safeInvoke;
