export const REQUEST_LOGIN_USER = 'LOGIN_USER'
export const REQUEST_USER_TOKEN = 'REQUEST_USER_TOKEN'
export const RECIEVE_USER_TOKEN = 'RECIEVE_USER_TOKEN'

export const requestLoginUser = () => {
  return {
    type: REQUEST_LOGIN_USER
  }
}

export const requestUserToken = () => {
  return {
    type: REQUEST_USER_TOKEN
  }
}

export const recieveUserToken = (token) => {
  return {
    type: RECIEVE_USER_TOKEN,
    payload: {
      token
    }
  }
}