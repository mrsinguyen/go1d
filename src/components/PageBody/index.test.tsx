import * as React from "react";
import { render } from "react-testing-library";
import PageBody from "./index";

it("renders without crashing without any optional props", () => {
  render(
    <PageBody>
      <div>stuff</div>
    </PageBody>
  );
});

it("renders without crashing with all props", () => {
  render(
    <PageBody
      marginTop={4}
      marginBottom={4}
      marginRight={4}
      marginLeft={4}
      paddingTop={4}
      paddingBottom={4}
      paddingRight={4}
      paddingLeft={4}
      backgroundColor="dark"
    >
      <div>stuff</div>
    </PageBody>
  );
});
