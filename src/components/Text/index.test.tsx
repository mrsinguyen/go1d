import { css } from "emotion";
import * as React from "react";
import { render } from "react-testing-library";
import Text from "./index";

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
      fontWeight="900"
      fontFamily="Georgia, serif"
      fontStyle="italic"
      lineHeight={2}
      fontSize={4}
      color="subtle"
      css={styles}
    >
      Button text
    </Text>
  );
});
