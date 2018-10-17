import * as React from "react";
import { render } from "react-testing-library";
import OverviewHero from "./index";

const mock = jest.fn();

it("renders without crashing without any optional props", () => {
  render(
    <OverviewHero 
      title="Test"
      backgroundImage="example.jpg">
      <div>content</div>
    </OverviewHero>
  );
});

it("renders without crashing with all props", () => {
  render(
    <OverviewHero 
      title="Test"
      backgroundImage="example.jpg">
      <div>content</div>
    </OverviewHero>
  );
});
