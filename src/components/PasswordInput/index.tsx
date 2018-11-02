import * as React from "react";
import ButtonMinimal from "../ButtonMinimal";
import Text from "../Text";
import TextInput, { TextInputProps } from "../TextInput";

interface PasswordInput extends TextInputProps {
  toggleableDisplay?: boolean;
}

class PasswordInput extends React.Component<TextInputProps, any> {
  public static displayName = "PasswordInput";
  public static defaultProps = {
    toggleableDisplay: true,
  };

  public state = {
    MaskedInput: true,
  };

  public toggleMaskState = () =>
    this.setState(prevState => ({
      MaskedInput: !prevState.MaskedInput,
    }));

  public render() {
    const { toggleableDisplay, ...props } = this.props;
    const { MaskedInput } = this.state;

    return (
      <TextInput
        type={MaskedInput ? "password" : "text"}
        suffixNode={
          toggleableDisplay && (
            <ButtonMinimal
              onClick={this.toggleMaskState}
              color="accent"
              data-testid="ToggleButton"
              backgroundColor="transparent"
            >
              <Text fontSize={1}>{MaskedInput ? "SHOW" : "HIDE"}</Text>
            </ButtonMinimal>
          )
        }
        viewCss={{
          paddingRight: 0,
        }}
        {...props}
      />
    );
  }
}

export default PasswordInput;
