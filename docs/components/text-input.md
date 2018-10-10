---
title: TextInput
lead: 
status: ready
releaseVersion: 0.0.32
---

## Examples

### Basic TextInput

```.jsx
<TextInput id="blank" placeholder="Blank" />
```

### TextInput Sizes

```.jsx
<TextInput id="Small" size="sm" value="Small" />
<br />
<TextInput id="Medium" size="md" value="Medium" />
<br />
<TextInput id="Large" size="lg" value="Large" />
```

### TextInput with Icon

```.jsx
<TextInput id="search" iconName="Search" placeholder="Type here to Search" />
```

### TextInput with RightNode

```.jsx
<TextInput 
  id="clear" 
  value="Type here to Search" 
  suffixNode={<ButtonMinimal iconName="Cross" color="accent" />}
/>
```

```!jsx
<ComponentDoc component={TextInput} />
```
