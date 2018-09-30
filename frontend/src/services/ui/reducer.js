import {TOGGLE_VIEW_ALL, UPDATE_DEBT_FORM_STATE} from './actions'

const initialUiState = {
  viewAll: false,
}

export const UIReducer = (state = initialUiState, action) => {
  switch (action.type) {
  case TOGGLE_VIEW_ALL:
    return Object.assign({}, state, {viewAll: !state.viewAll})
  case UPDATE_DEBT_FORM_STATE:
    return {...state, debtForm: DebtEditReducer(state.debtForm, action)}
  default:
    return state
  }
}

export const DebtEditReducer = (state = {}, action) => {
  switch (action.type){
  case UPDATE_DEBT_FORM_STATE:
    return Object.assign({}, state, action.payload.newState)
  default:
    return state
  }
}