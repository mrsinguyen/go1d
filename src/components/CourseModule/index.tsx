import * as React from "react";

import formatDuration from "../../utils/durationFormatter";
import Icon from "../Icon";
import Text from "../Text";
import View, { Props as ViewProps } from "../View";

interface Props extends ViewProps {
  title: string;
  duration?: number;
  noAccordian?: boolean;
  defaultOpen?: boolean;
}

class CourseModule extends React.Component<Props, any> {
  public static defaultProps = {
    defaultOpen: true,
    noAccordian: false,
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
      noAccordian,
      defaultOpen,
      ...props
    } = this.props;

    const { isOpen } = this.state;

    return (
      <View {...props}>
        <View flexDirection="row" justifyContent="space-between">
          <Text fontSize={4} fontWeight="semibold">
            {title}
          </Text>
          <View flexDirection="row" alignItems="center">
            {duration && (
              <View flexDirection="row" alignItems="center">
                <Icon size={3} color="subtle" paddingRight={3} name="Clock" />
                <Text fontSize={2} css={{ textTransform: "uppercase" }}>
                  {formatDuration(duration)}
                </Text>
              </View>
            )}
            {!noAccordian && (
              <View
                marginLeft={6}
                onClick={this.toggleHidden}
                data-testid="ToggleButton"
                css={{
                  cursor: "pointer",
                }}
              >
                <Icon size={3} name={isOpen ? "ChevronUp" : "ChevronDown"} />
              </View>
            )}
          </View>
        </View>
        {isOpen && <View data-testid="AccordianSegment">{children}</View>}
      </View>
    );
  }
}

export default CourseModule;
