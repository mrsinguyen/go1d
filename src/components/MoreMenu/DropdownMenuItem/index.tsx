import * as React from "react";
import ButtonMinimal from "../../ButtonMinimal";
import Text from "../../Text";

export interface Item {
  title: string;
  href?: string;
  iconName?: string;
  color?: string;
  iconColor?: string;
  onClick?: ((evt: React.SyntheticEvent) => void);
}

const DropdownMenu = (item: Item, index: number, getItemProps) => (
  <ButtonMinimal
    key={index}
    href={item.href}
    {...getItemProps({
      key: index,
      item,
      index,
    })}
    color={item.color || "default"}
    iconName={item.iconName}
    iconColor={item.iconColor}
    justifyContent="flex-start"
    paddingTop={3}
    paddingRight={4}
    paddingBottom={3}
    paddingLeft={4}
    borderRadius={0}
    onClick={item.onClick}
  >
    <Text>{item.title}</Text>
  </ButtonMinimal>
);

export default DropdownMenu;
