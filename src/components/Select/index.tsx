import Downshift from "downshift";
import * as React from "react";
import { Manager, Popper, Reference } from "react-popper";
import { AutoSizer, List } from "react-virtualized";
import safeInvoke from "../../utils/safeInvoke";
import ButtonMinimal from "../ButtonMinimal";
import Portal from "../Portal";
import SearchInput from "../SearchInput";
import Text from "../Text";
import Theme from "../Theme";

import View, { ViewProps } from "../View";

export interface SelectProps extends ViewProps {
  options?: Array<{
    value?: string;
    label: string;
    optgroup?: boolean;
    values?: Array<{ value: string; label: string }>;
  }>;
  disabled?: boolean;
  defaultText?: string;
  defaultValue?: any;
  value?: any;
  onChange?: ({ target }) => void;
  name?: string;
  size?: "sm" | "md";
  clearable?: boolean;
  onClear?: () => void;
}

const Sizes = {
  sm: {
    fontSize: 1,
  },
  md: {
    fontSize: 2,
  },
  lg: {
    fontSize: 3,
  },
};

class Select extends React.PureComponent<SelectProps, any> {
  public static defaultProps = {
    size: "md",
  };

  public OptionToString(Option) {
    if (Option) {
      return Option.value;
    }
  }

  public renderSelectRow({
    options,
    getItemProps,
    highlightedIndex,
    selectedItem,
    colors,
  }) {
    return ({ key, index, style: virtualisedStyles }) => {
      const Option = options[index];

      if (Option.optgroup) {
        if (Option.label.trim() === "") {
          return (
            <View key={key} css={virtualisedStyles} backgroundColor="soft" />
          );
        }

        return (
          <View
            key={key}
            css={virtualisedStyles}
            backgroundColor="faint"
            padding={4}
          >
            <Text color="subtle">{Option.label}</Text>
          </View>
        );
      }

      return (
        <View key={key} css={virtualisedStyles}>
          <View
            height={50}
            width="100%"
            paddingY={4}
            paddingX={Option.childOption ? 6 : 4}
            {...getItemProps({
              index: Option.selectableIndex,
              item: Option,
              style: {
                cursor: "pointer",
                backgroundColor:
                  selectedItem === Option
                    ? colors.accent
                    : highlightedIndex === Option.selectableIndex
                      ? colors.highlight
                      : colors.background,
              },
            })}
          >
            <Text
              fontSize={Sizes[this.props.size].fontSize}
              css={{
                transition: "none",
              }}
              color={selectedItem === Option ? "background" : "default"}
            >
              {Option.label}
            </Text>
          </View>
        </View>
      );
    };
  }

