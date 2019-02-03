import * as React from "react";
import { cleanup, render } from "react-testing-library";
import Spinner from "./";

afterEach(cleanup);

it("renders", () => {
  render(<Spinner />);
});
