import { get } from "lodash";
import * as React from "react";
import applySpacing from "../../utils/applySpacing";
import { autobind } from "../../utils/decorators";
import safeInvoke from "../../utils/safeInvoke";
import Icon from "../Icon";
import Text, { Props as TextProps } from "../Text";
import Theme from "../Theme";
import View from "../View";

export interface TextInputProps extends TextProps {
  id: string;
  size?: "lg" | "md" | "sm";
  name?: string;
  value?: string;
  multiline?: number;
  placeholder?: string;
  maxLength?: number;
  minLength?: number;
  disabled?: boolean;
  readOnly?: boolean;
  tabIndex?: string;
  onChange?: (evt: React.ChangeEvent<any>) => void;
  onKeyDown?: (evt: React.KeyboardEvent<any>) => void;
  onClick?: (evt: React.MouseEvent<any>) => void;
  onFocus?: (evt: React.FocusEvent<any>) => void;
  onBlur?: (evt: React.FocusEvent<any>) => void;
  iconName?: string;
  suffixNode?: React.ReactNode;
  error?: boolean;
  borderRadius?: number;
  viewCss?: any;
}

class TextInput extends React.Component<TextInputProps, any> {
  public static displayName = "TextInput";

  public static defaultProps = {
    size: "md",
    borderRadius: 2,
  };

  constructor(props) {
    super(props);

    this.state = { isFocused: false };
  }

  @autobind
  public handleFocus(evt: React.FocusEvent<any>) {
    this.setState({
      isFocused: true,
    });

    safeInvoke(this.props.onFocus, evt);
  }

  @autobind
  public handleBlur(evt: React.FocusEvent<any>) {
    this.setState({
      isFocused: false,
    });

    safeInvoke(this.props.onBlur, evt);
  }

  @autobind
  public getBorderColor() {
    const { isFocused } = this.state;
    const { error } = this.props;

    if (error) {
      return "danger";
    }
    if (isFocused) {
      return "accent";
    }

    return "faded";
  }

  public render() {
    const {
      id,
      iconName,
      size,
      suffixNode,
      disabled,
      onFocus,
      onBlur,
      borderRadius,
      viewCss,
      multiline,
      ...props
    } = this.props;

    return (
      <Theme.Consumer>
        {({ spacing: s }) => (
          <View
            element="label"
            borderRadius={borderRadius}
            backgroundColor="background"
            paddingX={get({ lg: 5, md: 3, sm: 1 }, size)}
            border={1}
            borderRight={0}
            borderColor={this.getBorderColor()}
            boxShadow="inner"
            flexDirection="row"
            alignItems="center"
            htmlFor={id}
            opacity={disabled && "disabled"}
            css={viewCss}
          >
            {iconName && (
              <Icon
                name={iconName}
                marginRight={get({ lg: 5, md: 3, sm: 1 }, size)}
                size={get({ lg: 3, md: 2, sm: 1 }, size)}
                color="subtle"
              />
            )}
            <Text
              id={id}
              element={multiline ? "textarea" : "input"}
              rows={multiline}
              lineHeight="ui"
              fontSize={get({ lg: 3, md: 2, sm: 1 }, size)}
              color="inherit"
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              disabled={disabled}
              {...props}
              data-testid="inputElement"
              css={{
                // get rid of default styles
                background: 0,
                border: 0,
                flexGrow: 1,
                paddingBottom: applySpacing(
                  s,
                  get({ lg: 4, md: 3, sm: 1 }, size)
                ),
                paddingTop: applySpacing(s, get({ lg: 4, md: 3, sm: 1 }, size)),
              }}
            />
            {suffixNode}
          </View>
        )}
      </Theme.Consumer>
    );
  }
}

export default TextInput;
