import * as React from "react";
import View, { ViewProps } from "../../View";

const TD = ({ children, ...props }: ViewProps) => {
  const {
    width = "100%",
    flexShrink = typeof width === "string" && width.substr(-1) === "%" ? 1 : 0,
    ...otherProps
  } = props;

  return (
    <View
      element="div"
      paddingX={3}
      flexBasis={width || 0}
      flexGrow={0}
      flexShrink={flexShrink}
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
