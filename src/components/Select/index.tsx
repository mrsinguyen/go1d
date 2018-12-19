import * as React from "react";

import foundations from "../../foundations";
import Base from "../Base";
import Checkbox from "../Checkbox";
import Icon from "../Icon";
import Text from "../Text";
import Theme from "../Theme";
import View, { ViewProps } from "../View";
import Input from "./internals/Input";

type FocusDirection = "up" | "down" | "first" | "last" | "open";

export interface SelectProps extends ViewProps {
  options?: Array<{
    value?: string;
    label: string;
    optgroup?: boolean;
    values?: Array<{ value: string; label: string }>;
  }>;
  disabled?: boolean;
  backgroundColor?: string;
  color?: string;
  activeOptions?: string[];
  textOverride?: string;
  onChange?: ({ target }) => void;
  name?: string;
  closeOnSelect?: boolean;
  showCheckboxes?: boolean;
  size?: "sm" | "md";
}

const Sizes = {
  sm: {
    paddingY: 3,
    fontSize: 1,
  },
  md: {
    paddingY: 3,
    fontSize: 2,
  },
  lg: {
    paddingY: 3,
    fontSize: 3,
  },
};

class Select extends React.Component<SelectProps, any> {
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
      const Search = props.options.find(Option => Option.value === Value);

      if (Search) {
        OptionSelected = Search;
      }
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

  public componentDidUpdate(prevProps: SelectProps, prevState) {
    const { disabled, closeOnSelect, value: valueProp, options } = this.props;
    const { isFocused, value } = this.state;

    if (isFocused && !disabled && prevState.value !== value && !closeOnSelect) {
      setTimeout(() => {
        if (this.mounted) {
          this.focusInput();
        }
      }, 0);
    }

    if (prevProps.value || valueProp) {
      if (valueProp !== prevProps.value) {
        const CloseOnSelect =
          typeof closeOnSelect !== "undefined" ? closeOnSelect : true;

        const ReducedOptions = options.reduce((Sum, Option) => {
          if (Option.optgroup) {
            return [...Sum, ...Option.values];
          }

          return [...Sum, Option];
        }, []);

        let SelectedOption = ReducedOptions.find(
          Option => Option.value === valueProp
        );

        if (typeof SelectedOption === "undefined") {
          SelectedOption = {
            label: null,
            value: null,
          };
        }

        this.setState({
          value: SelectedOption.value,
          label: SelectedOption.label,
          closeOverride: CloseOnSelect,
          overrideFocusClose: !CloseOnSelect,
        });
      }
    }
  }

  public componentDidMount() {
    this.mounted = true;
  }

  public componentWillUnmount() {
    this.blurInput();
    this.mounted = false;
  }

