---
title: Page Body
status: ready
releaseVersion: 0.0.12
---

A container for the main content of a page with a background pulled in either via specifying the background colour or defaulting the the colors.background value

## Examples

### Lightmode page body
```.jsx
<PageBody>
  <View marginBottom={5}>
    <Text element="h2" fontSize={4} fontWeight="semibold">Reports</Text>
  </View>
  <View backgroundColor="background" padding={5} borderRadius={2}>
    Market place dashboard
  </View>
</PageBody>
```

```!jsx
<ComponentDoc component="PageBodyProps" />
```
