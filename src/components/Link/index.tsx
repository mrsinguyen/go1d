import * as React from "react";
import Theme from "../Theme";
import View from "../View";

const Link = ({ children, ...props }) => (
  <Theme.Consumer>
    {({ LinkComponent }) =>
      LinkComponent ? (
        <LinkComponent {...props}>{children}</LinkComponent>
      ) : (
        <View element="a" {...props}>
          {children}
        </View>
      )
    }
  </Theme.Consumer>
);

export default Link;
