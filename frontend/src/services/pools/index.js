import {
  receiveCreatePool,
  requestCreatePool,
  requestPool,
  receivePool,
  requestPools,
  receivePools
} from './actions'

import {
  getPools as apiGetPools,
  getPool as apiGetPool,
  savePool as apiSavePool
} from '../api/pools'

export const getPools = () => (dispatch) => {
  dispatch(requestPools())
  apiGetPools()
    .then((response) => dispatch(receivePools(response)))
}

export const getPool = (id) => (dispatch) => {
  dispatch(requestPool())
  apiGetPool(id)
    .then((response) => dispatch(receivePool(response)))
}

export const savePool = (pool) => (dispatch) => {
  dispatch(requestCreatePool())
  apiSavePool(pool)
    .then((response) => dispatch(receiveCreatePool(response)))
}