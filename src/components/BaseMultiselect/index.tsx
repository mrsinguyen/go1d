import Downshift from "downshift";
import * as React from "react";
import { Manager, Popper, Reference } from "react-popper";
import { Theme, View } from "../..";
import { autobind } from "../../utils/decorators";
import safeInvoke from "../../utils/safeInvoke";
import { BaseProps } from "../Base";
import Portal from "../Portal";
import Text from "../Text";

export interface BaseMultiselectProps extends BaseProps {
  /**
   * The selected elements of the component
   */
  value: Array<{ value: string; label: string } | string>;
  options: Array<{ value: string; label: string } | string>;
  onChange?: (evt: any) => void;
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
}

class BaseMultiselect extends React.Component<
  BaseMultiselectProps,
  {
    search: string;
    value: Array<{ value: string; label: string } | string>;
  }
> {
  public static defaultProps = {
    valueType: "string",
  };

  public target: React.RefObject<View> = React.createRef();

  public state = {
    search: "",
    value: [],
  };

  @autobind
  public inputChange(evt: React.SyntheticEvent<HTMLInputElement>) {
    this.setState({
      search: evt.currentTarget.value,
    });
  }

  @autobind
  public handleFocus(evt: React.SyntheticEvent<HTMLInputElement>) {
    safeInvoke(this.props.handleFocus, evt);
  }

  @autobind
  public handleBlur(evt: React.SyntheticEvent<HTMLInputElement>) {
    safeInvoke(this.props.handleBlur, evt);
  }

  @autobind
  public onChange(evt: React.SyntheticEvent<HTMLSelectElement>) {
    safeInvoke(this.props.onChange, evt);
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

    return (
      <Theme.Consumer>
        {({ colors }) => (
          <Downshift
            // tslint:disable-next-line:jsx-no-lambda
            itemToString={(item: any) =>
              typeof item === "string" ? item : item.label
            }
          >
            {({
              getItemProps,
              getMenuProps,
              getRootProps,
              isOpen,
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
                              {...this.props}
                              colors={colors}
                              handleBlur={this.handleBlur}
                              handleFocus={this.handleFocus}
                              inputChange={this.inputChange}
                              keyPress={this.keyPress}
                            />
                          )
                        ) : (
                          <SelectInput
                            {...this.props}
                            handleBlur={this.handleBlur}
                            handleFocus={this.handleFocus}
                            inputChange={this.inputChange}
                            keyPress={this.keyPress}
                            colors={colors}
                            ref={ref}
                          />
                        )}
                      </View>
                    )}
                  </Reference>
                  {this.state.search !== "" && (
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
                              {filteredOptions.map((item, i) =>
                                optionRenderer(item, i, getItemProps)
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
}) => (
  <Text
    id={id}
    element={"input"}
    placehlder="Type to "
    type={"text"}
    lineHeight="ui"
    fontSize={2}
    paddingY={2}
    color="inherit"
    onChange={inputChange}
    onFocus={handleFocus}
    onBlur={handleBlur}
    onKeyPress={keyPress}
    disabled={disabled}
    size="1"
    innerRef={ref || undefined}
    data-testid="inputElement"
    flexGrow={1}
    flexBasis="auto"
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
