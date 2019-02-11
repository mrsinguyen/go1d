import * as React from "react";
import foundations from "../../foundations";
// import formatDuration from "../../utils/durationFormatter";
// import formatPrice from "../../utils/priceFormatter";
// import Avatar from "../Avatar";
import Icon from "../Icon";
import Text from "../Text";
import Theme from "../Theme";
import View, { ViewProps } from "../View";
import Skeleton from "./Skeleton";

export interface SlatProps extends ViewProps {
  topMeta?: any[];
  title?: string;
  description?: string;
  currency?: string;
  price?: number;
  bottomMeta?: any[];
  image?: string;
  type?: string;
  typeBackground?: string;
}

const styles = {
  background: `${foundations.colors.background}`,
  "&:hover, &:focus": {
    boxShadow: foundations.shadows.strong,
    cursor: "pointer",
    transform: "translateY(-1px)",
  },
  "&:active": {
    boxShadow: foundations.shadows.crisp,
    transform: "translateY(1px)",
  },
}

const Slat: React.SFC<SlatProps> = ({
  topMeta,
  title,
  description,
  currency,
  price,
  bottomMeta,
  image,
  type,
  typeBackground = "background",
  skeleton = false,
  ...props
}: SlatProps) => {
  if (skeleton) {
    return <Skeleton />;
  }

  let icon;
  switch (type) {
    case "event":
      icon = "Calendar";
      break;
    case "course":
      icon = "Course";
      break;
    default:
      icon = "Course";
  }

  console.log(bottomMeta);

  return (
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
                overflow: "hidden",
                textDecoration: "none",
              },
              styles,
            ]}
            {...props}
          >
            <View
              padding={3}
              alignItems="start"
              backgroundColor="default"
              backgroundOpacity={image ? "none" : "emptyBackground"}
              css={{
                overflow: "hidden",
                backgroundImage: image
                  ? `url(${image})`
                  : undefined,
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
              {!image && (
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
              {type && (
                <View
                  flexDirection="row"
                  padding={2}
                  borderRadius={1}
                  color={typeBackground === "background" ? "contrast" : "background"}
                  backgroundColor={typeBackground}
                  css={{
                    position: "absolute",
                    bottom: 10,
                    left: 10,
                  }}
                >
                  <View paddingRight={2}>
                    <Icon name={icon} />
                  </View>
                  <Text color={typeBackground === "background" ? "contrast" : "background"} fontSize={1}>
                    {type && type.toUpperCase()}
                  </Text>
                </View>
              )}
            </View>
            <View
              paddingY={4}
              paddingX={5}
              flexShrink={1}
              flexGrow={1}
              width="100%"
              flexDirection="column"
              justifyContent="space-between"
            >
              {topMeta && (
                <View flexDirection="row">
                  {topMeta.map((meta, i) => (
                    <Text display="flex" color="subtle" fontSize={1}>
                      {meta} {i !== (topMeta.length - 1) && (<Text marginX={3}>/</Text>)}
                    </Text>
                  ))}
                </View>
              )}
              {title && (
                <Text
                  fontSize={3}
                  fontWeight="semibold"
                  ellipsis={true}
                  marginY={1}
                  css={{
                    [foundations.breakpoints.sm]: {
                      wordWrap: "break-word",
                      whiteSpace: "initial",
                      lineHeight: 1.2,
                      maxHeight: "2.4rem",
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
              {description && (
                <Text
                  fontSize={2}
                  ellipsis={true}
                  color="subtle"
                >
                  {description}
                </Text>
              )}
              {bottomMeta && (
                <View flexDirection="row" flexGrow={1} alignItems="flex-end">
                  {bottomMeta.map((meta, i) => (
                    <Text display="flex" marginRight={5} color="subtle" fontSize={1}>
                      {meta.icon && (
                        <Icon name={meta.icon} marginRight={3} />
                      )}
                      {meta.text}
                    </Text>
                  ))}
                </View>
              )}
            </View>
          </View>
        );
      }}
    </Theme.Consumer>
  );
};

export default Slat;
