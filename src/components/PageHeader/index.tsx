import * as React from "react";
import { Transition } from "react-transition-group";

import ButtonMinimal from "../ButtonMinimal";
import Icon from "../Icon";
import Text from "../Text";
import Theme from "../Theme";
import View, { Props as ViewProps } from "../View";

interface Props extends ViewProps {
  title: string;
  backgroundColor?: string;
  showMenuButton?: boolean;
  onMenuButtonClick?: ((evt: React.SyntheticEvent) => void);
}

const PageHeader: React.SFC<Props> = ({
  children,
  padding,
  backgroundColor = "background",
  showMenuButton,
  onMenuButtonClick,
  title,
  ...props
}: Props) => (
  <Theme.Consumer>
    {({ spacing, animation }) => (
      <View
        backgroundColor={backgroundColor}
        padding={padding}
        paddingRight={7}
        paddingLeft={3}
        paddingY={5}
        height="104px"
        boxShadow="strong"
        display="flex"
        flexDirection="row"
        alignItems="center"
        css={[
          {
            flexGrow: 1,
          },
        ]}
        {...props}
      >
        <View
          display="flex"
          justifyContent="center"
          marginRight={3}
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
              css={[
                {
                  opacity: showMenuButton ? 1 : 0,
                },
              ]}
              onClick={onMenuButtonClick}
            >
              <Icon name="Menu" size={5} color="subtle" />
            </ButtonMinimal>
          </Transition>
        </View>
        <View>
          <Text element="h1" fontWeight="bold" fontSize={5}>
            {title}
          </Text>
        </View>
        <View>{children}</View>
      </View>
    )}
  </Theme.Consumer>
);

export default PageHeader;
