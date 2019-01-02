---
title: Overview CTA Card
lead: A card view for highlighting a call-to-action
status: ready
releaseVersion: 0.0.41
---

### Overview CTA card with no props
```.jsx
<View css={{
  position: "relative",
  height: 365,
}}>
  <OverviewCtaCard />
</View>
```

### Overview CTA card with props and CTA button
Different properties are displayed in different positions and shown/hidden based on screen width.
```.jsx
<View css={{
  position: "relative",
  height: 420,
}}>
  <OverviewCtaCard
    backgroundImage="https://images.unsplash.com/photo-1539512110726-6d89c892f117?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=10cd46d36ba78d30891de50e25907fe6&auto=format&fit=crop&w=2089&q=80"
    title="Cooking with charcoal"
    subtitle={
      <View flexDirection="row" alignItems="center">
        <Icon
          name="Course"
          size={1}
          marginRight={3}
        />
        <Text fontSize={1} color="subtle">COURSE</Text>
      </View>
    }
    author={
      <View flexDirection="row" alignItems="center">
        <Avatar
          size={5}
          src="https://i.imgur.com/Ee55uvc.jpg"
          fullName="Leslie Knope"
          marginRight={3}
        />
        By Leslie Knope
      </View>
    }
    duration="90"
    likes="10"
    dislikes="2"
    enrolled="3"
    ctaButton={(
      <ButtonFilled color="accent">Enrol</ButtonFilled>
    )}
    price="99"
    currency="JPY"
  />
</View>
```

### Overview CTA card with custom children
```.jsx
<View css={{
  position: "relative",
  height: 365,
}}>
  <OverviewCtaCard 
    backgroundImage="https://images.unsplash.com/photo-1539512110726-6d89c892f117?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=10cd46d36ba78d30891de50e25907fe6&auto=format&fit=crop&w=2089&q=80">
    <Text fontSize={1}>Part of your subscription</Text>
  </OverviewCtaCard>
</View>
```

```!jsx
<ComponentDoc component="OverviewCtaCardProps" />
```
