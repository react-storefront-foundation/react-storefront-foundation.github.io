# Performance

React Storefront is built to maximize front-end peformance, providing the user with the fastest possible experience when browsing your product catalog. This guide provides tips you can use to ensure your app is as fast as possible.

## Lighthouse and PageSpeed Insights

One of the most popular tools for measuring website performance is Lighthouse, which can be run via Chrome DevTools. Google also provides a website for running Lighthouse called [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/).

Lighthouse has become increasingly hard on JavaScript-heavy PWAs in recent releases.  Here are some tips for keeping your Lighthouse score high:

### Bundle Size

Keep it as small as possible.  React Storefront automatically performs minification and tree-shaking at build time, but if your app adds dependencies beyond what is listing in the React Storefront starter app, your Lighthouse score will drop (particularly TTI and TBT).

### Web Fonts

If you can get away with it, don't use one. A web font can add a second or more to FCP. If you must use a webfont, import it from an NPM package like `typeface-roboto` and serve it from the same domain as the app itself to save on SSL negotiation time with a 3rd party. See how `typeface-roboto` is imported into `pages/_app.js` for an example.  Note that if you're not using Roboto, you should remove it from `pages/_app.js`.

### Lazy Hydration

Lazy hydrate all components that either start hidden or render below the fold.  React Storefront's starter app automatically does this with the main menu, search drawer, and other components.  See [Lazy Hydration](/guides/lazy_hydration) for more information.

### Inline the main image

LCP (Largest Contentful Paint) is an important factor in determining your site's Lighthouse performance score. Minimize LCP by using a base64 encoded data URL for each page's main image. Doing so can add 10-20 points to your lighthouse score.

Here's an example from the `product` method of `react-storefront/mock-connector`:

```js
import getBase64ForImage from 'react-storefront/utils/getBase64ForImage'

// ...

const mainProductImage = result.product.media.full[0]
mainProductImage.src = await getBase64ForImage(mainProductImage.src)
```

### defer vs async

Oue tests show that using `defer` instead of `async` when importing client-side JavaScript generally improves Lighthouse performance scores by a few points. It usually improves FCP and LCP, but makes TTI and TBT a bit worse.  Normally this trade-off nets a higher Lighthouse score. This may or may not be the case for your app. You can experiment by changing the `mode` prop from `defer` to `async` in `NextScript` in `pages/_document_.js`

