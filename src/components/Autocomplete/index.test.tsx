import * as React from "react";
import { cleanup, render, fireEvent } from "react-testing-library";
import Autocomplete from "./";

afterEach(cleanup);

const options = [
  {
    label: "foo1",
    value: {
      lat: "1.23",
      lon: "4.56",
    }
  },
  {
    label: "foo1",
    value: {
      lat: "1.23",
      lon: "4.56",
    }
  },
  {
    label: "foo1",
    value: {
      lat: "1.23",
      lon: "4.56",
    }
  }
];

it("renders without crashing without any optional props", () => {
  render(<Autocomplete options={options} lookupMethod={jest.fn()} onChange={jest.fn()} />);
});

it("handles change and fires lookup events", () => {
  const mock = jest.fn();

  const { getByTestId } = render(<Autocomplete options={options} lookupMethod={mock} onChange={jest.fn()} />);

  fireEvent.change(getByTestId("inputElement"), {
    target: { value: "Bris" },
  });
  expect(mock.mock.calls.length).toBe(1);
});

it("handles select and fires data up", () => {
  const mock = jest.fn();

  const { getByTestId } = render(<Autocomplete options={options} lookupMethod={jest.fn()} onChange={mock} />);

  fireEvent.change(getByTestId("inputElement"), {
    target: { value: "Bris" },
  });

  fireEvent.click(getByTestId("locationElement"));

  expect(mock.mock.calls.length).toBe(1);
});

it("handles clear button clicks", () => {
  const mock = jest.fn();

  const { getByTestId } = render(<Autocomplete options={options} lookupMethod={jest.fn()} onChange={mock} />);

  fireEvent.change(getByTestId("inputElement"), {
    target: { value: "Bris" },
  });

  fireEvent.click(getByTestId("locationElement"));

  fireEvent.click(getByTestId("close"));

  expect(mock.mock.calls[1]).toEqual([null]);
});
