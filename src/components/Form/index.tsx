import { Formik, FormikConfig } from "formik";
import * as React from "react";
import { autobind } from "../../utils/decorators";

interface InnerFormProps {
  status: string;
  setStatus: (status?: any) => void;
  onReset: (a: any) => void;
  disabled: boolean;
  onSubmit: (evt: React.SyntheticEvent) => void;
}

interface FormProps extends FormikConfig<any> {
  children?: React.ReactNode;
  disabled: boolean;
}

export class InternalForm extends React.Component<InnerFormProps, any> {
  public componentDidUpdate() {
    const { status, setStatus, disabled } = this.props;

    if ((status === "disabled") !== !!disabled) {
      setStatus(disabled ? "disabled" : null);
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
  ...props
}: FormProps) => {
  return (
    <Formik {...props}>
      {({ handleSubmit, handleReset, status, setStatus }) => (
        <InternalForm
          onReset={handleReset}
          onSubmit={handleSubmit}
          disabled={disabled}
          status={status}
          setStatus={setStatus}
        >
          {children}
        </InternalForm>
      )}
    </Formik>
  );
};

Form.displayName = "Form";

export default Form;
