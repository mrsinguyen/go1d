const { getProps } = require('@svgr/core')

const reactDomTemplate = (code, config, state) => {
  const name = state.componentName.replace('Svg', '')
  const result = `import * as React from "react";
import { Props as ViewProps } from "../View";

interface Props extends ViewProps {
  name: string;
  color?: string;
  size?: number;
}

const ${name}: React.SFC<Props> = (props: Props) => (
  ${code}
);

${name}.displayName = "Icon${name}";

export default ${name};`

  return result
}

module.exports = reactDomTemplate
