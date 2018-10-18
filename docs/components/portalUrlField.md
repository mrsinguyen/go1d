---
title: PortalUrl
lead: 
status: ready
releaseVersion: 0.0.32
---

## Examples

### PortalUrl Available
```.jsx
<Form initialValues={{ portalName: "A portal" }} onSubmit={(values, actions) => actions.submit()}>
<PortalUrlField
  label="Portal Url"
  portalUrl=".mygo1.com"  
  description="This is the description"
  required
  isAvailable={true}
/>
</Form>
```

### PortalUrl Not Available
```.jsx
<Form initialValues={{ portalName: "A portal" }} onSubmit={(values, actions) => actions.submit()}>
<PortalUrlField
  label="Portal Url"
  portalUrl=".mygo1.com"  
  description="This is the description"
  required
  isAvailable={false}
/>
</Form>
```