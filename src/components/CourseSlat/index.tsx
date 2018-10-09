import * as React from "react";

import { Interpolation } from "emotion";
import { url } from "inspector";
import Base from "../Base";
import ButtonFilled from "../ButtonFilled";
import Container from "../Container";
import Icon from "../Icon";
import Text from "../Text";
import View, { Props as ViewProps } from "../View";

interface Props extends ViewProps {
  courseImage?: string;
  css?: Interpolation;
  title?: string;
  description?: string;
  author?: string;
  time?: string;
  actionRender?: () => React.ReactChild;
}

const CourseSlat: React.SFC<Props> = ({
  courseImage,
  css,
  title,
  description,
  author,
  time,
  actionRender,
  ...props
}: Props) => (
  <View
    backgroundColor="background"
    borderRadius={2}
    boxShadow="crisp"
    flexDirection="row"
    marginBottom={4}
    css={{
      ...((css as object) || {}),
      overflow: "hidden",
    }}
    {...props}
  >
    {courseImage && (
      <View
        height={111}
        width={212}
        padding={3}
        alignItems="start"
        css={{
          overflow: "hidden",
          backgroundImage: `url(${courseImage})`,
          backgroundSize: "cover",
        }}
      >
        <View
          flexDirection="row"
          padding={2}
          borderRadius={1}
          color="background"
          backgroundColor="contrast"
        >
          <Icon paddingRight={1} name="Course" />
          <Text fontSize={1}>COURSE</Text>
        </View>
      </View>
    )}
    <View paddingY={4} paddingX={5} flexShrink={1}>
      {title && (
        <Text fontSize={3} css={{ marginBottom: "8px" }}>
          {title}
        </Text>
      )}
      {description && (
        <Text
          color="subtle"
          css={{
            marginBottom: 12,
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          {description}
        </Text>
      )}
      {(time || author) && (
        <View flexDirection="row">
          {author && (
            <View paddingRight={5}>
              <Text color="subtle" fontSize={1}>
                {author}
              </Text>
            </View>
          )}
          {time && (
            <View flexDirection="row">
              <Icon
                name="Clock"
                size={1}
                color="subtle"
                marginRight={2}
                marginTop={1}
              />
              <Text color="subtle" fontSize={1}>
                {time}
              </Text>
            </View>
          )}
        </View>
      )}
    </View>
    {actionRender && (
      <View padding={5} paddingLeft={7}>
        {actionRender()}
      </View>
    )}
  </View>
);

export default CourseSlat;
