---
title: Carousel
lead: Carousel are used to display row content that overflows horizontally
status: ready
releaseVersion: 0.0.69
---

Note that Breakpoints are controlled by the width of their parent component not by the page width. 

## Examples
### Base
```.jsx
<Carousel>
  <View css={{
    height: 200,
    minWidth: 150,
    maxWidth: '100%',
    width: 425,
    backgroundColor: "#7732bb",
  }} />
  <View css={{
    height: 200,
    minWidth: 150,
    maxWidth: '100%',
    width: 425,
    backgroundColor: "#047cc0",
  }} />
  <View css={{
    height: 200,
    minWidth: 150,
    maxWidth: '100%',
    width: 425,
    backgroundColor: "#e3bc13",
  }} />
  <View css={{
    height: 200,
    minWidth: 150,
    maxWidth: '100%',
    width: 425,
    backgroundColor: "#db7c00",
  }} />
</Carousel>
```

### Full Width ones
```.jsx
<Carousel width={800}>
  <View css={{
    height: 200,
    minWidth: 150,
    maxWidth: '100%',
    width: 900,
    backgroundColor: "#7732bb",
  }} />
  <View css={{
    height: 200,
    minWidth: 150,
    maxWidth: '100%',
    width: 900,
    backgroundColor: "#047cc0",
  }} />
  <View css={{
    height: 200,
    minWidth: 150,
    maxWidth: '100%',
    width: 900,
    backgroundColor: "#e3bc13",
  }} />
  <View css={{
    height: 200,
    minWidth: 150,
    maxWidth: '100%',
    width: 900,
    backgroundColor: "#db7c00",
  }} />
</Carousel>
```

### More Props
```.jsx
<Carousel clickScrollAmount={2} breakpoints={{
  "sm": {
    slidesToShow: 1.3,
  },
  "md": {
    slidesToShow: 2.75,
  },
  "lg": {
    slidesToShow: 4,
  }
}}>
  <View css={{
    height: 200,
    minWidth: 150,
    maxWidth: '100%',
    width: 425,
    backgroundColor: "#7732bb",
  }} />
  <View css={{
    height: 200,
    minWidth: 150,
    maxWidth: '100%',
    width: 425,
    backgroundColor: "#047cc0",
  }} />
  <View css={{
    height: 200,
    minWidth: 150,
    maxWidth: '100%',
    width: 425,
    backgroundColor: "#e3bc13",
  }} />
  <View css={{
    height: 200,
    minWidth: 150,
    maxWidth: '100%',
    width: 425,
    backgroundColor: "#db7c00",
  }} />
</Carousel>
```

### Shorter Duration
```.jsx
<Carousel slideAnimationDuration={50}>
  <View css={{
    height: 200,
    minWidth: 150,
    maxWidth: '100%',
    width: 425,
    backgroundColor: "#7732bb",
  }} />
  <View css={{
    height: 200,
    minWidth: 150,
    maxWidth: '100%',
    width: 425,
    backgroundColor: "#047cc0",
  }} />
  <View css={{
    height: 200,
    minWidth: 150,
    maxWidth: '100%',
    width: 425,
    backgroundColor: "#e3bc13",
  }} />
  <View css={{
    height: 200,
    minWidth: 150,
    maxWidth: '100%',
    width: 425,
    backgroundColor: "#db7c00",
  }} />
</Carousel>
```

```!jsx
<ComponentDoc component="CarouselProps" />
```
