import isUndefined from "lodash/isUndefined";
import * as React from "react";
import { opacify } from "../../foundations";
import Base from "../Base";
import Theme from "../Theme";

interface IProps {
  element?: string;
  display?: string;
  flexDirection?: string;
  flexWrap?: string;
  flex?: string;
  alignItems?: string;
  justifyContent?: string;
  position?: string;
  // Reset margins by default
  margin?: number;
  marginX?: number;
  marginY?: number;
  marginTop?: number;
  marginBottom?: number;
  marginRight?: number;
  marginLeft?: number;
  padding?: number;
  paddingX?: number;
  paddingY?: number;
  paddingTop?: number;
  paddingBottom?: number;
  paddingRight?: number;
  paddingLeft?: number;
  color?: string;
  backgroundColor?: string;
  backgroundOpacity?: number | string;
  borderRadius?: number;
  width?: number;
  maxWidth?: number;
  zIndex?: number;
  css?: object;
  // This allows any extra props to go through to ...props
  [key: string]: any;
}

const applySpacing = (spacing = [], space: number) => {
  if (isUndefined(space)) {
    return;
  }
  if (spacing[space]) {
    return spacing[space];
  }
  if (spacing[Math.abs(space)]) {
    return spacing[Math.abs(space)] * -1;
  }
  if (
    space > spacing[spacing.length - 1] ||
    Math.abs(space) > spacing[spacing.length - 1]
  ) {
    return space;
  }

  // tslint:disable-next-line no-console
  return console.error(
    "Please use spacing scale for value smaller than " +
      spacing[spacing.length - 1]
  );
};

const View: React.SFC<IProps> = ({
  element = "div",
  display = "flex",
  flexDirection = "column",
  flexWrap,
  flex = "0 0 auto",
  alignItems,
  justifyContent,
  position,
  // Reset margins by default
  margin = 0,
  marginX = margin,
  marginY = margin,
  marginTop = marginY,
  marginBottom = marginY,
  marginRight = marginX,
  marginLeft = marginX,
  padding,
  paddingX = padding,
  paddingY = padding,
  paddingTop = paddingY,
  paddingBottom = paddingY,
  paddingRight = paddingX,
  paddingLeft = paddingX,
  color,
  backgroundColor,
  backgroundOpacity,
  borderRadius,
  width,
  maxWidth,
  zIndex,
  css = {},
  ...props
}: IProps) => (
  <Theme.Consumer>
    {({ spacing: s, colors, transitions, opacity }) => (
      <Base
        element={element}
        css={[
          {
            display,
            alignItems,
            justifyContent,
            flexDirection,
            flexWrap,
            flex,
            position,
            width,
            maxWidth,
            zIndex,
            marginTop: applySpacing(s, marginTop),
            marginBottom: applySpacing(s, marginBottom),
            marginRight: applySpacing(s, marginRight),
            marginLeft: applySpacing(s, marginLeft),
            paddingTop: applySpacing(s, paddingTop),
            paddingBottom: applySpacing(s, paddingBottom),
            paddingRight: applySpacing(s, paddingRight),
            paddingLeft: applySpacing(s, paddingLeft),
            // fix flexbox bugs
            minHeight: 0,
            minWidth: 0,
            color: colors[color],
            backgroundColor: opacity[backgroundOpacity]
              ? opacify(colors[backgroundColor], opacity[backgroundOpacity])
              : colors[backgroundColor],
            borderRadius: s[borderRadius],
            transition: transitions.subtle
          },
          css
        ]}
        {...props}
      />
    )}
  </Theme.Consumer>
);

View.displayName = "View";

export default View;
