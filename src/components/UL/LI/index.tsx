import * as React from "react";

import applySpacing from "../../../utils/applySpacing";
import Icon from "../../Icon";
import Text from "../../Text";
import Theme from "../../Theme";
import View, { Props as ViewProps } from "../../View";

export interface Props extends ViewProps {
  iconName?: string;
  color?: string;
  fontSize?: number;
  paddingY?: number;
  paddingX?: number;
  children?: React.ReactNode | React.ReactNode[];
}

const LI: React.SFC<Props> = ({
  iconName = "Check",
  children,
  fontSize = 2,
  paddingY = fontSize < 3 ? fontSize + 1 : 4,
  paddingX = 0,
  color,
  ...props
}: Props) => (
  <Theme.Consumer>
    {({ spacing: s }) => (
      <View
        element="li"
        flexGrow={1}
        textAlign="left"
        flexDirection="row"
        alignItems="flex-start"
        paddingX={0}
        paddingY={0}
        {...props}
      >
        {iconName && (
          <View marginY={paddingY} paddingTop={2} paddingLeft={paddingX}>
            <Icon name={iconName} color="accent" size={fontSize} />
          </View>
        )}
        <Text
          color={color}
          fontSize={fontSize}
          css={{
            paddingTop: applySpacing(s, paddingY),
            paddingBottom: applySpacing(s, paddingY),
            paddingLeft: applySpacing(s, 4),
            paddingRight: applySpacing(s, paddingX),
          }}
        >
          {children}
        </Text>
      </View>
    )}
  </Theme.Consumer>
);

export default LI;
