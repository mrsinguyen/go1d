import * as React from "react";
import * as SanitizeHTML from "sanitize-html";
import Text, { TextProps } from "../Text";

export interface ProseProps extends TextProps {
  HTML?: string;
}

const Prose: React.SFC<ProseProps> = ({
  HTML,
  fontSize = 3,
  lineHeight = "paragraph",
  ...props
}: ProseProps) => (
  <Text
    fontSize={fontSize}
    lineHeight={lineHeight}
    dangerouslySetInnerHTML={{
      __html: SanitizeHTML(HTML, {
        allowedTags: SanitizeHTML.defaults.allowedTags.concat(["center"]),
      }),
    }}
    {...props}
  />
);

Prose.displayName = "Prose";

export default Prose;
