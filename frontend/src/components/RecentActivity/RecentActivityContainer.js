import { connect } from 'react-redux'

import { getAccounts, getAccount } from '../../services/accounts'
import { getDebts } from '../../services/debts'
import { getPools } from '../../services/pools'
import { toggleViewAll } from '../../services/ui'
import { setSortBy } from '../../services/ui/actions'
import { RecentActivity } from './RecentActivity'

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.currentUser,
    accounts: state.entities.accounts,
    debts: state.entities.debts,
    viewAll: state.ui.viewAll,
    sortBy: state.ui.sortBy,
    pools: state.entities.pools
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAccounts: () => dispatch(getAccounts()),
    getAccount: () => dispatch(getAccount()),
    getDebts: (id = null) => dispatch(getDebts(id)),
    toggleViewAll: () => dispatch(toggleViewAll()),
    setSortBy: (sortBy) => dispatch(setSortBy(sortBy)),
    getPools: () => dispatch(getPools())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(RecentActivity)