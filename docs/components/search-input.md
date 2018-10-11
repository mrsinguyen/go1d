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

```!jsx
<ComponentDoc component={SearchInput} />
```
