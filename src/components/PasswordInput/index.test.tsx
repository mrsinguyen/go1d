import * as React from "react";
import { cleanup, fireEvent, render } from "react-testing-library";
import PasswordInput from "./index";

afterEach(cleanup);

it("renders without crashing without any optional props", () => {
  render(<PasswordInput id="Test" />);
});

it("can show/hide mask", () => {
  const { getByTestId } = render(<PasswordInput id="Test" />);

  expect(getByTestId("inputElement").getAttribute("type")).toBe("password");
  expect(getByTestId("ToggleButton").childNodes[0].textContent).toBe("SHOW");

  fireEvent.click(getByTestId("ToggleButton"));

  expect(getByTestId("ToggleButton").childNodes[0].textContent).toBe("HIDE");
  expect(getByTestId("inputElement").getAttribute("type")).toBe("text");
});

it("toggleableDisplay being false hides the button", () => {
  const { getByTestId } = render(
    <PasswordInput toggleableDisplay={false} id="Test" />
  );

  expect(() => {
    getByTestId("ToggleButton");
  }).toThrow();
});
