import React from "react";
import { View, Text, Table, TR, TH, TD, Theme, Icon } from "../../../src";

const Prop = ({ name = "", type = {}, required = false }) => (
  <TR>
    <TD flexBasis="13%">
      <Text>{name}</Text>
    </TD>
<<<<<<< HEAD
    <TD>{required && <Icon name="Check" marginX="auto" />}</TD>
    <TD>
      <Text>{type.name || "N/A"}</Text>
    </TD>
=======
    <TD flexBasis="27%">
      <Text>{type.name || "N/A"}</Text>
    </TD>
    <TD>
      <Text>{required ? "true" : "false"}</Text>
    </TD>
    <TD>
      <Text>{defaultValue ? defaultValue.value : "none"}</Text>
    </TD>
    <TD flexBasis="8%">
      <Text>{description}</Text>
    </TD>
>>>>>>> Adding DataTable
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
<<<<<<< HEAD
              <TH key="name" text="Name" />,
              <TH key="required" text="Required" />,
              <TH key="type" text="Type" />,
=======
              <TH key="name" text="Name" width="13%" />,
              <TH key="type" text="Type" width="27%" />,
              <TH key="required" text="Required" />,
              <TH key="default" text="Default" />,
              <TH key="description" text="Description" width="8%" />,
>>>>>>> Adding DataTable
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
