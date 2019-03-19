---
title: Left Menu
status: ready
releaseVersion: 0.0.13
---

A collapsible menu for navigation

### Collapsible Expanded

```.jsx
<LeftMenu title="Content" showMenuButton={true}>
      <MenuItem iconName="Home" href="#testing" collapsed={true}>Overview</MenuItem>
      <MenuItem iconName="Briefcase" href="#testing" collapsed={true}>Partners</MenuItem>
</LeftMenu>
```

### Collapsible Collapsed
```.jsx
<LeftMenu title="Content">
      <MenuItem iconName="Home" href="#testing">Overview</MenuItem>
      <MenuItem iconName="Briefcase" href="#testing">Partners</MenuItem>
</LeftMenu>
```

```!jsx
<ComponentDoc component="LeftMenuProps" />
```
