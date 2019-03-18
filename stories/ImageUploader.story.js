import React from 'react';
import {storiesOf} from '@storybook/react';
import {ImageUploader,Form,Field,ButtonFilled} from '../src';
storiesOf("ImageUploader", module)
.add('Example usage', () => <ImageUploader name="uploader" onChange={console.log} height="400px"/>)
.add('Inside a form', () => <Form onSubmit={(values, actions) => console.log(values, actions)}>
    <Field
    hideLabel
    component={ImageUploader}
    name="portalImage"
    label="Portal Image"
    description="The image for your portal"
    />
    <ButtonFilled type="submit" color="accent">Submit</ButtonFilled>
</Form>)
