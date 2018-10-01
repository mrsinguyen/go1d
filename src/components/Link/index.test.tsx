import * as React from "react";
import { render } from "react-testing-library";
import Provider from "../Provider";
import Link from "./index";

it("renders without crashing without being wrapped in a provider", () => {
  render(<Link href="test">here</Link>);
});

it("renders without crashing while being wrapped in a provider with a custom link component", () => {
  const customLink = () => <div>here</div>;
  render(
    <Provider LinkComponent={customLink}>
      <Link href="test">here</Link>
    </Provider>
  );
});
