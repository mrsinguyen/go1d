---
title: Author Selector
status: ready
releaseVersion: 0.2.78
---

A component to allow the selection of multiple authors

## Examples

### Basic Author Selector

```.jsx
<AuthorSelector
  createable={true}
  options={["hi@hi.com", "bye@bye.com"]}
  mapEmailToAuthor={email => ({ 
        firstName: email.split("@")[0],
        lastName: "lastName",
        mail: email
    })}
/>
```

## Props

```!jsx
<ComponentDoc component="AuthorSelectorProps" />
```