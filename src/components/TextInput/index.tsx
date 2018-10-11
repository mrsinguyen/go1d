import * as React from "react";
import Base from "../Base";
import Icon from "../Icon";
import Text from "../Text";
import Theme from "../Theme";
import View, { Props as ViewProps } from "../View";
import { isFunction } from "lodash";

interface Props extends ViewProps {
  backgroundColor?: string;
  color?: string;
  name?: string;
  size?: string;
  onChange?: ({ target: HTMLElement }) => void;
  onBlur?: ({ target: HTMLElement }) => void;
  onFocus?: ({ target: HTMLElement }) => void;
  onKeyDown?: ({ target: HTMLElement }) => void;
  onClick?: ({ target: HTMLElement }) => void;
  label?: string;
  description?: string;
  value?: string;
  placeholder?: string;
  maxLength?: number;
  minLength?: number;
  disabled?: boolean;
  required?: boolean;
  prefixIcon?: string;
  readOnly?: boolean;
  tabIndex?: string;
}

class TextInput extends React.Component<Props, any> {
  public state = {
    isFocused: false,
  };

  private inputRef: HTMLElement = null;

  // Focus State Handlers
  public focus() {
    if (this.inputRef) {
      this.inputRef.focus();
    }
  }

  public handleOnBlur = (event: React.SyntheticEvent<HTMLElement>) => {
    const { onBlur } = this.props;
    this.setState({
      isFocused: false,
    });
    if (isFunction(onBlur)) {
      onBlur(event);
    }
  };

  public handleOnFocus = (event: React.SyntheticEvent<HTMLElement>) => {
    const { onFocus } = this.props;
    this.setState({
      isFocused: true,
    });
    if (isFunction(onFocus)) {
      onFocus(event);
    }
  };

  public handleOnKeyDown = (event: React.SyntheticEvent<HTMLElement>) => {
    const { onKeyDown, disabled } = this.props;
    const { isFocused } = this.state;
    if (disabled) {
      return;
    }
    if (isFunction(isFocused)) {
      onKeyDown(event);
    }
  };

  public setInputRef = (ref: HTMLElement) => {
    this.inputRef = ref;
  };

  // Mouse Handlers
  public handleOnClick = (event: React.SyntheticEvent<HTMLElement>) => {
    const { disabled, onClick } = this.props;
    if (disabled) {
      return;
    }
    event.stopPropagation();
    event.preventDefault();
    this.focus();
    if (isFunction(onClick)) {
      onClick(event);
    }
  };

  public render() {
    const {
      disabled,
      label,
      description,
      required,
      name,
      size = "md",
      onChange,
      css,
      value,
      backgroundColor = "background",
      color = "default",
      placeholder = "",
      maxLength,
      minLength,
      readOnly,
      tabIndex,
      prefixIcon,
      width,
      ...props
    } = this.props;

    return (
      <Theme.Consumer>
        {({ colors, spacing, opacity }) => (
          <View
            css={{
              position: "relative",
              opacity: disabled ? opacity.disabled : 1,
              pointerEvents: disabled ? "none" : "all",
              cursor: disabled ? "initial" : "text",
              width: width ? width : "auto",
            }}
          >
            <View paddingY={3}>
              <Text>{label}</Text>
            </View>
            <View
              paddingY={3}
              css={{
                position: "absolute",
                right: "0px",
                alignItems: "right",
                justifyContent: "right",
              }}
            >
              {required && (
                <Text fontSize={1} color="danger">
                  REQUIRED
                </Text>
              )}
            </View>
            <View
              borderRadius={2}
              paddingX={4}
              paddingY={size === "lg" ? 5 : size === "sm" ? 3 : 4}
              boxShadow={this.state.isFocused ? "strong" : "inner"}
              backgroundColor={backgroundColor}
              data-testid="input-container"
              {...props}
              css={{
                position: "relative",
                margin: "10px 0px",
                border: "1px solid",
                borderColor: this.state.isFocused ? colors.accent : colors.soft,
                ...((css as object) || {}),
              }}
              onClick={this.handleOnClick}
              onKeyDown={this.handleOnKeyDown}
            >
              {prefixIcon && (
                <View
                  css={{
                    position: "absolute",
                    left: "8px",
                    top: "2px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  height="calc(100% - 4px)"
                  paddingX={3}
                >
                  <Icon
                    name={prefixIcon}
                    color={color === "default" ? "subtle" : color}
                    size={size === "lg" ? 5 : size === "sm" ? 2 : 4}
                  />
                </View>
              )}

              <Text
                element="input"
                type="text"
                onBlur={this.handleOnBlur}
                onFocus={this.handleOnFocus}
                onChange={onChange}
                innerRef={this.setInputRef}
                value={value}
                name={name}
                placeholder={placeholder}
                maxLength={maxLength}
                minLength={minLength}
                readOnly={readOnly}
                tabIndex={tabIndex}
                disabled={disabled}
                fontSize={size === "lg" ? 4 : size === "sm" ? 2 : 3}
                css={{
                  // get rid of any default styles
                  background: 0,
                  border: 0,
                  fontSize: "inherit",
                  outline: 0,
                  padding: 0,
                  marginLeft: prefixIcon ? (size === "lg" ? "45px" : size === "sm" ? "32px" : "40px") : 0,
                  // important! without `width` browsers won't allow focus
                  width: "auto",
                }}
              />
            </View>
            <View paddingY={3}>
              <Text color="subtle">{description}</Text>
            </View>
          </View>
        )}
      </Theme.Consumer>
    );
  }
}

export default TextInput;
