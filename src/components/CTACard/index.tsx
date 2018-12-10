import * as React from "react";
import Prose from "../Prose";
import Text from "../Text";
import Theme from "../Theme";
import View, { ViewProps } from "../View";

export interface CTACardProps extends ViewProps {
  iconImage?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  button?: React.ReactNode;
  children?: React.ReactNode;
}

const CTACard: React.SFC<CTACardProps> = ({
  iconImage,
  title,
  subtitle,
  description,
  button,
  children,
  backgroundColor = "background",
  ...props
}: CTACardProps) => (
  <Theme.Consumer>
    {({ breakpoints, spacing }) => (
      <View
        boxShadow="soft"
        borderRadius={3}
        backgroundColor={backgroundColor}
        maxWidth={385}
        width="100%"
        flexDirection="column"
        {...props}
      >
        <View
          paddingY={6}
          paddingX={3}
          alignItems="center"
          justifyContent="center"
          minHeight={160}
        >
          {iconImage && (
            <View paddingBottom={5} element="img" width={60} src={iconImage} />
          )}
          {title && (
            <Text
              fontSize={4}
              css={{
                textAlign: "center",
              }}
            >
              {title}
            </Text>
          )}
        </View>
        {subtitle && (
          <View borderColor="faded" borderTop={1} paddingY={5}>
            <Text
              fontSize={4}
              css={{
                textAlign: "center",
              }}
            >
              {subtitle}
            </Text>
          </View>
        )}
        <View
          paddingTop={7}
          paddingX={6}
          minHeight={90}
          flexGrow={1}
          borderColor="faded"
          borderTop={1}
        >
          {description && <Prose HTML={description} />}
          {children}
        </View>
        <View
          paddingY={6}
          paddingX={7}
          css={{
            [breakpoints.sm]: {
              paddingLeft: spacing[6],
              paddingRight: spacing[6],
            },
          }}
        >
          {button}
        </View>
      </View>
    )}
  </Theme.Consumer>
);

export default CTACard;
