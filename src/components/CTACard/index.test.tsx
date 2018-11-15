import * as React from "react";
import { cleanup, render } from "react-testing-library";
import CTACard from "./index";

afterEach(cleanup);

it("renders without crashing without any props", () => {
  render(<CTACard />);
});

it("renders without crashing in use case 1", () => {
  const ActionMock = () => null;
  render(
    <CTACard
      iconImage="https://res.cloudinary.com/go1/image/upload/v1542240162/ojaevw3frdaiji5zzmf3.png"
      title="Pay per use"
      backgroundColor="soft"
      description="Sell your courses through the GO1 course marketplace directly to consumers.<br/><br/>You receive 70% of the purchase price from all sales."
      buttonText="Button"
      onActionClick={ActionMock}
    />
  );
});


it("renders without crashing in use case 2", () => {
  render(
    <CTACard
      iconImage="https://res.cloudinary.com/go1/image/upload/v1542240162/ojaevw3frdaiji5zzmf3.png"
      subtitle="Up to 20 learners"
      buttonText="Button"
      buttonColor="accent"
      description="<center><b>$25 flat</b> / month</center>"
    />
  );
});
