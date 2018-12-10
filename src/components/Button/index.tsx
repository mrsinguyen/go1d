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
  round?: boolean;
  backgroundColor?: string;
  iconName?: string;
  fontWeight?: FontWeight;
  onClick?: ((evt: React.SyntheticEvent) => void);
  href?: any;
}

const sizeStyles = {
  lg: {
    height: 48,
    paddingY: 3,
    paddingX: 5,
    typeScale: 3,
    iconOnlyScale: 4,
    iconMarginRight: 4,
  },
  md: {
    height: 40,
    paddingY: 3,
    paddingX: 4,
    typeScale: 2,
    iconOnlyScale: 3,
    iconMarginRight: 3,
  },
  sm: {
    height: 32,
    paddingY: 2,
    paddingX: 4,
    typeScale: 1,
    iconOnlyScale: 2,
    iconMarginRight: 3,
  },
};

const Button: React.SFC<ButtonProps> = ({
  size = "md",
  color = "subtle",
  backgroundColor = "background",
  iconName,
  children,
  fontWeight = "semibold",
  css,
  round,
  onClick,
  href,
  iconColor = color,
  type = "button",
  ...props
}: ButtonProps) => {
  const {
    height,
    paddingY,
    paddingX,
    typeScale,
    iconOnlyScale,
    iconMarginRight,
  } = sizeStyles[size];
  return (
    <View
      element={href ? Link : "button"}
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      height={height}
      width={!children && height}
      paddingY={paddingY}
      paddingX={children && paddingX}
      backgroundColor={backgroundColor}
      color={color}
      borderRadius={round ? 8 : 2}
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
          size={children ? typeScale : iconOnlyScale}
          marginRight={children && iconMarginRight}
          color={iconColor}
        />
      )}
      <Text
        lineHeight="ui"
        fontWeight={fontWeight}
        fontSize={typeScale}
        color="inherit"
      >
        {children}
      </Text>
    </View>
  );
};

Button.displayName = "Button";

export default Button;
