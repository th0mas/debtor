import { connect } from 'react-redux'
import { goBack } from 'connected-react-router'
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
    goBack: () => dispatch(goBack()),
    saveDebt: (debt) => dispatch(saveDebt(debt)),
    updateDebtState: (newState) => dispatch(updateFormState(updateDebtFormState)(newState))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Debt)