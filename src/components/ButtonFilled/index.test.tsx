import { css } from "emotion";
import * as React from "react";
import { render } from "react-testing-library";
import ButtonFilled from "./index";

const mock = jest.fn();

it("renders without crashing without any optional props", () => {
  render(<ButtonFilled onClick={mock}>here</ButtonFilled>);
});

it("renders without crashing with all props", () => {
  const styles = css`
    border-radius: 10px;
  `;

  render(
    <ButtonFilled
      onClick={mock}
      color="subtle"
      css={styles}
      backgroundColor="lightest"
    >
      Button text
    </ButtonFilled>
  );
});

it("renders boxshadow correctly", () => {
  render(
    <ButtonFilled color="accent" backgroundColor="lightest" onClick={mock}>
      Button text
    </ButtonFilled>
  );
});
