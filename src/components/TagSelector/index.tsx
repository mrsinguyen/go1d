import Downshift from "downshift";
import * as React from "react";
import { Manager, Popper, Reference } from "react-popper";
import { ButtonMinimal, Theme } from "../..";
import { autobind } from "../../utils/decorators";
import BaseMultiselect, { BaseMultiselectProps } from "../BaseMultiselect";
// import Dropdown from "../Dropdown";
import Portal from "../Portal";
import Text from "../Text";
import View from "../View";

class TagSelector extends React.Component<
  BaseMultiselectProps,
  {
    value: Array<{ value: string; label: string } | string>;
    isFocused: boolean;
    search: string;
  }
> {
  public state = {
    value: [],
    isFocused: false,
    search: "",
  };

  @autobind
  public inputChange(evt: React.SyntheticEvent<HTMLInputElement>) {
    this.setState({
      search: evt.currentTarget.value,
    });
  }

  public getBorderColor() {
    const { isFocused } = this.state;
    const { error, borderColor } = this.props;

    if (error) {
      return "danger";
    }
    if (isFocused) {
      return "accent";
    }

    return borderColor ? borderColor : "soft";
  }

  @autobind
  public handleFocus(evt: React.SyntheticEvent<HTMLInputElement>) {
    this.setState({ isFocused: true });
  }

  @autobind
  public handleBlur(evt: React.SyntheticEvent<HTMLInputElement>) {
    this.setState({ isFocused: false });
  }

  public createChildren({ ref, getToggleButtonProps }: any) {
    return (
      <ButtonMinimal
        data-testid="toggle"
        iconName="Ellipsis"
        innerRef={ref}
        {...getToggleButtonProps()}
      />
    );
  }

  public renderOption(option: any) {
    return typeof option === "string" ? (
      <Text>{option}</Text>
    ) : (
      <Text>{option.label}</Text>
    );
  }

  public render() {
    const {
      value = this.state.value,
      borderRadius,
      id,
      optionRenderer = this.renderOption,
      options = [],
      disabled,
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
              <View {...getRootProps({ refKey: "innerRef" })}>
                <Manager>
                  <Reference>
                    {({ ref }) => (
                      <View
                        position="relative"
                        flexDirection="row"
                        flexWrap="wrap"
                        borderRadius={borderRadius}
                        backgroundColor="background"
                        paddingX={2}
                        paddingY={2}
                        border={1}
                        innerRef={ref}
                        borderColor={this.getBorderColor()}
                        boxShadow="inner"
                        alignItems="center"
                        htmlFor={id}
                        opacity={disabled ? "disabled" : null}
                      >
                        {value.map(v => (
                          <View
                            flexDirection="row"
                            alignItems="center"
                            borderRadius={borderRadius}
                            borderColor={this.props.borderColor || "soft"}
                            backgroundColor="background"
                            paddingX={2}
                            paddingY={2}
                            marginRight={2}
                            border={1}
                            boxShadow="inner"
                            data-value={typeof v === "string" ? v : v.value}
                          >
                            <Text fontSize={2} color="inherit">
                              {typeof v === "string" ? v : v.label}
                            </Text>
                            <ButtonMinimal
                              marginLeft={2}
                              iconName="Cross"
                              size="sm"
                              round={true}
                            />
                          </View>
                        ))}
                        <Text
                          id={id}
                          element={"input"}
                          placehlder="Type to "
                          type={"text"}
                          lineHeight="ui"
                          fontSize={2}
                          paddingY={2}
                          color="inherit"
                          onChange={this.inputChange}
                          onFocus={this.handleFocus}
                          onBlur={this.handleBlur}
                          onKeyPress={this.keyPress}
                          disabled={disabled}
                          size="1"
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

                        <BaseMultiselect
                          options={options}
                          value={value}
                          css={{ display: "none" }}
                        />
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
                              style={style}
                              innerRef={ref}
                              transition="none"
                              paddingY={3}
                              zIndex="dropdown"
                            >
                              {// tslint:disable-next-line:no-console
                              console.log(ref())}
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

export default TagSelector;
