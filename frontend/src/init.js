import { getAccounts } from './services/accounts'
import { getDebts } from './services/debts'
import { getPools } from './services/pools'
import { initUser } from './services/auth'
export default (store) => {
  // Get your infomation
  store.dispatch(initUser([ // Initial API Calls on application load
    getAccounts,
    getDebts,
    getPools
  ]))
}