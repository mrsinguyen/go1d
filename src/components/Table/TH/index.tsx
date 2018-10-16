import * as React from "react";

import Text from "../../Text";
import View, { Props as ViewProps } from "../../View";

interface Props extends ViewProps {
  text: string;
}

const TableHeaderCell = ({ text, css, ...props }: Props) => {
  const { width, ...otherProps } = props;
  return (
    <View
      element="div"
      display="block"
      paddingY={3}
      paddingX={3}
      flexBasis={width || 0}
      flexGrow={1}
      flexShrink={1}
      borderBottom={1}
      borderColor="divide"
      {...otherProps}
    >
      <Text textTransform="uppercase" color="subtle">
        {text}
      </Text>
    </View>
  );
};

export default TableHeaderCell;
