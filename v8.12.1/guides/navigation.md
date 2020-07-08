# Navigation

This guide covers the basics of navigating between pages in React Storefront.

## Link

React Storefront provides a `Link` component built on top of `next/link` that provides additional functionality. As with Next's `Link` component, you need to specify both `as` and `href` props for dynamic routes:

```js
<Link as="/p/1" href="/p/[productId]">
  Red Shirt
</Link>
```

## Prefetching

You can prefetch and cache the data for a linked page using `<Link prefetch="visible|always">`. The `prefetch` accepts two values:

- "always" - Prefetch the data for the target page as soon as the link is rendered
- "visible" - Wait until the link is visible in the viewport before prefetching the data for the target page

```js
<Link as="/p/1" href="/p/[productId]" prefetch="visible">
  Red Shirt
</Link>
```

By convention, the Link component will compute the URL to prefetch by adding `/api/` to the beginning of the `href` prop. You can override this functionality by providing a `prefetchURL` prop:

```js
<Link prefetch="visible" as="/p/1" href="/p/[productId]" prefetchURL="https://my.api.com/p/1">
  Product 1
</Link>
```

It is important to note that prefetching can result in significantly more traffic being sent to your API unless you're running behind and edge-based cache that supports shielding and request coalescing like [Moovweb's XDN](https://www.moovweb.com).

## Passing props to the next page

Often times much of the data to be displayed above the fold on a given page is available when the link to that page is created. Common examples are the product name, rating, and price on a PLP. You can pass these to the PDP so they can be displayed in the skeleton while the rest of product data is being fetched from the back end.

Use Link's `pageData` prop to pass data from the current page to the next page.

```js
<Link as="/p/1" href="/p/[productId]" pageData={{ product: { name: 'Red Shirt' } }}>
  Red Shirt
</Link>
```

Here is a complete example with PLP and PDP:

### PLP Example

```js
import useSearchResultsStore from 'react-storefront/plp/useSearchResultsStore'
import Link from 'react-storefront/link/Link'
import Rating from 'react-storefront/Rating'
import { createLazyProps, fetchFromAPI } from 'react-storefront/props'

export default function Subcategory(lazyProps) {
  const [state, updateState] = useSearchResultsStore(lazyProps)
  const { loading, pageData } = state

  return (
    <div>
      {!loading &&
        pageData.products.map((product, i) => (
          <div key={i}>
            <Link
              href="/p/[productId]"
              as={`/product/${product.id}`}
              pageData={{ product }} // this data will be immediately available on the PDP while the rest of the data is fetched from the back end
            >
              {product.name}
            </Link>
            {product.price}
            <Rating value={product.rating} />
          </div>
        ))}
    </div>
  )
}

Subcategory.getInitialProps = createLazyProps(fetchFromAPI)
```

### PDP Example

```js
import useLazyState from 'react-storefront/hooks/useLazyState'
import { createLazyProps, fetchFromAPI } from 'react-storefront/props'

export default function Product(lazyProps) {
  const [state, updateState] = useLazyState(lazyProps, { pageData: { product: {}, quantity: 1 } })
  const {
    loading,
    pageData: { product }
  } = state

  return (
    <div>
      {/* product.name will be available immediately when provided with <Link pageData={{ product }}> */}
      {product.name ? <Typography variant="title">{product.name}</Typography> : <Skeleton />}
    </div>
  )
}

Product.getInitialProps = createLazyProps(fetchFromAPI)
```
