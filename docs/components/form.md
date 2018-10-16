---
title: Form
lead: 
status: ready
releaseVersion: 0.0.41
---

Form is an extension of Formik's Formik Component https://jaredpalmer.com/formik/docs/api/formik

Form keeps track of your form's state and then exposes it plus a few reusable methods and event handlers (handleChange, handleBlur, and handleSubmit) to your form via props. handleChange and handleBlur work exactly as expected--they use a name or id attribute to figure out which field to update.
If you are using the Form and Field components from GO1D, these methods are even mapped automatically.

The form component renders a `<form>` dom node with no styling

Helpful Resources
* [Validation](https://jaredpalmer.com/formik/docs/guides/validation)
* [Nested Objects & Arrays](https://jaredpalmer.com/formik/docs/guides/arrays)
* [Form Submission](https://jaredpalmer.com/formik/docs/guides/form-submission)

## Examples

### Example Form with field

```.jsx
<Form initialValues={{ portalName: "A portal" }} onSubmit={(values, actions) => console.log(values, actions)}>
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
<Form disabled={true} initialValues={{ portalName: "A portal" }} onSubmit={(values, actions) => actions.submit()}>
    <Field
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
