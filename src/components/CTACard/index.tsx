import * as React from "react";
import ButtonFilled from "../ButtonFilled";
import Prose from "../Prose";
import Text from "../Text";
import View, { ViewProps } from "../View";

export interface CTACardProps extends ViewProps {
  iconImage?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  buttonColor?: string;
  onActionClick?: ((evt: React.SyntheticEvent) => void);
}

const CTACard: React.SFC<CTACardProps> = ({
  iconImage,
  title,
  subtitle,
  description,
  buttonText,
  buttonColor = "background",
  backgroundColor = "background",
  onActionClick,
  ...props
}: CTACardProps) => (
  <View
    boxShadow="soft"
    borderRadius={3}
    backgroundColor={backgroundColor}
    maxWidth={385}
    width="100%"
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
    <View padding={7} borderColor="faded" borderTop={1}>
      {description && <Prose HTML={description} />}
    </View>
    <View paddingTop={7} paddingBottom={6} paddingX={7}>
      {buttonText && (
        <ButtonFilled size="lg" onClick={onActionClick} justifyContent="center" color={buttonColor}>
          {buttonText}
        </ButtonFilled>
      )}
    </View>
  </View>
);

export default CTACard;
