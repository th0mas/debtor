import { getAccounts } from './services/accounts'
import { initUser } from './services/auth'
export default (store) => {
  // Get your infomation
  store.dispatch(initUser([getAccounts]))
}