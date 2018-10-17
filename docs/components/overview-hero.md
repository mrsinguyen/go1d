---
title: Overview Hero
status: ready
releaseVersion: 0.0.41
---

@TODO

## Examples

### Overview hero with required props (title)
```.jsx
<OverviewHero 
  title="Interaction Design"
  backgroundImage="https://images.unsplash.com/photo-1539602010674-1346135ab34e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=eb91750f2ad63d82661fb76b0772d6fd&auto=format&fit=crop&w=668&q=80">
  <Text>This course will provide you with the skills and knowledge to design, build, test and launch digital products that are intuitive, user-friendly and accessible.</Text>
</OverviewHero>
```

### Overview hero with breadcrumb and subtitle
```.jsx
<OverviewHero
  title="Interaction Design"
  backgroundImage="https://images.unsplash.com/photo-1539580709660-0505d36fa6e7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=df3e6c039eb1e5e32fef492bf6e3376e&auto=format&fit=crop&w=1001&q=80"
  subtitle={
    <View flexDirection="row" alignItems="center">
      <Icon name="Video" marginRight={3} />
      VIDEO
    </View>}
  breadcrumbHref="#testing"
  breadcrumbTitle="Home"
>
  <Text>This course will provide you with the skills and knowledge to design, build, test and launch digital products that are intuitive, user-friendly and accessible.</Text>
</OverviewHero>
```

### Overview hero with all props
```.jsx
<OverviewHero
  title="Interaction Design"
  backgroundImage="https://images.unsplash.com/photo-1539512110726-6d89c892f117?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=10cd46d36ba78d30891de50e25907fe6&auto=format&fit=crop&w=2089&q=80"
  subtitle={
    <View flexDirection="row" alignItems="center">
      <Icon name="Course" marginRight={3} />
      COURSE
    </View>}
  breadcrumbHref="#testing"
  breadcrumbTitle="Results"
  authorImage="https://i.imgur.com/Ee55uvc.jpg"
  authorName="Leslie Knope"
  duration="9 Days 13 Hours"
>
  <Text>This course will provide you with the skills and knowledge to design, build, test and launch digital products that are intuitive, user-friendly and accessible.</Text>
</OverviewHero>
```

```!jsx
<ComponentDoc component={OverviewHero} />
```
