import * as React from "react";
import { cleanup, fireEvent, render } from "react-testing-library";
import Modal from "./index";

afterEach(cleanup);

it("renders without crashing without any optional props", () => {
  render(<Modal />);
});

it("renders without crashing with all props passed to it", () => {
  const RequestCloseMock = () => jest.fn();

  const { unmount } = render(
    <Modal title="title" isOpen={true} onRequestClose={RequestCloseMock}>
      <React.Fragment>Hello World!</React.Fragment>
    </Modal>
  );

  expect(document.body.className).toMatch(/css-/);

  unmount();

  expect(document.body.className).toBe("");
});

it("escape closes the modal", () => {
  const RequestCloseMock = jest.fn();

  const { getByText } = render(
    <Modal title="title" isOpen={true} onRequestClose={RequestCloseMock}>
      <React.Fragment>Hello World</React.Fragment>
    </Modal>
  );

  fireEvent.keyDown(getByText("Hello World"), {
    keyCode: 27,
  });

  expect(RequestCloseMock.mock.calls.length).toBe(1);
});

it("escape closes the modal can be disabled", () => {
  const RequestCloseMock = jest.fn();

  const { getByText } = render(
    <Modal
      title="title"
      disableKeyBindings={true}
      isOpen={true}
      onRequestClose={RequestCloseMock}
    >
      <React.Fragment>Hello World</React.Fragment>
    </Modal>
  );

  fireEvent.keyDown(getByText("Hello World"), {
    keyCode: 27,
  });

  expect(RequestCloseMock.mock.calls.length).toBe(0);
});

it("clicking background closes the modal", () => {
  const RequestCloseMock = jest.fn();

  const { getByTestId } = render(
    <Modal title="title" isOpen={true} onRequestClose={RequestCloseMock}>
      <React.Fragment>Hello World</React.Fragment>
    </Modal>
  );

  fireEvent.click(getByTestId("backgroundOverlay"));

  expect(RequestCloseMock.mock.calls.length).toBe(1);
});

it("clicking background closes the modal", () => {
  const RequestCloseMock = jest.fn();

  const { getByTestId } = render(
    <Modal
      title="title"
      disableBackgroundClose={true}
      isOpen={true}
      onRequestClose={RequestCloseMock}
    >
      <React.Fragment>Hello World</React.Fragment>
    </Modal>
  );

  fireEvent.click(getByTestId("backgroundOverlay"));

  expect(RequestCloseMock.mock.calls.length).toBe(0);
});

it("should close modal when clicking backdrop", () => {
  const RequestCloseMock = jest.fn();

  const { getByTestId } = render(
    <Modal
      title="title"
      disableBackgroundClose={false}
      isOpen={true}
      onRequestClose={RequestCloseMock}
    >
      <React.Fragment>Hello World</React.Fragment>
    </Modal>
  );

  const modal = getByTestId("modal");

  const mouseDownEvent = document.createEvent("MouseEvents");
  mouseDownEvent.initEvent("mousedown", true, true);
  modal.dispatchEvent(mouseDownEvent);

  const clickEvent = document.createEvent("MouseEvents");
  clickEvent.initEvent("click", true, true);
  modal.dispatchEvent(clickEvent);

  expect(RequestCloseMock).toHaveBeenCalledTimes(1);
});
