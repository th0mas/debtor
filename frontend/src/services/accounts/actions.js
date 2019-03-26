export const REQUEST_ACCOUNTS = 'REQUEST_ACCOUNTS'
export const RECEIVE_ACCOUNTS = 'RECEIVE_ACCOUNTS'
export const REQUEST_ACCOUNT = 'REQUEST_ACCOUNT'
export const RECEIVE_ACCOUNT = 'RECEIVE ACCOUNT'
export const REQUEST_UPDATE_ACCOUNT = 'REQUEST_UPDATE_ACCOUNT'
export const RECEIVE_UPDATE_ACCOUNT = 'RECEIVE_UPDATE_ACCOUNT'
export const REQUEST_DELETE_ACCOUNT = 'REQUEST_DELETE_ACCOUNT'
export const RECEIVE_DELETE_ACCOUNT = 'RECIEVE_DELETE_ACCOUNT'
export const SET_USER_ACCOUNT = 'SET_USER_ACCOUNT'
export const GET_ACCOUNT_DETAILS = 'GET_ACCOUNT_DETAILS'

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

export const receiveDeleteAccount = (id) => {
  return {
    type: RECEIVE_DELETE_ACCOUNT,
    payload: {
      id
    }
  }
}

export const setCurrentUser = (id) => {
  return {
    type: SET_USER_ACCOUNT,
    payload: {
      id
    }
  }
}

export const getAccountDetails = (account) => {
  return {
    type: GET_ACCOUNT_DETAILS,
    payload: {
      account
    }
  }
}