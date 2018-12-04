import * as React from "react";

import foundations from "../../foundations";
import formatDuration from "../../utils/durationFormatter";
import Icon from "../Icon";
import Text from "../Text";
import Theme from "../Theme";
import View, { ViewProps } from "../View";

export interface LessonProps extends ViewProps {
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

const Lesson: React.SFC<LessonProps> = ({
  title,
  type,
  duration,
  ...props
}: LessonProps) => (
  <Theme.Consumer>
    {({ colors }) => (
      <View
        backgroundColor="background"
        flexDirection="row"
        css={{
          overflow: "hidden",
          borderBottom: `1px solid ${colors.soft}`,
        }}
        {...props}
      >
        <View paddingY={5} justifyContent="center">
          {type && (
            <Icon name={typeIconDic[type] ? typeIconDic[type] : "Course"} />
          )}
        </View>
        <View paddingY={5} paddingX={4}>
          {title && (
            <Text
              fontSize={2}
              css={{
                marginBottom: foundations.spacing[1],
              }}
            >
              {title}
            </Text>
          )}
          <Text
            color="subtle"
            fontSize={1}
            fontWeight="semibold"
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
