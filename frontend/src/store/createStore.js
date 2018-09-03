import { compose, createStore, applyMiddleware } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import thunk from 'redux-thunk'

import makeRootReducer from './reducers'
/* eslint no-undef: off */
// Setup function
// This sets up enhancers, middleware and applies
// initial state to the Redux store.
export default (initialState = {}) => {
  // ==================================
  // Devtool extension 
  // ==================================
  const enhancers = []
  if (process.env.NODE_ENV === 'development') {
    const devExtension = window.__REDUX_DEVTOOLS_EXTENSION__
    devExtension && enhancers.push(devExtension())
  }

  // =================================
  // Configure middleware
  // =================================
  const history = createBrowserHistory()
  const middleware = [thunk, routerMiddleware(history)]

  // ================================
  // Init store
  // ================================
  const store = createStore(
    connectRouter(history)(makeRootReducer()),
    initialState,
    compose(
      applyMiddleware(...middleware),
      ...enhancers
    )
  )

  store.asyncReducers = {}

  // ===============================
  // Configure Hot Module Replacement
  // during development
  // Js is terrible why do I need to do this
  // ==============================
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const reducers = require('./reducers').default
      store.replaceReducer(reducers(store.asyncReducers))
    })
  }
  return store // phew

}