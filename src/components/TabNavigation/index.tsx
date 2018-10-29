import * as React from "react";
import View, { Props as ViewProps } from "../View";

const TabNavigation = ({ children, ...props }: ViewProps) => (
  <View
    paddingX={8}
    boxShadow="crisp"
    display="flex"
    flexDirection="row"
    alignItems="left"
    {...props}
  >
    {children}
  </View>
);

export default TabNavigation;
