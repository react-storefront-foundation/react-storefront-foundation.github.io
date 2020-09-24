# Home Page

This covers implementation and customization of the homepage.

## Page Component

`/pages/index.js`

## Data Model

The data model for the homepage is entirely up to you. In most apps, the homepage is filled with content from a CMS. In the starter app, we include
some simple example content in a `slots` object:

```js
{
  "pageData": {
    "title": "Home",              // The title for the document
    "slots": {                    // The rest of the data model is up to you.  It's common to include an number
      // entirely up to you       // of slots containing HTML from your CMS here, but not required.
    }
  }
}
```

## UI

It's common for the homepage to mostly be comprised of HTML provided by a CMS. You can display that HTML verbatim using the `CmsSlot` component:

```js
<CmsSlot>{store.pageData.slots.description}</CmsSlot>
```
