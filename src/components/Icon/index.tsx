import * as React from "react";
import Theme from "../Theme";
import View, { Props as ViewProps } from "../View";

import * as Icons from "../Icons";

interface Props extends ViewProps {
  name: string;
  color?: string;
  size?: number;
}

const Icon: React.SFC<Props> = ({ name, size, ...props }: Props) => {
  const IconComponent = Icons[name];
  if (!IconComponent) {
    return null;
  }

  return (
    <Theme.Consumer>
      {({ type, breakpoints }) => (
        <View
          element={IconComponent}
          {...props}
          css={[
            {
              ...Object.keys(breakpoints).reduce(
                (acc, bpKey) => ({
                  ...acc,
                  [breakpoints[bpKey]]: {
                    width: type.scale[bpKey][size] || "1em",
                    height: type.scale[bpKey][size] || "1em",
                  },
                }),
                {}
              ),
            },
          ]}
        />
      )}
    </Theme.Consumer>
  );
};

Icon.displayName = "Icon";

export default Icon;
