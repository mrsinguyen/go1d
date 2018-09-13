import { css } from "emotion";
import * as React from "react";
import { cleanup, render } from "react-testing-library";
import Button from "./index";

afterEach(cleanup);

it("renders without crashing without any optional props", () => {
  render(<Button>Button text</Button>);
});

it("renders without crashing with all props", () => {
  const styles = css`
    border-radius: 10px;
  `;

  render(
    <Button size="lg" color="subtle" css={styles} backgroundColor="lightest">
      Button text
    </Button>
  );
});
