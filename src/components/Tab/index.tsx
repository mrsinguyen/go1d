import * as React from "react";
import { ButtonProps } from "../Button";
import Button from "../Button";
import Text from "../Text";
import Theme from "../Theme";

export interface TabProps extends ButtonProps {
  children?: React.ReactNode;
  isSelected?: boolean;
  href?: string;
}

const Tab = ({ children, isSelected, ...props }: TabProps) => (
  <Theme.Consumer>
    {({ colors }) => (
      <Button
        borderColor={isSelected ? "accent" : "transparent"}
        borderBottom={2}
        paddingY={4}
        marginRight={6}
        marginTop={2}
        paddingX={0}
        borderRadius={0}
        {...props}
        css={{
          ":hover, :focus": {
            background: "none",
            "svg, span": {
              color: colors.accent,
            },
          },
        }}
      >
        <Text fontWeight={isSelected ? "bold" : "semibold"} color="default">
          {children}
        </Text>
      </Button>
    )}
  </Theme.Consumer>
);

export default Tab;
