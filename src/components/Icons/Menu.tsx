import * as React from "react";
import { Props as ViewProps } from "../View";

interface Props extends ViewProps {
  name: string;
  color?: string;
  size?: number;
}

const Menu: React.SFC<Props> = (props: Props) => (
  <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
    <path d="M15.2 6.8H.8c-.2 0-.4.1-.6.2-.1.2-.2.3-.2.6 0 .2.1.4.2.6.2.1.4.2.6.2h14.4c.2 0 .4-.1.6-.2.1-.2.2-.4.2-.6 0-.3-.1-.4-.2-.6-.2-.1-.4-.2-.6-.2zM.8 3.6h14.4c.2 0 .4-.1.6-.2.1-.2.2-.4.2-.6 0-.3-.1-.4-.2-.6-.2-.1-.4-.2-.6-.2H.8c-.2 0-.4.1-.6.2-.1.2-.2.3-.2.6 0 .2.1.4.2.6.2.1.4.2.6.2zm14.4 8H.8c-.2 0-.4.1-.6.2-.1.2-.2.3-.2.6 0 .2.1.4.2.6.2.1.4.2.6.2h14.4c.2 0 .4-.1.6-.2.1-.2.2-.4.2-.6 0-.3-.1-.4-.2-.6-.2-.1-.4-.2-.6-.2z" />
  </svg>
);

Menu.displayName = "IconMenu";

export default Menu;
