import {TOGGLE_VIEW_ALL} from './actions'

const initialUiState = {
  viewAll: false
}

export const UIReducer = (state = initialUiState, action) => {
  switch (action.type) {
  case TOGGLE_VIEW_ALL:
    return Object.assign({}, state, {viewAll: !state.viewAll})
  default:
    return state
  }
}