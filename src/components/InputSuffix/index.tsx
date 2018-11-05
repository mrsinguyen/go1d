import * as React from "react";

import { get } from "lodash";
import TextInput, { TextInputProps } from "../TextInput";
import View from "../View";

export interface Props extends TextInputProps {
  suffixValue: React.ReactNode;
}

class InputSuffix extends React.Component<Props, any> {
  constructor(props) {
    super(props);
  }

  public render() {
    const { value, size = "md", suffixValue, ...props } = this.props;

    return (
      <View flexDirection="row">
        <TextInput
          value={value}
          borderRadius={0}
          viewCss={{
            borderTopLeftRadius: "4px",
            borderBottomLeftRadius: "4px",
            borderRight: "0",
            flexGrow: 1,
          }}
          size={size}
          {...props}
        />
        <View
          paddingX={get({ lg: 7, md: 5, sm: 5 }, size)}
          paddingY={get({ lg: 5, md: 3, sm: 1 }, size)}
          color="subtle"
          backgroundColor="soft"
          border={1}
          borderColor="faded"
          marginRight={-1}
          css={{
            borderTopRightRadius: "4px",
            borderBottomRightRadius: "4px",
          }}
        >
          {suffixValue}
        </View>
      </View>
    );
  }
}

export default InputSuffix;
