import { Field as FormikField } from "formik";
import * as React from "react";

import Label from "../Label";
import Text from "../Text";
import View, { Props as ViewProps } from "../View";

interface Props extends ViewProps {
  label: string;
  id?: string;
  name: string;
  value?: any;
  required?: boolean;
  disabled?: boolean;
  description?: React.ReactNode;
  inputRef?: (instance: any) => void;
  statusText?: string;
  statusColor?: string;
  statusIcon?: string;

  component?: string | React.ComponentType<any> | React.ComponentType<void>;
  children?: React.ReactNode;
}

const Field: React.SFC<Props> = ({
  component,
  children,
  description,
  label,
  id,
  required,
  disabled,
  name,
  value,
  inputRef,
  statusText = !required && "Optional",
  statusColor = "subtle",
  statusIcon,
  validate,
  ...props
}: Props) => {
  const formikProps = {
    name,
    value,
    validate,
  };

  return (
    <FormikField {...formikProps}>
      {({ field, form }) => {
        let node = null;
        if (component) {
          node = React.createElement(component as any, {
            ref: inputRef,
            ...field,
            form,
            disabled: disabled || form.status === "disabled",
            id: id || field.name,
            children,
            ...props,
          });
        }
        if (form.errors && form.errors[field.name]) {
          statusText = form.errors[field.name];
          statusColor = "danger";
          statusIcon = null;
        }

        return (
          <View paddingBottom={2}>
            <Label
              htmlFor={id || field.name}
              statusText={statusText}
              statusColor={statusColor}
              statusIcon={statusIcon}
            >
              {label}
            </Label>
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
