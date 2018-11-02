import * as React from "react";
import { cleanup, fireEvent, render } from "react-testing-library";
import Checkbox from "./index";

afterEach(cleanup);

it("renders without crashing without any optional props", () => {
  render(<Checkbox name="TestInput" />);
});

it("Can select", () => {
  const MockCall = jest.fn();
  const ChangeMock = event => MockCall(event.target.value);
  const Element = render(
    <Checkbox
      onChange={ChangeMock}
      name="TestInput"
      label="test"
      id="foo"
      value={true}
    />
  );

  const Label = Element.container.querySelector("[for='foo']") as HTMLElement;

  fireEvent.click(Label);

  expect(MockCall.mock.calls.length).toBe(1);
});
