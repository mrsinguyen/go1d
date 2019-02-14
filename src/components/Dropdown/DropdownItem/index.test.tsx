import * as React from "react";
import { cleanup, render } from "react-testing-library";
import DropdownItem from "./index";

afterEach(cleanup);

it("renders without crashing", () => {
  const mock = jest.fn();
  render(
    <DropdownItem
      item={{ title: "TITLE", description: "DESC" }}
      index={1}
      getItemProps={mock}
    />
  );
});
