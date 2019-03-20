import * as React from "react";
import { cleanup, render } from "react-testing-library";
import TagToggleGroup from "./";

afterEach(cleanup);

it("renders without optional props", () => {
  render(<TagToggleGroup options={[]} />);
});

it("renders with options", () => {
  const { getByText } = render(
    <TagToggleGroup
      options={[
        {
          name: "test",
          label: "test",
        },
      ]}
    />
  );

  expect(getByText("test")).not.toBeNull();
});

it("fires on change well", () => {
  const change = jest.fn();
  const { getByText } = render(
    <TagToggleGroup
      onChange={change}
      name="group"
      options={[
        {
          name: "test1",
          label: "test1",
        },
        {
          name: "test2",
          label: "test2",
        },
      ]}
    />
  );

  getByText("test1").parentElement.click();
  expect(change).toBeCalledWith({
    target: { name: "group", value: ["test1"] },
  });
  getByText("test2").parentElement.click();
  expect(change).toBeCalledWith({
    target: { name: "group", value: ["test1", "test2"] },
  });
  getByText("test2").parentElement.click();
  expect(change).toBeCalledWith({
    target: { name: "group", value: ["test1"] },
  });
  getByText("test1").parentElement.click();
  expect(change).toBeCalledWith({
    target: { name: "group", value: [] },
  });
});
