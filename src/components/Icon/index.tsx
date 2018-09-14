import * as React from "react";
import Theme from "../Theme";
import View from "../View";

import * as Icons from "../Icons";

interface Props {
  name: string;
  color?: string;
  size?: number;
}

const Icon: React.SFC<Props> = ({ name, size, ...props }: Props) => {
  const Component = Icons[name];
  if (!Component) {
    return null;
  }

  const renderComponent = componentProps => <Component {...componentProps} />;

  return (
    <Theme.Consumer>
      {({ type, breakpoints }) => (
        <View
          element={renderComponent}
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
