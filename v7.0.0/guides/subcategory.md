# Subcategory

This covers implementation and customization of the Subcategory (PLP) page.

## Page Component

`pages/s/[subcategoryId].js`

## Data Model

The subcategory page expects the API to return data in the following structure. You can also add any additional data
needed for custom UI elements.

```js
{
  "pageData": {
    "id": "1",                                    // the subcategory id
    "name": "Shirts",                             // the name of the subcategory
    "title": "MyStore - Shirts",                  // the title for the document
    "total": 100,                                 // the total number of matching items
    "page": 0,                                    // the current page being returned
    "totalPages": 5,                              // the total number of pages
    "filters": ["color:blue"],                    // the filters that were applied
    "facets": [{                                  // groups of filters to display
      "name": "Color",                            // the name of the facet
      "ui": "buttons|checkboxes",                 // determines the type of UI element displayed
      "options": [{                               // the filters in the group
        "name": "Red",                            // the name of the filter
        "code": "color:red",                      // the code to include in the fetch call when selected

        // ui: "buttons" only
        "image": {                                // the swatch image to display
          "src": "/path/to/swatch",               // the URL for the swatch image
          "alt": "alt text"                       // the alt text for the swatch image
        }
      }]
    }]
    "sort": "rating",                             // the sort that was applied
    "sortOptions": [{                             // available sort options to display
      "name": "Price - Lowest",                   // the option text to display
      "code": "price_asc"                         // the cost to include in the fetch call when selected
    }],
    "products": [{                                // the products in the subcategory
      "id": "1",
      "url": "/p/1"                               // the PDP URL
      "price": 20.99,                             // the numeric price
      "priceText": "$20.99",                      // the text to display for price
      "rating": 4,                                // the product rating from 0 to 5 (float)
      "thumbnail": {                              // the product thumbnail
        "src": "/path/to/thumbnail",              // the URL for the thumbnail
        "alt": "thumbnail alt text"               // the alt textfor the thumbnail
      },
      "colors": {                                 // color options that the user can switch between
        "id": "green",                            // the id of the color
        "image": {                                // the color swatch
          "src": "/path/to/green-swatch",         // the URL for the color swatch image
          "alt": "green"                          // the alt text for the color swatch image
        },
        "media": {
          "thumbnail": {
            "src": "path/to/green-product-image", // the product thumbnail to display when the user selects this color
            "alt": "green product"                // the alt text for thumbnail
          }
        }
      }
    }]
  }
}
```

## API

The following parameters can be passed to the `/api/s/[subcategoryId]` endpoint:

| Param         | Description                                                                                               |
| ------------- | --------------------------------------------------------------------------------------------------------- |
| filters       | An array containing the `code` values of each filter that the user selected.                              |
| page          | The number of the page to be returned                                                                     |
| q             | When called upon to displayed search results, the user's search query will be specified in the `q` param. |
| sort          | The `code` value of the sort option that the user selected.                                               |
| subcategoryId | When called upon to display a specific subcategory, the id will be provided as a path param               |

## Responsive Layout

The example Subcategory page in the starter app has a number of responsive elements:

### Filters

The `Hidden` component from Material UI is used to alternate between a `Filter` component docked on the left side of the viewport on desktop and a `FilterButton` component that opens
a drawer on mobile.

### Sort

React Storefront's `SortButton` component is automatically responsive. It will show as a dropdown on desktop, and open a drawer on mobile.

### Product Tiles

React Storefront's `ResponsiveTiles` component is used to display a different number of columns for each responsive breakpoint. The defaults are used but can be overridden using the `cols` prop:

```js
<ResponsiveTiles
  cols={{
    xs: 2,
    sm: 3,
    md: 4,
    lg: 5,
    xl: 5
  }}
>
  {/* Product tiles here... */}
</ResponsiveTiles>
```

## Infinite Scrolling

Infinite scrolling (fetching the next page of products when the user scrolls to the bottom of the document) is disabled by default but can be enabled by setting `variant="infinite"` on the `<ShowMore/>` element.

## Reusing the Thumbnail on the PDP

When the user taps a product to navigate to the PDP, the thumbnail is automatically displayed as the main image in the product skeleton to make the transition feel instant. This is handled by the `ForwardThumbnail` element in `components/product/ProductItem` that wraps each product link. When a product link is clicked, ForwardThumbnail sets PWAContext's `thumbnail` ref to the URL of the image in the link:

```js
// components/product/ProductItem.js

<ForwardThumbnail>
  <Vbox alignItems="stretch">
    <Link
      as={product.url}
      href="/p/[productId]"
      className={classes.link}
      prefetch="visible"
      pageData={{ product }}
    >
      <a>{/* ... */}</a>
    </Link>
  </Vbox>
</ForwardThumbnail>
```

This is then retreived in `pages/p/[productId].js` and forwarded to the `MediaCarousel`'s `thumbnail` prop.

```js
// pages/p/[productId].js

// This is provided when <ForwardThumbnail> is wrapped around product links
const { thumbnail } = useContext(PWAContext)

// ...

<MediaCarousel
  baseURL={`/api/p/media`}
  thumbnail={thumbnail.current}
  product={product}
  color={color}
/>
```

The thumbnail image will be used in place of main high-resolution image until it has been downloaded.
