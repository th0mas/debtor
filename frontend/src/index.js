import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/Root'
import {store, history} from './store'
import init from './init'
import { register as registerServiceWorker } from './serviceWorker'
import './styles/main.scss'

init(store)

const MOUNT_NODE = document.getElementById('root')

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