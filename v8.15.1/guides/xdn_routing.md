# Routing

The Moovweb XDN adds powerful routing capabilities beyond what Next.js provides. By deploying your React Storefront app on the Moovweb XDN you can:

- Proxy URLs from additional upstream sites
- Send redirects from the network edge
- Handle URLs that do not follow Next.js conventions such as "vanity" URLs used for SEO.
- Fall back to Next.js standard routing for unmatched requests

## Configuration

To define routes for the Moovweb XDN, create a `routes.js` file in the root of your project. You can override the default path to the router by setting the `routes` key in `xdn.config.js`.

The `routes.js` file should export an instance of `@xdn/core/Router`:

```js
// routes.js
const { Router } = require('@xdn/core/router')

module.exports = new Router()
```

## Declaring Routes

The Moovweb XDN provides direct support for Next.js applications through the `@xdn/next` package, which provides a `nextRoutes` middleware that automatically
adds all Next.js page routes to the router:


```js
const { Router } = require('@xdn/core/router')
const { nextRoutes } = require('@xdn/next')

module.exports = new Router()
  .use(nextRoutes)
```

Cache responses by using the `cache` function in routes for specific pages:

```js
const { Router } = require('@xdn/core/router')
const { nextRoutes } = require('@xdn/next')

module.exports = new Router()
  .get('/', ({ cache }) => {
    cache({
      edge: {
        maxAgeSeconds: 60 * 60 * 24 // cache the home page for 24 hours
      }
    })
  })
  .get('/p/:productId', ({ cache }) => {
    cache({
      edge: {
        maxAgeSeconds: 60 * 60 // cache product pages for 1 hour
      }
    })
  })
  .use(nextRoutes)
```

### Proxying Unhandled URLs to a Legacy Experience

The Moovweb XDN makes it easy to proxy URLs not handled by your PWA to a legacy experience.  To do so, define a legacy backend
in xdn.config.js:

```js
require('dotenv').config()

module.exports = {
  backends: {
    legacy: {
      domainOrIp: process.env.LEGACY_BACKEND_DOMAIN || 'legacy.my-site.com',
      hostHeader: process.env.LEGACY_BACKEND_HOST_HEADER || 'legacy.my-site.com',
    },
  },
}
```

Then add a fallback route that sends unhandled traffic to the legacy experience:

```js
module.exports = new Router()
  // ...
  .use(nextRoutes)
  .fallback(({ proxy }) => proxy('legacy'))
```

### Complete Routing Guide

[Complete to Routing on the Moovweb XDN](https://developer.moovweb.com/guides/routing)

