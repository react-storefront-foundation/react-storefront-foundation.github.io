# AMP

Moovweb provides a commercial package, `react-storefront-amp` that automatically makes your app compatible with [Google's AMP](https://amp.dev/). [Contact Moovweb](https://www.moovweb.com/learn/request-demo) for more information. With `react-storefront-amp` you write pages in React and they look and behave the same in AMP. All you need to do is check that each page is generating valid AMP as part of your QA process.

## How automatic AMP support works

Next.js provides the [building blocks for rendering AMP versions](https://nextjs.org/docs#enabling-amp-support) of pages.

The `react-storefront-amp` library builds upon next.js to make AMP support automatic by:

- Providing AMP-aware replacements for components in `react-storefront` that render valid AMPHTML when `?amp=1` is present on the URL.
- Doing additional cleanup of the outgoing HTML before it is sent to the browser to that it passes AMP validation
- Adding explicit heights and widths to images that do not already have them. AMP requires that all images are either sized by their containing element or have `height` and `width` props.

## AMP-compatible starter app

Developers that have purchased the `react-storefront-amp` package should create their app using the `--branch=commercial` option:

```
npm create react-storefront --branch=commercial
```

The main differences between the commercial and free starter apps are that the commercial app uses two-way data binding from `react-storefront-amp` to manage state:

## Components

The structure of the `react-storefront-amp` package mimics that of `react-storefront`. It provides AMP-compatible replacements for many of the components in `react-storefront`, including:

- Accordion
- Drawer
- ExpandableSection
- Image
- QuantitySelector
- TabPanel
- Menu
- ProductOptionSelector
- FilterButton
- SortButton
- SearchButton
- SearchDrawer

Each is prefixied with `Amp*`, so for example, `react-storefront-amp/AmpAccordion` replaces `react-storefront/Accordion`.

## AMPHTML cleanup

The `react-storefront-amp` packages provides a `renderAmp` function that cleans up the outgoing HTML so that it passes AMP validation. This function is
called in `pages/_document.js` before server-side rendered HTML is returned to the browser:

```js
// pages/_document.js

ctx.renderPage = async () => {
  const document = originalRenderPage({
    enhanceApp: App => props => sheets.collect(<App {...props} />)
  })
  return isAmp ? await renderAmp(document, sheets) : document
}
```

## Two-way data binding

AMP and React have fundamentially different patterns for managing state. React allows you to respond to events with javascript and update state using the update function returned by the `useState` hook. AMP uses a more declarative approach with [amp-bind](https://amp.dev/documentation/components/amp-bind/) that resembles to-way data-binding. In order to create a common approach to state management that works in both react and amp, `react-storefront-amp` provides two-way databinding via a `DataBindingProvider` component and the `bind` prop.

Here's a simple example from `pages/p/[productId].js` that shows how the quantity selector updates the page state in both AMP and React using the same code:

```js
// pages/p/[productId].js

import useLazyState from 'react-storefront/hooks/useLazyState'
import DataBindingProvider from 'react-storefront-amp/bind/DataBindingProvider'
import QuantitySelector from 'react-storefront-amp/AmpQuantitySelector'

// ...

const Product = React.memo(lazyProps => {
  // ...

  const [store, updateStore] = useLazyState(lazyProps, { pageData: { quantity: 1 } })

  return (
    <DataBindingProvider store={store} updateStore={updateStore} root="pageData">
      {/* ... */}
      <QuantitySelector bind="quantity" />
      {/* ... */}
    </DataBindingProvider>
  )
})
```

### Binding a single prop

Here setting `bind="quantity"` automatically sets the `value` prop of `QuantitySelector` to the `quantity` field in the store from the object specified by the `root` prop in `DataBindingProvider`.

When the user changes the quantity, `store.pageData.quantity` is automatically updated with the new value based on the presence of `bind="quantity"`.

In other words, this:

```js
<QuantitySelector bind="quantity" />
```

... is equivalent to:

```js
<QuantitySelector
  value={store.pageData.quantity}
  onChange={value => {
    updateStore({
      ...store,
      pageData: {
        ...store.pageData,
        quantity: value
      }
    })
  }
/>
```

### Binding multiple props

The `bind` prop can also be used to bind multiple props to values in a store, as in the case of `ProductOptionSelector`, which gets `options` and `value` props from the store:

```js
<ProductOptionSelector bind={{ value: 'size', options: 'product.sizes' }} />
```

Here bind takes an object whose keys are the props to bind and whose values are the paths to the values for those props in the store.

### Binding a prop to multiple values

The `bind` prop also allows you to pull the value from alternate fields in the store if the default field is `null` or `undefined` by passing an array as the value. Here is an example from the product link on the subcategory page:

```js
// components/product/ProductItem.js

<AmpImage
  bind={{
    // use the thumbnail and alt for the selected color if one is selected, otherwise use the default thumbnail and alt
    src: ['color.media.thumbnail.src', 'thumbnail.src'],
    alt: ['color.media.thumbnail.alt', 'thumbnail.alt']
  }}
/>
```
