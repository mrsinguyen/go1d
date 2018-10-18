---
title: PortalUrl
lead: 
status: ready
releaseVersion: 0.0.32
---

## Examples

### PortalUrl Available
```.jsx
<PortalUrl
  label="Portal Url"
  portalUrl=".mygo1.com"  
  description="This is the description"
  required
  isAvailable={true}
/>
```

### PortalUrl Not Available
```.jsx
<PortalUrl
  label="Portal Url"
  portalUrl=".mygo1.com"  
  description="This is the description"
  required
  isAvailable={false}
/>
```