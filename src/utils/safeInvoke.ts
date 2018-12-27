import { isFunction } from "lodash";

function safeInvoke<T>(func: (...args: any[]) => T, ...args): T {
  if (isFunction(func)) {
    return func(...args);
  }

  return undefined;
}

export default safeInvoke;
