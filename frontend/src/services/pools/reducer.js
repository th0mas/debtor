import uniqBy from 'lodash/uniqBy'

import {
  RECEIVE_POOL,
  RECIEVE_CREATE_POOL,
  RECEIVE_POOLS,
} from './actions'

const initialPoolState = []

export const poolReducer = (state = initialPoolState, action) => {
  switch (action.type) {
  case RECEIVE_POOLS:
    return uniqBy([...action.payload.response, ...state], 'id')
  case RECIEVE_CREATE_POOL:
  case RECEIVE_POOL:
    return uniqBy([action.payload.response, ...state], 'id')
  default:
    return state
  }
}