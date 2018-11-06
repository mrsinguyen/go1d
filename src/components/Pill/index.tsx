import * as React from "react";
import Text from "../Text";
import View, { ViewProps } from "../View";

export interface PillProps extends ViewProps {
  color?: string;
  textColor?: string;
  fontSize?: number;
}

const Pill: React.SFC<PillProps> = ({
  color = "faded",
  textColor = "default",
  children,
  fontSize,
  ...props
}: PillProps) => {
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
