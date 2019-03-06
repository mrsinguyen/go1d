import * as React from "react";
import Button, { ButtonProps } from "../Button";
import Theme from "../Theme";

export interface ButtonToggleProps extends ButtonProps {
  isOn?: boolean;
  color?: string;
  fillColor?: string;
}

const ButtonToggle: React.SFC<ButtonToggleProps> = ({
  isOn = false,
  color = "subtle",
  children,
  iconColor = children && color === "subtle" ? "muted" : color,
  css,
  border = 2,
  borderColor = color,
  fillColor = "contrast",
  ...props
}: ButtonToggleProps) => (
  <Theme.Consumer>
    {({ colors }) => (
      <Button
        color={isOn ? colors.background : color}
        iconColor={isOn ? colors.background : iconColor}
        css={[
          isOn
            ? { backgroundColor: colors[fillColor] }
            : { backgroundColor: colors.background },
          css,
        ]}
        border={border}
        borderColor={isOn ? "transparent" : borderColor}
        transition="none"
        {...props}
      >
        {children}
      </Button>
    )}
  </Theme.Consumer>
);

ButtonToggle.displayName = "ButtonToggle";

export default ButtonToggle;
