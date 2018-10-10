import { Field as FormikField, FieldProps } from "formik";
import * as React from "react";

import Text from "../Text";
import View, { Props as ViewProps } from "../View";

interface Props extends ViewProps {
  label: string;
  id?: string;
  name: string;
  value?: any;
  required?: boolean;
  description?: React.ReactNode;
  inputRef?: (instance: any) => void;

  component?:
    | string
    | React.ComponentType<FieldProps<any>>
    | React.ComponentType<void>;
  children?: React.ReactNode;
}

const Field: React.SFC<Props> = ({
  component,
  children,
  description,
  label,
  id,
  required,
  name,
  value,
  inputRef,
  ...props
}: Props) => {
  const validate = val => required && !val && "required";

  const formikProps = {
    name,
    value,
  };

  return (
    <FormikField validate={validate} {...formikProps}>
      {({ field, form }) => {
        let node = null;
        if (typeof component === "string") {
          // test
        } else {
          node = React.createElement(component as any, {
            ref: inputRef,
            field,
            form,
            id: id || field.name,
            children,
            ...props,
          });
        }

        return (
          <View paddingBottom={2}>
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
                {label}
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
            <View paddingBottom={2}>{node}</View>
            {description && (
              <View paddingBottom={2}>
                <Text color="subtle">{description}</Text>
              </View>
            )}
          </View>
        );
      }}
    </FormikField>
  );
};

Field.displayName = "Field";

export default Field;
