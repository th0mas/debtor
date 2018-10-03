import { combineReducers } from 'redux'

import { accountReducer, currentUserReducer } from '../services/accounts/reducer'
import { debtReducer } from '../services/debts/reducer'
import { UIReducer } from '../services/ui/reducer'
import { AuthReducer } from '../services/auth/reducer'

const makeEnitiesReducer = () => {
  return combineReducers({
    debts: debtReducer,
    accounts: accountReducer,
    currentUser: currentUserReducer
  })
}

const makeRootReducer = () => {

  return combineReducers({
    entities: makeEnitiesReducer(),
    ui: UIReducer,
    auth: AuthReducer
  })
}

export default makeRootReducer