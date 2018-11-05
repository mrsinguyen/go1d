import * as React from "react";
import Text from "../Text";
import View, { Props as ViewProps } from "../View";

export interface Props extends ViewProps {
  color?: string;
  children: React.ReactNode;
  textColor?: string;
  fontSize?: number;
}

const Pill: React.SFC<Props> = ({
  color = "faded",
  textColor = "default",
  children,
  fontSize,
  ...props
}: Props) => {
  return (
    <View
      display="inline-flex"
      backgroundColor={color}
      backgroundOpacity={color !== "faded" && "pill"}
      borderRadius={2}
      paddingX={3}
      paddingY={2}
      {...props}
    >
      <Text color={textColor} fontSize={fontSize}>
        {children}
      </Text>
    </View>
  );
};

Pill.displayName = "Pill";

export default Pill;
