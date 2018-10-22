import React from 'react'
import ReactDOM from 'react-dom'
import * as Sentry from '@sentry/browser'
import Root from './components/Root'
import {store, history} from './store'
import init from './init'
import { register as registerServiceWorker } from './serviceWorker'
import './styles/main.scss'

init(store)

const MOUNT_NODE = document.getElementById('root')

Sentry.init({
  dsn: 'https://e5a97adb1e3d4d42ac5a47e5a57f7a13@sentry.io/1306339',
  release: process.env.REACT_APP_COMMIT_REF
})

let render = () => {
  ReactDOM.render(
    <Root store={store} history={history}/>,
    MOUNT_NODE
  )
}
/* eslint no-undef: off*/
// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/Root', () => {
    render()
  })
}

render() // Go go go!
registerServiceWorker()