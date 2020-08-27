# Prefetching

To provide instant page transitions, React Storefront can prefetch data for HTML links so that the browser's cache stays one click ahead of the user.  This guide covers how to configure prefetching.

## The Link Component

Always use React Storefront's `Link` component to display links to other pages.  This component adds data prefetching to Next.js's `Link` component. To prefetch the data for a given page when the link appears in the viewport, set the `prefetch` prop to `visible`:

```js
import { Link } from 'react-storefront/link'

<Link prefetch="visible" as={product.url} href="/p/[productId]">
  {product.name}
</Link>
```

To prefetch page data as soon as the link is created, set `prefetch="always"`.

## Prefetching Programmatically

To prefetch data for a page programmatically:

```js
import { prefetch } from 'react-storefront/serviceWorker'

prefetch('/api/p/1')
```

You can also prefetch API data using the page path:

```js
import { prefetchJsonFor } from 'react-storefront/serviceWorker'

prefetchJsonFor('/p/1')
```

## How Prefetching Works

To prefetch the data for a page, React Storefront inserts a `<link rel="prefetch"/>` element into the document's `head` section.  This causes the browser to fetch the URL with low priority, meaning it will not block other more important network requests like images and navigation.  As with all fetch requests, a version parameter `__v__` is append to the URL's query string.  This ensures that prefetched results from previous versions of your app are not served from the cache to the current version.

