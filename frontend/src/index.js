import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import createStore from './store/createStore'
import Root from './components/Root'
import init from './init'
import './styles/main.scss'

const history = createBrowserHistory()
const store = createStore(history)
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