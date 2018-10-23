import * as React from "react";
import TextInput, { TextInputProps } from "../TextInput";

class TextArea extends React.Component<TextInputProps, any> {
  public static displayName = "TextArea";

  public static defaultProps = {
    multiline: 3,
  };

  public render() {
    return <TextInput {...this.props} />;
  }
}

export default TextArea;
