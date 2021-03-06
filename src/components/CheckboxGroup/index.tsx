import * as React from "react";
import safeInvoke from "../../utils/safeInvoke";
import Checkbox, { CheckboxProps } from "../Checkbox";
import View, { ViewProps } from "../View";

export interface CheckboxGroupProps extends ViewProps {
  id?: string;
  name: string;
  value?: string[];
  disabled?: boolean;
  error?: boolean;
  options: CheckboxProps[];
}

class CheckboxGroup extends React.Component<CheckboxGroupProps, any> {
  constructor(props) {
    super(props);

    this.state = {
      values: props.value || [],
    };
  }

  public handleOnChange = value => event => {
    const { onChange, name } = this.props;
    const { values } = this.state;
    let newValues = Object.assign([], values);
    if (event.target.value) {
      newValues.push(value);
    } else {
      newValues = values.filter(valueInState => value !== valueInState);
    }
    this.setState({
      values: newValues,
    });
    safeInvoke(onChange, {
      target: {
        name,
        value: newValues,
      },
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

    const { values } = this.state;

    return (
      <View {...props}>
        {options.map(({ value, ...Option }) => {
          return (
            <View paddingY={2} key={`CheckboxInput__${value}__${Option.label}`}>
              <Checkbox
                onChange={this.handleOnChange(value)}
                name={name}
                disabled={disabled}
                error={error}
                value={values.some(itemValue => itemValue === value)}
                {...Option}
              />
            </View>
          );
        })}
      </View>
    );
  }
}

export default CheckboxGroup;
