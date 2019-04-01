import uniqBy from 'lodash/uniqBy'

import {
  RECEIVE_POOL,
  RECIEVE_CREATE_POOL,
  RECEIVE_POOLS,
  REQUEST_DELETE_POOL
} from './actions'

const initialPoolState = []

export const poolReducer = (state = initialPoolState, action) => {
  switch (action.type) {
  case RECEIVE_POOLS:
    return uniqBy([...action.payload.response, ...state], 'id')
  case RECIEVE_CREATE_POOL:
  case RECEIVE_POOL:
    return uniqBy([action.payload.response, ...state], 'id')
  case REQUEST_DELETE_POOL:
    return  state.filter((pool) => pool.id !== action.payload.id)
  default:
    return state
  }
}