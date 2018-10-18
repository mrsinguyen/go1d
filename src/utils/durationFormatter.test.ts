import formatDuration from "./durationFormatter";

it("formatDuration works as expected", () => {
  const result1 = formatDuration(60);
  expect(result1).toBe("1 hr");
  const result2 = formatDuration(80);
  expect(result2).toBe("1 hr 20 min");
  const result3 = formatDuration(125);
  expect(result3).toBe("2 hr 5 min");
  const result4 = formatDuration(25);
  expect(result4).toBe("25 min");
  const result5 = formatDuration(1440);
  expect(result5).toBe("1 day");
  const result6 = formatDuration(1600);
  expect(result6).toBe("1 day 2 hr 40 min");
  const result7 = formatDuration(undefined);
  expect(result7).toBe("");
});

it("formatDuration doesn't throw", () => {
  formatDuration(60);
});
