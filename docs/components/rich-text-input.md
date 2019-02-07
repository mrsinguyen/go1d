---
title: Rich Text Input
status: ready
releaseVersion: 0.0.1
lead:  Rich text input field.
---


## Rich Text Input in Field
```.jsx
<Form initialValues={{ description: `<p><a href="http://go1.com/">The</a> quick brown <strong>fox</strong> <em>jumped</em> <u>over</u> <s>some</s> fence.<br/><h2>This is a header</h2><br/><h3>This is a subheading</h3><blockquote>This is a quote</blockquote></p>` }} onSubmit={(values, actions) => console.log(values, actions)}>
    <Field
    component={RichTextInput}
    name="description"
    label="Description"
    placeholder="Description"
    />
    <ButtonFilled type="submit" color="accent">Submit</ButtonFilled>
</Form>
```

```!jsx
<ComponentDoc component="RichTextInputProps" />
```
