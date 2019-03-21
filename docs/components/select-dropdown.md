---
title: Select Dropdown
status: ready
---
### Base
```.jsx
  <SelectDropdown
  options={[
    { "value": "chocolate", label: "Chocolate" },
    { "value": "strawberry", label: "Strawberry" },
    { "value": "vanilla", label: "Vanilla" }
  ]}
  onChange={(selection) => window.alert(`You selected ${selection.label}`)}
  handleSearchChange={(search) => console.log(search)}
  searchPlaceholder="Search for ..."
  closeOnSelection={false}
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
 </SelectDropdown>
```
