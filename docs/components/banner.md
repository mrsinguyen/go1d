---
title: Banner
status: ready
releaseVersion: 0.0.36
---

## Examples

```.jsx
<Banner
  type="success"
  close={() => alert('close event')}
>
  <Text fontWeight="bold">Success! </Text>
  <Text>
    This is a message <Link css={{ display: 'inline', fontWeight: '600', textDecoration: 'underline' }} href="https://foo.com">read more</Link>.
  </Text>
</Banner>

<Banner
  type="warning"
  close={() => alert('close event')}
>
  <Text fontWeight="bold">Warning! </Text>
  <Text>
    This is a message <Link css={{ display: 'inline', fontWeight: '600', textDecoration: 'underline' }} href="https://foo.com">read more</Link>.
  </Text>
</Banner>

<Banner
  type="danger"
  close={() => alert('close event')}
>
  <Text fontWeight="bold">Danger! </Text>
  <Text>
    This is a message <Link css={{ display: 'inline', fontWeight: '600', textDecoration: 'underline' }} href="https://foo.com">read more</Link>.
  </Text>
</Banner>
```


```!jsx
<ComponentDoc component={Banner} />
```