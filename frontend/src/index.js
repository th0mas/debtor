import React from 'react'
import ReactDOM from 'react-dom'
import createStore from './store/createStore'
import Root from './components/Root'
import init from './init'
import './styles/main.scss'

const store = createStore()
init(store)

const MOUNT_NODE = document.getElementById('root')

let render = () => {
  ReactDOM.render(
    <Root store={store} />,
    MOUNT_NODE
  )
}

render() // Go go go!