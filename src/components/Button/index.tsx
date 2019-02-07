import * as React from "react";
import { FontWeight } from "../../foundations/foundation-types";
import Icon from "../Icon/index";
import Link from "../Link";
import Provider from "../Provider";
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
  iconColor,
  type = "button",
  mode,
  active,
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
    <Provider mode={mode}>
      <Theme.Consumer>
        {({ colors }) => (
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
            borderRadius={round ? 8 : 2}
            onClick={onClick}
            href={href}
            type={type}
            color={color}
            css={[
              {
                cursor: "pointer",
                "&:disabled": {
                  opacity: 0.5,
                  pointerEvents: "none",
                },
                svg: {
                  color: iconColor ? colors[iconColor] : colors.subtle,
                },
                "&:hover, &:focus, &:active": {
                  color: colors[color],
                  svg: {
                    color: iconColor ? colors[iconColor] : colors[color],
                  },
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
        )}
      </Theme.Consumer>
    </Provider>
  );
};

Button.displayName = "Button";

export default Button;
