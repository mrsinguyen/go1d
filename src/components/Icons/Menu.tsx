import * as React from "react";
import { Props as ViewProps } from "../View";

interface Props extends ViewProps {
  name: string;
  color?: string;
  size?: number;
}

const Menu: React.SFC<Props> = (props: Props) => (
  <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
    <path d="M20.2 8H4.1c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h16.2c.5 0 .9.4.9.9s-.5.9-1 .9zm.1 5.4H4.1c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h16.2c.5 0 .9.4.9.9s-.4.9-.9.9zm-.1 5.3H4c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h16.2c.5 0 .9.4.9.9s-.4.9-.9.9z" />
  </svg>
);

Menu.displayName = "IconMenu";

export default Menu;
