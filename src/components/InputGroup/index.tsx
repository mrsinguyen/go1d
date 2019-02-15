import * as React from "react";
import Theme from "../Theme";
import View from "../View";

const InputGroup = ({ children }) => (
  <Theme.Consumer>
    {({ spacing }) => {
      const css = {
        "> *": {
          borderRadius: 0,
        },
        "> :first-child": {
          borderTopLeftRadius: spacing[2],
          borderBottomLeftRadius: spacing[2],
        },
        "> :last-child": {
          borderTopRightRadius: spacing[2],
          borderBottomRightRadius: spacing[2],
        },
      };
      return (
        <View flexDirection="row" css={css}>
          {children}
        </View>
      );
    }}
  </Theme.Consumer>
);

export default InputGroup;
