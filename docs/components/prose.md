---
title: Prose
lead: Sanitizes HTML and wraps it into a text component
status: ready
releaseVersion: 0.5.2
---

All text in our apps should be wrapped in a Text component.

Try out the props below.

```.jsx
<Prose HTML="<h2>Heading 2</h2><b>This is bold text</b><br /><img src='https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?h=100' alt='Here be image' title='Here be image' />" />
```

Does not allow banned tags such as script
```.jsx
<Prose HTML="<script>document.write('Hello World!');</script> Script tags wont show up" />
```

Does not allow banned attributes
```.jsx
<Prose HTML="Hello from the world of <a href='#Test' target='_blank' norel='badtag'>Hello World!</a>" />
```

```!jsx
<ComponentDoc component="ProseProps" />
```
