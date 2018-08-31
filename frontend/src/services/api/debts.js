import {getItem, getList, put, post} from './api'

const DEBT_ENDPOINT = '/debts/'

export const getDebts = () => {
  return getList(DEBT_ENDPOINT)
}

export const getDebt = (id) => {
  return getItem(DEBT_ENDPOINT, id)
}

export const saveDebt = (Debt) => {
  return Debt.id 
    ? put(DEBT_ENDPOINT, Debt)
    : post
}