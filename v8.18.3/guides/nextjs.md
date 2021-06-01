# Next.js

React Storefront is built on top of [Next.js](https://nextjs.org/). Beyond functionality provided by Next.js, such as server-side rendering, React Storefront provides the following added benefits:

## Ecommerce UI Components

React Storefront provides a number of components that are common to many ecommerce apps, such as:

- Main Menu
- Responsive product grid with pagination, filtering, and sorting
- Media carousel with zoom and pan
- Color Selector
- Size Selector
- Quantity Selector
- Search Drawer with suggestions as the user types
- Expandable Sections and Accordion for displaying product information

## Lazy Hydration

React Storefront adds the ability to lazy hydrate expensive components to improve client-side performance metrics. Lazy hydration can be trigged when components are scrolled into view or when the user first interacts with the screen.

## Light Weight State Management and Data Fetching

React Storefront provides simple, efficient helpers for managing page state and fetching page data from your API based on React hooks and context. There's no need for anything complicated like Redux or MobX.

## Service Worker

React Storefront automatically builds an advanced service worker for you using Google's [Workbox](https://developers.google.com/web/tools/workbox) library.

## Instant Back Navigation

React Storefront contains a number of features that help you build the fastest possible shopping experience.

By default, Next.js apps need to refetch page data by calling `getInitialProps` when the user navigates back. React storefront automatically saves and restores page data from `window.history.state` so that back navigation is instant. This an import aspect of providing a fast shopping experience, allowing the user to browser the product catalog more quickly.

## API Prefetching and Caching

React Storefront makes it easy to prefetch content for linked pages so you can stay one click ahead of your users and provide instant page transitions.

```js
<Link prefetch="visible" href="/p/[productId]" as={product.url}>
  {product.name}
</Link>
```

## Skeletons

React Storefront provides a highly responsive user experience by making it easy for developers to display skeletons when navigating between pages. Skeletons can display partial page data provided by the link that the user clicks.

## Bring Your Own CMS

Next.js typically requires that links contain both an `href` and `as` prop to indicate which page component should be displayed when a link is clicked. This can be problematic with `<a>` elements embedded in HTML stored in your CMS. React Storefront automatically allows simple `<a>` elements to work with only an `href` property so you can render HTML content from your CMS verbatim within your PWA.

## Automatic AMP support

React Storefront automatically renders valid AMP pages. Without React Storefront, you need to create two versions of each page - a React version and an AMP version.
