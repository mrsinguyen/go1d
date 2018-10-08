import * as React from "react";

import Theme from "../../Theme";
import View, { Props as ViewProps } from "../../View";

const TD = ({ children, ...props }: ViewProps) => (
  <Theme.Consumer>
    {({ colors }) => (
      <View
        element="td"
        paddingX={3}
        css={{
          "border-bottom": `1px solid ${colors.divide}`,
        }}
        display="table-cell"
        paddingY={4}
      >
        {children}
      </View>
    )}
  </Theme.Consumer>
);

export default TD;
