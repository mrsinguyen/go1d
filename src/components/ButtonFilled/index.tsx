import { Interpolation } from "emotion";
import * as React from "react";
import { isDark } from "../../foundations";
import { Colors } from "../../foundations/foundation-types";
import Button, { Props as ButtonProps } from "../Button";
import Theme from "../Theme";

interface Props extends ButtonProps {
  children?: React.ReactNode;
  color?: string;
  css?: Interpolation;
}

const textColor = {
  accent: "background",
  danger: "background",
  background: "subtle",
};

const getTextColor = (color: string, colors: Colors) =>
  textColor[color] || isDark(colors[color]);

const ButtonFilled: React.SFC<Props> = ({
  color = "background",
  children,
  css,
  ...props
}) => (
  <Theme.Consumer>
    {({ colors, shadows }) => (
      <Button
        backgroundColor={color}
        color={getTextColor(color, colors)}
        fontWeight="bold"
        css={[
          {
            background: `${colors.gradients.warmOverlay}, ${colors[color]}`,
            boxShadow: shadows.soft,
            textShadow:
              getTextColor(color, colors) === "background" && shadows.text,
            "&:hover, &:focus": {
              background: `${colors.gradients.lightWarmOverlay}, ${
                colors[color]
              }`,
              boxShadow: shadows.strong,
              transform: "translateY(-1px)",
            },
            "&:active": {
              background: `${colors.gradients.darkWarmOverlay}, ${
                colors[color]
              }`,
              boxShadow: shadows.crisp,
              transform: "translateY(1px)",
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

ButtonFilled.displayName = "ButtonFilled";

export default ButtonFilled;
