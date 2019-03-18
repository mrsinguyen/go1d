---
title: Autocomplete
status: ready
releaseVersion: 0.5.8
---

A generic autocomplete component.
For a realistic implementation, see https://code.go1.com.au/apps/search-provider/blob/GO1P-21911/src/search-provider/components/LocationFilter/index.tsx

### Base
```.tsx
<Autocomplete
  lookupMethod={() => {
    // pass a method to request options
    const options = [
      {label: "foo1", value: "foo1"},
      {label: "foo2", value: "foo2"},
      {label: "foo3", value: "foo3"},
    ];

    // modify implementation state options
    // eg. this.setState({ options });
  }}
  // this would come from the implementation-level state
  // eg. this.state.options
  options={[]}
  onSelectOption={() => {
    console.log('this method fires when user makes a selection')
  }}
  inputProps={{
    fontSize: 1,
  }}
  labelProps={{
    fontSize: 1,
  }}
  flexGrow={1}
/>
```


```!jsx
<ComponentDoc component="AutocompleteProps" />
```
