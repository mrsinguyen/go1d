import * as React from "react";
import { ButtonProps } from "../Button";
import ButtonFilled from "../ButtonFilled";

export interface ButtonFeatureProps extends ButtonProps {
  color?: string;
}

const ButtonFeature: React.SFC<ButtonFeatureProps> = ({
  color = "background",
  height = "auto",
  children,
  css,
  ...props
}: ButtonFeatureProps) => {
  return (
    <ButtonFilled
      color={color}
      height={height}
      flexDirection="column"
      {...props}
    >
      {children}
    </ButtonFilled>
  );
};

ButtonFeature.displayName = "ButtonFeature";

export default ButtonFeature;
