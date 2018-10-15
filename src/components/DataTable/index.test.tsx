import * as React from "react";
import { cleanup, render } from "react-testing-library";
import TD from "../Table/TD";
import TR from "../Table/TR";
import DataTable from "./";

afterEach(cleanup);
const createRows = ({ index }) => <div>{index}</div>;

it("renders without crashing without any optional props", () => {
  render(<DataTable rowHeight={10} rowCount={2} rowRenderer={createRows} />);
});

it("renders without crashing with optional props", () => {
  render(
    <DataTable
      autoRowHeight={true}
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