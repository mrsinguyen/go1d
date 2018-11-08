---
title: Checkbox Input
lead: 
status: ready
releaseVersion: 0.0.71
---

## Examples

### Label 
```.jsx
<Checkbox name="Test" value="test" label="Test" />
```

## Child label
```.jsx
<Checkbox name="Test" value="test" >
    <Text fontWeight="bold">Test</Text>
</Checkbox>
```

## Disabled
```.jsx
<Checkbox disabled name="Test" value="test" checked={true} label="Test" />
```

### Usage in a CheckboxGroup 
```.jsx
<CheckboxGroup name="TestInput" options={[
  {
    label: "test",
    value: "testValue"
  },
  {
    label: "test 2",
    value: "testValue 2"
  },
]} />
```

## Initial values
```.jsx
<CheckboxGroup name="TestInput" value={['testValue']} options={[
  {
    label: "test",
    value: "testValue"
  },
  {
    label: "test 2",
    value: "testValue 2"
  },
]} />
```

## Disabled
```.jsx
<CheckboxGroup disabled name="TestInput" options={[
  {
    label: "test",
    value: "testValue"
  },
  {
    label: "test 2",
    value: "testValue 2"
  },
]} />
```

## Checkbox
```!jsx
<ComponentDoc component="CheckboxProps" />
```
## CheckboxGroup
```!jsx
<ComponentDoc component="CheckboxGroupProps" />
```
