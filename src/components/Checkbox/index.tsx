import * as React from "react";
import safeInvoke from "../../utils/safeInvoke";
import Base from "../Base";
import Icon from "../Icon";
import Text, { TextProps } from "../Text";
import Theme from "../Theme";
import View from "../View";

export interface CheckboxProps extends TextProps {
  id?: string;
  name?: string;
  label?: string;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
}

class Checkbox extends React.Component<CheckboxProps, any> {
  constructor(props) {
    super(props);
    this.state = {
      randomId: `RadioInput_${Math.random()}`,
      checkedState:
        typeof props.checked !== "undefined" ? props.checked : false,
    };
  }

  public handleOnChange = event => {
    const { checkedState } = this.state;
    const { onChange, name, value, checked } = this.props;
    const currentCheckedState = checked === undefined ? checkedState : checked; // let parent control check state
    const newValue = !currentCheckedState;
    this.setState({
      checkedState: newValue,
    });

    safeInvoke(onChange, {
      target: {
        name,
        value: newValue ? value : "",
        checked: newValue,
      },
    });
  };

  public render() {
    const { randomId, checkedState } = this.state;

    const {
      name,
      id = randomId,
      value,
      children,
      label,
      checked,
      error, // Do not pass
      onChange, // Do not pass
      marginX,
      marginY,
      marginTop,
      marginBottom,
      disabled = false,
      ...props
    } = this.props;

    const currentCheckedState = checked === undefined ? checkedState : checked; // let parent control check state
    return (
      <Theme.Consumer>
        {({ spacing }) => (
          <React.Fragment>
            <View
              element="label"
              htmlFor={id}
              flexDirection="row"
              marginX={marginX}
              marginY={marginY}
              marginTop={marginTop}
              marginBottom={marginBottom}
              css={{
                cursor: "pointer",
              }}
              {...props}
            >
              <View
                borderColor={currentCheckedState ? "accent" : "faded"}
                backgroundColor="background"
                borderRadius={2}
                alignItems="center"
                justifyContent="center"
                opacity={disabled ? "disabled" : null}
                css={{
                  height: 24,
                  width: 24,
                  borderWidth: 1,
                }}
              >
                {currentCheckedState && <Icon color="accent" name="Check" />}
              </View>
              <Text
                color="contrast"
                css={{
                  paddingLeft: spacing[3],
                  alignSelf: "center",
                }}
              >
                {label}
                {children}
              </Text>
            </View>
            <Base
              element="input"
              id={id}
              onChange={this.handleOnChange}
              type="checkbox"
              name={name}
              disabled={disabled}
              value={value}
              checked={currentCheckedState}
              css={{
                position: "absolute",
                left: -9999,
              }}
              {...props}
            />
          </React.Fragment>
        )}
      </Theme.Consumer>
    );
  }
}

export default Checkbox;
