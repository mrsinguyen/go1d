import * as React from "react";
import { FontWeight } from "../../foundations/foundation-types";
import Icon from "../Icon/index";
import Link from "../Link";
import Provider from "../Provider";
import Spinner from "../Spinner";
import Text from "../Text";
import Theme from "../Theme";
import View, { ViewProps } from "../View";

export interface ButtonProps extends ViewProps {
  size?: "lg" | "md" | "sm";
  color?: string;
  iconColor?: string;
  round?: boolean;
  backgroundColor?: string;
  iconName?: string;
  iconSize?: number;
  iconMarginBottom?: number;
  fontWeight?: FontWeight;
  onClick?: ((evt: React.SyntheticEvent) => void);
  href?: any;
  active?: boolean;
}

const sizeStyles = {
  lg: {
    height: 48,
    paddingY: 3,
    paddingX: 5,
    typeScale: 3,
    iconOnlyScale: 4,
    iconMarginRight: 4,
    iconMarginBottom: 4,
  },
  md: {
    height: 40,
    paddingY: 3,
    paddingX: 4,
    typeScale: 2,
    iconOnlyScale: 3,
    iconMarginRight: 3,
    iconMarginBottom: 3,
  },
  sm: {
    height: 32,
    paddingY: 2,
    paddingX: 4,
    typeScale: 1,
    iconOnlyScale: 2,
    iconMarginRight: 3,
    iconMarginBottom: 3,
  },
};

const Button: React.SFC<ButtonProps> = ({
  size = "md",
  color = "subtle",
  backgroundColor = "background",
  iconName,
  iconSize, // sometime we need to adjust the icon's size, like in <ButtonFeature />
  children,
  fontWeight = "semibold",
  css,
  round,
  onClick,
  href,
  iconColor,
  type = "button",
  mode,
  active,
  transition = "subtle",
  flexDirection = "row",
  iconMarginBottom,
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

  let iconMarginRightValue = 0;
  let iconMarginBottomValue = 0;

  const iconSizeValue = iconSize || (children ? typeScale : iconOnlyScale);

  if (children) {
    if (flexDirection === "row") {
      iconMarginRightValue = iconMarginRight;
    }

    if (flexDirection === "column") {
      iconMarginBottomValue =
        iconMarginBottom !== undefined
          ? iconMarginBottom
          : sizeStyles[size].iconMarginBottom;
    }
  }

  return (
    <Provider mode={mode}>
      <Theme.Consumer>
        {({ colors }) => (
          <View
            element={href ? Link : "button"}
            flexDirection={flexDirection}
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
                  marginRight={iconMarginRightValue}
                  marginBottom={iconMarginBottomValue}
                />
              ) : (
                <Icon
                  name={iconName}
                  color={iconColor}
                  size={iconSizeValue}
                  marginRight={iconMarginRightValue}
                  marginBottom={iconMarginBottomValue}
                />
              ))}
            <Text
              lineHeight="ui"
              fontWeight={fontWeight}
              fontSize={typeScale}
              color="inherit"
            >
              {children}
            </Text>
          </View>
        )}
      </Theme.Consumer>
    </Provider>
  );
};

Button.displayName = "Button";

export default Button;
