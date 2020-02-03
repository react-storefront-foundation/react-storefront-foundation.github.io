# Managing State

React Storefront does not use a state management library such as Redux or MobX. Ecommerce data models are generally fairly simple and ecommerce apps have few complex interactions. For this reason, we feel that React's useState hook and context API provide an adequate foundation for managing state while keeping the application bundle small.

## createLazyProps

React Storefront makes it easy to display a skeleton while page data is being fetched from the server. In the case where the requested data is already in the browser's cache, or the network is extremely fast, it's better to skip the skeleton and display the full page immediately. We can implement this behavior using `createLazyProps`.

Use `createLazyProps` to create a function for next's `getInitialProps` that returns props after a maximum `timeout` that defaults to 50ms. Use in conjunction with the `useLazyState` hook to display a skeleton until page data is returned from the network.

During client-side navigation, this allows the page component to render before the fetched data is returned from the server, which gives us an opportunity to display a skeleton when the network is slow. On a fast network or when the response is cached in the browser and returns within the configured timeout, the fetched data will be available for the page's initial render, and we can skip the skeleton.

When rendering on the server, the timeout is not enforced. This function simply waits for the network and returns once data is received.

```js
import { fetchFromAPI, createLazyProps } from 'react-storefront/props'

export default function Product(lazyProps) {
  // ... render the product page ...
}

Product.getInitialProps = createLazyProps(fetchFromAPI, { timeout: 50 /* the default */ })
```

## fetchFromAPI

If you are implementing an API within your React Storefront app, you can use `fetchFromAPI` to fetch page data from the API endpoint at the same path as the page being requested. So for example, when rendering`/p/1`, `fetchFromAPI` will fetch data from `/api/p/1`.

## useLazyState

Use `useLazyState` in conjunction with `createLazyProps` to handle the transition from skeleton to fully rendered page:

`useLazyState` accepts the following arguments:

- `lazyProps` - (Object) The result of `createLazyProps`.
- `additionalData` - (Object) Additional data to add to the state.

Similar to React's `useState` hook, `useLazyState` returns a state object and a function that updates the state.

```js
import { useLazyState } from 'react-storefront/hooks'

export default function Product(lazyProps) {
  const [state, updateState] = useLazyState(lazyProps, {
    // additional data not fetched from the network to include in the state
    pageData: { quantity: 1 },
  })

  // ... render the product page ...
}
```

Here's a full example that shows how `createLazyProps` and `useLazyState` work together:

```js
// pages/p/[productId].js

import React from 'react'
import { createLazyProps, fetchFromAPI } from 'react-storefront/props'
import useLazyState from 'react-storefront/hooks/useLazyState'
import QuantitySelector from 'react-storefront/QuantitySelector'
import { Hbox } from 'react-storefront/Box'
import get from 'lodash/get'
import { Container, Typography } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'

function Product(lazyProps) {
  const [state, updateState] = useLazyState(lazyProps, {
    // additional data not fetched from the network to include in the state
    pageData: { quantity: 1 },
  })

  // state.loading will be set to true until data is returned from the back end
  const {
    loading,
    pageData: { quantity, product },
  } = state

  return (
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h6" component="h1" gutterBottom>
            {/* Display a skeleton title until the product data is fetched */}
            {loading ? <Skeleton style={{ height: '1em' }} /> : product.name}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Hbox>
            <Label>QTY:</Label>
            <QuantitySelector
              value={quantity} // we don't need to provide a skeleton here since
              onChange={quantity =>
                updateState({
                  ...state,
                  pageData: {
                    ...state.pageData,
                    quantity,
                  },
                })
              }
            />
          </Hbox>
        </Grid>
      </Grid>
    </Container>
  )
}

Product.getInitialProps = createLazyProps(fetchFromAPI)
```

## Fast Back Navigation

To provide the fastest shopping experience, React Storefront automatically stores the `pageData` value returned from your API handler in `window.history.state` when you use the `useLazyState` hook. When the user navigates back, `createLazyProps` instantly returns data from `window.history.state` instead of being fetched from the back end using `getInitialProps`.
