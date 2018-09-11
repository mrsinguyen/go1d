import * as React from "react";
import { render } from "react-testing-library";
import Theme from "./index";
import { DarkMode } from "./index";

it("renders lightmode without crashing", () => {
  render(
    <Theme.Consumer>{({ colors, type }) => <div>stuff</div>}</Theme.Consumer>
  );
});

it("renders darkmode without crashing", () => {
  render(
    <DarkMode>
      <div>Stuff</div>
    </DarkMode>
  );
});
