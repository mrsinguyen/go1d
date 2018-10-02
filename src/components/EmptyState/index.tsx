import * as React from "react";

import ButtonFilled from "../ButtonFilled";
import Container from "../Container";
import Text from "../Text";
import Theme from "../Theme";
import View, { Props as ViewProps } from "../View";

interface Props extends ViewProps {
  title?: string;
  description?: string;
  actionText?: string;
  action?: ((evt: React.SyntheticEvent) => void);
}

const EmptyState: React.SFC<Props> = ({
  title,
  description,
  actionText,
  action,
  ...props
}: Props) => (
  <Theme.Consumer>
    {() => (
      <Container>
        <View
          backgroundColor="background"
          alignItems="center"
          padding={7}
          borderRadius={2}
        >
          <Text element="h1" fontSize={4} fontWeight="600">
            {title}
          </Text>
          <View textAlign="center" marginY={6}>
            <Text color="subtle">{description}</Text>
          </View>
          {actionText &&
            action && (
              <ButtonFilled
                maxWidth={380}
                width="100%"
                textAlign="center"
                onClick={action}
                size="lg"
                color="accent"
              >
                {actionText}
              </ButtonFilled>
            )}
        </View>
      </Container>
    )}
  </Theme.Consumer>
);

EmptyState.displayName = "Empty State";

export default EmptyState;
