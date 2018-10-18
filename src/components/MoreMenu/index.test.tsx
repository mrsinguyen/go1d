import * as React from "react";
import { cleanup, render } from "react-testing-library";
import MoreMenu from "./index";

afterEach(cleanup);

it("renders without crashing without any optional props", () => {
  render(
    <MoreMenu
      hasShadow={false}
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
    />
  );
});
