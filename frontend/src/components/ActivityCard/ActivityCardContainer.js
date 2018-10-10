import { connect } from 'react-redux'
import { ActivityCard } from './ActivityCard'
import { saveDebt } from '../../services/debts'

const mapStateToProps = (state) => {
  return {
    users: state.entities.accounts,
    currentUser: state.entities.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveDebt: (debt) => (dispatch(saveDebt(debt)))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityCard)