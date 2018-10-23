import * as React from "react";
import { cleanup, render } from "react-testing-library";
import RadioInput from "../RadioInput";

afterEach(cleanup);

it("renders without crashing without any optional props", () => {
  render(<RadioInput name="TestInput" value="Test" label="Test" />);
});
