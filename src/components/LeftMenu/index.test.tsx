import * as React from "react";
import { render } from "react-testing-library";
import LeftMenu from "./index";

it("renders without crashing without any optional props", () => {
  render(<LeftMenu title="test">here</LeftMenu>);
});

it("renders without crashing with all props", () => {
  const mock = jest.fn();

  render(
    <LeftMenu title="test" showMenuButton={false} onMenuButtonClick={mock}>
      Button text
    </LeftMenu>
  );
});
