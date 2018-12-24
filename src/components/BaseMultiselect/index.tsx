import * as React from "react";
import safeInvoke from "../../utils/safeInvoke";
import Base, { BaseProps } from "../Base";

export interface BaseMultiselectProps extends BaseProps {
  value: Array<{ value: string; label: string } | string>;
  options: Array<{ value: string; label: string } | string>;
  onChange?: (evt: any) => void;
}

class BaseMultiselect extends React.Component<BaseMultiselectProps, {}> {
  public onChange(evt: React.SyntheticEvent<HTMLSelectElement>) {
    safeInvoke(this.props.onChange, evt);
  }

  public render() {
    const { value, ...props } = this.props;
    return (
      <Base
        element="select"
        multiple={true}
        onChange={this.onChange}
        value={value.map(v => (typeof v === "string" ? v : v.value))}
        {...props}
      />
    );
  }
}

export default BaseMultiselect;
