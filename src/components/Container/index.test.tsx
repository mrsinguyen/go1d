import * as React from "react";
import { cleanup, render } from "react-testing-library";
import Container from "./index";

it("renders without crashing without any optional props", () => {
  render(
    <Container>
      <div>stuff</div>
    </Container>
  );

  cleanup();
});

it("renders without crashing with all props", () => {
  render(
    <Container contain="full">
      <div>stuff</div>
    </Container>
  );

  cleanup();
});
