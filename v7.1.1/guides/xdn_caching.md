# Caching

The Moovweb XDN provides powerful caching capabilities that you configure from JavaScript. This guide covers how to cache your responses to make your app lighting-fast.

## Caching a route

You can cache any route in `routes.js` using the `cache` function provided to your route callback.

```js
router.match('/p/:productId', ({ cache, render }) => {
  cache({
    maxAgeSeconds: 60 * 60 * 24, // 1 day,
    staleWhileRevalidateSeconds: 60 * 60 * 24 // deliver stale responses for an additional 1 day
  })

  render(renderNextJS)
})
```

## Time to live

You can set a cached response's time to live using the `maxAgeSeconds` and `staleWhileRevalidateSeconds` options.

A cached response will be considered "fresh" and will be served from the cache for `maxAgeSeconds`. When a request is received for a stale response, you can optionally serve the stale response while fetching a fresh response for the next request by setting `staleWhileRevalidateSeconds`, which controls how long a stale response can be served before being evicted from the cache.

## Ignoring query parameters

By default, the Moovweb XDN will serve a cached response if and only if it's entire URL, including the query string, matches the requested URL. You can choose to ignore some or all query parameters when determining if a cached response can be served by creating a custom cache key:

```js
import { Router, createCustomCacheKey } from 'xdn-router'

router.match('/p/:productId', ({ cache, render }) => {
  cache({
    maxAgeSeconds: 60 * 60 * 24, // 1 day,
    staleWhileRevalidateSeconds: 60 * 60 * 24, // deliver stale responses for an additional 1 day
    key: createCustomCacheKey().ignoreAllQueryParameters()
  })

  render(renderNextJS)
})
```

The example above ignores all query parameters. In this case `/p/1` and `/p/1?gclid=abc123` would yield the same response.

You can also choose to respect some query parameters:

```js
cache({
  key: createCustomCacheKey().ignoreAllQueryParametersExcept('search', 'color')
})
```

You can also ignore only specific query parameters:

```js
cache({
  key: createCustomCacheKey().ignoreQueryParametersExcept('gclid')
})
```

Moovweb recommends using `ignoreAllQueryParametersExcept()` to "whitelist" the query parameters that each page excepts. Real world apps often suffer from severe cache fragmentation due to unexpected query parameters being passed from links on third-party sites, most of which are only needed for tracking clicks in client-side analytics. Ignoring query parameters in your cache configuration will not affect such analytics.

## Caching multiple variants for a given URL

### Default cache key

The default cache key in Moovweb XDN consists of the following request parameters:

- Domain on which the request was made
- Request path (including the query string)
- Backend to which the request was routed
- TLS flag

Implications are as following:

- Every deployment will have a separate cache space
- Every domain in the site, if your site serves more than one domain, will have a separate cache space
- Every path in the site will have a separate cache space
- Every backend will have a separate cache space (so even in the same version a request made to say desktop backend will be a separate cache entry from the one made to say mobile backend)
- HTTPS requests will have a different cache space from HTTP (although since XDN doesn't allow HTTP traffic in practice this is relevant only for 301s redirecting from HTTP to HTTPS)

### Custom cache keys

You can configure the Moovweb XDN to store multiple variants for any given route by specifying a custom cache key. This is essential when you need to serve multiple languages, currencies, or shipping locations from the same domain.

Here is an example which uses a cookie called "currency" to split the cache:

```js
cache({
  key: createCustomCacheKey().addCookie('currency') // split the cache based on the currency cookie
})
```

In this scenario, the Moovweb XDN will store a separate response in the cache for each value of the currency cookie. For example, A user with a currency cookie of "USD" will get a different cached response from a user with a currency cookie of "EUR".

### Grouping Cookies

You can return a single cached response for multiple values of a cookie by passing an optional partitioning callback to `addCookie()`. Here we create two partitions: one called "na" representing North America, consisting of "us" and "ca", and one for all others.

In this example users with a location cookie with value of "us" or "ca" will share one response, while all other users will share a different response:

```js
createCustomCacheKey().addCookie('location', cookie => {
  cookie.partition('na').byPattern('^(us|ca)$')
  cookie.partition('others').byPattern('.*')
})
```
