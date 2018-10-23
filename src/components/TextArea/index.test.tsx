import * as React from "react";
import { cleanup, render } from "react-testing-library";
import TextArea from "./index";

afterEach(cleanup);

it("renders without crashing without any optional props", () => {
  render(<TextArea id="test" />);
});
