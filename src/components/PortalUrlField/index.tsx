import * as React from "react";

import { autobind } from "../../utils/decorators";
import Field, { Props as FieldProps } from "../Field";
import InputSuffix from "../InputSuffix";

export interface Props extends FieldProps {
  isAvailable?: boolean;
  name: string;
  suffixValue?: string;
}

class PortalUrlField extends React.Component<Props, any> {
  public static displayName = "PortalUrlField";

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
    const { name, suffixValue, ...props } = this.props;

    return (
      <Field
        name={name}
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
