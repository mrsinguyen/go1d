import * as React from "react";
import { cleanup, fireEvent, render } from "react-testing-library";
import Tooltip from "./index";

afterEach(cleanup);

it("renders without crashing without any optional props", () => {
  render(<Tooltip tip="Tooltip">here</Tooltip>);
});

it("renders with the correct placements", () => {
  render(
    <Tooltip tip="Tooltip" placement="top" mode="always">
      here
    </Tooltip>
  );
  render(
    <Tooltip tip="Tooltip" placement="right" mode="always">
      here
    </Tooltip>
  );
  render(
    <Tooltip tip="Tooltip" placement="bottom" mode="always">
      here
    </Tooltip>
  );
  render(
    <Tooltip tip="Tooltip" placement="left" mode="always">
      here
    </Tooltip>
  );
});

it("renders correctly on mouseOver/mouseOut", () => {
  const { getByTestId } = render(<Tooltip tip="Tooltip">here</Tooltip>);

  fireEvent.mouseOver(getByTestId("tooltip-span"));
  expect(getByTestId("tooltip")).toBeDefined();
  fireEvent.mouseOut(getByTestId("tooltip-span"));
});

it("renders correctly on click", () => {
  const { getByTestId } = render(
    <Tooltip tip="Tooltip" placement="top" mode="click">
      Pill text
    </Tooltip>
  );

  fireEvent.click(getByTestId("tooltip-span"));
  expect(getByTestId("tooltip")).toBeDefined();
  fireEvent.click(getByTestId("tooltip-span"));
});

it("renders with a functional children", () => {
  render(
    <Tooltip tip="Tooltip" placement="top" mode="click">
      {({ ref, getEventProps }) => (
        <span ref={ref} {...getEventProps()}>
          Testing
        </span>
      )}
    </Tooltip>
  );
});
