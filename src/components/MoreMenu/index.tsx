import * as React from "react";
import { ButtonProps } from "../Button";
import ButtonFilled from "../ButtonFilled";
import ButtonMinimal from "../ButtonMinimal";
import Dropdown from "../Dropdown";
import Theme from "../Theme";
import DropdownMenuItem, { Item as DropdownItem } from "./DropdownMenuItem";

export interface MoreMenuProps extends ButtonProps {
  isButtonFilled?: boolean;
  itemList: DropdownItem[];
}

interface State {
  showMenu: boolean;
}

const itemToString = (item: DropdownItem) => (item ? item.title : "");

class MoreMenu extends React.Component<MoreMenuProps, State> {
  public static defaultProps = {
    isButtonFilled: true,
  };

  constructor(props: any) {
    super(props);
    this.state = { showMenu: false };
  }

  public render() {
    const { isButtonFilled, itemList, size, ...props } = this.props;
    const buttonProps = {
      paddingX: 4,
      "aria-label": "open menu",
      size,
      marginLeft: "auto",
    };

    return (
      <Theme.Consumer>
        {({ colors, spacing }) => (
          <Dropdown
            itemList={itemList}
            renderFunction={DropdownMenuItem}
            itemToString={itemToString}
            placement="bottom-end"
            offset={isButtonFilled && `0, ${spacing[2]}, 0, 0`}
          >
            {({ ref, getToggleButtonProps }) =>
              isButtonFilled ? (
                <ButtonFilled
                  iconName="Ellipsis"
                  {...buttonProps}
                  {...getToggleButtonProps()}
                  innerRef={ref}
                  {...props}
                />
              ) : (
                <ButtonMinimal
                  iconName="Ellipsis"
                  innerRef={ref}
                  {...buttonProps}
                  {...getToggleButtonProps()}
                  {...props}
                />
              )
            }
          </Dropdown>
        )}
      </Theme.Consumer>
    );
  }
}

export default MoreMenu;
