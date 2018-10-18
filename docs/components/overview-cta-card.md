---
title: Overview CTA Card
lead: A card view for highlighting a key call-to-action
status: ready
releaseVersion: 0.0.41
---

### Overview CTA button with no props
```.jsx
<OverviewCtaCard></OverviewCtaCard>
```

### Overview CTA button with button
```.jsx
<OverviewCtaCard 
  backgroundImage="https://images.unsplash.com/photo-1539512110726-6d89c892f117?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=10cd46d36ba78d30891de50e25907fe6&auto=format&fit=crop&w=2089&q=80"
  buttonLabel="Import"
  onButtonClick={()=>alert('hey')}>
</OverviewCtaCard>
```

### Overview CTA button with custom children
```.jsx
<OverviewCtaCard 
  backgroundImage="https://images.unsplash.com/photo-1539512110726-6d89c892f117?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=10cd46d36ba78d30891de50e25907fe6&auto=format&fit=crop&w=2089&q=80">
  <Text fontSize={1}>Part of your subscription</Text>
</OverviewCtaCard>
```

```!jsx
<ComponentDoc component={OverviewCtaCard} />
```