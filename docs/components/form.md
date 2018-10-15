---
title: Form
lead: 
status: ready
---

Built ontop of Formik https://jaredpalmer.com/formik/docs/api/formik

## Examples

### Example Form with field

```.jsx
<Form disabled={false} initialValues={{ portalName: "A portal" }} onSubmit={(values, actions) => console.log(values, actions)}>
    <Field
    component={TextInput}
    name="portalName"
    label="Portal name"
    description="The name displayed across the site"
    />
    <ButtonFilled type="submit" color="accent">Submit</ButtonFilled>
</Form>
```


### Example Disabled Form with required field

```.jsx
<Form disabled={false} initialValues={{ portalName: "A portal" }} onSubmit={(values, actions) => actions.submit()}>
    <Field
    required={true}
    component={TextInput}
    name="portalName"
    label="Portal name"
    placeholder="Leslie Knope"
    />
    <ButtonFilled type="submit" color="accent">Submit</ButtonFilled>
</Form>
```

### Example Disabled Form with disabled field

```.jsx
<Form disabled={true} initialValues={{ portalName: "A portal" }} onSubmit={(values, actions) => actions.submit()}>
    <Field
    required={true}
    component={TextInput}
    name="portalName"
    label="Portal name"
    placeholder="Leslie Knope"
    />
    <ButtonFilled type="submit" color="accent">Submit</ButtonFilled>
</Form>
```

```!jsx
<ComponentDoc component={Form} />
```
