---
title: SearchInput
lead: 
status: ready
releaseVersion: 0.0.36
---

## Examples

### Basic SearchInput

```.jsx
<SearchInput 
    id="blank" 
    placeholder="Search for courses, videos, interactive lessons, and more..." 
    onSubmit={() => {}} 
/>
```

### SearchInput Sizes

```.jsx
<React.Fragment>
    <SearchInput 
        id="blank" 
        placeholder="Search for courses, videos, interactive lessons, and more..."
        size="sm" 
        value="Small"  
        onSubmit={() => {}} 
    />
    <br />
    <SearchInput 
        id="blank" 
        placeholder="Search for courses, videos, interactive lessons, and more..."
        size="md" 
        value="Medium"  
        onSubmit={() => {}} 
    />
    <br />
    <SearchInput 
        id="blank" 
        placeholder="Search for courses, videos, interactive lessons, and more..."
        size="lg" 
        value="Large"  
        onSubmit={() => {}} 
    />
</React.Fragment>
```


### SearchInput not clearable

```.jsx
<SearchInput 
    id="blank" 
    placeholder="Search for courses, videos, interactive lessons, and more..."
    size="md" 
    value="Medium"  
    onSubmit={() => {}} 
    clearable={false}
/>
```

### SearchInput with behaviour on clear and on submit
```.jsx
<SearchInput 
    id="blank" 
    value="Hold me Thrill me Submit me Clear me"
    placeholder="Search for courses, videos, interactive lessons, and more..." 
    onClear={() => {alert("Back in blank!")}}
    onSubmit={(value) => {alert(`Value: ${value}`)}}
/>
```

```!jsx
<ComponentDoc component="SearchInputProps" />
```
