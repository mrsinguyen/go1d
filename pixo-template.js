// default template
module.exports = ({
    name,
    viewBox,
    pathData
  }) => `import * as React from "react";
import Theme from "../Theme";

interface Props {
  size: number;
  color: string;
}

const ${name}: React.SFC<Props> = ({
  size,
  color = "currentcolor",
  ...props
}: Props) => (
  <svg 
    {...props}
    viewBox="${viewBox}"
    fill={color}
  >
    <path d="${pathData}" />
  </svg>
);

${name}.displayName = "${name}";

export default ${name};`