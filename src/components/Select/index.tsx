import * as React from "react";

import Base from "../Base";
import Icon from "../Icon";
import Text from "../Text";
import Theme from "../Theme";
import View, { Props as ViewProps } from "../View";
import Input from "./internals/Input";

type FocusDirection = "up" | "down" | "first" | "last" | "open";

interface Props extends ViewProps {
  options?: Array<{ value: string; label: string }>;
  disabled?: boolean;
  backgroundColor?: string;
  color?: string;
  activeOptions?: string[];
  textOverride?: string;
  onChange?: ({ target }) => void;
  name?: string;
  closeOnSelect?: boolean;
  size?: "sm" | "md";
}

class Select extends React.Component<Props, any> {
  public mounted;

  public inputRef: HTMLElement = null;
  constructor(props) {
    super(props);

    let OptionSelected = {
      label: null,
      value: null,
    };

    if (props.defaultValue || props.value) {
      const Value = props.value || props.defaultValue;

      OptionSelected = props.options.find(Option => Option.value === Value);
    }

    this.state = {
      closeOverride: false,
      value: OptionSelected.value,
      label: OptionSelected.label,
      isFocused: false,
      focusedOptionIndex: null,
      focusedValue: null,
      searchValue: "",
      overrideFocusClose: false,
    };
  }

  public componentDidUpdate(prevProps: Props, prevState) {
    const { disabled, closeOnSelect } = this.props;
    const { isFocused, value } = this.state;

    if (
      (isFocused && !disabled && prevState.value !== value) ||
      (isFocused && prevProps.closeOnSelect !== closeOnSelect)
    ) {
      this.focusInput();
    }
  }

  public componentDidMount() {
    this.mounted = true;
  }

  public componentWillUnmount() {
    this.blurInput();
    this.mounted = false;
  }

  public handleValueSelect = (label, value) => () => {
    const CloseOnSelect =
      typeof this.props.closeOnSelect !== "undefined"
        ? this.props.closeOnSelect
        : true;

    this.setState(
      {
        value,
        label,
        closeOverride: CloseOnSelect,
        overrideFocusClose: !CloseOnSelect,
      },
      () => {
        if (this.props.onChange) {
          this.props.onChange({
            target: {
              value,
              label,
              name: this.props.name,
            },
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
      this.onMenuClose();
    }
  }

  public handleOnBlur = () => {
    this.setState(OldState => ({
      isFocused: OldState.overrideFocusClose ? true : false,
      focusedOptionIndex: null,
      focusedValue: null,
      searchValue: "",
      overrideFocusClose: false,
      closeOverride: false,
    }));
  };

  public handleOnFocus = () => {
    this.setState({
      isFocused: true,
    });

    this.onMenuOpen();
  };

  public getInputRef = (ref: HTMLElement) => {
    this.inputRef = ref;
  };

  public onMenuOpen = () => {
    if (document) {
      document.body.addEventListener("keydown", this.onKeyDown);
      document.body.addEventListener("keyup", this.onKeyUp);
    }
  };

  public onMenuClose = () => {
    if (document) {
      document.body.removeEventListener("keydown", this.onKeyDown);
      document.body.removeEventListener("keyup", this.onKeyUp);
    }
  };

  // Mouse Handlers
  public onMenuMouseDown = (event: React.SyntheticEvent<HTMLElement>) => {
    const { disabled } = this.props;
    if (disabled) {
      return;
    }
    event.stopPropagation();
    event.preventDefault();

    if (this.state.isFocused === false) {
      this.focusInput();
    } else {
      this.blurInput();
    }
  };

  // Keyboard Handler
  public focusOption(direction: FocusDirection = "first") {
    const FilteredOptions = this.getFilteredOptions();
    let { focusedOptionIndex } = this.state;

    if (direction === "open") {
      this.setState({
        focusedOptionIndex,
        focusedValue: FilteredOptions[focusedOptionIndex],
        closeOverride: false,
      });
      return;
    }

    if (!FilteredOptions.length || FilteredOptions.length === 0) {
      return;
    }
    let nextFocus = 0; // handles 'first'

    if (focusedOptionIndex === null) {
      focusedOptionIndex = -1;
    }

    if (direction === "up") {
      nextFocus =
        focusedOptionIndex > 0
          ? focusedOptionIndex - 1
          : FilteredOptions.length - 1;
    } else if (direction === "down") {
      nextFocus = (focusedOptionIndex + 1) % FilteredOptions.length;
    } else if (direction === "last") {
      nextFocus = FilteredOptions.length - 1;
    }

    this.setState({
      focusedOptionIndex: nextFocus,
      focusedValue: FilteredOptions[nextFocus],
      closeOverride: false,
    });
  }

  public selectOption = Selected => {
    if (Selected.label && Selected.value) {
      this.handleValueSelect(Selected.label, Selected.value)();
    }
  };

  public onKeyUp = (event: KeyboardEvent) => {
    const { disabled, onKeyUp } = this.props;

    if (disabled) {
      return;
    }

    if (onKeyUp) {
      onKeyUp(event);
    }
  };

  public onKeyDown = (event: KeyboardEvent) => {
    const { disabled, onKeyDown } = this.props;

    const { isFocused, focusedValue, closeOverride } = this.state;

    if (disabled || this.mounted === false) {
      return;
    }

    if (onKeyDown) {
      onKeyDown(event);
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

  public getFilteredOptions = () => {
    const { searchValue } = this.state;
    const { searchable, options } = this.props;

    if (searchable) {
      if (searchValue !== "") {
        return options.filter(Option =>
          Option.label.toLowerCase().includes(searchValue.toLowerCase())
        );
      }
    }

    return options;
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
      searchable,
      onKeyDown,
      onKeyUp,
      closeOnSelect,
      size = "sm",
      ...props
    } = this.props;

    const {
      value: SelectedValue,
      focusedOptionIndex,
      searchValue,
    } = this.state;

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

    const Sizes = {
      sm: {
        paddingY: 3,
        fontSize: 1,
      },
      md: {
        paddingY: 4,
        fontSize: 2,
      },
    };

    const FilteredOptions = this.getFilteredOptions();

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
              onMouseDown={this.onMenuMouseDown}
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
                paddingY={Sizes[size].paddingY}
                css={{
                  overflow: "hidden",
                }}
              >
                <Text
                  color={color}
                  fontSize={Sizes[size].fontSize}
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
                  right: 8,
                  top: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
                height="calc(100% - 3px)"
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
                data-testid="primarySection"
                value={this.state.value || ""}
                name={name}
              />
            </View>
            <View
              css={{
                position: "absolute",
                top: `calc(100% + ${spacing[2]}px)`,
                maxHeight: "300px",
                overflowY: "auto",
                display:
                  this.state.isFocused === false || this.state.closeOverride
                    ? "none"
                    : "block",
              }}
              data-testid="dropDown"
              borderRadius={2}
              data-ishidden={
                this.state.isFocused === false || this.state.closeOverride
              }
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
                    value={searchValue}
                    readOnly={true}
                    css={{
                      border: `1px solid ${colors.divide}`,
                      padding: "8px",
                      borderRadius: "4px",
                    }}
                  />
                </View>
              )}
              <View>
                {FilteredOptions.map((Option, Index) => (
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
                    <Text fontSize={Sizes[size].fontSize}>{Option.label}</Text>
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
