export const TOGGLE_VIEW_ALL = 'TOGGLE_VIEW_ALL'
export const UPDATE_DEBT_FORM_STATE = 'UPDATE_DEBT_FORM_STATE'

export const toggleViewAll = () => ({
  type: TOGGLE_VIEW_ALL
})

export const updateDebtFormState = (newState) => ({
  type: UPDATE_DEBT_FORM_STATE,
  payload: {
    newState
  }
})