import * as React from "react";
import { Transition } from "react-transition-group";

import ButtonMinimal from "../ButtonMinimal";
import Icon from "../Icon";
import Link from "../Link";
import Text from "../Text";
import Theme from "../Theme";
import View, { Props as ViewProps } from "../View";

export interface Props extends ViewProps {
  title: string;
  subtitle?: React.ReactNode;
  backgroundColor?: string;
  showMenuButton?: boolean;
  onMenuButtonClick?: ((evt: React.SyntheticEvent) => void);
  breadcrumbHref?: string;
  breadcrumbTitle?: string;
}

const PageHeader: React.SFC<Props> = ({
  children,
  padding,
  backgroundColor = "background",
  showMenuButton,
  onMenuButtonClick,
  title,
  subtitle,
  breadcrumbHref,
  breadcrumbTitle,
  ...props
}: Props) => (
  <Theme.Consumer>
    {({ spacing, animation, colors }) => (
      <View
        backgroundColor={backgroundColor}
        padding={padding}
        paddingRight={7}
        paddingY={5}
        minHeight="104px"
        boxShadow="crisp"
        display="flex"
        flexDirection="row"
        alignItems="center"
        css={{
          zIndex: 0,
        }}
        {...props}
      >
        <View
          display="flex"
          justifyContent="center"
          css={{
            minWidth: spacing[8],
          }}
        >
          <Transition
            in={showMenuButton}
            timeout={animation.subtle}
            unmountOnExit={true}
            mountOnEnter={true}
          >
            <ButtonMinimal
              marginX="auto"
              justifyContent="center"
              width={spacing[7]}
              css={{
                opacity: showMenuButton ? 1 : 0,
              }}
              paddingX={2}
              onClick={onMenuButtonClick}
            >
              <Icon
                name="Menu"
                size={5}
                color="subtle"
                marginX="auto"
                marginY={0}
              />
            </ButtonMinimal>
          </Transition>
        </View>
        <View>
          {breadcrumbTitle &&
            breadcrumbHref && (
              <Link href={breadcrumbHref}>
                <View flexDirection="row" alignItems="center">
                  <Icon
                    name="ChevronLeft"
                    color="subtle"
                    size={1}
                    marginRight={2}
                  />
                  <Text color="subtle">{breadcrumbTitle}</Text>
                </View>
              </Link>
            )}
          <Text element="h1" fontWeight="bold" fontSize={5}>
            {title}
          </Text>
          {subtitle}
        </View>
        <View alignItems="flex-end" flexGrow={1}>
          {children}
        </View>
      </View>
    )}
  </Theme.Consumer>
);

export default PageHeader;
