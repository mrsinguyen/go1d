import React from 'react';
import {storiesOf} from '@storybook/react';
import {Dropdown,ButtonFilled,ButtonMinimal,Text,View} from '../src';
storiesOf("Dropdown", module)
.add('children', () => {({ ref }) =>(
    <ButtonFilled innerRef={ref} marginLeft="auto" onClick={toggleDropdown}>
      I am a button
    </ButtonFilled>
  )
})
.add('Basic dropdown', () => <Dropdown
  placement="bottom"
  renderFunction={(item, index, getItemProps) => (
    <View
      key={index}
      {...getItemProps({
        key: index,
        item,
        index,
      })}
      width={200}
      paddingX={3}
      paddingY={2}
    >
      <Text>{item.title}</Text>
    </View>
  )}
  itemList={[
    {
      title: "Element 0",
    },
    {
      title: "Element 1",
    },
    {
      title: "Element 3",
    },
  ]}
>
  {({ ref, getToggleButtonProps }) => (
    <View width="70">
      <ButtonFilled
        {...getToggleButtonProps()}
        innerRef={ref}
        color="accent"
      >
        Button
      </ButtonFilled>
    </View>
  )}
</Dropdown>)
.add('Dropdown with complex items', () => <View>
  <Dropdown
    itemToString={item => (item ? item.title : "")}
    renderFunction={(item, index, getItemProps) => (
        <ButtonMinimal
          key={index}
          href={item.href}
          size="lg"
          {...getItemProps({
            key: index,
            item,
            index,
          })}
          color={item.color || "default"}
          iconName={item.iconName}
          iconColor={item.iconColor}
          css={{
            justifyContent: "flex-start",
          }}
        >
          <Text>{item.title}</Text>
        </ButtonMinimal>
    )}
    itemList={[
      {
        title: "Add",
        href: "#testing",
        iconName: "Plus",
        iconColor: "muted"
      },
      {
        title: "Delete",
        href: "#testing",
        color: "danger",
        iconName: "Trash",
      },
    ]}
    placement="right"
  >
  {({ ref, getToggleButtonProps }) => <View width="70"><ButtonFilled {...getToggleButtonProps()} innerRef={ref} color="accent">Button</ButtonFilled></View>}
  </Dropdown>
</View>)
