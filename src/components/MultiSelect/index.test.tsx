import * as React from "react";
import { cleanup, fireEvent, render } from "react-testing-library";
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

it("Can select an item in the dropdown with keyboard - Enter", () => {
  const ChangeMock = jest.fn();
  const { getByTestId } = render(
    <MultiSelect options={Options} onChange={ChangeMock} />
  );

  fireEvent.mouseDown(getByTestId("primarySection"));
  fireEvent.keyDown(getByTestId("primarySection"), {
    key: "ArrowDown",
  });
  fireEvent.keyDown(getByTestId("primarySection"), {
    key: "Enter",
  });

  expect(ChangeMock.mock.calls.length).toBe(1);
  expect(ChangeMock.mock.calls[0][0].target.value.length).toBe(1);
  expect(ChangeMock.mock.calls[0][0].target.value[0]).toBe("test");
});

it("Can select multiple items in the dropdown", () => {
  const ChangeMock = jest.fn();
  const { getByTestId } = render(
    <MultiSelect options={Options} onChange={ChangeMock} />
  );

  fireEvent.mouseDown(getByTestId("primarySection"));
  fireEvent.keyDown(getByTestId("primarySection"), {
    key: "ArrowDown",
  });
  fireEvent.keyDown(getByTestId("primarySection"), {
    key: "Enter",
  });
  fireEvent.keyDown(getByTestId("primarySection"), {
    key: "ArrowDown",
  });
  fireEvent.keyDown(getByTestId("primarySection"), {
    key: "ArrowDown",
  });
  fireEvent.keyDown(getByTestId("primarySection"), {
    key: "Enter",
  });

  expect(ChangeMock.mock.calls.length).toBe(2);
  expect(ChangeMock.mock.calls[1][0].target.value.length).toBe(2);
  expect(ChangeMock.mock.calls[1][0].target.value[0]).toBe("test");
  expect(ChangeMock.mock.calls[1][0].target.value[1]).toBe("test 1");
});

it("Can deselect items in the dropdown", () => {
  const ChangeMock = jest.fn();
  const { getByTestId } = render(
    <MultiSelect options={Options} onChange={ChangeMock} />
  );

  fireEvent.mouseDown(getByTestId("primarySection"));
  fireEvent.keyDown(getByTestId("primarySection"), {
    key: "ArrowDown",
  });
  fireEvent.keyDown(getByTestId("primarySection"), {
    key: "Enter",
  });
  fireEvent.keyDown(getByTestId("primarySection"), {
    key: "ArrowDown",
  });
  fireEvent.keyDown(getByTestId("primarySection"), {
    key: "Enter",
  });
  fireEvent.keyDown(getByTestId("primarySection"), {
    key: "ArrowDown",
  });
  fireEvent.keyDown(getByTestId("primarySection"), {
    key: "ArrowDown",
  });
  fireEvent.keyDown(getByTestId("primarySection"), {
    key: "Enter",
  });

  expect(ChangeMock.mock.calls.length).toBe(3);
  expect(ChangeMock.mock.calls[2][0].target.value.length).toBe(1);
  expect(ChangeMock.mock.calls[2][0].target.value[0]).toBe("test 1");
});

it("Can clear selection", () => {
  const ChangeMock = jest.fn();
  const { getByTestId } = render(
    <MultiSelect options={Options} onChange={ChangeMock} />
  );

  fireEvent.mouseDown(getByTestId("primarySection"));
  fireEvent.keyDown(getByTestId("primarySection"), {
    key: "ArrowDown",
  });
  fireEvent.keyDown(getByTestId("primarySection"), {
    key: "Enter",
  });
  fireEvent.keyDown(getByTestId("primarySection"), {
    key: "ArrowDown",
  });
  fireEvent.keyDown(getByTestId("primarySection"), {
    key: "Enter",
  });
  fireEvent.keyDown(getByTestId("primarySection"), {
    key: "ArrowDown",
  });
  fireEvent.keyDown(getByTestId("primarySection"), {
    key: "ArrowDown",
  });
  fireEvent.keyDown(getByTestId("primarySection"), {
    key: "Enter",
  });

  fireEvent.click(getByTestId("clearSelectionButton"));

  expect(ChangeMock.mock.calls.length).toBe(4);
  expect(ChangeMock.mock.calls[3][0].target.value.length).toBe(0);
});
