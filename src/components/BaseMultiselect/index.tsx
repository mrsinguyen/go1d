import Downshift from "downshift";
import * as React from "react";
import { Manager, Popper, Reference } from "react-popper";

import { ZIndex } from "../../foundations/foundation-types";
import { autobind } from "../../utils/decorators";
import safeInvoke from "../../utils/safeInvoke";
import ButtonMinimal from "../ButtonMinimal";
import Portal from "../Portal";
import Text from "../Text";
import Theme from "../Theme";
import View, { ViewProps } from "../View";

export interface BaseMultiselectProps extends ViewProps {
  /**
   * The selected elements of the component. If an object is supplied as options, this will be the value key.
   */
  value?: string[];
  options: string[];

  onInputChange?: (evt: React.SyntheticEvent<HTMLInputElement>) => void;

  onChange?: (evt: any) => void;

  /**
   * Optional function to call when a new option is created. Returns an optional promise to allow for asynchronous actions to finish before continuing.
   * Rejecting the promise will not add update the selector's value
   */
  onCreate?: (option: string) => Promise<any> | void;

  /**
   * Whether new options may be created. Defaults to true
   */
  createable?: boolean;

  /**
   * Use this to render a view. select is the element containing the text field. Useful if you want the select inside the component
   */
  customRenderer?: (
    select: React.ReactElement<any>,
    labelProps: { [key: string]: any }
  ) => React.ReactElement<any>;

  /**
   * Option rendered. Createable = true means the option is not in the list currently.
   */
  optionRenderer: (
    option: string,
    highlightedIndex: any,
    createable?: boolean
  ) => React.ReactNode;

  /**
   * Setting this to true forces the popup to close when a selection is made
   */
  closeOnSelection?: boolean;

  placeholder?: string;

  /**
   * The color for the item selected via keyboard. Defaults to faint
   */
  selectedColor?: string;
  dropdownZindex?: ZIndex | number | "";
}

interface State {
  search: string;
  value: string[];
  focused: boolean;
  forceClose: boolean;
}

class BaseMultiselect extends React.Component<BaseMultiselectProps, State> {
  public static defaultProps = {
    createable: true,
    closeOnSelection: false,
  };

  public state: State = {
    search: "",
    value: [],
    focused: false,
    forceClose: false,
  };

  private target: React.RefObject<any> = React.createRef();

  @autobind
  public createNewValue(evt: React.SyntheticEvent<HTMLButtonElement>) {
    const promise = safeInvoke(
      this.props.onCreate,
      evt.currentTarget.dataset.value
    );

    const value = evt.currentTarget.dataset.value;

    this.setState({
      forceClose: this.props.closeOnSelection,
    });

    if (promise) {
      promise.then(
        (ret?: any) => {
          this.selectValue({
            currentTarget: {
              dataset: {
                value: ret || value,
              },
            },
          } as any);
        },
        (rej?: any) => {
          if (rej === true) {
            this.setState({
              search: "",
            });
          }
        }
      );
    } else {
      this.selectValue({
        currentTarget: {
          dataset: {
            value,
          },
        },
      } as any);
    }
  }

  @autobind
  public inputChange(evt: React.SyntheticEvent<HTMLInputElement>) {
    this.setState({
      search: evt.currentTarget.value,
      forceClose: false,
    });

    safeInvoke(this.props.onInputChange, evt);
  }

  @autobind
  public handleFocus(evt: React.SyntheticEvent<HTMLInputElement>) {
    this.setState({
      focused: true,
      forceClose: false,
    });
    safeInvoke(this.props.onFocus, evt);
  }

  @autobind
  public handleBlur(evt: React.SyntheticEvent<HTMLInputElement>) {
    this.setState({
      forceClose: false,
    });
    safeInvoke(this.props.onBlur, evt);
  }

  @autobind
  public handleClickOuter(...args) {
    this.setState({
      search: "",
      focused: false,
    });
  }

