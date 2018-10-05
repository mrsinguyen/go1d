import * as React from "react";
import { cleanup, render } from "react-testing-library";
import Table from "../index";
import TR from "../TR";
import TH from "./index";

afterEach(cleanup);

it("renders without crashing with all props", () => {
  render(
    <Table
      header={[<TH key="0" text="header" />]}
      rows={[
        <TR key="0">
          <td>0</td>
        </TR>,
      ]}
    />
  );
});
