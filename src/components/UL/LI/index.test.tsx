import * as React from "react";
import { cleanup, render } from "react-testing-library";
import LI from "./index";

afterEach(cleanup);

it("renders without crashing without any optional props", () => {
  render(<LI />);
});

it("renders without crashing without all optional props", () => {
  render(
    <LI color="subtle" iconName="Check" fontSize={4} paddingX={3} paddingY={3}>
      Test
    </LI>
  );
});
