import { connect } from 'react-redux'

import { getAccounts, getAccount } from '../../services/accounts'
import { RecentActivity } from './RecentActivity'

const mapStateToProps = (state) => {
  return {
    accounts: state.entities.accounts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAccounts: () => dispatch(getAccounts()),
    getAccount: () => dispatch(getAccount())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecentActivity)