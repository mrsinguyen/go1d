import * as React from "react";
import { cleanup, fireEvent, render } from "react-testing-library";
import Text from "../Text";
import Banner from "./index";

afterEach(cleanup);

const closeMock = jest.fn();

it("renders without crashing without any optional props (success type)", () => {
  render(
    <Banner type="success">
      <Text>This is a message</Text>
    </Banner>
  );
});

it("renders without crashing without any optional props (warning)", () => {
  render(
    <Banner type="warning">
      <Text>This is a message</Text>
    </Banner>
  );
});

it("renders without crashing without any optional props (danger)", () => {
  render(
    <Banner type="danger">
      <Text>This is a message</Text>
    </Banner>
  );
});

it("accepts and passes close event", () => {
  const { getByTestId } = render(
    <Banner type="success" close={closeMock}>
      <Text>This is a message</Text>
    </Banner>
  );

  fireEvent.click(getByTestId("close"));
  expect(closeMock.mock.calls.length).toBe(1);
});
