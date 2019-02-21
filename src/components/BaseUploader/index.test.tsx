import * as React from "react";
import { cleanup, render } from "react-testing-library";
import BaseUploader from "./index";

afterEach(cleanup);
jest.mock("react-dropzone", () => ({
  default: props =>
    props.children({
      open: jest.fn(),
      getRootProps: jest.fn(() => ({})),
      getInputProps: jest.fn(() => ({})),
    }),
}));

it("Renders without crashing", () => {
  render(<BaseUploader>{({}) => <div>here</div>}</BaseUploader>);
});

it("can add a file", () => {
  const fn = jest.fn();
  const ref: React.RefObject<any> = React.createRef();
  // tslint:disable-next-line:no-string-literal
  global["URL"] = { revokeObjectURL: fn, createObjectURL: fn };
  render(
    <BaseUploader onChange={fn} name="test" value="A file" ref={ref}>
      {({}) => <div>here</div>}
    </BaseUploader>
  );

  const newFile = new File([""], "newFile");

  if (ref.current) {
    ref.current.onDrop([newFile]);
    expect(fn).toBeCalledWith([newFile]);
  } else {
    fail("ref could not be set");
  }
});
