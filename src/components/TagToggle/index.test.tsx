import * as React from "react";
import { cleanup, render } from "react-testing-library";
import TagToggle from "./index";

afterEach(cleanup);
const mock = jest.fn();

it("renders without crashing without any optional props", () => {
  render(<TagToggle onChange={mock}>here</TagToggle>);
});

it("renders without crashing with all props", () => {
  const styles = {
    borderRadius: "8px",
  };

  render(
    <TagToggle
      value={true}
      onChange={mock}
      color="faint"
      css={styles}
      id="id"
      name="name"
      label="label"
      disabled={true}
      size="lg"
    >
      Button text
    </TagToggle>
  );
});

it("should set default state to initialValue", () => {
  const ref: React.RefObject<TagToggle> = React.createRef();
  render(
    <TagToggle onChange={mock} ref={ref} initialValue={true} >
      Button text
    </TagToggle>
  );
  expect(ref.current.state.checkedState).toBe(true);
});

it("should switch state and invoke onChange callback with last state when clicked", () => {
  const ref: React.RefObject<TagToggle> = React.createRef();
  render(
    <TagToggle onChange={mock} ref={ref} name="name" value={false}>
      Button text
    </TagToggle>
  );
  ref.current.handleOnChange();
  expect(ref.current.state.checkedState).toBe(true);
  expect(mock).toHaveBeenCalledWith({
    target: {
      name: "name",
      value: false,
      checked: false,
      type: "checkbox",
    },
  });
});
