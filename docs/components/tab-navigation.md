---
title: Tab Navigation
status: ready
releaseVersion: 0.0.62
---

## Tab Navigation

#### Multiple tabs with one selected
```.tsx
<TabNavigation>
  <Tab href="/overview" text="Overview">
      Overview
  </Tab>
  <Tab href="/content" isSelected={true}>
    Content
  </Tab>
  <Tab href="/import">
    Import
  </Tab>
</TabNavigation>
```


#### Tab with children
```.tsx
<TabNavigation>
  <Tab href="/overview" text="Overview">
      Overview
  </Tab>
  <Tab href="/content" isSelected={true}>
    Content
    <Pill color="note" marginLeft={3}>26</Pill>
  </Tab>
  <Tab href="/import">
    Import
  </Tab>
</TabNavigation>
```


#### Multiple TabNavigation components stacked
```.tsx
<React.Fragment>
    <TabNavigation>
      <Tab href="/overview" text="Overview">
          Overview
      </Tab>
      <Tab href="/content" isSelected={true}>
        Content
        <Pill color="note" marginLeft={3}>26</Pill>
      </Tab>
      <Tab href="/import">
        Import
      </Tab>
    </TabNavigation>
    <TabNavigation>
      <Tab href="/content">
        Content
        <Pill color="note" marginLeft={3}>26</Pill>
      </Tab>
      <Tab href="/reject" isSelected={true}>
        Rejected
        <Pill color="danger" marginLeft={3}>11</Pill>
      </Tab>
      <Tab href="/approved">
        Approved
        <Pill color="success" marginLeft={2}>0</Pill>
      </Tab>
    </TabNavigation>
</React.Fragment>
```

## Tab
```!jsx
<ComponentDoc component="TabProps" />
```
