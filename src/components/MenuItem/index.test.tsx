import * as React from "react";
import { render } from "react-testing-library";
import MenuItem from "./index";

it("renders without crashing without any optional props", () => {
  render(
    <MenuItem iconName="Home" href="test">
      here
    </MenuItem>
  );
});

it("renders without crashing with all props", () => {
  render(
    <MenuItem iconName="Home" href="test" collapsed={false}>
      Button text
    </MenuItem>
  );
});
