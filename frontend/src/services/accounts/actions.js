export const REQUEST_ACCOUNTS = 'REQUEST_ACCOUNTS'
export const RECEIVE_ACCOUNTS = 'RECEIVE_ACCOUNTS'
export const REQUEST_ACCOUNT = 'REQUEST_ACCOUNT'
export const RECEIVE_ACCOUNT = 'RECEIVE ACCOUNT'
export const REQUEST_UPDATE_ACCOUNT = 'REQUEST_UPDATE_ACCOUNT'
export const RECEIVE_UPDATE_ACCOUNT = 'RECEIVE_UPDATE_ACCOUNT'
export const REQUEST_DELETE_ACCOUNT = 'REQUEST_DELETE_ACCOUNT'
export const RECEIVE_DELETE_ACCOUNT = 'RECIEVE_DELETE_ACCOUNT'

export const requestAccounts = () => {
  return {
    type: REQUEST_ACCOUNTS
  }
}

export const receiveAccounts = (response) => {
  return {
    type: RECEIVE_ACCOUNTS,
    payload: {
      response
    }
  }
}

export const requestAccount = () => {
  return {
    type: REQUEST_ACCOUNT
  }
}

export const receiveAccount = (response) => {
  return {
    type: RECEIVE_ACCOUNT,
    payload: {
      response
    }
  }
}

export const requestUpdateAccount = () => {
  return {
    type: REQUEST_UPDATE_ACCOUNT
  }
}

export const receiveUpdateAccount = (response) => {
  return {
    type: RECEIVE_UPDATE_ACCOUNT,
    payload: {
      response
    }
  }
}

export const requestDeleteAccount = (id) => {
  return {
    type: REQUEST_DELETE_ACCOUNT,
    payload: {
      id
    }
  }
}