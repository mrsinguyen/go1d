---
title: Container
lead: Containers are used to handle width and padding for components
status: ready
releaseVersion: 0.0.16
---

## Examples

### Lightmode page body
```.jsx
<Container backgroundColor="soft" contain="full" paddingX={8} paddingY={6}>
  <View marginBottom={5}>
    <Text element="h2" fontSize={4} fontWeight="bold">Reports</Text>
  </View>
  <View backgroundColor="background" padding={5} borderRadius={2}>
    Market place dashboard
  </View>
</Container>
```

```!jsx
<ComponentDoc component={Container} />
```