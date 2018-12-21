---
title: Edit Focus Mode Header
status: ready
releaseVersion: 0.2.56
---

Focus Mode Header is a minimalistic header designed to allow the content of the screen to take up as much space as possible.

## Examples

### Usage to show status of a form

```.jsx
<EditFocusModeHeader
  avatar="https://via.placeholder.com/32"
  returnHref="#test"
  title="How to Sell"
  subtitle={
    <View flexDirection="row" alignItems="center">
      <View marginRight={4}>
        <Text
          textTransform="uppercase"
          fontWeight="semibold"
          fontSize={1}
          color="subtle"
        >
          Interactive
        </Text>
      </View>
      <View marginRight={4}>
        <Pill
          color="accent"
          fontSize={1}
          fontWeight="semibold"
          paddingX={3}
          paddingY={1}
        >
          Published
        </Pill>
      </View>
      <View marginRight={4} flexDirection="row" alignItems="center">
        <Icon size={1} name="Check" color="accent" marginRight={2} />
        <Text fontSize={1}>Saved</Text>
      </View>
    </View>
  }
  headerSuffixItems={[
    {
      title: "Done",
      href: "#testing",
      iconName: "Check",
    },
    {
      title: "Visibility and Access",
      href: "#testing",
      iconName: "Eye",
      iconColor: "muted",
    },
    {
      title: "MenuItem1",
      href: "#testing",
      iconName: "Edit",
    },
    {
      title: "DeleteMenuItem",
      href: "#testing",
      iconName: "Trash",
      color: "danger"
    },
  ]}
  tabs={
    <React.Fragment>
    <Tab href="/overview" >
      Overview
    </Tab>
    <Tab href="/content" isSelected={true}>
      Content
    </Tab>
    <Tab href="/import">
      Import
    </Tab>
  </React.Fragment>}
/>
```

```!jsx
<ComponentDoc component="EditFocusModeHeaderProps" />
```
