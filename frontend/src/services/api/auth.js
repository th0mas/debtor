import { getItem, del, post } from './api'

const AUTH_ENDPOINT = 'auth'

export const loginUser = (email, password) => {
  const acc = {
    email,
    password
  }
  return post(AUTH_ENDPOINT, acc)
}

export const getNewToken = () => {
  return getItem(AUTH_ENDPOINT)
}

export const logoutUser = () => {
  return del(AUTH_ENDPOINT)
}