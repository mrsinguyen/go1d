import * as React from "react";
import { cleanup, render } from "react-testing-library";
import Table from "../index";
import TR from "../TR";
import TD from "./index";

afterEach(cleanup);

it("renders without crashing without any optional props", () => {
  render(
    <Table
      rows={[
        <TR key="0">
          <TD>
            <span>yo</span>
          </TD>
        </TR>,
      ]}
    />
  );
});
