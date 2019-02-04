import * as React from "react";
import { cleanup, render } from "react-testing-library";
import DateRange from "./";

afterEach(cleanup);

it("renders with minimal props", () => {
  render(<DateRange />);
});
