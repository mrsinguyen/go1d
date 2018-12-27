import React from "react";
import { Theme, Table, TR, TH, TD, Text } from "../../../src/";

export const TypeScale = ({ colors = [], ...props }) => (
  <Theme.Consumer>
    {({ type }) => (
      <Table
        rows={type.scale.lg.filter((val, key) => key !== 0).map((val, key) => (
          <TR key={key}>
            <TD>
              <Text>{key + 1}</Text>
            </TD>
            <TD>
              <Text>
                {val}
                px
              </Text>
            </TD>
            <TD>
              <Text>
                {type.scale.md[key + 1]}
                px
              </Text>
            </TD>
            <TD>
              <Text>
                {type.scale.sm[key + 1]}
                px
              </Text>
            </TD>
          </TR>
        ))}
        header={[
          <TH key="0" text="Typescale" />,
          <TH key="0" text="Large screen" />,
          <TH key="0" text="Medium screen" />,
          <TH key="0" text="Small screen" />,
        ]}
      />
    )}
  </Theme.Consumer>
);

export default TypeScale;
