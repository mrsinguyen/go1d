import * as React from "react";
import Theme from "../Theme";
import View from "../View";

import * as Icons from "../Icons";

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

  const renderComponent = componentProps => <Component {...componentProps} />;

  return <View element={renderComponent} {...props} />;
};

Icon.displayName = "Icon";

export default Icon;
