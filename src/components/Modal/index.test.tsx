import * as React from "react";
import { cleanup, render } from "react-testing-library";
import Modal from "./index";

afterEach(cleanup);

it("renders without crashing without any optional props", () => {
  render(<Modal />);
});

it("renders without crashing with all props passed to it", () => {
  const ActionMock = () => null;

  render(
    <Modal title="title" onRequestClose={ActionMock}>
      <React.Fragment>Hello World!</React.Fragment>
    </Modal>
  );
});
