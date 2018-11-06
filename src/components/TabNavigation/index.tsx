import * as React from "react";
import View, { ViewProps } from "../View";

const TabNavigation = ({ children, ...props }: ViewProps) => (
  <View
    paddingX={8}
    boxShadow="crisp"
    display="flex"
    flexDirection="row"
    alignItems="left"
    borderTop={1}
    borderColor="highlight"
    {...props}
  >
    {children}
  </View>
);

export default TabNavigation;
