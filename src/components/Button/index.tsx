import isUndefined = require("lodash/isUndefined");
import merge = require("lodash/merge");
import * as React from "react";
import { FontWeight } from "../../foundations/foundation-types";
import Icon from "../Icon/index";
import Link from "../Link";
import Spinner from "../Spinner";
import Text from "../Text";
import View, { ViewProps } from "../View";

export interface ButtonProps extends ViewProps {
  size?: "lg" | "md" | "sm";
  color?: string;
  iconColor?: string;
  round?: boolean;
  backgroundColor?: string;
  sizeStyles?: any;
  iconName?: string;
  iconMargin?: number;
  fontWeight?: FontWeight;
  onClick?: ((evt: React.SyntheticEvent) => void);
  href?: any;
  active?: boolean;
}

const getIconMargin = (flexDirection, iconMargin) => {
  const iconMarginStyle = {
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    marginTop: 0,
  };
  switch (flexDirection) {
    case "row":
      iconMarginStyle.marginRight = iconMargin;
      break;
    case "row-reverse":
      iconMarginStyle.marginLeft = iconMargin;
      break;
    case "column":
      iconMarginStyle.marginBottom = iconMargin;
      break;
    case "column-reverse":
      iconMarginStyle.marginTop = iconMargin;
      break;
  }
  return iconMarginStyle;
};

const Button: React.SFC<ButtonProps> = ({
  size = "md",
  color = "subtle",
  backgroundColor = "background",
  sizeStyles,
  iconName,
  children,
  fontWeight = "semibold",
  css,
  round,
  onClick,
  href,
  iconColor = children && color === "subtle" ? "muted" : color,
  type = "button",
  mode,
  active,
  transition = "subtle",
  flexDirection = "row",
  iconMargin: iconMarginProp,
  ...props
}: ButtonProps) => {
  const sizeStylesDefault = {
    lg: {
      height: 48,
      paddingY: 3,
      paddingX: 5,
      typeScale: 3,
      iconOnlyScale: 4,
      iconMargin: 4,
    },
    md: {
      height: 40,
      paddingY: 3,
      paddingX: 4,
      typeScale: 2,
      iconOnlyScale: 3,
      iconMargin: 3,
    },
    sm: {
      height: 32,
      paddingY: 2,
      paddingX: 4,
      typeScale: 1,
      iconOnlyScale: 1,
      iconMargin: 3,
    },
  };
  const sizeStylesMerged = merge(sizeStylesDefault, sizeStyles);
  const {
    height,
    padding,
    paddingY = padding,
    paddingX = padding,
    typeScale,
    iconSize,
    iconOnlyScale,
    iconMargin,
  } = sizeStylesMerged[size];

  const iconSizeValue = iconSize || (children ? typeScale : iconOnlyScale);
  const iconMarginStyle = children
    ? getIconMargin(
        flexDirection,
        isUndefined(iconMarginProp) ? iconMargin : iconMarginProp
      )
    : {};

  return (
    <View
      element={href ? Link : "button"}
      flexDirection={flexDirection}
      mode={mode}
      alignItems="center"
      justifyContent="center"
      height={height}
      width={!children && height}
      paddingY={paddingY}
      paddingX={children && paddingX}
      backgroundColor={backgroundColor}
      borderRadius={round ? 8 : 2}
      transition={transition}
      onClick={onClick}
      href={href}
      type={type}
      color={color}
      css={[
        {
          "&:disabled": {
            opacity: 0.5,
            pointerEvents: "none",
          },
        },
        css,
      ]}
      {...props}
    >
      {iconName &&
        (iconName === "Spinner" ? (
          <Spinner
            borderColor={iconColor}
            size={iconSizeValue}
            {...iconMarginStyle}
          />
        ) : (
          <Icon
            name={iconName}
            transition={transition}
            color={iconColor}
            size={iconSizeValue}
            {...iconMarginStyle}
          />
        ))}
      <Text
        lineHeight="ui"
        transition={transition}
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
