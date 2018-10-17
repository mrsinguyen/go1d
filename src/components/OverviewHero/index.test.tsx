import * as React from "react";
import { render } from "react-testing-library";
import OverviewHero from "./index";

it("renders without crashing without any optional props", () => {
  render(
    <OverviewHero title="Test">
      <div>test content</div>
    </OverviewHero>
  );
});

it("renders without crashing with all props", () => {
  render(
    <OverviewHero
      title="Test"
      backgroundImage="example.jpg"
      subtitle="Subtitle"
      breadcrumbHref="#testing"
      breadcrumbTitle="Results"
      author="GO1 Team"
      duration="9 Days 13 Hours"
    >
      <div>test content</div>
    </OverviewHero>
  );
});
