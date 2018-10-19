import * as React from "react";

import { autobind } from "../../utils/decorators";
import Field, { Props as FieldProps } from "../Field";
import InputSuffix from "../InputSuffix";
import { Props } from "../View";

export interface Props extends FieldProps {
  onKeyDown?: (evt: React.KeyboardEvent<any>) => void;
  onFocus?: (evt: React.FocusEvent<any>) => void;
  onBlur?: (evt: React.FocusEvent<any>) => void;
  isAvailable?: boolean;
  suffixValue?: string;
}

class PortalUrlField extends React.Component<Props, any> {
  public static displayName = "PortalUrlField";

  constructor(props) {
    super(props);
    this.state = {
      value: "",
      statusText: "",
      statusColor: "",
      statusIcon: "",
    };
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
    const { suffixValue, isFocused, ...props } = this.props;

    return (
      <Field
        label=""
        name=""
        statusText={this.getStatusText()}
        statusColor={this.getStatusColor()}
        statusIcon={this.getStatusIcon()}
        component={InputSuffix}
        suffixValue={suffixValue}
        {...props}
      />
    );
  }
}

export default PortalUrlField;
