import {
  toggleViewAll,
  updateDebtFormState as updateDebtStateAction
} from './actions'

export const updateDebtFormState = (updateEvent) => {
  return (dispatch) => {
    const updateFieldName = updateEvent.target.name
    const updateFieldValue = updateEvent.target.value

    const updateObject = {[updateFieldName]: updateFieldValue}
    dispatch(updateDebtStateAction(updateObject))
  }
}

export {toggleViewAll}
