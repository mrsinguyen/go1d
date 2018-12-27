import {
  AlignItemsProperty,
  DisplayProperty,
  FlexDirectionProperty,
  FlexWrapProperty,
  Globals,
  JustifyContentProperty,
  OverflowProperty,
  PositionProperty,
} from "csstype";
import * as React from "react";
import { opacify } from "../../foundations";
import { Opacities, Shadows, ZIndex } from "../../foundations/foundation-types";
import Base, { BaseProps } from "../Base";
import Theme, { DarkMode, LightMode } from "../Theme";

type WidthProperty = Globals | "auto" | number | string | null;
type HeightProperty = Globals | "auto" | number | string | null;
type FlexBasisProperty = Globals | "auto" | number | string | null;

export interface ViewProps extends BaseProps {
  mode?: "light" | "dark";
  display?: DisplayProperty | DisplayProperty[];
  flexDirection?: FlexDirectionProperty | FlexDirectionProperty[];
  flexWrap?: FlexWrapProperty | FlexWrapProperty[];
  alignItems?: AlignItemsProperty | AlignItemsProperty[];
  justifyContent?: JustifyContentProperty | JustifyContentProperty[];
  flexGrow?: number | number[];
  flexShrink?: number | number[];
  flexBasis?: FlexBasisProperty | FlexBasisProperty[];
  position?: PositionProperty | PositionProperty[];
  overflow?: OverflowProperty | OverflowProperty[];
  opacity?: Opacities | "";
  color?: string;
  backgroundColor?: string;
  backgroundOpacity?: Opacities | "";
  borderRadius?: number;
  width?: WidthProperty | WidthProperty[];
  minHeight?: HeightProperty | HeightProperty[];
  height?: HeightProperty | HeightProperty[];
  maxWidth?: WidthProperty | WidthProperty[];
  zIndex?: ZIndex | number | "";
  boxShadow?: Shadows | "";
  borderColor?: string;
  border?: number | number[];
  borderTop?: number | number[];
  borderRight?: number | number[];
  borderBottom?: number | number[];
  borderLeft?: number | number[];
  transition?: string;
}

const modeComponents = {
  light: LightMode,
  dark: DarkMode,
};

function getWidth(n) {
  if (!n) {
    return null;
  }

  if (Array.isArray(n)) {
    return n.map(getWidth);
  }

  return isNaN(n) ? n : n > 1 ? n : n * 100 + "%";
}

const View: React.SFC<ViewProps> = ({
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
  maxWidth = "100%",
  zIndex,
  boxShadow,
  textAlign = "inherit",
  transition = "subtle",
  css,
  ...props
}: ViewProps) => {
  const Wrapper = mode ? modeComponents[mode] : React.Fragment;
  return (
    <Wrapper>
      <Theme.Consumer>
        {({
          spacing: s,
          colors,
          shadows,
          transitions,
          opacities,
          zIndex: zi,
        }) => (
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
                maxWidth: maxWidth ? getWidth(maxWidth) : "100%",
                zIndex: zi[zIndex] || zIndex,
                // fix flexbox bugs
                minHeight,
                minWidth: 0,
                color: colors[color] || color,
                backgroundColor:
                  opacities[backgroundOpacity] < 1
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
