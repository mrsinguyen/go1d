import { Interpolation } from "emotion";
import * as React from "react";
import Text from "../Text";
import Theme from "../Theme";
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
  css?: Interpolation;
  children: React.ReactNode;
  onClick: ((evt: React.SyntheticEvent) => void);
}

const Button: React.SFC<Props> = ({
  size = "md",
  color = "subtle",
  backgroundColor = "lightest",
  children,
  css,
  textAlign,
  onClick,
  ...props
}: Props) => (
  <Theme.Consumer>
    {({ colors, type }) => (
      <View
        element="button"
        flexDirection="row"
        alignItems="center"
        paddingY={size === "lg" ? 4 : size === "sm" ? 1 : 3}
        paddingX={size === "lg" ? 5 : size === "sm" ? 1 : 3}
        backgroundColor={backgroundColor}
        textAlign={textAlign}
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
        <Text
          display="inline-block"
          lineHeight="ui"
          fontWeight="bold"
          fontSize={sizes[size]}
          color="inherit"
          css={{
            display: "block",
            width: "100%",
          }}
        >
          {children}
        </Text>
      </View>
    )}
  </Theme.Consumer>
);

Button.displayName = "Button";

export default Button;
