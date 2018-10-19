import * as React from "react";

import { FieldProps } from "formik";
import { autobind } from "../../utils/decorators";
import Field from "../Field";
import InputSuffix from "../InputSuffix";

export interface Props extends FieldProps {
  isAvailable?: boolean;
  suffixValue?: string;
  label: string;
  name: string;
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
    const { suffixValue, ...props } = this.props;

    return (
      <Field
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
