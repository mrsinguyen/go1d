import { css } from "emotion";
import * as React from "react";
import { render } from "react-testing-library";
import Form from "../Form";
import SubmitButton from "./index";

const mock = jest.fn();

it("renders without crashing without any optional props", () => {
  render(
    <Form onSubmit={mock} initialValues={{ portalName: "", portalUrl: "" }}>
      <SubmitButton onClick={mock}>here</SubmitButton>
    </Form>
  );
});
