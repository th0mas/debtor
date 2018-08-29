import {HAS_DROPPED, IS_DROPPING, NO_DROP} from './index'
import {DRAGLEAVE, DRAGOVER, DROPDOWN} from './actions'

const initialDropUIState = {
  currentState: NO_DROP
}

export const DropUIReducer = (state = initialDropUIState, action) => {
  switch (action.type) {
    case DRAGLEAVE:
      return { currentState: NO_DROP }
    case DRAGOVER:
      return { currentState: IS_DROPPING }
    case DROPDOWN:
      return { currentState: HAS_DROPPED }
    default:
      return state
  }
}