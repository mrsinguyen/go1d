import * as React from "react";
import { ButtonMinimal } from "../..";
import { autobind } from "../../utils/decorators";
import BaseMultiselect, { BaseMultiselectProps } from "../BaseMultiselect";

import Text from "../Text";
import View from "../View";

interface State {
  value: string[];
  isFocused: boolean;
  search: string;
}

class TagSelector extends React.Component<BaseMultiselectProps, State> {
  public state: State = {
    value: [],
    isFocused: false,
    search: "",
  };

  private target: React.RefObject<BaseMultiselect> = React.createRef();

  @autobind
  public inputChange(evt: React.SyntheticEvent<HTMLInputElement>) {
    this.setState({
      search: evt.currentTarget.value,
    });
  }

  public getBorderColor() {
    const { isFocused } = this.state;
    const { error, borderColor } = this.props;

    if (error) {
      return "danger";
    }
    if (isFocused) {
      return "accent";
    }

    return borderColor ? borderColor : "soft";
  }

  @autobind
  public handleFocus(evt: React.SyntheticEvent<HTMLInputElement>) {
    this.setState({ isFocused: true });
  }

  @autobind
  public handleBlur(evt: React.SyntheticEvent<HTMLInputElement>) {
    this.setState({ isFocused: false });
  }

  @autobind
  public renderOption(option: string, downshiftProps, creating = false) {
    if (creating) {
      return <Text>{`Create new tag "${option}"`}</Text>;
    }

    return <Text>{option}</Text>;
  }

  @autobind
  public renderSelect(Select: React.ReactNode) {
    const { value = this.state.value, borderRadius, id, disabled } = this.props;

    return (
      <View
        position="relative"
        flexDirection="row"
        flexWrap="wrap"
        borderRadius={borderRadius}
        backgroundColor="background"
        paddingX={2}
        paddingY={2}
        border={1}
        borderColor={this.getBorderColor()}
        boxShadow="inner"
        alignItems="center"
        htmlFor={id}
        opacity={disabled ? "disabled" : null}
      >
        {value.map((v, i) => (
          <View
            key={i}
            flexDirection="row"
            alignItems="center"
            borderRadius={borderRadius}
            borderColor={this.props.borderColor || "soft"}
            backgroundColor="background"
            paddingX={2}
            paddingY={2}
            marginRight={2}
            border={1}
            boxShadow="inner"
            data-value={v}
          >
            <Text fontSize={2} color="inherit">
              {v}
            </Text>
            <ButtonMinimal
              marginLeft={2}
              iconName="Cross"
              size="sm"
              round={true}
              data-value={v}
              onClick={
                this.target.current ? this.target.current.handleDelete : null
              }
            />
          </View>
        ))}
        {Select}
      </View>
    );
  }

  public render() {
    const {
      value = this.state.value,
      optionRenderer = this.renderOption,
      options = [],
      valueType,
      borderRadius,
      id,
      disabled,
      ...props
    } = this.props;

    return (
      <BaseMultiselect
        ref={this.target}
        customRenderer={this.renderSelect}
        value={value}
        options={options}
        optionRenderer={optionRenderer}
        handleFocus={this.handleFocus}
        handleBlur={this.handleBlur}
        valueType={valueType}
        {...props}
      />
    );
  }
}

export default TagSelector;
