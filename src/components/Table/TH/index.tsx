import * as React from "react";

import Text from "../../Text";
import Theme from "../../Theme";
import View, { Props as ViewProps } from "../../View";

interface Props extends ViewProps {
  text: string;
}

const TableHeaderCell = ({ text, css, ...props }: Props) => {
  const { width, ...otherProps } = props;
  return (
    <Theme.Consumer>
      {({ colors }) => (
        <View
          element="div"
          display="block"
          paddingY={3}
          paddingX={3}
          flexBasis={width || 0}
          flexGrow={1}
          flexShrink={1}
          css={{
            "border-bottom": `1px solid ${colors.divide}`,
          }}
          {...otherProps}
        >
          <Text
            css={[
              {
                textTransform: "uppercase",
              },
              css,
            ]}
            color="subtle"
          >
            {text}
          </Text>
        </View>
      )}
    </Theme.Consumer>
  );
};

export default TableHeaderCell;
