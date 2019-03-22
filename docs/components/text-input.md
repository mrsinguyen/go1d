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

### TextInput Small Size

```.jsx
<TextInput id="Small" size="sm" value="Small" />
```
### TextInput Medium Size
```.jsx
<TextInput id="Medium" size="md" value="Medium" />
```
### TextInput Large Size
```.jsx
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
<ComponentDoc component="TextInputProps" />
```
