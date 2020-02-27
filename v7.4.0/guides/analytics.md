# Analytics

Moovweb provides a commercial package, `react-storefront-analytics` that makes it easy to send page view and interaction events to 3rd party analytics providers. [Contact Moovweb](https://www.moovweb.com/learn/request-demo) for more information.

## Basic Concepts

React Storefront Analytics allows you to track user interactions in your React components and broadcast them as events to one or more configured analytics providers such as Google Analytics, Google Tag Manager, Adobe Target, Tealium, etc...

There are three core components to React Storefront Analytics:

- `<AnalyticsProvider/>` - A React component placed at the root of your app to provide an analytics context that any React Component can consume to publish analytics events
- `<Track/>` - A React component that publishes user interactions as analytics events
- targets - React components that receive analytics events and forward them on to individual 3rd party analytics providers

## AnalyticsProvider

To start adding analytics to your app, add `AnalyticsProvider` at or near the top of your component tree.

## Publishing events with <Track/>

To track a user interaction, wrap the component the user is interacting with in `Track`. Give the event a name using the `event` prop. Any additional props you provide will be provided to your targets in an `eventParams` object.

For example, to publish a "productClicked" event when a product link is clicked:

```js
import Link from 'react-storefront/link/Link'
import Track from 'react-storefront-analytics/src/Track'

function ProductItem({ product }) {
  return (
    <Track event="productClicked" product={product}>
      <Link as={product.url} href="/p/[productId]">
        {product.name}
      </Link>
    </Track>
  )
}
```

By default, `Track` taps into the `onClick` prop of the child component you provide. To use a different prop, provide an object to the `event` prop:

```js
<Track event={{ onVisible: 'productImpression', onClick: 'productClicked' }} product={product}>
  <Link
    as={product.url}
    href="/p/[productId]"
    className={classes.link}
    prefetch="visible"
    pageData={{ product }}
  >
    {product.name}
  </Link>
</Track>
```

Here we track two events:

- "productImpression" is published when Link's `onVisible` prop is called
- "productClicked" is published when Link's `onClick` prop is called

## Tracking Page Views

To publish a pageview event when a page component is first rendered, add `<TrackPageView />` to your page component. It works just like `<Track/>`, except it always publishes an event called "pageview" and doesn't accept any children. As with Track, any additional props are passed to your targets as `eventParams`.

In most cases, you'll need to report some of the data returned from your API as part of the pageview event. A common example is the document title. Therefore we suggest waiting until data is returned from the API before rendering the `TrackPageView` component.

For example:

```js
// pages/p/[productId].js

import TrackPageView from 'react-storefront-analytics/TrackPageView

export default function Product(lazyProps) {
  const { loading } = lazyProps

  return (
    <div>
      {!loading && <TrackPageView />}
      {/* The rest of the product page goes here... */}
    </div>
  )
}
```

## Configuring Targets

React Storefront Analytics provides integrations with a number of 3rd party analytics providers. Each integration is implemented as a React component. In general:

- You provide configuration options such as your API key as props.
- You handle the events you publish with `Track` by by passing a child object to the target component. The keys are the names of events and values are functions that map those events to data to send to the analytics provider.

For example, to send the "productClicked" event from the example above to Google Analytics, you would add the `react-storefront-analytics/GoogleAnalytics` component to your `AnalyticsProvider`, and define a handler for `productClicked`:

### Google Analytics

```js
<AnalyticsProvider>
  <GoogleAnalytics trackingId="(your tracking id here)">
    {{
      productClicked: ({ eventParams }) => ({
        hitType: 'event',
        eventCategory: 'interaction',
        eventAction: 'click',
        eventLabel: eventParams.product.id.toString(),
        eventValue: 1
      })
    }}
  </GoogleAnalytics>
  {/* rest of the app here */}
</AnalyticsProvider>
```

### GoogleTagManager

To add Google Tag Manager, add the `react-storefront-analytics/GoogleTagManager` component to your `AnalyticsProvider`:

```js
<AnalyticsProvider>
  <GoogleTagManager apiKey="(your API key)">
    {{
      pageview: ({ eventContext, eventParams }) => ({
        event: 'pageview',
        page: eventContext.pathname,
        title: eventContext.title
      }),
      productClicked: ({ eventParams }) => ({
        event: 'productClick',
        ecommerce: {
          click: {
            products: [
              {
                id: eventParams.product.id,
                position: eventParams.position
              }
            ]
          }
        }
      })
      // ... other events here
    }}
  </GoogleTagManager>
  {/* rest of the app here */}
</AnalyticsProvider>
```
