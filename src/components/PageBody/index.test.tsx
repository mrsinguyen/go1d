import * as React from "react";
import * as ReactDOM from "react-dom";
import PageBody from "./index";

it("renders without crashing without any optional props", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <PageBody>
      <div>stuff</div>
    </PageBody>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it("renders without crashing with all props", () => {
  const div = document.createElement("div");
  ReactDOM.render(
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
    </PageBody>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
