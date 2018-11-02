import * as React from "react";
import { cleanup, render } from "react-testing-library";
import UL from "./index";
import LI from "./LI/index";

afterEach(cleanup);

it("renders without crashing without any optional props", () => {
  render(<UL />);
});

it("renders without crashing without all optional props", () => {
  render(
    <UL color="subtle" iconName="Check" fontSize={4} paddingX={3} paddingY={3}>
      <LI>Test</LI>
      <LI>Test</LI>
      <LI>Test</LI>
      <LI>Test</LI>
    </UL>
  );
});
