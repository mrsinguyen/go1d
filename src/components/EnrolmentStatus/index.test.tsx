import * as React from "react";
import { render } from "react-testing-library";
import EnrolmentStatus from "./index";

it("renders without crashing with all props", () => {
  render(
    <EnrolmentStatus
      status={{
        type: "inProgress",
        text: "In progress",
      }}
    />
  );
});
