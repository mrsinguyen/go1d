import { css as emotion } from "emotion";
import * as React from "react";
import { LinkContext } from "../Provider";
import Theme from "../Theme";
import View from "../View";

interface Props {
  children: React.ReactNode;
  css?: any;
  href: any;
  hoverFocusColor?: string;
}

const Link = ({
  children,
  css,
  hoverFocusColor = "accent",
  ...props
}: Props) => (
  <Theme.Consumer>
    {({ colors }) => (
      <LinkContext.Consumer>
        {LinkComponent => {
          const defaultCss = {
            textDecoration: "none",
            display: "inline-flex",
            ":hover, :focus": {
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
              <View element="a" css={{ ...defaultCss, ...css }} {...props}>
                {children}
              </View>
            );
          }
        }}
      </LinkContext.Consumer>
    )}
  </Theme.Consumer>
);

export default Link;
