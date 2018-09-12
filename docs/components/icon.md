---
title: Icon
status: dev
---

```.jsx
<Icon name="Cross" />
```

### Icon Types

```!jsx
<table style={{ width: "100%"}}>
    <tr>
        <th style={{ "text-align": "left"}}>Name</th>
        <th style={{ "text-align": "left"}}>Icon</th>
    </tr>
    { 
        Object.keys(AllIcons).map(name => <tr>
            <td>{name}</td>
            <td><Icon name={name}/></td>
        </tr>)
    }
</table>
```