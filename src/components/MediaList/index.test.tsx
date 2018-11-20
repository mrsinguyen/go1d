import * as React from "react";
import { cleanup, render } from "react-testing-library";
import MediaList from "./index";
import Media from "./Media/index";

afterEach(cleanup);

it("renders without crashing without any optional props", () => {
  render(<MediaList />);
});

it("renders without crashing without all optional props", () => {
  render(
    <MediaList>
      <Media
        image="https://i.imgur.com/Ee55uvc.jpg"
        title="Media Item 1"
        subTitle="Media sub title 1"
      />
      <Media
        image="https://i.imgur.com/Ee55uvc.jpg"
        title="Media Item 2"
        subTitle="Media sub title 2"
      />
    </MediaList>
  );
});
