import * as React from "react";
import safeInvoke from "../../utils/safeInvoke";
import RadioInput from "../RadioInput";
import { RadioInputProps } from "../RadioInput";
import View, { ViewProps } from "../View";

export interface RadioGroupProps extends ViewProps {
  id?: string;
  name: string;
  value?: string;
  key?: string;
  disabled?: boolean;
  options: RadioInputProps[];
}

class RadioGroup extends React.Component<RadioGroupProps, any> {
  constructor(props) {
    super(props);

    this.state = {
      activeSelect: props.defaultValue || props.value || null,
    };
  }

  public onChange = event => {
    const { onChange } = this.props;
    safeInvoke(onChange, event);
    this.setState({
      activeSelect: event.target.value,
    });
  };

  public render() {
    const {
      options,
      onChange, // Do not pass down
      name,
      disabled,
      error, // Do not pass down
      form, // Do not pass down
      ...props
    } = this.props;

    const { activeSelect } = this.state;

    return (
      <View {...props}>
        {options.map(Option => {
          return (
            <View
              paddingY={2}
              key={`RadioInput__${Option.value}__${Option.label}`}
            >
              <RadioInput
                onChange={this.onChange}
                name={name}
                disabled={disabled}
                selected={Option.value === activeSelect}
                {...Option}
              />
            </View>
          );
        })}
      </View>
    );
  }
}

export default RadioGroup;
