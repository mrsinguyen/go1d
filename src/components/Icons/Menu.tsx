import { Interpolation } from "emotion";
import * as React from "react";
import Theme from "../Theme";

interface Props {
  size: number;
  color: string;
  css: Interpolation;
}

const Menu: React.SFC<Props> = ({
  size,
  color = "currentcolor",
  ...props
}: Props) => (
  <svg {...props} viewBox="0 0 24 24" fill={color}>
    <path d="M21 18.5H3v-1h18v1zm0-6H3v-1h18v1zm0-6H3v-1h18v1z" />
  </svg>
);

Menu.displayName = "Menu";

export default Menu;
