import { DisplayProperty, TextTransformProperty } from "csstype";
import * as React from "react";
import {
  FontWeight,
  Leading,
  Tracking,
} from "../../foundations/foundation-types";
import Base, { Props as BaseProps } from "../Base";
import Theme from "../Theme";

export interface Props extends BaseProps {
  element?: string;
  display?: DisplayProperty | DisplayProperty[];
  fontWeight?: FontWeight;
  fontFamily?: string;
  fontStyle?: string | string[];
  lineHeight?: Leading;
  fontSize?: number;
  color?: string;
  textTransform?: TextTransformProperty | TextTransformProperty[];
  letterSpacing?: Tracking;
  css?: any;
}

const Text: React.SFC<Props> = ({
  element = "span",
  display,
  fontWeight,
  fontFamily,
  fontStyle,
  lineHeight = "ui",
  fontSize = 2,
  letterSpacing = "normal",
  color = "inherit",
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
            color: colors[color] || color,
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
            fontSize: [
              type.scale.sm[fontSize],
              type.scale.md[fontSize],
              type.scale.lg[fontSize],
            ],
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
