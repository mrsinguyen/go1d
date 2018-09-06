import * as React from "react";
import Text from "../Text";
import View from "../View";

interface Props {
  color?: string;
  children: JSX.Element[] | JSX.Element | string;
  [key: string]: any,
}

const Pill: React.SFC<Props> = ({ color = "faded", children, ...props }: Props) => {
  return (
    <View
      display="inline-flex"
      backgroundColor={color}
      backgroundOpacity={color !== "faded" && "pill"}
      borderRadius={1}
      paddingX={2}
      paddingY={1}
      {...props}
    >
      <Text size={1}>{children}</Text>
    </View>
  );
};

Pill.displayName = "Pill";

export default Pill;
