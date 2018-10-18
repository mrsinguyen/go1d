import * as React from "react";

import { brandGreys } from "../../foundations";
import { autobind } from "../../utils/decorators";
import safeInvoke from "../../utils/safeInvoke";
import Field from "../Field";
import Form from "../Form";
import Theme from "../Theme";
import { Props as ViewProps } from "../View";
import View from "../View";

export interface Props extends ViewProps {
  color?: string;
  children?: React.ReactNode;
  onClick?: (evt: React.MouseEvent<any>) => void;
  onFocus?: (evt: React.FocusEvent<any>) => void;
  onBlur?: (evt: React.FocusEvent<any>) => void;
}

class PortalUrl extends React.Component<Props, any> {
  public static displayName = "PortalUrlField";

  constructor(props) {
    super(props);
    this.state = { isFocused: false, value: "" };
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
      color = "subtle",
      portalUrl,
      portalUrlName,
      description,
      component,
      label,
      size,
      css,
      ...props
    } = this.props;

    return (
      <Theme.Consumer>
        {({ colors }) => (
          <Form>
            <Field
              label={label}
              name={portalUrlName}
              component={component}
              description={description}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              value={this.state.value}
              suffixNode={
                <View
                  paddingX={5}
                  paddingY={3}
                  css={{
                    marginBottom: "-1px",
                    marginRight: "-9px",
                    border: "1px solid",
                    borderTop: 0,
                    borderColor: this.state.isFocused
                      ? colors.accent
                      : brandGreys.lighter,
                    color: brandGreys.darkest,
                    backgroundColor: brandGreys.lighter,
                    borderRadius: "4px",
                  }}
                  {...props}
                >
                  {portalUrl}
                </View>
              }
              {...props}
            />
          </Form>
        )}
      </Theme.Consumer>
    );
  }
}

export default PortalUrl;
