import * as React from "react";
import { ButtonMinimal } from "../..";
import { autobind } from "../../utils/decorators";
import BaseMultiselect, { BaseMultiselectProps } from "../BaseMultiselect";

import safeInvoke from "../../utils/safeInvoke";
import Text from "../Text";
import View from "../View";

class TagSelector extends React.Component<
  BaseMultiselectProps,
  {
    value: Array<{ value: string; label: string } | string>;
    isFocused: boolean;
    search: string;
  }
> {
  public state = {
    value: [],
    isFocused: false,
    search: "",
  };

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

  public createChildren({ ref, getToggleButtonProps }: any) {
    return (
      <ButtonMinimal
        data-testid="toggle"
        iconName="Ellipsis"
        innerRef={ref}
        {...getToggleButtonProps()}
      />
    );
  }

  public createNewValue(evt: React.SyntheticEvent<HTMLButtonElement>) {
    const value = this.props.value || this.state.value;

    const referenceValue =
      (value.length && value[0]) ||
      (this.props.options.length && this.props.options[0]) ||
      this.props.valueType === "string"
        ? "string"
        : {};

    const newValue =
      typeof referenceValue === "string"
        ? evt.currentTarget.dataset.value
        : {
            value: evt.currentTarget.dataset.value,
            label: evt.currentTarget.dataset.value,
          };

    this.setState({
      value: [...value, newValue],
    });

    (evt.currentTarget.value as any) = [...value, newValue];
    safeInvoke(this.props.onCreate, evt);
  }

  public renderOption(option: any, creating = false) {
    if (creating) {
      return (
        <ButtonMinimal
          width="100%"
          onClick={this.createNewValue}
          data-value={option}
          justifyContent="flex-start"
        >
          <Text>{option}</Text>
        </ButtonMinimal>
      );
    }
    return (
      <ButtonMinimal width="100%" justifyContent="flex-start">
        {typeof option === "string" ? (
          <Text>{option}</Text>
        ) : (
          <Text>{option.label}</Text>
        )}
      </ButtonMinimal>
    );
  }

  public render() {
    const {
      value = this.state.value,
      borderRadius,
      id,
      optionRenderer = this.renderOption,
      options = [],
      disabled,
      valueType,
    } = this.props;

    return (
      <BaseMultiselect
        // tslint:disable-next-line:jsx-no-lambda
        customRenderer={Select => (
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
            {value.map(v => (
              <View
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
                data-value={typeof v === "string" ? v : v.value}
              >
                <Text fontSize={2} color="inherit">
                  {typeof v === "string" ? v : v.label}
                </Text>
                <ButtonMinimal
                  marginLeft={2}
                  iconName="Cross"
                  size="sm"
                  round={true}
                />
              </View>
            ))}
            {Select}
          </View>
        )}
        value={value}
        options={options}
        optionRenderer={optionRenderer}
        handleFous={this.handleFocus}
        handleBlur={this.handleBlur}
        valueType={valueType}
      />
    );
  }
}

export default TagSelector;
