const { getProps } = require('@svgr/core')

const reactDomTemplate = (code, config, state) => {
  const name = state.componentName.replace('Svg', '')
  const result = `import * as React from "react";

const ${name}: React.SFC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
) => (
  ${code}
);

${name}.displayName = "Icon${name}";

export default ${name};`

  return result
}

module.exports = reactDomTemplate
