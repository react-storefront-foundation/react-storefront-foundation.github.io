# Connectors

Connectors allow you to easily pull data from a variety of ecommerce platforms.  This guide shows you how to integrate with supported platforms using connectors.

Connectors can be found in [react-storefront-community](https://github.com/react-storefront-community).

## Configuring a connector

By default apps created with `create-react-storefront` use a mock connector which procedurally generated dummy data for demos.  You can replace this connector by setting the `connector` setting in `xdn.config.js`.  For example, to connect to Magento:

```js
// next.config.js

const withReactStorefront = require('react-storefront/plugins/withReactStorefront')

module.exports = withReactStorefront({
  target: 'serverless',
  connector: 'react-storefront-magento2-connector'
})
```

## Environment Variables 

Connectors generally use environment variables setting API keys and other configuration parameters.  Consult the README for your connector to learn what variables need to be set.

## Creating your own connector

For information on how to create your own connector, see the
[React Storefront Connector API Docs](https://react-storefront-community.github.io/react-storefront-connector/docs/).
