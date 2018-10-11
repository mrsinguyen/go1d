import { get } from "lodash";
import * as React from "react";
import applySpacing from "../../utils/applySpacing";
import { autobind } from "../../utils/decorators";
import safeInvoke from "../../utils/safeInvoke";
import Icon from "../Icon";
import Text, { Props as TextProps } from "../Text";
import Theme from "../Theme";
import View from "../View";

interface Props extends TextProps {
  id: string;
  size?: "lg" | "md" | "sm";
  iconName?: string;
  suffixNode?: React.ReactNode;
  onFocus?: (evt: React.FocusEvent<any>) => void;
  onBlur?: (evt: React.FocusEvent<any>) => void;
}

class TextInput extends React.Component<Props, any> {
  public static displayName = "TextInput";

  public static defaultProps = {
    size: "md",
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

  public render() {
    const {
      id,
      iconName,
      size,
      suffixNode,
      onFocus,
      onBlur,
      ...props
    } = this.props;
    const { isFocused } = this.state;

    return (
      <Theme.Consumer>
        {({ spacing: s }) => (
          <View
            element="label"
            borderRadius={2}
            backgroundColor="background"
            paddingX={get({ lg: 5, md: 3, sm: 1 }, size)}
            borderColor={isFocused ? "accent" : "background"}
            boxShadow={isFocused ? "strong" : "soft"}
            flexDirection="row"
            alignItems="center"
            htmlFor={id}
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
              element="input"
              lineHeight="ui"
              fontSize={get({ lg: 3, md: 2, sm: 1 }, size)}
              color="inherit"
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              {...props}
              data-testid="inputElement"
              css={{
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
