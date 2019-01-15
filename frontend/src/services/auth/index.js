import {
  requestUserToken,
  recieveUserToken,
  requestLoginUser,
} from './actions'

import { setApiToken } from '../api/api'

import { setLoginFail } from '../ui/actions'

import {
  loginUser as apiLoginUser,
  logoutUser as apiLogoutUser,
  getNewToken as apiGetNewToken
} from '../api/auth'

import { setCurrentUser, getAccounts } from '../accounts'
import initApp from '../../init'
import { store } from '../../store'

const decodeJWT = (token) => {
  let base64UrlSafe = token.split('.')[1]
  let base64 = base64UrlSafe.replace(/-/g, '+').replace(/_/g, '/')
  let decocdedToken = JSON.parse(atob(base64))
  return decocdedToken
}

export const loginUser = (username, password) => {
  return async (dispatch) => {
    dispatch(requestLoginUser())
    return apiLoginUser(username, password)
      .then((resp) => {
        resp.error // Check if we were passed an error
          ? dispatch(setLoginFail())
          : dispatch(recieveUserToken(resp.Authorization))
      })
      .then(() => dispatch(initApp))
  }
}

export const newUserToken = () => {
  return (dispatch) => {
    dispatch(requestUserToken())
    apiGetNewToken()
      .then(
        (resp) => dispatch(recieveUserToken(resp.Authorization))
      )
  }
}

export const logoutUser = () => {
  return (dispatch) => {
    apiLogoutUser()
      .then(() => dispatch(recieveUserToken('')))
      .then(() => dispatch(setCurrentUser(0)))
      .then(() => location.reload()) /* eslint no-restricted-globals: ["off", "location"] */
  }
}

// Initialize the current user, dispatches actions required by calling func
// to get app into OK state. Should be moved to /init.js
export const initUser = (initFuncs = []) => {
  return (dispatch, getState) => {
    const { auth } = getState()
    if (auth) {
      setApiToken(auth)
      dispatch(setCurrentUser(decodeJWT(auth).user))
      initFuncs.map((func) => dispatch(func()))
    } else {
      dispatch(setCurrentUser(0))
    }
  }
}

export const handleAuthError = () => {
  console.log('Logging out user') /* eslint no-console: off */
  store.dispatch(setCurrentUser(0))
}

