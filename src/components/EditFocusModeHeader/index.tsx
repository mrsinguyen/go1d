import { takeRight } from "lodash";
import * as React from "react";
import Avatar from "../Avatar";
import ButtonFilled from "../ButtonFilled";
import ButtonMinimal from "../ButtonMinimal";
import Icon from "../Icon";
import MoreMenu from "../MoreMenu";
import { Item as SuffixItemProps } from "../MoreMenu/DropdownMenuItem";
import TabNavigation from "../TabNavigation";
import Text from "../Text";
import View from "../View";

export interface EditFocusModeHeaderProps {
  returnHref?: any;
  returnOnClick?: ((evt: React.SyntheticEvent) => void);
  headerSuffixItems?: SuffixItemProps[];
  returnIconName?: string;
  title: string;
  subtitle?: string | React.ReactNode;
  avatar?: string;
  avatarType?: "square" | "circle";
  tabs?: React.ReactNode;
}

const EditFocusModeHeader = ({
  returnHref,
  returnOnClick,
  headerSuffixItems,
  returnIconName = "Cross",
  subtitle,
  title,
  avatar,
  avatarType = "square",
  tabs,
}: EditFocusModeHeaderProps) => (
  <React.Fragment>
    <View flexDirection="row" borderBottom={1} borderColor="soft">
      <ButtonMinimal
        borderRadius={0}
        href={returnHref}
        onClick={returnOnClick}
        paddingY={6}
        paddingX={5}
        borderRight={1}
        borderColor="soft"
        width={64}
      >
        <Icon name={returnIconName} size={3} />
      </ButtonMinimal>
      <View
        flexGrow={1}
        alignItems="center"
        paddingX={6}
        flexDirection="row"
        flexShrink={1}
      >
        {avatar && (
          <View justifyContent="center" marginRight={4}>
            <Avatar
              iconName="Document"
              src={avatar}
              size={3}
              avatarType={avatarType}
            />
          </View>
        )}
        <View flexShrink={1}>
          <View marginBottom={1}>
            <Text
              ellipsis={true}
              fontSize={3}
              fontWeight="semibold"
              lineHeight="display"
            >
              {title}
            </Text>
          </View>
          {subtitle && <View>{subtitle}</View>}
        </View>
      </View>
      {headerSuffixItems && (
        <View marginLeft="auto" flexDirection="row-reverse" alignItems="center">
          <ButtonFilled
            href={headerSuffixItems[0].href}
            onClick={headerSuffixItems[0].onClick}
            borderRadius={0}
            height={65}
            color="accent"
            iconName={headerSuffixItems[0].iconName}
            marginLeft={2}
            css={{
              marginBottom: "-1px", // can not use marginBottomProp as -2px is too much
              boxShadow: "none",
              ":hover, :focus": {
                transform: "none",
                boxShadow: "none",
              },
            }}
          >
            {headerSuffixItems[0].title}
          </ButtonFilled>
          {headerSuffixItems[1] && (
            <ButtonMinimal
              href={headerSuffixItems[1].href}
              onClick={headerSuffixItems[1].onClick}
              iconName={headerSuffixItems[1].iconName}
              iconColor={headerSuffixItems[1].iconColor}
            >
              {headerSuffixItems[1].title}
            </ButtonMinimal>
          )}
          {headerSuffixItems[2] && (
            <MoreMenu
              isButtonFilled={false}
              itemList={takeRight(
                headerSuffixItems,
                headerSuffixItems.length - 2
              )}
            />
          )}
        </View>
      )}
    </View>
    {tabs && (
      <TabNavigation borderTop={0}>
        <View paddingLeft={6} flexDirection="row">
          {tabs}
        </View>
      </TabNavigation>
    )}
  </React.Fragment>
);

export default EditFocusModeHeader;
