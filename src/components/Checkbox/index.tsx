import * as React from "react";
import safeInvoke from "../../utils/safeInvoke";
import Base from "../Base";
import Icon from "../Icon";
import Text, { TextProps } from "../Text";
import Theme from "../Theme";
import View from "../View";

export interface CheckboxProps extends TextProps {
  id?: string;
  name: string;
  value?: boolean;
  disabled?: boolean;
}

class Checkbox extends React.Component<CheckboxProps, any> {
  constructor(props) {
    super(props);

    this.state = {
      RandomID: `RadioInput_${Math.random()}`,
      Selected: typeof props.value !== "undefined" ? props.value : false,
    };
  }

  public handleOnChange = event => {
    const { Selected } = this.state;
    const { onChange, name, value } = this.props;
    const selected = value === undefined ? Selected : value;
    const NewValue = !selected;

    this.setState({
      Selected: NewValue,
    });

    safeInvoke(onChange, {
      target: {
        name,
        value: NewValue,
      },
    });
  };

  public render() {
    const { RandomID, Selected } = this.state;

    const {
      name,
      id = RandomID,
      value,
      RadioGroup,
      children,
      label,
      error, // Do not pass
      onChange, // Do not pass
      disabled = false,
      ...props
    } = this.props;

    const selected = value === undefined ? Selected : value;

    return (
      <Theme.Consumer>
        {({ spacing }) => (
          <React.Fragment>
            <View
              element="label"
              htmlFor={id}
              flexDirection="row"
              css={{
                cursor: "pointer",
              }}
            >
              <View
                borderColor={selected ? "accent" : "faded"}
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
                {selected && <Icon color="accent" name="Check" />}
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
              value={selected}
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
