import { Interpolation } from "emotion";
import * as React from "react";
import Base from "../Base";
import Theme from "../Theme";

interface Props {
  element?: string;
  fontWeight?: number | string;
  fontFamily?: string;
  fontStyle?: string;
  lineHeight?: number | string;
  fontSize?: number;
  color?: string;
  css?: Interpolation[];
  // This allows any extra props to go through to ...props
  [key: string]: any;
}

const Text: React.SFC<Props> = ({
  element = "span",
  fontWeight,
  fontFamily,
  fontStyle,
  lineHeight,
  fontSize = 2,
  color,
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
            fontWeight: fontWeight && type.weight[fontWeight],
            lineHeight: lineHeight && type.leading[lineHeight],
            transition: transitions.subtle,
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
