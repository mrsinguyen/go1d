import * as React from "react";
import ButtonMinimal, { ButtonMinimalProps } from "../../ButtonMinimal";
import Text from "../../Text";

export interface Item extends ButtonMinimalProps {
  title: string;
  href?: any;
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
    justifyContent="flex-start"
    paddingTop={3}
    paddingRight={4}
    paddingBottom={3}
    paddingLeft={4}
    borderRadius={0}
    {...item}
  >
    <Text>{item.title}</Text>
  </ButtonMinimal>
);

export default DropdownMenu;
