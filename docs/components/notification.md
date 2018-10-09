---
title: Notification
status: ready
releaseVersion: 0.0.29
---

```.jsx
<React.Fragment>

  <Button 
    color='success' 
    onClick={() => NotificationManager.success({
          strong: '1 course sent for import.',
          weak: 'You now have',
          options: {
            linkText: '81 imports',
            link: 'https://foo.com',
            lifetime: 100000,
            isOpen: true
          }
        }
      )}
    >
    Push Notification
  </Button>
  <Button
    color='warning' 
    onClick={() => NotificationManager.warning({
          strong: 'Careful,',
          weak: 'read more',
          options: {
            linkText: 'here.',
            link: 'https://foo.com',
            lifetime: 3000,
            isOpen: true
          }
        }
      )}
    >
    Push Notification
  </Button>
  <Button 
    color='danger' 
    onClick={() => NotificationManager.danger({
          strong: 'There was an error.',
          weak: 'Read more',
          options: {
            linkText: 'here.',
            link: 'https://foo.com',
            lifetime: 3000,
            isOpen: true
          }
        }
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