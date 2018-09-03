import {getItem, getList, del, put, post} from './api'

const ACCOUNT_ENDPOINT = 'users'

export const getAccounts = () => {
  return getList(ACCOUNT_ENDPOINT)
}

export const getAccount = (id) => {
  return getItem(ACCOUNT_ENDPOINT, id)
}

export const saveAccount = (account) => {
  return account.id 
    ? put(ACCOUNT_ENDPOINT, account)
    : post(ACCOUNT_ENDPOINT, account)
}

export const deleteAccount = (id) => {
  return del(ACCOUNT_ENDPOINT, id)
}