export const TOGGLE_VIEW_ALL = 'TOGGLE_VIEW_ALL'
export const UPDATE_DEBT_FORM_STATE = 'UPDATE_DEBT_FORM_STATE'
export const SET_LOGIN_FAIL = 'SET_LOGIN_FAIL'
export const SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS'
export const SET_FOREGROUND_OPEN = 'SET_FOREGROUND_OPEN'
export const SET_FOREGROUND_CLOSED = 'SET_FOREGROUND_CLOSED'
export const SET_SORT_BY = 'SET_SORT_BY'
export const TOGGLE_MODAL_OPEN = 'TOGGLE_MODAL_OPEN'
export const UPDATE_FORM_POOL_STATE = 'UPDATE_FORM_POOL_STATE'

export const toggleViewAll = () => ({
  type: TOGGLE_VIEW_ALL
})

export const updateDebtFormState = (newState) => ({
  type: UPDATE_DEBT_FORM_STATE,
  payload: {
    newState
  }
})

export const updatePoolFormState = (newState) => ({
  type: UPDATE_FORM_POOL_STATE,
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

export const setForegroundOpen = () =>({
  type: SET_FOREGROUND_OPEN
})

export const setForegroundClosed = () => ({
  type: SET_FOREGROUND_CLOSED
})

export const setSortBy = (sortBy) => ({
  type: SET_SORT_BY,
  payload: {
    sortBy
  }
})

export const toggleModalOpen = (modal, el) => ({
  type: TOGGLE_MODAL_OPEN,
  payload: {
    modal, el
  }
})