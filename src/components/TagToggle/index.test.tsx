import * as React from "react";
import { cleanup, render } from "react-testing-library";
import TagToggle from "./index";

afterEach(cleanup);
const mock = jest.fn();

it("renders without crashing without any optional props", () => {
  render(<TagToggle onClick={mock}>here</TagToggle>);
});

it("renders without crashing with all props", () => {
  const styles = {
    borderRadius: "8px",
  };

  render(
    <TagToggle
      onClick={mock}
      color="faint"
      css={styles}
      isOn={true}
      fillColor="accent"
    >
      Button text
    </TagToggle>
  );
});
