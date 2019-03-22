---
title: MultiSelect
status: ready
releaseVersion: 0.0.27
---

### A custom Multi Select component

```.tsx
<MultiSelect options={[
  { "value": "chocolate", label: "Chocolate" },
  { "value": "stawberry", label: "Strawberry" },
  { "value": "vanilla", label: "Vanilla" },
  { "value": "caramel", label: "Caramel" },
  { "value": "maple", label: "Maple" },
  { "value": "birch", label: "Birch" },
  { "value": "soda", label: "Soda" },
  { "value": "feta", label: "Feta" },
  { "value": "brie", label: "Brie" },
  { "value": "camembert", label: "Camembert" },
  { "value": "cheddar", label: "Cheddar" },
  { "value": "ricotta", label: "Ricotta" },
  { "value": "mimolette", label: "Mimolette" },
  { "value": "coulommiers", label: "Coulommiers" },
  { "value": "feta", label: "Feta" },
  { "value": "gorgonzola", label: "Gorgonzola" },
  { "value": "gouda", label: "Gouda" },
  { "value": "havarti", label: "Havarti" },
  { "value": "mascarpone", label: "Mascarpone" },
  { "value": "mozzarella", label: "Mozzarella" },
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
