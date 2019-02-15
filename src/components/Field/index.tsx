import { Field as FormikField } from "formik";
import * as React from "react";

import firstDefined from "../../utils/firstDefined";
import safeInvoke from "../../utils/safeInvoke";
import Label from "../Label";
import Text from "../Text";
import View, { ViewProps } from "../View";

export interface FieldProps extends ViewProps {
  label?: string;
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
  errorFormat?: (errorMessage: string) => React.ReactNode | string;
  suppressError?: boolean;
  component?: string | React.ComponentType<any> | React.ComponentType<void>;
}

const Field: React.SFC<FieldProps> = ({
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
  errorMessage,
  errorFormat,
  hideStatus,
  hideLabel,
  onChange,
  suppressError,
  ...props
}: FieldProps) => {
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

        if (
          form.errors &&
          form.errors[field.name] &&
          form.touched[field.name] && // Only show error for touched fields //
          !suppressError
        ) {
          message = form.errors[field.name];
        }
        if (errorMessage) {
          message = errorMessage;
        }

        message =
          message && (errorFormat ? safeInvoke(errorFormat, message) : message);
        if (component) {
          const newOnChange = e => {
            field.onChange(e);
            return safeInvoke(onChange, e);
          };

          node = React.createElement(component as any, {
            ref: inputRef,
            ...field,
            // use "initialValues" provided through Form, default to value attribute, if none is provided use empty string to avoid "A component is changing an uncontrolled input of type number to be controlled" errors //
            value: firstDefined(field.value, value, ""),
            disabled: disabled || form.status === "disabled",
            id: id || field.name,
            children,
            error: !!message,
            onChange: newOnChange,
            ...props,
          });
        }

        // component can get into a recursive state where a previous error prevents the status from being updated, check for that here
        if (
          (statusText === "Invalid" || statusText === "Required") &&
          !form.errors[field.name]
        ) {
          statusText = "";
        }

        // this is not an unnecessary check of touched. Otherwise the status text won't get updated. //
        if (!statusText || form.touched[field.name]) {
          if (
            (form.errors &&
              form.errors[field.name] &&
              form.touched[field.name] &&
              !suppressError) ||
            errorMessage
          ) {
            statusIcon = statusIcon ? statusIcon : null;
            statusColor = "danger";
            // only redeclare statusText if not already provided
            if (!statusText) {
              statusText =
                required && (field.value === "" || field.value.length === 0) // we should show Required only if it is empty, otherwise show invalid //
                  ? "Required"
                  : "Invalid";
            }
          } else {
            // only remove if not declared upscope
            if (!statusText) {
              statusColor = statusColor ? statusColor : "subtle";
              statusText = !required ? "Optional" : ""; // Once error has been corrected for required fields, remove status text //
            }
          }
        }

        return (
          <View paddingBottom={2}>
            {!hideLabel && (
              <Label
                htmlFor={id || field.name}
                statusText={hideStatus ? null : statusText}
                statusColor={statusColor}
                statusIcon={statusIcon}
                css={{ whiteSpace: "pre-wrap" }}
              >
                {label}
              </Label>
            )}
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
