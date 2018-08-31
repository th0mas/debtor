/* eslint no-console: off */
import {
  requestDebts,
  receiveDebts,
  requestDebt,
  receiveDebt,
  requestUpdateDebt,
  receiveUpdateDebt,
  requestDeleteDebt,
  receiveDeleteDebt
} from './actions'

import {
  getDebt as apiGetDebt,
  getDebts as apiGetDebts,
  saveDebt as apiSaveDebt,
  deleteDebt as apiDeleteDebt
} from '../api/Debts'

export const getDebts = () => {
  return (dispatch) => {
    dispatch(requestDebts)
    apiGetDebts()
      .then((response) => dispatch(receiveDebts(response)))
      .catch((response) => console.log(`RIP ${response}`))

  }
}

export const getDebt = (id) => {
  return (dispatch) => {
    dispatch(requestDebt)
    apiGetDebt(id)
      .then((response) => dispatch(receiveDebt(response)))
  }
}

export const saveDebt = (Debt) => {
  return (dispatch) => {
    dispatch(requestUpdateDebt)
    apiSaveDebt(Debt)
      .then((response) => dispatch(receiveUpdateDebt(response)))
  }
}

export const deleteDebt = (id) => {
  return (dispatch) => {
    dispatch(requestDeleteDebt)
    apiDeleteDebt(id)
      .then(() => dispatch(receiveDeleteDebt(id)))
      .catch((err) => alert(`Delete failed -> ${err}`))
  }
}