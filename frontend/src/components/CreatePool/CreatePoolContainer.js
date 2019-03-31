import { CreatePool } from './CreatePool'
import { updatePoolFormState, updateFormState } from '../../services/ui'
import { savePool, getPools } from '../../services/pools'
import { push } from 'connected-react-router'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    users: state.entities.accounts,
    pool: state.ui.poolForm,
    currentUser: state.entities.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updatePoolState: (update) => dispatch(updateFormState(updatePoolFormState)(update)),
    savePool: (pool) => dispatch(savePool(pool)),
    getPools: () => dispatch(getPools()),
    push: (path) => dispatch(push(path)) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePool)