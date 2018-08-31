export const REQUEST_DEBTS = 'REQUEST_DEBTS'
export const RECEIVE_DEBTS = 'RECEIVE_DEBTS'
export const REQUEST_DEBT = 'REQUEST_DEBT'
export const RECEIVE_DEBT = 'RECEIVE_DEBT'
export const REQUEST_UPDATE_DEBT = 'REQUEST_UPDATE_DEBT'
export const RECEIVE_UPDATE_DEBT = 'RECEIVE_UPDATE_DEBT'

export const requestDebts = () => {
  return {
    type: REQUEST_DEBTS
  }
}

export const receiveDebts = (response) => {
  return {
    type: RECEIVE_DEBTS,
    payload: { response }
  }
}

export const requestDebt = () => {
  return {
    type: REQUEST_DEBT
  }
}

export const receiveDebt = (response) => {
  return {
    type: RECEIVE_DEBT,
    payload: { response }
  }
}

export const requestUpdateDebt = () => {
  return {
    type: REQUEST_UPDATE_DEBT,
  }
}

export const receiveUpdateDebt = (response) => {
  return {
    type: RECEIVE_UPDATE_DEBT,
    payload: { response }
  }
}