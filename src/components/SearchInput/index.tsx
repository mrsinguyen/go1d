import * as React from "react";

import ButtonMinimal from "../ButtonMinimal";
import safeInvoke from "../../utils/safeInvoke";
import TextInput, { TextInputBaseProps } from "../TextInput";

interface Props extends TextInputBaseProps {
  onSubmit: ((
    search: string,
    event: React.SyntheticEvent<HTMLElement>
  ) => void);
  clearable?: boolean;
}

class SearchInput extends React.Component<Props, any> {
  public state = {
    value: "",
  };

  public componentDidMount() {
    const { value } = this.props;
    if (value) {
      this.setState({ value });
    }
  }

  public handleChange = (event: React.ChangeEvent<any>) => {
    const { onChange } = this.props;
    this.setState({ value: event.target.value });
    safeInvoke(onChange, event);
  };

  public handleOnKeyDown = event => {
    const { onSubmit } = this.props;
    const Key = event.key;
    switch (Key) {
      case "Enter":
        if (this.state.value) {
          safeInvoke(onSubmit, this.state.value, event);
        }
        event.preventDefault();
        break;
    }
  };

  public handleClear = event => {
    const { onSubmit } = this.props;
    this.setState({ value: "" });
    safeInvoke(onSubmit, "", event);
  }

  public render() {
    const { element, id, clearable = true, ...props } = this.props;
    return (
      <TextInput
        id={id}
        iconName="Search"
        value={this.state.value}
        onChange={this.handleChange}
        onKeyDown={this.handleOnKeyDown}
        suffixNode={
          <ButtonMinimal
            iconName="Cross"
            color="accent"
            data-testid="clearButton"
            display={clearable && this.state.value ? "block" : "none"}
            onClick={this.handleClear}
          />
        }
        {...props}
      />
    );
  }
}

export default SearchInput;
