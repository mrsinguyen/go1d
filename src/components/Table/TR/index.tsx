import * as React from "react";

import Theme from "../../Theme";
import View from "../../View";

const TR = ({ children }) => (
  <Theme.Consumer>
    {({ spacing }) => (
      <View
        element="tr"
        display="table-row"
        width="100%"
        css={{
          "th:first-child, td:first-child": {
            paddingLeft: `${spacing[6]}px`,
          },
          "th:last-child, td:last-child": {
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
