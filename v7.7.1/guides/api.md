# API

This guide covers the basics of implementing an API for React Storefront.

## Overview

Your React Storefront app is a single page PWA that fetches data for each page from a RESTful JSON API. You can either implement your own API using Next.js API endpoints in `pages/api` or connect directly to a headless ecommerce API.

## Example Routes

The starter app comes with example endpoints for home, subcategory, and product pages located in:

```
/pages
  /api
    /p
      [productId].js        // Product
    /s
      [subcategoryId].js    // Subcategory
    index.js                // Home Page
```

These endpoints generate mock data procedurally. You will replace them with real data when implementing your app.

## App Data and Page Data

API endpoints can be called during server side rendering (when the user initially arrives at your app) or when navigating between pages. When rendering on the server, the API must return data for the page being displayed (we refer to this as "page data") as well as data required by other shared components such as the main menu, navigation, and footer (we refer to this as "app data"). For all navigation that occurs after the initial page load, only page data needs to be returned as the content of shared app components usually doesn't change. Omitting app data during subsequent minimizes response sizes and eliminates unnecessary work on the server. React Storefront provides a function to make this easy:

### fulfillAPIRequest

The `fulfillAPIRequest` function takes the request an an object with `addData` and `pageData` callbacks. The `appData` callback is only called during server side rendering. It should return a `Promise` that resolves to the data for shared app components such as the main menu, nav, and footer. The `pageData` callback is called for all requests.

```js
import fulfillAPIRequest from 'react-storefront/props/fulfillAPIRequest'

fulfillAPIRequest(req, {
  appData: () => fetchAppData(),
  pageData: () => fetchPageData()
})
```

## Implementing the API

To learn how to implement APIs for the different parts of your app, see the "Pages and Features" section of the guides.
