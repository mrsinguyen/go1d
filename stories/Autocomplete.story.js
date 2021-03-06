import React from 'react'; 
import {storiesOf} from '@storybook/react'; 
import {Autocomplete} from '../src'; 
storiesOf("Autocomplete", module) 
.add('Base', () => <Autocomplete
  lookupMethod={() => {
    // pass a method to request options
    const options = [
      {label: "foo1", value: "foo1"},
      {label: "foo2", value: "foo2"},
      {label: "foo3", value: "foo3"},
    ];

    // modify implementation state options
    // eg. this.setState({ options });
  }}
  // this would come from the implementation-level state
  // eg. this.state.options
  options={[]}
  onSelectOption={() => {
    console.log('this method fires when user makes a selection')
  }}
  inputProps={{
    fontSize: 1,
  }}
  labelProps={{
    fontSize: 1,
  }}
  flexGrow={1}
/>) 
