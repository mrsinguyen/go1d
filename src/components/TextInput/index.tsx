import * as React from "react";
import Icon from "../Icon";
import Text from "../Text";
import View from "../View";

const sizes = {
  sm: 1,
  md: 2,
  lg: 3,
};

const TextInput: React.SFC<any> = ({ size = "md", ...props }: any) => {
  return (
    <View
      borderRadius={2}
      boxShadow="soft"
      backgroundColor="background"
      css={{ border: "1px solid", borderColor: "transparent" }}
      flexDirection="row"
      alignItems="center"
    >
      <Icon
        name="Search"
        marginRight={size === "lg" ? 5 : size === "sm" ? 1 : 3}
        size={sizes[size]}
        color="subtle"
      />
      <Text
        element="input"
        lineHeight="ui"
        fontSize={sizes[size]}
        color="inherit"
        css={{ flexGrow: 1 }}
        {...props}
      />
    </View>
  );
};

TextInput.displayName = "TextInput";

export default TextInput;
