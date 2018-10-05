import * as React from "react";
import { cleanup, render } from "react-testing-library";
import InputComponent from "./Input";

afterEach(cleanup);

it("renders without crashing", () => {
  render(<InputComponent />);
});
