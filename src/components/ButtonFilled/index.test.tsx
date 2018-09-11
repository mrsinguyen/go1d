import { css } from "emotion";
import * as React from "react";
import { render } from "react-testing-library";
import ButtonFilled from "./index";

it("renders without crashing without any optional props", () => {
  render(<ButtonFilled>here</ButtonFilled>);
});

it("renders without crashing with all props", () => {
  const styles = css`
    border-radius: 10px;
  `;

  render(
    <ButtonFilled color="subtle" css={styles} backgroundColor="lightest">
      Button text
    </ButtonFilled>
  );
});
