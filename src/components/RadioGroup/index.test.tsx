import * as React from "react";
import { cleanup, fireEvent, render } from "react-testing-library";
import RadioGroup from "./index";

afterEach(cleanup);

it("renders without crashing without any optional props", () => {
  render(
    <RadioGroup
      name="TestInput"
      options={[
        {
          label: "test",
          value: "testValue",
          name: "testradio",
        },
      ]}
    />
  );
});

it("Can select", () => {
  const MockCall = jest.fn();
  const ChangeMock = event => MockCall(event.target.value);
  const Element = render(
    <RadioGroup
      onChange={ChangeMock}
      name="TestInput"
      options={[
        {
          label: "test",
          value: "testValue",
          id: "TestID",
          name: "testradio",
        },
      ]}
    />
  );

  const Label = Element.container.querySelector("#TestID") as HTMLElement;

  fireEvent.click(Label);

  expect(MockCall.mock.calls.length).toBe(1);
  expect(MockCall.mock.calls[0][0]).toBe("testValue");
});
