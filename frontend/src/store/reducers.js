import { combineReducers } from 'redux'

import { accountReducer, currentUserReducer } from '../services/accounts/reducer'
import { debtReducer } from '../services/debts/reducer'
import {DropUIReducer} from '../services/DropUI/reducer'

const makeEnitiesReducer = () => {
  return combineReducers({
    debts: debtReducer,
    accounts: accountReducer,
    currentUser: currentUserReducer
  })
}

const makeRootReducer = () => {
  const uiReducer = combineReducers({
    drop: DropUIReducer
  })

  return combineReducers({
    entities: makeEnitiesReducer(),
    ui: uiReducer
  })
}

export default makeRootReducer