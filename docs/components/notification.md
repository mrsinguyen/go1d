---
title: Notification
status: ready
releaseVersion: 0.0.29
---

```.jsx
<React.Fragment>

  <Button 
    color='success' 
    onClick={() => NotificationManager.success(
        '1 course sent for import.',
        'You now have',
        '81 imports',
        'https://foo.com',
        3000,
        true
      )}
    >
    Push Notification
  </Button>
  <Button
    color='warning' 
    onClick={() => NotificationManager.warning(
        'Careful,',
        'read more',
        'here.',
        'https://foo.com',
        3000,
        true
      )}
    >
    Push Notification
  </Button>
  <Button 
    color='danger' 
    onClick={() => NotificationManager.danger(
        'There was an error.',
        'Read more',
        'here.',
        'https://foo.com',
        3000,
        true
      )}
    >
    Push Notification
  </Button>
  <NotificationContainer/>

</React.Fragment>
```

```!jsx
<ComponentDoc component={Notification} />
```

```!jsx
<ComponentDoc component={Notifications} />
```

```!jsx
<ComponentDoc component={NotificationContainer} />
```