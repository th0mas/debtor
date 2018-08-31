/* eslint no-console: off */
import {
  requestAccounts,
  receiveAccounts,
  requestAccount,
  receiveAccount,
  requestUpdateAccount,
  receiveUpdateAccount,
  requestDeleteAccount,
  receiveDeleteAccount
} from './actions'

import {
  getAccount as apiGetAccount,
  getAccounts as apiGetAccounts,
  saveAccount as apiSaveAccount,
  deleteAccount as apiDeleteAccount
} from '../api/accounts'

export const getAccounts = () => {
  return (dispatch) => {
    dispatch(requestAccounts)
    apiGetAccounts()
      .then((response) => dispatch(receiveAccounts(response)))
      .catch((response) => console.log(`RIP ${response}`))

  }
}

export const getAccount = (id) => {
  return (dispatch) => {
    dispatch(requestAccount)
    apiGetAccount(id)
      .then((response) => dispatch(receiveAccount(response)))
  }
}

export const saveAccount = (account) => {
  return (dispatch) => {
    dispatch(requestUpdateAccount)
    apiSaveAccount(account)
      .then((response) => dispatch(receiveUpdateAccount(response)))
  }
}

export const deleteAccount = (id) => {
  return (dispatch) => {
    dispatch(requestDeleteAccount)
    apiDeleteAccount(id)
      .then(() => dispatch(receiveDeleteAccount(id)))
      .catch((err) => alert(`Delete failed -> ${err}`))
  }
}