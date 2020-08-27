# Lazy Hydration

Delaying the hydration of complex components can greatly improve browser performance metrics such as time to interactive (TTI) and total blocking time (TBT), ultimately resulting in a better performance score on Google's PageSpeed Insights.

## Recommended Usage

We recommend lazy hydrating all complex components which render below the fold on mobile devices or are otherwise not displayed when the page first loads. Examples of these are the main menu and search drawer. The React Storefront starter app is configured to lazy hydrate these.

## Setup

In order add lazy hydration to your app, two steps must be followed:

1. Wrap components you want to lazy hydrate with `LazyHydrate`
2. Render `LazyStyles` in your document's head

We will now explain each of these steps below:

## LazyHydrate

To make any component lazy hydrate, wrap it with `LazyHydrate`:

```js
import LazyHydrate from 'react-storefront/LazyHydrate'

export default function MyPage() {
  return (
    <div>
      {/* .. above the fold content ... */}
      {/* .. then, somewhere below the fold ... */}
      <LazyHydrate id="a-unique-name" on="visible">
        <SomeExpensiveComponent />
      </LazyHydrate>
    </div>
  )
}
```

### id

The `id` prop is **required** and must be unique. It will be used to limit the scope of the lazy component's styles so they do not affect any other styles on the page prior to hydration.

### on

The `on` prop controls when hydration is triggered. It accepts the following values:

- `visible` (the default) triggers hydration when component is scrolled into the viewport
- `touch` triggers hydration on `mouseover` or `touchstart`
- `fui` _(default)_ stands for "first user interaction" - triggers hydration on any `touchstart`, `mouseover`, or `scroll` event on the window. 

### hydrated

To manually control when your component is hydrated, use the `hydrated` prop instead of the `on` prop. For example:

```js
import LazyHydrate from 'react-storefront/LazyHydrate'

export default function MyPage() {
  const [hydrated, setHydrated] = useState(false)

  return (
    <div>
      <button onClick={() => setHydrated(true)}>Hydrate!</button>

      <LazyHydrate id="my-lazy-component" hydrated={hydrated}>
        <SomeExpensiveComponent />
      </LazyHydrate>
    </div>
  )
}
```

## LazyStyles

Normally React Storefront replaces all server-rendered styles with new style elements rendered in the browser during hydration. This is not the case with lazy-hydrated elements. In order for lazy-hydrated elements to be styled correctly, you need to ensure that `LazyStyles` is added to the document head in `pages/_document.js`.  

Your app probably already has this, but in case it doesn't, add `LazyStyles` as follows:

```js
import Document, { Head } from 'next/document'
import { LazyStyles } from 'react-storefront/LazyHydrate'

class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          {/* ... */}
          <LazyStyles />
        </Head>
        {/* ... */}
      </html>
    )
  }
}
```

## Things to keep in mind

- Do **not** nest `LazyHydrate`
- If a lazy-hydrated component is used to late-fetch data after the page loads, it will not do so until hydrated.
