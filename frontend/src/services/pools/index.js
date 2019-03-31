import {
  receiveCreatePool,
  requestCreatePool,
  requestPool,
  receivePool,
  requestPools,
  receivePools,
  requestDeletePool
} from './actions'

import {
  getPools as apiGetPools,
  getPool as apiGetPool,
  savePool as apiSavePool,
  deletePool as apiDeletePool
} from '../api/pools'


import { goBack } from 'connected-react-router'

export const getPools = () => (dispatch) => {
  dispatch(requestPools())
  return apiGetPools()
    .then((response) => dispatch(receivePools(response)))
}

export const getPool = (id) => (dispatch) => {
  dispatch(requestPool())
  return apiGetPool(id)
    .then((response) => dispatch(receivePool(response)))
}

export const savePool = (pool) => (dispatch) => {
  dispatch(requestCreatePool())
  return apiSavePool(pool)
    .then((response) => dispatch(receiveCreatePool(response)))
}

export const deletePool = (id) => (dispatch) => {
  dispatch(goBack())
  return apiDeletePool(id)
    .then(dispatch(requestDeletePool(id)))
}