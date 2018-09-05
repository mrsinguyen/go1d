import { Interpolation } from "emotion";
import * as React from "react";
import { darken } from "../../foundations";
import Button from "../Button";
import Theme from "../Theme";

interface IProps {
  element: string;
  color: string;
  css: Interpolation;
  children: JSX.Element | string;

  [key: string]: any;
}

const ButtonMinimal: React.SFC<IProps> = ({
  element = "button",
  color,
  children,
  css,
  ...props
}: IProps) => (
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
