import * as React from "react";
import { cleanup, render } from "react-testing-library";
import EmptyState from "./index";

afterEach(cleanup);

it("renders without crashing without any optional props", () => {
  render(<EmptyState />);
});

it("renders without crashing with all props passed to it", () => {
  render(
    <EmptyState
      title="title"
      description="Description"
      action={() => null}
      actionText="Test"
    />
  );
});