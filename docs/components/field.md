---
title: Form Field
lead: 
status: in-development
---

## Examples

### Example field and Form

```.jsx
<Form onSubmit={(values, actions) => console.log(values, actions)}>
<Field
 component={TextInput}
 name="portalName"
 label="Site name"
 description="The name displayed across the site"
 />
  <ButtonFilled type="submit" color="accent">Submit</ButtonFilled>
</Form>
```

```!jsx
<ComponentDoc component={Field} />
```
