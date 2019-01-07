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

export const deletePool = (id) => (dispatch) => {
  dispatch(goBack())
  apiDeletePool(id)
    .then(dispatch(requestDeletePool(id)))
    .then(dispatch(getPools())) // Oh baby a triple
                                // /pools/ is called _three_ times on this page load? 
}