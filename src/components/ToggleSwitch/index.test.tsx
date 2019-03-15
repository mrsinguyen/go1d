import * as React from "react";
import { cleanup, fireEvent, render } from "react-testing-library";
import ToggleSwitch from "./index";

afterEach(() => cleanup());

it("renders without crashing without any props", () => {
  render(<ToggleSwitch />);
});

it("renders without crashing with full props", () => {
  render(
    <ToggleSwitch
      id="toggle"
      name="test"
      value={true}
      defaultValue={true}
      disabled={false}
      size="md"
      onChange={jest.fn()}
    />
  );
});

it("should call onChange props with default value", () => {
  const mock = jest.fn();
  const { container } = render(
    <ToggleSwitch onChange={mock} id="toggle" defaultValue={true} />
  );
  const Label = container.querySelector("[for='toggle']") as HTMLElement;

  fireEvent.click(Label);

  expect(mock).toHaveBeenCalledWith({
    target: {
      value: false,
      checked: false,
      type: "checkbox",
    },
  });
});

it("should call onChange props with value", () => {
  const mock = jest.fn();
  const { container } = render(
    <ToggleSwitch onChange={mock} id="toggle" value={true} />
  );
  const Label = container.querySelector("[for='toggle']") as HTMLElement;

  fireEvent.click(Label);

  expect(mock).toHaveBeenCalledWith({
    target: {
      value: false,
      checked: false,
      type: "checkbox",
    },
  });
});

it("should not change input's value after click when component set value props", () => {
  const mock = jest.fn();
  const { container } = render(
    <ToggleSwitch onChange={mock} id="toggle" value={true} />
  );
  const Label = container.querySelector("[for='toggle']") as HTMLElement;

  fireEvent.click(Label);

  const Input = container.querySelector("#toggle") as HTMLElement;

  expect(Input.getAttribute("value")).toBe("true");
});

it("should change input's value after click when component set defaultValue props", () => {
  const mock = jest.fn();
  const { container } = render(
    <ToggleSwitch onChange={mock} id="toggle" defaultValue={true} />
  );
  const Label = container.querySelector("[for='toggle']") as HTMLElement;

  fireEvent.click(Label);

  const Input = container.querySelector("#toggle") as HTMLElement;

  expect(Input.getAttribute("value")).toBe("false");
});
