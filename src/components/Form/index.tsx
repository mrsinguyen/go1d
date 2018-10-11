import { Formik } from "formik";
import * as React from "react";

const Form: React.SFC<any> = ({ component, children, ...props }: any) => {
  return (
    <Formik {...props}>
      {({ handleSubmit }) => <form onSubmit={handleSubmit}>{children}</form>}
    </Formik>
  );
};

Form.displayName = "Field";

export default Form;
