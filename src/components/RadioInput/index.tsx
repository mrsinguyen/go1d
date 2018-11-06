import * as React from "react";
import { spacing } from "../../foundations";
import Base from "../Base";
import Text, { TextProps } from "../Text";
import View from "../View";

export interface RadioInputProps extends TextProps {
  id?: string;
  name: string;
  value: string;
  disabled?: boolean;
}

class RadioInput extends React.Component<RadioInputProps, any> {
  public state = {
    RandomID: `RadioInput_${Math.random()}`,
  };

  public render() {
    const { RandomID } = this.state;

    const {
      name,
      id = RandomID,
      value,
      RadioGroup,
      children,
      onChange,
      selected,
      label,
      disabled = false,
      ...props
    } = this.props;

    return (
      <React.Fragment>
        <View element="label" htmlFor={id} flexDirection="row">
          <View
            borderColor={selected ? "accent" : "faded"}
            backgroundColor="background"
            css={{
              borderRadius: "50%",
              height: 24,
              width: 24,
              padding: 5,
              borderWidth: 1,
            }}
          >
            {selected && (
              <View
                backgroundColor="accent"
                css={{
                  borderRadius: "50%",
                  height: "100%",
                  width: "100%",
                }}
              />
            )}
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
          onChange={onChange}
          type="radio"
          name={name}
          disabled={disabled}
          value={value}
          css={{
            position: "absolute",
            left: -9999,
          }}
          {...props}
        />
      </React.Fragment>
    );
  }
}

export default RadioInput;
