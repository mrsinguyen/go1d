import * as React from "react";
import { cleanup, render } from "react-testing-library";
import Portal from "./index";

afterEach(cleanup);

it("renders without crashing ", () => {
  render(<Portal />);
});
