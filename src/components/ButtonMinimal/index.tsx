import * as React from "react";
import { darken, opacify } from "../../foundations";
import Button, { ButtonProps } from "../Button";
import Theme from "../Theme";

export interface ButtonMinimalProps extends ButtonProps {
  color?: string;
}

const ButtonMinimal: React.SFC<ButtonMinimalProps> = ({
  color = "subtle",
  children,
  css,
  ...props
}: ButtonMinimalProps) => (
  <Theme.Consumer>
    {({ colors }) => (
      <Button
        color={color}
        css={[
          {
            "&:hover, &:focus": {
              backgroundColor: opacify(colors[color], 0.08),
              color: darken(colors[color], 0.2),
            },
            "&:active": {
              backgroundColor: opacify(colors[color], 0.2),
              color: darken(colors[color], 0.3),
            },
          },
          css,
        ]}
        {...props}
      >
        {children}
      </Button>
    )}
  </Theme.Consumer>
);

ButtonMinimal.displayName = "ButtonMinimal";

export default ButtonMinimal;
