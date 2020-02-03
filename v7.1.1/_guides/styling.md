# Styling

React Storefront uses [Material UI](https://material-ui.com/) as the basis for all components. Material UI provides a [styling solution based on JSS](https://material-ui.com/styles/basics/) that allows you to override styles application-wide using a theme.

## Theme

The theme is defined in `components/theme.js` and extends Material UI's [default theme](https://material-ui.com/customization/default-theme/).

## Component Styles

To style a component, use the `useStyles` hook:

```jsx
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

// declare style classes
const styles = theme => ({
  root: {
    color: 'red'
  }
})

// create the useStyles hook using material-ui's makeStyles
const useStyles = makeStyles(styles)

// define the component
export default function WarningLabel({ classes, children }) {
  // allow the user to pass in style overrides using the classes prop
  classes = useStyles(classes)

  // apply the root class
  return <div className={classes.root}>{children}</div>
}
```
