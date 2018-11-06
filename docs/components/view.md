---
title: View
status: ready
releaseVersion: 0.0.1
lead: Anything but text should be based off View. It uses styling props connected to our foundations.
---

Try anything below

```.jsx
<View>My View</View>
```

Responsive Examples
```.jsx
<View flexDirection="row" flexWrap="wrap">
    <View width={[1/3,1/6,1/12]}>A</View>
    <View width={[1/3,1/6,1/12]}>B</View>
    <View width={[1/3,1/6,1/12]}>C</View>
    <View width={[1/3,1/6,1/12]}>D</View>
    <View width={[1/3,1/6,1/12]}>A</View>
    <View width={[1/3,1/6,1/12]}>B</View>
    <View width={[1/3,1/6,1/12]}>C</View>
    <View width={[1/3,1/6,1/12]}>D</View>
    <View width={[1/3,1/6,1/12]}>A</View>
    <View width={[1/3,1/6,1/12]}>B</View>
    <View width={[1/3,1/6,1/12]}>C</View>
    <View width={[1/3,1/6,1/12]}>D</View>
</View>
<View flexDirection="row" flexWrap="wrap">
    <View width={[1,1/2,1/4]}>A</View>
    <View width={[1,1/2,1/4]}>B</View>
    <View width={[1,1/2,1/4]}>C</View>
    <View width={[1,1/2,1/4]}>D</View>
</View>
```

```!jsx
<ComponentDoc component={View} />
```
