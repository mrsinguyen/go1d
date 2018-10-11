import * as React from "react";
import { cleanup, render } from "react-testing-library";
import Form from "../Form";
import Field from "./index";

afterEach(cleanup);

it("renders without crashing without any optional props", () => {
  const input = () => <div />;
  render(
    <Form>
      <Field label="label" name="name" component={input} />
    </Form>
  );
});
