---
title: MultiSelect
status: ready
releaseVersion: 0.0.27
---

A custom Multi Select component

```.tsx
<MultiSelect options={[
  { "value": "chocolate", label: "Chocolate" },
  { "value": "stawberry", label: "Strawberry" },
  { "value": "vanilla", label: "Vanilla" }
]} />
```


Disabled Multi Select Field
```.tsx
<MultiSelect label="Disabled" options={[
  { "value": "chocolate", label: "Chocolate" },
  { "value": "stawberry", label: "Strawberry" },
  { "value": "vanilla", label: "Vanilla" }
]} disabled={true} />
```


Searchable Multi Select Field
```.tsx
<MultiSelect label="Favourite" options={[
  { "value": "chocolate", label: "Chocolate" },
  { "value": "stawberry", label: "Strawberry" },
  { "value": "vanilla", label: "Vanilla" }
]} searchable={true} />
```

```!jsx
<ComponentDoc component="MultiSelectProps" />
```