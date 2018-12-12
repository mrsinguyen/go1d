import { isFunction } from "lodash";

function safeInvoke(func, ...args): any {
  if (isFunction(func)) {
    return func(...args);
  }

  return undefined;
}

export default safeInvoke;
