import * as React from "react";

import { get } from "lodash";
import { autobind } from "../../utils/decorators";
import safeInvoke from "../../utils/safeInvoke";
import TextInput, { TextInputProps } from "../TextInput";
import Theme from "../Theme";
import View from "../View";

export interface Props extends TextInputProps {
  suffixValue: string;
}

class InputSuffix extends React.Component<Props, any> {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
    };
  }

  @autobind
  public handleFocus(evt: React.FocusEvent<any>) {
    this.setState({
      isFocused: true,
    });
    safeInvoke(this.props.onFocus, evt);
  }

  @autobind
  public getBorderColor() {
    const { isFocused } = this.state;
    const { error } = this.props;

    if (error) {
      return "danger";
    }
    if (isFocused) {
      return "accent";
    }

    return "faded";
  }

  @autobind
  public handleBlur(evt: React.FocusEvent<any>) {
    this.setState({
      isFocused: false,
    });
    safeInvoke(this.props.onBlur, evt);
  }

  public render() {
    const {
      value,
      size = "md",
      suffixValue,
      onBlur,
      onFocus,
      ...props
    } = this.props;

    return (
      <Theme.Consumer>
        {({ colors }) => (
          <TextInput
            value={this.state.value}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            suffixNode={
              <View
                paddingX={get({ lg: 7, md: 5, sm: 5 }, size)}
                paddingY={get({ lg: 5, md: 3, sm: 3 }, size)}
                color="subtle"
                backgroundColor="soft"
                borderRadius={2}
                border={1}
                borderColor={this.getBorderColor()}
                borderTop={0}
                marginBottom={-1}
                marginRight={-1}
                // css={{
                //   marginRight: "-9px",
                // }}
              >
                {suffixValue}
              </View>
            }
            {...props}
          />
        )}
      </Theme.Consumer>
    );
  }
}

export default InputSuffix;
