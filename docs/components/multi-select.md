---
title: MultiSelect
status: ready
releaseVersion: 0.0.27
---

### A custom Multi Select component

```.tsx
<MultiSelect options={[
  { "value": 1, label: "Chocolate" },
  { "value": 2, label: "Strawberry" },
  { "value": 2, label: "Strawberry" },
  { "value": 2, label: "Strawberry" },
  { "value": 3, label: "Vanilla" }
]} />
```


### Disabled Multi Select Field
```.tsx
<MultiSelect label="Disabled" options={[
  { "value": "chocolate", label: "Chocolate" },
  { "value": "strawberry", label: "Strawberry" },
  { "value": "vanilla", label: "Vanilla" }
]} disabled={true} />
```


### Searchable Multi Select Field
```.tsx
<MultiSelect label="Favourite" options={[
  { "value": "chocolate", label: "Chocolate" },
  { "value": "strawberry", label: "Strawberry" },
  { "value": "vanilla", label: "Vanilla" }
]} searchable={true} />
```


### Multi Select with extra style props 
```.tsx
<MultiSelect 
  label="Favourite" 
  searchable={true} 
  defaultValue={["chocolate"]}
  labelPaddingBottom={5}
  clearCSS={{
    height: "50%"
  }}
  options={[
    { "value": "chocolate", label: "Chocolate" },
    { "value": "strawberry", label: "Strawberry" },
    { "value": "vanilla", label: "Vanilla" }
  ]}  
/>
```


```!jsx
<ComponentDoc component="MultiSelectProps" />
```
