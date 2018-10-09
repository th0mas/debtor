import createStore from './createStore'
import { createBrowserHistory } from 'history'

export const history = createBrowserHistory()
export const store = createStore(history)