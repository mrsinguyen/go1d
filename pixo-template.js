// default template
module.exports = ({
    name,
    viewBox,
    pathData
  }) => `import * as React from "react";

interface Props {
  size: number;
  color: string;
}

const ${name}: React.SFC<Props> = ({
  size = 24,
  color = "currentcolor",
  ...props
}: Props) => (
  <svg {...props} viewBox="${viewBox}" width={size} height={size} fill={color}>
    <path d="${pathData}" />
  </svg>
);

${name}.displayName = "${name}";

export default ${name};`