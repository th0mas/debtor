import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { Debt } from './Debt'

import { saveDebt } from '../../services/debts'
import {updateFormState, updateDebtFormState} from '../../services/ui'

const mapStateToProps = (state) => {
  return {
    debts: state.entities.debt,
    users: state.entities.accounts,
    debt: state.ui.debtForm
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    push: (path) => dispatch(push(path)),
    saveDebt: (debt) => dispatch(saveDebt(debt)),
    updateDebtState: (newState) => dispatch(updateFormState(updateDebtFormState)(newState))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Debt)