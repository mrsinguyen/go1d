---
title: Modal
status: ready
releaseVersion: 0.0.23
---

```.jsx
<Flipflop>{({on, flip, flop}) => <React.Fragment>
  <ButtonFilled color='accent' onClick={flip}>Open</ButtonFilled>

  <Modal
    isOpen={on}
    onRequestClose={flop}
    title="It's A Modal!"
  >
  <Text>Are you sure you want to close the modal?</Text>
  <View flexDirection="row" justifyContent="space-between" marginTop={5}>
    <ButtonFilled onClick={flop}>Cancel</ButtonFilled>
    <ButtonFilled onClick={flop} color='accent'>Confirm</ButtonFilled>
    </View>
  </Modal>

</React.Fragment>}</Flipflop>
```

```!jsx
<ComponentDoc component={Modal} />
```