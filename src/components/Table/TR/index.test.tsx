import * as React from "react";
import { cleanup, render } from "react-testing-library";
import Table from "../index";
import TR from "./index";

afterEach(cleanup);

it("renders without crashing without any optional props", () => {
  render(
    <Table
      rows={[
        <TR key="0">
          <td>0</td>
        </TR>,
      ]}
    />
  );
});

it("renders without crashing with all props", () => {
  render(
    <Table
      header={[<th key="0">yo</th>]}
      rows={[
        <TR key="0">
          <td>0</td>
        </TR>,
      ]}
    />
  );
});
