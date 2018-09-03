import { getAccounts } from './services/accounts'
export default (store) => {
  // Get your infomation
  store.dispatch(getAccounts()) // TODO: Load from login



}