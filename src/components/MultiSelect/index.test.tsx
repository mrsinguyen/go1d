import * as React from "react";
import { cleanup, fireEvent, render } from "react-testing-library";
import { debug } from "util";
import Text from "../Text/index";
import MultiSelect from "./index";

afterEach(cleanup);

const Options = [
  {
    label: "test",
    value: "test",
  },
  {
    label: "test 1",
    value: "test 1",
  },
  {
    label: "test 2",
    value: "test 2",
  },
];

it("renders without crashing without any optional props", () => {
  render(<MultiSelect options={Options} />);
});

it("renders without crashing with optional props", () => {
  const onChangeMock = () => null;
  render(
    <MultiSelect
      options={Options}
      label="Test"
      disabled={false}
      onChange={onChangeMock}
      name="Test"
    />
  );
});
it("renders label as React Node without crashing", () => {
  const onChangeMock = () => null;
  render(
    <MultiSelect
      options={Options}
      label={<Text>Hello</Text>}
      disabled={false}
      onChange={onChangeMock}
      name="Test"
    />
  );
});
it("search filters options", () => {
  const onChangeMock = jest.fn();
  const { getByTestId, getAllByTestId } = render(
    <MultiSelect
      options={Options}
      label="Test"
      disabled={false}
      onChange={onChangeMock}
      name="Test"
      searchable={true}
    />
  );

  const trigger = getByTestId("select-dropdown-trigger");
  trigger.click();

  const inputNode = getByTestId("inputElement");
  fireEvent.change(inputNode, { target: { value: Options[1].label } });
  expect(getByTestId("inputElement").getAttribute("value")).toBe(
    Options[1].label
  );

  expect(getAllByTestId("select-option").length).toBe(1);
});

it("handles default values", () => {
  const onChangeMock = jest.fn();
  render(
    <MultiSelect
      options={Options}
      label="Test"
      disabled={false}
      onChange={onChangeMock}
      name="Test"
      searchable={true}
      defaultValue={["test 1", "test"]}
    />
  );
});
