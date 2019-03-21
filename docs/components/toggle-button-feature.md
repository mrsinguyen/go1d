---
title: Toggle Button Feature
lead: Almost always used in a list, such as a list of feedback options.
status: ready
---

## Examples

### Base

```.jsx
<View flexDirection="row">
  <ToggleButtonFeature color="danger" iconName="Danger" marginRight={3}>Oh</ToggleButtonFeature>
  <ToggleButtonFeature iconName="Eye" marginRight={3}>Hi</ToggleButtonFeature>
  <ToggleButtonFeature color="accent" iconName="User">Mark</ToggleButtonFeature>
</View>
```

### Toggle Button Feature in sizes
```.jsx
<View flexDirection="row" alignItems="center">
  <ToggleButtonFeature size="sm" iconName="Star" marginRight={3}>Star</ToggleButtonFeature>
  <ToggleButtonFeature size="md" iconName="User" marginRight={3}>User</ToggleButtonFeature>
  <ToggleButtonFeature size="lg" iconName="Video">Video</ToggleButtonFeature>
</View>
```

### Toggle Button Feature in custom sizes

```js
const customSizeStyles = {
  sm: {
    iconSize: 5,
    iconMargin: 0,
  },
  md: {
    iconSize: 6,
    iconMargin: 0,
  },
  lg: {
    iconSize: 7,
    iconMargin: 0,
  }
};
```

```.jsx
<View flexDirection="row">
  <ToggleButtonFeature sizeStyles={customSizeStyles} iconName="TooEasy" marginRight={3}>Too easy</ToggleButtonFeature>
  <ToggleButtonFeature sizeStyles={customSizeStyles} iconName="Suitable" marginRight={3}>Suitable</ToggleButtonFeature>
  <ToggleButtonFeature sizeStyles={customSizeStyles} iconName="TooHard">Too hard</ToggleButtonFeature>
</View>
```
