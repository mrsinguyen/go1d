import * as React from "react";

import foundations from "../../foundations";
import formatDuration from "../../utils/durationFormatter";
import Avatar from "../Avatar";
import ButtonMinimal from "../ButtonMinimal";
import Dropdown from "../Dropdown";
import Icon from "../Icon";
import Text from "../Text";
import View, { Props as ViewProps } from "../View";

export interface Props extends ViewProps {
  backgroundImage?: string;
  likes?: number;
  dislikes?: number;
  enrolled?: number;
  ctaButton?: React.ReactNode;
  actions?: Array<{
    title: string;
    onClick: ((evt: React.SyntheticEvent) => void);
  }>;
}

const MobileDisplayBreak = "@media(max-width: 740px)";

const renderFunction = (item, index, getItemProps) => (
  <ButtonMinimal
    key={index}
    href={item.href}
    size="md"
    {...getItemProps({
      key: index,
      item,
      index,
    })}
    color={item.color || "default"}
    iconName={item.iconName}
    iconColor={item.iconColor}
    paddingX={4}
    borderRadius={0}
    onClick={item.onClick}
    css={{
      justifyContent: "flex-start",
    }}
  >
    <Text>{item.title}</Text>
  </ButtonMinimal>
);

const itemToString = item => (item ? item.title : "");

const OverviewCtaCard: React.SFC<Props> = ({
  children,
  backgroundImage,
  likes = 0,
  dislikes = 0,
  enrolled = 0,
  ctaButton,
  actions,
  breadcrumb,
  title,
  author,
  duration,
  subtitle,
  ...props
}: Props) => (
  <View
    boxShadow="soft"
    backgroundColor="background"
    maxWidth={430}
    width="100%"
    borderRadius={2}
    flexGrow={1}
    zIndex={1}
    css={{
      position: "absolute",
      [MobileDisplayBreak]: {
        position: "relative",
      },
    }}
    {...props}
  >
    <View
      backgroundColor="soft"
      height={230}
      css={{
        borderRadius: `${foundations.spacing[2]}px ${
          foundations.spacing[2]
        }px 0 0`,
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    />
    <View
      paddingX={5}
      paddingTop={3}
      paddingBottom={4}
      flexDirection="row"
      justifyContent="space-between"
      flexGrow={1}
      flexShrink={2}
      borderBottom={1}
      borderColor="soft"
      css={{
        display: "none",
        [MobileDisplayBreak]: {
          display: "block",
        },
      }}
    >
      <View marginY={2}>
        <Text element="h1" fontSize={4}>
          {title}
        </Text>
      </View>
      <Text fontSize={2}>{subtitle}</Text>
      <View flexDirection="row" marginTop={3} alignItems="center">
        {author && (
          <View flexDirection="row" alignItems="center" marginRight={5}>
            <Text fontSize={2} color="default">
              {author}
            </Text>
          </View>
        )}
        {duration && (
          <View flexDirection="row" alignItems="center">
            <Icon name="Clock" color="subtle" marginRight={3} />
            <Text fontSize={2} color="default">
              {formatDuration(duration)}
            </Text>
          </View>
        )}
      </View>
    </View>
    <View
      paddingX={5}
      paddingTop={3}
      paddingBottom={2}
      flexDirection="row"
      justifyContent="space-between"
    >
      {likes > 0 &&
        dislikes > 0 && (
          <View flexDirection="row" alignItems="center">
            {likes > 0 && (
              <React.Fragment>
                <Icon name="ThumbsUp" paddingX={1} />
                {likes}
              </React.Fragment>
            )}
            {dislikes > 0 && (
              <React.Fragment>
                <Icon name="ThumbsDown" paddingX={1} marginLeft={3} />
                {dislikes}
              </React.Fragment>
            )}
          </View>
        )}
      {actions &&
        actions.length > 0 && (
          <View marginLeft="auto">
            <Dropdown
              itemToString={itemToString}
              borderRadius={2}
              renderFunction={renderFunction}
              itemList={actions}
              placement="bottom-end"
            >
              {({ ref, getToggleButtonProps }) => (
                <View width="32">
                  <ButtonMinimal
                    {...getToggleButtonProps()}
                    innerRef={ref}
                    size="md"
                  >
                    <Icon name="Ellipsis" />
                  </ButtonMinimal>
                </View>
              )}
            </Dropdown>
          </View>
        )}
    </View>
    <View paddingX={5} paddingTop={0} paddingBottom={5}>
      {enrolled > 0 && (
        <View marginY={3} flexDirection="row" alignItems="center">
          <Avatar size={2} marginRight={2} backgroundColor="highlight" />
          <Text fontSize={2}>{enrolled} enrolled</Text>
        </View>
      )}
      <View
        borderBottom={1}
        borderColor="soft"
        marginTop={3}
        marginBottom={6}
        paddingBottom={6}
      >
        {children}
      </View>
      {ctaButton}
    </View>
  </View>
);

export default OverviewCtaCard;
