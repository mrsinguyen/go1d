---
title: Select
status: ready
releaseVersion: 0.0.24
---

A custom select component

```.tsx
<Select options={[
  { "value": "chocolate", label: "Chocolate" },
  { "value": "stawberry", label: "Strawberry" },
  { "value": "vanilla", label: "Vanilla" }
]} />
```

Disabled Select Field
```.tsx
<Select options={[
  { "value": "chocolate", label: "Chocolate" },
  { "value": "stawberry", label: "Strawberry" },
  { "value": "vanilla", label: "Vanilla" }
]} disabled={true} />
```

Searchable Select Field
```.tsx
<Select options={[
  { "value": "chocolate", label: "Chocolate" },
  { "value": "stawberry", label: "Strawberry" },
  { "value": "vanilla", label: "Vanilla" }
]} searchable={true} />
```

```!jsx
<ComponentDoc component="SelectProps" />
```