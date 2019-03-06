import { css } from "emotion";
import * as React from "react";
import { cleanup, render } from "react-testing-library";
import ButtonToggle from "./index";

afterEach(cleanup);
const mock = jest.fn();

it("renders without crashing without any optional props", () => {
  render(<ButtonToggle onClick={mock}>here</ButtonToggle>);
});

it("renders without crashing with all props", () => {
  const styles = css`
    border-radius: 10px;
  `;

  render(
    <ButtonToggle
      onClick={mock}
      color="dark"
      css={styles}
      isOn={true}
      fillColor="accent"
    >
      Button text
    </ButtonToggle>
  );
});
