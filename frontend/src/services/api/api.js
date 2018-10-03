const BASE_URL = 'http://localhost:5000/api/v1'

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

export const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300)
    return response
  else {
    // Make sure we throw errors in the correct place
    let error = new Error(response.statusText)
    error.response = response
    /* eslint no-console: off */
    console.log(`Something has gone horribly wrong: ${response}`)
    throw error
  }
}

export const getList = (endpoint, id = null) => {
  let url = `${BASE_URL}/${endpoint}/`
  url = id ? `${url}/?id=${id}` : url
  return fetch(url, {headers: createHeaders()})
    .then(checkStatus)
    .then((response) => response.json())
}

export const getItem = (endpoint, id) => {
  let url = `${BASE_URL}/${endpoint}/${id}/`
  return fetch(url, {headers: createHeaders()})
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
  let url = `${BASE_URL}/${endpoint}/`
  url = id ? `${url}/?id=${id}` : url
  return fetch(url, {
    method: 'DELETE',
    headers: createHeaders()
  })
    .then(checkStatus)
    .then((response) => response.json())
}