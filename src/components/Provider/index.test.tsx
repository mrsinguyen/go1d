import * as React from "react";
import { cleanup, render } from "react-testing-library";
import Provider from "./index";

afterEach(cleanup);

it("renders lightmode without crashing", () => {
  render(
    <Provider>
      <div>content</div>
    </Provider>
  );
});

it("renders darkmode without crashing", () => {
  render(
    <Provider mode="dark">
      <div>content</div>
    </Provider>
  );
});
