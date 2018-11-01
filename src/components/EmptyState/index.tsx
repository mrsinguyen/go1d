import * as React from "react";

import ButtonFilled from "../ButtonFilled";
import Container from "../Container";
import Text from "../Text";
import View, { Props as ViewProps } from "../View";

export interface Props extends ViewProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  actionText?: string;
  action?: ((evt: React.SyntheticEvent) => void);
}

const EmptyState: React.SFC<Props> = ({
  title,
  description,
  actionText,
  action,
  children,
  ...props
}: Props) => (
  <Container>
    <View
      backgroundColor="background"
      alignItems="center"
      padding={7}
      borderRadius={2}
      {...props}
    >
      <Text element="h1" fontSize={4} fontWeight="600">
        {title}
      </Text>
      <View textAlign="center" marginY={6}>
        <Text color="subtle">{children || description}</Text>
      </View>
      {actionText &&
        action && (
          <ButtonFilled
            maxWidth={380}
            width="100%"
            justifyContent="center"
            onClick={action}
            size="lg"
            color="accent"
          >
            {actionText}
          </ButtonFilled>
        )}
    </View>
  </Container>
);

EmptyState.displayName = "Empty State";

export default EmptyState;
