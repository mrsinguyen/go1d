---
title: Prose
lead: Sanitizes HTML and wraps it into a text component
status: ready
releaseVersion: 0.5.2
---

All text in our apps should be wrapped in a Text component.

Try out the props below.

```.jsx
<Prose HTML="<b>This is bold text</b>" />
```

Does not allow banned tags such as script
```.jsx
<Prose HTML="<script>document.write('Hello World!');</script> Script tags wont show up" />
```

Does not allow banned attributes
```.jsx
<Prose HTML="<a href='#Test' target='_blank' norel='badtag'>Hello World!</a>" />
```

```!jsx
<ComponentDoc component={Prose} />
```
