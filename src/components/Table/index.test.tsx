import * as React from "react";
import { cleanup, render } from "react-testing-library";
import Table from "./index";
import TD from "./TD";
import TH from "./TH";
import TR from "./TR";

afterEach(cleanup);

it("renders without crashing without any optional props", () => {
  render(
    <Table
      rows={[
        <TR key="0">
          <TD>0</TD>
        </TR>,
      ]}
    />
  );
});

it("renders without crashing with all props", () => {
  render(
    <Table
      header={[<TH text="yo" key="0" />]}
      rows={[
        <TR key="0">
          <TD>0</TD>
        </TR>,
      ]}
    />
  );
});
