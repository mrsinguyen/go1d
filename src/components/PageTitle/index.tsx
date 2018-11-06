import * as React from "react";

import Text from "../Text";
import View, { ViewProps } from "../View";

const PageTitle: React.SFC<ViewProps> = ({ children, ...props }: ViewProps) => (
  <View alignItems="left" {...props}>
    <Text
      element="h1"
      fontWeight="semibold"
      fontSize={5}
      display="block"
      marginBottom={5}
    >
      {children}
    </Text>
  </View>
);

export default PageTitle;
