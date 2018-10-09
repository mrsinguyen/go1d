---
title: Field
lead: Containers are used to handle width and padding for components
status: ready
---

## Examples

### Lightmode page body
```.jsx
<Form onSubmit={(values, actions) => console.log(values, actions)}>
<Field 
 component="input"
 name="email"
 />
  <ButtonFilled type="submit" color="accent">Submit</ButtonFilled>
</Form>
```

```!jsx
<ComponentDoc component={Field} />
```