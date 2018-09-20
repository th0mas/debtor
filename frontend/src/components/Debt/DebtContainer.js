import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { Debt } from './Debt'

const mapStateToProps = (state) => {
  return {
    debts: state.entities.debt,
    users: state.entities.accounts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    push: (path) => dispatch(push(path))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Debt)