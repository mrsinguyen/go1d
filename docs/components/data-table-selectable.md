---
title: Data Table Selectable
status: ready
releaseVersion: 0.0.77
---

This component extends the Data Table compoent to add the ability to select rows

## Examples

### Basic Table using a row renderer

```.jsx
<DataTableSelectable
  rowHeight={55}
  mainAction={(resp) => alert(`You did things with ${resp.invertSelection ? 2 - resp.unselectedItems.length : resp.selectedItems.length} items`)}
  mainActionText="Alert"
  total="2 Items"
  rowRenderer={({ index, isScrolling, isVisible, key, parent, style, checkBox }) => <TR key={key} style={style}>
    {checkBox}
    <TD>{index}</TD>
    <TD>{key}</TD>
  </TR>}
  rowCount={2}
  header={[
    <TH key="0" text="Index Number" />,
    <TH key="1" text="Key" />,
  ]}
/>
```

```!jsx
<ComponentDoc component="DataTableSelectableProps" />
```
