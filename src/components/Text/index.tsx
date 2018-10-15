import { TextTransformProperty } from "csstype";
import { Interpolation } from "emotion";
import * as React from "react";
import Base, { Props as BaseProps } from "../Base";
import Theme from "../Theme";

export interface Props extends BaseProps {
  element?: string;
  display?: string;
  fontWeight?: number | string;
  fontFamily?: string;
  fontStyle?: string;
  lineHeight?: number | string;
  fontSize?: number;
  color?: string;
  textTransform?: TextTransformProperty;
  letterSpacing?: string;
  css?: Interpolation;
}

const Text: React.SFC<Props> = ({
  element = "span",
  display,
  fontWeight,
  fontFamily,
  fontStyle,
  lineHeight,
  fontSize = 2,
  letterSpacing = "normal",
  color,
  textAlign,
  textTransform,
  css,
  ...props
}: Props) => (
  <Theme.Consumer>
    {({ colors, type, breakpoints, transitions }) => (
      <Base
        element={element}
        css={[
          {
            color: color === undefined ? colors.black : colors[color] || color,
            fontFamily: fontFamily
              ? type.family[fontFamily]
              : type.family.sansSerif,
            fontStyle,
            display,
            textAlign,
            textTransform,
            fontWeight: fontWeight && type.weight[fontWeight],
            lineHeight: lineHeight && type.leading[lineHeight],
            transition: transitions.subtle,
            letterSpacing: type.tracking[letterSpacing],
            whiteSpace: "pre-wrap",
            wordWrap: "break-word",
            ...Object.keys(breakpoints).reduce(
              (acc, bpKey) => ({
                ...acc,
                [breakpoints[bpKey]]: {
                  fontSize: type.scale[bpKey][fontSize],
                },
              }),
              {}
            ),
          },
          css,
        ]}
        {...props}
      />
    )}
  </Theme.Consumer>
);

Text.displayName = "Text";

export default Text;
