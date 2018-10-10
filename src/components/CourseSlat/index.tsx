import * as React from "react";

import { Interpolation } from "emotion";
import Icon from "../Icon";
import Text from "../Text";
import Theme from "../Theme";
import View, { Props as ViewProps } from "../View";

interface Props extends ViewProps {
  courseImage?: string;
  css?: Interpolation;
  title?: string;
  description?: string;
  author?: string;
  time?: string;
  actionRender?: () => React.ReactChild;
  contentRender?: () => React.ReactChild;
  type?: string;
  typeIcon?: string;
}

const CourseSlat: React.SFC<Props> = ({
  courseImage,
  css,
  title,
  description,
  author,
  time,
  actionRender,
  contentRender,
  type,
  typeIcon,
  ...props
}: Props) => (
  <Theme.Consumer>
    {({ spacing, breakpoints }) => (
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
            padding={3}
            alignItems="start"
            css={{
              overflow: "hidden",
              backgroundImage: `url(${courseImage})`,
              backgroundSize: "cover",
              position: "relative",
              height: 142,
              width: 221,
              [breakpoints.sm]: {
                height: 130,
                width: 130,
              },
            }}
          >
            {(type || typeIcon) && (
              <View
                flexDirection="row"
                padding={2}
                borderRadius={1}
                color="background"
                backgroundColor="contrast"
                css={{
                  position: "absolute",
                  bottom: 10,
                  left: 10,
                }}
              >
                {typeIcon && <Icon paddingRight={1} name={typeIcon} />}
                {type && <Text fontSize={1}>{type.toUpperCase()}</Text>}
              </View>
            )}
          </View>
        )}
        <View paddingY={4} paddingX={5} flexShrink={1}>
          {title && (
            <Text
              fontSize={3}
              css={{
                marginBottom: 8,
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
            >
              {title}
            </Text>
          )}
          {(time || author) && (
            <View flexDirection="row" marginBottom={3}>
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
          {contentRender && contentRender()}
          {description && (
            <Text
              color="subtle"
              css={{
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
            >
              {description}
            </Text>
          )}
        </View>
        {actionRender && (
          <View
            css={{
              padding: spacing[5],
              paddingLeft: spacing[7],
              [breakpoints.sm]: {
                padding: spacing[4],
              },
            }}
          >
            {actionRender()}
          </View>
        )}
      </View>
    )}
  </Theme.Consumer>
);

export default CourseSlat;
