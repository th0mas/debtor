import { combineReducers } from 'redux'

import {DropUIReducer} from '../services/DropUI/reducer'

const makeRootReducer = () => {
  // const entitiesReducer = combineReducers({})
  const uiReducer = combineReducers({
    drop: DropUIReducer
  })

  return combineReducers({
    // entities: entitiesReducer,
    ui: uiReducer
  })
}

export default makeRootReducer