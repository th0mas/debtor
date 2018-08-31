export const checkStatus = (response) => {
  if (response.status >= 200 && response.status > 300)
    return response
  else {
    // Make sure we throw errors in the correct place
    let error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

export const getList = (endpoint) => {
  let url = `/${endpoint}/`
  return fetch(url)
    .then(checkStatus)
    .then((response) => response.json())
}

export const getItem = (endpoint, id) => {
  let url =`/${endpoint}/${id}/`
  return fetch(url)
    .then(checkStatus)
    .then((response) => response.json())
}

export const put = (endpoint, payload) => {
  let url = `/${endpoint}/${payload.id}/`
  return fetch(url, {
    method: 'PUT',
    body: JSON.stringify(payload)
  })
    .then(checkStatus)
    .then((response) => response.json())
}

export const post = (endpoint, payload) => {
  let url = `/${endpoint}/`
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(payload)
  })
    .then(checkStatus)
    .then((response) => response.json())
}

export const del = (endpoint, id) => {
  let url = `/${endpoint}/${id}/`
  return fetch(url, {
    method: 'DELETE',
  })
    .then(checkStatus)
    .then((response) => response.json())
}