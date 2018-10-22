import { Formik, FormikConfig } from "formik";
import * as React from "react";
import { autobind } from "../../utils/decorators";

interface InnerFormProps {
  status: string;
  setStatus: (status?: any) => void;
  onReset: (a: any) => void;
  disabled?: boolean;
  onSubmit: (evt: React.SyntheticEvent) => void;
  onChange?: (data: any) => void;
  values?: any;
}

interface FormProps extends FormikConfig<any> {
  children?: React.ReactNode;
  disabled?: boolean;
  onChange?: (data: any) => void;
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
    const { children } = this.props;
    return (
      <form onReset={this.handleReset} onSubmit={this.handleSubmit}>
        {children}
      </form>
    );
  }
}

const Form: React.SFC<FormProps> = ({
  children,
  disabled,
  onChange,
  ...props
}: FormProps) => {
  return (
    <Formik {...props}>
      {({
        handleSubmit,
        handleReset,
        status,
        values,
        setStatus,
        isSubmitting,
      }) => (
        <InternalForm
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
