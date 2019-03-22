---
title: Password Input
lead: 
status: ready
releaseVersion: 0.0.72
---

## Examples

### Basic Password Input

```.jsx
<PasswordInput id="Password" placeholder="Pasword" />
```

### Password Input Sizes

```.jsx
<React.Fragment>
    <PasswordInput id="Small" size="sm" value="Small" />
    <br />
    <PasswordInput id="Medium" size="md" value="Medium" />
    <br />
    <PasswordInput id="Large" size="lg" value="Large" />
</React.Fragment>
```

### Password Input with no toggle

```.jsx
<PasswordInput id="noToggle" toggleableDisplay={false} />
```

### Disabled Password Input

```.jsx
<PasswordInput id="Disabled" disabled={true} />
```

```!jsx
<ComponentDoc component="PasswordInputProps" />
```
