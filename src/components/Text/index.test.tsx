import { css } from "emotion";
import * as React from "react";
import { cleanup, render } from "react-testing-library";
import Text from "./index";

afterEach(cleanup);

it("renders without crashing without any optional props", () => {
  render(<Text>here</Text>);
});

it("renders without crashing with all props", () => {
  const styles = css`
    border-radius: 10px;
  `;

  render(
    <Text
      element="h2"
      fontWeight="semibold"
      fontFamily="Georgia, serif"
      fontStyle="italic"
      lineHeight="ui"
      fontSize={4}
      color="subtle"
      css={styles}
    >
      Button text
    </Text>
  );
});
