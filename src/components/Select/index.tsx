import * as React from "react";
import OutsideClickHandler from "react-outside-click-handler";

import foundations from "../../foundations";
import Checkbox from "../Checkbox";
import Icon from "../Icon";
import SearchInput from "../SearchInput";
import Text from "../Text";
import Theme from "../Theme";
import View, { ViewProps } from "../View";

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

  public inputRef = React.createRef();
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
      searchValue: "",
    };
  }

  public componentDidUpdate(prevProps: SelectProps) {
    const { closeOnSelect, value: valueProp, options } = this.props;

    if (this.state.closeOnSelect !== closeOnSelect) {
      this.setState({
        closeOnSelect,
      });
    }

    if (prevProps.value || valueProp) {
      if (valueProp !== prevProps.value) {
        const CloseOnSelect =
          typeof closeOnSelect !== "undefined" ? closeOnSelect : true;
        const ReducedOptions = this.flattenOptGroups(options);

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
        });
      }
    }
  }

  public componentDidMount() {
    this.mounted = true;
  }

  public componentWillUnmount() {
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

  public unbindKeyboardListeners = () => {
    if (document) {
      document.body.removeEventListener("keydown", this.onKeyDown);
      document.body.removeEventListener("keyup", this.onKeyUp);
    }
  };

  public handleOnBlur = () => {
    this.setState({
      isFocused: false,
      focusedOptionIndex: null,
      searchValue: "",
      closeOverride: false,
    });
  };

  public handleOnFocus = () => {
    this.setState({
      isFocused: true,
      closeOverride: false,
    });

    setTimeout(() => {
      // Focus the filter input after the current call stack.
      if (this.inputRef.current !== null) {
        (this.inputRef.current as any).focus();
      }
    }, 0);

    if (document) {
      document.body.addEventListener("keydown", this.onKeyDown);
      document.body.addEventListener("keyup", this.onKeyUp);
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
      this.handleOnFocus();
    } else {
      this.handleOnBlur();
    }
  };

  // Keyboard Handler
  public focusOption(direction: FocusDirection = "first") {
    const FilteredOptions = this.getFilteredOptions();
    const ReducedOptions = this.flattenOptGroups(FilteredOptions);

    let { focusedOptionIndex } = this.state;

    if (direction === "open") {
      this.setState({
        focusedOptionIndex,
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
      closeOverride: false,
    });
  }

  public selectOption = SelectedIndex => event => {
    const FilteredOptions = this.getFilteredOptions();
    const ReducedOptions = this.flattenOptGroups(FilteredOptions);
    const Selected = ReducedOptions[SelectedIndex];

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

    const { isFocused, focusedOptionIndex, closeOverride } = this.state;

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
          if (!event.shiftKey && focusedOptionIndex) {
            this.selectOption(focusedOptionIndex)(event);
          }
          break;
        case "Enter":
          if (focusedOptionIndex !== null) {
            this.selectOption(focusedOptionIndex)(event);
          }
          break;
        case "Escape":
          this.handleOnBlur();
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
        case "Clear":
          if (this.props.searchable) {
            this.setState({
              searchValue: "",
            });
          }
          break;
        default:
          return;
      }
    }
    event.preventDefault();
  };

  public handleFilterChange = event =>
    this.setState({
      searchValue: event.target.value,
    });

  public renderOption = ({
    Option,
    Index,
    selectState: { activeOptions, size, colors },
    child,
  }) => {
    const { value: SelectedValue, focusedOptionIndex } = this.state;
    const { showCheckboxes } = this.props;

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

    if (showCheckboxes) {
      return (
        <View
          width={"100%"}
          paddingY={3}
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
            label={Option.label}
            fontSize={Sizes[size].fontSize}
          />
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

    const FilteredOptions = this.getFilteredOptions();
    const isVisible = this.state.isFocused && !this.state.closeOverride;

    return (
      <Theme.Consumer>
        {({ colors, spacing }) => (
          <OutsideClickHandler onOutsideClick={this.unbindKeyboardListeners}>
            <View
              opacity={disabled && "disabled"}
              css={{
                position: "relative",
                pointerEvents: disabled ? "none" : "all",
                cursor: disabled ? "initial" : "pointer",
              }}
              boxShadow={this.state.isFocused ? "strong" : "soft"}
              {...props}
            >
              <View
                borderRadius={2}
                paddingX={4}
                backgroundColor={backgroundColor}
                border={1}
                data-testid="primarySection"
                borderColor={
                  backgroundColor
                    ? backgroundColor
                    : this.state.isFocused
                      ? colors.accent
                      : colors.soft
                }
                onMouseDown={this.onMenuMouseDown}
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
                {isVisible && (
                  <OutsideClickHandler onOutsideClick={this.handleOnBlur}>
                    {searchable && (
                      <View paddingX={4}>
                        <SearchInput
                          id={`SearchInput__${id}`}
                          onSubmit={null}
                          value={searchValue}
                          clearable={false}
                          size={size}
                          data-testid="searchFilterInput"
                          innerRef={this.inputRef}
                          onChange={this.handleFilterChange}
                        />
                      </View>
                    )}
                    <View paddingTop={searchable ? 3 : 0}>
                      {FilteredOptions.map((Option, OptIndex) => {
                        if (Option.optgroup) {
                          return this.renderOptGroup(
                            FilteredOptions,
                            Option,
                            OptIndex,
                            colors,
                            size
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
                  </OutsideClickHandler>
                )}
              </View>
            </View>
          </OutsideClickHandler>
        )}
      </Theme.Consumer>
    );
  }

  protected flattenOptGroups = Options =>
    Options.reduce((Sum, Option) => {
      if (Option.optgroup) {
        return [...Sum, ...Option.values];
      }

      return [...Sum, Option];
    }, []);

  protected getFilteredOptions = () => {
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

  private renderOptGroup(FilteredOptions, Option, OptIndex, colors, size) {
    const { activeOptions } = this.props;
    const CurrentOffset = FilteredOptions.reduce(
      (Sum, OptGroup, CurrentIndex) => {
        if (OptIndex > CurrentIndex) {
          return Sum + OptGroup.values.length;
        }
        return Sum;
      },
      0
    );

    const emptyLabel = Option.label === "";
    const padding = emptyLabel ? 0 : 4;
    const optGroupProps = {
      backgroundColor: "faint",
    } as any;
    if (emptyLabel && OptIndex > 0) {
      optGroupProps.minHeight = "1px";
      optGroupProps.backgroundColor = "soft";
    }

    return (
      <View width={"100%"} key={`${Option.label}_${OptIndex}`}>
        <View
          width={"100%"}
          paddingY={padding}
          paddingX={padding}
          {...optGroupProps}
        >
          <Text color="subtle">{Option.label}</Text>
        </View>
        <View>
          {Option.values.map((option, index) =>
            this.renderOption({
              Option: option,
              Index: index + CurrentOffset,
              selectState: {
                activeOptions,
                size,
                colors,
              },
              child: true,
            })
          )}
        </View>
      </View>
    );
  }
}

export default Select;
