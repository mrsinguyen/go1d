import * as React from "react";
import * as SanitizeHTML from "sanitize-html";
import { Theme } from "../..";
import Base from "../Base";
import Text, { TextProps } from "../Text";

export interface ProseProps extends TextProps {
  HTML?: string;
}

function transformHeightFromFont(fontSize: number) {
  switch (fontSize) {
    case 3:
      return 2;
    case 2:
      return 1.7;
    case 1:
      return 1.5;
    default:
      return 2;
  }
}

function transformMarginBottomFromFont(fontSize: number) {
  switch (fontSize) {
    case 3:
      return 1;
    case 2:
      return 1.5;
    case 1:
      return 2;
    default:
      return 1;
  }
}

const Prose: React.SFC<ProseProps> = ({
  HTML,
  fontSize = 3,
  lineHeight = "paragraph",
  ...props
}: ProseProps) => (
  <Theme.Consumer>
    {({ colors, animation }) => (
      <Base
        css={{
          a: {
            "&:hover:after, &:focus:after": {
              content: "''",
              height: transformHeightFromFont(fontSize),
              background: colors.accent,
              display: "block",
              width: "100%",
              position: "absolute",
              bottom: 0,
              marginBottom: transformMarginBottomFromFont(fontSize),
            },
            "&:active:after": {
              background: colors.contrast,
            },
          },
        }}
      >
        <Text
          fontSize={fontSize}
          lineHeight={lineHeight}
          css={{
            a: {
              display: "inline-block",
              position: "relative",
              color: colors.accent,
              "&:hover, &:focus": {
                color: colors.default,
              },
            },
          }}
          dangerouslySetInnerHTML={{
            __html: SanitizeHTML(HTML, {
              allowedTags: SanitizeHTML.defaults.allowedTags.concat([
                "center",
                "h2",
                "img",
                "iframe",
              ]),
              allowedAttributes: {
                ...SanitizeHTML.defaults.allowedAttributes,
                img: ["alt", "src", "title"],
                iframe: ["src", "width", "height", "allow", "allowfullscreen", "frameborder"],
              },
            }),
          }}
          {...props}
        />
      </Base>
    )}
  </Theme.Consumer>
);

Prose.displayName = "Prose";

export default Prose;
