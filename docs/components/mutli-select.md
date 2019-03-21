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
  { "value": "vanilla", label: "Vanilla" },
  { "value": "1chocolate", label: "Chocolate" },
  { "value": "1stawberry", label: "Strawberry" },
  { "value": "1vanilla", label: "Vanilla" },
  { "value": "2chocolate", label: "Chocolate" },
  { "value": "2stawberry", label: "Strawberry" },
  { "value": "2vanilla", label: "Vanilla" },
  { "value": "3chocolate", label: "Chocolate" },
  { "value": "3stawberry", label: "Strawberry" },
  { "value": "3vanilla", label: "Vanilla" },
  { "value": "4chocolate", label: "Chocolate" },
  { "value": "4stawberry", label: "Strawberry" },
  { "value": "4vanilla", label: "Vanilla" },
  { "value": "11chocolate", label: "Chocolate" },
  { "value": "11stawberry", label: "Strawberry" },
  { "value": "11vanilla", label: "Vanilla" },
  { "value": "12chocolate", label: "Chocolate" },
  { "value": "12stawberry", label: "Strawberry" },
  { "value": "12vanilla", label: "Vanilla" },
  { "value": "13chocolate", label: "Chocolate" },
  { "value": "13stawberry", label: "Strawberry" },
  { "value": "13vanilla", label: "Vanilla" },
  { "value": "14chocolate", label: "Chocolate" },
  { "value": "14stawberry", label: "Strawberry" },
  { "value": "14vanilla", label: "Vanilla" },
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


Multi Select with extra style props 
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
    { "value": "stawberry", label: "Strawberry" },
    { "value": "vanilla", label: "Vanilla" }
  ]}  
/>
```


```!jsx
<ComponentDoc component="MultiSelectProps" />
```
