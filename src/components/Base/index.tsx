import { Globals } from "csstype";
import { css as emotion, Interpolation } from "emotion";
import * as React from "react";
import applySpacing from "../../utils/applySpacing";
import Theme from "../Theme";

type PaddingProperty = Globals | number;

export interface Props {
  element?: string | React.ComponentType;
  children?: React.ReactNode;
  padding?: PaddingProperty | PaddingProperty[];
  paddingX?: PaddingProperty | PaddingProperty[];
  paddingY?: PaddingProperty | PaddingProperty[];
  paddingTop?: PaddingProperty | PaddingProperty[];
  paddingBottom?: PaddingProperty | PaddingProperty[];
  paddingRight?: PaddingProperty | PaddingProperty[];
  paddingLeft?: PaddingProperty | PaddingProperty[];
  css?: any;
  [key: string]: any;
}

const styleReset: Interpolation = {
  margin: 0,
  padding: 0,
  textDecoration: "none",
  color: "inherit",
  border: "none",
  textAlign: "inherit",
  fontWeight: "inherit",
  fontFamily: "inherit",
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  textSizeAdjust: "100%",
  textRendering: "optimizeLegibility",
  appearance: "none",
  boxSizing: "border-box",
  outline: 0,
};

const Base: React.SFC<Props> = ({
  element: Element = "div",
  children,
  innerRef,
  padding,
  paddingX = padding,
  paddingY = padding,
  paddingTop = paddingY,
  paddingBottom = paddingY,
  paddingRight = paddingX,
  paddingLeft = paddingX,
  css = [],
  ...props
}: Props) => (
  <Theme.Consumer>
    {({ spacing: s, mq }) => (
      <Element
        className={emotion(
          styleReset,
          mq([
            {
              paddingTop: applySpacing(s, paddingTop),
              paddingBottom: applySpacing(s, paddingBottom),
              paddingRight: applySpacing(s, paddingRight),
              paddingLeft: applySpacing(s, paddingLeft),
            },
            css,
          ])
        )}
        children={children}
        ref={innerRef}
        {...props}
      />
    )}
  </Theme.Consumer>
);

Base.displayName = "Base";

export default Base;
