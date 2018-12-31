import * as React from "react";
import { ButtonMinimal } from "../..";
import { autobind } from "../../utils/decorators";
import BaseMultiselect from "../BaseMultiselect";

import safeInvoke from "../../utils/safeInvoke";
import Text from "../Text";
import View, { ViewProps } from "../View";

interface State {
  value: string[];
  isFocused: boolean;
  search: string;
}

export interface TagSelectorProps extends ViewProps {
  optionRenderer?: (
    option: string,
    downshiftProps: { [key: string]: any },
    creating?: boolean
  ) => React.ReactNode;

  /**
   * The selected elements of the component.
   */
  value?: string[];
  options: string[];

  onInputChange?: (evt: React.SyntheticEvent<HTMLInputElement>) => void;

  onChange?: (evt: any) => void;

  /**
   * Optional function to call when a new option is created. Returns a promise to allow for asynchronous actions to finish before continuing
   */
  onCreate?: (option: string) => Promise<any>;

  /**
   * Whether new options may be created. Defaults to true
   */
  createable?: boolean;

  placeholder?: string;
}

class TagSelector extends React.Component<TagSelectorProps, State> {
  public state: State = {
    value: [],
    isFocused: false,
    search: "",
  };

  private target: React.RefObject<BaseMultiselect> = React.createRef();

  @autobind
  public inputChange(evt: React.SyntheticEvent<HTMLInputElement>) {
    this.setState({
      search: evt.currentTarget.value,
    });
  }

  @autobind
  public onChange(evt) {
    this.setState({
      value: evt.target.value,
    });

    safeInvoke(this.props.onChange, evt);
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

  @autobind
  public renderOption(option: string, downshiftProps, creating = false) {
    if (creating) {
      return <Text>{`Create new tag "${option}"`}</Text>;
    }

    return <Text>{option}</Text>;
  }

  @autobind
  public renderSelect(Select: React.ReactNode, labelProps: any) {
    const {
      value = this.state.value,
      borderRadius = 2,
      id,
      disabled,
    } = this.props;

    return (
      <View
        element="label"
        position="relative"
        flexDirection="row"
        flexWrap="wrap"
        borderRadius={borderRadius}
        backgroundColor="background"
        paddingX={2}
        minHeight={45}
        paddingY={2}
        border={1}
        borderColor={this.getBorderColor()}
        boxShadow="inner"
        alignItems="center"
        htmlFor={id}
        opacity={disabled ? "disabled" : null}
        {...labelProps}
      >
        {value.map((v, i) => (
          <View
            key={i}
            flexDirection="row"
            alignItems="center"
            borderRadius={borderRadius}
            borderColor={this.props.borderColor || "soft"}
            backgroundColor="background"
            paddingX={4}
            paddingY={3}
            marginRight={2}
            border={1}
            boxShadow="crisp"
            data-value={v}
          >
            <Text fontSize={1} color="inherit" marginRight={2}>
              {v}
            </Text>
            <ButtonMinimal
              marginLeft={2}
              iconName="Close"
              size="sm"
              width={16}
              height={16}
              paddingY={0}
              round={true}
              data-value={v}
              onClick={
                this.target.current ? this.target.current.handleDelete : null
              }
            />
          </View>
        ))}
        {Select}
      </View>
    );
  }

  public render() {
    const {
      value = this.state.value || [],
      optionRenderer = this.renderOption,
      options = [],
      borderRadius,
      id,
      disabled,
      onChange,
      ...props
    } = this.props;

    return (
      <BaseMultiselect
        {...props}
        ref={this.target}
        customRenderer={this.renderSelect}
        value={value}
        placeholder={value && value.length ? "" : "Type to create a tag"}
        options={options}
        onChange={this.onChange}
        optionRenderer={optionRenderer}
        handleFocus={this.handleFocus}
        handleBlur={this.handleBlur}
      />
    );
  }
}

export default TagSelector;
