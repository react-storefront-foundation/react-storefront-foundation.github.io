# CMS Integration

React Storefront can work with any CMS. Use the `CmsSlot` component to display HTML content from your CMS:

## CmsSlot

```js
import CmsSlot from 'react-storefront/CmsSlot'

export default function Home({ slots }) {
  return (
    <div>
      <CmsSlot>{slots.banner}</CmsSlot>
      <CmsSlot>{slots.hero}</CmsSlot>
    </div>
  )
}
```

## Prefetching links in CMS content

You can prefetch links in CMS content when using:

```js
<CmsSlot prefetchLinks>{content}</CmsSlot>
```

## Lazy loading images

To lazy load images only when the become visible in the viewport, use:

```js
<CmsSlot lazyLoadImages>{content}</CmsSlot>
```
