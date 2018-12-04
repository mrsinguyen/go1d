import * as React from "react";

import formatDuration from "../../utils/durationFormatter";
import Icon from "../Icon";
import Text from "../Text";
import View, { ViewProps } from "../View";

export interface CourseModuleProps extends ViewProps {
  title: string;
  duration?: number;
  collapsible?: boolean;
  defaultOpen?: boolean;
}

class CourseModule extends React.Component<CourseModuleProps, any> {
  public static defaultProps = {
    defaultOpen: true,
    collapsible: true,
  };
  constructor(props) {
    super(props);

    this.state = {
      isOpen: props.defaultOpen,
    };
  }

  public toggleHidden = () =>
    this.setState(OldState => ({
      isOpen: !OldState.isOpen,
    }));

  public render() {
    const {
      title,
      children,
      duration,
      collapsible,
      defaultOpen,
      ...props
    } = this.props;

    const { isOpen } = this.state;

    return (
      <View paddingX={4} {...props}>
        <View flexDirection="row" justifyContent="space-between">
          <Text fontSize={3} fontWeight="semibold">
            {title}
          </Text>
          <View flexDirection="row" alignItems="center">
            {duration && (
              <View flexDirection="row" alignItems="center">
                <View paddingRight={2}>
                  <Icon size={1} color="muted" name="Clock" />
                </View>
                <Text fontSize={2}>{formatDuration(duration)}</Text>
              </View>
            )}
            {collapsible && (
              <View
                marginLeft={4}
                onClick={this.toggleHidden}
                data-testid="ToggleButton"
                css={{
                  cursor: "pointer",
                }}
              >
                <Icon
                  color="subtle"
                  size={1}
                  name={isOpen ? "ChevronUp" : "ChevronDown"}
                />
              </View>
            )}
          </View>
        </View>
        {isOpen && <View data-testid="collapsibleSegment">{children}</View>}
      </View>
    );
  }
}

export default CourseModule;
