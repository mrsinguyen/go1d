import * as React from "react";

import Text from "../../Text";
import Theme from "../../Theme";
import View, { Props as ViewProps } from "../../View";

interface Props extends ViewProps {
  text: string;
}

const TableHeaderCell = ({ text, ...props }: Props) => (
  <Theme.Consumer>
    {({ colors }) => (
      <View
        element="th"
        display="table-cell"
        paddingY={3}
        paddingX={3}
        css={{
          "border-bottom": `1px solid ${colors.divide}`,
        }}
        {...props}
      >
        <Text
          css={{
            textTransform: "uppercase",
          }}
          color="subtle"
        >
          {text}
        </Text>
      </View>
    )}
  </Theme.Consumer>
);

export default TableHeaderCell;
