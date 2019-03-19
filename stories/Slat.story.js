import React from 'react'; 
import {storiesOf} from '@storybook/react'; 
import {Slat} from '../src'; 
storiesOf("Slat", module) 
.add('With dropdown actions', () => <Slat 
  id={123}
  topMeta={["one", "two"]}
  title="This is test title"
  description="This is the test description"
  currency="AUD"
  price={100}
  bottomMeta={[
    {
      icon: "Calendar",
      text: "1.30pm - 2.30pm",
    },
    {
      icon: "MapPin",
      text: "Underwood, QLD, Australia",
    },
  ]}
  image="https://res.cloudinary.com/go1vn/image/upload/v1537851944/ckvawokvc4k70fd9t1oj.jpg"
  type="Event"
  typeBackground="background"
  dropdownItems={[{
    icon: "Calendar",
    text: "fake item",
    action: () => console.log('foo'),
  },
  {
    icon: "Calendar",
    text: "fake item2",
    action: () => console.log('foo2'),
  }]}
/>) 
.add('With implied link wrapper and active/hover states', () => <Slat 
  id={123}
  topMeta={["one", "two"]}
  title="This is test title"
  description="This is the test description"
  currency="AUD"
  price={100}
  bottomMeta={[
    {
      icon: "Calendar",
      text: "1.30pm - 2.30pm",
    },
    {
      icon: "MapPin",
      text: "Underwood, QLD, Australia",
    },
  ]}
  image="https://res.cloudinary.com/go1vn/image/upload/v1537851944/ckvawokvc4k70fd9t1oj.jpg"
  type="Event"
  typeBackground="background"
/>) 
.add('Skeleton', () => <Slat 
  skeleton={true}
/>) 
