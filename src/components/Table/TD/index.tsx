import * as React from "react";

import Theme from "../../Theme";
import View, { Props as ViewProps } from "../../View";

const TD = ({ children, ...props }: ViewProps) => {
  const { width, ...otherProps } = props;
  return (
    <Theme.Consumer>
      {({ colors }) => (
        <View
          element="div"
          paddingX={3}
          flexBasis={width || 0}
          flexGrow={1}
          flexShrink={1}
          css={{
            "border-bottom": `1px solid ${colors.divide}`,
          }}
          display="flex"
          flexDirection="row"
          alignItems="center"
          paddingY={4}
          {...otherProps}
        >
          {children}
        </View>
      )}
    </Theme.Consumer>
  );
};

export default TD;
