import { isFunction } from "lodash";

function safeInvoke(func, ...args): void {
  if (isFunction(func)) {
    func(...args);
  }
}

export default safeInvoke;
