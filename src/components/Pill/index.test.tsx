import * as React from "react";
import { cleanup, render } from "react-testing-library";
import Pill from "./index";

afterEach(cleanup);

it("renders without crashing without any optional props", () => {
  render(<Pill>here</Pill>);
});

it("renders without crashing with all props", () => {
  render(<Pill color="subtle">Pill text</Pill>);
});
