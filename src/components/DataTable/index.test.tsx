import * as React from "react";
import { cleanup, render } from "react-testing-library";
import TD from "../Table/TD";
import TR from "../Table/TR";
import DataTable from "./";

afterEach(cleanup);

it("renders without crashing without any optional props", () => {
  render(
    <DataTable
      rowHeight={10}
      rowCount={2}
      rows={[
        <TR key="0">
          <TD>
            <span>yo</span>
          </TD>
        </TR>,
        <TR key="1">
          <TD>
            <span>yo</span>
          </TD>
        </TR>,
      ]}
    />
  );
});

it("renders without crashing with optional props", () => {
  const createRows = ({ index }) => <div>{index}</div>;
  render(
    <DataTable
      rowHeight={10}
      rowCount={3}
      rowRenderer={createRows}
      total="Many things"
      header={[
        <TR key="0">
          <TD>
            <span>yo</span>
          </TD>
        </TR>,
      ]}
    />
  );
});
