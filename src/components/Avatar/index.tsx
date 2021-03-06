import * as React from "react";
import Icon from "../Icon";
import Text from "../Text";
import Theme from "../Theme";
import View, { ViewProps } from "../View";

export interface AvatarProps extends ViewProps {
  fullName?: string;
  size?: number | number[];
  scaleSize?: number;
  src?: string;
  iconName?: string;
  avatarType?: "circle" | "square";
}

const Avatar: React.SFC<AvatarProps> = ({
  src,
  fullName,
  size = 6,
  scaleSize = 1,
  iconName = "User",
  avatarType = "circle",
  ...props
}: AvatarProps) => {
  const names = `${fullName}`.split(" ");
  const displayName = `${names[0].charAt(0)}${
    names.length > 1 ? names[names.length - 1].charAt(0) : ""
  }`;

  const constrainSize = Size => {
    let constrained = Math.abs(Math.trunc(Size)) || 6;

    if (constrained > 6) {
      constrained = 6;
    }

    return constrained + 2;
  };

  const getBreakPointSizeStyles = (breakPoints, typeScale) =>
    Object.keys(breakPoints).reduce((acc, bpKey, Index) => {
      const SizeKey = size[Index]
        ? constrainSize(size[Index])
        : constrainSize(size);
      const Size =
        scaleSize *
        (typeScale.scale[bpKey][SizeKey] || typeScale.scale[bpKey][1]);

      return {
        ...acc,
        [breakPoints[bpKey]]: {
          width: Size,
          height: Size,
        },
      };
    }, {});

  const constrainText = fontSize =>
    constrainSize(size) <= 3 ? 1 : fontSize - 2;

  const constrainIcon = iconSize =>
    constrainSize(iconSize) <= 2 ? 1 : constrainSize(iconSize) - 3;

  return (
    <Theme.Consumer>
      {({ spacing, type, breakpoints }) => (
        <View
          css={{
            verticalAlign: "middle",
            borderRadius: "50%",
            textAlign: "center",
            position: "relative",
            ...getBreakPointSizeStyles(breakpoints, type),
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
              fontSize={
                Array.isArray(size)
                  ? size.map(constrainText)
                  : constrainText(size)
              }
            >
              {displayName}
            </Text>
          ) : (
            <View alignItems="center">
              <Icon
                name={iconName}
                size={
                  Array.isArray(size)
                    ? size.map(constrainIcon)
                    : constrainIcon(size)
                }
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
                borderRadius: `${avatarType === "square" ? 3 : "50%"}`,
                ...getBreakPointSizeStyles(breakpoints, type),
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
