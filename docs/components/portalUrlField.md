---
title: PortalUrlField
lead: 
status: ready
releaseVersion: 0.0.32
---

## Examples

### PortalUrlField Available
```.jsx
<Form initialValues={{ portalName: "A portal" }} onSubmit={(values, actions) => actions.submit()}>
<PortalUrlField
  name="portalName"
  label="Portal Url"
  suffixValue=".mygo1.com"  
  description="This is the description"
  required
  isAvailable={true}
/>
</Form>
```

### PortalUrlField Not Available
```.jsx
<Form initialValues={{ portalName: "A portal" }} onSubmit={(values, actions) => actions.submit()}>
<PortalUrlField
  name="portalName"
  label="Portal Url"
  suffixValue=".mygo1.com"  
  description="This is the description"
  required
  isAvailable={false}
/>
</Form>
```

```!jsx
<ComponentDoc component="PortalUrlFieldProps" />
```