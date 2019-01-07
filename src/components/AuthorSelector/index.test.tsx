// tslint:disable:jsx-no-lambda
import * as React from "react";
import { cleanup, render } from "react-testing-library";
import AuthorSelector from "./index";

afterEach(cleanup);

it("renders without crashing without any optional props", () => {
  render(<AuthorSelector options={[]} mapEmailToAuthor={jest.fn()} />);
});

it("handles change well", () => {
  const ref: React.RefObject<AuthorSelector> = React.createRef();
  const fn = jest.fn();
  render(
    <AuthorSelector
      options={["test@test.net"]}
      mapEmailToAuthor={email => ({
        firstName: "Hi",
        lastName: "Franc",
        mail: email,
      })}
      ref={ref}
      onChange={fn}
    />
  );

  const { current } = ref;

  if (current) {
    const changeEvt = {
      target: {
        value: ["test@test.com"],
      },
    };
    current.onChange(changeEvt);

    expect(current.state.value).toEqual(["test@test.com"]);
    expect(fn).toBeCalledWith(changeEvt);
  } else {
    fail("No ref could be set");
  }
});

it("handles inout change well", () => {
  const ref: React.RefObject<AuthorSelector> = React.createRef();
  const fn = jest.fn();
  render(
    <AuthorSelector
      options={[]}
      mapEmailToAuthor={email => ({
        firstName: "Hi",
        lastName: "Franc",
        mail: email,
      })}
      ref={ref}
      onInputChange={fn}
    />
  );

  const { current } = ref;

  if (current) {
    current.handleFocus({} as any);
    const changeEvt = {
      currentTarget: {
        value: "test@test.com",
      },
    };
    current.onInputChange(changeEvt as any);

    expect(current.state.search).toEqual("test@test.com");
    expect(fn).toBeCalledWith(changeEvt);
  } else {
    fail("No ref could be set");
  }
});

it("renders options", () => {
  const ref: React.RefObject<AuthorSelector> = React.createRef();
  const fn = jest.fn();
  render(
    <AuthorSelector
      options={[]}
      mapEmailToAuthor={email => ({
        firstName: "Hi",
        lastName: "Franc",
        mail: email,
      })}
      ref={ref}
      onInputChange={fn}
    />
  );

  const { current } = ref;

  if (current) {
    current.handleFocus({} as any);
    current.renderOption("test", {}, true);
  } else {
    fail("No ref could be set");
  }
});
