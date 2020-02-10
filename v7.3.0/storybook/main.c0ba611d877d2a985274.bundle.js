;(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    1e3: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__)
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        toConsumableArray =
          (__webpack_require__(49),
          __webpack_require__(283),
          __webpack_require__(55),
          __webpack_require__(110),
          __webpack_require__(191),
          __webpack_require__(469)),
        toConsumableArray_default = __webpack_require__.n(toConsumableArray),
        Checkbox = __webpack_require__(1065),
        FormGroup = __webpack_require__(1054),
        Typography = __webpack_require__(323),
        FormControlLabel = __webpack_require__(1055),
        makeStyles = __webpack_require__(224),
        plp_SearchResultsContext = Object(react.createContext)(),
        useStyles = Object(makeStyles.a)(
          function() {
            return {
              matches: { marginLeft: '5px', display: 'inline' },
              groupLabel: { display: 'flex', alignItems: 'center' },
            }
          },
          { name: 'RSFCheckboxFilterGroup' },
        )
      function CheckboxFilterGroup(props) {
        var group = props.group,
          submitOnChange = props.submitOnChange,
          _useContext = Object(react.useContext)(plp_SearchResultsContext),
          filters = _useContext.pageData.filters,
          toggleFilter = _useContext.actions.toggleFilter,
          classes = useStyles()
        return Object(react.useMemo)(function() {
          return react_default.a.createElement(
            FormGroup.a,
            null,
            group.options.map(function(facet, i) {
              return react_default.a.createElement(FormControlLabel.a, {
                key: i,
                label: react_default.a.createElement(
                  'div',
                  { className: classes.groupLabel },
                  react_default.a.createElement('span', null, facet.name),
                  react_default.a.createElement(
                    Typography.a,
                    { variant: 'caption', className: classes.matches, component: 'span' },
                    '(',
                    facet.matches,
                    ')',
                  ),
                ),
                control: react_default.a.createElement(Checkbox.a, {
                  checked: -1 !== filters.indexOf(facet.code),
                  color: 'primary',
                  onChange: function onChange() {
                    return toggleFilter(facet, submitOnChange)
                  },
                }),
              })
            }),
          )
        }, [].concat(toConsumableArray_default()(Object.values(props)), [filters]))
      }
      __webpack_require__.d(__webpack_exports__, 'defaults', function() {
        return defaults
      })
      __webpack_exports__.default = { title: 'CheckboxFilterGroup' }
      var defaults = function() {
        return react_default.a.createElement(
          plp_SearchResultsContext.Provider,
          { value: { pageData: { filters: [] }, actions: {} } },
          react_default.a.createElement(CheckboxFilterGroup, {
            group: { options: [{ name: 'red', matches: 2 }] },
          }),
          react_default.a.createElement(CheckboxFilterGroup, {
            group: { options: [{ name: 'blue', matches: 1 }] },
          }),
          react_default.a.createElement(CheckboxFilterGroup, {
            group: { options: [{ name: 'green', matches: 3 }] },
          }),
        )
      }
      ;(defaults.displayName = 'defaults'),
        (defaults.__docgenInfo = { description: '', methods: [], displayName: 'defaults' }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['.storybook/stories/CheckboxFilterGroup.stories.js'] = {
            name: 'defaults',
            docgenInfo: defaults.__docgenInfo,
            path: '.storybook/stories/CheckboxFilterGroup.stories.js',
          })
    },
    1001: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__)
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        Pets = __webpack_require__(102),
        Pets_default = __webpack_require__.n(Pets),
        makeStyles = __webpack_require__(224),
        Typography = __webpack_require__(323),
        CloudOff = __webpack_require__(476),
        CloudOff_default = __webpack_require__.n(CloudOff),
        prop_types = __webpack_require__(1),
        prop_types_default = __webpack_require__.n(prop_types),
        useStyles = Object(makeStyles.a)(
          function() {
            return {
              root: {
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                alignItems: 'center',
                marginTop: '40px',
                color: '#999',
              },
              icon: { fontSize: 60, color: '#999' },
              heading: {},
              message: {},
            }
          },
          { name: 'RSFOffline' },
        )
      function Offline(_ref) {
        var classes = _ref.classes,
          heading = _ref.heading,
          message = _ref.message,
          Icon = _ref.Icon
        return (
          (classes = useStyles({ classes: classes })),
          react_default.a.createElement(
            'div',
            { className: classes.root },
            react_default.a.createElement(Icon, { className: classes.icon }),
            react_default.a.createElement(
              Typography.a,
              { variant: 'h6', component: 'h1', className: classes.heading },
              heading,
            ),
            react_default.a.createElement(
              Typography.a,
              { variant: 'caption', className: classes.message },
              message,
            ),
          )
        )
      }
      ;(Offline.displayName = 'Offline'),
        (Offline.propTypes = {
          heading: prop_types_default.a.oneOfType([
            prop_types_default.a.string,
            prop_types_default.a.element,
          ]),
          message: prop_types_default.a.oneOfType([
            prop_types_default.a.string,
            prop_types_default.a.element,
          ]),
          Icon: prop_types_default.a.func,
        })
      var _ref2 = react_default.a.createElement(CloudOff_default.a, null)
      ;(Offline.defaultProps = {
        heading: "You're offline",
        message: 'Please check your internet connection',
        Icon: function Icon() {
          return _ref2
        },
      }),
        (Offline.__docgenInfo = {
          description: 'A page to display when in Offline mode',
          methods: [],
          displayName: 'Offline',
          props: {
            heading: {
              defaultValue: { value: '"You\'re offline"', computed: !1 },
              type: { name: 'union', value: [{ name: 'string' }, { name: 'element' }] },
              required: !1,
              description: 'Text or an element to display as the heading.',
            },
            message: {
              defaultValue: { value: "'Please check your internet connection'", computed: !1 },
              type: { name: 'union', value: [{ name: 'string' }, { name: 'element' }] },
              required: !1,
              description: 'Text or an element to deplay as the message.',
            },
            Icon: {
              defaultValue: { value: '() => <CloseOffIcon />', computed: !1 },
              type: { name: 'func' },
              required: !1,
              description: 'An icon to display.',
            },
          },
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/Offline.js'] = {
            name: 'Offline',
            docgenInfo: Offline.__docgenInfo,
            path: 'src/Offline.js',
          }),
        __webpack_require__.d(__webpack_exports__, 'defaults', function() {
          return defaults
        }),
        __webpack_require__.d(__webpack_exports__, 'customHeading', function() {
          return customHeading
        }),
        __webpack_require__.d(__webpack_exports__, 'customMessage', function() {
          return customMessage
        }),
        __webpack_require__.d(__webpack_exports__, 'customIcon', function() {
          return customIcon
        })
      __webpack_exports__.default = { title: 'Offline' }
      var Offline_stories_ref = react_default.a.createElement(Offline, null),
        defaults = function() {
          return Offline_stories_ref
        }
      defaults.displayName = 'defaults'
      var Offline_stories_ref2 = react_default.a.createElement(Offline, {
          heading: 'This is a heading',
        }),
        customHeading = function() {
          return Offline_stories_ref2
        }
      customHeading.displayName = 'customHeading'
      var _ref3 = react_default.a.createElement(Offline, { message: 'This is a message' }),
        customMessage = function() {
          return _ref3
        }
      customMessage.displayName = 'customMessage'
      var _ref4 = react_default.a.createElement(Offline, { Icon: Pets_default.a }),
        customIcon = function() {
          return _ref4
        }
      ;(customIcon.displayName = 'customIcon'),
        (defaults.__docgenInfo = { description: '', methods: [], displayName: 'defaults' }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['.storybook/stories/Offline.stories.js'] = {
            name: 'defaults',
            docgenInfo: defaults.__docgenInfo,
            path: '.storybook/stories/Offline.stories.js',
          }),
        (customHeading.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'customHeading',
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['.storybook/stories/Offline.stories.js'] = {
            name: 'customHeading',
            docgenInfo: customHeading.__docgenInfo,
            path: '.storybook/stories/Offline.stories.js',
          }),
        (customMessage.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'customMessage',
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['.storybook/stories/Offline.stories.js'] = {
            name: 'customMessage',
            docgenInfo: customMessage.__docgenInfo,
            path: '.storybook/stories/Offline.stories.js',
          }),
        (customIcon.__docgenInfo = { description: '', methods: [], displayName: 'customIcon' }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['.storybook/stories/Offline.stories.js'] = {
            name: 'customIcon',
            docgenInfo: customIcon.__docgenInfo,
            path: '.storybook/stories/Offline.stories.js',
          })
    },
    1002: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__)
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        helpers_extends = __webpack_require__(8),
        extends_default = __webpack_require__.n(helpers_extends),
        slicedToArray = __webpack_require__(12),
        slicedToArray_default = __webpack_require__.n(slicedToArray),
        objectWithoutProperties = __webpack_require__(14),
        objectWithoutProperties_default = __webpack_require__.n(objectWithoutProperties),
        visibility_sensor = __webpack_require__(221),
        visibility_sensor_default = __webpack_require__.n(visibility_sensor),
        clsx_m = __webpack_require__(3),
        makeStyles = __webpack_require__(224),
        PWAContext = __webpack_require__(145),
        prop_types = __webpack_require__(1),
        prop_types_default = __webpack_require__.n(prop_types),
        next_amp = __webpack_require__(222),
        useStyles = Object(makeStyles.a)(
          function() {
            return { root: { minHeight: 1, minWidth: 1 } }
          },
          { name: 'RSFLazy' },
        )
      function Lazy(_ref) {
        var ssrOnly = _ref.ssrOnly,
          className = _ref.className,
          classes = _ref.classes,
          children = _ref.children,
          otherProps = objectWithoutProperties_default()(_ref, [
            'ssrOnly',
            'className',
            'classes',
            'children',
          ]),
          amp = Object(next_amp.useAmp)(),
          hydrating = Object(react.useContext)(PWAContext.a).hydrating,
          _useState = Object(react.useState)(amp || (ssrOnly && !hydrating)),
          _useState2 = slicedToArray_default()(_useState, 2),
          visible = _useState2[0],
          setVisible = _useState2[1]
        return (
          (classes = useStyles({ classes: classes })),
          react_default.a.createElement(
            visibility_sensor_default.a,
            {
              onChange: function(v) {
                !visible && v && setVisible(!0)
              },
              active: !visible,
              partialVisibility: !0,
            },
            react_default.a.createElement(
              'div',
              extends_default()(
                { className: Object(clsx_m.a)(classes.root, className) },
                otherProps,
              ),
              visible && children,
            ),
          )
        )
      }
      ;(Lazy.displayName = 'Lazy'),
        (Lazy.propTypes = { ssrOnly: prop_types_default.a.bool }),
        (Lazy.defaultProps = { ssrOnly: !1 }),
        (Lazy.__docgenInfo = {
          description:
            'Defers the rendering of children until the component is visible in the viewport. When\nusing Lazy we recommend assigning a CSS class that defines minHeight and minWidth to prevent\nlayout instability when children are lazy loaded.\n\nYou can use `<Lazy ssrOnly>` to only implement lazy behavior during server side rendering.\n\nExample:\n\n```js\n<Lazy style={{ minHeight: 200 }}>\n  <SomeExpensiveComponent/>\n</Lazy>\n```',
          methods: [],
          displayName: 'Lazy',
          props: {
            ssrOnly: {
              defaultValue: { value: 'false', computed: !1 },
              type: { name: 'bool' },
              required: !1,
              description:
                'Set to `true` to render children immediately when this component is mounted after initial hydration.',
            },
          },
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/Lazy.js'] = {
            name: 'Lazy',
            docgenInfo: Lazy.__docgenInfo,
            path: 'src/Lazy.js',
          }),
        __webpack_require__.d(__webpack_exports__, 'lazy', function() {
          return lazy
        })
      __webpack_exports__.default = { title: 'Lazy' }
      var Lazy_stories_styles = {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 200,
          background: '#7f8fa6',
          height: 500,
        },
        Lazy_stories_ref = react_default.a.createElement(
          'div',
          null,
          react_default.a.createElement(
            Lazy,
            null,
            react_default.a.createElement('div', { style: Lazy_stories_styles }, 'Hello'),
          ),
          react_default.a.createElement(
            Lazy,
            null,
            react_default.a.createElement('div', { style: Lazy_stories_styles }, 'Hello'),
          ),
          react_default.a.createElement(
            Lazy,
            null,
            react_default.a.createElement('div', { style: Lazy_stories_styles }, 'Hello'),
          ),
          react_default.a.createElement(
            Lazy,
            null,
            react_default.a.createElement('div', { style: Lazy_stories_styles }, 'Hello'),
          ),
        ),
        lazy = function() {
          return react_default.a.createElement(
            PWAContext.a.Provider,
            { value: {} },
            react_default.a.createElement(
              'div',
              { style: { fontSize: 30, textAlign: 'center' } },
              'Please scroll down',
              Lazy_stories_ref,
            ),
          )
        }
      ;(lazy.displayName = 'lazy'),
        (lazy.__docgenInfo = { description: '', methods: [], displayName: 'lazy' }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['.storybook/stories/Lazy.stories.js'] = {
            name: 'lazy',
            docgenInfo: lazy.__docgenInfo,
            path: '.storybook/stories/Lazy.stories.js',
          })
    },
    1003: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__)
      var slicedToArray = __webpack_require__(12),
        slicedToArray_default = __webpack_require__.n(slicedToArray),
        react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        ArrowDownward = __webpack_require__(480),
        ArrowDownward_default = __webpack_require__.n(ArrowDownward),
        ArrowUpward = __webpack_require__(218),
        ArrowUpward_default = __webpack_require__.n(ArrowUpward),
        helpers_extends = (__webpack_require__(110), __webpack_require__(8)),
        extends_default = __webpack_require__.n(helpers_extends),
        objectWithoutProperties = __webpack_require__(14),
        objectWithoutProperties_default = __webpack_require__.n(objectWithoutProperties),
        Add = __webpack_require__(479),
        Add_default = __webpack_require__.n(Add),
        Remove = __webpack_require__(478),
        Remove_default = __webpack_require__.n(Remove),
        IconButton = __webpack_require__(487),
        makeStyles = __webpack_require__(224),
        prop_types = __webpack_require__(1),
        prop_types_default = __webpack_require__.n(prop_types),
        clsx_m = __webpack_require__(3),
        useStyles = Object(makeStyles.a)(
          function(theme) {
            return {
              root: {
                backgroundColor: theme.palette.divider,
                border: 'none',
                width: '110px',
                padding: 0,
              },
              icon: { fontSize: '1.3125rem', position: 'relative' },
              button: { height: '36px', width: '36px', padding: 0 },
              subtract: { marginRight: theme.spacing(-4.5) },
              add: { marginLeft: theme.spacing(-4.5) },
              input: {
                width: 100,
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.grey[200],
                textAlign: 'center',
                padding: theme.spacing(1, 0, 1, 0),
                border: 'none',
                fontSize: theme.spacing(2),
                outline: 'none',
              },
              focused: { backgroundColor: theme.palette.divider },
              underline: { '&::before': { display: 'none' } },
            }
          },
          { name: 'RSFQuantitySelector' },
        )
      function QuantitySelector(_ref) {
        var name = _ref.name,
          classes = _ref.classes,
          addIcon = _ref.addIcon,
          addButtonProps = _ref.addButtonProps,
          subtractIcon = _ref.subtractIcon,
          subtractButtonProps = _ref.subtractButtonProps,
          value = _ref.value,
          minValue = _ref.minValue,
          maxValue = _ref.maxValue,
          onChange = _ref.onChange,
          inputProps = _ref.inputProps,
          ariaLabel = _ref.ariaLabel,
          _classes = (classes = useStyles({ classes: classes })),
          icon = (_classes.quantitySelector, _classes.icon),
          button = _classes.button,
          inputClasses = objectWithoutProperties_default()(_classes, [
            'quantitySelector',
            'icon',
            'button',
          ])
        function handleChange(value) {
          value >= minValue && value <= maxValue && onChange(value)
        }
        return (
          value || (value = 1),
          react_default.a.createElement(
            react_default.a.Fragment,
            null,
            react_default.a.createElement(
              IconButton.a,
              extends_default()(
                {
                  size: 'small',
                  classes: { root: button },
                  className: classes.subtract,
                  onClick: function onClick() {
                    return handleChange(value - 1)
                  },
                  'aria-label': 'add one '.concat(ariaLabel),
                },
                subtractButtonProps,
              ),
              subtractIcon ||
                react_default.a.createElement(Remove_default.a, { classes: { root: icon } }),
            ),
            react_default.a.createElement(
              'input',
              extends_default()(
                { onChange: handleChange, value: value, name: name },
                { 'aria-label': ariaLabel },
                { className: Object(clsx_m.a)([classes.input, classes.underline, inputClasses]) },
                inputProps,
                { readOnly: !0 },
              ),
            ),
            react_default.a.createElement(
              IconButton.a,
              extends_default()(
                {
                  size: 'small',
                  classes: { root: button },
                  className: classes.add,
                  onClick: function onClick() {
                    return handleChange(value + 1)
                  },
                  'aria-label': 'subtract one '.concat(ariaLabel),
                },
                addButtonProps,
              ),
              addIcon || react_default.a.createElement(Add_default.a, { classes: { root: icon } }),
            ),
          )
        )
      }
      ;(QuantitySelector.propTypes = {
        name: prop_types_default.a.string,
        classes: prop_types_default.a.object,
        addIcon: prop_types_default.a.element,
        subtractIcon: prop_types_default.a.element,
        value: prop_types_default.a.number,
        minValue: prop_types_default.a.number,
        maxValue: prop_types_default.a.number,
        onChange: prop_types_default.a.func,
        ariaLabel: prop_types_default.a.string,
      }),
        (QuantitySelector.defaultProps = {
          name: 'quantity',
          onChange: Function.prototype,
          addButtonProps: {},
          subtractButtonProps: {},
          inputProps: {},
          minValue: 1,
          maxValue: 100,
          ariaLabel: 'quantity',
        }),
        (QuantitySelector.__docgenInfo = {
          description: 'A quantity selector with plus and minus buttons.',
          methods: [],
          displayName: 'QuantitySelector',
          props: {
            name: {
              defaultValue: { value: "'quantity'", computed: !1 },
              type: { name: 'string' },
              required: !1,
              description: 'The name to apply to the input when rendering AMP.',
            },
            onChange: {
              defaultValue: { value: 'Function.prototype', computed: !0 },
              type: { name: 'func' },
              required: !1,
              description:
                'Called when the value is changed.  The new value is passed as the only argument',
            },
            addButtonProps: { defaultValue: { value: '{}', computed: !1 }, required: !1 },
            subtractButtonProps: { defaultValue: { value: '{}', computed: !1 }, required: !1 },
            inputProps: { defaultValue: { value: '{}', computed: !1 }, required: !1 },
            minValue: {
              defaultValue: { value: '1', computed: !1 },
              type: { name: 'number' },
              required: !1,
              description: 'The minimum value.  Defaults to 1.',
            },
            maxValue: {
              defaultValue: { value: '100', computed: !1 },
              type: { name: 'number' },
              required: !1,
              description: 'The maximum value.  Defaults to 100.',
            },
            ariaLabel: {
              defaultValue: { value: "'quantity'", computed: !1 },
              type: { name: 'string' },
              required: !1,
              description:
                'The accessibility label.  Add and subtract button aria-label values are derived from this as "add one {ariaLabel}" and "subtract one {ariaLabel}"',
            },
            classes: { type: { name: 'object' }, required: !1, description: 'CSS classes' },
            addIcon: { type: { name: 'element' }, required: !1, description: 'The plus icon' },
            subtractIcon: {
              type: { name: 'element' },
              required: !1,
              description: 'The minus icon',
            },
            value: { type: { name: 'number' }, required: !1, description: 'The current value' },
          },
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/QuantitySelector.js'] = {
            name: 'QuantitySelector',
            docgenInfo: QuantitySelector.__docgenInfo,
            path: 'src/QuantitySelector.js',
          }),
        __webpack_require__.d(__webpack_exports__, 'plain', function() {
          return plain
        }),
        __webpack_require__.d(__webpack_exports__, 'withMinAndMax', function() {
          return withMinAndMax
        }),
        __webpack_require__.d(__webpack_exports__, 'customIcons', function() {
          return customIcons
        })
      __webpack_exports__.default = { title: 'QuantitySelector' }
      var plain = function() {
        var _useState = Object(react.useState)(0),
          _useState2 = slicedToArray_default()(_useState, 2),
          count = _useState2[0],
          setCount = _useState2[1]
        return react_default.a.createElement(QuantitySelector, { value: count, onChange: setCount })
      }
      plain.displayName = 'plain'
      var withMinAndMax = function() {
        var _useState3 = Object(react.useState)(6),
          _useState4 = slicedToArray_default()(_useState3, 2),
          count = _useState4[0],
          setCount = _useState4[1]
        return react_default.a.createElement(QuantitySelector, {
          minValue: 5,
          maxValue: 7,
          value: count,
          onChange: setCount,
        })
      }
      withMinAndMax.displayName = 'withMinAndMax'
      var QuantitySelector_stories_ref = react_default.a.createElement(ArrowUpward_default.a, null),
        _ref2 = react_default.a.createElement(ArrowDownward_default.a, null),
        customIcons = function() {
          var _useState5 = Object(react.useState)(0),
            _useState6 = slicedToArray_default()(_useState5, 2),
            count = _useState6[0],
            setCount = _useState6[1]
          return react_default.a.createElement(QuantitySelector, {
            addIcon: QuantitySelector_stories_ref,
            subtractIcon: _ref2,
            value: count,
            onChange: setCount,
          })
        }
      ;(customIcons.displayName = 'customIcons'),
        (plain.__docgenInfo = { description: '', methods: [], displayName: 'plain' }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['.storybook/stories/QuantitySelector.stories.js'] = {
            name: 'plain',
            docgenInfo: plain.__docgenInfo,
            path: '.storybook/stories/QuantitySelector.stories.js',
          }),
        (withMinAndMax.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'withMinAndMax',
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['.storybook/stories/QuantitySelector.stories.js'] = {
            name: 'withMinAndMax',
            docgenInfo: withMinAndMax.__docgenInfo,
            path: '.storybook/stories/QuantitySelector.stories.js',
          }),
        (customIcons.__docgenInfo = { description: '', methods: [], displayName: 'customIcons' }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['.storybook/stories/QuantitySelector.stories.js'] = {
            name: 'customIcons',
            docgenInfo: customIcons.__docgenInfo,
            path: '.storybook/stories/QuantitySelector.stories.js',
          })
    },
    1004: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__)
      var _buttonProps,
        react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        helpers_extends =
          (__webpack_require__(33),
          __webpack_require__(56),
          __webpack_require__(36),
          __webpack_require__(75),
          __webpack_require__(43),
          __webpack_require__(88),
          __webpack_require__(89),
          __webpack_require__(42),
          __webpack_require__(459),
          __webpack_require__(37),
          __webpack_require__(8)),
        extends_default = __webpack_require__.n(helpers_extends),
        defineProperty = __webpack_require__(6),
        defineProperty_default = __webpack_require__.n(defineProperty),
        prop_types = __webpack_require__(1),
        prop_types_default = __webpack_require__.n(prop_types),
        Link = __webpack_require__(146),
        ToolbarButton = __webpack_require__(220),
        ShoppingCart = __webpack_require__(468),
        ShoppingCart_default = __webpack_require__.n(ShoppingCart),
        makeStyles = __webpack_require__(224),
        Badge = __webpack_require__(1053),
        clsx_m = __webpack_require__(3)
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object)
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object)
          enumerableOnly &&
            (symbols = symbols.filter(function(sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable
            })),
            keys.push.apply(keys, symbols)
        }
        return keys
      }
      function _objectSpread(target) {
        for (var source, i = 1; i < arguments.length; i++)
          (source = null != arguments[i] ? arguments[i] : {}),
            i % 2
              ? ownKeys(Object(source), !0).forEach(function(key) {
                  defineProperty_default()(target, key, source[key])
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
              : ownKeys(Object(source)).forEach(function(key) {
                  Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key))
                })
        return target
      }
      var useStyles = Object(makeStyles.a)(
        function() {
          return {
            badge: { border: '2px solid white', padding: '0 4px' },
            icon: {},
            link: { color: 'inherit' },
          }
        },
        { name: 'RSFCartButton' },
      )
      function CartButton(_ref) {
        var classes = _ref.classes,
          href = _ref.href,
          as = _ref.as,
          server = _ref.server,
          onClick = _ref.onClick,
          icon = _ref.icon,
          quantity = _ref.quantity,
          linkProps = _ref.linkProps,
          badgeProps = _ref.badgeProps,
          buttonProps = _ref.buttonProps
        classes = useStyles({ classes: classes })
        var cartIcon =
          icon || react_default.a.createElement(ShoppingCart_default.a, { className: classes.icon })
        return react_default.a.createElement(
          Link.a,
          extends_default()({}, linkProps.anchorProps, {
            className: Object(clsx_m.a)(classes.link, linkProps.className),
            href: href,
            as: as,
            server: server,
            onClick: onClick,
          }),
          react_default.a.createElement(
            ToolbarButton.a,
            buttonProps,
            react_default.a.createElement(
              Badge.a,
              extends_default()({ badgeContent: quantity }, badgeProps, {
                classes: _objectSpread({}, badgeProps.classes, { badge: classes.badge }),
              }),
              cartIcon,
            ),
          ),
        )
      }
      ;(CartButton.displayName = 'CartButton'),
        (CartButton.propTypes = {
          href: prop_types_default.a.string,
          server: prop_types_default.a.bool,
          classes: prop_types_default.a.object,
          icon: prop_types_default.a.element,
          buttonProps: prop_types_default.a.object,
          badgeProps: prop_types_default.a.object,
          linkProps: prop_types_default.a.object,
        }),
        (CartButton.defaultProps = {
          href: '/cart',
          badgeProps: { color: 'primary' },
          buttonProps:
            ((_buttonProps = {}),
            defineProperty_default()(_buttonProps, 'aria-label', 'Cart'),
            defineProperty_default()(_buttonProps, 'color', 'inherit'),
            _buttonProps),
          linkProps: { anchorProps: { 'data-th': 'cart-link' } },
        }),
        (CartButton.__docgenInfo = {
          description:
            'A cart header button that display the number of items in the cart using a badge.\n\nExample:\n\n```js\n<CartButton href="/cart" quantity={1}/>\n```',
          methods: [],
          displayName: 'CartButton',
          props: {
            href: {
              defaultValue: { value: "'/cart'", computed: !1 },
              type: { name: 'string' },
              required: !1,
              description: 'The url path to cart.  Defaults to "/cart"',
            },
            badgeProps: {
              defaultValue: { value: "{\n  color: 'primary',\n}", computed: !1 },
              type: { name: 'object' },
              required: !1,
              description: 'Props for the Badge element.',
            },
            buttonProps: {
              defaultValue: {
                value: "{\n  ['aria-label']: 'Cart',\n  color: 'inherit',\n}",
                computed: !1,
              },
              type: { name: 'object' },
              required: !1,
              description: 'Props for the Button element.',
            },
            linkProps: {
              defaultValue: {
                value: "{\n  anchorProps: { 'data-th': 'cart-link' },\n}",
                computed: !1,
              },
              type: { name: 'object' },
              required: !1,
              description: 'Props for the Link element.',
            },
            server: {
              type: { name: 'bool' },
              required: !1,
              description: 'Set to true to force server side navigation.  Defaults to false',
            },
            classes: { type: { name: 'object' }, required: !1, description: 'CSS classes' },
            icon: {
              type: { name: 'element' },
              required: !1,
              description: 'Optional Custom cart icon',
            },
          },
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/CartButton.js'] = {
            name: 'CartButton',
            docgenInfo: CartButton.__docgenInfo,
            path: 'src/CartButton.js',
          }),
        __webpack_require__.d(__webpack_exports__, 'defaults', function() {
          return defaults
        })
      __webpack_exports__.default = { title: 'CartButton' }
      var CartButton_stories_ref = react_default.a.createElement(CartButton, {
          href: '/cart',
          quantity: 1,
        }),
        defaults = function() {
          return CartButton_stories_ref
        }
      ;(defaults.displayName = 'defaults'),
        (defaults.__docgenInfo = { description: '', methods: [], displayName: 'defaults' }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['.storybook/stories/CartButton.stories.js'] = {
            name: 'defaults',
            docgenInfo: defaults.__docgenInfo,
            path: '.storybook/stories/CartButton.stories.js',
          })
    },
    1005: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__)
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        KeyboardArrowRight = (__webpack_require__(55), __webpack_require__(463)),
        KeyboardArrowRight_default = __webpack_require__.n(KeyboardArrowRight),
        Link = __webpack_require__(146),
        clsx_m = __webpack_require__(3),
        Typography = __webpack_require__(323),
        Container = __webpack_require__(1051),
        makeStyles = __webpack_require__(224),
        prop_types = __webpack_require__(1),
        prop_types_default = __webpack_require__.n(prop_types),
        useStyles = Object(makeStyles.a)(function(theme) {
          return {
            breadcrumbs: {
              backgroundColor: '#F4F2F1',
              padding: '12px 0',
              '& a': { color: theme.palette.text.primary, textDecoration: 'none' },
            },
            separator: { height: '12px', position: 'relative', top: '2px', width: '16px' },
            current: { fontWeight: 'bold', color: theme.palette.text.primary },
          }
        }, 'RSFBreadcrumbs'),
        _ref2 = react_default.a.createElement('span', null, ' ')
      function Breadcrumbs(_ref) {
        var items = _ref.items,
          classes = _ref.classes
        return (
          (classes = useStyles({ classes: classes })),
          react_default.a.createElement(
            Typography.a,
            { display: 'block', className: classes.breadcrumbs, variant: 'caption' },
            react_default.a.createElement(
              Container.a,
              null,
              items &&
                items.map(function(item, i) {
                  var arrow =
                      0 < i
                        ? react_default.a.createElement(KeyboardArrowRight_default.a, {
                            className: classes.separator,
                          })
                        : null,
                    isLastItem = items.length - 1 === i
                  return item.href
                    ? react_default.a.createElement(
                        'span',
                        { key: i, className: Object(clsx_m.a)(isLastItem && classes.current) },
                        arrow,
                        react_default.a.createElement(
                          Link.a,
                          { href: item.href, as: item.as },
                          item.text,
                        ),
                      )
                    : react_default.a.createElement(
                        'span',
                        { key: i, className: Object(clsx_m.a)(isLastItem && classes.current) },
                        arrow,
                        item.text,
                      )
                }),
              _ref2,
            ),
          )
        )
      }
      ;(Breadcrumbs.displayName = 'Breadcrumbs'),
        (Breadcrumbs.propTypes = {
          items: prop_types_default.a.arrayOf(prop_types_default.a.objectOf),
        }),
        (Breadcrumbs.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Breadcrumbs',
          props: {
            items: {
              type: { name: 'arrayOf', value: { name: 'custom', raw: 'PropTypes.objectOf' } },
              required: !1,
              description: 'The items to display, each with url, text, and state.',
            },
          },
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/Breadcrumbs.js'] = {
            name: 'Breadcrumbs',
            docgenInfo: Breadcrumbs.__docgenInfo,
            path: 'src/Breadcrumbs.js',
          }),
        __webpack_require__.d(__webpack_exports__, 'defaults', function() {
          return defaults
        })
      __webpack_exports__.default = { title: 'Breadcrumbs' }
      var defaults = function() {
        return react_default.a.createElement(Breadcrumbs, {
          items: [
            { text: 'one', href: '/one' },
            { text: 'two', href: '/two' },
            { text: 'three', href: '/three' },
            { text: 'four', href: '/four' },
          ],
        })
      }
      ;(defaults.displayName = 'defaults'),
        (defaults.__docgenInfo = { description: '', methods: [], displayName: 'defaults' }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['.storybook/stories/Breadcrumbs.stories.js'] = {
            name: 'defaults',
            docgenInfo: defaults.__docgenInfo,
            path: '.storybook/stories/Breadcrumbs.stories.js',
          })
    },
    1006: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__)
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        helpers_extends =
          (__webpack_require__(33),
          __webpack_require__(56),
          __webpack_require__(36),
          __webpack_require__(75),
          __webpack_require__(43),
          __webpack_require__(88),
          __webpack_require__(89),
          __webpack_require__(42),
          __webpack_require__(37),
          __webpack_require__(8)),
        extends_default = __webpack_require__.n(helpers_extends),
        defineProperty = __webpack_require__(6),
        defineProperty_default = __webpack_require__.n(defineProperty),
        objectWithoutProperties = __webpack_require__(14),
        objectWithoutProperties_default = __webpack_require__.n(objectWithoutProperties),
        makeStyles = __webpack_require__(224),
        Button = __webpack_require__(1049),
        Typography = __webpack_require__(323),
        prop_types = __webpack_require__(1),
        prop_types_default = __webpack_require__.n(prop_types)
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object)
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object)
          enumerableOnly &&
            (symbols = symbols.filter(function(sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable
            })),
            keys.push.apply(keys, symbols)
        }
        return keys
      }
      function _objectSpread(target) {
        for (var source, i = 1; i < arguments.length; i++)
          (source = null != arguments[i] ? arguments[i] : {}),
            i % 2
              ? ownKeys(Object(source), !0).forEach(function(key) {
                  defineProperty_default()(target, key, source[key])
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
              : ownKeys(Object(source)).forEach(function(key) {
                  Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key))
                })
        return target
      }
      var useStyles = Object(makeStyles.a)(
          function(theme) {
            return {
              label: {
                justifyContent: 'space-between',
                alignItems: 'baseline',
                textTransform: 'none',
              },
              caption: { textTransform: 'none', fontWeight: 'bold' },
              button: { boxShadow: 'none', backgroundColor: theme.palette.grey[200] },
              value: {
                color: theme.palette.text.primary,
                whiteSpace: 'nowrap',
                textOverflow: 'ellipses',
                marginLeft: '10px',
              },
            }
          },
          { name: 'RSFActionButton' },
        ),
        ActionButton = Object(react.forwardRef)(function(_ref, ref) {
          var label = _ref.label,
            value = _ref.value,
            _ref$classes = (_ref.children, _ref.classes),
            classes = void 0 === _ref$classes ? {} : _ref$classes,
            props = objectWithoutProperties_default()(_ref, [
              'label',
              'value',
              'children',
              'classes',
            ]),
            _classes = classes,
            caption = _classes.caption,
            valueClasses = _classes.value,
            button = _classes.button,
            labelClasses = _classes.label,
            otherClasses = objectWithoutProperties_default()(_classes, [
              'caption',
              'value',
              'button',
              'label',
            ])
          return (
            (classes = useStyles({
              classes: {
                caption: caption,
                value: valueClasses,
                button: button,
                label: labelClasses,
              },
            })),
            react_default.a.createElement(
              Button.a,
              extends_default()(
                {
                  ref: ref,
                  variant: 'contained',
                  classes: _objectSpread(
                    { contained: classes.button, label: classes.label },
                    otherClasses,
                  ),
                },
                props,
              ),
              react_default.a.createElement(
                Typography.a,
                { variant: 'button', className: classes.caption },
                label,
              ),
              react_default.a.createElement(
                Typography.a,
                { variant: 'caption', className: classes.value },
                value,
              ),
            )
          )
        })
      ;(ActionButton.propTypes = {
        label: prop_types_default.a.oneOfType([
          prop_types_default.a.string,
          prop_types_default.a.element,
        ]),
        value: prop_types_default.a.oneOfType([
          prop_types_default.a.string,
          prop_types_default.a.element,
        ]),
      }),
        (ActionButton.__docgenInfo = {
          description:
            'This button class displays a label and value.\n\nExample:\n\n```js\n <ActionButton label="Sort" value="Lowest Price" onClick={openSortMenu}/>\n```',
          methods: [],
          props: {
            classes: { defaultValue: { value: '{}', computed: !1 }, required: !1 },
            label: {
              type: { name: 'union', value: [{ name: 'string' }, { name: 'element' }] },
              required: !1,
              description: 'The label to display on the left side of the button',
            },
            value: {
              type: { name: 'union', value: [{ name: 'string' }, { name: 'element' }] },
              required: !1,
              description: 'The value to display on the right side of the button',
            },
          },
        })
      var src_ActionButton = ActionButton
      'undefined' != typeof STORYBOOK_REACT_CLASSES &&
        (STORYBOOK_REACT_CLASSES['src/ActionButton.js'] = {
          name: 'ActionButton',
          docgenInfo: ActionButton.__docgenInfo,
          path: 'src/ActionButton.js',
        }),
        __webpack_require__.d(__webpack_exports__, 'withLabel', function() {
          return withLabel
        }),
        __webpack_require__.d(__webpack_exports__, 'withValue', function() {
          return withValue
        }),
        __webpack_require__.d(__webpack_exports__, 'withBoth', function() {
          return withBoth
        })
      __webpack_exports__.default = { title: 'ActionButton' }
      var ActionButton_stories_ref = react_default.a.createElement(src_ActionButton, {
          label: 'Sort',
        }),
        withLabel = function() {
          return ActionButton_stories_ref
        }
      withLabel.displayName = 'withLabel'
      var _ref2 = react_default.a.createElement(src_ActionButton, { value: 'Lowest Price' }),
        withValue = function() {
          return _ref2
        }
      withValue.displayName = 'withValue'
      var _ref3 = react_default.a.createElement(src_ActionButton, {
          label: 'Sort',
          value: 'Lowest Price',
        }),
        withBoth = function() {
          return _ref3
        }
      ;(withBoth.displayName = 'withBoth'),
        (withLabel.__docgenInfo = { description: '', methods: [], displayName: 'withLabel' }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['.storybook/stories/ActionButton.stories.js'] = {
            name: 'withLabel',
            docgenInfo: withLabel.__docgenInfo,
            path: '.storybook/stories/ActionButton.stories.js',
          }),
        (withValue.__docgenInfo = { description: '', methods: [], displayName: 'withValue' }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['.storybook/stories/ActionButton.stories.js'] = {
            name: 'withValue',
            docgenInfo: withValue.__docgenInfo,
            path: '.storybook/stories/ActionButton.stories.js',
          }),
        (withBoth.__docgenInfo = { description: '', methods: [], displayName: 'withBoth' }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['.storybook/stories/ActionButton.stories.js'] = {
            name: 'withBoth',
            docgenInfo: withBoth.__docgenInfo,
            path: '.storybook/stories/ActionButton.stories.js',
          })
    },
    1007: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__)
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        Pets = __webpack_require__(102),
        Pets_default = __webpack_require__.n(Pets),
        slicedToArray = __webpack_require__(12),
        slicedToArray_default = __webpack_require__.n(slicedToArray),
        prop_types = __webpack_require__(1),
        prop_types_default = __webpack_require__.n(prop_types),
        throttle = __webpack_require__(461),
        throttle_default = __webpack_require__.n(throttle),
        ArrowUpward = __webpack_require__(218),
        ArrowUpward_default = __webpack_require__.n(ArrowUpward),
        Fab = __webpack_require__(1050),
        Fade = __webpack_require__(1015),
        makeStyles = __webpack_require__(224),
        useStyles = Object(makeStyles.a)(
          function() {
            return {
              root: { zIndex: 1, position: 'fixed', bottom: 24, right: 16 },
              fab: { background: 'rgba(0,0,0,.85)', '&:hover': { background: 'rgb(0,0,0)' } },
              icon: { color: 'white' },
            }
          },
          { name: 'RSFBackToTop' },
        )
      function BackToTop(_ref) {
        var Icon = _ref.Icon,
          showUnderY = _ref.showUnderY,
          instantBehaviorUnderY = _ref.instantBehaviorUnderY,
          classes = _ref.classes,
          fadeTime = _ref.fadeTime,
          size = _ref.size,
          _useState = Object(react.useState)(!1),
          _useState2 = slicedToArray_default()(_useState, 2),
          visible = _useState2[0],
          setVisible = _useState2[1],
          el = Object(react.useRef)()
        return (
          (classes = useStyles({ classes: classes })),
          Object(react.useEffect)(function() {
            var onScroll = throttle_default()(function() {
              setVisible(
                getScrollY() > showUnderY &&
                  el.current.parentElement &&
                  null != el.current.parentElement.offsetParent,
              )
            }, 200)
            return (
              window.addEventListener('scroll', onScroll, { passive: !0 }),
              function() {
                return window.removeEventListener('scroll', onScroll)
              }
            )
          }, []),
          (Icon = Icon || ArrowUpward_default.a),
          react_default.a.createElement(
            'div',
            { className: classes.root, ref: el },
            react_default.a.createElement(
              Fade.a,
              { in: visible, timeout: fadeTime },
              react_default.a.createElement(
                Fab.a,
                {
                  className: classes.fab,
                  size: size,
                  onClick: function scrollToTop() {
                    var behavior = getScrollY() > instantBehaviorUnderY ? 'auto' : 'smooth'
                    window.scrollTo({ top: 0, left: 0, behavior: behavior })
                  },
                  title: 'back to top',
                },
                react_default.a.createElement(Icon, { className: classes.icon }),
              ),
            ),
          )
        )
      }
      function getScrollY() {
        return window.scrollY || window.pageYOffset
      }
      ;(BackToTop.displayName = 'BackToTop'),
        (BackToTop.propTypes = {
          Icon: prop_types_default.a.func,
          showUnderY: prop_types_default.a.number,
          instantBehaviorUnderY: prop_types_default.a.number,
          fadeTime: prop_types_default.a.number,
          size: prop_types_default.a.string,
        }),
        (BackToTop.defaultProps = {
          showUnderY: 250,
          instantBehaviorUnderY: 3e3,
          fadeTime: 320,
          size: 'medium',
        }),
        (BackToTop.__docgenInfo = {
          description:
            'A floating action buttion that appears when the user scrolls down\nand scrolls to the top of the page when clicked.',
          methods: [],
          displayName: 'BackToTop',
          props: {
            showUnderY: {
              defaultValue: { value: '250', computed: !1 },
              type: { name: 'number' },
              required: !1,
              description:
                'value which controls where along the Y position the BackToTop component is shown',
            },
            instantBehaviorUnderY: {
              defaultValue: { value: '3000', computed: !1 },
              type: { name: 'number' },
              required: !1,
              description:
                'When the scroll position is less than this value, the page will smoothly scroll back up. If\nthe scroll position is more than this value, the page will immediately scroll back up.',
            },
            fadeTime: {
              defaultValue: { value: '320', computed: !1 },
              type: { name: 'number' },
              required: !1,
              description: 'Fade in/out animation time of icon',
            },
            size: {
              defaultValue: { value: "'medium'", computed: !1 },
              type: { name: 'string' },
              required: !1,
              description: 'Controls size of component. Values allowed are [small, medium, large]',
            },
            Icon: {
              type: { name: 'func' },
              required: !1,
              description: 'The icon to use within Fab component',
            },
          },
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/BackToTop.js'] = {
            name: 'BackToTop',
            docgenInfo: BackToTop.__docgenInfo,
            path: 'src/BackToTop.js',
          }),
        __webpack_require__.d(__webpack_exports__, 'medium', function() {
          return medium
        }),
        __webpack_require__.d(__webpack_exports__, 'small', function() {
          return small
        }),
        __webpack_require__.d(__webpack_exports__, 'large', function() {
          return large
        }),
        __webpack_require__.d(__webpack_exports__, 'customIcon', function() {
          return customIcon
        })
      __webpack_exports__.default = { title: 'BackToTop' }
      var BackToTop_stories_styles = {
          background: '#7f8fa6',
          color: '#f5f6fa',
          fontSize: 30,
          fontFamily: 'monospace',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 1500,
        },
        BackToTop_stories_ref = react_default.a.createElement(
          'div',
          null,
          react_default.a.createElement(
            'div',
            { style: BackToTop_stories_styles },
            'Please scroll down',
          ),
          react_default.a.createElement(BackToTop, null),
        ),
        medium = function() {
          return BackToTop_stories_ref
        }
      medium.displayName = 'medium'
      var _ref2 = react_default.a.createElement(
          'div',
          null,
          react_default.a.createElement(
            'div',
            { style: BackToTop_stories_styles },
            'Please scroll down',
          ),
          react_default.a.createElement(BackToTop, { size: 'small' }),
        ),
        small = function() {
          return _ref2
        }
      small.displayName = 'small'
      var _ref3 = react_default.a.createElement(
          'div',
          null,
          react_default.a.createElement(
            'div',
            { style: BackToTop_stories_styles },
            'Please scroll down',
          ),
          react_default.a.createElement(BackToTop, { size: 'large' }),
        ),
        large = function() {
          return _ref3
        }
      large.displayName = 'large'
      var _ref4 = react_default.a.createElement(
          'div',
          null,
          react_default.a.createElement(
            'div',
            { style: BackToTop_stories_styles },
            'Please scroll down',
          ),
          react_default.a.createElement(BackToTop, { Icon: Pets_default.a }),
        ),
        customIcon = function() {
          return _ref4
        }
      ;(customIcon.displayName = 'customIcon'),
        (medium.__docgenInfo = { description: '', methods: [], displayName: 'medium' }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['.storybook/stories/BackToTop.stories.js'] = {
            name: 'medium',
            docgenInfo: medium.__docgenInfo,
            path: '.storybook/stories/BackToTop.stories.js',
          }),
        (small.__docgenInfo = { description: '', methods: [], displayName: 'small' }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['.storybook/stories/BackToTop.stories.js'] = {
            name: 'small',
            docgenInfo: small.__docgenInfo,
            path: '.storybook/stories/BackToTop.stories.js',
          }),
        (large.__docgenInfo = { description: '', methods: [], displayName: 'large' }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['.storybook/stories/BackToTop.stories.js'] = {
            name: 'large',
            docgenInfo: large.__docgenInfo,
            path: '.storybook/stories/BackToTop.stories.js',
          }),
        (customIcon.__docgenInfo = { description: '', methods: [], displayName: 'customIcon' }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['.storybook/stories/BackToTop.stories.js'] = {
            name: 'customIcon',
            docgenInfo: customIcon.__docgenInfo,
            path: '.storybook/stories/BackToTop.stories.js',
          })
    },
    1008: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__)
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        Pets = __webpack_require__(102),
        Pets_default = __webpack_require__.n(Pets),
        defineProperty = __webpack_require__(6),
        defineProperty_default = __webpack_require__.n(defineProperty),
        Star = __webpack_require__(481),
        Star_default = __webpack_require__.n(Star),
        StarBorder = __webpack_require__(483),
        StarBorder_default = __webpack_require__.n(StarBorder),
        StarHalf = __webpack_require__(482),
        StarHalf_default = __webpack_require__.n(StarHalf),
        makeStyles = __webpack_require__(224),
        prop_types = __webpack_require__(1),
        prop_types_default = __webpack_require__.n(prop_types),
        clsx_m = __webpack_require__(3),
        Box = __webpack_require__(223),
        useStyles = Object(makeStyles.a)(
          function(theme) {
            return {
              root: {
                display: 'flex',
                '& svg': {
                  color: theme.palette.rating,
                  height: '16px',
                  width: '16px',
                  display: 'block',
                },
              },
              filledEmpty: { fill: theme.palette.divider },
              blank: { '& svg': { color: theme.palette.divider } },
              reviewsLabel: { marginLeft: '3px' },
            }
          },
          { name: 'RSFRating' },
        )
      function Rating(_ref) {
        var iconFull = _ref.iconFull,
          iconHalf = _ref.iconHalf,
          iconEmpty = _ref.iconEmpty,
          classes = _ref.classes,
          value = _ref.value,
          label = _ref.label,
          reviewCount = _ref.reviewCount,
          className = _ref.className,
          product = _ref.product,
          fillEmpty = _ref.fillEmpty,
          stars = []
        product && ((reviewCount = product.reviewCount), (value = product.rating)),
          (classes = useStyles({ classes: classes }))
        for (var IconFull = iconFull || Star_default.a, i = 1; 5 >= i; i++)
          null == value || value >= i
            ? stars.push(react_default.a.createElement(IconFull, { key: i }))
            : value >= i - 0.5
            ? stars.push(react_default.a.createElement(iconHalf || StarHalf_default.a, { key: i }))
            : fillEmpty
            ? stars.push(
                react_default.a.createElement(IconFull, { className: classes.filledEmpty, key: i }),
              )
            : stars.push(
                react_default.a.createElement(iconEmpty || StarBorder_default.a, { key: i }),
              )
        return react_default.a.createElement(
          Box.a,
          null,
          react_default.a.createElement(
            'div',
            {
              className: Object(clsx_m.a)(
                classes.root,
                className,
                defineProperty_default()({}, classes.blank, null == value),
              ),
            },
            stars,
          ),
          reviewCount
            ? react_default.a.createElement(
                'div',
                { className: classes.reviewsLabel },
                '(',
                reviewCount,
                label(reviewCount),
                ')',
              )
            : null,
        )
      }
      ;(Rating.displayName = 'Rating'),
        (Rating.propTypes = {
          classes: prop_types_default.a.object,
          value: prop_types_default.a.number,
          reviewCount: prop_types_default.a.number,
          label: prop_types_default.a.func,
          product: prop_types_default.a.object,
          iconFull: prop_types_default.a.func,
          iconHalf: prop_types_default.a.func,
          iconEmpty: prop_types_default.a.func,
          fillEmpty: prop_types_default.a.bool,
        }),
        (Rating.defaultProps = {
          label: function label(reviewCount) {
            return react_default.a.createElement(
              'span',
              null,
              ' ',
              1 == reviewCount ? 'review' : 'reviews',
            )
          },
          fillEmpty: !1,
        }),
        (Rating.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Rating',
          props: {
            label: {
              defaultValue: {
                value: "reviewCount => <span> {reviewCount == 1 ? 'review' : 'reviews'}</span>",
                computed: !1,
              },
              type: { name: 'func' },
              required: !1,
              description:
                "A function that returns the label displayed to the right of the review count.\nFor example: `<Rating label={reviewCount => <span> {reviewCount == 1 ? 'review' : 'reviews'}</span>}/>`.\nThis value used in this example is the default.",
            },
            fillEmpty: {
              defaultValue: { value: 'false', computed: !1 },
              type: { name: 'bool' },
              required: !1,
              description: 'Use filled icon with light grey background for empty icon',
            },
            classes: {
              type: { name: 'object' },
              required: !1,
              description: 'CSS classes to apply',
            },
            value: {
              type: { name: 'number' },
              required: !1,
              description:
                'The number of stars to display.  Can be an integer or a float\nending in .5.',
            },
            reviewCount: {
              type: { name: 'number' },
              required: !1,
              description: 'The number of reviews',
            },
            product: {
              type: { name: 'object' },
              required: !1,
              description:
                'You can set this instead of setting value and reviewCount individually.',
            },
            iconFull: {
              type: { name: 'func' },
              required: !1,
              description: 'Custom full point icon',
            },
            iconHalf: {
              type: { name: 'func' },
              required: !1,
              description: 'Custom half point icon',
            },
            iconEmpty: {
              type: { name: 'func' },
              required: !1,
              description: 'Custom empty icon, will override fillEmpty icon',
            },
          },
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/Rating.js'] = {
            name: 'Rating',
            docgenInfo: Rating.__docgenInfo,
            path: 'src/Rating.js',
          }),
        __webpack_require__.d(__webpack_exports__, 'defaults', function() {
          return defaults
        }),
        __webpack_require__.d(__webpack_exports__, 'fillEmpty', function() {
          return Rating_stories_fillEmpty
        }),
        __webpack_require__.d(__webpack_exports__, 'customIcons', function() {
          return customIcons
        })
      __webpack_exports__.default = { title: 'Rating' }
      var Rating_stories_ref = react_default.a.createElement(Rating, { value: 3.5 }),
        defaults = function() {
          return Rating_stories_ref
        }
      defaults.displayName = 'defaults'
      var _ref2 = react_default.a.createElement(Rating, { value: 2, fillEmpty: !0 }),
        Rating_stories_fillEmpty = function() {
          return _ref2
        }
      Rating_stories_fillEmpty.displayName = 'fillEmpty'
      var _ref3 = react_default.a.createElement(Rating, {
          iconFull: Pets_default.a,
          fillEmpty: !0,
        }),
        customIcons = function() {
          return _ref3
        }
      ;(customIcons.displayName = 'customIcons'),
        (defaults.__docgenInfo = { description: '', methods: [], displayName: 'defaults' }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['.storybook/stories/Rating.stories.js'] = {
            name: 'defaults',
            docgenInfo: defaults.__docgenInfo,
            path: '.storybook/stories/Rating.stories.js',
          }),
        (Rating_stories_fillEmpty.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'fillEmpty',
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['.storybook/stories/Rating.stories.js'] = {
            name: 'fillEmpty',
            docgenInfo: Rating_stories_fillEmpty.__docgenInfo,
            path: '.storybook/stories/Rating.stories.js',
          }),
        (customIcons.__docgenInfo = { description: '', methods: [], displayName: 'customIcons' }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['.storybook/stories/Rating.stories.js'] = {
            name: 'customIcons',
            docgenInfo: customIcons.__docgenInfo,
            path: '.storybook/stories/Rating.stories.js',
          })
    },
    1009: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__)
      __webpack_require__(284), __webpack_require__(55)
      var slicedToArray = __webpack_require__(12),
        slicedToArray_default = __webpack_require__.n(slicedToArray),
        react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        src_AutoScrollToNewChildren = function(_ref) {
          var children = _ref.children,
            childCount = react_default.a.Children.count(children),
            _useState = Object(react.useState)(childCount),
            _useState2 = slicedToArray_default()(_useState, 2),
            priorChildCount = _useState2[0],
            setPriorChildCount = _useState2[1],
            firstNewChild = Object(react.useRef)(null)
          return (
            Object(react.useEffect)(
              function() {
                priorChildCount
                  ? childCount > priorChildCount &&
                    (firstNewChild.current.scrollIntoView({ behavior: 'smooth' }),
                    setPriorChildCount(childCount))
                  : setPriorChildCount(childCount)
              },
              [childCount, setPriorChildCount, priorChildCount],
            ),
            react_default.a.Children.map(children, function(child, index) {
              return react_default.a.createElement(
                react.Fragment,
                null,
                child,
                index === priorChildCount
                  ? react_default.a.createElement('div', { ref: firstNewChild })
                  : null,
              )
            })
          )
        }
      __webpack_require__.d(__webpack_exports__, 'defaults', function() {
        return defaults
      })
      __webpack_exports__.default = { title: 'AutoScrollToNewChildren' }
      var styles = {
          background: '#7f8fa6',
          color: '#f5f6fa',
          fontSize: 30,
          fontFamily: 'monospace',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 700,
          marginBottom: 5,
        },
        defaults = function() {
          var _useState = Object(react.useState)(1),
            _useState2 = slicedToArray_default()(_useState, 2),
            count = _useState2[0],
            setCount = _useState2[1]
          return react_default.a.createElement(
            src_AutoScrollToNewChildren,
            null,
            Array(count)
              .fill(0)
              .map(function(e, i) {
                return react_default.a.createElement(
                  'div',
                  {
                    onClick: function onClick() {
                      return setCount(count + 1)
                    },
                    style: styles,
                  },
                  'Click Me (',
                  i,
                  ')',
                )
              }),
          )
        }
      ;(defaults.displayName = 'defaults'),
        (defaults.__docgenInfo = { description: '', methods: [], displayName: 'defaults' }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['.storybook/stories/AutoScrollToNewChildren.stories.js'] = {
            name: 'defaults',
            docgenInfo: defaults.__docgenInfo,
            path: '.storybook/stories/AutoScrollToNewChildren.stories.js',
          })
    },
    1011: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__)
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        ExpandableSection = __webpack_require__(124),
        slicedToArray =
          (__webpack_require__(827), __webpack_require__(55), __webpack_require__(12)),
        slicedToArray_default = __webpack_require__.n(slicedToArray),
        objectWithoutProperties = __webpack_require__(14),
        objectWithoutProperties_default = __webpack_require__.n(objectWithoutProperties)
      Object(react.createContext)()
      function Accordion(_ref) {
        var children = _ref.children
        objectWithoutProperties_default()(_ref, ['children'])
        if (!children) return null
        var _useState = Object(react.useState)(function() {
            return children.findIndex(function(child) {
              return child.props.expanded
            })
          }),
          _useState2 = slicedToArray_default()(_useState, 2),
          expanded = _useState2[0],
          setExpanded = _useState2[1]
        return react_default.a.Children.map(children, function(child, i) {
          return react_default.a.cloneElement(child, {
            expanded: expanded === i,
            onChange: function onChange(e, expanded) {
              e.preventDefault(), setExpanded(expanded ? i : null)
            },
          })
        })
      }
      __webpack_require__.d(__webpack_exports__, 'defaults', function() {
        return defaults
      })
      __webpack_exports__.default = { title: 'Accordion' }
      var Accordion_stories_ref = react_default.a.createElement(
          Accordion,
          null,
          react_default.a.createElement(
            ExpandableSection.a,
            { title: 'First' },
            react_default.a.createElement('div', null, 'The first section'),
          ),
          react_default.a.createElement(
            ExpandableSection.a,
            { title: 'Second' },
            react_default.a.createElement('div', null, 'The second section'),
          ),
          react_default.a.createElement(
            ExpandableSection.a,
            { title: 'Third' },
            react_default.a.createElement('div', null, 'The third section'),
          ),
        ),
        defaults = function() {
          return Accordion_stories_ref
        }
      ;(defaults.displayName = 'defaults'),
        (defaults.__docgenInfo = { description: '', methods: [], displayName: 'defaults' }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['.storybook/stories/Accordion.stories.js'] = {
            name: 'defaults',
            docgenInfo: defaults.__docgenInfo,
            path: '.storybook/stories/Accordion.stories.js',
          })
    },
    123: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      var defineProperty = __webpack_require__(6),
        defineProperty_default = __webpack_require__.n(defineProperty),
        slicedToArray = __webpack_require__(12),
        slicedToArray_default = __webpack_require__.n(slicedToArray),
        react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        clsx_m = __webpack_require__(3),
        makeStyles = __webpack_require__(224),
        lib = __webpack_require__(464),
        lib_default = __webpack_require__.n(lib),
        react_swipeable_views_utils_lib = __webpack_require__(465),
        prop_types = __webpack_require__(1),
        prop_types_default = __webpack_require__.n(prop_types),
        colorManipulator = __webpack_require__(316),
        useStyles = Object(makeStyles.a)(
          function(theme) {
            return {
              dot: {
                backgroundColor: Object(colorManipulator.fade)(theme.palette.text.primary, 0.25),
                width: 8,
                height: 8,
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: theme.palette.background.paper,
                borderRadius: '50%',
                display: 'inline-block',
                margin: '0 2px',
                transitionDuration: '0.35s',
              },
              dotSelected: { backgroundColor: theme.palette.text.primary },
              dots: { position: 'absolute', bottom: '5px', textAlign: 'center', width: '100%' },
            }
          },
          { name: 'RSFCarouselDots' },
        )
      function CarouselDots(_ref) {
        var selected = _ref.selected,
          count = _ref.count,
          classes = _ref.classes,
          dots = []
        classes = useStyles({ classes: classes })
        for (var i = 0; i < count; i++) {
          var _clsx
          dots.push(
            react_default.a.createElement('div', {
              key: i,
              className: Object(clsx_m.a)(
                ((_clsx = {}),
                defineProperty_default()(_clsx, classes.dot, !0),
                defineProperty_default()(_clsx, classes.dotSelected, selected === i),
                _clsx),
              ),
            }),
          )
        }
        return react_default.a.createElement('div', { className: classes.dots }, dots)
      }
      ;(CarouselDots.displayName = 'CarouselDots'),
        (CarouselDots.propTypes = {
          count: prop_types_default.a.number.isRequired,
          selected: prop_types_default.a.number.isRequired,
        }),
        (CarouselDots.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'CarouselDots',
          props: {
            count: { type: { name: 'number' }, required: !0, description: '' },
            selected: { type: { name: 'number' }, required: !0, description: '' },
          },
        })
      var carousel_CarouselDots = react_default.a.memo(CarouselDots)
      'undefined' != typeof STORYBOOK_REACT_CLASSES &&
        (STORYBOOK_REACT_CLASSES['src/carousel/CarouselDots.js'] = {
          name: 'CarouselDots',
          docgenInfo: CarouselDots.__docgenInfo,
          path: 'src/carousel/CarouselDots.js',
        })
      var styles_makeStyles = __webpack_require__(219),
        makeStyles_default = __webpack_require__.n(styles_makeStyles),
        IconButton = __webpack_require__(487),
        ChevronLeft = __webpack_require__(466),
        ChevronLeft_default = __webpack_require__.n(ChevronLeft),
        ChevronRight = __webpack_require__(467),
        ChevronRight_default = __webpack_require__.n(ChevronRight),
        CarouselArrows_useStyles = makeStyles_default()(
          function() {
            return {
              arrow: { position: 'absolute', top: '50%', marginTop: '-24px' },
              leftArrow: { left: 0 },
              rightArrow: { right: 0 },
            }
          },
          { name: 'RSFCarouselArrows' },
        )
      function CarouselArrows(_ref) {
        var className = _ref.className,
          classes = _ref.classes,
          selected = _ref.selected,
          count = _ref.count,
          setSelected = _ref.setSelected
        _ref.show
        classes = CarouselArrows_useStyles({ classes: classes })
        var createOnClickArrow = Object(react.useCallback)(
          function(idxChange) {
            return function(evt) {
              evt.preventDefault(), setSelected(selected + idxChange)
            }
          },
          [selected, setSelected],
        )
        return react_default.a.createElement(
          'div',
          { className: Object(clsx_m.a)(classes.arrows, className) },
          0 !== selected &&
            react_default.a.createElement(
              IconButton.a,
              {
                className: Object(clsx_m.a)(classes.arrow, classes.leftArrow),
                onClick: createOnClickArrow(-1),
              },
              react_default.a.createElement(ChevronLeft_default.a, {
                classes: { root: classes.icon },
              }),
            ),
          selected !== count - 1 &&
            react_default.a.createElement(
              IconButton.a,
              {
                className: Object(clsx_m.a)(classes.arrow, classes.rightArrow),
                onClick: createOnClickArrow(1),
              },
              react_default.a.createElement(ChevronRight_default.a, {
                classes: { root: classes.icon },
              }),
            ),
        )
      }
      ;(CarouselArrows.displayName = 'CarouselArrows'),
        (CarouselArrows.propTypes = {}),
        (CarouselArrows.defaultProps = {}),
        (CarouselArrows.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'CarouselArrows',
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/carousel/CarouselArrows.js'] = {
            name: 'CarouselArrows',
            docgenInfo: CarouselArrows.__docgenInfo,
            path: 'src/carousel/CarouselArrows.js',
          })
      var helpers_extends = __webpack_require__(8),
        extends_default = __webpack_require__.n(helpers_extends),
        objectWithoutProperties = __webpack_require__(14),
        objectWithoutProperties_default = __webpack_require__.n(objectWithoutProperties),
        Fill_useStyles = Object(makeStyles.a)(function() {
          return {
            root: { position: 'relative', width: '100%' },
            child: {
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              '& > *': { width: '100%', height: '100%' },
            },
          }
        })
      function Fill(_ref) {
        var height = _ref.height,
          children = _ref.children,
          className = _ref.className,
          props = objectWithoutProperties_default()(_ref, ['height', 'children', 'className'])
        if (((children = react.Children.only(children)), null == height)) return children
        var classes = Fill_useStyles()
        return react_default.a.createElement(
          'div',
          extends_default()({ className: Object(clsx_m.a)(classes.root, className) }, props),
          react_default.a.createElement('div', { style: { paddingTop: height } }),
          react_default.a.createElement('div', { className: classes.child }, children),
        )
      }
      ;(Fill.displayName = 'Fill'),
        (Fill.propTypes = { height: prop_types_default.a.string }),
        (Fill.__docgenInfo = {
          description:
            'This component sizes the height of the child element as a percentage of its width.  It expects\nonly a single child.\n\nExample:\n\n```js\n <Fill height="100%">\n   <div>this element\'s height will be the same as its width.</div>\n </Fill>\n```',
          methods: [],
          displayName: 'Fill',
          props: {
            height: {
              type: { name: 'string' },
              required: !1,
              description:
                'The height as a percentage of the width in a css compatible expression.  For example:\n"100%" or "calc(100% + 50px)", etc...  If omitted, this component does nothing except render\nthe provided child.',
            },
          },
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/Fill.js'] = {
            name: 'Fill',
            docgenInfo: Fill.__docgenInfo,
            path: 'src/Fill.js',
          })
      var Carousel_useStyles = Object(makeStyles.a)(
          function() {
            return {
              root: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'stretch',
                position: 'relative',
                '& img': { display: 'block' },
              },
              swipeWrap: {
                position: 'relative',
                overflow: 'hidden',
                flex: 1,
                '& .react-swipeable-view-container, & > div:first-child': { height: '100%' },
              },
              '@media (hover:none)': { hideTouchArrows: { display: 'none' } },
            }
          },
          { name: 'RSFCarousel' },
        ),
        AutoPlaySwipeableViews = Object(react_swipeable_views_utils_lib.autoPlay)(lib_default.a)
      var Carousel = react_default.a.forwardRef(function(props, ref) {
        var height = props.height,
          children = props.children,
          classes = props.classes,
          className = props.className,
          style = props.style,
          swipeStyle = props.swipeStyle,
          slideStyle = props.slideStyle,
          arrows = props.arrows,
          aboveAdornments = props.aboveAdornments,
          belowAdornments = props.belowAdornments,
          onMouseEnter = props.onMouseEnter,
          onMouseLeave = props.onMouseLeave,
          onClick = props.onClick,
          indicators = props.indicators,
          autoplay = props.autoplay,
          interval = props.interval
        classes = Carousel_useStyles({ classes: classes })
        var _useSelected = (function useSelected(props) {
            if (props.setSelected) return props
            var _useState = Object(react.useState)(0),
              _useState2 = slicedToArray_default()(_useState, 2)
            return { selected: _useState2[0], setSelected: _useState2[1] }
          })(props),
          selected = _useSelected.selected,
          setSelected = _useSelected.setSelected,
          count = children && children.length
        return react_default.a.createElement(
          'div',
          {
            ref: ref,
            className: Object(clsx_m.a)(className, classes.root),
            style: style,
            onMouseEnter: onMouseEnter,
            onMouseLeave: onMouseLeave,
            onClick: onClick,
          },
          aboveAdornments,
          react_default.a.createElement(
            Fill,
            { height: height },
            react_default.a.createElement(
              'div',
              { className: classes.swipeWrap },
              react_default.a.createElement(
                AutoPlaySwipeableViews,
                {
                  index: selected,
                  onChangeIndex: function onChangeIndex(i) {
                    return setSelected(i)
                  },
                  style: swipeStyle,
                  slideStyle: slideStyle,
                  autoplay: autoplay,
                  interval: interval,
                },
                children,
              ),
              !1 !== arrows &&
                react_default.a.createElement(
                  CarouselArrows,
                  defineProperty_default()(
                    {
                      className: 'desktop' === arrows ? classes.hideTouchArrows : null,
                      selected: selected,
                      setSelected: setSelected,
                      count: count,
                    },
                    'selected',
                    selected,
                  ),
                ),
              indicators &&
                react_default.a.createElement(carousel_CarouselDots, {
                  count: count,
                  selected: selected,
                }),
            ),
          ),
          belowAdornments,
        )
      })
      ;(Carousel.propTypes = {
        arrows: prop_types_default.a.oneOf([!1, 'desktop', 'all']),
        aboveAdornments: prop_types_default.a.arrayOf(prop_types_default.a.element),
        belowAdornments: prop_types_default.a.arrayOf(prop_types_default.a.element),
        autoplay: prop_types_default.a.bool,
        interval: prop_types_default.a.number,
      }),
        (Carousel.defaultProps = {
          indicators: !0,
          arrows: 'desktop',
          autoplay: !1,
          interval: 3e3,
        }),
        (Carousel.__docgenInfo = {
          description: '',
          methods: [],
          props: {
            indicators: { defaultValue: { value: 'true', computed: !1 }, required: !1 },
            arrows: {
              defaultValue: { value: "'desktop'", computed: !1 },
              type: {
                name: 'enum',
                value: [
                  { value: 'false', computed: !1 },
                  { value: "'desktop'", computed: !1 },
                  { value: "'all'", computed: !1 },
                ],
              },
              required: !1,
              description:
                "Set to `false` to hide arrows, 'desktop' to only show them\non non-touch devices, 'all' to always show arrows.",
            },
            autoplay: {
              defaultValue: { value: 'false', computed: !1 },
              type: { name: 'bool' },
              required: !1,
              description: '',
            },
            interval: {
              defaultValue: { value: '3000', computed: !1 },
              type: { name: 'number' },
              required: !1,
              description: '',
            },
            aboveAdornments: {
              type: { name: 'arrayOf', value: { name: 'element' } },
              required: !1,
              description: '',
            },
            belowAdornments: {
              type: { name: 'arrayOf', value: { name: 'element' } },
              required: !1,
              description: '',
            },
          },
        })
      __webpack_exports__.a = Carousel
      'undefined' != typeof STORYBOOK_REACT_CLASSES &&
        (STORYBOOK_REACT_CLASSES['src/carousel/Carousel.js'] = {
          name: 'Carousel',
          docgenInfo: Carousel.__docgenInfo,
          path: 'src/carousel/Carousel.js',
        })
    },
    124: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      var helpers_extends = __webpack_require__(8),
        extends_default = __webpack_require__.n(helpers_extends),
        defineProperty = __webpack_require__(6),
        defineProperty_default = __webpack_require__.n(defineProperty),
        slicedToArray = __webpack_require__(12),
        slicedToArray_default = __webpack_require__.n(slicedToArray),
        objectWithoutProperties = __webpack_require__(14),
        objectWithoutProperties_default = __webpack_require__.n(objectWithoutProperties),
        react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        prop_types = __webpack_require__(1),
        prop_types_default = __webpack_require__.n(prop_types),
        clsx_m = __webpack_require__(3),
        ExpansionPanel = __webpack_require__(1063),
        ExpansionPanelDetails = __webpack_require__(1048),
        ExpansionPanelSummary = __webpack_require__(1047),
        Typography = __webpack_require__(323),
        ExpandMore = __webpack_require__(317),
        ExpandMore_default = __webpack_require__.n(ExpandMore),
        makeStyles = __webpack_require__(224)
      var withDefaultHandler = __webpack_require__(142)
      __webpack_require__.d(__webpack_exports__, 'a', function() {
        return ExpandableSection
      })
      var useStyles = Object(makeStyles.a)(
        function(theme) {
          return {
            root: {
              boxShadow: 'none',
              borderBottom: '1px solid '.concat(theme.palette.divider),
              background: 'transparent',
              '&::before': { display: 'none' },
              '& > *:first-child': { padding: '0', minHeight: '0' },
            },
            margins: { padding: '0 '.concat(theme.spacing(2), 'px') },
            caption: { transition: 'opacity .2s linear' },
            expandedCaption: { opacity: 0 },
            largeTitle: { fontSize: '18px', fontWeight: 'bold', color: '#444' },
            details: {
              padding: theme.spacing(0, 0, 2, 0),
              display: 'flex',
              flexDirection: 'column',
            },
            summary: { '&:first-child': { padding: theme.spacing(1, 0) } },
            summaryContent: {
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              margin: 0,
              '[aria-expanded=true] > &': { margin: '0 !important' },
            },
            summaryExpanded: {},
            expandIconExpanded: {},
            withCollapseIcon: { transform: 'rotate(0deg) !important' },
            summaryIconWrap: { right: 0, padding: theme.spacing(0, 1) },
            expandedPanel: { '&$root': { margin: 0 } },
            title: {},
            expandIcon: {},
            collapseIcon: {},
          }
        },
        { name: 'RSFExpandableSection' },
      )
      function ExpandableSection(props) {
        var _clsx3,
          _clsx4,
          classes = props.classes,
          _props$children = props.children,
          children = void 0 === _props$children ? [] : _props$children,
          title = props.title,
          caption = props.caption,
          expanded = props.expanded,
          defaultExpanded = props.defaultExpanded,
          ExpandIcon = props.ExpandIcon,
          CollapseIcon = props.CollapseIcon,
          margins = props.margins,
          onChange = props.onChange,
          others = objectWithoutProperties_default()(props, [
            'classes',
            'children',
            'title',
            'caption',
            'expanded',
            'defaultExpanded',
            'ExpandIcon',
            'CollapseIcon',
            'margins',
            'onChange',
          ])
        classes = useStyles({ classes: classes })
        var _useStateFromProp = (function useStateFromProp(prop) {
            var state = Object(react.useState)(prop),
              _state = slicedToArray_default()(state, 2),
              setValue = (_state[0], _state[1]),
              mounted = Object(react.useRef)(!1)
            return (
              Object(react.useEffect)(
                function() {
                  mounted.current && setValue(prop), (mounted.current = !0)
                },
                [prop],
              ),
              state
            )
          })(expanded || defaultExpanded || !1),
          _useStateFromProp2 = slicedToArray_default()(_useStateFromProp, 2),
          expandedState = _useStateFromProp2[0],
          setExpandedState = _useStateFromProp2[1]
        var handleChange = Object(withDefaultHandler.a)(onChange, function(e, expanded) {
          null == props.expanded && setExpandedState(expanded)
        })
        return react_default.a.createElement(
          ExpansionPanel.a,
          extends_default()(
            {
              classes: {
                root: Object(clsx_m.a)(
                  ((_clsx3 = {}),
                  defineProperty_default()(_clsx3, classes.root, !0),
                  defineProperty_default()(_clsx3, classes.margins, margins),
                  _clsx3),
                ),
                expanded: classes.expandedPanel,
              },
              expanded: expandedState,
              defaultExpanded: defaultExpanded,
            },
            others,
            { onChange: handleChange },
          ),
          react_default.a.createElement(
            ExpansionPanelSummary.a,
            {
              expandIcon: expandedState
                ? react_default.a.createElement(CollapseIcon, { className: classes.collapseIcon })
                : react_default.a.createElement(ExpandIcon, { className: classes.expandIcon }),
              classes: (function getSummaryClasses() {
                var _clsx,
                  _clsx2,
                  result = {
                    root: Object(clsx_m.a)(
                      ((_clsx = {}),
                      defineProperty_default()(_clsx, classes.summary, !0),
                      defineProperty_default()(_clsx, classes.summaryExpanded, expandedState),
                      _clsx),
                    ),
                    content: classes.summaryContent,
                    expandIcon: Object(clsx_m.a)(
                      ((_clsx2 = {}),
                      defineProperty_default()(_clsx2, classes.summaryIconWrap, !0),
                      defineProperty_default()(_clsx2, classes.expandIconExpanded, expandedState),
                      _clsx2),
                    ),
                  }
                return (
                  CollapseIcon !== ExpandIcon && (result.expandIcon = classes.withCollapseIcon),
                  result
                )
              })(),
            },
            react_default.a.createElement(
              Typography.a,
              { variant: 'subtitle1', className: classes.title },
              title,
            ),
            caption &&
              react_default.a.createElement(
                Typography.a,
                {
                  variant: 'caption',
                  className: Object(clsx_m.a)(
                    ((_clsx4 = {}),
                    defineProperty_default()(_clsx4, classes.caption, !0),
                    defineProperty_default()(_clsx4, classes.expandedCaption, expandedState),
                    _clsx4),
                  ),
                },
                caption,
              ),
          ),
          react_default.a.createElement(
            ExpansionPanelDetails.a,
            { classes: { root: classes.details } },
            children,
          ),
        )
      }
      ;(ExpandableSection.displayName = 'ExpandableSection'),
        (ExpandableSection.propTypes = {
          title: prop_types_default.a.oneOfType([
            prop_types_default.a.string,
            prop_types_default.a.element,
          ]),
          caption: prop_types_default.a.oneOfType([
            prop_types_default.a.string,
            prop_types_default.a.element,
          ]),
          ExpandIcon: prop_types_default.a.object,
          CollapseIcon: prop_types_default.a.object,
          margins: prop_types_default.a.bool,
          expanded: prop_types_default.a.bool,
          defaultExpanded: prop_types_default.a.bool,
        }),
        (ExpandableSection.defaultProps = {
          margins: !0,
          ExpandIcon: ExpandMore_default.a,
          CollapseIcon: ExpandMore_default.a,
        }),
        (ExpandableSection.__docgenInfo = {
          description:
            'An expandable info section.  Example:\n\n```js\n <ExpandableSection title="Help" caption="Click here for more info">\n   <Typography>This is a help section</Typography>\n </ExpandableSection>\n```',
          methods: [],
          displayName: 'ExpandableSection',
          props: {
            margins: {
              defaultValue: { value: 'true', computed: !1 },
              type: { name: 'bool' },
              required: !1,
              description:
                'Set to false to remove the default left and right margins. Defaults to `true`.',
            },
            ExpandIcon: {
              defaultValue: { value: 'ExpandMoreIcon', computed: !0 },
              type: { name: 'object' },
              required: !1,
              description: 'The icon to use for collapsed groups',
            },
            CollapseIcon: {
              defaultValue: { value: 'ExpandMoreIcon', computed: !0 },
              type: { name: 'object' },
              required: !1,
              description: 'The icon to use for expanded groups',
            },
            title: {
              type: { name: 'union', value: [{ name: 'string' }, { name: 'element' }] },
              required: !1,
              description: 'The title for the header of the expandable section',
            },
            caption: {
              type: { name: 'union', value: [{ name: 'string' }, { name: 'element' }] },
              required: !1,
              description: 'Text to display to the right of the heading',
            },
            expanded: {
              type: { name: 'bool' },
              required: !1,
              description: 'Controls the expanded state.  Defaults to false',
            },
            defaultExpanded: {
              type: { name: 'bool' },
              required: !1,
              description:
                'Defaults the panel to being expanded, without controlling the state.  Defaults to false',
            },
          },
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/ExpandableSection.js'] = {
            name: 'ExpandableSection',
            docgenInfo: ExpandableSection.__docgenInfo,
            path: 'src/ExpandableSection.js',
          })
    },
    142: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.d(__webpack_exports__, 'a', function() {
        return withDefaultHandler
      })
      __webpack_require__(49)
      function withDefaultHandler(handler, defaultHandler) {
        return function(e) {
          for (
            var _len = arguments.length, args = Array(1 < _len ? _len - 1 : 0), _key = 1;
            _key < _len;
            _key++
          )
            args[_key - 1] = arguments[_key]
          handler && handler.apply(void 0, [e].concat(args)),
            e.defaultPrevented || defaultHandler.apply(void 0, [e].concat(args))
        }
      }
    },
    145: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        PWAContext = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__).a.createContext()
      __webpack_exports__.a = PWAContext
    },
    146: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__(33),
        __webpack_require__(56),
        __webpack_require__(36),
        __webpack_require__(75),
        __webpack_require__(43),
        __webpack_require__(88),
        __webpack_require__(89),
        __webpack_require__(42),
        __webpack_require__(37)
      var defineProperty = __webpack_require__(6),
        defineProperty_default = __webpack_require__.n(defineProperty),
        helpers_extends = __webpack_require__(8),
        extends_default = __webpack_require__.n(helpers_extends),
        objectWithoutProperties = __webpack_require__(14),
        objectWithoutProperties_default = __webpack_require__.n(objectWithoutProperties),
        react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        next_link = __webpack_require__(318),
        link_default = __webpack_require__.n(next_link),
        link_LinkContext = Object(react.createContext)(),
        prop_types = __webpack_require__(1),
        prop_types_default = __webpack_require__.n(prop_types),
        RootRef = __webpack_require__(1064)
      __webpack_require__(49),
        __webpack_require__(64),
        __webpack_require__(62),
        __webpack_require__(161),
        __webpack_require__(98),
        __webpack_require__(73),
        __webpack_require__(281),
        __webpack_require__(87),
        __webpack_require__(919)
      var regenerator = __webpack_require__(319),
        regenerator_default = __webpack_require__.n(regenerator),
        asyncToGenerator = (__webpack_require__(149), __webpack_require__(462)),
        asyncToGenerator_default = __webpack_require__.n(asyncToGenerator)
      function serviceWorker_prefetch() {
        return _prefetch.apply(this, arguments)
      }
      function _prefetch() {
        return (_prefetch = asyncToGenerator_default()(
          regenerator_default.a.mark(function _callee(url) {
            return regenerator_default.a.wrap(function(_context) {
              for (;;)
                switch ((_context.prev = _context.next)) {
                  case 0:
                    return (_context.next = 2), waitForServiceWorker()
                  case 2:
                    if (!_context.sent) {
                      _context.next = 4
                      break
                    }
                    navigator.serviceWorker.controller.postMessage({
                      action: 'cache-path',
                      path: url,
                      apiVersion:
                        Object({ NODE_ENV: 'production', NODE_PATH: '', PUBLIC_URL: '.' })
                          .RSF_API_VERSION || '1',
                    })
                  case 4:
                  case 'end':
                    return _context.stop()
                }
            }, _callee)
          }),
        )).apply(this, arguments)
      }
      function waitForServiceWorker() {
        return (
          !(!navigator.serviceWorker || !navigator.serviceWorker.ready) &&
          new Promise(function(resolve) {
            navigator.serviceWorker.ready.then(function() {
              if (navigator.serviceWorker.controller) return resolve(!0)
              navigator.serviceWorker.addEventListener('controllerchange', function() {
                return resolve(!0)
              })
            })
          })
        )
      }
      var withDefaultHandler = __webpack_require__(142)
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object)
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object)
          enumerableOnly &&
            (symbols = symbols.filter(function(sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable
            })),
            keys.push.apply(keys, symbols)
        }
        return keys
      }
      var Link = function(_ref) {
        var as = _ref.as,
          href = _ref.href,
          prefetch = _ref.prefetch,
          prefetchURL = _ref.prefetchURL,
          pageData = _ref.pageData,
          onClick = _ref.onClick,
          children = (_ref.anchorProps, _ref.children),
          other = objectWithoutProperties_default()(_ref, [
            'as',
            'href',
            'prefetch',
            'prefetchURL',
            'pageData',
            'onClick',
            'anchorProps',
            'children',
          ]),
          ref = Object(react.useRef)(null),
          linkPageData = Object(react.useContext)(link_LinkContext),
          handleClick = Object(withDefaultHandler.a)(onClick, function() {
            linkPageData && (linkPageData.current = pageData)
          })
        return (
          (function useIntersectionObserver(getRef, cb, deps) {
            Object(react.useEffect)(function() {
              var observer = new IntersectionObserver(function(entries) {
                  cb(0 < entries[0].intersectionRatio, function() {
                    return observer.disconnect()
                  })
                }),
                ref = getRef()
              if (ref && ref.current)
                return (
                  observer.observe(ref.current),
                  function() {
                    return observer.disconnect()
                  }
                )
            }, deps)
          })(
            function() {
              return as && 'visible' === prefetch ? ref : null
            },
            function(visible, disconnect) {
              visible && (disconnect(), serviceWorker_prefetch(prefetchURL || '/api'.concat(as)))
            },
            [as, prefetch],
          ),
          Object(react.useEffect)(
            function() {
              'always' === prefetch && serviceWorker_prefetch('/api'.concat(as))
            },
            [as],
          ),
          children && 'string' != typeof children
            ? react_default.a.createElement(
                RootRef.a,
                { rootRef: ref },
                react_default.a.createElement(
                  link_default.a,
                  { href: href, prefetch: !1, as: as, passHref: !0 },
                  react_default.a.cloneElement(
                    children,
                    (function _objectSpread(target) {
                      for (var source, i = 1; i < arguments.length; i++)
                        (source = null != arguments[i] ? arguments[i] : {}),
                          i % 2
                            ? ownKeys(Object(source), !0).forEach(function(key) {
                                defineProperty_default()(target, key, source[key])
                              })
                            : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(
                                target,
                                Object.getOwnPropertyDescriptors(source),
                              )
                            : ownKeys(Object(source)).forEach(function(key) {
                                Object.defineProperty(
                                  target,
                                  key,
                                  Object.getOwnPropertyDescriptor(source, key),
                                )
                              })
                      return target
                    })({ onClick: handleClick }, other),
                  ),
                ),
              )
            : react_default.a.createElement(
                link_default.a,
                { href: href, prefetch: !1, as: as, passHref: !0 },
                react_default.a.createElement(
                  'a',
                  extends_default()({ ref: ref }, other, { onClick: handleClick }),
                  children,
                ),
              )
        )
      }
      ;(Link.propTypes = {
        as: prop_types_default.a.string,
        href: prop_types_default.a.string.isRequired,
        prefetch: prop_types_default.a.oneOf(['always', 'visible', !1]),
        prefetchURL: prop_types_default.a.string,
        pageData: prop_types_default.a.object,
      }),
        (Link.__docgenInfo = {
          description:
            'Use this component for all Links in your React Storefront app.  You can\npass props to display on the next page while data is loading from the server\nusing the `pageData` prop. This component accepts all props that would\nnormally be passed to a Next.js `Link` component.  All other props are spread\nto the underlying HTML anchor element.\n\nExample:\n\n```js\nimport Link from \'react-storefront/link/Link\'\n\n<Link href="/p/[productId]" as={`/p/${product.id}`} pageData={{ product }}>\n  {product.name}\n</Link>\n```',
          methods: [],
          displayName: 'Link',
          props: {
            as: {
              type: { name: 'string' },
              required: !1,
              description:
                "The URL path for the underlying anchor element's href.  This is required for dynamic routes.",
            },
            href: {
              type: { name: 'string' },
              required: !0,
              description: 'The next.js route pattern',
            },
            prefetch: {
              type: {
                name: 'enum',
                value: [
                  { value: "'always'", computed: !1 },
                  { value: "'visible'", computed: !1 },
                  { value: 'false', computed: !1 },
                ],
              },
              required: !1,
              description:
                'Set to `visible` to prefetch the JSON data for the destination page component when the link\nis scrolled into the viewport.  Set to `always` to prefetch the data immediately. Set to\n`false` to never prefetch.',
            },
            prefetchURL: {
              type: { name: 'string' },
              required: !1,
              description: 'The URL to prefetch.  If omitted, /api/{href} will be prefetched.',
            },
            pageData: {
              type: { name: 'object' },
              required: !1,
              description:
                'Data to be added to the `pageData` key returned by `react-storefront/hooks/useLazyStore` in the\ndestination page component.  Use this to display partial data in the skeleton while the full dataset\nis fetched from the server.',
            },
          },
        })
      __webpack_exports__.a = Link
      'undefined' != typeof STORYBOOK_REACT_CLASSES &&
        (STORYBOOK_REACT_CLASSES['src/link/Link.js'] = {
          name: 'Link',
          docgenInfo: Link.__docgenInfo,
          path: 'src/link/Link.js',
        })
    },
    170: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      ;(function(setImmediate) {
        __webpack_require__(459), __webpack_require__(395)
        var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8),
          _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
            _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__,
          ),
          _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            12,
          ),
          _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
            _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__,
          ),
          _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
            14,
          ),
          _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
            _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__,
          ),
          react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0),
          react__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_5__,
          ),
          _link_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(146),
          _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(224),
          _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1017),
          _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1015),
          _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1016),
          _material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1018),
          _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1014),
          prop_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1),
          prop_types__WEBPACK_IMPORTED_MODULE_13___default = __webpack_require__.n(
            prop_types__WEBPACK_IMPORTED_MODULE_13__,
          ),
          next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(321),
          next_router__WEBPACK_IMPORTED_MODULE_14___default = __webpack_require__.n(
            next_router__WEBPACK_IMPORTED_MODULE_14__,
          ),
          useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__.a)(
            function(theme) {
              return {
                popover: { pointerEvents: 'none' },
                tab: { paddingLeft: theme.spacing(2), paddingRight: theme.spacing(2) },
                link: { textDecoration: 'none', color: 'inherit', fontWeight: 100 },
                menu: { zIndex: theme.zIndex.appBar },
                ripple: { zIndex: 2 },
                paper: {
                  pointerEvents: 'all',
                  paddingTop: 2,
                  marginTop: -2,
                  background: 'transparent',
                  boxShadow: '0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14)',
                },
                innerPaper: { borderTop: '1px solid '.concat(theme.palette.divider) },
              }
            },
            { name: 'RSFNavTab' },
          )
        function NavTab(_ref) {
          var classes = _ref.classes,
            href = _ref.href,
            as = _ref.as,
            prefetch = _ref.prefetch,
            children = _ref.children,
            props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4___default()(
              _ref,
              ['classes', 'href', 'as', 'prefetch', 'children'],
            )
          classes = useStyles({ classes: classes })
          var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__.useState)(!1),
            _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(
              _useState,
              2,
            ),
            overTab = _useState2[0],
            setOverTab = _useState2[1],
            _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__.useState)(!1),
            _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(
              _useState3,
              2,
            ),
            overMenu = _useState4[0],
            setOverMenu = _useState4[1],
            _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__.useState)(null),
            _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(
              _useState5,
              2,
            ),
            anchorEl = _useState6[0],
            setAnchorEl = _useState6[1],
            _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_5__.useState)(!1),
            _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(
              _useState7,
              2,
            ),
            focused = _useState8[0],
            setFocused = _useState8[1],
            showMenu = Object(react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(function(event) {
              setOverTab(!0), setAnchorEl(event.currentTarget)
            }, []),
            hideMenu = Object(react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(function() {
              return setImmediate(function() {
                return setOverTab(!1)
              })
            }, []),
            leaveMenu = Object(react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(function() {
              return setImmediate(function() {
                return setOverMenu(!1)
              })
            }, []),
            enterMenu = Object(react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(function() {
              return setOverMenu(!0)
            }, []),
            menuItemBlurPending = Object(react__WEBPACK_IMPORTED_MODULE_5__.useRef)(!1),
            handleTabKeyDown = Object(react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(function(e) {
              'Enter' === e.key &&
                (e.preventDefault(), setAnchorEl(e.currentTarget), setFocused(!0))
            }, []),
            handleMenuItemFocus = Object(react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(
              function() {
                ;(menuItemBlurPending.current = !1), focused || setFocused(!0)
              },
              [focused],
            ),
            handleMenuItemBlur = Object(react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(function() {
              ;(menuItemBlurPending.current = !0),
                setImmediate(function() {
                  menuItemBlurPending.current && setFocused(!1)
                })
            }, []),
            open = overTab || overMenu || focused
          return (
            Object(react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(
              function() {
                var onHistoryChange = function() {
                    return handleMenuItemBlur()
                  },
                  unsubscribe = function() {
                    return next_router__WEBPACK_IMPORTED_MODULE_14___default.a.events.off(
                      'routeChangeStart',
                      onHistoryChange,
                    )
                  }
                return (
                  open
                    ? next_router__WEBPACK_IMPORTED_MODULE_14___default.a.events.on(
                        'routeChangeStart',
                        onHistoryChange,
                      )
                    : unsubscribe(),
                  unsubscribe
                )
              },
              [open],
            ),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment,
              null,
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _link_Link__WEBPACK_IMPORTED_MODULE_6__.a,
                {
                  className: classes.link,
                  href: href,
                  as: as,
                  onClick: hideMenu,
                  onMouseEnter: showMenu,
                  onMouseLeave: hideMenu,
                  prefetch: prefetch,
                },
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_10__.a,
                  _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()(
                    {
                      onKeyDown: handleTabKeyDown,
                      classes: { root: classes.tab },
                      'aria-haspopup': null != children,
                      'aria-expanded': open,
                    },
                    props,
                    { TouchRippleProps: { classes: { root: classes.ripple } } },
                  ),
                ),
              ),
              children
                ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                    _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_8__.a,
                    { xsDown: !0 },
                    react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                      _material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_11__.a,
                      {
                        open: open,
                        className: classes.popover,
                        anchorEl: anchorEl,
                        anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
                        TransitionComponent: _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_9__.a,
                        transformOrigin: { vertical: 'top', horizontal: 'center' },
                        PaperProps: {
                          onMouseEnter: enterMenu,
                          onMouseLeave: leaveMenu,
                          onClick: leaveMenu,
                          square: !0,
                          className: classes.paper,
                        },
                      },
                      react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                        _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_12__.a,
                        {
                          className: classes.innerPaper,
                          onBlurCapture: handleMenuItemBlur,
                          onFocusCapture: handleMenuItemFocus,
                          square: !0,
                        },
                        children,
                      ),
                    ),
                  )
                : null,
            )
          )
        }
        ;(NavTab.propTypes = {
          as: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.string.isRequired,
          href: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.string.isRequired,
          classes: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.object,
        }),
          (NavTab.__docgenInfo = {
            description:
              'A single navigational tab, which links to another page in the app based on the `as` and `href` props.\nChildren are displayed in a menu that is shown on mouse over on desktop devices.\n\nExample:\n\n```js\n <NavTab href="/c/[categoryId]" as="/c/shirts" label="Shirts">\n   <div style={{ padding: 20 }}>\n     <Link href="/s/[subcategoryId]" as="/s/long-sleeve-shirts">Long Sleeve Shirts</Link>\n     <Link href="/s/[subcategoryId]" as="/s/turtlenecks">Turtlenecks</Link>\n     <Link href="/s/[subcategoryId]" as="/s/tees">Tee Shirts</Link>\n   </div>\n </NavTab>\n```\n\nAccessibility:\n\nThis component supports keyboard navigation.  The user can open the menu by pressing the enter key when the NavTab is focused.',
            methods: [],
            displayName: 'NavTab',
            props: {
              as: { type: { name: 'string' }, required: !0, description: 'The link path' },
              href: {
                type: { name: 'string' },
                required: !0,
                description: 'The next.js route pattern',
              },
              classes: {
                type: { name: 'object' },
                required: !1,
                description: 'An object of style classes to apply.',
              },
            },
          }),
          (__webpack_exports__.a = react__WEBPACK_IMPORTED_MODULE_5___default.a.memo(NavTab)),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/nav/NavTab.js'] = {
              name: 'NavTab',
              docgenInfo: NavTab.__docgenInfo,
              path: 'src/nav/NavTab.js',
            })
      }.call(this, __webpack_require__(393).setImmediate))
    },
    220: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__(33),
        __webpack_require__(56),
        __webpack_require__(36),
        __webpack_require__(75),
        __webpack_require__(43),
        __webpack_require__(88),
        __webpack_require__(89),
        __webpack_require__(42),
        __webpack_require__(37)
      var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8),
        _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_9___default = __webpack_require__.n(
          _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_9__,
        ),
        _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          14,
        ),
        _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_10___default = __webpack_require__.n(
          _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_10__,
        ),
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          6,
        ),
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_11___default = __webpack_require__.n(
          _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_11__,
        ),
        react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_12___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_12__,
        ),
        _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(224),
        _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(487),
        prop_types__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1),
        prop_types__WEBPACK_IMPORTED_MODULE_15___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_15__,
        )
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object)
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object)
          enumerableOnly &&
            (symbols = symbols.filter(function(sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable
            })),
            keys.push.apply(keys, symbols)
        }
        return keys
      }
      function _objectSpread(target) {
        for (var source, i = 1; i < arguments.length; i++)
          (source = null != arguments[i] ? arguments[i] : {}),
            i % 2
              ? ownKeys(Object(source), !0).forEach(function(key) {
                  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_11___default()(
                    target,
                    key,
                    source[key],
                  )
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
              : ownKeys(Object(source)).forEach(function(key) {
                  Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key))
                })
        return target
      }
      var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__.a)(
          function(theme) {
            return {
              wrap: _objectSpread(
                {
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                },
                theme.typography.caption,
              ),
            }
          },
          { name: 'RSFToolbarButton' },
        ),
        ToolbarButton = Object(react__WEBPACK_IMPORTED_MODULE_12__.forwardRef)(function(_ref, ref) {
          var icon = _ref.icon,
            label = _ref.label,
            _ref$classes = _ref.classes,
            classes = void 0 === _ref$classes ? {} : _ref$classes,
            children = _ref.children,
            others = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_10___default()(
              _ref,
              ['icon', 'label', 'classes', 'children'],
            ),
            _classes = classes,
            wrap = _classes.wrap,
            buttonClasses = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_10___default()(
              _classes,
              ['wrap'],
            )
          return (
            (classes = useStyles({ classes: { wrap: wrap } })),
            react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(
              _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14__.a,
              _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_9___default()(
                { ref: ref, classes: buttonClasses },
                others,
              ),
              react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(
                'div',
                { className: classes.wrap },
                icon,
                react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement('div', null, label),
              ),
              children,
            )
          )
        })
      ;(ToolbarButton.propTypes = {
        icon: prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.element,
        label: prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.oneOfType([
          prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.string,
          prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.element,
        ]),
      }),
        (ToolbarButton.__docgenInfo = {
          description:
            'A toolbar button with optional label.  Use these in your AppBar. All additional\nprops are spread to the underlying material-ui IconButton.',
          methods: [],
          props: {
            classes: { defaultValue: { value: '{}', computed: !1 }, required: !1 },
            icon: { type: { name: 'element' }, required: !1, description: 'The icon' },
            label: {
              type: { name: 'union', value: [{ name: 'string' }, { name: 'element' }] },
              required: !1,
              description: 'The label text (optional)',
            },
          },
        }),
        (__webpack_exports__.a = ToolbarButton),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/ToolbarButton.js'] = {
            name: 'ToolbarButton',
            docgenInfo: ToolbarButton.__docgenInfo,
            path: 'src/ToolbarButton.js',
          })
    },
    223: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.d(__webpack_exports__, 'a', function() {
        return Hbox
      }),
        __webpack_require__.d(__webpack_exports__, 'b', function() {
          return Vbox
        })
      __webpack_require__(33),
        __webpack_require__(56),
        __webpack_require__(36),
        __webpack_require__(75),
        __webpack_require__(43),
        __webpack_require__(88),
        __webpack_require__(89),
        __webpack_require__(42),
        __webpack_require__(98),
        __webpack_require__(996),
        __webpack_require__(37)
      var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          6,
        ),
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_11___default = __webpack_require__.n(
          _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_11__,
        ),
        _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          14,
        ),
        _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_12___default = __webpack_require__.n(
          _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_12__,
        ),
        react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_13___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_13__,
        ),
        clsx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3),
        prop_types__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1),
        prop_types__WEBPACK_IMPORTED_MODULE_15___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_15__,
        ),
        _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(224)
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object)
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object)
          enumerableOnly &&
            (symbols = symbols.filter(function(sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable
            })),
            keys.push.apply(keys, symbols)
        }
        return keys
      }
      function _objectSpread(target) {
        for (var source, i = 1; i < arguments.length; i++)
          (source = null != arguments[i] ? arguments[i] : {}),
            i % 2
              ? ownKeys(Object(source), !0).forEach(function(key) {
                  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_11___default()(
                    target,
                    key,
                    source[key],
                  )
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
              : ownKeys(Object(source)).forEach(function(key) {
                  Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key))
                })
        return target
      }
      var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_16__.a)(function() {
        return {
          root: { display: 'flex' },
          split: { justifyContent: 'space-between', alignItems: 'center' },
        }
      }, 'RSFBox')
      function Box(_ref) {
        var className = _ref.className,
          classes = _ref.classes,
          _ref$split = _ref.split,
          split = void 0 !== _ref$split && _ref$split,
          children = _ref.children,
          style = _ref.style,
          align = _ref.align,
          justify = _ref.justify,
          other = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_12___default()(
            _ref,
            ['className', 'classes', 'split', 'children', 'style', 'align', 'justify'],
          )
        return (
          (classes = useStyles({ classes: classes })),
          react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(
            'div',
            {
              className: Object(clsx__WEBPACK_IMPORTED_MODULE_14__.a)(
                classes.root,
                className,
                _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_11___default()(
                  {},
                  classes.split,
                  split,
                ),
              ),
              style: _objectSpread(
                { alignItems: align, justifyContent: justify },
                other,
                {},
                style,
              ),
            },
            children,
          )
        )
      }
      function Hbox(props) {
        return (
          (props = _objectSpread({}, props, { flexDirection: 'row' })),
          react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(Box, props)
        )
      }
      function Vbox(props) {
        return (
          (props = _objectSpread({}, props, { flexDirection: 'column' })),
          react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(Box, props)
        )
      }
      ;(Box.displayName = 'Box'),
        (Box.propTypes = {
          classes: prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.object,
          split: prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.bool,
          align: prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.oneOf([
            'flex-start',
            'flex-end',
            'center',
            'stretch',
            'baseline',
          ]),
          justify: prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.oneOf([
            'flex-start',
            'flex-end',
            'center',
            'space-around',
            'space-between',
            'initial',
            'inherit',
            'stretch',
            'baseline',
          ]),
        }),
        (Box.defaultProps = { align: 'center', justify: 'flex-start' }),
        (Hbox.displayName = 'Hbox'),
        (Hbox.propTypes = {
          classes: prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.object,
          split: prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.bool,
          align: prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.oneOf([
            'flex-start',
            'flex-end',
            'center',
            'stretch',
            'baseline',
          ]),
          justify: prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.oneOf([
            'flex-start',
            'flex-end',
            'center',
            'space-around',
            'space-between',
            'initial',
            'inherit',
            'stretch',
            'baseline',
          ]),
        }),
        (Hbox.defaultProps = { align: 'center', justify: 'flex-start' }),
        (Vbox.displayName = 'Vbox'),
        (Vbox.propTypes = {
          classes: prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.object,
          align: prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.oneOf([
            'flex-start',
            'flex-end',
            'center',
            'stretch',
            'baseline',
          ]),
          justify: prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.oneOf([
            'flex-start',
            'flex-end',
            'center',
            'space-around',
            'space-between',
            'initial',
            'inherit',
            'stretch',
            'baseline',
          ]),
        }),
        (Vbox.defaultProps = { align: 'center', justify: 'flex-start' }),
        (Box.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Box',
          props: {
            split: {
              defaultValue: { value: 'false', computed: !1 },
              type: { name: 'bool' },
              required: !1,
              description:
                "True to split items on opposite sides of the box by applying justify-content: 'space-between'",
            },
            align: {
              defaultValue: { value: "'center'", computed: !1 },
              type: {
                name: 'enum',
                value: [
                  { value: "'flex-start'", computed: !1 },
                  { value: "'flex-end'", computed: !1 },
                  { value: "'center'", computed: !1 },
                  { value: "'stretch'", computed: !1 },
                  { value: "'baseline'", computed: !1 },
                ],
              },
              required: !1,
              description: 'CSS value for align-items',
            },
            justify: {
              defaultValue: { value: "'flex-start'", computed: !1 },
              type: {
                name: 'enum',
                value: [
                  { value: "'flex-start'", computed: !1 },
                  { value: "'flex-end'", computed: !1 },
                  { value: "'center'", computed: !1 },
                  { value: "'space-around'", computed: !1 },
                  { value: "'space-between'", computed: !1 },
                  { value: "'initial'", computed: !1 },
                  { value: "'inherit'", computed: !1 },
                  { value: "'stretch'", computed: !1 },
                  { value: "'baseline'", computed: !1 },
                ],
              },
              required: !1,
              description: 'CSS value for justify-content',
            },
            classes: {
              type: { name: 'object' },
              required: !1,
              description: 'CSS classes to apply',
            },
          },
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/Box.js'] = {
            name: 'Box',
            docgenInfo: Box.__docgenInfo,
            path: 'src/Box.js',
          }),
        (Hbox.__docgenInfo = {
          description:
            'A flex container with horizontal layout. All additional props are spread to the style\nof the underlying div.',
          methods: [],
          displayName: 'Hbox',
          props: {
            align: {
              defaultValue: { value: "'center'", computed: !1 },
              type: {
                name: 'enum',
                value: [
                  { value: "'flex-start'", computed: !1 },
                  { value: "'flex-end'", computed: !1 },
                  { value: "'center'", computed: !1 },
                  { value: "'stretch'", computed: !1 },
                  { value: "'baseline'", computed: !1 },
                ],
              },
              required: !1,
              description: 'CSS value for align-items',
            },
            justify: {
              defaultValue: { value: "'flex-start'", computed: !1 },
              type: {
                name: 'enum',
                value: [
                  { value: "'flex-start'", computed: !1 },
                  { value: "'flex-end'", computed: !1 },
                  { value: "'center'", computed: !1 },
                  { value: "'space-around'", computed: !1 },
                  { value: "'space-between'", computed: !1 },
                  { value: "'initial'", computed: !1 },
                  { value: "'inherit'", computed: !1 },
                  { value: "'stretch'", computed: !1 },
                  { value: "'baseline'", computed: !1 },
                ],
              },
              required: !1,
              description: 'CSS value for justify-content',
            },
            classes: {
              type: { name: 'object' },
              required: !1,
              description: 'CSS classes to apply',
            },
            split: {
              type: { name: 'bool' },
              required: !1,
              description:
                "True to split items on opposite sides of the box by applying justify-content: 'space-between'",
            },
          },
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/Box.js'] = {
            name: 'Hbox',
            docgenInfo: Hbox.__docgenInfo,
            path: 'src/Box.js',
          }),
        (Vbox.__docgenInfo = {
          description:
            'A flex container with vertical layout. All additional props are spread to\nthe style of the underlying div.',
          methods: [],
          displayName: 'Vbox',
          props: {
            align: {
              defaultValue: { value: "'center'", computed: !1 },
              type: {
                name: 'enum',
                value: [
                  { value: "'flex-start'", computed: !1 },
                  { value: "'flex-end'", computed: !1 },
                  { value: "'center'", computed: !1 },
                  { value: "'stretch'", computed: !1 },
                  { value: "'baseline'", computed: !1 },
                ],
              },
              required: !1,
              description: 'CSS value for align-items',
            },
            justify: {
              defaultValue: { value: "'flex-start'", computed: !1 },
              type: {
                name: 'enum',
                value: [
                  { value: "'flex-start'", computed: !1 },
                  { value: "'flex-end'", computed: !1 },
                  { value: "'center'", computed: !1 },
                  { value: "'space-around'", computed: !1 },
                  { value: "'space-between'", computed: !1 },
                  { value: "'initial'", computed: !1 },
                  { value: "'inherit'", computed: !1 },
                  { value: "'stretch'", computed: !1 },
                  { value: "'baseline'", computed: !1 },
                ],
              },
              required: !1,
              description: 'CSS value for justify-content',
            },
            classes: {
              type: { name: 'object' },
              required: !1,
              description: 'CSS classes to apply',
            },
          },
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/Box.js'] = {
            name: 'Vbox',
            docgenInfo: Vbox.__docgenInfo,
            path: 'src/Box.js',
          })
    },
    46: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.d(__webpack_exports__, 'a', function() {
        return Image
      })
      __webpack_require__(284), __webpack_require__(270)
      var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8),
        _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
          _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__,
        ),
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6),
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
          _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__,
        ),
        _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12),
        _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
          _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__,
        ),
        _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          14,
        ),
        _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
          _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__,
        ),
        react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_6__,
        ),
        prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1),
        prop_types__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_7__,
        ),
        clsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3),
        react_visibility_sensor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(221),
        react_visibility_sensor__WEBPACK_IMPORTED_MODULE_9___default = __webpack_require__.n(
          react_visibility_sensor__WEBPACK_IMPORTED_MODULE_9__,
        ),
        _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(224),
        _PWAContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(145),
        useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__.a)(
          function() {
            return {
              image: {},
              root: {
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: 1,
                minWidth: 1,
              },
              fit: {
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: 'block',
                width: '100%',
                height: '100%',
              },
              contain: { '& img': { objectFit: 'contain', maxHeight: '100%', maxWidth: '100%' } },
              fill: {
                width: '100%',
                height: '100%',
                '& img': {
                  display: 'block',
                  objectFit: 'contain',
                  maxHeight: '100%',
                  maxWidth: '100%',
                  width: '100%',
                  height: '100%',
                },
              },
            }
          },
          { name: 'RSFImage' },
        )
      function Image(_ref) {
        var _clsx,
          _clsx2,
          lazy = _ref.lazy,
          lazyOffset = _ref.lazyOffset,
          notFoundSrc = _ref.notFoundSrc,
          height = _ref.height,
          width = _ref.width,
          fill = _ref.fill,
          contain = (_ref.bind, _ref.contain),
          classes = _ref.classes,
          className = _ref.className,
          aspectRatio = _ref.aspectRatio,
          alt = _ref.alt,
          src = _ref.src,
          ImgElement =
            (_ref.amp,
            _ref.optimize,
            _ref.onChange,
            _ref.onSrcChange,
            _ref.onAltChange,
            _ref.value,
            _ref.ImgElement),
          imgAttributes = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5___default()(
            _ref,
            [
              'lazy',
              'lazyOffset',
              'notFoundSrc',
              'height',
              'width',
              'fill',
              'bind',
              'contain',
              'classes',
              'className',
              'aspectRatio',
              'alt',
              'src',
              'amp',
              'optimize',
              'onChange',
              'onSrcChange',
              'onAltChange',
              'value',
              'ImgElement',
            ],
          )
        classes = useStyles({ classes: classes })
        var hydrating = (
            Object(react__WEBPACK_IMPORTED_MODULE_6__.useContext)(
              _PWAContext__WEBPACK_IMPORTED_MODULE_11__.a,
            ) || {}
          ).hydrating,
          _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__.useState)(
            !1 === lazy || ('ssr' === lazy && !hydrating),
          ),
          _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4___default()(
            _useState,
            2,
          ),
          loaded = _useState2[0],
          setLoaded = _useState2[1],
          _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_6__.useState)(!1),
          _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4___default()(
            _useState3,
            2,
          ),
          primaryNotFound = _useState4[0],
          setPrimaryNotFound = _useState4[1],
          ref = Object(react__WEBPACK_IMPORTED_MODULE_6__.useRef)()
        if (
          (Object(react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function() {
            var img = ref.current
            img && img.complete && 0 === img.naturalWidth && setPrimaryNotFound(!0)
          }, []),
          null == src)
        )
          return null
        ;(contain = contain || aspectRatio), primaryNotFound && notFoundSrc && (src = notFoundSrc)
        var result = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
          'div',
          {
            className: Object(clsx__WEBPACK_IMPORTED_MODULE_8__.a)(
              className,
              ((_clsx = {}),
              _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(
                _clsx,
                classes.root,
                !0,
              ),
              _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(
                _clsx,
                classes.contain,
                contain,
              ),
              _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(
                _clsx,
                classes.fill,
                fill,
              ),
              _clsx),
            ),
          },
          aspectRatio &&
            react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement('div', {
              style: { paddingTop: ''.concat(100 * aspectRatio, '%') },
            }),
          loaded &&
            react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
              ImgElement,
              _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()(
                {
                  ref: ref,
                  src: src,
                  key: src,
                  height: height,
                  width: width,
                  alt: alt,
                  className: Object(clsx__WEBPACK_IMPORTED_MODULE_8__.a)(
                    ((_clsx2 = {}),
                    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(
                      _clsx2,
                      classes.image,
                      !0,
                    ),
                    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(
                      _clsx2,
                      classes.fit,
                      null != aspectRatio,
                    ),
                    _clsx2),
                  ),
                },
                imgAttributes,
                {
                  onError: function onError() {
                    return setPrimaryNotFound(!0)
                  },
                },
              ),
            ),
        )
        return (result = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
          react_visibility_sensor__WEBPACK_IMPORTED_MODULE_9___default.a,
          {
            active: !loaded,
            onChange: function(visible) {
              !loaded && visible && setLoaded(!0)
            },
            partialVisibility: !0,
            offset: { top: -lazyOffset, bottom: -lazyOffset },
          },
          result,
        ))
      }
      ;(Image.propTypes = {
        src: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
        notFoundSrc: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
        aspectRatio: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,
        contain: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
        fill: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
        lazy: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOf(['ssr', !0, !1]),
        lazyOffset: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,
      }),
        (Image.defaultProps = {
          contain: !1,
          fill: !1,
          lazy: !1,
          lazyOffset: 100,
          ImgElement: 'img',
        }),
        (Image.__docgenInfo = {
          description:
            'Displays an image that can be lazy loaded and made to auto-scale to fit the parent element\nby setting the `fill` prop, or grow/shrink while maintaining a given aspect ratio\nby setting the `aspectRatio` prop.',
          methods: [],
          displayName: 'Image',
          props: {
            contain: {
              defaultValue: { value: 'false', computed: !1 },
              type: { name: 'bool' },
              required: !1,
              description:
                "Set to true to apply object-fit:contain to the image so that it automatically\nfits within the element's height and width.",
            },
            fill: {
              defaultValue: { value: 'false', computed: !1 },
              type: { name: 'bool' },
              required: !1,
              description:
                "The same as contain, except images are stretched to fill the element's height and width.",
            },
            lazy: {
              defaultValue: { value: 'false', computed: !1 },
              type: {
                name: 'enum',
                value: [
                  { value: "'ssr'", computed: !1 },
                  { value: 'true', computed: !1 },
                  { value: 'false', computed: !1 },
                ],
              },
              required: !1,
              description:
                'Set to `true` to wait until the image enters the viewport before loading it. Set to `"ssr"` to\nonly lazy load images during server side rendering.',
            },
            lazyOffset: {
              defaultValue: { value: '100', computed: !1 },
              type: { name: 'number' },
              required: !1,
              description:
                'Sets the minimum amount of pixels the image can be scrolled out of view before it\nis lazy loaded.  Defaults to 100.  You must set `lazy` in order for this setting to take effect.',
            },
            ImgElement: { defaultValue: { value: "'img'", computed: !1 }, required: !1 },
            src: { type: { name: 'string' }, required: !1, description: 'The URL for the image' },
            notFoundSrc: {
              type: { name: 'string' },
              required: !1,
              description: 'The URL of the image to use in case the primary image fails to load',
            },
            aspectRatio: {
              type: { name: 'number' },
              required: !1,
              description:
                'The ratio of height/width as a float.  For example: 1 when the height and width match,\n0.5 when height is half of the width.',
            },
          },
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/Image.js'] = {
            name: 'Image',
            docgenInfo: Image.__docgenInfo,
            path: 'src/Image.js',
          })
    },
    495: function(module, exports, __webpack_require__) {
      __webpack_require__(496),
        __webpack_require__(638),
        (module.exports = __webpack_require__(639))
    },
    557: function(module, exports) {},
    639: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var _storybook_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(460)
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(
            __webpack_require__(819),
            module,
          )
        }.call(this, __webpack_require__(640)(module))
    },
    819: function(module, exports, __webpack_require__) {
      var map = {
        './Accordion.stories.js': 1011,
        './ActionButton.stories.js': 1006,
        './AutoScrollToNewChildren.stories.js': 1009,
        './BackToTop.stories.js': 1007,
        './Breadcrumbs.stories.js': 1005,
        './Carousel.stories.js': 923,
        './CartButton.stories.js': 1004,
        './CheckboxFilterGroup.stories.js': 1e3,
        './ExpandableSection.stories.js': 980,
        './Image.stories.js': 981,
        './Lazy.stories.js': 1002,
        './MediaCarousel.stories.js': 998,
        './NavTabs.stories.js': 995,
        './Offline.stories.js': 1001,
        './ProductOptionSelector.stories.js': 999,
        './QuantitySelector.stories.js': 1003,
        './Rating.stories.js': 1008,
        './ToolbarButton.stories.js': 997,
      }
      function webpackContext(req) {
        var id = webpackContextResolve(req)
        return __webpack_require__(id)
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'")
          throw ((e.code = 'MODULE_NOT_FOUND'), e)
        }
        return map[req]
      }
      ;(webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map)
      }),
        (webpackContext.resolve = webpackContextResolve),
        (module.exports = webpackContext),
        (webpackContext.id = 819)
    },
    923: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'withArrows', function() {
          return withArrows
        }),
        __webpack_require__.d(__webpack_exports__, 'noIndicators', function() {
          return noIndicators
        }),
        __webpack_require__.d(__webpack_exports__, 'autoplay', function() {
          return autoplay
        }),
        __webpack_require__.d(__webpack_exports__, 'customInterval', function() {
          return customInterval
        })
      __webpack_require__(33),
        __webpack_require__(56),
        __webpack_require__(36),
        __webpack_require__(75),
        __webpack_require__(43),
        __webpack_require__(88),
        __webpack_require__(89),
        __webpack_require__(42),
        __webpack_require__(37)
      var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          6,
        ),
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default = __webpack_require__.n(
          _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__,
        ),
        react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_10___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_10__,
        ),
        _src_carousel_Carousel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(123)
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object)
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object)
          enumerableOnly &&
            (symbols = symbols.filter(function(sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable
            })),
            keys.push.apply(keys, symbols)
        }
        return keys
      }
      function _objectSpread(target) {
        for (var source, i = 1; i < arguments.length; i++)
          (source = null != arguments[i] ? arguments[i] : {}),
            i % 2
              ? ownKeys(Object(source), !0).forEach(function(key) {
                  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(
                    target,
                    key,
                    source[key],
                  )
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
              : ownKeys(Object(source)).forEach(function(key) {
                  Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key))
                })
        return target
      }
      __webpack_exports__.default = { title: 'Carousel' }
      var slideStyle = {
          width: '100%',
          height: 300,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontFamily: 'monospace',
          fontSize: 32,
          color: 'white',
        },
        slides = [
          react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(
            'div',
            { style: _objectSpread({}, slideStyle, { background: '#eb3b5a' }) },
            'Red',
          ),
          react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(
            'div',
            { style: _objectSpread({}, slideStyle, { background: '#2d98da' }) },
            'Blue',
          ),
          react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(
            'div',
            { style: _objectSpread({}, slideStyle, { background: '#26de81' }) },
            'Green',
          ),
        ],
        _ref = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(
          _src_carousel_Carousel__WEBPACK_IMPORTED_MODULE_11__.a,
          { arrows: 'all' },
          slides,
        ),
        withArrows = function() {
          return _ref
        }
      withArrows.displayName = 'withArrows'
      var _ref2 = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(
          _src_carousel_Carousel__WEBPACK_IMPORTED_MODULE_11__.a,
          { indicators: !1 },
          slides,
        ),
        noIndicators = function() {
          return _ref2
        }
      noIndicators.displayName = 'noIndicators'
      var _ref3 = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(
          _src_carousel_Carousel__WEBPACK_IMPORTED_MODULE_11__.a,
          { autoplay: !0 },
          slides,
        ),
        autoplay = function() {
          return _ref3
        }
      autoplay.displayName = 'autoplay'
      var _ref4 = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(
          _src_carousel_Carousel__WEBPACK_IMPORTED_MODULE_11__.a,
          { autoplay: !0, interval: 1e3 },
          slides,
        ),
        customInterval = function() {
          return _ref4
        }
      ;(customInterval.displayName = 'customInterval'),
        (withArrows.__docgenInfo = { description: '', methods: [], displayName: 'withArrows' }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['.storybook/stories/Carousel.stories.js'] = {
            name: 'withArrows',
            docgenInfo: withArrows.__docgenInfo,
            path: '.storybook/stories/Carousel.stories.js',
          }),
        (noIndicators.__docgenInfo = { description: '', methods: [], displayName: 'noIndicators' }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['.storybook/stories/Carousel.stories.js'] = {
            name: 'noIndicators',
            docgenInfo: noIndicators.__docgenInfo,
            path: '.storybook/stories/Carousel.stories.js',
          }),
        (autoplay.__docgenInfo = { description: '', methods: [], displayName: 'autoplay' }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['.storybook/stories/Carousel.stories.js'] = {
            name: 'autoplay',
            docgenInfo: autoplay.__docgenInfo,
            path: '.storybook/stories/Carousel.stories.js',
          }),
        (customInterval.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'customInterval',
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['.storybook/stories/Carousel.stories.js'] = {
            name: 'customInterval',
            docgenInfo: customInterval.__docgenInfo,
            path: '.storybook/stories/Carousel.stories.js',
          })
    },
    980: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'collapsed', function() {
          return collapsed
        }),
        __webpack_require__.d(__webpack_exports__, 'expanded', function() {
          return expanded
        })
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__,
        ),
        _src_ExpandableSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(124),
        _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(323)
      __webpack_exports__.default = { title: 'ExpandableSection' }
      var _ref = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _src_ExpandableSection__WEBPACK_IMPORTED_MODULE_1__.a,
          { title: 'Help', caption: 'Click here for more info' },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__.a,
            null,
            'This is a help section',
          ),
        ),
        collapsed = function() {
          return _ref
        }
      collapsed.displayName = 'collapsed'
      var _ref2 = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _src_ExpandableSection__WEBPACK_IMPORTED_MODULE_1__.a,
          { title: 'Help', caption: 'Click here for more info', expanded: !0 },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__.a,
            null,
            'This is a help section',
          ),
        ),
        expanded = function() {
          return _ref2
        }
      ;(expanded.displayName = 'expanded'),
        (collapsed.__docgenInfo = { description: '', methods: [], displayName: 'collapsed' }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['.storybook/stories/ExpandableSection.stories.js'] = {
            name: 'collapsed',
            docgenInfo: collapsed.__docgenInfo,
            path: '.storybook/stories/ExpandableSection.stories.js',
          }),
        (expanded.__docgenInfo = { description: '', methods: [], displayName: 'expanded' }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['.storybook/stories/ExpandableSection.stories.js'] = {
            name: 'expanded',
            docgenInfo: expanded.__docgenInfo,
            path: '.storybook/stories/ExpandableSection.stories.js',
          })
    },
    981: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'lazy', function() {
          return lazy
        })
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__,
        ),
        _src_Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46)
      __webpack_exports__.default = { title: 'Image' }
      var styles = { display: 'flex', justifyContent: 'center', marginTop: 500 },
        _ref = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'div',
          null,
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { style: styles },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _src_Image__WEBPACK_IMPORTED_MODULE_1__.a,
              { src: '//placehold.it/300?text=1', lazy: !0 },
            ),
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { style: styles },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _src_Image__WEBPACK_IMPORTED_MODULE_1__.a,
              { src: '//placehold.it/300?text=2', lazy: !0 },
            ),
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { style: styles },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _src_Image__WEBPACK_IMPORTED_MODULE_1__.a,
              { src: '//placehold.it/300?text=3', lazy: !0 },
            ),
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { style: styles },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _src_Image__WEBPACK_IMPORTED_MODULE_1__.a,
              { src: '//placehold.it/300?text=4', lazy: !0 },
            ),
          ),
        ),
        lazy = function() {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { style: { fontSize: 30, textAlign: 'center' } },
            'Please scroll down',
            _ref,
          )
        }
      ;(lazy.displayName = 'lazy'),
        (lazy.__docgenInfo = { description: '', methods: [], displayName: 'lazy' }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['.storybook/stories/Image.stories.js'] = {
            name: 'lazy',
            docgenInfo: lazy.__docgenInfo,
            path: '.storybook/stories/Image.stories.js',
          })
    },
    995: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'defaults', function() {
          return defaults
        })
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__,
        ),
        _src_nav_NavTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(170)
      __webpack_exports__.default = { title: 'NavTabs' }
      var _ref = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'div',
          null,
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _src_nav_NavTab__WEBPACK_IMPORTED_MODULE_1__.a,
            { href: '/c/[categoryId]', as: '/c/shirts', label: 'Shirts' },
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _src_nav_NavTab__WEBPACK_IMPORTED_MODULE_1__.a,
            { href: '/c/[categoryId]', as: '/c/pants', label: 'Pants' },
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _src_nav_NavTab__WEBPACK_IMPORTED_MODULE_1__.a,
            { href: '/c/[categoryId]', as: '/c/socks', label: 'Socks' },
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _src_nav_NavTab__WEBPACK_IMPORTED_MODULE_1__.a,
            { href: '/c/[categoryId]', as: '/c/jackets', label: 'Jackets' },
          ),
        ),
        defaults = function() {
          return _ref
        }
      ;(defaults.displayName = 'defaults'),
        (defaults.__docgenInfo = { description: '', methods: [], displayName: 'defaults' }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['.storybook/stories/NavTabs.stories.js'] = {
            name: 'defaults',
            docgenInfo: defaults.__docgenInfo,
            path: '.storybook/stories/NavTabs.stories.js',
          })
    },
    997: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'defaults', function() {
          return defaults
        })
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__,
        ),
        _material_ui_icons_Pets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(102),
        _material_ui_icons_Pets__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          _material_ui_icons_Pets__WEBPACK_IMPORTED_MODULE_1__,
        ),
        _src_ToolbarButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(220)
      __webpack_exports__.default = { title: 'ToolbarButton' }
      var _ref = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _src_ToolbarButton__WEBPACK_IMPORTED_MODULE_2__.a,
          {
            icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _material_ui_icons_Pets__WEBPACK_IMPORTED_MODULE_1___default.a,
              null,
            ),
            label: 'Label',
          },
        ),
        defaults = function() {
          return _ref
        }
      ;(defaults.displayName = 'defaults'),
        (defaults.__docgenInfo = { description: '', methods: [], displayName: 'defaults' }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['.storybook/stories/ToolbarButton.stories.js'] = {
            name: 'defaults',
            docgenInfo: defaults.__docgenInfo,
            path: '.storybook/stories/ToolbarButton.stories.js',
          })
    },
    998: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__)
      __webpack_require__(33),
        __webpack_require__(56),
        __webpack_require__(36),
        __webpack_require__(75),
        __webpack_require__(43),
        __webpack_require__(88),
        __webpack_require__(89),
        __webpack_require__(42),
        __webpack_require__(37)
      var defineProperty = __webpack_require__(6),
        defineProperty_default = __webpack_require__.n(defineProperty),
        helpers_extends = __webpack_require__(8),
        extends_default = __webpack_require__.n(helpers_extends),
        react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        createMuiTheme = __webpack_require__(485),
        ThemeProvider = __webpack_require__(1052),
        slicedToArray =
          (__webpack_require__(55),
          __webpack_require__(381),
          __webpack_require__(133),
          __webpack_require__(280),
          __webpack_require__(12)),
        slicedToArray_default = __webpack_require__.n(slicedToArray),
        objectWithoutProperties = __webpack_require__(14),
        objectWithoutProperties_default = __webpack_require__.n(objectWithoutProperties),
        clsx_m = __webpack_require__(3),
        makeStyles = __webpack_require__(224),
        useTheme = __webpack_require__(34),
        useMediaQuery = __webpack_require__(1059),
        Carousel = __webpack_require__(123),
        Image = __webpack_require__(46),
        styles_useTheme = __webpack_require__(471),
        useTheme_default = __webpack_require__.n(styles_useTheme),
        Close = __webpack_require__(470),
        Close_default = __webpack_require__.n(Close),
        Dialog = __webpack_require__(1066),
        DialogActions = __webpack_require__(1057),
        DialogContent = __webpack_require__(1058),
        IconButton = __webpack_require__(487),
        Zoom = __webpack_require__(1056),
        Transition = react_default.a.forwardRef(function(props, ref) {
          return react_default.a.createElement(
            Zoom.a,
            extends_default()({ duration: 500, ref: ref }, props),
          )
        }),
        useStyles = Object(makeStyles.a)(
          function() {
            return {
              root: {},
              content: { padding: 0, display: 'flex', flexDirection: 'column' },
              paper: { flex: 1, background: 'rgba(255,255,255,0.9)' },
            }
          },
          { name: 'RSFLightbox' },
        ),
        Lightbox_ref = react_default.a.createElement(Close_default.a, null)
      function Lightbox(props) {
        var classes = props.classes,
          children = props.children,
          onClose = props.onClose,
          open = props.open,
          TransitionComponent = props.TransitionComponent
        classes = useStyles({ classes: classes })
        var theme = useTheme_default()()
        return react_default.a.createElement(
          Dialog.a,
          {
            open: open,
            fullScreen: !0,
            classes: { paper: classes.paper },
            TransitionComponent: TransitionComponent,
            className: classes.root,
            style: { zIndex: theme.zIndex.modal + 10 },
          },
          react_default.a.createElement(
            DialogActions.a,
            null,
            react_default.a.createElement(IconButton.a, { onClick: onClose }, Lightbox_ref),
          ),
          react_default.a.createElement(DialogContent.a, { className: classes.content }, children),
        )
      }
      ;(Lightbox.displayName = 'Lightbox'),
        (Lightbox.defaultProps = { TransitionComponent: Transition }),
        (Lightbox.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Lightbox',
          props: {
            TransitionComponent: {
              defaultValue: {
                value:
                  'React.forwardRef((props, ref) => {\n  return <Zoom duration={500} ref={ref} {...props} />\n})',
                computed: !0,
              },
              required: !1,
            },
          },
        })
      var carousel_Lightbox = react_default.a.memo(Lightbox)
      'undefined' != typeof STORYBOOK_REACT_CLASSES &&
        (STORYBOOK_REACT_CLASSES['src/carousel/Lightbox.js'] = {
          name: 'Lightbox',
          docgenInfo: Lightbox.__docgenInfo,
          path: 'src/carousel/Lightbox.js',
        })
      var ReactImageMagnify = __webpack_require__(484)
      function Media(_ref) {
        var magnifyProps = _ref.magnifyProps,
          imageProps = _ref.imageProps,
          src = _ref.src,
          alt = _ref.alt,
          magnify = _ref.magnify,
          _ref$type = _ref.type
        return 'video' === (void 0 === _ref$type ? 'image' : _ref$type)
          ? react_default.a.createElement('video', { src: src, alt: alt })
          : magnify
          ? react_default.a.createElement(
              ReactImageMagnify.a,
              extends_default()({ enlargedImagePosition: 'over' }, magnifyProps, {
                smallImage: { src: src, alt: alt, isFluidWidth: !0 },
                largeImage: magnify,
              }),
            )
          : react_default.a.createElement(
              Image.a,
              extends_default()({ key: src, src: src, alt: alt, fill: !0 }, imageProps),
            )
      }
      ;(Media.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Media',
        props: { type: { defaultValue: { value: "'image'", computed: !1 }, required: !1 } },
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/carousel/Media.js'] = {
            name: 'Media',
            docgenInfo: Media.__docgenInfo,
            path: 'src/carousel/Media.js',
          })
      var amp = __webpack_require__(222),
        prop_types = __webpack_require__(1),
        prop_types_default = __webpack_require__.n(prop_types),
        Typography = __webpack_require__(323),
        AddCircleOutline = __webpack_require__(475),
        AddCircleOutline_default = __webpack_require__.n(AddCircleOutline),
        MagnifyHint_useStyles = Object(makeStyles.a)(
          function(theme) {
            return {
              root: {
                position: 'absolute',
                bottom: 30,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                width: '100%',
              },
              wrap: {
                borderRadius: 25,
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                lineHeight: 14,
                padding: '5px 10px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              },
              icon: { height: 16, width: 16, color: theme.palette.grey[300] },
              text: { marginLeft: 5, color: theme.palette.grey[300], position: 'relative', top: 1 },
              over: {},
              zoomDisabled: {},
              expandDisabled: {
                '$zoomDisabled&': { display: 'none' },
                '@media (hover:none)': { display: 'none' },
              },
              zoomTextDesktop: {
                display: 'block',
                '$over:not($expandDisabled) &, $zoomDisabled &': { display: 'none' },
                '@media (hover:none)': { display: 'none' },
              },
              expandTextMobile: { display: 'none', '@media (hover:none)': { display: 'block' } },
              expandTextDesktop: {
                display: 'none',
                '$over:not($expandDisabled) &, $zoomDisabled &': {
                  display: 'block',
                  '@media (hover:none)': { display: 'none' },
                },
              },
            }
          },
          { name: 'RSFMagnifyHint' },
        )
      function MagnifyHint(_ref) {
        var _clsx,
          zoomTextDesktop = _ref.zoomTextDesktop,
          expandTextMobile = _ref.expandTextMobile,
          expandTextDesktop = _ref.expandTextDesktop,
          over = _ref.over,
          className = _ref.className,
          disableZoom = _ref.disableZoom,
          disableExpand = _ref.disableExpand,
          classes = MagnifyHint_useStyles()
        return (
          (disableZoom = disableZoom || Object(amp.useAmp)()),
          react_default.a.createElement(
            'div',
            {
              className: Object(clsx_m.a)(
                className,
                ((_clsx = {}),
                defineProperty_default()(_clsx, classes.root, !0),
                defineProperty_default()(_clsx, classes.over, over),
                defineProperty_default()(_clsx, classes.zoomDisabled, disableZoom),
                defineProperty_default()(_clsx, classes.expandDisabled, disableExpand),
                _clsx),
              ),
            },
            react_default.a.createElement(
              'div',
              { className: classes.wrap },
              react_default.a.createElement(AddCircleOutline_default.a, {
                className: classes.icon,
                alt: 'magnify-icon',
              }),
              react_default.a.createElement(
                Typography.a,
                {
                  variant: 'caption',
                  className: Object(clsx_m.a)(classes.text, classes.zoomTextDesktop),
                },
                zoomTextDesktop,
              ),
              react_default.a.createElement(
                Typography.a,
                {
                  variant: 'caption',
                  className: Object(clsx_m.a)(classes.text, classes.expandTextMobile),
                },
                expandTextMobile,
              ),
              react_default.a.createElement(
                Typography.a,
                {
                  variant: 'caption',
                  className: Object(clsx_m.a)(classes.text, classes.expandTextDesktop),
                },
                expandTextDesktop,
              ),
            ),
          )
        )
      }
      ;(MagnifyHint.displayName = 'MagnifyHint'),
        (MagnifyHint.propTypes = {
          zoomTextDesktop: prop_types_default.a.string,
          expandTextMobile: prop_types_default.a.string,
          expandTextDesktop: prop_types_default.a.string,
          className: prop_types_default.a.string,
          open: prop_types_default.a.bool,
          disableZoom: prop_types_default.a.bool,
          disableExpand: prop_types_default.a.bool,
        }),
        (MagnifyHint.defaultProps = {
          zoomTextDesktop: 'Hover to Zoom',
          expandTextMobile: 'Tap to Expand',
          expandTextDesktop: 'Click to Expand',
        }),
        (MagnifyHint.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'MagnifyHint',
          props: {
            zoomTextDesktop: {
              defaultValue: { value: "'Hover to Zoom'", computed: !1 },
              type: { name: 'string' },
              required: !1,
              description: '',
            },
            expandTextMobile: {
              defaultValue: { value: "'Tap to Expand'", computed: !1 },
              type: { name: 'string' },
              required: !1,
              description: '',
            },
            expandTextDesktop: {
              defaultValue: { value: "'Click to Expand'", computed: !1 },
              type: { name: 'string' },
              required: !1,
              description: '',
            },
            className: { type: { name: 'string' }, required: !1, description: '' },
            open: { type: { name: 'bool' }, required: !1, description: '' },
            disableZoom: { type: { name: 'bool' }, required: !1, description: '' },
            disableExpand: { type: { name: 'bool' }, required: !1, description: '' },
          },
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/carousel/MagnifyHint.js'] = {
            name: 'MagnifyHint',
            docgenInfo: MagnifyHint.__docgenInfo,
            path: 'src/carousel/MagnifyHint.js',
          })
      var Tabs = __webpack_require__(1061),
        Tab = __webpack_require__(1016),
        CarouselThumbnails_useStyles = Object(makeStyles.a)(
          function(theme) {
            return {
              thumb: { width: 50, height: 50, boxSizing: 'content-box' },
              thumbs: { display: 'flex', justifyContent: 'center' },
              hidden: { display: 'none' },
              tabsIndicator: {
                display: 'none',
                backgroundColor: theme.palette.primary.main,
                height: '3px',
                transition: 'left 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
              },
              tabsRoot: { marginTop: theme.margins.container },
              noSelection: { visibility: 'hidden' },
              tabRoot: {
                minWidth: 'auto',
                padding: 0,
                outline: 'none',
                opacity: 0.7,
                transition: 'opacity linear 100ms',
                '&:hover': { opacity: 0.9 },
              },
              selectedTab: { opacity: 1 },
              tabWrapper: {
                margin: '0 2px',
                border: '1px solid transparent',
                '$selectedTab &': { border: '1px solid rgba(0,0,0,0.3)' },
              },
            }
          },
          { name: 'RSFCarouselThumbnails' },
        )
      function CarouselThumbnails(props) {
        var thumbnails = props.thumbnails,
          selected = props.selected,
          setSelected = props.setSelected,
          classes = props.classes,
          className = props.className,
          styles = CarouselThumbnails_useStyles({ classes: classes })
        return react_default.a.createElement(
          'div',
          { className: Object(clsx_m.a)(className, styles.thumbs) },
          react_default.a.createElement(
            Tabs.a,
            {
              value: selected,
              variant: 'scrollable',
              onChange: function onChange(_, index) {
                return setSelected(index)
              },
              classes: { root: styles.tabsRoot, indicator: styles.tabsIndicator },
            },
            thumbnails.map(function(_ref, i) {
              var src = _ref.src,
                alt = _ref.alt,
                icon = react_default.a.createElement(Image.a, {
                  contain: !0,
                  className: styles.thumb,
                  src: src,
                  alt: alt,
                })
              return react_default.a.createElement(Tab.a, {
                classes: {
                  root: styles.tabRoot,
                  wrapper: styles.tabWrapper,
                  selected: styles.selectedTab,
                },
                key: i,
                icon: icon,
              })
            }),
          ),
        )
      }
      ;(CarouselThumbnails.displayName = 'CarouselThumbnails'),
        (CarouselThumbnails.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'CarouselThumbnails',
        })
      var carousel_CarouselThumbnails = react_default.a.memo(CarouselThumbnails)
      'undefined' != typeof STORYBOOK_REACT_CLASSES &&
        (STORYBOOK_REACT_CLASSES['src/carousel/CarouselThumbnails.js'] = {
          name: 'CarouselThumbnails',
          docgenInfo: CarouselThumbnails.__docgenInfo,
          path: 'src/carousel/CarouselThumbnails.js',
        })
      var get = __webpack_require__(116),
        get_default = __webpack_require__.n(get)
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object)
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object)
          enumerableOnly &&
            (symbols = symbols.filter(function(sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable
            })),
            keys.push.apply(keys, symbols)
        }
        return keys
      }
      function _objectSpread(target) {
        for (var source, i = 1; i < arguments.length; i++)
          (source = null != arguments[i] ? arguments[i] : {}),
            i % 2
              ? ownKeys(Object(source), !0).forEach(function(key) {
                  defineProperty_default()(target, key, source[key])
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
              : ownKeys(Object(source)).forEach(function(key) {
                  Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key))
                })
        return target
      }
      var MediaCarousel_useStyles = Object(makeStyles.a)(
        function(theme) {
          return {
            imageWrap: {
              height: '100%',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'stretch',
              '& img': { maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' },
            },
            thumbnail: { position: 'absolute', top: 0, left: 0, height: '100%', width: '100%' },
            lightboxCarousel: defineProperty_default()(
              { flex: 1, justifyContent: 'center', overflow: 'hidden' },
              theme.breakpoints.down('xs'),
              { margin: '0 !important' },
            ),
            lightboxThumbs: { paddingBottom: theme.margins.container },
          }
        },
        { name: 'RSFMediaCarousel' },
      )
      function MediaCarousel(props) {
        var thumbnails = props.thumbnails,
          thumbnail = props.thumbnail,
          thumbsClassName = props.thumbsClassName,
          magnifyHintClassName = props.magnifyHintClassName,
          lightboxProps = (props.imageProps, props.lightboxProps),
          classes = props.classes,
          media = props.media,
          magnifyProps = props.magnifyProps,
          id = props.id,
          CarouselComponent = props.CarouselComponent,
          MediaComponent = props.MediaComponent,
          CarouselThumbnailsComponent = props.CarouselThumbnailsComponent,
          others = objectWithoutProperties_default()(props, [
            'thumbnails',
            'thumbnail',
            'thumbsClassName',
            'magnifyHintClassName',
            'imageProps',
            'lightboxProps',
            'classes',
            'media',
            'magnifyProps',
            'id',
            'CarouselComponent',
            'MediaComponent',
            'CarouselThumbnailsComponent',
          ]),
          _useState = Object(react.useState)(!1),
          _useState2 = slicedToArray_default()(_useState, 2),
          imagesLoaded = _useState2[0],
          setImagesLoaded = _useState2[1],
          styles = MediaCarousel_useStyles({ classes: classes }),
          ref = Object(react.useRef)(null),
          _useState3 = Object(react.useState)(!1),
          _useState4 = slicedToArray_default()(_useState3, 2),
          over = _useState4[0],
          setOver = _useState4[1],
          _useState5 = Object(react.useState)(0),
          _useState6 = slicedToArray_default()(_useState5, 2),
          selected = _useState6[0],
          setSelected = _useState6[1],
          _useState7 = Object(react.useState)(),
          _useState8 = slicedToArray_default()(_useState7, 2),
          lightboxActive = _useState8[0],
          setLightboxActive = _useState8[1],
          theme = Object(useTheme.a)(),
          isSmall = Object(useMediaQuery.a)(theme.breakpoints.down('xs'))
        Object(react.useEffect)(
          function() {
            setSelected(0)
          },
          [media],
        )
        var timeout = Object(react.useRef)(null),
          handleMouseEnter = Object(react.useCallback)(function() {
            timeout.current = window.setTimeout(function() {
              setOver(!0), (timeout.current = null)
            }, 250)
          }, []),
          handleMouseLeave = Object(react.useCallback)(function() {
            setOver(!1), timeout.current && window.clearTimeout(timeout.current)
          }, []),
          onFullSizeImagesLoaded = Object(react.useCallback)(function() {
            setImagesLoaded(!0)
          }, []),
          onClickCarousel = Object(react.useCallback)(function(evt) {
            evt.defaultPrevented || setLightboxActive(!0)
          })
        Object(react.useEffect)(function() {
          var firstImage = ref.current.querySelector('img')
          if (firstImage)
            return (
              firstImage.addEventListener('load', onFullSizeImagesLoaded),
              function() {
                return firstImage.removeEventListener('load', onFullSizeImagesLoaded)
              }
            )
        }, [])
        var belowAdornments = []
        thumbnail &&
          !imagesLoaded &&
          belowAdornments.push(
            react_default.a.createElement(
              Image.a,
              extends_default()(
                { key: 'thumbnail', className: styles.thumbnail, fill: !0 },
                thumbnail,
              ),
            ),
          ),
          media &&
            media.full &&
            media.full.some(function(item) {
              return item.magnify
            }) &&
            belowAdornments.push(
              react_default.a.createElement(MagnifyHint, {
                key: 'magnify-hint',
                over: over,
                disableExpand: lightboxActive,
                className: magnifyHintClassName,
              }),
            ),
          lightboxActive &&
            Object.assign(others, {
              autoplay: !1,
              className: Object(clsx_m.a)(others.className, styles.lightboxCarousel),
              height: isSmall ? '100%' : null,
              slideStyle: _objectSpread({}, others.slideStyle || {}, {
                display: 'flex',
                justifyContent: 'center',
              }),
            })
        var handleLightboxClose = Object(react.useCallback)(function() {
            setLightboxActive(!1)
          }, []),
          body = react_default.a.createElement(
            react_default.a.Fragment,
            null,
            react_default.a.createElement(
              CarouselComponent,
              extends_default()(
                {
                  id: id,
                  ref: ref,
                  belowAdornments: belowAdornments,
                  classes: classes,
                  onMouseEnter: handleMouseEnter,
                  onMouseLeave: handleMouseLeave,
                  onClick: onClickCarousel,
                  selected: selected,
                  setSelected: setSelected,
                },
                others,
              ),
              media &&
                media.full &&
                media.full.map(function(item, i) {
                  return react_default.a.createElement(
                    MediaComponent,
                    extends_default()(
                      {
                        key: i,
                        onLoad: 0 === i ? onFullSizeImagesLoaded : null,
                        magnifyProps: magnifyProps,
                      },
                      item,
                      {
                        magnify: !(lightboxActive && !isSmall) && item.magnify,
                        imageProps:
                          lightboxActive && !isSmall
                            ? {
                                fill: !1,
                                contain: !0,
                                src: get_default()(item, 'magnify.src', item.src),
                              }
                            : item.imageProps,
                      },
                    ),
                  )
                }),
            ),
            thumbnails &&
              media &&
              react_default.a.createElement(CarouselThumbnailsComponent, {
                className: Object(clsx_m.a)(
                  thumbsClassName,
                  lightboxActive && styles.lightboxThumbs,
                ),
                bind: ''.concat(id, '.index'),
                carouselId: id,
                selected: selected,
                setSelected: setSelected,
                thumbnails: media.thumbnails,
              }),
          )
        return react_default.a.createElement(
          react_default.a.Fragment,
          null,
          body,
          react_default.a.createElement(
            carousel_Lightbox,
            extends_default()({}, lightboxProps, {
              open: !!lightboxActive,
              onClose: handleLightboxClose,
            }),
            body,
          ),
        )
      }
      ;(MediaCarousel.defaultProps = {
        lightboxProps: {},
        magnifyProps: {},
        thumbnails: !0,
        MediaComponent: Media,
        CarouselComponent: Carousel.a,
        CarouselThumbnailsComponent: carousel_CarouselThumbnails,
      }),
        (MediaCarousel.__docgenInfo = {
          description:
            "A carousel that displays images and videos for a product.  Specify\nimages and videos via the media prop, which should be of the form:\n\n```js\n <MediaCarousel\n   media={[\n     { src: 'https://domain.com/path/to/image.jpg', alt: 'Red Shirt', type: 'image' },\n     { src: 'https://domain.com/path/to/image.mpeg', alt: 'Demonstration', type: 'video' },\n   ]}\n   thumbnail={{\n     src: 'https://domain.com/path/to/thumbnail.jpg', alt: 'thumbnail'\n   }}\n />\n```\n\nTo display a low-res thumbnail while high res images are loading, specify a `thumbnail` prop with `src` and `alt`\n\nAlternatively, you can provide a `product` prop as an object with `media` and `thumbnail` values that\nadhere to the formats described above.\n\n```js\n <MediaCarousel\n     media={[\n       { src: 'https://domain.com/path/to/image.jpg', alt: 'Red Shirt', type: 'image' },\n       { src: 'https://domain.com/path/to/image.mpeg', alt: 'Demonstration', type: 'video' },\n     ],\n     thumbnail: {\n       src: 'https://domain.com/path/to/thumbnail.jpg', alt: 'thumbnail'\n     }\n   }]}\n />\n```",
          methods: [],
          displayName: 'MediaCarousel',
          props: {
            lightboxProps: { defaultValue: { value: '{}', computed: !1 }, required: !1 },
            magnifyProps: { defaultValue: { value: '{}', computed: !1 }, required: !1 },
            thumbnails: { defaultValue: { value: 'true', computed: !1 }, required: !1 },
            MediaComponent: { defaultValue: { value: 'Media', computed: !0 }, required: !1 },
            CarouselComponent: { defaultValue: { value: 'Carousel', computed: !0 }, required: !1 },
            CarouselThumbnailsComponent: {
              defaultValue: { value: 'CarouselThumbnails', computed: !0 },
              required: !1,
            },
          },
        })
      var carousel_MediaCarousel = react_default.a.memo(MediaCarousel)
      function MediaCarousel_stories_ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object)
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object)
          enumerableOnly &&
            (symbols = symbols.filter(function(sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable
            })),
            keys.push.apply(keys, symbols)
        }
        return keys
      }
      function MediaCarousel_stories_objectSpread(target) {
        for (var source, i = 1; i < arguments.length; i++)
          (source = null != arguments[i] ? arguments[i] : {}),
            i % 2
              ? MediaCarousel_stories_ownKeys(Object(source), !0).forEach(function(key) {
                  defineProperty_default()(target, key, source[key])
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
              : MediaCarousel_stories_ownKeys(Object(source)).forEach(function(key) {
                  Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key))
                })
        return target
      }
      'undefined' != typeof STORYBOOK_REACT_CLASSES &&
        (STORYBOOK_REACT_CLASSES['src/carousel/MediaCarousel.js'] = {
          name: 'MediaCarousel',
          docgenInfo: MediaCarousel.__docgenInfo,
          path: 'src/carousel/MediaCarousel.js',
        }),
        __webpack_require__.d(__webpack_exports__, 'defaults', function() {
          return defaults
        }),
        __webpack_require__.d(__webpack_exports__, 'customMediaComponent', function() {
          return customMediaComponent
        }),
        __webpack_require__.d(__webpack_exports__, 'customThumbnailsComponent', function() {
          return customThumbnailsComponent
        }),
        __webpack_require__.d(__webpack_exports__, 'noThumbnails', function() {
          return noThumbnails
        })
      __webpack_exports__.default = { title: 'MediaCarousel' }
      var MediaCarousel_stories_theme = Object(createMuiTheme.a)({ margins: { container: 16 } }),
        MediaCarousel_stories_media = {
          full: [
            { src: '//placehold.it/400?text=1', alt: 'One', type: 'image' },
            { src: '//placehold.it/400?text=2', alt: 'Two', type: 'image' },
            { src: '//placehold.it/400?text=3', alt: 'Three', type: 'image' },
          ],
          thumbnails: [
            { src: '//placehold.it/200?text=1', alt: 'One', type: 'image' },
            { src: '//placehold.it/200?text=2', alt: 'Two', type: 'image' },
            { src: '//placehold.it/200?text=3', alt: 'Three', type: 'image' },
          ],
          thumbnail: { src: '//placehold.it/200?text=1', alt: 'One' },
        },
        slideStyle = {
          width: '100%',
          height: 300,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontFamily: 'monospace',
          fontSize: 32,
          color: 'white',
          background: 'grey',
        },
        Test = function(props) {
          return react_default.a.createElement(
            ThemeProvider.a,
            { theme: MediaCarousel_stories_theme },
            react_default.a.createElement(
              carousel_MediaCarousel,
              extends_default()({ media: MediaCarousel_stories_media }, props),
            ),
          )
        }
      Test.displayName = 'Test'
      var MediaCarousel_stories_ref = react_default.a.createElement(Test, null),
        defaults = function() {
          return MediaCarousel_stories_ref
        }
      defaults.displayName = 'defaults'
      var customMediaComponent = function() {
        return react_default.a.createElement(Test, {
          MediaComponent: function MediaComponent(_ref2) {
            var src = _ref2.src
            return react_default.a.createElement(
              'div',
              { style: MediaCarousel_stories_objectSpread({}, slideStyle) },
              src,
            )
          },
        })
      }
      customMediaComponent.displayName = 'customMediaComponent'
      var customThumbnailsComponent = function() {
        return react_default.a.createElement(Test, {
          CarouselThumbnailsComponent: function CarouselThumbnailsComponent(_ref3) {
            var selected = _ref3.selected
            return react_default.a.createElement(
              'div',
              { style: MediaCarousel_stories_objectSpread({}, slideStyle) },
              selected,
            )
          },
        })
      }
      customThumbnailsComponent.displayName = 'customThumbnailsComponent'
      var _ref4 = react_default.a.createElement(Test, { thumbnails: !1 }),
        noThumbnails = function() {
          return _ref4
        }
      ;(noThumbnails.displayName = 'noThumbnails'),
        (defaults.__docgenInfo = { description: '', methods: [], displayName: 'defaults' }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['.storybook/stories/MediaCarousel.stories.js'] = {
            name: 'defaults',
            docgenInfo: defaults.__docgenInfo,
            path: '.storybook/stories/MediaCarousel.stories.js',
          }),
        (customMediaComponent.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'customMediaComponent',
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['.storybook/stories/MediaCarousel.stories.js'] = {
            name: 'customMediaComponent',
            docgenInfo: customMediaComponent.__docgenInfo,
            path: '.storybook/stories/MediaCarousel.stories.js',
          }),
        (customThumbnailsComponent.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'customThumbnailsComponent',
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['.storybook/stories/MediaCarousel.stories.js'] = {
            name: 'customThumbnailsComponent',
            docgenInfo: customThumbnailsComponent.__docgenInfo,
            path: '.storybook/stories/MediaCarousel.stories.js',
          }),
        (noThumbnails.__docgenInfo = { description: '', methods: [], displayName: 'noThumbnails' }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['.storybook/stories/MediaCarousel.stories.js'] = {
            name: 'noThumbnails',
            docgenInfo: noThumbnails.__docgenInfo,
            path: '.storybook/stories/MediaCarousel.stories.js',
          })
    },
    999: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__)
      var slicedToArray = __webpack_require__(12),
        slicedToArray_default = __webpack_require__.n(slicedToArray),
        react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        helpers_extends =
          (__webpack_require__(284),
          __webpack_require__(55),
          __webpack_require__(110),
          __webpack_require__(8)),
        extends_default = __webpack_require__.n(helpers_extends),
        prop_types = __webpack_require__(1),
        prop_types_default = __webpack_require__.n(prop_types),
        makeStyles = __webpack_require__(224),
        clsx_m = __webpack_require__(3),
        defineProperty =
          (__webpack_require__(33),
          __webpack_require__(56),
          __webpack_require__(36),
          __webpack_require__(75),
          __webpack_require__(43),
          __webpack_require__(88),
          __webpack_require__(89),
          __webpack_require__(42),
          __webpack_require__(37),
          __webpack_require__(6)),
        defineProperty_default = __webpack_require__.n(defineProperty),
        objectWithoutProperties = __webpack_require__(14),
        objectWithoutProperties_default = __webpack_require__.n(objectWithoutProperties),
        styles_makeStyles = __webpack_require__(219),
        makeStyles_default = __webpack_require__.n(styles_makeStyles),
        Button = __webpack_require__(1049),
        Skeleton = __webpack_require__(1060),
        useStyles = makeStyles_default()(
          function(theme) {
            return {
              root: {
                '.rsf-po-selected &': {
                  borderColor: theme.palette.primary.main,
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.primary.contrastText,
                  '&:hover': {
                    borderColor: theme.palette.primary.main,
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                  },
                },
              },
            }
          },
          { name: 'RSFTextProductOption' },
        )
      function TextProductOption(_ref) {
        var classes = _ref.classes,
          className = _ref.className,
          selected = _ref.selected,
          label = _ref.label,
          skeleton = _ref.skeleton,
          buttonProps = _ref.buttonProps,
          onClick = _ref.onClick
        return (
          (classes = useStyles({ classes: classes })),
          skeleton
            ? react_default.a.createElement(Skeleton.a, {
                className: className,
                width: 64,
                height: 36,
              })
            : react_default.a.createElement(
                Button.a,
                extends_default()({}, buttonProps, {
                  className: Object(clsx_m.a)(className, classes.root),
                  variant: selected ? 'contained' : 'outlined',
                  color: selected ? 'primary' : 'default',
                  onClick: onClick,
                }),
                label,
              )
        )
      }
      ;(TextProductOption.displayName = 'TextProductOption'),
        (TextProductOption.propTypes = {
          skeleton: prop_types_default.a.bool,
          label: prop_types_default.a.oneOfType([
            prop_types_default.a.string,
            prop_types_default.a.element,
          ]).isRequired,
          selected: prop_types_default.a.bool,
          imageProps: prop_types_default.a.object,
        }),
        (TextProductOption.defaultProps = { selected: !1 }),
        (TextProductOption.__docgenInfo = {
          description:
            'Represents a single product option value as a button with text. All additional\nprops are spread to the underlying Material UI Button component.\n\nExample:\n\n```js\n<TextProductOption label="SM" selected/>\n```',
          methods: [],
          displayName: 'TextProductOption',
          props: {
            selected: {
              defaultValue: { value: 'false', computed: !1 },
              type: { name: 'bool' },
              required: !1,
              description: 'Set to `true` to mark the option as selected.',
            },
            skeleton: {
              type: { name: 'bool' },
              required: !1,
              description: 'Set to true to display a skeleton instead of the actual button',
            },
            label: {
              type: { name: 'union', value: [{ name: 'string' }, { name: 'element' }] },
              required: !0,
              description: 'The text for the button',
            },
            imageProps: {
              type: { name: 'object' },
              required: !1,
              description:
                'This prop is intentionally ignored so that TextProductOption can be used interchangably with\nSwatchProductOption without displaying a warning.',
            },
          },
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/option/TextProductOption.js'] = {
            name: 'TextProductOption',
            docgenInfo: TextProductOption.__docgenInfo,
            path: 'src/option/TextProductOption.js',
          })
      var Box = __webpack_require__(223),
        Typography = __webpack_require__(323),
        Check = __webpack_require__(477),
        Check_default = __webpack_require__.n(Check),
        Image = __webpack_require__(46),
        SwatchProductOption_useStyles = Object(makeStyles.a)(
          function(theme) {
            return {
              root: {},
              button: {
                position: 'relative',
                marginBottom: theme.spacing(0.5),
                padding: 2,
                borderRadius: '50%',
                backgroundColor: 'transparent',
                minWidth: 0,
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: theme.palette.grey[500],
                cursor: 'pointer',
                '&:focus': { outline: 0 },
              },
              image: { height: '100%', width: '100%', borderRadius: '50%' },
              '@media (hover: none)': {
                SwatchButton: { '&:hover': { backgroundColor: 'transparent' } },
              },
              checkMark: {
                transition: 'opacity 0.1s linear',
                opacity: 0,
                position: 'absolute',
                zIndex: 1,
                color: 'white',
                top: 2,
                left: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(0,0,0,0.2)',
                padding: 2,
                height: 'calc(100% - 4px)',
                width: 'calc(100% - 4px)',
                boxSizing: 'border-box',
                borderRadius: '50%',
                '.rsf-po-selected &': { opacity: 1 },
              },
              selected: { opacity: 1 },
              selectedLabel: { fontWeight: 'bold' },
              default: { height: 48, width: 48, '& svg': { height: 24, width: 24 } },
              small: { height: 32, width: 32, '& svg': { height: 16, width: 16 } },
              tiny: { height: 24, width: 24, '& svg': { height: 12, width: 12 } },
            }
          },
          { name: 'RSFSwatchProductOption' },
        )
      function SwatchProductOption(_ref) {
        var _clsx2,
          _clsx3,
          _clsx,
          selected = _ref.selected,
          label = _ref.label,
          classes = _ref.classes,
          imageProps = _ref.imageProps,
          onClick = _ref.onClick,
          SelectedIcon = _ref.SelectedIcon,
          size = _ref.size,
          skeleton = _ref.skeleton,
          ImageComponent = _ref.ImageComponent,
          className = _ref.className,
          buttonProps = _ref.buttonProps
        return (
          (classes = SwatchProductOption_useStyles({ classes: classes })),
          skeleton
            ? react_default.a.createElement(Skeleton.a, {
                variant: 'circle',
                style: { marginTop: 0, marginBottom: 4, margintLeft: 4, marginRight: 4 },
                className: Object(clsx_m.a)(
                  ((_clsx = {}),
                  defineProperty_default()(_clsx, buttonProps.className, !0),
                  defineProperty_default()(_clsx, classes[size], !0),
                  _clsx),
                ),
              })
            : react_default.a.createElement(
                Box.b,
                { className: classes.root },
                react_default.a.createElement(
                  'button',
                  extends_default()({}, buttonProps, {
                    type: 'button',
                    onClick: onClick,
                    className: Object(clsx_m.a)(
                      ((_clsx2 = {}),
                      defineProperty_default()(_clsx2, className, null != className),
                      defineProperty_default()(_clsx2, classes.button, !0),
                      defineProperty_default()(_clsx2, classes[size], !0),
                      _clsx2),
                    ),
                  }),
                  react_default.a.createElement(
                    'div',
                    {
                      className: Object(clsx_m.a)(
                        ((_clsx3 = {}),
                        defineProperty_default()(_clsx3, classes.checkMark, !0),
                        defineProperty_default()(_clsx3, classes.selected, selected),
                        _clsx3),
                      ),
                    },
                    react_default.a.createElement(SelectedIcon, { className: classes.icon }),
                  ),
                  react_default.a.createElement(
                    ImageComponent,
                    extends_default()(
                      { classes: { image: classes.image }, fill: !0, aspectRatio: 1 },
                      imageProps,
                    ),
                  ),
                ),
                label &&
                  react_default.a.createElement(
                    Typography.a,
                    {
                      variant: 'caption',
                      className: Object(clsx_m.a)(
                        defineProperty_default()({}, classes.selectedLabel, selected),
                      ),
                    },
                    label,
                  ),
              )
        )
      }
      ;(SwatchProductOption.displayName = 'SwatchProductOption'),
        (SwatchProductOption.propTypes = {
          label: prop_types_default.a.oneOfType([
            prop_types_default.a.string,
            prop_types_default.a.element,
          ]),
          imageProps: prop_types_default.a.shape(Image.a.propTypes),
          size: prop_types_default.a.oneOf(['default', 'small', 'tiny']),
          ImageComponent: prop_types_default.a.func,
        }),
        (SwatchProductOption.defaultProps = {
          imageProps: {},
          SelectedIcon: Check_default.a,
          ImageComponent: Image.a,
          size: 'default',
          buttonProps: {},
        }),
        (SwatchProductOption.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'SwatchProductOption',
          props: {
            imageProps: {
              defaultValue: { value: '{}', computed: !1 },
              type: { name: 'shape', value: 'Image.propTypes', computed: !0 },
              required: !1,
              description: 'Props for the `Image` element',
            },
            SelectedIcon: { defaultValue: { value: 'CheckedIcon', computed: !0 }, required: !1 },
            ImageComponent: {
              defaultValue: { value: 'Image', computed: !0 },
              type: { name: 'func' },
              required: !1,
              description: 'The component to use to display images',
            },
            size: {
              defaultValue: { value: "'default'", computed: !1 },
              type: {
                name: 'enum',
                value: [
                  { value: "'default'", computed: !1 },
                  { value: "'small'", computed: !1 },
                  { value: "'tiny'", computed: !1 },
                ],
              },
              required: !1,
              description: 'Controls the size of the button',
            },
            buttonProps: { defaultValue: { value: '{}', computed: !1 }, required: !1 },
            label: {
              type: { name: 'union', value: [{ name: 'string' }, { name: 'element' }] },
              required: !1,
              description: 'Text to display below the button',
            },
          },
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/option/SwatchProductOption.js'] = {
            name: 'SwatchProductOption',
            docgenInfo: SwatchProductOption.__docgenInfo,
            path: 'src/option/SwatchProductOption.js',
          })
      var withDefaultHandler = __webpack_require__(142),
        get = __webpack_require__(116),
        get_default = __webpack_require__.n(get)
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object)
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object)
          enumerableOnly &&
            (symbols = symbols.filter(function(sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable
            })),
            keys.push.apply(keys, symbols)
        }
        return keys
      }
      function ProductOption(props) {
        var value = props.value,
          selected = props.selected,
          selectedOption = (props.options, props.selectedOption),
          onSelectedOptionChange = props.onSelectedOptionChange,
          onClick = props.onClick,
          variant = props.variant,
          showLabel = props.showLabel,
          wrapperProps = (props.onOptionsChange, props.wrapperProps),
          optionProps = props.optionProps,
          selectedClassName = (props.index, props.selectedClassName),
          others = objectWithoutProperties_default()(props, [
            'value',
            'selected',
            'options',
            'selectedOption',
            'onSelectedOptionChange',
            'onClick',
            'variant',
            'showLabel',
            'onOptionsChange',
            'wrapperProps',
            'optionProps',
            'index',
            'selectedClassName',
          ])
        selectedOption &&
          (selected = get_default()(value, 'id') == get_default()(selectedOption, 'id'))
        var handleClick = Object(withDefaultHandler.a)(onClick, function() {
            onSelectedOptionChange &&
              onSelectedOptionChange(value === selectedOption ? null : value)
          }),
          Variant = 'text' === variant ? TextProductOption : SwatchProductOption,
          propArgs = (function _objectSpread(target) {
            for (var source, i = 1; i < arguments.length; i++)
              (source = null != arguments[i] ? arguments[i] : {}),
                i % 2
                  ? ownKeys(Object(source), !0).forEach(function(key) {
                      defineProperty_default()(target, key, source[key])
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
                  : ownKeys(Object(source)).forEach(function(key) {
                      Object.defineProperty(
                        target,
                        key,
                        Object.getOwnPropertyDescriptor(source, key),
                      )
                    })
            return target
          })({ selected: selected }, props)
        return react_default.a.createElement(
          'div',
          extends_default()(
            { className: selected ? selectedClassName : '' },
            wrapperProps(propArgs),
          ),
          react_default.a.createElement(
            Variant,
            extends_default()({}, others, optionProps(propArgs), {
              label: showLabel ? value && value.text : void 0,
              selected: selected,
              onClick: handleClick,
            }),
          ),
        )
      }
      ;(ProductOption.displayName = 'ProductOption'),
        (ProductOption.propTypes = {
          variant: prop_types_default.a.oneOf(['text', 'swatch']).isRequired,
          showLabel: prop_types_default.a.bool,
          selectedClassName: prop_types_default.a.string,
        }),
        (ProductOption.defaultProps = {
          showLabel: !0,
          wrapperProps: Function.prototype,
          optionProps: Function.prototype,
          selectedClassName: 'rsf-po-selected',
        }),
        (ProductOption.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'ProductOption',
          props: {
            showLabel: {
              defaultValue: { value: 'true', computed: !1 },
              type: { name: 'bool' },
              required: !1,
              description: 'Set to `false` to hide the label text',
            },
            wrapperProps: {
              defaultValue: { value: 'Function.prototype', computed: !0 },
              required: !1,
            },
            optionProps: {
              defaultValue: { value: 'Function.prototype', computed: !0 },
              required: !1,
            },
            selectedClassName: {
              defaultValue: { value: "'rsf-po-selected'", computed: !1 },
              type: { name: 'string' },
              required: !1,
              description: 'The css class name applied to a selected option',
            },
            variant: {
              type: {
                name: 'enum',
                value: [
                  { value: "'text'", computed: !1 },
                  { value: "'swatch'", computed: !1 },
                ],
              },
              required: !0,
              description: 'The ui variant that controls how the option is displayed',
            },
          },
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/option/ProductOption.js'] = {
            name: 'ProductOption',
            docgenInfo: ProductOption.__docgenInfo,
            path: 'src/option/ProductOption.js',
          })
      var ProductOptionSelector_useStyles = Object(makeStyles.a)(
        function(theme) {
          return {
            root: { display: 'flex', flexWrap: 'wrap' },
            button: { margin: theme.spacing(0, 0.5, 0.5, 0) },
          }
        },
        { name: 'RSFProductOptionSelector' },
      )
      function ProductOptionSelector(_ref) {
        var options = _ref.options,
          name = _ref.name,
          classes = _ref.classes,
          optionProps = _ref.optionProps,
          skeleton = _ref.skeleton,
          value = _ref.value,
          onChange = _ref.onChange,
          variant = _ref.variant,
          OptionComponent = _ref.OptionComponent
        if (
          ((classes = ProductOptionSelector_useStyles({ classes: classes })),
          skeleton &&
            (options = Array(skeleton)
              .fill(0)
              .map(function(_item, i) {
                return { id: i, text: '' }
              })),
          !options)
        )
          return null
        var onSelectedOptionChange = function(newValue) {
          onChange && onChange(newValue)
        }
        return react_default.a.createElement(
          'div',
          { 'data-id': 'ProductOptionSelector', className: classes.root },
          options.map(function(option, i) {
            return react_default.a.createElement(
              OptionComponent,
              extends_default()(
                { selectedOption: value, onSelectedOptionChange: onSelectedOptionChange },
                optionProps,
                {
                  variant: variant || (option.image || option.color ? 'swatch' : 'text'),
                  name: name,
                  key: option.id,
                  className: Object(clsx_m.a)(classes.button, optionProps.className),
                  index: i,
                  imageProps: option.image,
                  value: option,
                  skeleton: null != skeleton,
                },
              ),
            )
          }),
        )
      }
      ;(ProductOptionSelector.displayName = 'ProductOptionSelector'),
        (ProductOptionSelector.propTypes = {
          classes: prop_types_default.a.objectOf(prop_types_default.a.string),
          imageProps: prop_types_default.a.object,
          name: prop_types_default.a.string,
          onChange: prop_types_default.a.func,
          optionProps: prop_types_default.a.object,
          skeleton: prop_types_default.a.number,
          value: prop_types_default.a.object,
          OptionComponent: prop_types_default.a.func,
        }),
        (ProductOptionSelector.defaultProps = {
          items: [],
          optionProps: {},
          imageProps: {},
          OptionComponent: ProductOption,
        }),
        (ProductOptionSelector.__docgenInfo = {
          description:
            'A selector for product options rendered as a set of buttons. Buttons can either have\ntext or an image. The text for the selected option can optionally be displayed below\nthe buttons.\n\nThis component supports AMP.',
          methods: [],
          displayName: 'ProductOptionSelector',
          props: {
            items: { defaultValue: { value: '[]', computed: !1 }, required: !1 },
            optionProps: {
              defaultValue: { value: '{}', computed: !1 },
              type: { name: 'object' },
              required: !1,
              description:
                'Props to apply to each `SwatchProductOption` or `TextProductOption` element.',
            },
            imageProps: {
              defaultValue: { value: '{}', computed: !1 },
              type: { name: 'object' },
              required: !1,
              description: 'Props for displayed images. See <Image /> component for details',
            },
            OptionComponent: {
              defaultValue: { value: 'ProductOption', computed: !0 },
              type: { name: 'func' },
              required: !1,
              description:
                'Allows you to override the default component which is used to render a product option.',
            },
            classes: {
              type: { name: 'objectOf', value: { name: 'string' } },
              required: !1,
              description: 'Overridable classes object to allow customization of component',
            },
            name: {
              type: { name: 'string' },
              required: !1,
              description: 'The name of property in amp state to bind to',
            },
            onChange: {
              type: { name: 'func' },
              required: !1,
              description:
                'Function to call when a new option is selected. Called with the new selected\noption or `null` when a selected option is deselected.',
            },
            skeleton: {
              type: { name: 'number' },
              required: !1,
              description:
                'If specified, this number of skeleton buttons will be displayed instead of\ndisplaying the actual buttons.',
            },
            value: {
              type: { name: 'object' },
              required: !1,
              description:
                'Current selected value among provided options or `null` when no option is selected.',
            },
          },
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/option/ProductOptionSelector.js'] = {
            name: 'ProductOptionSelector',
            docgenInfo: ProductOptionSelector.__docgenInfo,
            path: 'src/option/ProductOptionSelector.js',
          }),
        __webpack_require__.d(__webpack_exports__, 'swatch', function() {
          return swatch
        }),
        __webpack_require__.d(__webpack_exports__, 'text', function() {
          return ProductOptionSelector_stories_text
        })
      __webpack_exports__.default = { title: 'ProductOptionSelector' }
      var colors = [
          {
            text: 'Red',
            id: 'red',
            image: { src: 'https://via.placeholder.com/48x48/f44336?text=%20', alt: 'red' },
          },
          {
            text: 'Green',
            id: 'green',
            image: { src: 'https://via.placeholder.com/48x48/4caf50?text=%20', alt: 'green' },
          },
          {
            text: 'Blue',
            id: 'blue',
            image: { src: 'https://via.placeholder.com/48x48/2196f3?text=%20', alt: 'blue' },
          },
          {
            text: 'Grey',
            id: 'grey',
            image: { src: 'https://via.placeholder.com/48x48/e0e0e0?text=%20', alt: 'grey' },
          },
        ],
        swatch = function() {
          var _useState = Object(react.useState)(colors[0]),
            _useState2 = slicedToArray_default()(_useState, 2),
            color = _useState2[0],
            setColor = _useState2[1]
          return react_default.a.createElement(ProductOptionSelector, {
            options: colors,
            value: color,
            onChange: function onChange(color) {
              return setColor(color)
            },
          })
        }
      swatch.displayName = 'swatch'
      var ProductOptionSelector_stories_text = function() {
        var _useState3 = Object(react.useState)(colors[0]),
          _useState4 = slicedToArray_default()(_useState3, 2),
          color = _useState4[0],
          setColor = _useState4[1]
        return react_default.a.createElement(ProductOptionSelector, {
          options: colors,
          value: color,
          onChange: function onChange(color) {
            return setColor(color)
          },
          variant: 'text',
        })
      }
      ;(ProductOptionSelector_stories_text.displayName = 'text'),
        (swatch.__docgenInfo = { description: '', methods: [], displayName: 'swatch' }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['.storybook/stories/ProductOptionSelector.stories.js'] = {
            name: 'swatch',
            docgenInfo: swatch.__docgenInfo,
            path: '.storybook/stories/ProductOptionSelector.stories.js',
          }),
        (ProductOptionSelector_stories_text.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'text',
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['.storybook/stories/ProductOptionSelector.stories.js'] = {
            name: 'text',
            docgenInfo: ProductOptionSelector_stories_text.__docgenInfo,
            path: '.storybook/stories/ProductOptionSelector.stories.js',
          })
    },
  },
  [[495, 1, 2]],
])
//# sourceMappingURL=main.c0ba611d877d2a985274.bundle.js.map
