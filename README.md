# Advanced React

## react-testing

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
- applyMiddleware to apply middleware
- reduxPromise?
- moxios
  - install()
  - stubRequest()
  - wait()
  - note: added a 100 to give enough time for moxios to send back the mocked response (Don't do this. just use moxios wait)
  - to make jest wait till the end content of set timeout is executed, use `done` callback.
- done() - jest
- Read more about integration testing

## Higher Order Component

- quick routing
  - BrowserRoute (from 'react-router-dom')
  - Route -> path, component, exact
- react route
  - this.props.history.push

```javascript
import React, { Component } from "react";

export default ChildComponent => {
  class ComposedComponent extends Component {
    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  return ComposedComponent;
};
```

- when a component is used with higher order component. required actions(when using redux) and history (in case of routes being used) needs to be passed as props. hence using "{...this.props}" in the return.
