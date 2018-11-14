import * as React from "react";
import Prose from "../Prose";
import Text from "../Text";
import View, { ViewProps } from "../View";

export interface CTACardProps extends ViewProps {
  iconImage?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  buttonColour?: string;
}

const CTACard: React.SFC<CTACardProps> = ({
  iconImage,
  title,
  subtitle,
  description,
  buttonText,
  buttonColour = "",
  backgroundColor = "background",
  ...props
}: CTACardProps) => (
  <View
    boxShadow="soft"
    borderRadius={3}
    backgroundColor={backgroundColor}
    maxWidth={385}
  >
    <View padding={4}>
      {iconImage && <img width={60} src={iconImage} />}
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
    <View borderColor="faded" borderBottom={1} borderTop={1} paddingY={5}>
      {subtitle && (
        <Text
          fontSize={4}
          css={{
            textAlign: "center",
          }}
        >
          {subtitle}
        </Text>
      )}
    </View>
    <View>{description && <Prose HTML={description} />}</View>
  </View>
);

export default CTACard;
