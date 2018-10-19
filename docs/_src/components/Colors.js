import React from "react";
import Color from "./Color";
import { foundations, View } from "../../../src/";

export const Colors = ({ colors = [], ...props }) => (
  <View
    marginTop={6}
    marginBottom={8}
    marginX={-4}
    flexDirection="row"
    flexWrap="wrap"
    {...props}
  >
    {colors.map((color, key) => (
      <Color marginX={4} marginBottom={6} key={key} color={color} />
    ))}
  </View>
);

export default Colors;
