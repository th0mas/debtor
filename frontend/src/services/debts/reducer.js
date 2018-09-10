import uniqBy from 'lodash/uniqBy'

import {
  RECEIVE_DEBTS,
  RECEIVE_DEBT,
  RECEIVE_UPDATE_DEBT,
} from './actions'

const initialDebtState = [] 

export const debtReducer = (state = initialDebtState, action) => {
  switch (action.type) {
  case RECEIVE_DEBTS:
    return uniqBy([...action.payload.response, ...state], 'id')
  case RECEIVE_DEBT:
  case RECEIVE_UPDATE_DEBT:
    return uniqBy([action.payload.response, ...state], 'id')
  default:
    return state

  }
}