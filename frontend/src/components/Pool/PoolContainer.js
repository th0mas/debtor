import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { Pool } from './Pool'

const mapStateToProps = (state) => {
  return {
    users: state.entities.accounts,
    debts: state.entities.debts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    push: (path) => dispatch(push(path))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pool)