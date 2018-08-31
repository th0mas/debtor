import { combineReducers } from 'redux'

import { accountReducer } from '../services/accounts/reducer'
import {DropUIReducer} from '../services/DropUI/reducer'

const makeEnitiesReducer = () => {
  return combineReducers({
    // debts: DebtReducer,
    accounts: accountReducer,
  })
}

const makeRootReducer = () => {
  // const entitiesReducer = combineReducers({})
  const uiReducer = combineReducers({
    drop: DropUIReducer
  })

  return combineReducers({
    entities: makeEnitiesReducer(),
    ui: uiReducer
  })
}

export default makeRootReducer