  @autobind
  public selectValue(evt: React.SyntheticEvent<HTMLButtonElement>) {
    const value = this.props.value || this.state.value;

    this.setState({
      forceClose: this.props.closeOnSelection,
    });

    this.setState({
      value: [...value, evt.currentTarget.dataset.value.trim()],
      search: "",
    });

    safeInvoke(this.props.onChange, {
      target: {
        name: this.props.name,
        value: [...value, evt.currentTarget.dataset.value.trim()],
      },
    });
  }

  public renderOption(option: string, downshiftProps, creating = false) {
    const { selectedColor = "faint" } = this.props;

    return (
      <ButtonMinimal
        width="100%"
        height="auto"
        minHeight="40px"
        backgroundColor={
          downshiftProps.highlightedIndex === downshiftProps.index
            ? selectedColor
            : undefined
        }
        onClick={creating ? this.createNewValue : this.selectValue}
        data-value={option}
        justifyContent="flex-start"
      >
        {this.props.optionRenderer(option, downshiftProps, creating)}
      </ButtonMinimal>
    );
  }

  @autobind
  public handleSelect(option: string) {
    const value = this.props.value || this.state.value;
    const existingValue = !!value.find(v => v === option);

    this.setState({
      forceClose: this.props.closeOnSelection,
    });

    const evtOption = {
      currentTarget: {
        dataset: {
          value: option,
        },
      },
    };

    if (existingValue) {
      this.selectValue(evtOption as any);
    } else {
      this.createNewValue(evtOption as any);
    }
  }

  @autobind
  public handleDelete(evt: React.SyntheticEvent<HTMLButtonElement>) {
    const value = this.props.value || this.state.value;
    const valueToDelete = evt.currentTarget.dataset.value;

    const newValue = value.filter(v => v !== valueToDelete);

    this.setState({ value: newValue, focused: false });

    safeInvoke(this.props.onChange, {
      target: {
        name: this.props.name,
        value: newValue,
      },
    });
  }

