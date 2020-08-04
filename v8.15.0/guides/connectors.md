# Connectors

Connectors allow you to easily pull data from a variety of ecommerce platforms. This guide shows you how to integrate with supported platforms using connectors.

Connectors can be found in the [storefront-foundation Github organization](https://github.com/storefront-foundation). The currently available connectors are:

- Mock Connector: This is the default connector that comes in the React Storefront starter app and uses dummy data.
- [Magento2 Connector](https://github.com/storefront-foundation/magento2-connector)
- Salesforce Commerce Cloud Connector (currently in development)

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

## Creating your own connector

For information on how to create your own connector, see the
[React Storefront Connector API Docs](https://storefront-foundation.github.io/react-storefront-connector/docs/).
