---
title: Provider
lead: An extension of the Theme component that allows for custom links to be passed in as well as setting the color mode
status: ready
releaseVersion: 0.0.21
---

Provider is a component that allows for the specification of whether the child components are either light or dark mode and custom LinkComponent attributes. It should be used when you do not just want to return an anchor tags when using Link components, such as use with ReactRouter

## Examples

### Default props with light mode
```.jsx
<Provider>
  <PageBody>
    <View marginBottom={5}>
      <Text element="h2" fontSize={4} fontWeight="semibold">Reports</Text>
    </View>
    <View backgroundColor="background" padding={5} borderRadius={2}>
      Market place dashboard
      <Link href="/components/provider">Link to open reports</Link>
    </View>
  </PageBody>
</Provider>
```

### Custom link and dark mode specified

`mode` on `Provider` will only adjust it's children's color variables. It won't set a background color or text color on the container. For better contextual support of `mode`, use `<View mode="dark" />`, which uses `Provider` internally.

```.jsx
<Provider mode="dark" linkComponent={() => <div>custom link</div>}>
  <PageBody>
    <View marginBottom={5}>
      <Text element="h2" fontSize={4} fontWeight="semibold">Reports</Text>
    </View>
    <View backgroundColor="background" padding={5} borderRadius={2}>
      Market place dashboard
      <Link href="/components/provider">Open reports</Link>
    </View>
  </PageBody>
</Provider>
```

```!jsx
<ComponentDoc component="ProviderProps" />
```
