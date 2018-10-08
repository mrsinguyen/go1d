import * as React from "react";
import { darken } from "../../foundations";
import Button, { Props as ButtonProps } from "../Button";
import Theme from "../Theme";

interface Props extends ButtonProps {
  color?: string;
  children?: React.ReactNode;
}

const ButtonMinimal: React.SFC<Props> = ({
  color = "subtle",
  children,
  css,
  ...props
}: Props) => (
  <Theme.Consumer>
    {({ colors = { faded: undefined, muted: undefined } }) => (
      <Button
        color={color}
        css={[
          {
            "&:hover, &:focus": {
              backgroundColor: colors.faded,
              color: darken(colors[color], 0.2),
            },
            "&:active": {
              backgroundColor: colors.muted,
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
