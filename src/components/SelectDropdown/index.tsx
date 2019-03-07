import Downshift from "downshift";
import memoize from "memoize-one";
import * as React from "react";
import { Manager, Popper, Reference } from "react-popper";

import { ZIndex } from "../../foundations/foundation-types";
import { autobind } from "../../utils/decorators";
import safeInvoke from "../../utils/safeInvoke";
import ButtonMinimal from "../ButtonMinimal";
import Portal from "../Portal";
import SearchInput from "../SearchInput";
import Text from "../Text";
import View, { ViewProps } from "../View";
import Options from "./Options";

export interface SelectDropdownItem {
  value: string | number;
  label: string;
  [key: string]: any;
}

export interface SelectDropdownProps extends ViewProps {
  /**
   * The selected elements of the component. If an object is supplied as options, this will be the value key.
   */
  options: SelectDropdownItem[];

  /**
   * value is used to process the update and return to the parent
   */
  value?: string | string[];

  /**
   * Option rendered. Createable = true means the option is not in the list currently.
   */
  optionRenderer: (item: SelectDropdownItem) => React.ReactNode;

  /**
   * Searchbar renderer, search bar is shown if handleSearchChange is defined
   */
  handleSearchChange?: (
    search: string,
    evt: React.SyntheticEvent<HTMLElement>
  ) => void;
  searchTerm?: string;
  searchPlaceholder?: string;

  onChange?: (evt: any) => void;
  isMulti?: boolean;

  /**
   * Setting this to true forces the popup to close when a selection is made
   */
  closeOnSelection?: boolean;

  /**
   * Prompt that is displayed to show that a new option can be created
   */
  renderCreateOption?: () => React.ReactNode;
  handleCreate?: (option: string) => Promise<any> | void;

  children: ((params: any) => React.ReactNode);

  selectedColor?: string;
  name?: string;
  container?: React.RefObject<any>;
  dropdownZindex?: ZIndex | number | "";
}

interface State {
  focused: boolean;
  forceClose: boolean;
  search?: string;
}

const filter = memoize((list, filterText) =>
  list.filter(item => item.value.includes(filterText))
);

class SelectDropdown extends React.PureComponent<SelectDropdownProps, State> {
  public static defaultProps = {
    createable: true,
    closeOnSelection: false,
    searchTerm: "",
    options: [],
  };

  public state: State = {
    focused: false,
    forceClose: false,
  };

  private target: React.RefObject<any> = React.createRef();

  @autobind
  public handleClickOuter(...args) {
    this.setState({
      focused: false,
    });
  }

  @autobind
  public handleMultiValueChange(selection: string | number) {
    let existingValues = this.props.value;
    if (!Array.isArray(existingValues)) {
      existingValues = [existingValues];
    }

    const existingValueIndex = existingValues.findIndex(
      (existingValue: string) => existingValue === selection
    );

    if (existingValueIndex !== -1) {
      return existingValues.filter(
        (existingValue: string) => existingValue !== selection
      );
    } else {
      return [...existingValues, selection];
    }
  }

  @autobind
  public handleOptionClick(option: SelectDropdownItem | string) {
    if (typeof option === "string") {
      this.create({
        target: { value: option, name: this.props.name, id: this.props.id },
        currentTarget: {
          value: option,
          name: this.props.name,
          id: this.props.id,
        },
      } as any);

      return;
    }
    this.setState({
      forceClose: this.props.closeOnSelection,
    });

    let returnValue: any = option.value;

    if (this.props.isMulti) {
      returnValue = this.handleMultiValueChange(option.value);
    }

    safeInvoke(this.props.onChange, {
      target: { name: this.props.name, value: returnValue },
    });
  }

  @autobind
  public create(evt: React.SyntheticEvent<HTMLButtonElement>) {
    this.setState({
      forceClose: this.props.closeOnSelection,
    });
    safeInvoke(this.props.onCreate, evt);
  }

