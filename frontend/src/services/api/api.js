import { handleAuthError } from '../auth'
const BASE_URL = process.env.NODE_ENV === 'production' ? 'https://debtor-api.tomhaines.xyz/api/v1' : 'http://localhost:5000/api/v1' /* eslint no-undef: off*/

var authToken

const createHeaders = () => {
  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': authToken ? `Bearer ${authToken}` : ''
  }
}

export const setApiToken = (token) => {
  authToken = token
}

export const handleApiError = (error) => {
  console.log(`Error communicating with server: ${error}`)
}

export const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else if (response.status === 401) {
    console.log('Not authorized: Token expired or no token')
    handleAuthError()
    let error = new Error('Authentication error')
    throw error // help its the only way to stop the promise chain
  } else {
    // Make sure we throw errors in the correct place
    let error = new Error(response.statusText)
    error.response = response
    /* eslint no-console: off */
    console.log(`Error communicating with API: ${response.statusText}`)
    throw error
  }
}

export const getList = (endpoint, id = null) => {
  let url = `${BASE_URL}/${endpoint}/`
  url = id ? `${url}/?id=${id}` : url
  return fetch(url, { headers: createHeaders() })
    .then(checkStatus)
    .then((response) => response.json())
    .catch((error) => handleApiError(error)) 
}

export const getItem = (endpoint, id) => {
  let url = `${BASE_URL}/${endpoint}/${id}/`
  return fetch(url, { headers: createHeaders() })
    .then(checkStatus)
    .then((response) => response.json())
}

export const put = (endpoint, payload) => {
  let url = `${BASE_URL}/${endpoint}/${payload.id}/`
  return fetch(url, {
    method: 'PUT',
    headers: createHeaders(),
    body: JSON.stringify(payload)
  })
    .then(checkStatus)
    .then((response) => response.json())
}

export const post = (endpoint, payload) => {
  let url = `${BASE_URL}/${endpoint}/`
  return fetch(url, {
    method: 'POST',
    headers: createHeaders(),
    body: JSON.stringify(payload)
  })
    .then(checkStatus)
    .then((response) => response.json())
}

export const del = (endpoint, id) => {
  let url = `${BASE_URL}/${endpoint}/${id}/`
  return fetch(url, {
    method: 'DELETE',
    headers: createHeaders()
  })
    .then(checkStatus)
    .then((response) => response.json())
}