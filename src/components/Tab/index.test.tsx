import { css } from "emotion";
import * as React from "react";
import { cleanup, render } from "react-testing-library";
import Pill from "../Pill";
import Tab from "./index";

afterEach(cleanup);

it("renders without crashing without any optional props", () => {
  render(<Tab text="Only Required Field" />);
});

it("renders without crashing with all props added to it", () => {
  render(
    <Tab href="link to somewhere" isSelected={true}>
      Title
      <Pill>2</Pill>
    </Tab>
  );
});

it("renders when not selected", () => {
  render(
    <Tab href="link to somewhere" isSelected={false}>
      Title
      <Pill>2</Pill>
    </Tab>
  );
});
