import * as React from "react";

import * as Icons from "../../icons";

interface Props {
  name: string;
  color?: string;
  size?: string | number;
}

const Icon: React.SFC<Props> = ({ name, ...props }: Props) => {
  const Component = Icons[name];
  if (!Component) {
    return null;
  }
  return <Component {...props} />;
};

Icon.displayName = "Icon";

export default Icon;
