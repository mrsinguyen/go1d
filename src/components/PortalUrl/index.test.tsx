import * as React from "react";
import { cleanup, fireEvent, render } from "react-testing-library";
import PortalUrl from "./index";

afterEach(cleanup);

it("renders without crashing without any optional props", () => {
  render(<PortalUrl id="crashing" />);
});