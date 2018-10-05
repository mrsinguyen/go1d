import React from "react";
import { View, Text, Table, TR, TH, TD, Theme } from "../../../src";

const Prop = ({
  name = "",
  type = {},
  required = false,
  defaultValue = {},
  description = "N/A",
}) => (
  <TR>
    <TD>
      <Text>{name}</Text>
    </TD>
    <TD>
      <Text>{type.name || "N/A"}</Text>
    </TD>
    <TD>
      <Text>{required ? "true" : "false"}</Text>
    </TD>
    <TD>
      <Text>{defaultValue ? defaultValue.value : "none"}</Text>
    </TD>
    <TD>
      <Text>{description}</Text>
    </TD>
  </TR>
);

export const ComponentDoc = ({ component = "" }) => {
  const { props = {} } = component.__docgenInfo || {};
  return Object.keys(props).length > 0 ? (
    <Theme.Consumer>
      {({ type }) => (
        <View>
          <View marginY={3}>
            <Text element="h2" fontSize={3} fontWeight="bold">
              Props &amp; methods
            </Text>
          </View>
          <Table
            css={{
              span: {
                fontFamily: type.family.mono,
              },
            }}
            header={[
              <TH key="name" text="Name" />,
              <TH key="type" text="Type" />,
              <TH key="required" text="Required" />,
              <TH key="default" text="Default" />,
              <TH key="description" text="Description" />,
            ]}
            rows={Object.keys(props).map(key => (
              <Prop key={key} name={key} {...props[key]} />
            ))}
          />
        </View>
      )}
    </Theme.Consumer>
  ) : null;
};

export default ComponentDoc;
