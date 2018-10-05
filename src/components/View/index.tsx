import {
  FlexDirectionProperty,
  FlexWrapProperty,
  Globals,
  PositionProperty,
} from "csstype";
import { Interpolation } from "emotion";
import * as React from "react";
import { opacify } from "../../foundations";
import Base, { Props as BaseProps } from "../Base";
import Theme from "../Theme";

type MarginProperty = Globals | "auto" | number;
type PaddingProperty = Globals | number;

export interface Props extends BaseProps {
  element?: string | React.ComponentType;
  display?: string;
  flexDirection?: FlexDirectionProperty;
  flexWrap?: FlexWrapProperty;
  alignItems?: string;
  justifyContent?: string;
  flexGrow?: number;
  flexShrink?: number;
  flexBasis?: number | string;
  position?: PositionProperty;
  // Reset margins by default
  margin?: MarginProperty;
  marginX?: MarginProperty;
  marginY?: MarginProperty;
  marginTop?: MarginProperty;
  marginBottom?: MarginProperty;
  marginRight?: MarginProperty;
  marginLeft?: MarginProperty;
  padding?: PaddingProperty;
  paddingX?: PaddingProperty;
  paddingY?: PaddingProperty;
  paddingTop?: PaddingProperty;
  paddingBottom?: PaddingProperty;
  paddingRight?: PaddingProperty;
  paddingLeft?: PaddingProperty;
  color?: string;
  backgroundColor?: string;
  backgroundOpacity?: number | string;
  borderRadius?: number;
  width?: number | string;
  minHeight?: number | string;
  height?: number | string;
  maxWidth?: number;
  zIndex?: number;
  boxShadow?: string;
  css?: Interpolation;
}

const applySpacing = (spacing: number[] = [], space: number | string) => {
  if (space === undefined) {
    return;
  }

  if (typeof space === "string") {
    return space;
  }

  if (spacing[space] !== undefined) {
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
  console.error(
    "Please use spacing scale for value smaller than " +
      spacing[spacing.length - 1]
  );

  return 0;
};

const View: React.SFC<Props> = ({
  element = "div",
  display = "flex",
  flexDirection = "column",
  flexWrap,
  alignItems,
  justifyContent,
  flexGrow = 0,
  flexShrink = 0,
  flexBasis = "auto",
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
  minHeight = 0,
  height,
  maxWidth,
  zIndex,
  boxShadow,
  textAlign = "inherit",
  css,
  ...props
}: Props) => (
  <Theme.Consumer>
    {({ spacing: s, colors, shadows, transitions, opacity }) => (
      <Base
        element={element}
        css={[
          {
            display,
            alignItems,
            justifyContent,
            flexDirection,
            flexWrap,
            flexGrow,
            flexShrink,
            flexBasis,
            position,
            height,
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
            minHeight,
            minWidth: 0,
            color: colors[color],
            backgroundColor: opacity[backgroundOpacity]
              ? opacify(colors[backgroundColor], opacity[backgroundOpacity])
              : colors[backgroundColor],
            borderRadius: s[borderRadius],
            boxShadow: shadows[boxShadow],
            transition: transitions.subtle,
            textAlign,
          },
          css,
        ]}
        {...props}
      />
    )}
  </Theme.Consumer>
);

View.displayName = "View";

export default View;
