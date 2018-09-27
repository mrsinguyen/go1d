import * as React from "react";
import Icon from "../Icon";
import Text from "../Text";
import Theme from "../Theme";
import View, { Props as ViewProps } from "../View";

interface Props extends ViewProps {
  fullName?: string;
  size?: number;
  src?: string;
}

const Avatar: React.SFC<Props> = ({ src, fullName, size = 8, ...props }) => {
  const names = `${fullName}`.split(" ");
  const displayName = `${names[0].charAt(0)}${
    names.length > 1 ? names[names.length - 1].charAt(0) : ""
  }`;

  return (
    <Theme.Consumer>
      {({ spacing, type, breakpoints }) => (
        <View
          css={{
            verticalAlign: "middle",
            borderRadius: "50%",
            textAlign: "center",
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
          }}
          position="relative"
          justifyContent="center"
          backgroundColor="contrast"
          {...props}
        >
          {fullName ? (
            <Text
              color="subtle"
              css={{ textTransform: "uppercase" }}
              fontSize={size <= 3 ? 1 : size - 3}
            >
              {displayName}
            </Text>
          ) : (
            <View alignItems="center">
              <Icon
                name="User"
                size={size <= 3 ? 1 : size - 3}
                color="subtle"
              />
            </View>
          )}

          {src && (
            <View
              position="absolute"
              css={{
                verticalAlign: "middle",
                backgroundSize: "cover",
                backgroundImage: `url('${src}')`,
                backgroundPosition: "center",
                borderRadius: "50%",
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
              }}
            />
          )}
        </View>
      )}
    </Theme.Consumer>
  );
};

Avatar.displayName = "Avatar";

export default Avatar;
