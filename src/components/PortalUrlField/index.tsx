import * as React from "react";

import { FieldConfig } from "formik";
import { get } from "lodash";
import { brandGreys } from "../../foundations";
import { autobind } from "../../utils/decorators";
import safeInvoke from "../../utils/safeInvoke";
import Field from "../Field";
import TextInput from "../TextInput";
import Theme from "../Theme";
import View from "../View";

export interface Props extends FieldConfig {
  color?: string;
  children?: React.ReactNode;
  onClick?: (evt: React.MouseEvent<any>) => void;
  onFocus?: (evt: React.FocusEvent<any>) => void;
  onBlur?: (evt: React.FocusEvent<any>) => void;
  isAvailable?: boolean;
  portalUrl?: string;
  label: string;
  size?: "lg" | "md" | "sm";
}

class PortalUrlField extends React.Component<Props, any> {
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
    const { color = "subtle", size = "md", portalUrl, ...props } = this.props;

    return (
      <Theme.Consumer>
        {({ colors, spacing }) => (
          <Field
            component={TextInput}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            value={this.state.value}
            statusText={this.getStatusText()}
            statusColor={this.getStatusColor()}
            statusIcon={this.getStatusIcon()}
            suffixNode={
              <View
                paddingX={get({ lg: 7, md: 5, sm: 5 }, size)}
                paddingY={get({ lg: 5, md: 3, sm: 3 }, size)}
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
              >
                {portalUrl}
              </View>
            }
            {...props}
          />
        )}
      </Theme.Consumer>
    );
  }
}

export default PortalUrlField;
