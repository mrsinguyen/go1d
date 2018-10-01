---
title: Link
lead: A component that allows you to specify a custom link that overrides the default anchor tag via the Provider component
status: ready
---

## Examples

### Default link

```.jsx
<Link href="testing">
  Link text
</Link>
```


### Overriden link

```.jsx
<Provider LinkComponent={() => <div>Custom Link</div>}>
  <Link href="testing">
    Link text
  </Link>
</Provider>
```


```!jsx
<ComponentDoc component={Link} />
```