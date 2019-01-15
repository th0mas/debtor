import { getAccounts } from './services/accounts'
import { getDebts } from './services/debts'
import { getPools } from './services/pools'
import { initUser } from './services/auth'
export default (dispatch) => {
  // Get your infomation
  dispatch(initUser([ // Initial API Calls on application load
    getAccounts,
    getDebts,
    getPools
  ]))
}