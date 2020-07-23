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

To lazy load images only when they become visible in the viewport, specify the URL for each `img` element using the `data-src` attribute, for example:

```js
<img data-src="/path/to/img.png"/>
```

Then add a `lazyLoadImages` prop to `CmsSlot`:


```js
<CmsSlot lazyLoadImages>{content}</CmsSlot>
```

When `img` elements become visible in the viewport, React Storefront will copy the value of `data-src` to `src` and remove the `data-src` attribute.
