import * as React from "react";
import { cleanup, fireEvent, render } from "react-testing-library";
import TextInput from "./index";

afterEach(cleanup);

it("renders without crashing without any optional props", () => {
  render(<TextInput id="crashing" />);
});

it("renders without crashing with an icon", () => {
  render(<TextInput id="crashing" iconName="Search" />);
});

it("test focus", () => {
  const onFocus = jest.fn();

  const { getByTestId } = render(<TextInput id="crashing" onFocus={onFocus} />);

  fireEvent.focus(getByTestId("inputElement"));
  expect(onFocus.mock.calls.length).toBe(1);
});

it("test blur", () => {
  const onBlur = jest.fn();

  const { getByTestId } = render(<TextInput id="crashing" onBlur={onBlur} />);

  fireEvent.blur(getByTestId("inputElement"));
  expect(onBlur.mock.calls.length).toBe(1);
});
