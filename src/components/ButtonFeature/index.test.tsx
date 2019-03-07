import { css } from "emotion";
import * as React from "react";
import { render } from "react-testing-library";
import ButtonFeature from "./index";

const mock = jest.fn();

it("renders without crashing without any optional props", () => {
  render(<ButtonFeature onClick={mock}>Button text</ButtonFeature>);
});

it("renders without crashing with all props", () => {
  const styles = css`
    border-radius: 10px;
  `;

  render(
    <ButtonFeature
      backgroundColor="lightest"
      iconMarginBottom={0}
      color="subtle"
      css={styles}
      padding={3}
      onClick={mock}
    >
      Button text
    </ButtonFeature>
  );
});
