import { TOGGLE_VIEW_ALL, UPDATE_DEBT_FORM_STATE, SET_LOGIN_FAIL, SET_LOGIN_SUCCESS, SET_FOREGROUND_CLOSED, SET_FOREGROUND_OPEN, SET_SORT_BY } from './actions'

const initialUiState = {
  viewAll: false,
  loginFailed: false,
  foregroundOpen: false,
  sortBy: 'amount'
}

export const UIReducer = (state = initialUiState, action) => {
  switch (action.type) {
  case TOGGLE_VIEW_ALL:
    return Object.assign({}, state, { viewAll: !state.viewAll })
  case UPDATE_DEBT_FORM_STATE:
    return { ...state, debtForm: DebtEditReducer(state.debtForm, action) }
  case SET_LOGIN_FAIL:
    return Object.assign({}, state, {loginFailed: true})
  case SET_LOGIN_SUCCESS:
    return Object.assign({}, state, {loginFailed: false})
  case SET_FOREGROUND_OPEN:
    return Object.assign({}, state, {foregroundOpen: true})
  case SET_FOREGROUND_CLOSED:
    return Object.assign({}, state, {foregroundOpen: false})
  case SET_SORT_BY:
    return Object.assign({}, state, { sortBy: action.payload.sortBy})
  default:
    return state
  }
}

export const DebtEditReducer = (state = {}, action) => {
  switch (action.type) {
  case UPDATE_DEBT_FORM_STATE:
    return Object.assign({}, state, action.payload.newState)
  default:
    return state
  }
}