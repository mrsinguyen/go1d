---
title: Tag Toggle
lead: Almost always used in a list, the tag toggle is used for showing a list a of tags or topics a user can select many
status: ready
releaseVersion: 0.5.3
---

## Examples

### Tag Toggle

```.jsx
<React.Fragment>
    <View flexDirection="row">
      <TagToggle label="Mad Skillz" />
      <TagToggle label="Mad Skillz" />
      <TagToggle label="Mad Skillz" />
      <TagToggle label="Mad Skillz" />
    </View>
    <View flexDirection="row" alignItems="center" marginTop={5}>
      <TagToggle label="OK Skillz" size="sm" />
      <TagToggle label="Sick Skillz" size="md" />
      <TagToggle label="Mad Skillz" size="lg" />
    </View>
</React.Fragment>
```

### Tag Toggle Group

When using multiple tag toggles as a single input, use the TagToggleGroup component. This is especially useful when working with Formik. Please note, the name prop is required on each option in order for it to function correctly.

```.jsx
<TagToggleGroup options={[{name:"skills", label: "skills"}, {name:"bills", label: "bills"}]}/>
```

```.jsx
<Form 
  onSubmit={(value, formActions) => {
    formActions.setSubmitting(false);
    alert("tags = [" + value.tags.join(", ") + "]");
  }}
  initialValues={{ tags: ["skills"]}}
>
  <Field
    component={TagToggleGroup}
    name="tags"
    marginBottom={1}
    options={[{name:"skills", label: "skills"}, {name:"bills", label: "bills"}]}
  />
  <View flexDirection="row">
    <ButtonFilled color="accent" type="submit">Submit</ButtonFilled>
  </View>
</Form>
```

### Props

```!jsx
<ComponentDoc component="TagToggleProps" />
```

```!jsx
<ComponentDoc component="TagToggleGroupProps" />
```
