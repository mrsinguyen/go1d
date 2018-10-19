import Downshift from "downshift";
import * as React from "react";
import { Manager, Popper, Reference } from "react-popper";
import View, { Props as ViewProps } from "../View";

interface Props extends ViewProps {
  children: ((params: any) => React.ReactNode);
  itemList: any;
  renderFunction: ((
    item: any,
    index: number,
    getItemProps: (options: any) => any
  ) => any);
  itemToString: ((item: any) => string);
  placement?:
    | "auto-start"
    | "auto"
    | "auto-end"
    | "top-start"
    | "top"
    | "top-end"
    | "right-start"
    | "right"
    | "right-end"
    | "bottom-end"
    | "bottom"
    | "bottom-start"
    | "left-end"
    | "left"
    | "left-start";
  offset?: string | number;
}

const Dropdown = ({
  children,
  itemList,
  renderFunction,
  css,
  itemToString,
  placement,
  offset,
  ...props
}: Props) => (
  <Downshift itemToString={itemToString}>
    {({
      getItemProps,
      getMenuProps,
      getRootProps,
      isOpen,
      ...downshiftParams
    }) => (
      <View {...getRootProps({ refKey: "innerRef" })}>
        <Manager>
          <Reference>
            {({ ref }) =>
              children({
                ref,
                ...downshiftParams,
              })
            }
          </Reference>
          {isOpen && (
            <Popper
              placement={placement}
              modifiers={offset && { offset: { offset } }}
            >
              {({ ref, style }) => (
                <View
                  {...getMenuProps({
                    refKey: "innerRef",
                  })}
                >
                  <View
                    backgroundColor="background"
                    boxShadow="strong"
                    borderRadius={3}
                    style={style}
                    innerRef={ref}
                    transition="none"
                    paddingY={3}
                    {...props}
                  >
                    {itemList.map((item, i) =>
                      renderFunction(item, i, getItemProps)
                    )}
                  </View>
                </View>
              )}
            </Popper>
          )}
        </Manager>
      </View>
    )}
  </Downshift>
);

export default Dropdown;