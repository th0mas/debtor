import { compose, createStore, applyMiddleware } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { loadState, saveSate} from './localStore'
import thunk from 'redux-thunk'

import makeRootReducer from './reducers'
/* eslint no-undef: off */
// Setup function
// This sets up enhancers, middleware and applies
// initial state to the Redux store.
export default (history) => {
  const enhancers = []

  // Enable dev extensions if they exist
  const devExtension = window.__REDUX_DEVTOOLS_EXTENSION__
  devExtension && enhancers.push(devExtension())

  // Configure middleware
  // Enables passing functions to the store using thunk.
  // Adds React-Router middleware so we can access URL infomation
  // through the store.
  const middleware = [
    thunk, 
    routerMiddleware(history)
  ]

  // Load state from local storage
  const storedState = loadState()

  // Init store
  //
  // Creates store along with all the plugins
  const store = createStore(
    connectRouter(history)(makeRootReducer()),
    storedState,
    compose(
      applyMiddleware(...middleware),
      ...enhancers
    )
  )

  // Update local store
  // This saves the local store to disk on change
  store.subscribe(() => {
    saveSate(store.getState())
  })

  // Enables asyncrounous reducers
  store.asyncReducers = {}

  // Configure Hot Module Replacement
  // during development
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const reducers = require('./reducers').default
      store.replaceReducer(reducers(store.asyncReducers))
    })
  }
  return store // Return the completed store to the application

}