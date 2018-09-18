import { css } from "emotion";
import React from "react";
import find from "lodash/find";
import { Base, View, Text, Theme } from "../../../src";

const Prop = ({
  name = "",
  type = {},
  required = false,
  defaultValue = {},
  description = "N/A",
}) => (
  <Text element="tr" fontFamily="mono">
    <Base element="td">{name}</Base>
    <Base element="td">{type.name || "N/A"}</Base>
    <Base element="td">{required ? "true" : "false"}</Base>
    <Base element="td">{defaultValue ? defaultValue.value : "none"}</Base>
    <Base element="td">{description}</Base>
  </Text>
);

export const ComponentDoc = ({ component = "" }) => {
  const { props = {} } = component.__docgenInfo || {};
  return (
    <Theme.Consumer>
      {({ colors, spacing }) => (
        <View>
          <View marginY={3}>
            <Text element="h3" fontSize={3} fontWeight="bold">
              Props & methods
            </Text>
          </View>
          <View
            element="table"
            display="table"
            css={{
              borderCollapse: "collapse",
              "th, td": {
                border: `1px solid ${colors.subtle}`,
                padding: `${spacing[2]}px`,
              },
            }}
          >
            <Base element="thead">
              <Base element="tr">
                <Base element="th">Name</Base>
                <Base element="th">Type</Base>
                <Base element="th">Required</Base>
                <Base element="th">Default</Base>
                <Base element="th">Description</Base>
              </Base>
            </Base>
            <Base element="tbody">
              {Object.keys(props).map(key => (
                <Prop key={key} name={key} {...props[key]} />
              ))}
            </Base>
          </View>
        </View>
      )}
    </Theme.Consumer>
  );
};

export default ComponentDoc;
