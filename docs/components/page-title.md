---
title: Page Title
status: ready
releaseVersion: 0.0.79
---

A page title for use in standard content. 

## Examples

### Lightmode page title
```.jsx
<PageBody>
  <PageTitle title="The Page Title" />
  <Text>This is standard body content text.</Text>
</PageBody>
```

### Lightmode page title with children
```.jsx
<PageBody>
  <PageTitle title="The Page Title">
    <ButtonFilled>I'm a button</ButtonFilled>
  </PageTitle>
  <Text>This is standard body content text.</Text>
</PageBody>
```

```!jsx
<ComponentDoc component={PageTitle} />
```
