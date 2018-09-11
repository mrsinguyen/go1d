import { css } from "emotion";
import * as React from "react";
import { render } from "react-testing-library";
import ButtonMinimal from "./index";

it("renders without crashing without any optional props", () => {
  render(<ButtonMinimal>here</ButtonMinimal>);
});

it("renders without crashing with all props", () => {
  const styles = css`
    border-radius: 10px;
  `;

  render(
    <ButtonMinimal color="dark" css={styles} backgroundColor="lightest">
      Button text
    </ButtonMinimal>
  );
});
