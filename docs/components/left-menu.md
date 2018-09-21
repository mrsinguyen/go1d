---
title: Left Menu
status: ready
---

A collapsible menu for navigation

### Collapsible Menu

```.jsx
<LeftMenu title="Content" showMenuButton={true}>
      <MenuItem title="Overview" iconName="Home" href="#testing" collapsed={true}></MenuItem>
      <MenuItem title="Partners" iconName="Briefcase" href="#testing" collapsed={true}></MenuItem>
</LeftMenu>
```

```.jsx
<LeftMenu title="Content">
      <MenuItem title="Overview" iconName="Home" href="#testing"></MenuItem>
      <MenuItem title="Partners" iconName="Briefcase" href="#testing"></MenuItem>
</LeftMenu>
```

```!jsx
<ComponentDoc component={LeftMenu} />
```