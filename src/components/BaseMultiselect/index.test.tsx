// tslint:disable:jsx-no-lambda
import * as React from "react";
import { cleanup, render } from "react-testing-library";
import BaseMultiSelect from "./";

afterEach(cleanup);

it("renders without crashing without any optional props", () => {
  render(
    <BaseMultiSelect optionRenderer={option => option} options={["test"]} />
  );
});

it("renders without crashing with optional props", () => {
  render(
    <BaseMultiSelect
      optionRenderer={option => option}
      options={["test"]}
      value={["A TAG"]}
      onChange={() => null}
      name="TEST 1"
    />
  );
});

it("handles change well", () => {
  const fn = jest.fn();
  const ref: React.RefObject<BaseMultiSelect> = React.createRef();

  render(
    <BaseMultiSelect
      optionRenderer={option => option}
      options={["test"]}
      value={["A TAG"]}
      onChange={fn}
      name="TEST 1"
      ref={ref}
    />
  );

  if (ref.current) {
    const changeEvent = { target: { value: ["Tweezers"] } };
    ref.current.onChange(changeEvent as any);
    expect(fn).toBeCalledWith(changeEvent);
  } else {
    fail("ref could not be set");
  }
});

it("handles input changes well", () => {
  const fn = jest.fn();
  const ref: React.RefObject<BaseMultiSelect> = React.createRef();

  render(
    <BaseMultiSelect
      optionRenderer={option => option}
      options={["test"]}
      value={["A TAG"]}
      name="TEST 1"
      ref={ref}
    />
  );

  if (ref.current) {
    ref.current.handleFocus({} as any);
    const changeEvent = { currentTarget: { value: "T" } };
    ref.current.inputChange(changeEvent as any);
    expect(ref.current.state.search).toBe("T");
  } else {
    fail("ref could not be set");
  }
});

it("handles creating new tags", () => {
  const fn = jest.fn();
  const ref: React.RefObject<BaseMultiSelect> = React.createRef();

  render(
    <BaseMultiSelect
      optionRenderer={option => option}
      options={["test"]}
      value={["A TAG"]}
      name="TEST 1"
      onCreate={fn}
      ref={ref}
    />
  );

  if (ref.current) {
    ref.current.handleSelect("Hi Franc");
    expect(fn).toBeCalledWith("Hi Franc");
  } else {
    fail("ref could not be set");
  }
});

it("handles deleting tags", () => {
  const fn = jest.fn();
  const ref: React.RefObject<BaseMultiSelect> = React.createRef();

  render(
    <BaseMultiSelect
      optionRenderer={option => option}
      options={["test"]}
      value={["A TAG", "B TAG"]}
      name="TEST 1"
      onChange={fn}
      ref={ref}
    />
  );

  if (ref.current) {
    ref.current.handleDelete({
      currentTarget: { dataset: { value: "A TAG" } },
    } as any);
    expect(fn).toBeCalledWith({
      target: {
        name: "TEST 1",
        value: ["B TAG"],
      },
    });
  } else {
    fail("ref could not be set");
  }
});
