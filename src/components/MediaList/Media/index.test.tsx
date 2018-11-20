import * as React from "react";
import { cleanup, render } from "react-testing-library";
import Media from "./index";

afterEach(cleanup);

it("renders without crashing without any optional props", () => {
  render(<Media />);
});

it("renders without crashing without all optional props", () => {
  render(
    <Media
      image="https://i.imgur.com/Ee55uvc.jpg"
      title="Media Item 1"
      subTitle="Media sub title 1"
    />
  );
});
