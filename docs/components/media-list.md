---
title: MediaList
status: ready
releaseVersion: 0.2.23
---

A component that displays a list of media items.

### Basic MediaList
```.jsx
<MediaList>
    <Media>Media Item 1</Media>
    <Media>Media Item 2</Media>
    <Media>Media Item 3</Media>
    <Media>Media Item 4</Media>
    <Media>Media Item 5</Media>
    <Media>Media Item 6</Media>
</MediaList>
```

### MediaList without images
```.jsx
<MediaList>
    <Media title="Media Item 1" subTitle="Media sub title 1"></Media>
    <Media title="Media Item 2" subTitle="Media sub title 2"></Media>
    <Media title="Media Item 3" subTitle="Media sub title 3"></Media>
    <Media title="Media Item 4" subTitle="Media sub title 4"></Media>
    <Media title="Media Item 5" subTitle="Media sub title 5"></Media>
    <Media title="Media Item 6" subTitle="Media sub title 6"></Media>
</MediaList>
```

### MediaList with images
```.jsx
<MediaList>
    <Media image="https://i.imgur.com/Ee55uvc.jpg" title="Media Item 1" subTitle="Media sub title 1"></Media>
    <Media image="https://i.imgur.com/Ee55uvc.jpg" title="Media Item 2" subTitle="Media sub title 2"></Media>
    <Media image="https://i.imgur.com/Ee55uvc.jpg" title="Media Item 3" subTitle="Media sub title 3"></Media>
    <Media image="https://i.imgur.com/Ee55uvc.jpg" title="Media Item 4" subTitle="Media sub title 4"></Media>
    <Media image="https://i.imgur.com/Ee55uvc.jpg" title="Media Item 5" subTitle="Media sub title 5"></Media>
    <Media image="https://i.imgur.com/Ee55uvc.jpg" title="Media Item 6" subTitle="Media sub title 6"></Media>
</MediaList>
```

### MediaList without full props
```.jsx
<MediaList>
    <Media image="https://i.imgur.com/Ee55uvc.jpg" imageSize="6" scaleSize="2" title="Media Item 1" subTitle="Media sub title 1" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."></Media>
    <Media image="https://i.imgur.com/Ee55uvc.jpg" imageSize="6" scaleSize="2" title="Media Item 2" subTitle="Media sub title 2" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."></Media>
    <Media image="https://i.imgur.com/Ee55uvc.jpg" imageSize="6" scaleSize="2" title="Media Item 3" subTitle="Media sub title 3" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."></Media>
    <Media image="https://i.imgur.com/Ee55uvc.jpg" imageSize="6" scaleSize="2" title="Media Item 4" subTitle="Media sub title 4" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."></Media>
    <Media image="https://i.imgur.com/Ee55uvc.jpg" imageSize="6" scaleSize="2" title="Media Item 5" subTitle="Media sub title 5" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."></Media>
    <Media image="https://i.imgur.com/Ee55uvc.jpg" imageSize="6" scaleSize="2" title="Media Item 5" subTitle="Media sub title 6" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."></Media>
</MediaList>
```

### MediaList without full props and custom spacing
```.jsx
<MediaList marginBottom="50">
    <Media image="https://i.imgur.com/Ee55uvc.jpg" imageSize="6" scaleSize="2" title="Media Item 1" titleSize="3" subTitle="Media sub title 1" subTitleSize="3" subTitleMarginTop="8" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."descriptionMarginTop="8"></Media>
    <Media image="https://i.imgur.com/Ee55uvc.jpg" imageSize="6" scaleSize="2" title="Media Item 2" titleSize="3" subTitle="Media sub title 2" subTitleSize="3" subTitleMarginTop="8" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr." descriptionMarginTop="8"></Media>
    <Media image="https://i.imgur.com/Ee55uvc.jpg" imageSize="6" scaleSize="2" title="Media Item 3" titleSize="3" subTitle="Media sub title 3" subTitleSize="3" subTitleMarginTop="8" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr." descriptionMarginTop="8"></Media>
    <Media image="https://i.imgur.com/Ee55uvc.jpg" imageSize="6" scaleSize="2" title="Media Item 4" titleSize="3" subTitle="Media sub title 4" subTitleSize="3" subTitleMarginTop="8" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr." descriptionMarginTop="8"></Media>
    <Media image="https://i.imgur.com/Ee55uvc.jpg" imageSize="6" scaleSize="2" title="Media Item 5" titleSize="3" subTitle="Media sub title 5" subTitleSize="3" subTitleMarginTop="8" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr." descriptionMarginTop="8"></Media>
    <Media image="https://i.imgur.com/Ee55uvc.jpg" imageSize="6" scaleSize="2" title="Media Item 5" titleSize="3" subTitle="Media sub title 6" subTitleSize="3" subTitleMarginTop="8" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr." descriptionMarginTop="8"></Media>
</MediaList>
```

### Props for MediaList
```!jsx
<ComponentDoc component="MediaListProps" />
```

### Props for Media
```!jsx
<ComponentDoc component="MediaProps" />
```
