import * as React from "react";
import foundations from "../../foundations";
import formatDuration from "../../utils/durationFormatter";
import Avatar from "../Avatar";
import Icon from "../Icon";
import Text from "../Text";
import Theme from "../Theme";
import View, { ViewProps } from "../View";

export interface CourseSlatProps extends ViewProps {
  courseImage?: string;
  title?: string;
  description?: string;
  author?: string | (() => React.ReactChild);
  authorAvatar?: string;
  duration?: number;
  actionRender?: () => React.ReactChild;
  contentRender?: () => React.ReactChild;
  type?: string;
  typeIcon?: string;
  passive?: boolean;
}

const hoverStyle = (colors, passive) => {
  const styles = { background: `${colors.background}` };
  if (!passive) {
    styles["&:hover, &:focus"] = {
      boxShadow: foundations.shadows.soft,
      transform: "translateY(-1px)",
    };
  }
  return styles;
};

const CourseSlat: React.SFC<CourseSlatProps> = ({
  courseImage,
  css,
  title,
  description,
  author,
  duration,
  actionRender,
  contentRender,
  type,
  typeIcon,
  passive,
  authorAvatar,
  ...props
}: CourseSlatProps) => (
  <Theme.Consumer>
    {({ spacing, breakpoints, colors }) => {
      return (
        <View
          borderRadius={2}
          boxShadow="crisp"
          flexDirection="row"
          marginBottom={4}
          color="default"
          css={[
            {
              ...((css as object) || {}),
              overflow: "hidden",
              textDecoration: "none",
            },
            hoverStyle(colors, passive),
          ]}
          {...props}
        >
          <View
            padding={3}
            alignItems="start"
            backgroundColor="default"
            backgroundOpacity={courseImage ? "none" : "emptyBackground"}
            css={{
              overflow: "hidden",
              backgroundImage: courseImage ? `url(${courseImage})` : undefined,
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
            {!courseImage && (
              <View
                alignItems="center"
                justifyContent="center"
                height="100%"
                width="100%"
                opacity="emptyIcon"
              >
                <Icon size={7} name="Empty" color="default" />
              </View>
            )}
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
                {typeIcon && (
                  <View paddingRight={2}>
                    <Icon name={typeIcon} />
                  </View>
                )}
                {type && (
                  <Text color="background" fontSize={1}>
                    {type.toUpperCase()}
                  </Text>
                )}
              </View>
            )}
          </View>
          <View
            paddingY={4}
            paddingX={5}
            flexShrink={1}
            flexGrow={1}
            width="100%"
          >
            {title && (
              <Text
                fontSize={3}
                fontWeight="semibold"
                css={{
                  marginBottom: 8,
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  [foundations.breakpoints.sm]: {
                    wordWrap: "break-word",
                    whiteSpace: "initial",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    display: "-webkit-box",
                    fontSize: foundations.type.scale.sm[2],
                  },
                }}
              >
                {title}
              </Text>
            )}
            {(duration || author) && (
              <View flexDirection="row" marginBottom={3} flexWrap="wrap">
                {authorAvatar && (
                  <View paddingRight={3}>
                    <Avatar src={authorAvatar} size={1} />
                  </View>
                )}
                {author && (
                  <View paddingRight={3}>
                    {typeof author === "string" ? (
                      <Text color="subtle" fontSize={1}>
                        {author}
                      </Text>
                    ) : (
                      author()
                    )}
                  </View>
                )}
                {!!duration && (
                  <View flexDirection="row">
                    <Icon
                      name="Clock"
                      size={1}
                      color="muted"
                      marginRight={2}
                      marginTop={1}
                    />
                    <Text color="subtle" fontSize={1}>
                      {formatDuration(duration)}
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
                  [foundations.breakpoints.sm]: {
                    display: "none",
                  },
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
      );
    }}
  </Theme.Consumer>
);

export default CourseSlat;
