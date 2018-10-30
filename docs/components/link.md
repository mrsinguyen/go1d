---
title: Link
lead: A component that allows you to specify a custom link that overrides the default anchor tag via the Provider component
status: ready
releaseVersion: 0.0.19
---

This component will default to producing an anchor tag or a custom link component if passed in via the props. The LinkComponent prop takes in a function that returns a React element. In the example below we pass in a function that returns a anchor that adds to the href which will be rendered instead of the default anchor tag. To use with ReactRouter, you would do pass in one of the Link components from React router.

## Examples

### Default link

```.jsx
<Link href="#testing">
  Link text
</Link>
```


### Overriden link

```.jsx
<Provider linkComponent={({ href, children}) => <a href={href + "-custom"}>{children} + {href}</a>}>
  <Link href="#testing">
    Link text
  </Link>
</Provider>
```
