import * as React from "react";
import { cleanup, render } from "react-testing-library";
import InputSuffix from "./index";

afterEach(cleanup);

it("renders without crashing without any optional props", () => {
  render(<InputSuffix id="test" suffixValue="test.com" />);
});

it("renders without crashing with optional props", () => {
  render(<InputSuffix id="test" suffixValue=".mygo1.com" size="lg" />);
});
