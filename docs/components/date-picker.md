---
title: Date Picker
status: ready
releaseVersion: 0.2.42
---

A component that displays a datepicker.

## Examples

### Basic Datepicker
```.jsx
<DatePicker id="id1" allowBlank />
```


### Date Supplied
```.jsx
<DatePicker id="id2" defaultValue={new Date("2019-06-07")} />
```



### Disabled Datepicker
```.jsx
<DatePicker id="id3" disabled />
```



### Sizes
```.jsx
<React.Fragment>
    <DatePicker id="id4" size="sm"/>
    <br />
    <DatePicker id="id4" size="md"/>
    <br />
    <DatePicker id="id4" size="lg"/>
</React.Fragment>
```

### Basic Datepicker with Time
```.jsx
<DatePicker id="id5" time={true} />
```
