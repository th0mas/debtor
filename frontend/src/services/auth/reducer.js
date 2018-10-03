import { RECIEVE_USER_TOKEN } from './actions'

const initialUserToken = ''

export const AuthReducer = (state = initialUserToken, action) => {
  switch (action.type) {
  case RECIEVE_USER_TOKEN:
    return action.payload.token
  default:
    return state
  }
}