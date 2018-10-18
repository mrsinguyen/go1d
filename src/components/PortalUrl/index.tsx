import * as React from "react";

import { brandGreys } from "../../foundations";
import { autobind } from "../../utils/decorators";
import safeInvoke from "../../utils/safeInvoke";
import Field from "../Field";
import Form from "../Form";
import TextInput from "../TextInput";
import Theme from "../Theme";
import { Props as ViewProps } from "../View";
import View from "../View";

export interface Props extends ViewProps {
  color?: string;
  children?: React.ReactNode;
  onClick?: (evt: React.MouseEvent<any>) => void;
  onFocus?: (evt: React.FocusEvent<any>) => void;
  onBlur?: (evt: React.FocusEvent<any>) => void;
  isAvailable?: boolean;
}

class PortalUrl extends React.Component<Props, any> {
  public static displayName = "PortalUrlField";

  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
      value: "",
      statusText: "",
      statusColor: "",
      statusIcon: "",
    };
  }

  @autobind
  public onSubmit(evt: React.FocusEvent<any>) {
    safeInvoke(this.props.onFocus, evt);
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
  public getStatusText() {
    if (this.props.isAvailable) {
      return "Available";
    } else if (this.props.isAvailable === false) {
      return "Not Available";
    }
    return "";
  }

  @autobind
  public getStatusColor() {
    if (this.props.isAvailable) {
      return "success";
    } else if (this.props.isAvailable === false) {
      return "danger";
    }
    return "";
  }

  @autobind
  public getStatusIcon() {
    if (this.props.isAvailable) {
      return "Passed";
    } else if (this.props.isAvailable === false) {
      return "NotPassed";
    }
    return "";
  }

  public render() {
    const {
      color = "subtle",
      portalUrl,
      portalUrlName,
      description,
      label,
      size,
      css,
      ...props
    } = this.props;

    return (
      <Theme.Consumer>
        {({ colors }) => (
          <Form initialValues={{ name: "" }} onSubmit={this.onSubmit}>
            <Field
              component={TextInput}
              label={label}
              name={portalUrlName}
              description={description}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              value={this.state.value}
              statusText={this.getStatusText()}
              statusColor={this.getStatusColor()}
              statusIcon={this.getStatusIcon()}
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
