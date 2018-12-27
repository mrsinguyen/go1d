import Downshift from "downshift";
import * as React from "react";
import { Manager, Popper, Reference } from "react-popper";
import { Theme, View } from "../..";
import { autobind } from "../../utils/decorators";
import safeInvoke from "../../utils/safeInvoke";
import { BaseProps } from "../Base";
import ButtonMinimal from "../ButtonMinimal";
import Portal from "../Portal";
import Text from "../Text";

export interface BaseMultiselectProps extends BaseProps {
  /**
   * The selected elements of the component. If an object is supplied as options, this will be the value key.
   */
  value: string[];
  options: Array<{ value: string; label: string } | string>;
  onChange?: (evt: any) => void;

  /**
   * Optional function to call when a new option is created.
   */
  onCreate?: (option: string) => void;
  /**
   * Explicitly define what kind of array value is. This will only be used if it cannot be inferred. Defaults to string
   */

  valueType: "string" | "object";

  /**
   * Whether new options may be created. Defaults to true
   */
  createable?: boolean;

  /**
   * Use this to render a view. select is the element containing the text field. Useful if you want the select inside the component
   */
  customRenderer?: (select: React.ReactElement<any>) => React.ReactElement<any>;

  /**
   * Option rendered. Createable = true means the option is not in the list currently.
   */
  optionRenderer?: (
    option: { value: string; label: string } | string,
    highlightedIndex: any,
    createable?: boolean
  ) => React.ReactNode;
}

interface State {
  search: string;
  value: Array<{ value: string; label: string } | string>;
  focused: boolean;
}

class BaseMultiselect extends React.Component<BaseMultiselectProps, State> {
  public static defaultProps = {
    valueType: "string",
    createable: true,
  };

  public state = {
    search: "",
    value: [],
    focused: false,
  };

  private target: React.RefObject<any> = React.createRef();

  @autobind
  public inputChange(evt: React.SyntheticEvent<HTMLInputElement>) {
    this.setState({
      search: evt.currentTarget.value,
    });
  }

  @autobind
  public handleFocus(evt: React.SyntheticEvent<HTMLInputElement>) {
    this.setState({
      focused: true,
    });
    safeInvoke(this.props.handleFocus, evt);
  }

  @autobind
  public handleBlur(evt: React.SyntheticEvent<HTMLInputElement>) {
    safeInvoke(this.props.handleBlur, evt);
  }

  @autobind
  public handleClickOuter() {
    this.setState({
      search: "",
      focused: false,
    });
  }

  @autobind
  public onChange(evt: React.SyntheticEvent<HTMLSelectElement>) {
    safeInvoke(this.props.onChange, evt);
  }

  @autobind
  public createNewValue(evt: React.SyntheticEvent<HTMLButtonElement>) {
    if (this.props.onCreate) {
      safeInvoke(this.props.onCreate(evt.currentTarget.dataset.value));
    }
    this.selectValue(evt);
  }

  @autobind
  public selectValue(evt: React.SyntheticEvent<HTMLButtonElement>) {
    const value = this.props.value || this.state.value;

    this.setState({
      value: [...value, evt.currentTarget.dataset.value],
      search: "",
    });

    safeInvoke(this.props.onChange, {
      target: {
        name: this.props.name,
        value: [...value, evt.currentTarget.dataset.value],
      },
    });
  }

  public renderOption(
    option: { value: string; label: string } | string,
    highlightedIndex,
    creating = false
  ) {
    return (
      <ButtonMinimal
        width="100%"
        onClick={creating ? this.createNewValue : this.selectValue}
        data-value={typeof option === "string" ? option : option.value}
        justifyContent="flex-start"
      >
        {this.props.optionRenderer(option, highlightedIndex, creating)}
      </ButtonMinimal>
    );
  }

  @autobind
  public handleDelete(evt: React.SyntheticEvent<HTMLButtonElement>) {
    const value = this.props.value || this.state.value;
    const valueToDelete = evt.currentTarget.dataset.value;

    const newValue = value.filter(
      v =>
        typeof v === "string" ? v !== valueToDelete : v.value !== valueToDelete
    );

    this.setState({ value: newValue });

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
      handleFocus,
      handleBlur,
      customRenderer,
      createable = true,
      ...props
    } = this.props;

