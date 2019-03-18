---
title: Course Module
lead: A component that wraps lessons
status: ready
releaseVersion: 0.0.55
---

### Base
```.tsx
<CourseModule title="Test Title">
  <Lesson title="This is a test lesson" type="resource" />
</CourseModule>
```

### Duration is optional
```.tsx
<CourseModule duration={75} title="Test Title">
  <Lesson title="This is a test lesson" type="resource" />
</CourseModule>
```

### Default Closed
```.tsx
<CourseModule defaultOpen={false} title="Test Title">
  <Lesson title="This is a test lesson" type="resource" />
  <Lesson title="This is a test lesson" type="resource" />
  <Lesson title="This is a test lesson" type="resource" />
</CourseModule>
```

### No Toggle
```.tsx
<CourseModule collapsible={false} title="Test Title">
  <Lesson title="This is a test lesson" type="resource" />
  <Lesson title="This is a test lesson" type="resource" />
  <Lesson title="This is a test lesson" type="resource" />
</CourseModule>
```

```!jsx
<ComponentDoc component="CourseModuleProps" />
```
