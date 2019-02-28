import * as React from "react";
import { cleanup, render } from "react-testing-library";
import ImageUploadSlat from "./index";

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
  render(<ImageUploadSlat />);
});

it("Renders without crashing with an image", () => {
  const ref: React.RefObject<any> = React.createRef();
  // tslint:disable-next-line:no-string-literal
  global["URL"] = { revokeObjectURL: jest.fn() };
  render(<ImageUploadSlat value="An image" ref={ref} />);

  ref!.current!.removeImage();
});

it("can add an image", () => {
  const fn = jest.fn();
  const ref: React.RefObject<any> = React.createRef();
  // tslint:disable-next-line:no-string-literal
  global["URL"] = { revokeObjectURL: fn, createObjectURL: fn };
  render(
    <ImageUploadSlat onChange={fn} name="test" value="An image" ref={ref} />
  );

  const newImage = new File([""], "newImage");

  if (ref.current) {
    ref.current.onChange([newImage]);
    expect(fn).toBeCalledWith({ target: { name: "test", value: newImage } });
  } else {
    fail("ref could not be set");
  }
});

it("can delete an image", () => {
  const fn = jest.fn();
  const ref: React.RefObject<any> = React.createRef();
  // tslint:disable-next-line:no-string-literal
  global["URL"] = { revokeObjectURL: fn };
  render(
    <ImageUploadSlat onChange={fn} name="test" value="An image" ref={ref} />
  );

  if (ref.current) {
    ref.current.removeImage();
    expect(fn).toBeCalledWith({ target: { name: "test", value: "" } });
  } else {
    fail("ref could not be set");
  }
});
