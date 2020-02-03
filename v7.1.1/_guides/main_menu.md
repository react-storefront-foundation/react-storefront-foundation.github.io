# Main Menu

This guide covers implementation of the main menu.

## Data Model

The main menu expects the API to return the following structure:

```js
{
  "menu": {
    "items": [{
      "text": 'Menu Item Text',           // required
      "image": '/path/to/image.png'       // optional - An image to display to the left of the text
      "header": 'html or data'            // optional - HTML or data to display in the header of the menu card for this item
      "footer": 'html or data'            // optional - HTML or data to display in the footer of the menu card for this item

      // For expandable items only
      "expanded": (undefined|true|false), // When `true` or `false`, the item will be rendered as an
                                          // expandable section.
                                          // When `undefined` the menu will slide to the next level of
                                          // the when the item is clicked.

      // For links only
      "href": `/s/[subcategoryId]`,       // optional - the Next.js route pattern
      "as": `/s/${i}`,                    // optional - the URL for the link

      // For parent items only
      "items": []                         // optional - child items to display when the user taps on
                                          // this item.  Child items have the same structure.
    }]
  }
}
```

Each of your API endpoints should return data for the main menu using the `appData` callback of `fulfillAPIRequest`. For example:

```js
import fulfillAPIRequest from 'react-storefront/props/fulfillAPIRequest'

export default async function myApiEndpoint(req, res) {
  res.json(
    await fulfillAPIRequest(req, {
      appData: () => Promise.resolve({
        menu: {
          items: [{
            ...
          }]
        }
      }),
      pageData: ...
    })
  )
}
```

## Customizing the UI

The `<Menu/>` component can be found in `components/Header.js` in the starter app.

### Side of the screen

To control which side of the screen the menu slides in from, set the `anchor` prop to `right` or `left`.

### Adding content to the top or bottom of each card

You can add HTML content to the top or bottom of each menu card by adding a `header` or `footer` key to any menu item returned by your API. The value can be HTML that will be rendered verbatim...

```js
// Menu data

{
  "text": "Shirts",
  "header": "<p>Custom header HTML here</p>",
  "items": [...]
}
```

... or an object, which you can render using custom logic using the `Menu` component's `renderHeader` and `renderFooter` props:

```js
// Menu data

{
  "text": "Shirts",
  "header": {
    { "text": "Men's Shirts", "as": "/s/[subcategoryId]", "href": "/s/mens-shirts" },
    { "text": "Womens's Shirts", "as": "/s/[subcategoryId]", "href": "/s/womens-shirts" },
    { "text": "Childrens's Shirts", "as": "/s/[subcategoryId]", "href": "/s/childrens-shirts" }
  },
  "items": [...]
}
```

```js
// Menu component

<Menu
  renderHeader={item => (
    <ul>
      {item.header.popular.map((link, i) => {
        <li key={i}>
          <Link as={link.as} href={link.href}>{link.text}<Link>
        </li>
      })}
    <ul>
  )}
/>
```

### Customizing item rendering

You can override the default way each item is rendered using the `renderItem` prop:

```js
<Menu
  renderItem={item => {
    if (/* some condition */) {
      return <div onClick={...}>{/* custom item */}</div>
    } else {
      return null // render the default item UI
    }
  }}
/>
```

You can also override just the inner contents of each item, leaving the underlying `ListItem` and click behavior in place using `renderItemContent`

```js
<Menu
  renderItemContent={item => {
    if (item.seasonal) {
      // render custom content
      return (
        <div>
          {item.text} <span class={classes.seasonal}>limited time only!</span>
        </div>
      )
    } else {
      // render the default item content
      return null
    }
  }}
/>
```
