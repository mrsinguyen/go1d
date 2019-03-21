import * as React from "react";
import Checkbox from "../../Checkbox";
import Text from "../../Text";
import Theme from "../../Theme";
import View from "../../View";

export interface SelectOptionProps {
  showCheckboxes?: boolean
  label: string;
  value: any;
  topLevelOption?: boolean;
  size?: "sm" | "md" | "lg";
  background?: string;
  isFocused: boolean;
  isActive: boolean
  onMouseDown?: any;
}

const Sizes = {
  sm: {
    fontSize: 1,
  },
  md: {
    fontSize: 2,
  },
  lg: {
    fontSize: 3,
  },
};


export default class SelectOption extends React.PureComponent<SelectOptionProps> {
  public static defaultProps = {
    showCheckboxes: false,
    isFocused: false,
    isActive: false,
    topLevelOption: false,
  }

  render() {
    const {
      showCheckboxes,
      label,
      value,
      size,
      background,
      isFocused,
      isActive,
      onMouseDown,
      topLevelOption,
    } = this.props;

    return (
      <Theme.Consumer>
        {({ colors }) => {
          if (showCheckboxes) {
            return (
              <View
                width={"100%"}
                paddingY={3}
                paddingX={topLevelOption ? 6 : 4}
                onMouseDown={onMouseDown(label, value)}
                backgroundColor={isFocused ? "highlight" : null}
                flexDirection="row"
                css={{
                  "&:hover": {
                    background: colors.highlight,
                    color: colors.default,
                    cursor: "pointer",
                  },
                  overflow: "hidden",
                }}
              >
                <Checkbox
                  value={isActive}
                  id={`check_${label}`}
                  label={label}
                  fontSize={Sizes[size].fontSize}
                />
              </View>
            );
          }
      
          return (
            <View
              width={"100%"}
              paddingY={4}
              paddingX={topLevelOption ? 6 : 4}
              onMouseDown={onMouseDown(label, value)}
              backgroundColor={background}
              css={
                background !== "accent"
                  ? {
                    "&:hover": {
                      background: colors.highlight,
                      color: colors.default,
                      cursor: "pointer",
                    },
                  }
                  : {}
              }
            >
              <Text
                fontSize={Sizes[size].fontSize}
                color={
                  background === "accent"
                    ? "background"
                    : "default"
                }
              >
                {label}
              </Text>
            </View>
          );
        }}
      </Theme.Consumer>
    );
  }
}