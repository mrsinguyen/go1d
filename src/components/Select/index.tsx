import * as React from "react";

import Icon from "../Icon";
import Text from "../Text";
import Theme from "../Theme";
import View, { Props as ViewProps } from "../View";
import Input from "./internals/Input";

interface Props extends ViewProps {
  options?: Array<{ value: string; label: string }>;
}

type FocusDirection = "up" | "down" | "first" | "last" | "open";

class Select extends React.Component<Props, any> {
  public state = {
    closeOverride: false,
    value: null,
    label: null,
    isFocused: false,
    focusedOptionIndex: null,
    focusedValue: null,
  };

  public inputRef: HTMLElement = null;

  public handleValueSelect = (label, value) => () => {
    this.setState({
      value,
      label,
      closeOverride: true,
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
      closeOverride: false,
      focusedOptionIndex: null,
      focusedValue: null,
    });

  public handleOnFocus = () =>
    this.setState({
      isFocused: true,
      closeOverride: false,
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
  public focusOption(direction: FocusDirection = "first") {
    const { options } = this.props;
    let { focusedOptionIndex } = this.state;

    if (direction === "open") {
      this.setState({
        focusedOptionIndex,
        focusedValue: options[focusedOptionIndex],
        closeOverride: false,
      });
      return;
    }

    if (!options.length) {
      return;
    }
    let nextFocus = 0; // handles 'first'

    if (focusedOptionIndex === null) {
      focusedOptionIndex = -1;
    }

    if (direction === "up") {
      nextFocus =
        focusedOptionIndex > 0 ? focusedOptionIndex - 1 : options.length - 1;
    } else if (direction === "down") {
      nextFocus = (focusedOptionIndex + 1) % options.length;
    } else if (direction === "last") {
      nextFocus = options.length - 1;
    }

    this.setState({
      focusedOptionIndex: nextFocus,
      focusedValue: options[nextFocus],
      closeOverride: false,
    });
  }

  public selectOption = Selected => {
    if (Selected.label && Selected.value) {
      this.handleValueSelect(Selected.label, Selected.value)();
    }
  };

  public onKeyDown = (event: KeyboardEvent) => {
    const { isDisabled } = this.props;

    const { focusedValue, closeOverride } = this.state;

    if (isDisabled) {
      return;
    }

    switch (event.key) {
      case "Tab":
        if (event.shiftKey || !focusedValue) {
          return;
        }
        this.selectOption(focusedValue);
        break;
      case "Enter":
        if (focusedValue) {
          this.selectOption(focusedValue);
        }
        break;
      case "Escape":
        this.blurInput();
        break;
      case " ": // space
        if (focusedValue) {
          this.selectOption(focusedValue);
        }
        break;
      case "ArrowUp":
        if (closeOverride) {
          this.focusOption("open");
          break;
        }
        this.focusOption("up");
        break;
      case "ArrowDown":
        if (closeOverride) {
          this.focusOption("open");
          break;
        }
        this.focusOption("down");
        break;
      case "Home":
        this.focusOption("first");
        break;
      case "End":
        this.focusOption("last");
        break;
      default:
        return;
    }
    event.preventDefault();
  };

  public render() {
    const { options, name, onChange, css, children, ...props } = this.props;

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
              onKeyDown={this.onKeyDown}
              {...props}
              css={{
                border: "1px solid",
                borderColor: this.state.isFocused
                  ? colors.accent
                  : "transparent",
                ...((css as object) || {}),
              }}
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
                height="calc(100% - 2px)"
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
                display:
                  this.state.isFocused === false || this.state.closeOverride
                    ? "none"
                    : "block",
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
                    ...(Index === this.state.focusedOptionIndex
                      ? {
                          background: colors.highlight,
                        }
                      : {}),
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
