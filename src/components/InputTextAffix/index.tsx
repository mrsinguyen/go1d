import * as React from "react";
import Text from "../Text";
import View from "../View";

const sizeStyles = {
  lg: {
    height: 48,
    paddingX: 7,
    typeScale: 3,
  },
  md: {
    height: 40,
    paddingX: 4,
    typeScale: 2,
  },
  sm: {
    height: 32,
    paddingX: 4,
    typeScale: 1,
  },
};
export interface InputTextAffixProps {
  text: string;
  size?: "lg" | "md" | "sm";
}

const InputTextAffix = ({ text, size = "md" }: InputTextAffixProps) => {
  const { paddingX, typeScale } = sizeStyles[size];

  return (
    <View
      paddingX={paddingX}
      justifyContent="center"
      alignItems="center"
      color="subtle"
      backgroundColor="soft"
      border={1}
      borderColor="faded"
    >
      <Text fontWeight="semibold" fontSize={typeScale}>
        {text}
      </Text>
    </View>
  );
};

export default InputTextAffix;
