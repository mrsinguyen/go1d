import * as React from "react";

import formatDuration from "../../utils/durationFormatter";
import Container from "../Container";
import Icon from "../Icon";
import Text from "../Text";
import View, { Props as ViewProps } from "../View";

export interface Props extends ViewProps {
  title: string;
  subtitle?: React.ReactNode;
  backgroundImage?: string;
  breadcrumb?: React.ReactNode;
  contentWidth?: "narrow" | "normal" | "wide" | "full";
  author?: React.ReactNode;
  duration?: number;
  ctaCard?: React.ReactNode;
}

const OverviewHero: React.SFC<Props> = ({
  children,
  backgroundImage,
  title,
  subtitle,
  breadcrumb,
  contentWidth,
  author,
  duration,
  ctaCard,
  ...props
}: Props) => (
  <View flexDirection="column">
    <View
      paddingX={8}
      paddingBottom={6}
      paddingTop={9}
      display="flex"
      flexDirection="row"
      alignItems="center"
      color={props.color ? props.color : "background"}
      css={{
        position: "relative",
        overflow: "hidden",
      }}
      {...props}
    >
      <View
        backgroundColor="muted"
        css={{
          zIndex: 0,
          backgroundImage: backgroundImage
            ? `url(${backgroundImage})`
            : undefined,
          backgroundPosition: "center",
          backgroundSize: "cover",
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
          "-webkit-filter": "opacity(64%) blur(12px)",
          filter: "opacity(64%) blur(12px)",
          "-webkit-transform": "scale(1.2)",
          transform: "scale(1.2)",
        }}
      />
      <Container
        contain={contentWidth ? contentWidth : "wide"}
        paddingX={4}
        css={{
          zIndex: 1,
        }}
      >
        {breadcrumb && (
          <View flexDirection="row" alignItems="center">
            <Icon
              name="ChevronLeft"
              color="background"
              size={1}
              marginRight={2}
            />
            <Text fontSize={1}>{breadcrumb}</Text>
          </View>
        )}
        <View marginY={2}>
          <Text element="h1" fontSize={5}>
            {title}
          </Text>
        </View>
        <Text fontSize={2}>{subtitle}</Text>
        <View flexDirection="row" marginTop={5} alignItems="center">
          {author && (
            <View flexDirection="row" alignItems="center" marginRight={5}>
              <Text fontSize={3} color="soft">
                {author}
              </Text>
            </View>
          )}
          {duration && (
            <View flexDirection="row" alignItems="center">
              <Icon name="Clock" color="muted" marginRight={3} />
              <Text fontSize={3}>{formatDuration(duration)}</Text>
            </View>
          )}
        </View>
      </Container>
    </View>
    <View padding={8}>
      <Container
        contain={contentWidth ? contentWidth : "wide"}
        paddingX={4}
        flexDirection="row"
      >
        <View flexGrow={1} flexShrink={1}>
          {children}
        </View>
        <View alignItems="flex-end">{ctaCard}</View>
      </Container>
    </View>
  </View>
);

export default OverviewHero;
