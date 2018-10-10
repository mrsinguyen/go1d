---
title: Data Table
status: ready
releaseVersion: 0.0.26
---

This component renders a table. It can do this in one of two ways. Either by supplying the rows to the table, or by supplying a function to render each row out. This uses the TR and TH components from the Table component.

## Examples

### Basic table with rows supplied

```.jsx
<DataTable
  rowHeight={55}
  totals="10 Items"
  rows={[
    <TR key="0">
        <TD><Text>Cell 0A</Text></TD>
        <TD><Text>Cell 0B</Text></TD>
        <TD><Text>Cell 0C</Text></TD>
        <TD><Text>Cell 0D</Text></TD>
        <TD><Text>Cell 0E</Text></TD>
    </TR>,
    <TR key="1">
        <TD><Text>Cell 1A</Text></TD>
        <TD><Text>Cell 1B</Text></TD>
        <TD><Text>Cell 1C</Text></TD>
        <TD><Text>Cell 1D</Text></TD>
        <TD><Text>Cell 1E</Text></TD>
    </TR>
  ]}
  header={[
    <TH key="0" text="Header A" />,
    <TH key="0" text="Header B" />,
    <TH key="0" text="Header C" />,
    <TH key="0" text="Header D" />,
    <TH key="0" text="Header E" />
  ]}
/>
```

```!jsx
<ComponentDoc component={DataTable} />
```

