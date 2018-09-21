import * as React from "react";
import { render } from "react-testing-library";
import MenuItem from "./index";

it("renders without crashing without any optional props", () => {
  render(
    <MenuItem title="test" iconName="Home" href="test">
      here
    </MenuItem>
  );
});

it("renders without crashing with all props", () => {
  const mock = jest.fn();

  render(
    <MenuItem title="test" iconName="Home" href="test" collapsed={false}>
      Button text
    </MenuItem>
  );
});
