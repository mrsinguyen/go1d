---
title: Featured Tag
status: ready
releaseVersion: 0.2.18
---

## Examples

```.jsx
<View backgroundColor="faint" padding={5}>
  <FeaturedTag>
    Hello World!
  </FeaturedTag>
</View>
```

If you really want you can add all the props:
```.jsx
<FeaturedTag
  size="md"
  color="danger"
  iconColor="default"
  backgroundColor="accent"
  iconName="Check"
>
  Hello World!
</FeaturedTag>
```

Carousel with lots of combinations of Cards
```.jsx
<View backgroundColor="faint" padding={5}>
  <Carousel slidesToShow={2} slideAnimationDuration={150}>
    <FeaturedTag>Test Words</FeaturedTag>
    <FeaturedTag iconName="Star">Test Title</FeaturedTag>
    <FeaturedTag>Lorem Ipsum decor de lesLorem</FeaturedTag>
    <FeaturedTag>Lorem Ipsum decor de lesLorem</FeaturedTag>
    <FeaturedTag iconName="Course">Test Tag</FeaturedTag>
    <FeaturedTag iconName="Check">Infomation Systems</FeaturedTag>
    <FeaturedTag iconName="Check">Programming</FeaturedTag>
  </Carousel>
</View>
```


```!jsx
<ComponentDoc component="FeaturedTag" />
```