import * as React from "react";
import { cleanup, render } from "react-testing-library";
import ImageUploader from "./index";

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
  render(<ImageUploader />);
});

it("Renders without crashing with an image", () => {
  const ref: React.RefObject<any> = React.createRef();
  // tslint:disable-next-line:no-string-literal
  global["URL"] = { revokeObjectURL: jest.fn() };
  render(<ImageUploader value="An image" ref={ref} />);

  ref!.current!.removeImage();
});
