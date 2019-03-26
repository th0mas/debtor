import uniq from 'lodash/uniq'
import {
  RECEIVE_ACCOUNTS,
  RECEIVE_ACCOUNT,
  RECEIVE_UPDATE_ACCOUNT,
  RECEIVE_DELETE_ACCOUNT,
  SET_USER_ACCOUNT,
  GET_ACCOUNT_DETAILS

} from './actions'

const initialAccountState = []
const initialUIReducer = {
  currentAccount: {}
}

export const accountReducer = (state = initialAccountState, action) => {
  switch (action.type) {
  case RECEIVE_ACCOUNTS:
    return uniq([...action.payload.response, ...state])
  case RECEIVE_ACCOUNT:
  case RECEIVE_UPDATE_ACCOUNT:
    return uniq([action.payload.response, ...state])
  case RECEIVE_DELETE_ACCOUNT:
    return state.filter((item) => (!(item.id === action.payload.id)))
  default:
    return state
  }
}

const initialCurrentUser = null

export const currentUserReducer = (state = initialCurrentUser, action) => {
  switch (action.type) {
  case SET_USER_ACCOUNT:
    return action.payload.id
  default:
    return state
  }
}

export const accountUIReducer = (state = initialUIReducer, action) => {
  switch (action.type) {
  case GET_ACCOUNT_DETAILS:
    return Object.assign({}, state, {currentAccount: action.payload.account})
  default:
    return state
  }
}