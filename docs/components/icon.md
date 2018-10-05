---
title: Icon
status: ready
releaseVersion: 0.0.11
---

```.jsx
<Icon name="Go1Logo" />
```


### Colors

Supply a color by the color prop. The available colors can be found in the Colors section.
```.jsx
<Icon name="Go1Logo" color="accent"/>
```

### Size

Define size with the size prop. This uses font sizing to determine the size, so the value is the index on the font size array that you require.

```.jsx
<Icon name="Go1Logo" size={1}/> <br />
<Icon name="Go1Logo" size={4}/> <br />
<Icon name="Go1Logo" size={7}/> <br />
```

```!jsx
<ComponentDoc component={Icon} />
```

### Icon Types

This is an exhaustive list of all icons currently in the system

```!jsx
<table style={{ width: "100%"}}>
    <tr>
        <th style={{ "text-align": "left", padding: "0 0 1rem 0"}}>Name</th>
        <th style={{ "text-align": "left", padding: "0 0 1rem 0"}}>Icon</th>
    </tr>
    {
        Object.keys(AllIcons).map((name, index) => <tr key={index}>
            <td style={{ padding: "0 0 1rem 0"}}>{name}</td>
            <td style={{ padding: "0 0 1rem 0"}}><Icon name={name}/></td>
        </tr>)
    }
</table>
```