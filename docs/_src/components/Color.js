import React from "react";
import { View, Text, Theme } from "../../../src/";

export const Color = ({ color, ...props }) => (
  <Theme.Consumer>
    {({ colors }) => (
      <View
        borderRadius={2}
        width="160"
        boxShadow="strong"
        overflow="hidden"
        {...props}
      >
        <View backgroundColor={color} height="160" width="100%" />
        <View mode="light" padding={4} backgroundColor="background">
          <Text size={1} fontWeight="bold" fontFamily="mono">
            {color}
          </Text>
          <Text size={1} fontWeight="bold" fontFamily="mono" color="subtle">
            {colors[color]}
          </Text>
        </View>
      </View>
    )}
  </Theme.Consumer>
);

export default Color;
