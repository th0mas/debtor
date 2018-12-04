import {
  getItem,
  getList,
  put,
  post
} from './api'

const POOLS_ENDPOINT = 'pools'

export const getPools = () => {
  return getList(POOLS_ENDPOINT)
}

export const getPool = (id = null) => {
  return getItem(POOLS_ENDPOINT, id)
}

export const savePool = (pool) => {
  return pool.id
    ? put(POOLS_ENDPOINT, pool)
    : post(POOLS_ENDPOINT, pool)
}