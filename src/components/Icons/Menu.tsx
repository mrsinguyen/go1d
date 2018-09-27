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
    <path d="M20.2 8H4.1c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h16.2c.5 0 .9.4.9.9s-.5.9-1 .9zM20.3 13.4H4.1c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h16.2c.5 0 .9.4.9.9s-.4.9-.9.9zM20.2 18.7H4c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h16.2c.5 0 .9.4.9.9s-.4.9-.9.9z" />
  </svg>
);

Menu.displayName = "Menu";

export default Menu;
