import * as React from "react";
import { cleanup, render } from "react-testing-library";
import FormatOptions from "./FormatOptions";

afterEach(cleanup);

const fn = jest.fn();

it("renders without crashing without any optional props", () => {
  render(
    <FormatOptions
      onClickBlock={fn}
      onClickMarked={fn}
      onClickLink={fn}
      blockActive={fn}
      markActive={fn}
      linkActive={fn}
    />
  );
});
