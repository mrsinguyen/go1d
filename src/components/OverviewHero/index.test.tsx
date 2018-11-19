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
      subtitle={<div>Subtitle</div>}
      breadcrumb={<div>Subtitle</div>}
      contentWidth="wide"
      author="GO1 Team"
      duration={4}
      ctaCard={<div />}
    >
      <div>test content</div>
    </OverviewHero>
  );
});

it("renders without children wrapper", () => {
  render(
    <OverviewHero
      title={<h1>Title</h1>}
      backgroundImage="example.jpg"
      subtitle={<div>Subtitle</div>}
      breadcrumb={<div>Subtitle</div>}
      contentWidth="wide"
      author="GO1 Team"
      duration={4}
      ctaCard={<div />}
      childrenWrapper={false}
      childrenWrapperCss={``}
    >
      <div>test content</div>
    </OverviewHero>
  );
});
