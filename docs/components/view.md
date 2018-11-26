---
title: View
status: ready
releaseVersion: 0.0.1
lead: Anything but text should be based off View. It uses styling props connected to our foundations.
---

The most fundamental component for building a UI is the View Component. The View component uses flex box via props to define the layout.
[A Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

Try anything below

```.jsx
<View><Text>My View</Text></View>
```

Responsive Examples
```.jsx
<View flexDirection="row" flexWrap="wrap">
    <View width={[1/3,1/6,1/12]}><Text>A</Text></View>
    <View width={[1/3,1/6,1/12]}><Text>B</Text></View>
    <View width={[1/3,1/6,1/12]}><Text>C</Text></View>
    <View width={[1/3,1/6,1/12]}><Text>D</Text></View>
    <View width={[1/3,1/6,1/12]}><Text>A</Text></View>
    <View width={[1/3,1/6,1/12]}><Text>B</Text></View>
    <View width={[1/3,1/6,1/12]}><Text>C</Text></View>
    <View width={[1/3,1/6,1/12]}><Text>D</Text></View>
    <View width={[1/3,1/6,1/12]}><Text>A</Text></View>
    <View width={[1/3,1/6,1/12]}><Text>B</Text></View>
    <View width={[1/3,1/6,1/12]}><Text>C</Text></View>
    <View width={[1/3,1/6,1/12]}><Text>D</Text></View>
</View>
<View flexDirection="row" flexWrap="wrap">
    <View width={[1,1/2,1/4]}><Text>A</Text></View>
    <View width={[1,1/2,1/4]}><Text>B</Text></View>
    <View width={[1,1/2,1/4]}><Text>C</Text></View>
    <View width={[1,1/2,1/4]}><Text>D</Text></View>
</View>
```

```!jsx
<ComponentDoc component="ViewProps" />
```
