import formatDuration from "./durationFormatter";

it("formatDuration works as expected", () => {
  const result1 = formatDuration(1);
  expect(result1).toBe("1 min");
  const result2 = formatDuration(25);
  expect(result2).toBe("25 mins");
  const result3 = formatDuration(60);
  expect(result3).toBe("1 hr");
  const result4 = formatDuration(80);
  expect(result4).toBe("1 hr 20 mins");
  const result5 = formatDuration(125);
  expect(result5).toBe("2 hrs 5 mins");
  const result6 = formatDuration(1440);
  expect(result6).toBe("1 day");
  const result7 = formatDuration(1600);
  expect(result7).toBe("1 day 2 hrs 40 mins");
  const result8 = formatDuration(4056);
  expect(result8).toBe("2 days 19 hrs 36 mins");
  const result9 = formatDuration(undefined);
  expect(result9).toBe("");
});

it("formatDuration doesn't throw", () => {
  formatDuration(60);
});
