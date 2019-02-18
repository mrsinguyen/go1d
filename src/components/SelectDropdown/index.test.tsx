// tslint:disable:jsx-no-lambda
import * as React from "react";
import { cleanup, render } from "react-testing-library";
import ButtonFilled from "../ButtonFilled";
import View from "../View";
import SelectDropdown from "./";

const reactDom: any = jest.genMockFromModule("react-dom");

function mockCreatePortal(element, target) {
  return (
    <div>
      <div id="content">{element}</div>
      <div id="target" data-target-tag-name={target.tagName} />
    </div>
  );
}

reactDom.createPortal = mockCreatePortal;

afterEach(cleanup);

it("renders without crashing without any optional props", () => {
  render(
    <SelectDropdown
      optionRenderer={option => <View>{option.label}</View>}
      options={[{ value: "test", label: "Tezt" }]}
    >
      {({ ref, getToggleButtonProps }) => (
        <ButtonFilled ref={ref} {...getToggleButtonProps}>
          Click me
        </ButtonFilled>
      )}
    </SelectDropdown>
  );
});

it("renders without crashing with optional props", () => {
  render(
    <SelectDropdown
      optionRenderer={option => <View>{option.label}</View>}
      options={[{ value: "test", label: "Tezt" }]}
      value={["test"]}
      handleSearchChange={jest.fn()}
      onChange={(item: string) => item}
      isMulti={true}
      closeOnSelection={true}
      renderCreateOption={jest.fn()}
      handleCreate={jest.fn()}
      selectedColor="subtle"
      name="select"
    >
      {({ ref, getToggleButtonProps }) => (
        <ButtonFilled ref={ref} {...getToggleButtonProps}>
          Click me
        </ButtonFilled>
      )}
    </SelectDropdown>
  );
});

it("handles single select changes well", () => {
  const ref: React.RefObject<SelectDropdown> = React.createRef();
  const fn = jest.fn();

  render(
    <SelectDropdown
      ref={ref}
      optionRenderer={option => <View>{option.label}</View>}
      options={[
        { value: "test0", label: "Test0" },
        { value: "test1", label: "Test1" },
        { value: "test2", label: "Test2" },
      ]}
      value={"test0"}
      handleSearchChange={fn}
      searchTerm="Test"
      onChange={fn}
      closeOnSelection={true}
      name="select"
    >
      {({ ref: buttonRef, getToggleButtonProps }) => (
        <ButtonFilled ref={buttonRef} {...getToggleButtonProps}>
          Click me
        </ButtonFilled>
      )}
    </SelectDropdown>
  );

  if (ref.current) {
    ref.current.handleOptionClick({ value: "test1", label: "test1" });
    expect(fn).toBeCalledWith({
      target: { name: "select", value: "test1" },
    });
  } else {
    fail("ref could not be set");
  }
});

it("handles multi select changes well", () => {
  const ref: React.RefObject<SelectDropdown> = React.createRef();
  const fn = jest.fn();

  render(
    <SelectDropdown
      ref={ref}
      optionRenderer={option => <View>{option.label}</View>}
      options={[
        { value: "test0", label: "Test0" },
        { value: "test1", label: "Test1" },
        { value: "test2", label: "Test2" },
      ]}
      value={["test0"]}
      handleSearchChange={fn}
      searchTerm="Test"
      onChange={fn}
      closeOnSelection={true}
      isMulti={true}
      name="select"
    >
      {({ ref: buttonRef, getToggleButtonProps }) => (
        <ButtonFilled ref={buttonRef} {...getToggleButtonProps}>
          Click me
        </ButtonFilled>
      )}
    </SelectDropdown>
  );

  if (ref.current) {
    ref.current.handleOptionClick({ value: "test2", label: "test2" });
    expect(fn).toBeCalledWith({
      target: { name: "select", value: ["test0", "test2"] },
    });
  } else {
    fail("ref could not be set");
  }
});
