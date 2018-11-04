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
  position?: PositionProperty | PositionProperty[];
  overflow?: OverflowProperty;
  opacity?: number | string;
  // Reset margins by default
  margin?: MarginProperty | MarginProperty[];
  marginX?: MarginProperty | MarginProperty[];
  marginY?: MarginProperty | MarginProperty[];
  marginTop?: MarginProperty | MarginProperty[];
  marginBottom?: MarginProperty | MarginProperty[];
  marginRight?: MarginProperty | MarginProperty[];
  marginLeft?: MarginProperty | MarginProperty[];
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

function getWidth(n) {
  if (Array.isArray(n)) {
    return n.map(getWidth);
  }

  return isNaN(n) ? n : n > 1 ? n : n * 100 + "%";
}

const View: React.SFC<Props> = ({
  element = "div",
  mode,
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
  opacity,
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
  color = mode ? "default" : "inherit",
  backgroundColor = mode && "background",
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
  css,
  ...props
}: Props) => {
  const Wrapper = mode ? modeComponents[mode] : React.Fragment;
  return (
    <Wrapper>
      <Theme.Consumer>
        {({ spacing: s, colors, shadows, transitions, opacities }) => (
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
                flexBasis: getWidth(flexBasis),
                flexShrink,
                position,
                overflow,
                opacity: opacities[opacity],
                height,
                width: getWidth(width),
                maxWidth: getWidth(maxWidth),
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
                backgroundColor: opacities[backgroundOpacity]
                  ? opacify(
                      colors[backgroundColor],
                      opacities[backgroundOpacity]
                    )
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
