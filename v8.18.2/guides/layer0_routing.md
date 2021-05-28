# Routing

Layer0 adds powerful routing capabilities beyond what Next.js provides. By deploying your React Storefront app on Layer0 you can:

- Proxy URLs from additional upstream sites
- Send redirects from the network edge
- Handle URLs that do not follow Next.js conventions such as "vanity" URLs used for SEO
- Fall back to Next.js standard routing for unmatched requests

## Configuration

To define routes for Layer0, create a `routes.js` file in the root of your project. You can override the default path to the router by setting the `routes` key in `layer0.config.js`.

The `routes.js` file should export an instance of `@layer0/core/Router`:

```js
// routes.js
const { Router } = require('@layer0/core/router')

module.exports = new Router()
```

## Declaring Routes

Layer0 provides direct support for Next.js applications through the `@layer0/next` package, which provides a `nextRoutes` middleware that automatically
adds all Next.js page routes to the router:

```js
const { Router } = require('@layer0/core/router')
const { nextRoutes } = require('@layer0/next')

module.exports = new Router().use(nextRoutes)
```

Cache responses by using the `cache` function in routes for specific pages:

```js
const { Router } = require('@layer0/core/router')
const { nextRoutes } = require('@layer0/next')

module.exports = new Router()
  .get('/', ({ cache }) => {
    cache({
      edge: {
        maxAgeSeconds: 60 * 60 * 24, // cache the home page for 24 hours
      },
    })
  })
  .get('/p/:productId', ({ cache }) => {
    cache({
      edge: {
        maxAgeSeconds: 60 * 60, // cache product pages for 1 hour
      },
    })
  })
  .use(nextRoutes)
```

### Proxying Unhandled URLs to a Legacy Experience

Layer0 makes it easy to proxy URLs not handled by your PWA to a legacy experience. To do so, define a legacy backend
in layer0.config.js:

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

[Complete to Routing on Layer0](https://docs.layer0.co/guides/routing)