    const filteredOptions = options.filter(option => {
      if (typeof option === "string") {
        return (
          option.includes(this.state.search) &&
          !value.find(
            v =>
              typeof v === "string"
                ? v === option
                : v.value === option || v.label === option
          )
        );
      } else {
        return (
          (option.value.includes(this.state.search) ||
            option.label.includes(this.state.search)) &&
          !value.find(
            v =>
              typeof v === "string"
                ? v === option.value
                : v.value === option.value
          )
        );
      }
    });

    const createAvailable =
      this.props.createable &&
      this.state.search !== "" &&
      !value.find(
        v =>
          typeof v === "string"
            ? v === this.state.search
            : v.value === this.state.search
      ) &&
      !filteredOptions.find(
        v =>
          typeof v === "string"
            ? v === this.state.search
            : v.value === this.state.search
      );

    return (
      <Theme.Consumer>
        {({ colors }) => (
          <Downshift
            // tslint:disable-next-line:jsx-no-lambda
            itemToString={(item: any) =>
              item && (typeof item === "string" ? item : item.label)
            }
            isOpen={
              !this.props.disabled &&
              this.state.focused === true &&
              (filteredOptions.length > 0 || createAvailable)
            }
            onOuterClick={this.handleClickOuter}
            // highlightedIndex={-1}
            // tslint:disable-next-line:no-console
            onSelect={console.log}
          >
            {({
              getItemProps,
              getMenuProps,
              getRootProps,
              isOpen,
              highlightedIndex,
              getInputProps,
              ...downshiftParams
            }) => (
              <View
                {...getRootProps({ refKey: "innerRef" })}
                innerRef={this.target}
              >
                <Manager>
                  <Reference>
                    {({ ref }) => (
                      <View innerRef={ref}>
                        {customRenderer ? (
                          customRenderer(
                            <SelectInput
                              {...props}
                              {...getInputProps()}
                              colors={colors}
                              handleBlur={this.handleBlur}
                              handleFocus={this.handleFocus}
                              inputChange={this.inputChange}
                              keyPress={this.keyPress}
                              name={this.props.name}
                              disabled={this.props.disabled}
                              value={this.state.search}
                            />
                          )
                        ) : (
                          <SelectInput
                            {...props}
                            {...getInputProps()}
                            handleBlur={this.handleBlur}
                            handleFocus={this.handleFocus}
                            inputChange={this.inputChange}
                            keyPress={this.keyPress}
                            colors={colors}
                            ref={ref}
                            name={this.props.name}
                            disabled={this.props.disabled}
                            value={this.state.search}
                          />
                        )}
                      </View>
                    )}
                  </Reference>
                  {isOpen && (
                    <Portal>
                      <Popper placement={"bottom-start"}>
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
                              style={{
                                ...style,
                                width: this.target.current
                                  ? this.target.current.offsetWidth
                                  : "auto",
                              }}
                              innerRef={ref}
                              transition="none"
                              paddingY={3}
                              zIndex="dropdown"
                            >
                              {createAvailable &&
                                this.renderOption(
                                  this.state.search,
                                  {
                                    ...getItemProps({
                                      key: this.state.search,
                                      index: -1,
                                      item: this.state.search,
                                    }),
                                    highlightedIndex,
                                  },
                                  true
                                )}
                              {filteredOptions.map((item, index) =>
                                this.renderOption(item, {
                                  ...getItemProps({
                                    key:
                                      typeof item === "string"
                                        ? item
                                        : item.value,
                                    index,
                                    item,
                                  }),
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
            )}
          </Downshift>
        )}
      </Theme.Consumer>
    );
  }

  private keyPress(evt: any) {
    if (evt.which === 13) {
      evt.preventDefault();
    } else {
      // TODO: trigger select or create
    }
  }
}

const SelectInput: React.SFC<any> = ({
  id,
  disabled,
  colors,
  ref,
  handleBlur,
  handleFocus,
  inputChange,
  keyPress,
  name,
  value,
  ...props
}) => (
  <Text
    {...props}
    id={id}
    element={"input"}
    placehlder="Type to "
    type={"text"}
    lineHeight="ui"
    fontSize={2}
    paddingY={2}
    color="inherit"
    value={value}
    // tslint:disable-next-line:jsx-no-lambda
    onChange={(evt: any) => {
      inputChange(evt);
      props.onChange(evt);
    }}
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

export default BaseMultiselect;
