import * as React from "react";

import Theme from "../../Theme";
import View from "../../View";

const TR = ({ children }) => (
  <Theme.Consumer>
    {({ spacing }) => (
      <View
        element="div"
        display="flex"
        flexWrap="nowrap"
        flexDirection="row"
        width="100%"
        css={{
          "& > div:first-child": {
            paddingLeft: `${spacing[6]}px`,
          },
          "& > div:last-child": {
            paddingRight: `${spacing[6]}px`,
          },
        }}
      >
        {children}
      </View>
    )}
  </Theme.Consumer>
);

export default TR;
