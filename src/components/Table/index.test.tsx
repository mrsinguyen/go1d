import * as React from "react";
import { cleanup, render } from "react-testing-library";
import Table from "./index";

afterEach(cleanup);

it("renders without crashing without any optional props", () => {
  render(
    <Table
      rows={[
        <tr key="0">
          <td>0</td>
        </tr>,
      ]}
    />
  );
});

it("renders without crashing with all props", () => {
  render(
    <Table
      header={[<th key="0">yo</th>]}
      rows={[
        <tr key="0">
          <td>0</td>
        </tr>,
      ]}
    />
  );
});
