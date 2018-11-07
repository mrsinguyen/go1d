import { connect, FormikContext } from "formik";
import * as React from "react";
import ButtonFilled, { ButtonFilledProps } from "../ButtonFilled";

class SubmitButton extends React.Component<
  ButtonFilledProps & { formik: FormikContext<any> }
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

export default connect<ButtonFilledProps & { formik: FormikContext<any> }>(
  SubmitButton
);
