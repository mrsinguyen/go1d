import * as React from "react";
import { opacify } from "../../foundations";
import { Colors } from "../../foundations/foundation-types";
import Button, { ButtonProps } from "../Button";
import Theme from "../Theme";

export interface ButtonMinimalProps extends ButtonProps {
  color?: string;
  active?: boolean;
}

const activeCss = (colors: Colors, color: string) =>
  opacify(colors[color], 0.2);

const ButtonMinimal: React.SFC<ButtonMinimalProps> = ({
  color = "subtle",
  children,
  active,
  css,
  ...props
}: ButtonMinimalProps) => (
  <Theme.Consumer>
    {({ colors }) => (
      <Button
        color={color}
        css={[
          active ? { backgroundColor: activeCss(colors, color) } : {},
          {
            "&:hover, &:focus": {
              backgroundColor: opacify(colors[color], 0.08),
            },
            "&:active": {
              backgroundColor: activeCss(colors, color),
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
