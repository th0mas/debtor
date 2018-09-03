import { connect } from 'react-redux'

import { setCurrentUser } from '../../services/accounts'
import { Login } from './Login'

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (id) => dispatch(setCurrentUser(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)