import * as React from "react";

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

const PageTitle: React.SFC<Props> = ({
  children,
  padding,
  showMenuButton,
  onMenuButtonClick,
  title,
  ...props
}: Props) => (
  <Theme.Consumer>
    {({}) => (
      <View
        padding={padding}
        paddingRight={8}
        paddingY={5}
        display="flex"
        flexDirection="row"
        alignItems="center"
        {...props}
      >
        <Text element="h1" fontWeight="semibold" fontSize={5}>
          {title}
        </Text>
      </View>
    )}
  </Theme.Consumer>
);

export default PageTitle;
