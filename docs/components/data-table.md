---
title: Data Table
status: ready
releaseVersion: 0.0.40
---

This component renders a table. It can do this in one of two ways. Either by supplying the rows to the table, or by supplying a function to render each row out. This uses the TR and TH components from the Table component.

## Examples

### Basic Table using a row renderer
```.jsx
<DataTable
  rowHeight={55}
  total="10 Items"
  rowRenderer={({ index, isScrolling, isVisible, key, parent, style }) => <TR key={key} style={style}>
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

### Experimental: Auto Row Height

Setting auto row height to true means you dont have to set the row height manually. However, this may produce unexpected results
```.jsx
<DataTable
  autoRowHeight
  total="10 Items"
  rowRenderer={({ index, isScrolling, isVisible, key, parent, style }) => <TR key={key} style={style}>
    <TD>{index}</TD>
    <TD>{key}</TD>
  </TR>}
  rowCount={3}
  header={[
    <TH key="0" text="Index Number" />,
    <TH key="1" text="Key" />,
  ]}
/>
```

```!jsx
<ComponentDoc component="DataTableProps" />
```