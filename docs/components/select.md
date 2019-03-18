---
title: Select
status: ready
releaseVersion: 0.0.24
---

### A custom select component

```.tsx
<Select options={[
  { "value": "chocolate", label: "Chocolate" },
  { "value": "stawberry", label: "Strawberry" },
  { "value": "vanilla", label: "Vanilla" }
]} />
```

### Disabled Select Field
```.tsx
<Select options={[
  { "value": "chocolate", label: "Chocolate" },
  { "value": "stawberry", label: "Strawberry" },
  { "value": "vanilla", label: "Vanilla" }
]} disabled={true} />
```

### Clearable Select Field
```.tsx
<Select options={[
  { "value": "chocolate", label: "Chocolate" },
  { "value": "stawberry", label: "Strawberry" },
  { "value": "vanilla", label: "Vanilla" }
]} clearable={true} />
```

### Searchable Select Field
```.tsx
<Select options={[
  { "value": "chocolate", label: "Chocolate" },
  { "value": "stawberry", label: "Strawberry" },
  { "value": "vanilla", label: "Vanilla" }
]} searchable={true} />
```

### Select filled with optgroups
```.tsx
<Select options={[
  {
    label: "Icecream",
    optgroup: true,
    values: [
      { "value": "chocolate", label: "Chocolate" },
      { "value": "stawberry", label: "Strawberry" },
      { "value": "vanilla", label: "Vanilla" }
    ]
  },
  {
    label: "Cheese",
    optgroup: true,
    values: [
      { "value": "brie", label: "Brie" },
      { "value": "cheddar", label: "Cheddar" },
      { "value": "gorgonzola", label: "Gorgonzola" }
    ]
  }
]} />
```

### Select filled with label-less optgroups
```.tsx
<Select options={[
  {
    label: "",
    optgroup: true,
    values: [
      { "value": "chocolate", label: "Chocolate" },
      { "value": "stawberry", label: "Strawberry" },
      { "value": "vanilla", label: "Vanilla" }
    ]
  },
  {
    label: "",
    optgroup: true,
    values: [
      { "value": "brie", label: "Brie" },
      { "value": "cheddar", label: "Cheddar" },
      { "value": "gorgonzola", label: "Gorgonzola" }
    ]
  }
]} />
```

```!jsx
<ComponentDoc component="SelectProps" />
```
