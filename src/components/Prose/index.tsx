import * as React from "react";
import * as SanitizeHTML from "sanitize-html";
import Text, { Props as TextProps } from "../Text";

export interface Props extends TextProps {
  HTML?: string;
}

const Prose: React.SFC<Props> = ({ HTML, ...props }: Props) => (
  <Text dangerouslySetInnerHTML={{ __html: SanitizeHTML(HTML) }} {...props} />
);

Prose.displayName = "Prose";

export default Prose;
