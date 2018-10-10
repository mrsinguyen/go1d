import * as React from "react";
import { cleanup, render } from "react-testing-library";
import Field from "./index";
import Form from "../Form";

afterEach(cleanup);

it("renders without crashing without any optional props", () => {
    render(<Form><Field label="label" name="name" component={() => <div />} /></Form>);
});
