import React from "react";
import { View, Text, Table, TR, TH, TD, Theme, Icon } from "../../../src";

const Prop = ({ name = "", type = {}, required = false, description = "" }) => (
  <React.Fragment>
    <TR>
      <TD width="20%">
        <Text>{name}</Text>
      </TD>
      <TD>{required && <Icon name="Check" marginX="auto" />}</TD>
      <TD width="50%">
        <Text>{type.name || "N/A"}</Text>
      </TD>
    </TR>
    {description.length !== 0 && (
      <TR>
        <TD>
          <Text fontSize={1}>{description}</Text>
        </TD>
      </TR>
    )}
  </React.Fragment>
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
              <TH key="name" text="Name" width="20%" />,
              <TH key="required" text="Required" />,
              <TH key="type" text="Type" width="50%" />,
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
