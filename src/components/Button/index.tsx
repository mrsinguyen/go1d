import { get } from "lodash";
import * as React from "react";
import { FontWeight } from "../../foundations/foundation-types";
import Icon from "../Icon/index";
import Link from "../Link";
import Text from "../Text";
import View, { ViewProps } from "../View";

export interface ButtonProps extends ViewProps {
  size?: "lg" | "md" | "sm";
  color?: string;
  iconColor?: string;
  backgroundColor?: string;
  iconName?: string;
  fontWeight?: FontWeight;
  onClick?: ((evt: React.SyntheticEvent) => void);
  href?: any;
}

const Button: React.SFC<ButtonProps> = ({
  size = "md",
  color = "subtle",
  backgroundColor = "background",
  iconName,
  children,
  fontWeight = "semibold",
  css,
  onClick,
  href,
  iconColor = color,
  type = "button",
  ...props
}: ButtonProps) => (
  <View
    element={href ? Link : "button"}
    flexDirection="row"
    alignItems="center"
    justifyContent="space-between"
    height={get({ lg: 48, md: 40, sm: 32 }, size)}
    paddingY={get({ lg: 3, md: 3, sm: 2 }, size)}
    paddingX={get({ lg: 5, md: 4, sm: 4 }, size)}
    backgroundColor={backgroundColor}
    color={color}
    borderRadius={2}
    onClick={onClick}
    href={href}
    type={type}
    css={[
      {
        cursor: "pointer",
        "&:disabled": {
          opacity: 0.5,
          pointerEvents: "none",
        },
      },
      css,
    ]}
    {...props}
  >
    {iconName && (
      <Icon
        name={iconName}
        size={get({ lg: 3, md: 2, sm: 1 }, size)}
        marginRight={children && get({ lg: 4, md: 3, sm: 3 }, size)}
        color={iconColor}
      />
    )}
    <Text
      lineHeight="ui"
      fontWeight={fontWeight}
      fontSize={get({ lg: 3, md: 2, sm: 1 }, size)}
      color="inherit"
    >
      {children}
    </Text>
  </View>
);

Button.displayName = "Button";

export default Button;
