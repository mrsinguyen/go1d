---
title: Course Card
status: ready
releaseVersion: 0.2.15
---

## Examples

Almost all the Props
```.jsx
<CourseCard
  typeIcon="Course"
  type="Course"
  duration={74}
  author="GO1"
  title="Test Title"
  courseImage="https://res.cloudinary.com/go1/image/fetch/w_1024,h_300,c_thumb,g_auto/https://udemy-images.udemy.com/course/750x422/435262_c617.jpg" 
  itemList={[
    {
      title: "Test"
    }
  ]} 
  passive={false}
/>
```

None of the props
```.jsx
<CourseCard />
```

Carousel with lots of combinations of Cards
```.jsx
<View padding={3}>
  <Carousel slidesToShow={3} slideAnimationDuration={150}>
    <CourseCard>
      Hello World!
    </CourseCard>
    <CourseCard type="Course" typeIcon="Course">
      Hello World!
    </CourseCard>
    <CourseCard type="Course" title="This is a test title">
    </CourseCard>
    <CourseCard type="Course" title="This is a test title" itemList={[
      {
        title: "Test"
      }
    ]}>
      Hello World!
    </CourseCard>
    <CourseCard type="Course" title="This is a test titlett test this is a longer title for some reason" itemList={[
      {
        title: "Test"
      }
    ]}>
    </CourseCard>
    <CourseCard type="Course" duration={74} author="Go1" title="Test Title" courseImage="https://res.cloudinary.com/go1/image/fetch/w_1024,h_300,c_thumb,g_auto/https://udemy-images.udemy.com/course/750x422/435262_c617.jpg" itemList={[
      {
        title: "Test"
      }
    ]}>
    </CourseCard>
    <CourseCard type="Course" duration={156} passive={false}>
      Hello World!
    </CourseCard>
  </Carousel>
</View>
```


```!jsx
<ComponentDoc component="CourseCard" />
```
