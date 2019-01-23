import { Formik, FormikConfig } from "formik";
import * as React from "react";
import { autobind } from "../../utils/decorators";
import View, { ViewProps } from "../View";

interface InnerFormProps extends ViewProps {
  status: string;
  setStatus: (status?: any) => void;
  onReset: (a: any) => void;
  disabled?: boolean;
  onSubmit: (evt: React.SyntheticEvent) => void;
  onChange?: (data: any) => void;
  values?: any;
}

export interface FormProps extends FormikConfig<any> {
  children?: React.ReactNode;
  disabled?: boolean;
  formikRef?: any;
  onChange?: (data: any) => void;
  flexGrow?: number;
}

export class InternalForm extends React.Component<InnerFormProps, any> {
  public componentDidUpdate(prevProps: InnerFormProps) {
    const { status, setStatus, disabled, values } = this.props;

    if ((status === "disabled") !== !!disabled) {
      setStatus(disabled ? "disabled" : null);
    }

    if (this.props.onChange && prevProps.values !== values) {
      this.props.onChange({ values: this.props.values });
    }
  }

  public componentDidMount() {
    const { status, setStatus, disabled } = this.props;

    if ((status === "disabled") !== !!disabled) {
      setStatus(disabled ? "disabled" : null);
    }
  }

  @autobind
  public handleSubmit(evt) {
    if (this.props.disabled) {
      evt.preventDefault();
      return false;
    }

    return this.props.onSubmit(evt);
  }

  @autobind
  public handleReset(evt) {
    if (this.props.disabled) {
      evt.preventDefault();
      return false;
    }

    return this.props.onReset(evt);
  }

  public render() {
    const {
      children,
      status,
      setStatus,
      onReset,
      disabled,
      onSubmit,
      onChange,
      values,
      ...props
    } = this.props;
    return (
      <View
        element="form"
        {...props}
        onReset={this.handleReset}
        onSubmit={this.handleSubmit}
      >
        {children}
      </View>
    );
  }
}

const Form: React.SFC<FormProps> = ({
  children,
  disabled,
  onChange,
  formikRef,
  flexGrow,
  ...props
}: FormProps) => {
  return (
    <Formik ref={formikRef} {...props}>
      {({
        handleSubmit,
        handleReset,
        status,
        values,
        setStatus,
        isSubmitting,
      }) => (
        <InternalForm
          flexGrow={flexGrow}
          onReset={handleReset}
          onSubmit={handleSubmit}
          disabled={disabled || isSubmitting}
          status={status}
          setStatus={setStatus}
          onChange={onChange}
          values={values}
        >
          {children}
        </InternalForm>
      )}
    </Formik>
  );
};

Form.displayName = "Form";

export default Form;
