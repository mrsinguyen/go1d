import * as React from "react";
import { cleanup, render } from "react-testing-library";
import OverviewCtaCard from "./index";

afterEach(cleanup);

it("renders without crashing without any optional props", () => {
  render(<OverviewCtaCard />);
});

it("renders without crashing with all available props", () => {
  const onButtonClickHandler = () => {
    alert("test");
  };
  render(
    <OverviewCtaCard
      backgroundImage="example.jpg"
      likes={100}
      dislikes={20}
      enrolled={1000}
      buttonLabel="Import"
      onButtonClick={onButtonClickHandler}
    >
      <div>Test content</div>
    </OverviewCtaCard>
  );
});
