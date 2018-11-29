import * as React from "react";
import Icon from "../Icon";
import Text from "../Text";
import Theme from "../Theme";
import View, { ViewProps } from "../View";

export interface AvatarProps extends ViewProps {
  fullName?: string;
  size?: number;
  scaleSize?: number;
  src?: string;
  iconName?: string;
}

const Avatar: React.SFC<AvatarProps> = ({
  src,
  fullName,
  size = 6,
  scaleSize = 1,
  iconName = "User",
  ...props
}: AvatarProps) => {
  const names = `${fullName}`.split(" ");
  const displayName = `${names[0].charAt(0)}${
    names.length > 1 ? names[names.length - 1].charAt(0) : ""
  }`;

  let constrainedSize = Math.abs(Math.trunc(size)) || 6;

  constrainedSize = constrainedSize;
  if (constrainedSize > 6) {
    constrainedSize = 6;
  }
  const logoSize = constrainedSize + 2;

  return (
    <Theme.Consumer>
      {({ spacing, type, breakpoints }) => (
        <View
          css={{
            verticalAlign: "middle",
            borderRadius: "50%",
            textAlign: "center",
            position: "relative",
            ...Object.keys(breakpoints).reduce(
              (acc, bpKey) => ({
                ...acc,
                [breakpoints[bpKey]]: {
                  width:
                    scaleSize *
                    (type.scale[bpKey][logoSize] || type.scale[bpKey][1]),
                  height:
                    scaleSize *
                    (type.scale[bpKey][logoSize] || type.scale[bpKey][1]),
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
              color={props.color || "subtle"}
              css={{ textTransform: "uppercase" }}
              fontSize={constrainedSize <= 2 ? 1 : constrainedSize - 1}
            >
              {displayName}
            </Text>
          ) : (
            <View alignItems="center">
              <Icon
                name={iconName}
                size={constrainedSize <= 2 ? 1 : constrainedSize - 1}
                color="subtle"
              />
            </View>
          )}

          {src && (
            <View
              position="absolute"
              css={{
                top: 0,
                left: 0,
                verticalAlign: "middle",
                backgroundSize: "cover",
                backgroundImage: `url('${src}')`,
                backgroundPosition: "center",
                borderRadius: "50%",
                ...Object.keys(breakpoints).reduce(
                  (acc, bpKey) => ({
                    ...acc,
                    [breakpoints[bpKey]]: {
                      width:
                        scaleSize *
                        (type.scale[bpKey][logoSize] || type.scale[bpKey][1]),
                      height:
                        scaleSize *
                        (type.scale[bpKey][logoSize] || type.scale[bpKey][1]),
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
