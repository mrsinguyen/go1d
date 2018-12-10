import * as React from "react";
import { cleanup, render } from "react-testing-library";
import Lesson from "./index";

afterEach(cleanup);

it("renders without crashing without any optional props", () => {
  render(<Lesson />);
});

it("renders without crashing with full options", () => {
  render(
    <Lesson title="course 1" type="course" duration={60} author="Einstein" />
  );
});
