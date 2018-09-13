---
title: Icon
status: dev
---

```.jsx
<Icon name="Cross" />
```


### Colors

Supply a color by the color prop. The available colors can be found in the Colors section.
```.jsx
<Icon name="Cross" color="accent"/>
```

### Size

Define size with the size prop. If a number is supplied, the size will be that number of pixels. Size takes most css expressions such as 1rem or 50%

```.jsx
<Icon name="Cross" size={12}/> <br />
<Icon name="Cross" size="2rem"/> <br />
<Icon name="Cross" size="20%"/> <br />
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