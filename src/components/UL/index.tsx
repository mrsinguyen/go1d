import * as React from "react";

import View, { ViewProps } from "../View";

export interface ULProps extends ViewProps {
  iconName?: string;
  fontSize?: number;
}

const UL: React.SFC<ULProps> = ({
  iconName = "Check",
  color,
  fontSize = 2,
  paddingY = 5,
  paddingX = 6,
  children,
  ...props
}: ULProps) => (
  <View
    element="ul"
    paddingY={paddingY}
    paddingX={paddingX}
    css={{ listStyle: "none", margin: 0 }}
    {...props}
  >
    {React.Children.map(children, (child: React.ReactElement<any>, i) => {
      const childIcon = child.props.iconName ? child.props.iconName : iconName;
      return React.cloneElement(child as React.ReactElement<any>, {
        iconName: childIcon,
        fontSize,
        color,
      });
    })}
  </View>
);

export default UL;
