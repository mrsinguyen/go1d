import * as React from "react";

import Icon from "../../Icon";
import Text from "../../Text";
import Theme from "../../Theme";
import View, { ViewProps } from "../../View";

export interface LIProps extends ViewProps {
  iconName?: string;
  iconColor?: string;
  fontSize?: number;
}

const LI: React.SFC<LIProps> = ({
  iconName = "Check",
  iconColor = "accent",
  children,
  fontSize = 2,
  paddingY = fontSize < 3 ? fontSize + 1 : 4,
  paddingX = 0,
  color,
  ...props
}: LIProps) => (
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
            <Icon name={iconName} color={iconColor} size={fontSize} />
          </View>
        )}
        <Text
          color={color}
          fontSize={fontSize}
          paddingY={paddingY}
          paddingLeft={4}
          paddingRight={paddingX}
        >
          {children}
        </Text>
      </View>
    )}
  </Theme.Consumer>
);

export default LI;
