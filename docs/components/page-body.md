---
title: Page Body
status: ready
---

A container for the main content of a page with a background pulled in either via specifying the background colour or defaulting the the colors.background value

## Examples

### Lightmode page body
```.jsx
<PageBody>
  <View marginBottom={4}>
    <Text element="h2" fontSize={4} fontWeight="bold">Reports</Text>
  </View>
  <View backgroundColor="background" padding={4} borderRadius={3}>
    Market place dashboard
  </View>
</PageBody>
```
