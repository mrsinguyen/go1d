import * as React from "react";

import { get } from "lodash";
import { autobind } from "../../utils/decorators";
import safeInvoke from "../../utils/safeInvoke";
import TextInput, { TextInputProps } from "../TextInput";
import Theme from "../Theme";
import View from "../View";

interface Props extends TextInputProps {
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
      isFocused = this.state.isFocused,
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
                css={{
                  marginBottom: "-1px",
                  marginRight: "-9px",
                  color: "subtle",
                  backgroundColor: colors.soft,
                  borderRadius: "4px",
                  border: "1px solid",
                  borderTop: 0,
                  borderColor: isFocused ? colors.accent : colors.soft,
                }}
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
