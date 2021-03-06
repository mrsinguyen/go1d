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
  author?: string;
  backgroundImage?: string;
  children?: React.ReactNode;
  ctaButton?: React.ReactNode;
  currency?: string;
  dislikes?: number;
  duration?: number;
  enrolled?: number;
  likes?: number;
  metaData?: React.ReactNode;
  price?: number;
  subtitle?: React.ReactNode;
  title?: string;
}

const MobileDisplayBreak = "@media(max-width: 1023px)";

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

class OverviewCtaCard extends React.Component<OverviewCtaCardProps, any> {
  public static defaultProps = {
    dislikes: 0,
    enrolled: 0,
    likes: 0,
  };

  public render() {
    const {
      actions,
      author,
      backgroundImage,
      children,
      ctaButton,
      currency,
      dislikes,
      duration,
      enrolled,
      likes,
      metaData,
      price,
      subtitle,
      title,
      ...props
    } = this.props;

    // determine which sections will be displayed
    const sections = {
      mobile: {
        top:
          this.props.title ||
          this.props.enrolled > 0 ||
          this.props.metaData ||
          this.props.children ||
          (this.props.price > 0 && this.props.currency),
        bottom:
          this.props.likes > 0 ||
          this.props.dislikes > 0 ||
          (this.props.actions && this.props.actions.length > 0),
      },
      desktop: {
        top:
          this.props.likes > 0 ||
          this.props.dislikes > 0 ||
          (this.props.actions && this.props.actions.length > 0) ||
          this.props.enrolled > 0 ||
          this.props.metaData ||
          this.props.children ||
          (this.props.price > 0 && this.props.currency),
      },
    };

    return (
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
          right: `${foundations.spacing[0]}px`,
          [MobileDisplayBreak]: {
            position: "relative",
          },
        }}
        {...props}
      >
        {/* mobile */}

        <View
          css={{
            display: "none",
            [MobileDisplayBreak]: {
              display: "flex",
            },
          }}
        >
          {sections.mobile.top && this.renderMobileTopSection()}

          {ctaButton && (
            <View borderTop={1} borderColor="soft" padding={5}>
              {ctaButton}
            </View>
          )}

          {sections.mobile.bottom && this.renderMobileBottomSection()}
        </View>

        {/* desktop */}

        <View
          css={{
            [MobileDisplayBreak]: {
              display: "none",
            },
          }}
        >
          {backgroundImage && (
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
          )}

          <View padding={5}>
            {sections.desktop.top && this.renderDesktopTopSection()}

