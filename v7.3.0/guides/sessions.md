# Sessions

This guide covers how to establish a user session and retreive user data.

## SessionProvider

Use the `SessionProvider` component to fetch user data and establish a session when the app mounts in the browser:

```js
// pages/_app.js

import SessionProvider from 'react-storefront/session/SessionProvider'
import PWA from 'react-storefront/PWA'

export default function MyApp({ Component, pageProps }) {
  return (
    <PWA onError={reportError}>
      <SessionProvider url="/api/session">
        <Component />
        {/* rest of the app goes here ... */}
      </SessionProvider>
    </PWA>
  )
}
```

## Session API Handler

Here is an example session API handler:

```js
// pages/api/session.js

export default function session(req, res) {
  return res.json({
    name: 'Mark',
    email: 'mark@domain.com',
    itemsInCart: 3,
    currency: 'USD'
  })
}
```

## SessionContext

The shape of the session data is entirely up to you. The data returned from the url provided to `SessionProvider` is made available to all descendent components via a `SessionContext`:

```js
import React, { useContext } from 'react'
import SessionContext from 'react-storefront/session/SessionContext'

/**
 * An example component that consumes the SessionContext to display the user's name.
 */
export default function WelcomeMessage() {
  const { session } = useContext(SessionContext)
  return <div>Welcome back, {session.name}</div>
}
```

## Shopping Cart

The number of items in the cart is typically returned as part of the session data.

You can update the number of items in the cart using the `updateCartCount(quantity)` action provided by the `SessionContext`.

```js
import React, { useContext } from 'react'
import SessionContext from 'react-storefront/session/SessionContext'
import fetch from 'isomorphic-unfetch'
import { Button } from '@material-ui/core'

/**
 * An example component that adds an item to the cart and updates the cart count in
 * the session data.
 */
export default function AddToCartButton({ product }) {
  const { actions } = useContext(SessionContext)

  const handleClick = async () => {
    // add the item via an API call and get the updated cart count
    const response = await fetch('/api/addToCart', {
      method: 'post',
      body: JSON.stringify({
        product: product.id
      })
    }).then(res => res.json())

    actions.updateCartCount(response.newCartCount)
  }

  return <Button onClick={handleClick}>Add to Cart</Button>
}
```
