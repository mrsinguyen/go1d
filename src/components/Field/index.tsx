import { Field as FormikField, FieldProps } from "formik";
import * as React from "react";

import Text from "../Text";
import View, { Props as ViewProps } from "../View";

interface Props extends ViewProps {
  name: string;
  type?: string;
  value?: any;
  inputRef?: (instance: any) => void;

  id?: string;
  component?:
    | string
    | React.ComponentType<FieldProps<any>>
    | React.ComponentType<void>;
  children?: React.ReactNode;
  required?: boolean;
}

const Field: React.SFC<Props> = ({
  component,
  children,
  id,
  required,
  name,
  type,
  value,
  inputRef,
  ...props
}: Props & FieldProps) => {
  const validate = val => !val && "required";

  const formikProps = {
    name,
    type,
    value,
    innerRef: inputRef,
  };

  return (
    <FormikField validate={validate} {...formikProps}>
      {({ field, form }) => {
        let node = null;
        if (typeof component === "string") {
          // test
        } else {
          node = React.createElement(component as any, {
            field,
            form,
            id: id || field.name,
            children,
          });
        }

        return (
          <View {...props}>
            <View
              flexDirection="row"
              justifyContent="space-between"
              alignItems="flex-end"
              paddingBottom={2}
            >
              <Text
                element="label"
                fontWeight="bold"
                htmlFor={id || field.name}
              >
                Label
              </Text>
              {form.errors[field.name] ? (
                <Text
                  fontSize={1}
                  fontWeight="bold"
                  color="red"
                  css={{ textTransform: "uppercase" }}
                >
                  {form.errors[field.name]}
                </Text>
              ) : (
                !required && (
                  <Text fontSize={1} color="subtle">
                    Optional
                  </Text>
                )
              )}
            </View>
            {node}
            <View paddingY={2}>
              <Text color="subtle">Description</Text>
            </View>
          </View>
        );
      }}
    </FormikField>
  );
};

Field.displayName = "Field";

export default Field;
