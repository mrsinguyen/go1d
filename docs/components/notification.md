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
          message: <Text><Text fontWeight="bold">Success!</Text> This is a message <Link href="https://foo.com">read more</Link>.</Text>,
          options: {
            lifetime: 3000,
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
          message: <Text><Text fontWeight="bold">Warning!</Text> This is a message <Link href="https://foo.com">read more</Link>.</Text>,
          options: {
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
          message: <Text><Text fontWeight="bold">Danger!</Text> This is a message <Link href="https://foo.com">read more</Link>.</Text>,
          options: {
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