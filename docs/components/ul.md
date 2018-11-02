---
title: UL
status: ready
releaseVersion: 0.0.69
---

### Basic UL

```.jsx
<UL>
    <LI>List Item 1</LI>
    <LI>List Item 2 multiline Text, Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</LI>
    <LI>List Item 3</LI>
    <LI>List Item 4</LI>
    <LI>List Item 5</LI>
    <LI>List Item 6</LI>    
</UL>
```

### UL with specific icon and color and fontSize

```.jsx
<UL iconName="Success" fontSize="3" color="subtle">
    <LI>List Item 1</LI>
    <LI>List Item 2 multiline Text, Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</LI>
    <LI>List Item 3</LI>
    <LI>List Item 4</LI>
    <LI>List Item 5</LI>
    <LI>List Item 6</LI>    
</UL>
```

### UL with different icons on each Li

```.jsx
<UL iconName="Success">
    <LI>Parent Icon</LI>
    <LI iconName="Star">Star Icon</LI>
    <LI iconName="StarOutline">StarOutline Icon</LI>
    <LI iconName="Tag">Tag Icon</LI>
    <LI iconName="Toggle">Toggle Icon</LI>
    <LI iconName="Trash">Trash Icon</LI>
    <LI iconName="Warning">Warning Icon</LI>
    <LI iconName="Video">Video Icon</LI>
     
</UL>
```

### Props for UL
```!jsx
<ComponentDoc component={UL} />
```

### Props for LI
```!jsx
<ComponentDoc component={LI} />
```
