import applyArray from "./applyArray";

it("applyArray function is called", () => {
  const value = applyArray("test", { test: true });

  expect(value).toEqual(true);
});

it("applyArray function is called", () => {
  const value = applyArray([1, 2, 3], { 1: true, 2: true, 3: true });

  expect(value).toEqual([true, true, true]);
});
