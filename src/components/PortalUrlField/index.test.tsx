import * as React from "react";
import { cleanup, render } from "react-testing-library";
import Form from "../Form/index";
import PortalUrlField from "./index";

afterEach(cleanup);

it("renders without crashing without any optional props", () => {
  const onSubmit = jest.fn();
  render(
    <Form initialValues={{ portalName: "A portal" }} onSubmit={onSubmit}>
      <PortalUrlField label="label" name="Name" />
    </Form>
  );
});

it("renders without crashing with optional props", () => {
  const onSubmit = jest.fn();
  render(
    <Form initialValues={{ portalName: "A portal" }} onSubmit={onSubmit}>
      <PortalUrlField label="label" name="Name" portalUrl=".mygo1.com" />
    </Form>
  );
});
