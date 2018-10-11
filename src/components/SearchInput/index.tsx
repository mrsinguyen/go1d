import * as React from "react";

import TextInput from "../TextInput";
import { Props as ViewProps } from "../View";

// if no onSubmit is provided, and onChange is defined, value state will be handled by parent component
interface Props extends ViewProps {
  onSubmit: ((
    search: string,
    event: React.SyntheticEvent<HTMLElement>
  ) => void);
  onChange: ((event: React.SyntheticEvent<HTMLElement>) => void);
  value: string;
}

class SearchInput extends React.Component<Props, any> {
  public state = {
    value: "",
  };

  public componentDidMount() {
    const { onChange, value } = this.props;
    if (!onChange && value) {
      this.setState({ value });
    }
  }

  public handleChange = event => {
    const { onChange, onSubmit } = this.props;
    if (onChange) {
      onChange(event);
      if (!onSubmit) {
        return;
      }
    }
    this.setState({ value: event.target.value });
  };

  public handleOnKeyDown = event => {
    const { onSubmit } = this.props;
    const Key = event.key;
    switch (Key) {
      case "Enter":
        if (onSubmit) {
          onSubmit(this.state.value, event);
        }
        event.preventDefault();
        break;
    }
  };

  public render() {
    const { onChange, onSubmit, value, ...props } = this.props;
    return (
      <TextInput
        prefixIcon="Search"
        value={onChange && !onSubmit ? value : this.state.value}
        onChange={this.handleChange}
        onKeyDown={this.handleOnKeyDown}
        {...props}
      />
    );
  }
}

export default SearchInput;
