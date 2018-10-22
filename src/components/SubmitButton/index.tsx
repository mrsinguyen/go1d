import { connect, FormikContext } from "formik";
import * as React from "react";
import { Props as ButtonProps } from "../Button";
import ButtonFilled from "../ButtonFilled";

interface Props extends ButtonProps {
  children?: React.ReactNode;
}

class SubmitButton extends React.Component<
  Props & { formik: FormikContext<any> }
> {
  public render() {
    const { formik, children, ...props } = this.props;

    return (
      <ButtonFilled
        disabled={formik.status === "disabled"}
        type="submit"
        color="accent"
        {...props}
      >
        {children}
      </ButtonFilled>
    );
  }
}

export default connect<Props, Props & { formik: FormikContext<any> }>(
  SubmitButton
);