  public render() {
    const {
      clearable,
      options,
      disabled,
      size,
      defaultText = "Please Select",
      defaultValue,
      value,
      searchable,
      id,
    } = this.props;

    const { flattenedOptions, selectableCount } = this.flattenOptions(options);

    const DefaultOption = defaultValue
      ? flattenedOptions.find(x => x.value === defaultValue)
      : null;

    const selectedOption = value
      ? flattenedOptions.find(x => x.value === value)
      : undefined;

    return (
      <Theme.Consumer>
        {({ colors }) => (
          <Downshift
            stateReducer={this.stateReducer}
            onChange={this.handleOnChange}
            itemToString={this.OptionToString}
            itemCount={selectableCount}
            initialSelectedItem={DefaultOption}
            selectedItem={selectedOption}
          >
            {({
              getToggleButtonProps,
              getItemProps,
              getRootProps,
              getMenuProps,
              getInputProps,
              isOpen,
              inputValue,
              selectedItem,
              highlightedIndex,
              clearSelection,
            }) => {
              const filteredOptions = searchable
                ? this.filterOptions(flattenedOptions, inputValue)
                : flattenedOptions;
              return (
                <View {...getRootProps({ refKey: "innerRef" })}>
                  <Manager>
                    <Reference>
                      {({ ref }) => (
                        <button
                          ref={ref}
                          type="button"
                          {...getToggleButtonProps({
                            disabled,
                          })}
                          data-testid="primarySection"
                          style={{
                            cursor: disabled ? "initial" : "pointer",
                          }}
                        >
                          <View
                            borderRadius={2}
                            paddingX={4}
                            border={1}
                            opacity={disabled && "disabled"}
                            borderColor={isOpen ? "accent" : "soft"}
                            position="relative"
                            boxShadow={isOpen ? "strong" : "soft"}
                          >
                            <View
                              paddingY={3}
                              css={{
                                overflow: "hidden",
                              }}
                            >
                              <Text
                                fontSize={Sizes[size].fontSize}
                                css={{
                                  whiteSpace: "nowrap",
                                }}
                              >
                                {selectedItem
                                  ? selectedItem.label
                                  : defaultText}
                              </Text>
                            </View>
                            <View
                              css={{
                                position: "absolute",
                                right: 8,
                                top: 1,
                                alignItems: "center",
                                justifyContent: "center",
                                paddingRight: 0,
                                pointerEvents:
                                  selectedItem && clearable ? "auto" : "none",
                              }}
                              height="calc(100% - 3px)"
                              paddingX={3}
                            >
                              {selectedItem && clearable ? (
                                <ButtonMinimal
                                  iconName="Cross"
                                  css={{
                                    backgroundColor: "transparent",
                                  }}
                                  iconColor="muted"
                                  onClick={this.handleSelectionClear(
                                    clearSelection
                                  )}
                                  size="sm"
                                />
                              ) : (
                                <ButtonMinimal
                                  iconName="ChevronDown"
                                  css={{
                                    backgroundColor: "transparent",
                                  }}
                                  iconColor="muted"
                                  size="sm"
                                />
                              )}
                            </View>
                          </View>
                        </button>
                      )}
                    </Reference>
                    {isOpen && (
                      <Portal>
                        <Popper placement="auto-start">
                          {({ ref, style }) => (
                            <View
                              {...getMenuProps({
                                refKey: "innerRef",
                              })}
                            >
                              <View
                                backgroundColor="background"
                                boxShadow="strong"
                                borderRadius={3}
                                overflow="hidden"
                                style={style}
                                innerRef={ref}
                                transition="none"
                                zIndex="dropdown"
                                width={250}
                                marginTop={2}
                              >
                                {searchable && (
                                  <View paddingX={4} paddingY={3}>
                                    <SearchInput
                                      id={`SearchInput__${id}`}
                                      onSubmit={null}
                                      clearable={false}
                                      size={size}
                                      data-testid="searchFilterInput"
                                      {...getInputProps()}
                                    />
                                  </View>
                                )}
                                <AutoSizer disableHeight={true}>
                                  {({ width }) => (
                                    <List
                                      data-testid="resultsList"
                                      width={width}
                                      height={this.calculateDropDownHeight(
                                        filteredOptions
                                      )}
                                      rowCount={filteredOptions.length}
                                      rowHeight={this.calculateOptionHeight(
                                        filteredOptions
                                      )}
                                      rowRenderer={this.renderSelectRow({
                                        options: filteredOptions,
                                        colors,
                                        getItemProps,
                                        highlightedIndex,
                                        selectedItem,
                                      })}
                                    />
                                  )}
                                </AutoSizer>
                              </View>
                            </View>
                          )}
                        </Popper>
                      </Portal>
                    )}
                  </Manager>
                </View>
              );
            }}
          </Downshift>
        )}
      </Theme.Consumer>
    );
  }

  private handleOnChange = event => {
    const { onChange } = this.props;

    if (onChange) {
      safeInvoke(onChange, {
        target: event,
      });
    }
  };

  private handleSelectionClear(clearFunction) {
    const { onClear } = this.props;
    return () => {
      clearFunction();
      if (onClear) {
        safeInvoke(onClear);
      }
    };
  }

  private stateReducer = (state, changes) => {
    switch (changes.type) {
      case Downshift.stateChangeTypes.keyDownEnter:
      case Downshift.stateChangeTypes.clickItem:
        return {
          ...changes,
          highlightedIndex: state.highlightedIndex,
          inputValue: "",
        };
      default:
        return changes;
    }
  };

  private flattenOptions(Options = []) {
    return Options.reduce((sum, Option) => {
      if (Option.optgroup) {
        return {
          selectableCount: (sum.selectableCount || 0) + Option.values.length,
          flattenedOptions: [
            ...(sum.flattenedOptions || []),
            {
              label: Option.label || "",
              optgroup: true,
            },
            ...(Option.values.map((SubOption, index) => ({
              ...SubOption,
              childOption: true,
              selectableIndex: (sum.selectableCount || 0) + index,
            })) || []),
          ],
        };
      }

      return {
        selectableCount: (sum.selectableCount || 0) + 1,
        flattenedOptions: [
          ...(sum.flattenedOptions || []),
          {
            ...Option,
            selectableIndex: sum.selectableCount || 0,
          },
        ],
      };
    }, {});
  }

  private filterOptions(Options, searchValue) {
    if (typeof searchValue === "string" && searchValue.trim() !== "") {
      return Options.filter(Entry => {
        return (
          !Entry.optgroup &&
          Entry.label &&
          Entry.label.toLowerCase().includes(searchValue.toLowerCase())
        );
      });
    }
    return Options;
  }

  private calculateDropDownHeight(Options) {
    const Height = Options.reduce((sum, Entry, index) => {
      return sum + this.calculateOptionHeight(Options)({ index });
    }, 0);

    return Height < 300 ? Height : 300;
  }

  private calculateOptionHeight(Options) {
    // Calculate the options for VirtualisedList
    return ({ index: OptionIndex }) => {
      const Option = Options[OptionIndex];
      const baseOptionHeight = 50;

      if (typeof Option === "undefined") {
        return 0;
      }

      if (Option.optgroup) {
        if (Option.label.trim() === "") {
          // If it is just a line break optGroup
          return 1;
        }

        return 50;
      }

      return baseOptionHeight;
    };
  }
}

export default Select;
