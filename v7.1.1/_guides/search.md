# Search

This guide covers implementation and customization of the search feature in your React Storefront app

## Data Model

As the user types into the search field, suggestions are fetched from the `/api/suggestions` endpoint. The following data structure is expected:

```js
{
  // one or more suggestion groups
  "groups": [{
    "caption": "Suggested Searches",        // the caption to display at the top of the group
    "ui": "list",                           // "list" or "thumbnails"

    // one or links to display in the group
    "links": [{
      "text": "Small Shirt",                // the text for the link
      "as": "/search?q=Small%20Shirt",      // the URL to navigate to when clicked
      "href": "/search"                     // the Next.js route pattern for the URL,

      // for ui: "thumbnails" only
      "thumbnail": {
        "src": "/path/to/thumbnail.png",    // the image URL for the thumbnail
        "alt": "Alt text"                   // the alt text for the thumbnail
      }
    }]
  }]
}
```

When the user clicks a link, the client will navigate to the URL specified in the `as` field of the link record. This typically points to the subcategory UI. See the [subcategory guide](/guides/subcategory) to learn how to implement the search results view.

## UI

The Search UI is defined in `components/Search`. Currently customization is limited to overriding CSS classes in the following components:

- SearchDrawer
- SearchHeader
- SearchField
- SearchForm
- SearchSuggestions
