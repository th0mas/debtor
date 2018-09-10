/* eslint no-console: off */
import {
  requestDebts,
  receiveDebts,
  requestDebt,
  receiveDebt,
  requestUpdateDebt,
  receiveUpdateDebt
} from './actions'

import {
  getDebt as apiGetDebt,
  getDebts as apiGetDebts,
  saveDebt as apiSaveDebt
} from '../api/debts'

export const getDebts = (id) => {
  return (dispatch) => {
    dispatch(requestDebts())
    apiGetDebts(id)
      .then((response) => {
        dispatch(receiveDebts(response))
      })
      .catch((response) => console.log(`RIP ${response}`))

  }
}

export const getDebt = (id) => {
  return (dispatch) => {
    dispatch(requestDebt())
    apiGetDebt(id)
      .then((response) => dispatch(receiveDebt(response)))
  }
}

export const saveDebt = (Debt) => {
  return (dispatch) => {
    dispatch(requestUpdateDebt())
    apiSaveDebt(Debt)
      .then((response) => dispatch(receiveUpdateDebt(response)))
  }
}
