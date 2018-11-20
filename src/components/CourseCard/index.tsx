import * as React from "react";
import formatDuration from "../../utils/durationFormatter";
import ButtonMinimal from "../ButtonMinimal";
import Dropdown from "../Dropdown";
import Icon from "../Icon";
import DropdownMenuItem, {
  Item as DropdownItem,
} from "../MoreMenu/DropdownMenuItem";
import Text from "../Text";
import Theme from "../Theme";
import View, { ViewProps } from "../View";

export interface CourseCardProps extends ViewProps {
  courseImage?: string;
  title?: string;
  author?: string | (() => React.ReactChild);
  duration?: number;
  type?: string;
  typeIcon?: string;
  passive?: boolean;
  itemList?: DropdownItem[];
}

const backgroundStyles = (colors, passive) => {
  const styles = { background: `${colors.background}` };
  if (!passive) {
    styles["&:hover, &:focus"] = {
      background: `${colors.gradients.darkWarmOverlay}, ${colors.background}`,
    };
  }
  return styles;
};

const itemToString = (item: DropdownItem) => (item ? item.title : "");

const CourseCard: React.SFC<CourseCardProps> = ({
  author,
  courseImage,
  css,
  children,
  duration,
  passive = true,
  itemList,
  title,
  type,
  typeIcon,
  ...props
}: CourseCardProps) => (
  <Theme.Consumer>
    {({ spacing, breakpoints, colors }) => {
      return (
        <View
          borderRadius={2}
          boxShadow="crisp"
          color="default"
          height="100%"
          css={[
            {
              ...((css as object) || {}),
              textDecoration: "none",
              width: 221,
            },
            backgroundStyles(colors, passive),
          ]}
          {...props}
        >
          <View
            padding={3}
            alignItems="start"
            backgroundColor="default"
            backgroundOpacity={courseImage ? "none" : "emptyBackground"}
            css={{
              borderRadius: `${spacing[2]}px ${spacing[2]}px 0 0`,
              overflow: "hidden",
              backgroundImage: courseImage ? `url(${courseImage})` : undefined,
              backgroundSize: "cover",
              position: "relative",
              height: 142,
              width: 221,
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
                {typeIcon && <Icon paddingRight={1} name={typeIcon} />}
                {type && (
                  <Text color="background" fontSize={1}>
                    {type.toUpperCase()}
                  </Text>
                )}
              </View>
            )}
          </View>
          <View padding={4}>
            <View
              flexDirection="row"
              justifyContent="space-between"
              paddingBottom={3}
            >
              {title && (
                <Text
                  fontWeight="semibold"
                  css={{
                    paddingRight: spacing[3],
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    "-webkit-box-orient": "vertical",
                    overflow: "hidden",
                  }}
                >
                  {title}
                </Text>
              )}
              {itemList &&
                itemList.length > 0 && (
                  <Dropdown
                    placement="bottom-end"
                    renderFunction={DropdownMenuItem}
                    itemToString={itemToString}
                    itemList={itemList}
                  >
                    {({ ref, getToggleButtonProps }) => (
                      <ButtonMinimal
                        width={20}
                        height={20}
                        backgroundColor="transparent"
                        css={{
                          paddingTop: 0,
                          paddingBottom: 0,
                          ":hover, :focus": {
                            background: "none",
                            svg: {
                              color: colors.subtle,
                            },
                          },
                          paddingRight: 0,
                        }}
                        paddingX={0}
                        innerRef={ref}
                        iconName="Ellipsis"
                        {...getToggleButtonProps()}
                      />
                    )}
                  </Dropdown>
                )}
            </View>
            {author && (
              <View paddingBottom={3}>
                <Text fontSize={1} color="light">
                  {author}
                </Text>
              </View>
            )}
            {duration && (
              <View flexDirection="row">
                <Icon
                  name="Clock"
                  size={1}
                  color="subtle"
                  marginRight={2}
                  marginTop={1}
                />
                <Text color="subtle" fontSize={1}>
                  {formatDuration(duration)}
                </Text>
              </View>
            )}
            {children && <Text>{children}</Text>}
          </View>
        </View>
      );
    }}
  </Theme.Consumer>
);

export default CourseCard;