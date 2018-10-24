import { Field as FormikField } from "formik";
import * as React from "react";

import Label from "../Label";
import Text from "../Text";
import View, { Props as ViewProps } from "../View";

export interface Props extends ViewProps {
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
        let message = null;
        if (form.errors && form.errors[field.name]) {
          message = form.errors[field.name];
        }
        if (component) {
          node = React.createElement(component as any, {
            ref: inputRef,
            ...field,
            form,
            disabled: disabled || form.status === "disabled",
            id: id || field.name,
            children,
            error: !!message,
            ...props,
          });
        }

        if (!statusText) {
          if (
            form.errors &&
            form.errors[field.name] &&
            form.touched[field.name]
          ) {
            statusIcon = statusIcon ? statusIcon : null;
            statusColor = "danger";
            statusText = required ? "Required" : "Invalid";
          } else {
            statusColor = statusColor ? statusColor : "subtle";
            statusText = !required && "Optional";
          }
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
            {message && (
              <View paddingBottom={2}>
                <Text color="danger">{message}</Text>
              </View>
            )}
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
