import * as React from "react";
import { cleanup, fireEvent, render } from "react-testing-library";
import CourseModule from "./index";

afterEach(cleanup);

it("renders without crashing without any optional props", () => {
  render(<CourseModule title="Test Title" />);
});

it("Can hide accordian section", () => {
  const { getByTestId } = render(<CourseModule title="Test Title" />);

  expect(() => {
    getByTestId("AccordianSegment");
  }).not.toThrow();

  fireEvent.click(getByTestId("ToggleButton"));

  expect(() => {
    getByTestId("AccordianSegment");
  }).toThrow();
});

it("Can change default state", () => {
  const { getByTestId } = render(
    <CourseModule defaultOpen={false} title="Test Title" />
  );

  expect(() => {
    getByTestId("AccordianSegment");
  }).toThrow();

  fireEvent.click(getByTestId("ToggleButton"));

  expect(() => {
    getByTestId("AccordianSegment");
  }).not.toThrow();
});

it("Hide the button when prop there", () => {
  const { getByTestId } = render(
    <CourseModule noAccordian={true} title="Test Title" />
  );

  expect(() => {
    getByTestId("ToggleButton");
  }).toThrow();
});
