# Routing

The Moovweb XDN adds powerful routing capabilities beyond what Next.js provides. By deploying your React Storefront app on the Moovweb XDN you can:

- Proxy URLs from additional upstream sites
- Send redirects from the network edge
- Handle URLs that do not follow Next.js conventions such as "vanity" URLs used for SEO.
- Fall back to Next.js standard routing for unmatched requests

## Configuration

To define routes for the Moovweb XDN, create a `routes.js` file in the root of your project. You can override the default path to the router by setting the `routes` key in `xdn.config.js`.

The `routes.js` file should export an instance of `xdn-router/Router`:

```js
// routes.js
const Router = require('xdn-router/Router')

module.exports = new Router()
```

## Declaring Routes

Declare routes using the `match` method:

```js
// routes.js
const Router = require('xdn-router/Router')
const router = new Router()

router.match('/some-path', edge => {
  // handle the request here
})

module.exports = router
```

## Route Pattern Syntax

The syntax for route paths is provided by [route-parser](https://github.com/rcs/route-parser). It is similar to express's route syntax:

| Example       | Description                                                                                                      |
| ------------- | ---------------------------------------------------------------------------------------------------------------- |
| `:name`       | a parameter to capture from the route up to `/`, `?`, or end of string                                           |
| `*splat`      | a splat to capture from the route up to `?` or end of string                                                     |
| `()`          | Optional group that doesn't have to be part of the query. Can contain nested optional groups, params, and splats |
| anything else | free form literals                                                                                               |

Some examples:

- `/some/(optional/):thing`
- `/users/:id/comments/:comment`
- `/*a/foo/*b`
- `/books/*section/:title`
- `/books?author=:author`

## Matching Method, Cookies, and Headers

Match can either take a URL path, or an object which allows you to match based on method, cookies, and request headers:

```js
router.match(
  {
    path: '/some-path', // value is route-pattern syntax
    method: 'GET|POST', // value is a regular expression
    cookies: { currency: '^(usd)$' }, // keys are cookie names, values are regular expressions
    headers: { 'x-moov-device': '^desktop$' } // keys are header names, values are regular expressions
  },
  edge => {}
)
```

## Handling Requests

The second argument to `router.match` is a function that receives the request and generates a response. The function is passed an `edge` object containing the following methods:

## proxy(upstream, options)

The proxy method allows you to route the request to an upstream site configured in `xdn.config.js`.

### Parameters

| Name         | Type   | Description                                                                                                                           |
| ------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| upstream     | String | The name of an upstream configured in xdn.config.js to which the request should be routed                                             |
| options      | Object | An object with the following params                                                                                                   |
| options.path | String | The path to request from the upstream site. You can reference params in your route pattern using `{variable}`. See the example below. |

```js
router.match('/blog/:slug', ({ proxy }) => {
  proxy('origin', { path: '/insights/{slug}' })
})
```

## redirect(path, status)

The redirect method allows you to redirect the browser to a new URL from the network edge.

### Parameters

| Name   | Type    | Description                                                                                                |
| ------ | ------- | ---------------------------------------------------------------------------------------------------------- |
| path   | String  | The target path. You can reference params in your route pattern using `{variable}`. See the example below. |
| status | Integer | The HTTP response status to send. Defaults to `302` (Temporary redirect).                                  |

```js
router.match('/sale/:product', ({ redirect }) => {
  redirect('/holiday-sale/{product}', 301) // reference a path variable and send a 301 http status
})
```

## render(callback)

The render method allows you to render an HTML response using Next.js.

### Parameters

| Name     | Type     | Description                                                                                          |
| -------- | -------- | ---------------------------------------------------------------------------------------------------- |
| callback | Function | A callback that sends a response using the provided response object. See "Callback Parameters" below |

### Callback Parameters

| Name     | Type                                                                                   | Description                                  |
| -------- | -------------------------------------------------------------------------------------- | -------------------------------------------- |
| request  | [http.ClientRequest](https://nodejs.org/api/http.html#http_class_http_clientrequest)   | The node.js request object                   |
| response | [http.ServerResponse](https://nodejs.org/api/http.html#http_class_http_serverresponse) | The node.js response object                  |
| params   | Object                                                                                 | The query and path params as key/value pairs |

```js
const { renderNextJs } = require('./app')

router.match('/holiday-sale/:productId', ({ render }) => {
  render((req, res, params) => renderNextJs(req, res, params, '/p/[productId]'))
})
```

### Rendering a Response with Next.js

You can render a response using Next.js by calling the `renderNextJs` function exported by `/app.js`, which takes the following parameters:

#### renderNextJs(request, response, params, page)

| Name     | Type                                                                                   | Description                                                                                                                                                                                                                                                                                                                                                    |
| -------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| request  | [http.ClientRequest](https://nodejs.org/api/http.html#http_class_http_clientrequest)   | The node.js request object                                                                                                                                                                                                                                                                                                                                     |
| response | [http.ServerResponse](https://nodejs.org/api/http.html#http_class_http_serverresponse) | The node.js response object                                                                                                                                                                                                                                                                                                                                    |
| params   | Object                                                                                 | The query and path params as key/value pairs                                                                                                                                                                                                                                                                                                                   |
| page     | String                                                                                 | The path to the page component to render. If omitted, next.js will attempt to automatically determine the page based on it's own standard routing. You generally only need to supply a page when creating an explicit route. When using next.js to handle requests that don't match an explicit route, the page argument can be omitted. See "Fallback" below. |

## Fallback

You can provide a fallback route to handle requests that don't match any explicit route. Generally apps use Next.js's default routing to respond to unmatched requests:

```js
router.fallback(({ render }) => render(renderNextJs)))
```

The `fallback` route should be the last route.

## Altering Request and Response Headers

When proxying an upstream site, you can alter the request headers sent upstream using `edge.requestHeaders(config)`, which takes a single object with the following parameters:

| Name | Type | Description |
| set | Object | Keys are the names of headers to set, values are the header values |
| remove | Object |
