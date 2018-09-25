import * as React from "react";
import { Transition } from "react-transition-group";
import Icon from "../Icon";
import Text from "../Text";
import Theme from "../Theme";
import View, { Props as ViewProps } from "../View";

interface Props extends ViewProps {
  collapsed?: boolean;
  active?: boolean;
  iconName: string;
  href: string;
  children: React.ReactNode | React.ReactNode[];
}

const MenuItem: React.SFC<Props> = ({
  collapsed = false,
  active = false,
  children,
  iconName,
  href,
  ...props
}: Props) => (
  <Theme.Consumer>
    {({ colors, spacing, animation }) => (
      <View
        flexDirection="row"
        alignItems="center"
        element="a"
        backgroundColor={active ? "highlight" : "contrast"}
        color={active ? "faded" : "subtle"}
        paddingY={4}
        paddingLeft={4}
        href={href}
        css={{
          "svg, span, div": {
            transition: "none",
          },
          "&:hover, &:focus": {
            color: colors.faded,
            backgroundColor: colors.default,
          },
        }}
        {...props}
      >
        <View
          color={colors.muted}
          marginLeft={3}
          marginRight={5}
          css={{
            transition: "none",
          }}
        >
          <Icon name={iconName} size={4} />
        </View>
        <Transition
          in={collapsed}
          timeout={animation.subtle}
          unmountOnExit={true}
          mountOnEnter={true}
        >
          <View marginLeft={1} alignItems="center">
            <Text
              fontWeight="normal"
              fontSize={2}
              css={{
                opacity: collapsed ? 1 : 0,
              }}
            >
              {children}
            </Text>
          </View>
        </Transition>
      </View>
    )}
  </Theme.Consumer>
);

MenuItem.displayName = "MenuItem";
export default MenuItem;
