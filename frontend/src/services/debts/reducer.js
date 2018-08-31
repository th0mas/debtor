import uniq from 'lodash/uniq'

import {
  RECEIVE_DEBTS,
  RECEIVE_DEBT,
  RECEIVE_UPDATE_DEBT,
} from './actions'

const initialDebtState = {}

export const debtReducer = (state = initialDebtState, action) => {
  switch (action.type) {
  case RECEIVE_DEBTS:
    return uniq([...action.payload.response, ...state])
  case RECEIVE_DEBT:
  case RECEIVE_UPDATE_DEBT:
    return uniq([action.payload.response, ...state])
  default:
    return state

  }
}