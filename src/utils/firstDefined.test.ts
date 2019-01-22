import firstDefined from "./firstDefined";

it("Finds the first defined thing", () => {
  const notMe = undefined;
  const getMe = firstDefined(undefined, notMe, "correct", "oh no");
  expect(getMe).toEqual("correct");
});
