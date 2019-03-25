import * as React from "react";
import { cleanup, render } from "react-testing-library";
import MultiSelectDownshift from "./MultiSelectDownshift";

afterEach(cleanup);

it("renders without crashing without any optional props", () => {
  render(<MultiSelectDownshift>{() => null}</MultiSelectDownshift>);
});

it("Can add to list", done => {
  const onChangeMock = jest.fn();
  let initial = false;

  render(
    <MultiSelectDownshift onSelect={onChangeMock}>
      {({ handleSelection }) => {
        if (!initial) {
          handleSelection(
            {
              value: "test",
              label: "test",
            },
            {}
          );

          initial = true;
        }

        return null;
      }}
    </MultiSelectDownshift>
  );

  setImmediate(() => {
    expect(onChangeMock.mock.calls.length).toBe(1);
    expect(onChangeMock.mock.calls[0][0].length).toBe(1);
    expect(onChangeMock.mock.calls[0][0][0].value).toBe("test");
    done();
  });
});

it("Remove from list", done => {
  const onChangeMock = jest.fn();
  let initial = false;
  const ItemEntry = {
    value: "test",
    label: "test",
  };

  render(
    <MultiSelectDownshift
      onChange={onChangeMock}
      initialSelectedItems={[ItemEntry]}
    >
      {({ handleSelection }) => {
        if (!initial) {
          handleSelection(ItemEntry, {});
          initial = true;
        }

        return null;
      }}
    </MultiSelectDownshift>
  );

  setImmediate(() => {
    expect(onChangeMock.mock.calls.length).toBe(1);
    expect(onChangeMock.mock.calls[0][0].length).toBe(0);
    done();
  });
});

it("Clear list", done => {
  const onChangeMock = jest.fn();
  let initial = false;
  const ItemEntry = {
    value: "test",
    label: "test",
  };

  render(
    <MultiSelectDownshift
      onSelect={onChangeMock}
      initialSelectedItems={[ItemEntry]}
    >
      {({ clearSelection }) => {
        if (!initial) {
          clearSelection();
          initial = true;
        }

        return null;
      }}
    </MultiSelectDownshift>
  );

  setImmediate(() => {
    expect(onChangeMock.mock.calls.length).toBe(1);
    expect(onChangeMock.mock.calls[0][0].length).toBe(0);
    done();
  });
});
