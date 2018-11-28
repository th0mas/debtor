import React from 'react'
import ReactDOM from 'react-dom'
import * as Sentry from '@sentry/browser'
import Root from './components/Root'
import {store, history} from './store'
import init from './init'
import { register as registerServiceWorker } from './serviceWorker'
import './styles/main.scss'

// Initialize the application store
init(store)

// Find our applications mount node on the DOM
const MOUNT_NODE = document.getElementById('root')

// Initialize error tracking
Sentry.init({
  dsn: 'https://e5a97adb1e3d4d42ac5a47e5a57f7a13@sentry.io/1306339',
  release: process.env.REACT_APP_COMMIT_REF
})

// Define our render function
let render = () => {
  // Render the Root node with the store and history props
  ReactDOM.render(
    <Root store={store} history={history}/>,
    MOUNT_NODE
  )
}
/* eslint no-undef: off*/
// Hot Module Replacement API
// Required for Hot Reloading in development
if (module.hot) {
  module.hot.accept('./components/Root', () => {
    render()
  })
}

render() // Go go go!
registerServiceWorker() // Register a service worker for offline caching