# Caching

Layer0 provides powerful caching capabilities that you configure from JavaScript. This guide covers how to cache your responses to make your app lightning-fast.

## Caching a route

You can cache any route in `routes.js` using the `cache` function provided to your route callback.

```js
router.match('/p/:productId', async ({ cache, render }) => {
  cache({
    browser: {
      maxAgeSeconds: 60 * 60, // cache for 1 hour using the browser's conventional http cache
      serviceWorkerSeconds: 60 * 60 * 24, // cache for 24 hours using the service worker's cache
    },
    edge: {
      maxAgeSeconds: 60 * 60 * 24, // 1 day,
      staleWhileRevalidateSeconds: 60 * 60 * 24, // deliver stale responses for an additional 1 day
    },
  })

  await render(renderNextJS)
})
```

## Caching in the Browser

The browser config controls how a response is cached in the browser. The `browser` config accepts two values:

- `maxAgeSeconds` - The number of seconds that a response can be served from the browser's conventional HTTP cache. We recommend using this for JS and CSS assets that have a hash in the filename and can be far-future cached, or for non-code assets like images. We suggest setting a value of `maxAgeSeconds: 0` for API responses. Instead, use the service worker cache by setting `serviceWorkerSeconds`.
- `serviceWorkerSeconds` - The number of seconds that a response can be served from the service worker's cache. We recommend using this for API responses because React Storefront will automatically clear this cache when a new version of the app is released. This cannot be done with the HTTP cache, and thus we recommend setting `maxAgeSeconds: 0` for API responses.

## Caching at Edge

You can set a cached response's time to live (TTL) at the edge using the `maxAgeSeconds` and `staleWhileRevalidateSeconds` options.

A cached response will be considered "fresh" and will be served from the cache for `maxAgeSeconds`. When a request is received for a stale response, you can optionally serve the stale response while fetching a fresh response for the next request by setting `staleWhileRevalidateSeconds`, which controls how long a stale response can be served before being evicted from the cache.

## Ignoring query parameters

By default, Layer0 will serve a cached response if and only if its entire URL, including the query string, matches the requested URL. You can choose to ignore some or all query parameters when determining if a cached response can be served by creating a custom cache key:

```js
import { Router, createCustomCacheKey } from '@layer0/core'

router.match('/p/:productId', async ({ cache, render }) => {
  cache({
    edge: {
      maxAgeSeconds: 60 * 60 * 24, // 1 day,
      staleWhileRevalidateSeconds: 60 * 60 * 24, // deliver stale responses for an additional 1 day
      key: createCustomCacheKey().ignoreAllQueryParameters(),
    },
  })

  await render(renderNextJS)
})
```

The example above ignores all query parameters. In this case `/p/1` and `/p/1?gclid=abc123` would yield the same response.

You can also choose to respect some query parameters:

```js
cache({
  edge: {
    key: createCustomCacheKey().ignoreAllQueryParametersExcept('search', 'color'),
  },
})
```

You can also ignore only specific query parameters:

```js
cache({
  edge: {
    key: createCustomCacheKey().ignoreQueryParametersExcept('gclid'),
  },
})
```

Layer0 recommends using `ignoreAllQueryParametersExcept()` to "whitelist" the query parameters that each page accepts. Real world apps often suffer from severe cache fragmentation due to unexpected query parameters being passed from links on third-party sites, most of which are only needed for tracking clicks in client-side analytics. Ignoring query parameters in your cache configuration will not affect such analytics.

## Caching multiple variants for a given URL

### Default cache key

The default cache key in Layer0 consists of the following request parameters:

- Domain on which the request was made
- Request path (including the query string)
- Backend to which the request was routed
- TLS flag

Implications are as following:

- Every deployment will have a separate cache space
- If your site serves more than one domain, every domain in the site will have a separate cache space
- Every path in the site will have a separate cache space
- Every backend will have a separate cache space (so even in the same version a request made to say desktop backend will be a separate cache entry from the one made to say mobile backend)
- HTTPS requests will have a different cache space from HTTP (although since Layer0 doesn't allow HTTP traffic, in practice this is relevant only for 301s redirecting from HTTP to HTTPS)

### Custom cache keys

You can configure Layer0 to store multiple variants for any given route by specifying a custom cache key. This is essential when you need to serve multiple languages, currencies, or shipping locations from the same domain.

Here is an example which uses a cookie called "currency" to split the cache:

```js
cache({
  edge: {
    key: createCustomCacheKey().addCookie('currency'), // split the cache based on the currency cookie
  },
})
```

In this scenario, Layer0 will store a separate response in the cache for each value of the currency cookie. For example, A user with a currency cookie of "USD" will get a different cached response from a user with a currency cookie of "EUR".

### Grouping Cookies

You can return a single cached response for multiple values of a cookie by passing an optional partitioning callback to `addCookie()`. Here we create two partitions: one called "na" representing North America, consisting of "us" and "ca", and one for all others.

In this example, users with a location cookie with value of "us" or "ca" will share one response, while all other users will share a different response:

```js
createCustomCacheKey().addCookie('location', cookie => {
  cookie.partition('na').byPattern('^(us|ca)$')
  cookie.partition('others').byPattern('.*')
})
```
