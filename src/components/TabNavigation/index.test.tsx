import { css } from "emotion";
import * as React from "react";
import { cleanup, render } from "react-testing-library";
import Pill from "../Pill";
import Tab from "../Tab";
import TabNavigation from "./index";

afterEach(cleanup);

it("renders without crashing without any optional props", () => {
  render(<TabNavigation />);
});

it("renders with some children", () => {
  render(
    <TabNavigation>
      <Tab href="/overview" text="Overview">
        Overview
      </Tab>
      <Tab href="/content" isSelected={true}>
        Content
      </Tab>
      <Tab href="/import">Import</Tab>
    </TabNavigation>
  );
});

it("renders with some children", () => {
  render(
    <TabNavigation>
      <Tab href="/overview" text="Overview">
        Overview
      </Tab>
      <Tab href="/content" isSelected={true}>
        Content
        <Pill color="note" marginLeft={3}>
          26
        </Pill>
      </Tab>
      <Tab href="/import">Import</Tab>
    </TabNavigation>
  );
});
