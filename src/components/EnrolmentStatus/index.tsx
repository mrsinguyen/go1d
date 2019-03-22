import * as React from "react";

import Icon from "../Icon";
import Text from "../Text";
import View, { ViewProps } from "../View";

export interface EnrolmentStatusProps {
  type: "unpublished" | "inProgress" | "completed";
  text?: string;
  overDue?: boolean;
}

interface EnrolmentStatusComponentProps extends ViewProps {
  status: EnrolmentStatusProps;
}

interface StatusStyle {
  textColor?: string;
  iconName?: string;
  iconColor?: string;
}

const EnrolmentStatus: React.SFC<EnrolmentStatusComponentProps> = ({
  status,
  ...props
}) => {
  if (!status) {
    return null;
  }

  const { type, text, overDue } = status;

  const defaultStatusStyleMapping = {
    textColor: overDue ? "danger" : "default",
  };
  const statusStyleMapping: { [key: string]: StatusStyle } = {
    unpublished: {
      iconName: "Lock",
    },
    inProgress: {
      iconName: "InProgress",
      iconColor: overDue ? "danger" : "accent",
    },
    completed: {
      iconName: "Passed",
      iconColor: "success",
    },
  };
  const statusStyle: StatusStyle = {
    ...(statusStyleMapping[type] || {}),
    ...defaultStatusStyleMapping,
  };
  return (
    <View flexDirection="row" {...props}>
      <Icon
        name={statusStyle.iconName}
        size={1}
        color={statusStyle.iconColor}
        marginTop={1}
        marginRight={2}
      />
      {text && (
        <Text color={statusStyle.textColor} fontSize={1} fontWeight="semibold">
          {text}
        </Text>
      )}
    </View>
  );
};

export default EnrolmentStatus;
