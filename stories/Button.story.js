import React from 'react';
import {storiesOf} from '@storybook/react';
import {Button,ButtonFilled,ButtonMinimal,SubmitButton,View,ButtonFeature} from '../src';
storiesOf("Button", module)
.add('Filled button in subtle colour', () => <React.Fragment>
    <ButtonFilled>I'm a button</ButtonFilled>
    <br />
    <ButtonFilled size='sm'>I'm a button</ButtonFilled>
    <br />
    <ButtonFilled size='lg'>I'm a button</ButtonFilled>
</React.Fragment>)
.add('Filled button in accent colour', () => <ButtonFilled color='accent'>Call to action</ButtonFilled>)
.add('Filled Icon only button in success colour and round', () => <ButtonFilled round={true} color="success" iconName="Check" />)
.add('Filled button in danger colour', () => <ButtonFilled color='danger'>Danger zone</ButtonFilled>)
.add('Minimal button subtle colour', () => <ButtonMinimal>Minimal button</ButtonMinimal>)
.add('Minimal button subtle colour (Icon and label)', () => <ButtonMinimal iconName="Plus">Minimal button</ButtonMinimal>)
.add('Minimal button in accent colour (Icon only)', () => <ButtonMinimal color='accent' iconName='Plus' />)
.add('Minimal button in accent colour (Icon and label)', () => <ButtonMinimal color='accent' iconName='Plus'>Call to action</ButtonMinimal>)
.add('Minimal button in danger colour', () => <ButtonMinimal color='danger'>Really</ButtonMinimal>)
.add('Submit Button used in a Form', () => <SubmitButton>Create</SubmitButton>)
.add('Unstyled Buttons', () => <React.Fragment>
    <Button>Default</Button>
    <Button color="accent">Accent</Button>
    <Button color='danger'>Danger</Button>
</React.Fragment>)
.add('Feature buttons', () => <View flexDirection="row">
  <ButtonFeature color="danger" iconName="Danger" marginRight={3}>Oh</ButtonFeature>
  <ButtonFeature iconName="Eye" marginRight={3}>Hi</ButtonFeature>
  <ButtonFeature color="accent" iconName="User">Mark</ButtonFeature>
</View>)
.add('Feature buttons in sizes', () => <View flexDirection="row" alignItems="center">
  <ButtonFeature size="sm" iconName="Star" marginRight={3}>Star</ButtonFeature>
  <ButtonFeature size="md" iconName="User" marginRight={3}>User</ButtonFeature>
  <ButtonFeature size="lg" iconName="Video">Video</ButtonFeature>
</View>)
