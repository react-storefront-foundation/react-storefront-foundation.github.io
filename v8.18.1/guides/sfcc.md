# Salesforce Commerce Cloud Connector

The [React Storefront](https://github.com/storefront-foundation/react-storefront) headless ecommerce connector for [Salesforce Commerce Cloud](https://www.salesforce.com/products/commerce-cloud/overview/).

This guide covers how to get up and running with the Salesforce Commerce Cloud Connector. For information on connectors in general and how to write your own connector refer to the [React Storefront Connectors](https://docs.reactstorefront.io/guides/connectors) documentation.

## Requirements

You will need a Salesforce Commerce Cloud site and API client setup to try out the connector.

## Running Locally

Create a new React Storefront app using version 8.14.0 or later:

```
npm create react-storefront@^8.014.0 my-sfcc-app
```

Next `cd` into your created application and install the Salesforce Commerce Cloud connector:

```
cd my-sfcc-app
npm install react-storefront-salesforce-commerce-cloud-connector
```

Next configure the `SITE_ID`, `SHORT_CODE`, `ORGANIZATION_ID`, and `CLIENT_ID` environment variables in `.env` file to point to your Salesforce Commerce Cloud site and API client. See `.env.sample` file as an example of adding env variable via [dotenv](https://www.npmjs.com/package/dotenv). You can also check [this guide](https://www.twilio.com/blog/working-with-environment-variables-in-node-js-html) to get more info about Node.js Environment Variables. For example, your `.env` file may look like:

```
LEGACY_BACKEND_DOMAIN=www.my-sfcc-site.com
LEGACY_BACKEND_HOST_HEADER=www.my-sfcc-site.com
CLIENT_ID=832ecc65-6fe9-3fcc-a1e2-a222050e0123
ORGANIZATION_ID=f_ecom_abcd_001
SHORT_CODE=4ahl7k9n
SITE_ID=RefArch
```

Finally set the connector in your `next.config.js` file. By default this file is set to use the `react-storefront/mock-connector` as shown below:

```
module.exports = withReactStorefront({

  // ... Some code

  connector: 'react-storefront/mock-connector',

  // ... More code
```

Change this line to use the `react-storefront-salesforce-commerce-cloud-connector` as shown below:

```
module.exports = withReactStorefront({

  // ... Some code

  connector: 'react-storefront-salesforce-commerce-cloud-connector',

  // ... More code
```

Now you can run your project locally,

```
npm start
```

And then visit http://127.0.0.1:3000 in your browser.

## Deploying to the Moovweb XDN

The front-end React Storefront can be hosted anywhere that supports Node and Express but it works great on the [Moovweb XDN](https://www.moovweb.com/). You can try the XDN for free by signing up [here](https://moovweb.app/signup. Once you have an account you can deploy it by running `xdn deploy`:

```
xdn deploy
```

Refer to the [XDN deployment guide](https://developer.moovweb.com/guides/deploying) for more information.

#### Configure Static Prerendering in XDN

The connector has a built-in prerender module which fetches all category routes and the first ten products for each category by default. This will ensure the first page your users land on will be cached.

You simply need to add these lines to your `routes.js` file:

```js
const { getPrerenderUrls } = require('react-storefront-salesforce-commerce-cloud-connector')

module.exports = new Router().prerender(getPrerenderUrls)
// ...the rest of your router
```

The `getPrerenderUrls` function takes an options object as it's only parameter.

For example, you could fetch products from each category with the following options:

```js
{ sort: 'most-popular', offset: 0, limit: 13 }
```

More info on how to customize your routes to prerender [here](https://developer.moovweb.com/guides/static_prerendering)