            {ctaButton && (
              <View
                borderTop={sections.desktop.top ? 1 : 0}
                borderColor={sections.desktop.top ? "soft" : "none"}
                marginTop={sections.desktop.top ? 5 : 0}
                paddingTop={sections.desktop.top ? 5 : 0}
              >
                {ctaButton}
              </View>
            )}
          </View>
        </View>
      </View>
    );
  }

  private renderDesktopTopSection() {
    const {
      actions,
      children,
      currency,
      dislikes,
      enrolled,
      likes,
      metaData,
      price,
    } = this.props;

    // the top margin above the price and enrolments information depends on previous elements
    const desktopPriceTopMargin =
      actions || children || likes || dislikes || enrolled || metaData ? 6 : 0;

    const desktopEnrolmentsTopMargin =
      likes > 0 || dislikes > 0 || (actions && actions.length > 0) ? 5 : 0;

    return (
      <View>
        {(likes > 0 || dislikes > 0 || (actions && actions.length > 0)) && (
          <View flexDirection="row" justifyContent="space-between">
            {(likes > 0 || dislikes > 0) && this.renderLikes()}

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

        {enrolled > 0 && this.renderEnrolments(desktopEnrolmentsTopMargin)}

        {metaData}

        {children && <View marginTop={3}>{children}</View>}

        {price > 0 && currency && this.renderPrice(desktopPriceTopMargin)}
      </View>
    );
  }

  private renderMobileTopSection() {
    const {
      author,
      children,
      currency,
      duration,
      enrolled,
      metaData,
      price,
      subtitle,
      title,
    } = this.props;

    return (
      <View
        padding={5}
        flexDirection="column"
        justifyContent="space-between"
        flexGrow={1}
        flexShrink={2}
      >
        {title && (
          <Text element="h1" fontSize={5} fontWeight="semibold">
            {title}
          </Text>
        )}

        {subtitle && (
          <View marginTop={2}>
            <Text fontSize={1} color="subtle">
              {subtitle}
            </Text>
          </View>
        )}

        {enrolled > 0 && this.renderEnrolments()}

        {(author || duration > 0) && (
          <View marginTop={4}>
            <View
              flexDirection="row"
              alignItems="center"
              flexWrap="wrap"
              marginTop={-4}
            >
              {author && (
                <View
                  flexDirection="row"
                  alignItems="center"
                  marginRight={5}
                  marginTop={4}
                >
                  <Text fontSize={1} color="subtle">
                    {author}
                  </Text>
                </View>
              )}

              {duration > 0 && (
                <View flexDirection="row" alignItems="center" marginTop={4}>
                  <Icon name="Clock" color="muted" marginRight={3} />
                  <Text fontSize={1} color="subtle" fontWeight="semibold">
                    {formatDuration(duration)}
                  </Text>
                </View>
              )}
            </View>
          </View>
        )}

        {currency && price > 0 && this.renderPrice()}

        {metaData}

        {children && <View marginTop={3}>{children}</View>}
      </View>
    );
  }

  private renderMobileBottomSection() {
    const { actions, dislikes, likes } = this.props;

    return (
      <View
        padding={5}
        flexDirection="row"
        justifyContent="space-between"
        borderTop={1}
        borderColor="soft"
      >
        {(likes > 0 || dislikes > 0) && this.renderLikes()}

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
    );
  }

  private renderLikes() {
    const { likes, dislikes } = this.props;

    return (
      <View flexDirection="row" alignItems="center">
        <View flexDirection="row" alignItems="center">
          <Icon name="ThumbsUp" color="subtle" size={2} marginRight={3} />
          <Text color="subtle">{likes}</Text>
        </View>
        <View flexDirection="row" alignItems="center" marginLeft={4}>
          <Icon name="ThumbsDown" color="subtle" size={2} marginRight={3} />
          <Text color="subtle">{dislikes}</Text>
        </View>
      </View>
    );
  }

  private renderEnrolments(desktopTopMargin: number = 0) {
    const { enrolled } = this.props;

    return (
      <View
        flexDirection="row"
        alignItems="center"
        marginTop={desktopTopMargin}
        css={{
          [MobileDisplayBreak]: {
            marginTop: foundations.spacing[4],
          },
        }}
      >
        <Avatar size={[5, 5, 3]} marginRight={3} backgroundColor="faded" />
        <Text fontSize={[3, 3, 2]} color="subtle">
          {enrolled} enrolled
        </Text>
      </View>
    );
  }

  private renderPrice(desktopTopMargin: number = 0) {
    const { currency, price } = this.props;

    return (
      <View
        flexDirection="row"
        alignItems="baseline"
        marginTop={desktopTopMargin}
        css={{
          [MobileDisplayBreak]: {
            marginTop: foundations.spacing[6],
          },
        }}
      >
        <Text
          fontSize={5}
          fontWeight="semibold"
          css={{
            [MobileDisplayBreak]: {
              fontSize: foundations.type.scale.sm[4],
            },
          }}
        >
          {formatPrice(currency, price)}
        </Text>
        <Text marginLeft={3} fontSize={1}>
          <abbr title="per person">pp</abbr>
        </Text>
      </View>
    );
  }
}

export default OverviewCtaCard;
