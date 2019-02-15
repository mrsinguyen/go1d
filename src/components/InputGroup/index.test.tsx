import * as React from "react";
import { cleanup, render } from "react-testing-library";
import InputTextAffix from "../InputTextAffix";
import TextInput from "../TextInput";
import InputGroup from "./index";

afterEach(cleanup);

it("renders without crashing without any optional props", () => {
  render(
    <InputGroup>
      <InputTextAffix text="www." />
      <TextInput
        id="id"
        borderRadius={0}
        viewCss={{
          flexGrow: 1,
          flexShrink: 1,
        }}
      />
      <InputTextAffix text=".mygo1.com" />
    </InputGroup>
  );
});
