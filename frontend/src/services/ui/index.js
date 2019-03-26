import {
  toggleViewAll,
  updateDebtFormState,
  updatePoolFormState,
  updateLoginFormState
} from './actions'

export const updateFormState = (target) => (updateEvent) => (dispatch) => {
  const updateFieldName = updateEvent.target.name
  const updateFieldValue = updateEvent.target.value

  const updateObject = { [updateFieldName]: updateFieldValue }
  dispatch(target(updateObject))
}

export { toggleViewAll, updateDebtFormState, updatePoolFormState, updateLoginFormState }