# Image Optimization

The Moovweb XDN can downscale images to conserve bandwidth and increase performance on mobile devices. This guide covers how you can use this feature in your React Storefront app.

## AmpImage

The `AmpImage` components provides an `optimize` prop that takes an object with the following properties:

```js
import AmpImage from 'react-storefront-amp/AmpImage'
```

```js
<AmpImage
  src="/path/to/image" // the path to the original image
  optimize={{
    quality: 75, // (optional) A number or string containing the number for the desired quality, on a scale from 1 (worst) to 100 (best)
    width: 300, // (optional) A number or string containing the number for the desired pixel width on phones. You only need to specify "height" or "width".  The original aspect ratio of the image is preserved.
    height: 300, // (optional) A number or string containing the number for the desired pixel height. You only need to specify "height" or "width".  The original aspect ratio of the image is preserved.
    format: 'webp' // (optional, defaults to webp) A string containing the desired file format. Accepts "webp" or "jpeg".  If webp is specified but the user's browser doesn not support webp, jpeg will be used.
  }}
/>
```

## getOptimizedSrc

`AmpImage` simply uses the `optimize` prop to create a URL that proxies the image through the XDN's image optimization service. You can create that URL directly using:

```js
import { getOptimizedSrc } from 'react-storefront-amp/AmpImage'

const optimizedSrc = getOptimizedSrc('/path/to/image')
```

## Behavior on Desktop, Tablet, and Phone

The XDN will return the full size image for desktop and tablet devices. It will only downscale on phones.
