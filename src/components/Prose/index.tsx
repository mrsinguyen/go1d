import * as React from "react";
import * as SanitizeHTML from "sanitize-html";
import Base from "../Base";
import Text, { TextProps } from "../Text";
import Theme from "../Theme";
import { getStyles } from "./style";

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
    {foundations => (
      <Base
        css={{
          a: {
            "&:hover:after, &:focus:after": {
              content: "''",
              height: Array.isArray(fontSize)
                ? fontSize.map(transformHeightFromFont)
                : transformHeightFromFont(fontSize),
              background: foundations.colors.accent,
              width: "100%",
              position: "relative",
              bottom: 0,
              left: 0,
              right: 0,
              marginBottom: Array.isArray(fontSize)
                ? fontSize.map(transformMarginBottomFromFont)
                : transformMarginBottomFromFont(fontSize),
            },
            "&:active:after": {
              background: foundations.colors.contrast,
            },
          },
        }}
      >
        <Text
          fontSize={fontSize}
          lineHeight={lineHeight}
          css={getStyles(foundations)}
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
                iframe: [
                  "src",
                  "width",
                  "height",
                  "allow",
                  "allowfullscreen",
                  "frameborder",
                ],
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
