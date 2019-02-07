import * as React from "react";
import { cleanup, render } from "react-testing-library";
import RichTextInput from "../RichTextInput";

afterEach(cleanup);

beforeEach(() => {
  // tslint:disable-next-line:no-string-literal
  global["window"].getSelection = () => {
    return {
      removeAllRanges: jest.fn(),
    };
  };
});

it("renders without crashing without any optional props", () => {
  render(<RichTextInput />);
});
