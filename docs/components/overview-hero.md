---
title: Overview Hero
status: ready
releaseVersion: 0.0.41
---

An overview container for a hero page

## Examples

### Overview hero with required props only (title)
```.jsx
<OverviewHero 
  title="Interaction Design">
  <Text>This course will provide you with the skills and knowledge to design, build, test and launch digital products that are intuitive, user-friendly and accessible.</Text>
</OverviewHero>
```

### Overview hero with background, breadcrumb and subtitle
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
  author={
    <View flexDirection="row" alignItems="center">
      <Avatar
        size={4}
        src="https://i.imgur.com/Ee55uvc.jpg"
        fullName="Leslie Knope"
        marginRight={3}
      />
      Leslie Knope
    </View>}
  duration={1360}
  ctaCard={
    <View
      boxShadow="crisp"
      backgroundColor="background"
      width="300px"
      css={{
        position: "relative",
        top: -250,
        right: 0,
      }}>
      <View
        height="150px"
        width="100%"
        css={{
          backgroundImage: "url(https://images.unsplash.com/photo-1539512110726-6d89c892f117?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=10cd46d36ba78d30891de50e25907fe6&auto=format&fit=crop&w=2089&q=80)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <View padding={4} height="200px" width="100%" />
    </View>
  }
>
  <Text>This course will provide you with the skills and knowledge to design, build, test and launch digital products that are intuitive, user-friendly and accessible.</Text>
</OverviewHero>
```

```!jsx
<ComponentDoc component={OverviewHero} />
```
