import * as React from "react";
import { cleanup, render } from "react-testing-library";
import InputTextAffix from "./index";

afterEach(cleanup);

it("renders without crashing without any optional props", () => {
  render(<InputTextAffix text=".mygo1.com" />);
});

it("renders without crashing with optional props", () => {
  render(<InputTextAffix text=".mygo1.com" />);
});
