# Product

This covers implementation and customization of the Product (PDP) page.

## Page Component

`pages/p/[productId].js`

## Data Model

The product page expects the API to return data in the following structure. You can also add any additional data needed for custom UI elements.

```js
{
  "pageData": {
    "title": "Page Title",                                // the document title
    "product": {                                          // info for the product.  You can add to this as needed.
      "id": "1",                                          // the product id
      "url": "/p/1",                                      // the URL for the product page
      "name": "Product 1",                                // the name of the product
      "price": 10.99,                                     // the price as a number
      "priceText": "$10.99",                              // the price as formatted text with currency
      "rating": 4.5,                                      // the product rating
      "description": "product description",               // the product description
      "specs": "product specs",                           // the product specs - this is just a suggestion.  Feel free to add any additional fields needed for the UI.
      "media": {                                          // images and videos for the MediaCarousel component
        "full": [{                                        // an array of full size images
          "src": "https://domain.com/path/to/image",      // the URL of the full size image
          "alt": "alt text",                              // alt text for the full size image
          "magnify": {                                    // optional - provides a high-res image for manigfication on hover in desktop browsers
            "height": 1200,                               // the height of the high-res image
            "width": 1200,                                // the width of the high-res image
            "src": "https://domain.com/path/to/image"     // the URL of the high res image
          }
        }],
        "thumbnails": [{                                  // an array of thumbnails to display below the main image carousel
          "src": "https://domain.com/path/to/image",      // the thumbnail URL
          "alt": "alt text"                               // alt text for the thumbnail
        }]
      },
      "sizes": [{                                         // an array of available sizes
        "id": "sm",                                       // the size code
        "text": "SM"                                      // text to display on the button corresponding to this size
      }],
      "colors": [{                                        // an array of available colors
        "text": "Red",                                    // optional - text to display below the color button
        "id": "red",                                      // the color code
        "image": {                                        // the image for the color swatch
          "src": "https://domain.com/path/to/image",      // the URL for the color swatch
          "alt": "red"                                    // alt text for the color swatch
        },
        "media": {                                        // overrides the `media` on the base `product` object when this color is selected
          "full": [{                                      // this is how you can change images and thumbnails when the user selects a different color
            "src": "https://domain.com/path/to/image",
            "alt": "Product 1",
            "magnify": {
              "height": 1200,
              "width": 1200,
              "src": "https://domain.com/path/to/image",
            }
          }],
          "thumbnails": [{
            "src": "https://domain.com/path/to/image",
            "alt": "green"
          }]
        }
      }]
    }
  }
}
```

## UI

### Fetching user-specific data

Often a product page will contain personalized information such as product recommendations that is different for each user and thus not cacheable. **All non-cacheable information should be fetched in a separate request after the page component mounts to preserve the cacheability of the main product URL.** The starter app contains an example of this in `components/product/SuggestedProducts.js`. It uses React's `useEffect` hook with an empty array to fetch personalized data from the API when the page mounts:

```js
// components/product/SuggestedProducts.js

export default function SuggestedProducts({ product }) {
  const [suggestedProducts, setSuggestedProducts] = useState(null)

  // Fetch suggested products when the product page is mounted
  useEffect(() => {
    fetch(`/api/p/${encodeURIComponent(product.id)}/suggestions`)
      .then(res => res.json())
      .then(result => setSuggestedProducts(result))
  }, [])

  return (
    <div>
      <Typography variant="h6" component="h3">
        Suggested Products
      </Typography>
      {/* ... */}
    </div>
  )
}
```

### Changing the images when the user selects a color

_Coming soon_

### Capturing the user's selections

Users can typically select a number of options on the product page. Some of the most common are size, color, and quantity. In the starter app, these are stored in `pageData`, not in the `product` object, but as a peer to it:

```js
{
  "pageData": {
    "product": {
      // data from the API (see "Data Model" above)...
    }
    "quantity": 1,    // the value of the quantity selector
    "color": {        // the object corresponding to the selected color
      "id": 'red',
      "name": 'red',
      // ...
    },
    "size": {         // the object corresponding to the selected size
      "id": "md",
      "name": "MD",
      // ...
    }
  }
}
```

### Adding a product to the cart

In the starter app, when the user taps the "Add to Cart" button, the enclosing `form` element is submitted, triggering the `onSubmit` handler. It extracts the user's selections from the `pageData` state and posts them to `/api/cart`:

```js
// pages/p/[productId].js

const Product = React.memo(lazyProps => {
  // ...

  const [store, updateStore] = useLazyState(lazyProps, { pageData: { quantity: 1 } })
  const product = get(store, 'pageData.product') || {}
  const color = get(store, 'pageData.color')
  const size = get(store, 'pageData.size')

  // Adds an item to the cart
  const handleSubmit = async event => {
    event.preventDefault() // prevent the page location from changing
    setAddToCartInProgress(true) // disable the add to cart button until the request is finished

    try {
      // send the data to the server
      const { cartCount } = await fetch('/api/cart', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: product.id,
          color: get(color, 'id'),
          size: get(size, 'id'),
          quantity
        })
      }).then(res => res.json())

      // open the confirmation dialog
      setConfirmationOpen(true)

      // update the number of items in the cart in the header
      actions.updateCartCount(cartCount)
    } finally {
      // re-enable the add to cart button
      setAddToCartInProgress(false)
    }
  }

  // ...
})
```

If you add additional options to the PDP, those selections should be added to the data posted to `/api/cart` above. By default, a confirmation dialog is displayed upon receiving a successful response from the server. You may also choose to navigate directly to the cart or checkout. You can do so by changing `handleSubmit`.

### Integration with 3rd party ecommerce platforms

To connect the add to cart flow to a 3rd party ecommerce platform, you can either call their add to cart API endpont directly from the `submitHandler` above, or from the `/api/cart` request handler in `pages/api/cart.js`. The latter option can be convenient when you need to make the 3rd party API easier for your UI to communicate with.
