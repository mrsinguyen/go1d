import { css as emotion } from "emotion";
import * as React from "react";
import Theme from "../Theme";
import View from "../View";

interface Props {
  children: React.ReactNode;
  css?: any;
  href: string;
  hoverFocusColor?: string;
}

const Link = ({
  children,
  css,
  hoverFocusColor = "accent",
  ...props
}: Props) => (
  <Theme.Consumer>
    {({ LinkComponent, colors }) => {
      const defaultCss = {
        textDecoration: "none",
        ":hover, :focus, :focus": {
          "svg, span": {
            color: colors[hoverFocusColor],
          },
        },
      };
      if (LinkComponent) {
        return (
          <LinkComponent className={emotion(defaultCss, css)} {...props}>
            {children}
          </LinkComponent>
        );
      } else {
        return (
          <View element="a" css={[defaultCss, css]} {...props}>
            {children}
          </View>
        );
      }
    }}
  </Theme.Consumer>
);

export default Link;