  public handleValueSelect = (label, value) => event => {
    const CloseOnSelect =
      typeof this.props.closeOnSelect !== "undefined"
        ? this.props.closeOnSelect
        : true;
    event.stopPropagation();
    event.preventDefault();
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
    }
  }

  public handleOnBlur = () => {
    const { closeOnSelect } = this.props;

    this.setState(OldState => ({
      isFocused: OldState.overrideFocusClose && closeOnSelect ? true : false,
      focusedOptionIndex: null,
      focusedValue: null,
      searchValue: "",
      closeOverride: false,
      overrideFocusClose: false,
    }));

    this.onMenuClose();
  };

  public handleOnFocus = () => {
    this.setState({
      isFocused: true,
      closeOverride: false,
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
    const isVisible = this.state.isFocused && !this.state.closeOverride;

    if (disabled) {
      return;
    }
    event.stopPropagation();
    event.preventDefault();

    if (!isVisible) {
      this.focusInput();
      this.handleOnFocus();
    } else {
      this.blurInput();
    }
  };

  // Keyboard Handler
  public focusOption(direction: FocusDirection = "first") {
    const FilteredOptions = this.getFilteredOptions();
    const ReducedOptions = FilteredOptions.reduce((Sum, Option) => {
      if (Option.optgroup) {
        return [...Sum, ...Option.values];
      }

      return [...Sum, Option];
    }, []);
    let { focusedOptionIndex } = this.state;

    if (direction === "open") {
      this.setState({
        focusedOptionIndex,
        focusedValue: ReducedOptions[focusedOptionIndex],
        closeOverride: false,
      });
      return;
    }

    if (!ReducedOptions.length || ReducedOptions.length === 0) {
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
          : ReducedOptions.length - 1;
    } else if (direction === "down") {
      nextFocus = (focusedOptionIndex + 1) % ReducedOptions.length;
    } else if (direction === "last") {
      nextFocus = ReducedOptions.length - 1;
    }

    this.setState({
      focusedOptionIndex: nextFocus,
      focusedValue: ReducedOptions[nextFocus],
      closeOverride: false,
    });
  }

  public selectOption = Selected => event => {
    if (Selected.label && Selected.value) {
      this.handleValueSelect(Selected.label, Selected.value)(event);
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
            this.selectOption(focusedValue)(event);
          }
          break;
        case "Enter":
          if (focusedValue) {
            this.selectOption(focusedValue)(event);
          }
          break;
        case "Escape":
          this.blurInput();
          break;
        case " ": // space
          if (focusedValue) {
            this.selectOption(focusedValue)(event);
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
        return options.reduce((sum, Option) => {
          if (Option.optgroup) {
            const subOptions = Option.values.filter(subOption =>
              subOption.label.toLowerCase().includes(searchValue.toLowerCase())
            );

            if (subOptions.length > 0) {
              return [
                ...sum,
                {
                  ...Option,
                  values: subOptions,
                },
              ];
            }
          } else {
            if (
              Option.label.toLowerCase().includes(searchValue.toLowerCase())
            ) {
              return [...sum, Option];
            }
          }
          return sum;
        }, []);
      }
    }

    return options;
  };

  public renderOption = ({
    Option,
    Index,
    selectState: { activeOptions, size, colors },
    child,
  }) => {
    const { value: SelectedValue, focusedOptionIndex } = this.state;
    const getOptionBackground = (index, option) => {
      let ActiveValues = [SelectedValue];
      if (activeOptions) {
        ActiveValues = activeOptions;
      }
      if (index === focusedOptionIndex) {
        return "highlight";
      }
      if (
        Array.prototype.find.call(
          ActiveValues,
          Element => Element === option.value
        )
      ) {
        return "accent";
      }
      return null;
    };
    const getActive = option => {
      let ActiveValues = [SelectedValue];
      if (activeOptions) {
        ActiveValues = activeOptions;
      }
      if (
        Array.prototype.find.call(
          ActiveValues,
          Element => Element === option.value
        )
      ) {
        return true;
      }
      return false;
    };

    if (this.props.showCheckboxes) {
      return (
        <View
          width={"100%"}
          paddingY={4}
          paddingX={child ? 6 : 4}
          key={Option.label + "_" + Option.value + "_" + Index}
          onMouseDown={this.handleValueSelect(Option.label, Option.value)}
          backgroundColor={Index === focusedOptionIndex ? "highlight" : null}
          flexDirection="row"
          css={{
            "&:hover": {
              background: colors.highlight,
              color: colors.default,
              cursor: "pointer",
            },
            overflow: "hidden",
          }}
        >
          <Checkbox
            checked={getActive(Option)}
            id={`check_${Option.label}`}
            value=""
          />
          <Text fontSize={Sizes[size].fontSize}>{Option.label}</Text>
        </View>
      );
    }

    return (
      <View
        width={"100%"}
        paddingY={4}
        paddingX={child ? 6 : 4}
        key={Option.label + "_" + Option.value + "_" + Index}
        onMouseDown={this.handleValueSelect(Option.label, Option.value)}
        backgroundColor={getOptionBackground(Index, Option)}
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
        <Text
          fontSize={Sizes[size].fontSize}
          color={
            getOptionBackground(Index, Option) === "accent"
              ? "background"
              : "default"
          }
        >
          {Option.label}
        </Text>
      </View>
    );
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
      showCheckboxes,
      error, // Do not pass down
      size = "sm",
      id,
      ...props
    } = this.props;

    const { searchValue } = this.state;

    const FilteredOptions = this.getFilteredOptions() || [];
    const isVisible = this.state.isFocused && !this.state.closeOverride;

    return (
      <Theme.Consumer>
        {({ colors, spacing }) => (
          <View
            opacity={disabled && "disabled"}
            css={{
              position: "relative",
              pointerEvents: disabled ? "none" : "all",
              cursor: disabled ? "initial" : "pointer",
            }}
          >
            <View
              borderRadius={2}
              paddingX={4}
              boxShadow={this.state.isFocused ? "strong" : "soft"}
              backgroundColor={backgroundColor}
              border={1}
              borderColor={
                backgroundColor
                  ? backgroundColor
                  : this.state.isFocused
                    ? colors.accent
                    : colors.soft
              }
              onMouseDown={this.onMenuMouseDown}
              {...props}
              css={{
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
                id={id}
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
                display: !isVisible ? "none" : "block",
              }}
              data-testid="dropDown"
              borderRadius={2}
              data-ishidden={!isVisible}
              width="100%"
              boxShadow="distant"
              backgroundColor="background"
              paddingY={3}
              zIndex={foundations.zIndex.dropdown}
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
              {isVisible && (
                <View marginTop={this.props.searchable ? 4 : 0}>
                  {FilteredOptions.map((Option, OptIndex) => {
                    if (Option.optgroup) {
                      const CurrentOffset = FilteredOptions.reduce(
                        (Sum, OptGroup, CurrentIndex) => {
                          if (OptIndex > CurrentIndex) {
                            return Sum + OptGroup.values.length;
                          }
                          return Sum;
                        },
                        0
                      );

                      return (
                        <View
                          width={"100%"}
                          key={`${Option.label}_${OptIndex}`}
                        >
                          <View
                            width={"100%"}
                            paddingY={4}
                            paddingX={4}
                            backgroundColor="faint"
                          >
                            <Text color="subtle">{Option.label}</Text>
                          </View>
                          <View>
                            {Option.values.map((option, index) =>
                              this.renderOption({
                                Option: option,
                                Index: index + CurrentOffset,
                                selectState: { activeOptions, size, colors },
                                child: true,
                              })
                            )}
                          </View>
                        </View>
                      );
                    } else {
                      return this.renderOption({
                        Option,
                        Index: OptIndex,
                        selectState: { activeOptions, size, colors },
                        child: false,
                      });
                    }
                  })}
                </View>
              )}
            </View>
          </View>
        )}
      </Theme.Consumer>
    );
  }
}

export default Select;
