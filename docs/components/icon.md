---
title: Icon
status: ready
releaseVersion: 0.0.11
---

### Base
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
<React.Fragment>
    <Icon name="Go1Logo" size={1}/> <br />
    <Icon name="Go1Logo" size={4}/> <br />
    <Icon name="Go1Logo" size={7}/> <br />
</React.Fragment>
```

```!jsx
<ComponentDoc component="IconProps" />
```

### Icon Types

This is an exhaustive list of all icons currently in the system

```!jsx
<AllIcons />
```
