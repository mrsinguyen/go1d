import * as React from "react";

import Theme from "../Theme";
import View, { Props as ViewProps } from "../View";

interface Props extends ViewProps {
  contain?: string;
  children: React.ReactNode;
}

const Container = ({ contain = "full", children, ...props }: Props) => (
  <Theme.Consumer>
    {({ type }) => (
      <View
        marginX="auto"
        maxWidth={type.measure[contain]}
        width="100%"
        {...props}
      >
        {children}
      </View>
    )}
  </Theme.Consumer>
);

export default Container;
