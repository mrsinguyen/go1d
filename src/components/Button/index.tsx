import { Interpolation } from "emotion";
import * as React from "react";
import Icon from "../Icon/index";
import Text from "../Text";
import View, { Props as ViewProps } from "../View";

const sizes = {
  sm: 1,
  md: 2,
  lg: 3,
};

export interface Props extends ViewProps {
  size?: string;
  color?: string;
  backgroundColor?: string;
  iconName?: string;
  css?: Interpolation;
  children?: React.ReactNode;
  onClick: ((evt: React.SyntheticEvent) => void);
}

const Button: React.SFC<Props> = ({
  size = "md",
  color = "subtle",
  backgroundColor = "background",
  iconName,
  children,
  css,
  onClick,
  ...props
}: Props) => (
  <View
    element="button"
    flexDirection="row"
    alignItems="center"
    justifyContent="space-between"
    paddingY={size === "lg" ? 4 : 3}
    paddingX={size === "lg" ? 5 : 4}
    backgroundColor={backgroundColor}
    color={color}
    borderRadius={2}
    onClick={onClick}
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
        size={sizes[size]}
        marginRight={children && (size === "lg" ? 4 : 3)}
      />
    )}
    <Text
      lineHeight="ui"
      fontWeight="bold"
      fontSize={sizes[size]}
      color="inherit"
    >
      {children}
    </Text>
  </View>
);

Button.displayName = "Button";

export default Button;
