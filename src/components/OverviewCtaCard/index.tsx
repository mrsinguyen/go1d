import * as React from "react";

import foundations from "../../foundations";
import formatDuration from "../../utils/durationFormatter";
import formatPrice from "../../utils/priceFormatter";
import Avatar from "../Avatar";
import ButtonMinimal from "../ButtonMinimal";
import Dropdown from "../Dropdown";
import Icon from "../Icon";
import Text from "../Text";
import View, { ViewProps } from "../View";

export interface OverviewCtaCardProps extends ViewProps {
  actions?: Array<{
    title: string;
    onClick: ((evt: React.SyntheticEvent) => void);
  }>;
  backgroundImage?: string;
  ctaButton?: React.ReactNode;
  currency?: string;
  dislikes?: number;
  enrolled?: number;
  hideBackgroundImageFrom?: "sm" | "md" | "lg";
  likes?: number;
  metaData?: React.ReactNode;
  price?: number;
  showBackgroundImageFrom?: "sm" | "md" | "lg";
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

const backgroundImageDisplayDirectives = (showFrom, hideFrom) => {
  let css = {};

  if (showFrom) {
    css = {
      display: "none",
      [foundations.breakpoints[showFrom]]: {
        display: "inherit",
      },
    };
  }

  if (hideFrom) {
    css = {
      ...css,
      [foundations.breakpoints[hideFrom]]: {
        display: "none",
      },
    };
  }

  return css;
};

const OverviewCtaCard: React.SFC<OverviewCtaCardProps> = ({
  actions,
  author,
  backgroundImage,
  breadcrumb,
  children,
  ctaButton,
  currency,
  dislikes = 0,
  duration,
  enrolled = 0,
  hideBackgroundImageFrom,
  likes = 0,
  metaData,
  price,
  title,
  showBackgroundImageFrom,
  subtitle,
  ...props
}: OverviewCtaCardProps) => (
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
        ...backgroundImageDisplayDirectives(
          showBackgroundImageFrom,
          hideBackgroundImageFrom
        ),
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
      css={{
        display: "none",
        [MobileDisplayBreak]: {
          display: "block",
        },
      }}
    >
      {title && (
        <Text element="h1" fontSize={5} fontWeight="semibold">
          {title}
        </Text>
      )}
      {subtitle && <View marginTop={3}>{subtitle}</View>}
      {enrolled > 0 && (
        <View marginTop={4} flexDirection="row" alignItems="center">
          <Avatar size={3} marginRight={3} backgroundColor="faded" />
          <Text fontSize={1} color="subtle">
            {enrolled} enrolled
          </Text>
        </View>
      )}
      {(author || duration) && (
        <View flexDirection="row" marginTop={4} alignItems="center">
          {author && (
            <View flexDirection="row" alignItems="center" marginRight={5}>
              <Text fontSize={1} color="subtle">
                {author}
              </Text>
            </View>
          )}
          {duration && (
            <View flexDirection="row" alignItems="center">
              <Icon name="Clock" color="muted" marginRight={3} />
              <Text fontSize={1} color="subtle" fontWeight="semibold">
                {formatDuration(duration)}
              </Text>
            </View>
          )}
        </View>
      )}
      {currency &&
        price && (
          <View flexDirection="row" alignItems="baseline" marginTop={6}>
            <Text color="default" fontSize={4} fontWeight="semibold">
              {formatPrice(currency, price)}
            </Text>
            <Text marginLeft={3} fontSize={1}>pp</Text>
          </View>
        )}
    </View>
    {ctaButton && (
      <View
        borderTop={1}
        borderColor="soft"
        padding={5}
        css={{
          display: "none",
          [MobileDisplayBreak]: {
            display: "flex",
          },
        }}
      >
        {ctaButton}
      </View>
    )}
    <View
      padding={5}
      css={{
        [MobileDisplayBreak]: {
          display: "none",
        },
      }}
    >
      <View flexDirection="row" justifyContent="space-between">
        {likes > 0 &&
          dislikes > 0 && (
            <View flexDirection="row" alignItems="center">
              {likes > 0 && (
                <View flexDirection="row" alignItems="center">
                  <Icon
                    name="ThumbsUp"
                    color="subtle"
                    size={2}
                    marginRight={3}
                  />
                  <Text color="subtle">{likes}</Text>
                </View>
              )}
              {dislikes > 0 && (
                <View flexDirection="row" alignItems="center" marginLeft={4}>
                  <Icon
                    name="ThumbsDown"
                    color="subtle"
                    size={2}
                    marginRight={3}
                  />
                  <Text color="subtle">{dislikes}</Text>
                </View>
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
      {enrolled > 0 && (
        <View marginTop={5} flexDirection="row" alignItems="center">
          <Avatar size={3} marginRight={3} backgroundColor="faded" />
          <Text fontSize={2} color="subtle">
            {enrolled} enrolled
          </Text>
        </View>
      )}
      {metaData}
      {children && <View marginTop={3}>{children}</View>}
      {ctaButton && (
        <View borderTop={1} borderColor="soft" marginTop={5} paddingTop={5}>
          {ctaButton}
        </View>
      )}
    </View>
    {(likes > 0 || dislikes > 0 || actions) && (
      <View
        padding={5}
        flexDirection="row"
        justifyContent="space-between"
        borderTop={1}
        borderColor="soft"
        css={{
          display: "none",
          [MobileDisplayBreak]: {
            display: "flex",
          },
        }}
      >
        {likes > 0 &&
          dislikes > 0 && (
            <View flexDirection="row" alignItems="center">
              {likes > 0 && (
                <View flexDirection="row" alignItems="center">
                  <Icon
                    name="ThumbsUp"
                    color="muted"
                    size={5}
                    marginRight={3}
                  />
                  <Text>{likes}</Text>
                </View>
              )}
              {dislikes > 0 && (
                <View flexDirection="row" alignItems="center" marginLeft={5}>
                  <Icon
                    name="ThumbsDown"
                    color="muted"
                    size={5}
                    marginRight={3}
                  />
                  <Text>{dislikes}</Text>
                </View>
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
    )}
  </View>
);

export default OverviewCtaCard;
