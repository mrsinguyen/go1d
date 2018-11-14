import { get } from "lodash";
import * as React from "react";
import Icon from "../Icon/index";
import Text from "../Text";
import View, { ViewProps } from "../View";

export interface FeaturedTagProps extends ViewProps {
  size?: "lg" | "md" | "sm";
  color?: string;
  iconColor?: string;
  backgroundColor?: string;
  iconName?: string;
  onClick?: ((evt: React.SyntheticEvent) => void);
}

const FeaturedTag: React.SFC<FeaturedTagProps> = ({
  size = "md",
  color = "subtle",
  backgroundColor = "background",
  iconName,
  children,
  onClick,
  iconColor = color,
  type = "button",
  ...props
}: FeaturedTagProps) => (
  <View
    flexDirection="row"
    alignItems="center"
    justifyContent="center"
    height={75}
    paddingX={get({ lg: 6, md: 5, sm: 3 }, size)}
    backgroundColor={backgroundColor}
    color={color}
    borderRadius={2}
    onClick={onClick}
    type={type}
    width={get({ lg: 256, md: 256, sm: 175 }, size)}
    {...props}
  >
    {iconName && (
      <Icon
        name={iconName}
        size={get({ lg: 5, md: 4, sm: 3 }, size)}
        marginRight={children && get({ lg: 6, md: 4, sm: 3 }, size)}
        color={iconColor}
      />
    )}
    <Text
      lineHeight="ui"
      fontWeight={"semibold"}
      fontSize={get({ lg: 3, md: 3, sm: 2 }, size)}
      color="inherit"
      css={{
        textAlign: "center",
      }}
    >
      {children}
    </Text>
  </View>
);

FeaturedTag.displayName = "FeaturedTag";

export default FeaturedTag;
