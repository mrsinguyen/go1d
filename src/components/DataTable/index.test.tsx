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
      rowCount={10}
      scrollToIndex={4}
      hideScrollButton={true}
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

class LoadMocker {
  public rowsLoaded = 0;

  public isRowLoaded = ({ index }) => index <= this.rowsLoaded;
  public async loadMoreRows(): Promise<any> {
    this.rowsLoaded += 10;
    return {};
  }
}

it("renders without crashing with infinite loading", () => {
  const loadMocker = new LoadMocker();

  const { container } = render(
    <DataTable
      infiniteLoad={true}
      autoRowHeight={true}
      rowHeight={50}
      loadMoreRows={loadMocker.loadMoreRows}
      isRowLoaded={loadMocker.isRowLoaded}
      rowCount={100}
      scrollToIndex={4}
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

  // tslint:disable-next-line
  global["scrollTo"] = () => null;

  container.querySelector("button").click();
});
