import Downshift from "downshift";
import * as React from "react";
import { Manager, Popper, Reference } from "react-popper";
import { AutoSizer, List } from "react-virtualized";
import Portal from "../Portal";

import View, { ViewProps } from "../View";

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
  clearable?: boolean;
  onClear?: () => void;
}

class Select extends React.PureComponent<SelectProps, any> {
  public OptionToString(Option) {
    if (Option) {
      return Option.value;
    } else {
      console.log(Option, "toString");
    }
  }

  public renderSelectRow({
    options,
    getItemProps,
    highlightedIndex,
    selectedItem,
  }) {
    return ({ key, index, style: virtualisedStyles }) => {
      const Option = options[index];

      if (Option.optgroup) {
        return (
          <View key={key} css={virtualisedStyles} backgroundColor="faint">
            {Option.label}
          </View>
        );
      }

      return (
        <View key={key} css={virtualisedStyles}>
          <View
            height={30}
            {...getItemProps({
              index: Option.selectableIndex,
              item: Option,
              style: {
                backgroundColor:
                  highlightedIndex === Option.selectableIndex
                    ? "lightgray"
                    : "white",
                fontWeight: selectedItem === Option ? "bold" : "normal",
              },
            })}
          >
            {Option.label}
          </View>
        </View>
      );
    };
  }

  public render() {
    const { options } = this.props;

    const { flattenedOptions, selectableCount } = this.flattenOptions(options);

    return (
      <Downshift
        onChange={x => console.log(x)}
        itemToString={this.OptionToString}
        itemCount={selectableCount}
      >
        {({
          getToggleButtonProps,
          getItemProps,
          getRootProps,
          getMenuProps,
          isOpen,
          selectedItem,
          highlightedIndex,
        }) => (
          <View {...getRootProps({ refKey: "innerRef" })}>
            <Manager>
              <Reference>
                {({ ref }) => (
                  <button ref={ref} type="button" {...getToggleButtonProps()}>
                    <div data-isopen={isOpen}>
                      {JSON.stringify(selectedItem)}
                    </div>
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
                          style={style}
                          innerRef={ref}
                          transition="none"
                          paddingY={3}
                          zIndex="dropdown"
                          height={300}
                          width={250}
                        >
                          <AutoSizer>
                            {({ width, height }) => (
                              <List
                                width={width}
                                height={height}
                                rowCount={flattenedOptions.length}
                                rowHeight={this.calculateOptionHeight(
                                  flattenedOptions
                                )}
                                rowRenderer={this.renderSelectRow({
                                  options: flattenedOptions,
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
        )}
      </Downshift>
    );
  }

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

  private calculateOptionHeight(Options) {
    // Calculate the options for VirtualisedList
    return ({ index: OptionIndex }) => {
      const Option = Options[OptionIndex];
      const baseOptionHeight = 30;

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