  public render() {
    const {
      value = this.state.value,
      borderRadius,
      id,
      optionRenderer,
      options = [],
      disabled,
      onFocus,
      onBlur,
      customRenderer,
      createable = true,
      selectedColor,
      dropdownZindex,
      ...props
    } = this.props;

    const formattedSearch = this.state.search.trim().toLowerCase();

    const filteredOptions = options.filter(option => {
      option = option
        .toString()
        .trim()
        .toLowerCase();
      return (
        option.includes(formattedSearch) &&
        !value.find(
          v =>
            v
              .toString()
              .trim()
              .toLowerCase() === option
        )
      );
    });

    const createAvailable =
      this.props.createable &&
      this.state.search.trim() !== "" &&
      !value.find(
        v =>
          v
            .toString()
            .trim()
            .toLowerCase() === formattedSearch
      ) &&
      !filteredOptions.find(
        v =>
          v
            .toString()
            .trim()
            .toLowerCase() === formattedSearch
      );

    const itemToString = (item: any) => item;

    return (
      <Theme.Consumer>
        {({ colors }) => (
          <Downshift
            defaultHighlightedIndex={0}
            itemToString={itemToString}
            isOpen={
              !this.props.disabled &&
              this.state.focused === true &&
              !this.state.forceClose &&
              (filteredOptions.length > 0 || createAvailable)
            }
            onOuterClick={this.handleClickOuter}
            onSelect={this.handleSelect}
          >
            {({
              getItemProps,
              getMenuProps,
              getRootProps,
              getLabelProps,
              isOpen,
              highlightedIndex,
              getInputProps,
              selectedItem,
              ...downshiftParams
            }) => (
              <View {...getRootProps({ refKey: "innerRef" })}>
                <View innerRef={this.target}>
                  <Manager>
                    <Reference>
                      {({ ref }) => (
                        <View innerRef={ref}>
                          {customRenderer ? (
                            customRenderer(
                              <SelectInput
                                {...props}
                                {...getInputProps()}
                                parentListeners={{
                                  onChange: this.inputChange,
                                  handleBlur: this.handleBlur,
                                  handleFocus: this.handleFocus,
                                }}
                                colors={colors}
                                keyPress={this.keyPress}
                                name={this.props.name}
                                disabled={this.props.disabled}
                                value={this.state.search}
                              />,
                              getLabelProps()
                            )
                          ) : (
                            <SelectInput
                              {...props}
                              {...getInputProps()}
                              parentListeners={{
                                onChange: this.inputChange,
                                handleBlur: this.handleBlur,
                                handleFocus: this.handleFocus,
                              }}
                              keyPress={this.keyPress}
                              colors={colors}
                              name={this.props.name}
                              disabled={this.props.disabled}
                              value={this.state.search}
                            />
                          )}
                        </View>
                      )}
                    </Reference>
                    {isOpen &&
                      !this.props.disabled &&
                      this.state.focused &&
                      (filteredOptions.length > 0 || createAvailable) && (
                        <Portal>
                          <Popper placement={"bottom-start"}>
                            {({ ref, style }) => (
                              <View
                                {...getMenuProps({
                                  refKey: "innerRef",
                                })}
                                overflow="hidden"
                              >
                                <View
                                  backgroundColor="background"
                                  boxShadow="strong"
                                  borderRadius={3}
                                  style={{
                                    ...style,
                                    width: this.target.current
                                      ? this.target.current.offsetWidth
                                      : "auto",
                                    overflowY: "scroll",
                                  }}
                                  maxHeight={350}
                                  innerRef={ref}
                                  transition="none"
                                  paddingY={3}
                                  zIndex={dropdownZindex || "dropdown"}
                                >
                                  {createAvailable &&
                                    this.renderOption(
                                      this.state.search.trim(),
                                      {
                                        ...getItemProps({
                                          key: formattedSearch,
                                          index: 0,
                                          item: this.state.search.trim(),
                                        }),
                                        highlightedIndex,
                                        index: 0,
                                      },
                                      true
                                    )}
                                  {filteredOptions.map((item, index) =>
                                    this.renderOption(item.toString(), {
                                      ...getItemProps({
                                        key: item,
                                        index: createAvailable
                                          ? index + 1
                                          : index,
                                        item,
                                      }),
                                      index: createAvailable
                                        ? index + 1
                                        : index,
                                      highlightedIndex,
                                    })
                                  )}
                                </View>
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
        )}
      </Theme.Consumer>
    );
  }

  private keyPress(evt: any) {
    if (evt.which === 13) {
      // Stop the form submitting
      evt.preventDefault();
    }
  }
}

const SelectInput: React.SFC<any> = ({
  id,
  disabled,
  colors,
  ref,
  parentListeners,
  keyPress,
  name,
  value,
  closeOnSelection,
  onInputChange,
  dropdownZindex,
  ...props
}) => {
  const onChange = (evt: any) => {
    safeInvoke(parentListeners.onChange, evt);
    safeInvoke(props.onChange, evt);
  };

  const handleFocus = (evt: any) => {
    safeInvoke(parentListeners.handleFocus, evt);
    safeInvoke(props.handleFocus, evt);
  };
  const handleBlur = (evt: any) => {
    safeInvoke(parentListeners.handleBlur, evt);
    safeInvoke(props.handleBlur, evt);
  };

  return (
    <Text
      {...props}
      id={id}
      element="input"
      type={"text"}
      lineHeight="ui"
      fontSize={2}
      paddingY={2}
      color="inherit"
      value={value}
      onChange={onChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyPress={keyPress}
      disabled={disabled}
      size="1"
      innerRef={ref || undefined}
      data-testid="inputElement"
      name={name}
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
  );
};

export default BaseMultiselect;
