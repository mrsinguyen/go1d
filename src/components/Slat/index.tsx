import * as React from "react";
import foundations from "../../foundations";
import formatPrice from "../../utils/priceFormatter";
import ButtonMinimal from "../ButtonMinimal";
import Dropdown from "../Dropdown";
import Icon from "../Icon";
import Skeleton from "../SlatSkeleton";
import Text from "../Text";
import Theme from "../Theme";
import View, { ViewProps } from "../View";

export interface SlatProps extends ViewProps {
  id?: number;
  topMeta?: string[];
  title?: string;
  description?: string;
  currency?: string;
  price?: number;
  bottomMeta?: Array<{
    icon?: string;
    text: string;
  }>;
  image?: string;
  type?: string;
  typeBackground?: string;
  dropdownItems?: Array<{
    icon?: string;
    text: string;
    action?: () => void;
  }>;
  dropdownRenderFn?: (item, index, getItemProps) => void;
}

const styles = {
  "&:hover, &:focus": {
    boxShadow: foundations.shadows.strong,
    cursor: "pointer",
    transform: "translateY(-1px)",
  },
  "&:active": {
    boxShadow: foundations.shadows.crisp,
    transform: "translateY(1px)",
  },
};

const defaultRenderFn = (item, index, getItemProps) => (
  <View
    key={index}
    {...getItemProps({
      key: index,
      item,
      index,
    })}
    onClick={item.action}
    width={200}
    paddingX={4}
    paddingY={4}
    flexDirection="row"
    alignItems="center"
    css={{
      cursor: "pointer",
      "&:hover, &:active": {
        backgroundColor: foundations.colors.faint,
      },
    }}
  >
    {item.icon && (
      <Icon name={item.icon} marginRight={foundations.spacing[2]} />
    )}
    {item.text && <Text>{item.text}</Text>}
  </View>
);

const itemToString = item => (item ? item.title : "");

const Slat: React.SFC<SlatProps> = ({
  id,
  topMeta,
  title,
  description,
  currency,
  price,
  bottomMeta,
  image,
  type,
  typeBackground = "background",
  dropdownItems,
  dropdownRenderFn = defaultRenderFn,
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

  return (
    <Theme.Consumer>
      {({ breakpoints, colors }) => {
        return (
          <View
            borderRadius={2}
            boxShadow="crisp"
            flexDirection="row"
            marginBottom={4}
            color="default"
            css={[
              {
                background: `${colors.background}`,
                overflow: "hidden",
                textDecoration: "none",
              },
              !dropdownItems && styles,
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
                backgroundImage: image ? `url(${image})` : undefined,
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
                  color={
                    typeBackground === "background" ? "contrast" : "background"
                  }
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
                  <Text
                    color={
                      typeBackground === "background"
                        ? "contrast"
                        : "background"
                    }
                    fontSize={1}
                  >
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
              <View
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
              >
                {topMeta && (
                  <View flexDirection="row">
                    {topMeta.map((meta, i) => (
                      <Text
                        display="flex"
                        color="subtle"
                        fontSize={1}
                        key={`${id}_top_meta_${i}`}
                      >
                        {meta}{" "}
                        {i !== topMeta.length - 1 && (
                          <Text marginX={3} fontSize={1}>
                            /
                          </Text>
                        )}
                      </Text>
                    ))}
                  </View>
                )}
                {dropdownItems &&
                  dropdownItems.length > 0 && (
                    <View
                      css={{
                        marginRight: "-10px",
                        marginBottom: "-5px",
                      }}
                    >
                      <Dropdown
                        placement="bottom"
                        itemToString={itemToString}
                        renderFunction={dropdownRenderFn}
                        itemList={dropdownItems}
                      >
                        {({ ref, getToggleButtonProps }) => (
                          <ButtonMinimal
                            {...getToggleButtonProps()}
                            innerRef={ref}
                            color="subtle"
                            size="sm"
                            marginBottom="-5px"
                          >
                            <Icon name="Ellipsis" />
                          </ButtonMinimal>
                        )}
                      </Dropdown>
                    </View>
                  )}
              </View>
              {title && (
                <Text
                  fontSize={3}
                  fontWeight="semibold"
                  ellipsis={true}
                  css={{
                    [breakpoints.sm]: {
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
                  marginBottom={4}
                  color="subtle"
                >
                  {description}
                </Text>
              )}
              <View flexDirection="row" justifyContent="space-between">
                {bottomMeta && (
                  <View flexDirection="row" flexGrow={1} alignItems="flex-end">
                    {bottomMeta.map((meta, i) => (
                      <Text
                        display="flex"
                        marginRight={5}
                        color="subtle"
                        fontSize={1}
                        key={`${id}_bottom_meta_${i}`}
                      >
                        {meta.icon && (
                          <Icon
                            name={meta.icon}
                            marginRight={3}
                            color="muted"
                          />
                        )}
                        {meta.text}
                      </Text>
                    ))}
                  </View>
                )}
                {currency &&
                  price > 0 && (
                    <View flexDirection="row">
                      <Text color="accent" fontWeight="semibold">
                        {formatPrice(currency, price)}
                      </Text>
                    </View>
                  )}
              </View>
            </View>
          </View>
        );
      }}
    </Theme.Consumer>
  );
};

export default Slat;
