import * as React from "react";
import { cleanup, render } from "react-testing-library";
import ButtonFilled from "../ButtonFilled";
import Dropdown from "./index";

afterEach(cleanup);

it("renders without crashing without items", () => {
  const mock = jest.fn();
  render(
    <Dropdown itemList={[]} renderFunction={mock} itemToString={mock}>
      {({ ref }) => (
        <ButtonFilled innerRef={ref} marginLeft="auto">
          Stuff
        </ButtonFilled>
      )}
    </Dropdown>
  );
});

it("renders without crashing with items", () => {
  const mock = jest.fn();
  render(
    <Dropdown
      itemList={[
        {
          title: "Add",
          href: "#testing",
          color: "accent",
          iconName: "Plus",
        },
        {
          title: "Delete",
          href: "#testing",
          color: "danger",
          iconName: "Trash",
        },
      ]}
      renderFunction={mock}
      itemToString={mock}
    >
      {({ ref }) => (
        <ButtonFilled innerRef={ref} marginLeft="auto">
          Stuff
        </ButtonFilled>
      )}
    </Dropdown>
  );
});
