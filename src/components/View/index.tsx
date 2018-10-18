import {
  FlexDirectionProperty,
  FlexWrapProperty,
  Globals,
  OverflowProperty,
  PositionProperty,
} from "csstype";
import { Interpolation } from "emotion";
import * as React from "react";
import { opacify } from "../../foundations";
import applySpacing from "../../utils/applySpacing";
import Base, { Props as BaseProps } from "../Base";
import Theme, { DarkMode, LightMode } from "../Theme";

type MarginProperty = Globals | "auto" | number | null;
type PaddingProperty = Globals | number;

export interface Props extends BaseProps {
  element?: string | React.ComponentType;
  mode?: "light" | "dark";
  display?: string;
  flexDirection?: FlexDirectionProperty;
  flexWrap?: FlexWrapProperty;
  alignItems?: string;
  justifyContent?: string;
  flexGrow?: number;
  flexShrink?: number;
  flexBasis?: number | string;
  position?: PositionProperty;
  overflow?: OverflowProperty;
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
  maxWidth?: number | string;
  zIndex?: number;
  boxShadow?: string;
  borderColor?: string;
  border?: number;
  borderTop?: number;
  borderRight?: number;
  borderBottom?: number;
  borderLeft?: number;
  transition?: string;
  css?: Interpolation;
}

const modeComponents = {
  light: LightMode,
  dark: DarkMode,
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
  overflow,
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
  borderColor,
  border = 0,
  borderTop = border,
  borderRight = border,
  borderBottom = border,
  borderLeft = border,
  color = "inherit",
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
  transition = "subtle",
  mode,
  css,
  ...props
}: Props) => {
  const Wrapper = mode ? modeComponents[mode] : React.Fragment;
  return (
    <Wrapper>
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
                overflow,
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
                color: colors[color] || color,
                backgroundColor: opacity[backgroundOpacity]
                  ? opacify(colors[backgroundColor], opacity[backgroundOpacity])
                  : colors[backgroundColor],
                borderRadius: s[borderRadius],
                borderStyle: "solid",
                borderTopWidth: borderTop,
                borderRightWidth: borderRight,
                borderBottomWidth: borderBottom,
                borderLeftWidth: borderLeft,
                borderColor: colors[borderColor],
                boxShadow: shadows[boxShadow],
                transition: transitions[transition],
                textAlign,
              },
              css,
            ]}
            {...props}
          />
        )}
      </Theme.Consumer>
    </Wrapper>
  );
};

View.displayName = "View";

export default View;
