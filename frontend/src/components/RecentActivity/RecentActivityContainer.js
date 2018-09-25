import { connect } from 'react-redux'

import { getAccounts, getAccount } from '../../services/accounts'
import { getDebts } from '../../services/debts'
import { toggleViewAll } from '../../services/ui'
import { RecentActivity } from './RecentActivity'

const mapStateToProps = (state, ownProps) => {
  return {
    user: ownProps.user || state.entities.currentUser,
    currentUser: state.entities.currentUser,
    accounts: state.entities.accounts,
    debts: state.entities.debts,
    viewAll: state.ui.viewAll
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAccounts: () => dispatch(getAccounts()),
    getAccount: () => dispatch(getAccount()),
    getDebts: (id = null) => dispatch(getDebts(id)),
    toggleViewAll: () => dispatch(toggleViewAll())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(RecentActivity)