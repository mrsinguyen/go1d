import { css } from "emotion";
import * as React from "react";
import { cleanup, render } from "react-testing-library";
import Base from "./index";

afterEach(cleanup);

it("renders without crashing without any optional props", () => {
  render(<Base />);
});

it("renders without crashing with all props added to it", () => {
  const styles = css`
    color: pink;
    background: green;
  `;
  render(
    <Base element="span" css={styles}>
      Some children
    </Base>
  );
});
