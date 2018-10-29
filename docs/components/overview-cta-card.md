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

### Overview CTA card with button
```.jsx
<View css={{
  position: "relative",
  height: 400,
}}>
  <OverviewCtaCard 
    backgroundImage="https://images.unsplash.com/photo-1539512110726-6d89c892f117?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=10cd46d36ba78d30891de50e25907fe6&auto=format&fit=crop&w=2089&q=80"
    ctaButton={(
      <ButtonFilled
        color="accent"
        flexDirection="column"
      >
      Import
      </ButtonFilled>
    )}
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
<ComponentDoc component={OverviewCtaCard} />
```