  @autobind
  public optionRenderer(
    item: SelectDropdownItem,
    index: number,
    getItemProps: any
  ) {
    const { selectedColor = "faint" } = this.props;

    return (
      <ButtonMinimal
        width="100%"
        height="auto"
        minHeight="40px"
        borderRadius={0}
        backgroundColor={
          getItemProps.highlightedIndex === getItemProps.index
            ? selectedColor
            : undefined
        }
        data-value={item.value}
        justifyContent="flex-start"
        {...getItemProps}
      >
        {safeInvoke(this.props.optionRenderer, item) || (
          <Text>{item.label}</Text>
        )}
      </ButtonMinimal>
    );
  }

  @autobind
  public handleSearchChange(evt: any) {
    let value = "";
    if (evt && evt !== "") {
      value = evt.target.value;
    }

    this.setState({
      search: value,
    });
    this.props.handleSearchChange(value, evt);
  }

  @autobind
  public renderSearch(getItemProps: any) {
    const { value, onMouseDown, disabled, ...props } = getItemProps;
    return (
      <View {...props} marginX={3}>
        <SearchInput
          id="search"
          name="search"
          placeholder={this.props.searchPlaceholder || "Search..."}
          onSubmit={this.props.handleSearchChange}
          onChange={this.handleSearchChange}
          onClear={this.handleSearchChange}
        />
      </View>
    );
  }

  @autobind
  public renderCreateOption(item: string, index: number, getItemProps: any) {
    const { selectedColor = "faint" } = this.props;
    return (
      <ButtonMinimal
        width="100%"
        height="auto"
        minHeight="40px"
        backgroundColor={
          getItemProps.highlightedIndex === getItemProps.index
            ? selectedColor
            : undefined
        }
        data-value={item}
        justifyContent="flex-start"
        {...getItemProps}
      >
        {this.props.renderCreateOption()}
      </ButtonMinimal>
    );
  }

  public itemToString(item: any) {
    return item;
  }

  public render() {
    const {
      options: rawOptions,
      children,
      handleSearchChange,
      searchTerm,
      renderCreateOption,
      isOpen: dropdownOpen,
      container,
      dropdownZindex,
    } = this.props;

    const options = this.state.search
      ? filter(rawOptions, this.state.search)
      : rawOptions;

    const createAvailable = renderCreateOption && searchTerm.trim() !== "";
    const firstSelectableOptionIndex =
      0 + (handleSearchChange ? 1 : 0) + (createAvailable ? 1 : 0);

    return (
      <Downshift
        isOpen={
          dropdownOpen !== undefined
            ? dropdownOpen && !!(options.length || createAvailable)
            : undefined
        }
        defaultHighlightedIndex={0}
        itemToString={this.itemToString}
        onOuterClick={this.handleClickOuter}
        onSelect={this.handleOptionClick}
        data-testid="select-dropdown"
      >
        {({
          getItemProps,
          getMenuProps,
          getRootProps,
          getLabelProps,
          isOpen,
          highlightedIndex,
          selectedItem,
          ...downshiftParams
        }) => (
          <View {...getRootProps({ refKey: "innerRef" })}>
            <View innerRef={this.target}>
              <Manager>
                <Reference>
                  {({ ref }) =>
                    children({
                      ref,
                      ...downshiftParams,
                    })
                  }
                </Reference>
                {isOpen &&
                  (firstSelectableOptionIndex > 0 || options.length > 0) && (
                    <Portal>
                      <Popper placement={"bottom-start"}>
                        {({ ref, style, scheduleUpdate }) => (
                          <View
                            {...getMenuProps({
                              refKey: "innerRef",
                            })}
                            overflow="hidden"
                          >
                            <Options
                              renderSearch={this.renderSearch}
                              handleSearchChange={handleSearchChange}
                              searchTerm={searchTerm}
                              renderCreateOption={this.renderCreateOption}
                              container={container}
                              createAvailable={createAvailable}
                              style={style}
                              innerRef={ref}
                              dropdownZindex={dropdownZindex}
                              optionRenderer={this.optionRenderer}
                              options={options}
                              highlightedIndex={highlightedIndex}
                              firstSelectableOptionIndex={
                                firstSelectableOptionIndex
                              }
                              scheduleUpdate={scheduleUpdate}
                              getItemProps={getItemProps}
                            />
                          </View>
                        )}
                      </Popper>
                    </Portal>
                  )}
              </Manager>
            </View>
          </View>
        )}
      </Downshift>
    );
  }
}

export default SelectDropdown;
