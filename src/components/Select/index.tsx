import * as React from "react";

import Icon from "../Icon";
import Text from "../Text";
import Theme from "../Theme";
import View, { Props as ViewProps } from "../View";
import Input from "./internals/Input";

interface Props extends ViewProps {
  options?: Array<{ value: string; label: string }>;
}

class Select extends React.Component<Props, any> {
  public state = {
    value: null,
    label: null,
    isFocused: false,
  };

  public inputRef: HTMLElement = null;

  public handleValueSelect = (label, value) => () => {
    this.setState({
      value,
      label,
    });

    if (this.props.onChange) {
      this.props.onChange({
        target: this.inputRef,
      });
    }
  };

  // Focus State Handlers
  public focusInput() {
    if (!this.inputRef) {
      return;
    }
    this.inputRef.focus();
  }

  public blurInput() {
    if (!this.inputRef) {
      return;
    }
    this.inputRef.blur();
  }

  public handleOnBlur = () =>
    this.setState({
      isFocused: false,
    });

  public handleOnFocus = () =>
    this.setState({
      isFocused: true,
    });

  public getInputRef = (ref: HTMLElement) => {
    this.inputRef = ref;
  };

  // Mouse Handlers
  public onMenuMouseDown = (event: React.SyntheticEvent<HTMLElement>) => {
    event.stopPropagation();
    event.preventDefault();
    this.focusInput();
  };

  // Keyboard Handler

  public render() {
    const { options, name, onChange, children, ...props } = this.props;

    return (
      <Theme.Consumer>
        {({ colors, spacing }) => (
          <View css={{ position: "relative" }}>
            <View
              borderRadius={2}
              paddingX={4}
              boxShadow={this.state.isFocused ? "strong" : "soft"}
              backgroundColor="background"
              onClick={this.onMenuMouseDown}
              {...props}
            >
              <View
                paddingY={4}
                css={{
                  overflow: "hidden",
                }}
              >
                <Text
                  css={{
                    whiteSpace: "nowrap",
                  }}
                >
                  {this.state.label || "Please Select"}
                </Text>
              </View>
              <View
                css={{
                  position: "absolute",
                  right: "8px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                height="100%"
                paddingX={3}
                backgroundColor="background"
              >
                <Icon name="ChevronDown" color="muted" size={2} />
              </View>
              <Input
                onBlur={this.handleOnBlur}
                onFocus={this.handleOnFocus}
                innerRef={this.getInputRef}
                readOnly={true}
                value={this.state.value || ""}
                name={name}
              />
            </View>
            <View
              css={{
                position: "absolute",
                top: `calc(100% + ${spacing[2]}px)`,
                display: this.state.isFocused ? "block" : "none",
              }}
              borderRadius={2}
              width="100%"
              boxShadow="distant"
              backgroundColor="background"
              paddingY={3}
            >
              {options.map((Option, Index) => (
                <View
                  width={"100%"}
                  paddingY={4}
                  paddingX={4}
                  key={Option.label + "_" + Option.value + "_" + Index}
                  onMouseDown={this.handleValueSelect(
                    Option.label,
                    Option.value
                  )}
                  css={{
                    "&:hover": {
                      background: colors.highlight,
                      cursor: "pointer",
                    },
                  }}
                >
                  <Text>{Option.label}</Text>
                </View>
              ))}
            </View>
          </View>
        )}
      </Theme.Consumer>
    );
  }
}

export default Select;
