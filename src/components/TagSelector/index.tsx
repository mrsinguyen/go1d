import * as React from "react";
import { ButtonMinimal, Theme } from "../..";
import { autobind } from "../../utils/decorators";
import safeInvoke from "../../utils/safeInvoke";
import BaseMultiselect, { BaseMultiselectProps } from "../BaseMultiselect";
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

  public render() {
    const {
      value = this.state.value,
      borderRadius,
      id,
      options = [],
      disabled,
    } = this.props;

    const filteredOptions = options.filter(option => {
      if (typeof option === "string") {
        return (
          option.includes(this.state.search) &&
          !value.find(
            v => (typeof v === "string" ? v === option : v.value === option)
          )
        );
      } else {
        return (
          (option.value.includes(this.state.search) ||
            option.label.includes(this.state.search)) &&
          !value.find(
            v =>
              typeof v === "string"
                ? v === option.value
                : v.value === option.value
          )
        );
      }
    });

    return (
      <Theme.Consumer>
        {({ colors }) => (
          <View
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
            <Text
              id={id}
              element={"input"}
              placehlder="Type to "
              type={"text"}
              lineHeight="ui"
              fontSize={2}
              paddingY={2}
              color="inherit"
              onChange={this.inputChange}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              disabled={disabled}
              size="1"
              data-testid="inputElement"
              // {...props}
              flexGrow={1}
              flexBasis="auto"
              css={{
                // get rid of default styles
                width: "auto",
                minWidth: "100px",
                background: 0,
                border: 0,
                flexGrow: 1,
                "::placeholder": {
                  color: colors.contrast,
                  opacity: 0.5,
                },
              }}
            />
            <BaseMultiselect
              options={options}
              value={value}
              css={{ display: "none" }}
            />
          </View>
        )}
      </Theme.Consumer>
    );
  }
}

export default TagSelector;
