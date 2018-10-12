export const TOGGLE_VIEW_ALL = 'TOGGLE_VIEW_ALL'
export const UPDATE_DEBT_FORM_STATE = 'UPDATE_DEBT_FORM_STATE'
export const SET_LOGIN_FAIL = 'SET_LOGIN_FAIL'
export const SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS'

export const toggleViewAll = () => ({
  type: TOGGLE_VIEW_ALL
})

export const updateDebtFormState = (newState) => ({
  type: UPDATE_DEBT_FORM_STATE,
  payload: {
    newState
  }
})

export const setLoginFail = () => ({
  type: SET_LOGIN_FAIL
})

export const setLoginSuccess = () => ({
  type: SET_LOGIN_SUCCESS
})