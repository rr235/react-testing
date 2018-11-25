# react-testing

## Notes / Refs

- it
- ReactDOM.render
- ReactDOM.unmountComponentAtNode
- expect - expectation
  - toContain - matcher
  - toEqual - matcher
- Enzyme uses the naming convention of calling the shallow rendered component as `wrapped`
- Types of rendering
  - Static
  - Shallow - shallow
  - Full DOM - mount
- `find()`
- to use absolute path set `NODE_PATH` in `.env`. advantage of absolute path is when its easier to move components around without worrying about relative path.
- beforeEach
- rem: page reloads on form submit. to prevent reload, call preventDefault in form submit handler.
- unmount()
- afterEach - jest
- simulate
- update
- prop
- describe - jest
- quick check for redux store
  - App wrapped in Provider (from 'react-redux')
  - set store prop of Provider using createStore
  - createStore takes first arg as combined reducer and second arg is initial state
  - add `window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()` if dev tools support is needed
- quick check for using action creators
  - replace component with `connect` (from 'react-redux')
  - first arg for connect is mapStateToProps callback method (null is not needed)
  - actions
  - actions creator will be available as props
  - use render() over text()
  - render method returns a cheerioWrapper (Cheerio js is similar to jquery)
  - use JSONPlaceholder for fake api data
