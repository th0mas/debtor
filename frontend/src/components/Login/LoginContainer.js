import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { loginUser } from '../../services/auth'
import { Login } from './Login'

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.currentUser,
    loginFailed: state.ui.loginFailed
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (u, p) => dispatch(loginUser(u, p)),
    push: (location) => dispatch(push(location))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)