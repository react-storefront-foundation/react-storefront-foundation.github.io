# Connectors Overview

Connectors allow you to easily pull data from a variety of ecommerce platforms. This guide shows you how to integrate with supported platforms using connectors.

Connectors can be found in the [storefront-foundation Github organization](https://github.com/storefront-foundation). The currently available connectors are:

- Mock Connector: This is the default connector that comes in the React Storefront starter app and uses dummy data.
- [Magento2 Connector](https://github.com/storefront-foundation/magento2-connector)
- [Salesforce Commerce Cloud Connector](https://github.com/storefront-foundation/salesforce-commerce-cloud-connector)

## Configuring a connector

By default apps created with `create-react-storefront` use a mock connector which procedurally generates mock data for demos. You can replace this connector by setting the `connector` setting in `next.config.js`. For example, to connect to Magento:

```js
// next.config.js

const withReactStorefront = require('react-storefront/plugins/withReactStorefront')

module.exports = withReactStorefront({
  target: 'serverless',
  connector: 'react-storefront-magento2-connector',
})
```

## Environment Variables

Connectors generally use environment variables setting API keys and other configuration parameters. Consult the README for your connector to learn what variables need to be set.

## Do you need a connector?

Writing a connector is typically appropriate for someone looking to build multiple sites on the same platform.  If you're building a single storefront, you can just connect to your apis by editing the endpoints in `/pages/api` directly and no connector is needed.

## Creating your own connector

One of the best ways to understand how to implement a connector is to study the existing open source connectors, [Magento2 Connector](https://github.com/storefront-foundation/magento2-connector) and [Salesforce Commerce Cloud Connector](https://github.com/storefront-foundation/salesforce-commerce-cloud-connector).

A connector is an npm package that implements the [`Connector` interface](https://storefront-foundation.github.io/react-storefront-connector/docs/interfaces/_connector_.connector.html) as its main default export. For example, the SFCC connector exports its methods (such as `addToCart`, `product`, `home`, etc.) to implement the `Connector` interface in its package's [index.js](https://github.com/storefront-foundation/salesforce-commerce-cloud-connector/blob/master/src/index.js) file. That file pulls then the individual API method implementations from other files in the package:

```js
// Inside /src/index.js
export { default as cart } from './cart.js'
export { default as account } from './account.js'
export { default as addToCart } from './addToCart.js'
export { default as removeCartItem } from './removeCartItem.js'
export { default as updateCartItem } from './updateCartItem.js'
export { default as home } from './home.js'
export { default as product } from './product.js'
export { default as productMedia } from './productMedia.js'
export { default as productSuggestions } from './productSuggestions.js'
export { default as routes } from './routes.js'
export { default as search } from './search.js'
export { default as searchSuggestions } from './searchSuggestions.js'
export { default as session } from './session.js'
export { default as subcategory } from './subcategory.js'
export { default as signUp } from './signUp.js'
export { default as signIn } from './signIn.js'
export { default as signOut } from './signOut.js'
```

All those exported methods such as `addToCart`, `product`, `home`, etc. implement the methods listed in the [`Connector` interface](https://storefront-foundation.github.io/react-storefront-connector/docs/interfaces/_connector_.connector.html).

Let's walk through the `product` method as an example. A connector implements the `product` method to return the data for an item's product detail page (PDP). Under the hood the connector needs to be implement the [`product` method](https://storefront-foundation.github.io/react-storefront-connector/docs/interfaces/_connector_.connector.html#product), which returns an object that implements the [`ProductPageData` interface](https://storefront-foundation.github.io/react-storefront-connector/docs/interfaces/_productpagedata_.productpagedata.html). The `ProductPageData` interface has a property called [`product`](https://storefront-foundation.github.io/react-storefront-connector/docs/interfaces/_productpagedata_.product.html) which is where you populate all the properties of the product such as [`colors`](https://storefront-foundation.github.io/react-storefront-connector/docs/interfaces/_productpagedata_.product.html#colors), [`id`](https://storefront-foundation.github.io/react-storefront-connector/docs/interfaces/_productpagedata_.product.html#id), [`sku`](https://storefront-foundation.github.io/react-storefront-connector/docs/interfaces/_productpagedata_.product.html#sku), etc.

As example implementation of this is in the SFCC connector's [product.js file](https://github.com/storefront-foundation/salesforce-commerce-cloud-connector/blob/master/src/product.js). In particular, [`normalizeProduct` helper](https://github.com/storefront-foundation/salesforce-commerce-cloud-connector/blob/fdb256710668ee5eefe189711217a004b82d2501/src/utils/normalizeProduct.js) is used to structure the data coming from SFCC into the format of the connector.

For information on how to create your own connector, see the
[React Storefront Connector API Docs](https://storefront-foundation.github.io/react-storefront-connector/docs/).
