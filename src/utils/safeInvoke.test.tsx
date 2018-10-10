import safeInvoke from "./safeInvoke";

it("safeInvoke function is called", () => {
  const func = jest.fn();

  safeInvoke(func);

  expect(func.mock.calls.length).toBe(1);
});

it("safeInvoke doesn't throw", () => {
  safeInvoke(undefined);
});
