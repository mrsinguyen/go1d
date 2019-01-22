export default function firstDefined(...args) {
  return args.find(row => row !== undefined);
}
