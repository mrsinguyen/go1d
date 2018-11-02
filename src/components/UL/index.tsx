import * as React from "react";

import View, { Props as ViewProps } from "../View";

export interface Props extends ViewProps {
  iconName?: string;
  color?: string;
  fontSize?: number;
  paddingY?: number;
  paddingX?: number;
  children?: React.ReactNode | React.ReactNode[];
}

const UL: React.SFC<Props> = ({
  iconName = "Check",
  color,
  fontSize = 2,
  paddingY = 5,
  paddingX = 6,
  children,
  ...props
}: Props) => (
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
