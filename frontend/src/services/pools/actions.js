export const REQUEST_POOLS = 'REQUEST_POOLS'
export const RECEIVE_POOLS = 'RECIEVE_POOLS'
export const REQUEST_POOL = 'REQUEST_POOL'
export const RECEIVE_POOL = 'RECEIVE_POOL'
export const REQUEST_CREATE_POOL = 'REQUEST_CREATE_POOL'
export const RECIEVE_CREATE_POOL = 'CREATE_POOL'
export const REQUEST_DELETE_POOL = 'REQUEST_DELETE_POOL'

export const requestPools = () => {
  return {
    type: REQUEST_POOLS
  }
}

export const receivePools = (response) => {
  return {
    type: RECEIVE_POOLS,
    payload: { response }
  }
}

export const requestPool = () => {
  return {
    type: REQUEST_POOL
  }
}

export const receivePool = (response) => {
  return {
    type: RECEIVE_POOL,
    payload: {response}
  }
}

export const requestCreatePool = () => {
  return {
    type: REQUEST_CREATE_POOL
  }
}

export const receiveCreatePool = (response) => {
  return {
    type: RECIEVE_CREATE_POOL,
    payload: { response }
  }
}

export const requestDeletePool = (id) => {
  return {
    type: REQUEST_DELETE_POOL,
    payload: {id}
  }
}