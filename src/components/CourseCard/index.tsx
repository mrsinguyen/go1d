import * as React from "react";
import foundations from "../../foundations";
import formatDuration from "../../utils/durationFormatter";
import formatPrice from "../../utils/priceFormatter";
import Icon from "../Icon";
import MoreMenu from "../MoreMenu";
import { Item as DropdownItem } from "../MoreMenu/DropdownMenuItem";
import Text from "../Text";
import Theme from "../Theme";
import View, { ViewProps } from "../View";
import Skeleton from "./Skeleton";

export interface CourseCardProps extends ViewProps {
  courseImage?: string;
  title?: string;
  author?: string | (() => React.ReactChild);
  duration?: number;
  type?: string;
  typeIcon?: string;
  passive?: boolean;
  itemList?: DropdownItem[];
  price?: number;
  currency?: string;
}

const interactiveStyle = (colors, passive) => {
  const styles = { background: `${colors.background}` };
  if (!passive) {
    styles["&:hover, &:focus"] = {
      boxShadow: foundations.shadows.strong,
      cursor: "pointer",
      transform: "translateY(-1px)",
    };
    styles["&:active"] = {
      boxShadow: foundations.shadows.crisp,
      transform: "translateY(1px)",
    };
  }
  return styles;
};

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
  price,
  currency,
  skeleton = false,
  ...props
}: CourseCardProps) => {
  if (skeleton) {
    return <Skeleton />;
  }

  return (
    <Theme.Consumer>
      {({ spacing, colors }) => {
        return (
          <View
            borderRadius={2}
            boxShadow="crisp"
            color="default"
            height="100%"
            width={221}
            css={[
              css,
              {
                textDecoration: "none",
              },
              interactiveStyle(colors, passive),
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
                backgroundImage: courseImage
                  ? `url(${courseImage})`
                  : undefined,
                backgroundSize: "cover",
                position: "relative",
                height: 128,
                width: 221,
                maxWidth: "100%",
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
            <View padding={4} flexGrow={1}>
              <View
                flexDirection="row"
                justifyContent="space-between"
                paddingBottom={2}
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
                    <MoreMenu
                      itemList={itemList}
                      isButtonFilled={false}
                      width={20}
                      height={20}
                      paddingY={0}
                      backgroundColor="transparent"
                      css={{
                        ":hover, :focus": {
                          background: "none",
                          svg: {
                            color: colors.subtle,
                          },
                        },
                        paddingRight: 0,
                      }}
                    />
                  )}
              </View>
              {author && (
                <View paddingBottom={2}>
                  <Text fontSize={1} color="subtle">
                    {author}
                  </Text>
                </View>
              )}
              {!!duration && (
                <View flexDirection="row" paddingTop={3}>
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
              {children && <Text>{children}</Text>}
              {currency &&
                price > 0 && (
                  <View flexDirection="row" marginTop="auto" paddingTop={3}>
                    <Text color="accent">{formatPrice(currency, price)}</Text>
                  </View>
                )}
            </View>
          </View>
        );
      }}
    </Theme.Consumer>
  );
};

export default CourseCard;
