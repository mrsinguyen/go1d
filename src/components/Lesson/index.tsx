import * as React from "react";

import formatDuration from "../../utils/durationFormatter";
import Icon from "../Icon";
import Text from "../Text";
import Theme from "../Theme";
import View, { Props as ViewProps } from "../View";

interface Props extends ViewProps {
  title?: string;
  type?: string;
  duration?: number;
}

export const typeIconDic = {
  activities: "Activity",
  attendance: "UserTick",
  assignment: "Assignment",
  document: "Document",
  h5p: "Videoplay",
  iframe: "Weblink",
  interactive: "Interactive",
  question: "Checkbox",
  quiz: "Quiz",
  resource: "Content",
  text: "Text",
  video: "Video",
  workshop: "Course",
  lti: "Lti",
  event: "Calendar",
};

const Lesson: React.SFC<Props> = ({
  title,
  type,
  duration,
  ...props
}: Props) => (
  <Theme.Consumer>
    {({ colors }) => (
      <View
        backgroundColor="background"
        flexDirection="row"
        css={{
          overflow: "hidden",
          borderTop: `1px solid ${colors.soft}`,
        }}
        {...props}
      >
        <View paddingY={5} paddingLeft={5}>
          {type && (
            <Icon name={typeIconDic[type] ? typeIconDic[type] : "Course"} />
          )}
        </View>
        <View paddingY={4} paddingX={4}>
          {title && (
            <Text
              fontSize={2}
              css={{
                marginBottom: 5,
              }}
            >
              {title}
            </Text>
          )}
          <Text
            color="subtle"
            fontSize={1}
            css={{ textTransform: "uppercase" }}
          >
            {type}
            {type && duration && " • "}
            {duration && formatDuration(duration)}
          </Text>
        </View>
      </View>
    )}
  </Theme.Consumer>
);

export default Lesson;
