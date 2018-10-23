import * as React from "react";

import { get } from "lodash";
import TextInput, { TextInputProps } from "../TextInput";
import View from "../View";

export interface Props extends TextInputProps {
  suffixValue: string;
}

class InputSuffix extends React.Component<Props, any> {
  constructor(props) {
    super(props);
  }

  public render() {
    const { value, size = "md", suffixValue, ...props } = this.props;

    return (
<<<<<<< HEAD
      <View flexDirection="row">
        <TextInput
          value={value}
          borderRadius={0}
          borderRight={0}
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
          marginRight={-1}
          css={{
            borderTopRightRadius: "4px",
            borderBottomRightRadius: "4px",
          }}
        >
          {suffixValue}
        </View>
      </View>
=======
      <Theme.Consumer>
        {({ colors }) => (
          <View flexDirection="row">
            <TextInput
              value={this.state.value}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              flexGrow="1"
              borderRadius={0}
              borderRight={0}
              viewProps={{
                borderTopLeftRadius: "4px",
                borderBottomLeftRadius: "4px",
              }}
              {...props}
            />
            <View
              paddingX={get({ lg: 7, md: 5, sm: 5 }, size)}
              paddingY={get({ lg: 5, md: 3, sm: 3 }, size)}
              color="subtle"
              backgroundColor="soft"
              border={1}
              marginRight={-1}
              paddingTop={3}
              paddingBottom={3}
              css={{
                borderTopRightRadius: "4px",
                borderBottomRightRadius: "4px",
              }}
            >
              {suffixValue}
            </View>
          </View>
        )}
      </Theme.Consumer>
>>>>>>> GO1P-21757 Removing flexbasis
    );
  }
}

export default InputSuffix;
