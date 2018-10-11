import { Interpolation } from "emotion";
import { get } from "lodash";
import * as React from "react";
import Icon from "../Icon/index";
import Text from "../Text";
import View, { Props as ViewProps } from "../View";

export interface Props extends ViewProps {
  size?: "lg" | "md" | "sm";
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
    paddingY={get({ lg: 4, md: 3, sm: 1 }, size)}
    paddingX={get({ lg: 5, md: 3, sm: 1 }, size)}
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
        size={get({ lg: 3, md: 2, sm: 1 }, size)}
        marginRight={children && get({ lg: 4, md: 3, sm: 1 }, size)}
      />
    )}
    <Text
      lineHeight="ui"
      fontWeight="bold"
      fontSize={get({ lg: 3, md: 2, sm: 1 }, size)}
      color="inherit"
    >
      {children}
    </Text>
  </View>
);

Button.displayName = "Button";

export default Button;
