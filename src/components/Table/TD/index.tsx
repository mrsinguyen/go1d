import * as React from "react";
import View, { Props as ViewProps } from "../../View";

const TD = ({ children, ...props }: ViewProps) => {
  const { width, ...otherProps } = props;
  return (
    <View
      element="div"
      paddingX={3}
      flexBasis={width || 0}
      flexGrow={1}
      flexShrink={1}
      borderBottom={1}
      borderColor="divide"
      display="flex"
      flexDirection="row"
      alignItems="center"
      paddingY={4}
      {...otherProps}
    >
      {children}
    </View>
  );
};

export default TD;
