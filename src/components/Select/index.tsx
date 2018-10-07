import * as React from "react";

import Base from "../Base";
import Icon from "../Icon";
import Text from "../Text";
import Theme from "../Theme";
import View, { Props as ViewProps } from "../View";
import Input from "./internals/Input";

interface Props extends ViewProps {
  options?: Array<{ value: string; label: string }>;
  disabled?: boolean;
  backgroundColor?: string;
  color?: string;
  activeOptions?: string[];
  textOverride?: string;
  onChange?: ({ target: HTMLElement }) => void;
  name?: string;
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
    searchValue: "",
  };

  public inputRef: HTMLElement = null;

  public handleValueSelect = (label, value) => () => {
    this.setState(
      {
        value,
        label,
        closeOverride: true,
      },
      () => {
        if (this.props.onChange) {
          this.props.onChange({
            target: this.inputRef,
          });
        }
      }
    );
  };

  // Focus State Handlers
  public focusInput() {
    if (this.inputRef) {
      this.inputRef.focus();
    }
  }

  public blurInput() {
    if (this.inputRef) {
      this.inputRef.blur();
    }
  }

  public handleOnBlur = () =>
    this.setState({
      isFocused: false,
      closeOverride: false,
      focusedOptionIndex: null,
      focusedValue: null,
      searchValue: "",
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
    const { disabled } = this.props;
    if (disabled) {
      return;
    }
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

    if (!options.length || options.length === 0) {
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
    const { disabled } = this.props;

    const { isFocused, focusedValue, closeOverride } = this.state;

    if (disabled) {
      return;
    }

    if (isFocused) {
      const Key = event.key;
      switch (Key) {
        case "Tab":
          if (!event.shiftKey && focusedValue) {
            this.selectOption(focusedValue);
          }
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
        case "Backspace":
          if (this.props.searchable) {
            this.setState(OldState => ({
              searchValue: OldState.searchValue.slice(0, -1),
            }));
          }
          break;
        case "Delete":
          if (this.props.searchable) {
            this.setState(OldState => ({
              searchValue: OldState.searchValue.slice(0, -1),
            }));
          }
          break;
        case "Clear":
          if (this.props.searchable) {
            this.setState({
              searchValue: "",
            });
          }
          break;
        default:
          const BannedKeys = [
            "Shift",
            "CapsLock",
            "Control",
            "Alt",
            "Meta",
            "PageUp",
            "PageDown",
            "ArrowLeft",
            "ArrowRight",
          ];

          if (
            Array.prototype.find.call(BannedKeys, KeyCode => KeyCode === Key)
          ) {
            return;
          }

          if (this.props.searchable) {
            this.setState(OldState => ({
              searchValue: OldState.searchValue + Key,
            }));
          }
          return;
      }
    }
    event.preventDefault();
  };

  public render() {
    const {
      options = [],
      disabled,
      name,
      onChange,
      css,
      backgroundColor = "background",
      color = "default",
      activeOptions = [],
      textOverride,
      defaultText = "Please Select",
      children,
      ...props
    } = this.props;

    const { value: SelectedValue, focusedOptionIndex } = this.state;

    const getOptionBackground = (Index, Option) => {
      let ActiveValues = [SelectedValue];

      if (activeOptions) {
        ActiveValues = activeOptions;
      }

      if (Index === focusedOptionIndex) {
        return "highlight";
      }

      if (
        Array.prototype.find.call(
          ActiveValues,
          Element => Element === Option.value
        )
      ) {
        return "accent";
      }

      return null;
    };

    return (
      <Theme.Consumer>
        {({ colors, spacing, opacity }) => (
          <View
            css={{
              position: "relative",
              opacity: disabled ? opacity.disabled : 1,
              pointerEvents: disabled ? "none" : "all",
              cursor: disabled ? "initial" : "pointer",
            }}
          >
            <View
              borderRadius={2}
              paddingX={4}
              boxShadow={this.state.isFocused ? "strong" : "soft"}
              backgroundColor={backgroundColor}
              onClick={this.onMenuMouseDown}
              onKeyDown={this.onKeyDown}
              data-testid="primarySection"
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
                  color={color}
                  css={{
                    whiteSpace: "nowrap",
                  }}
                >
                  {textOverride || this.state.label || defaultText}
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
                backgroundColor={backgroundColor}
              >
                <Icon
                  name="ChevronDown"
                  color={color === "default" ? "muted" : color}
                  size={2}
                />
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
              data-testid="dropDown"
              borderRadius={2}
              width="100%"
              boxShadow="distant"
              backgroundColor="background"
              paddingY={3}
              zIndex={5}
            >
              {this.props.searchable && (
                <View paddingX={4}>
                  <Base
                    element="input"
                    type="text"
                    placeholder="Search"
                    value={this.state.searchValue}
                    css={{
                      border: `1px solid ${colors.divide}`,
                      padding: "8px",
                      borderRadius: "4px",
                    }}
                  />
                </View>
              )}
              <View>
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
                    backgroundColor={getOptionBackground(Index, Option)}
                    color={
                      getOptionBackground(Index, Option) === "accent"
                        ? "background"
                        : "default"
                    }
                    css={
                      getOptionBackground(Index, Option) !== "accent"
                        ? {
                            "&:hover": {
                              background: colors.highlight,
                              color: colors.default,
                              cursor: "pointer",
                            },
                          }
                        : {}
                    }
                  >
                    <Text>{Option.label}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        )}
      </Theme.Consumer>
    );
  }
}

export default Select;
