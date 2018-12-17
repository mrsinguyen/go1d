import * as React from "react";
import { cleanup, render } from "react-testing-library";
import MoreMenu from "./index";

afterEach(cleanup);

it("renders without crashing without any optional props", () => {
  render(
    <MoreMenu
      itemList={[
        {
          title: "Add",
          href: "#testing",
          color: "accent",
          iconName: "Plus",
        },
        {
          title: "Delete",
          onClick: jest.fn(),
          color: "danger",
          iconName: "Trash",
        },
      ]}
    />
  );
});

it("should show loader", () => {
  const { getByText, getByTestId } = render(
    <MoreMenu
      loading={true}
      loader={<div>Loading...</div>}
      isButtonFilled={false}
      itemList={[
        {
          title: "Add",
          href: "#testing",
          color: "accent",
          iconName: "Plus",
        },
        {
          title: "Delete",
          onClick: jest.fn(),
          color: "danger",
          iconName: "Trash",
        },
      ]}
    />
  );

  const toggle = getByTestId("toggle");

  const clickEvent = document.createEvent("MouseEvents");
  clickEvent.initEvent("click", true, true);
  toggle.dispatchEvent(clickEvent);

  expect(getByText("Loading...")).toBeDefined();
});
