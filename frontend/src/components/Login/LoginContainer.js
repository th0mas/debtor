import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { loginUser } from '../../services/auth'
import {updateLoginFormState, updateFormState} from '../../services/ui'
import {setLoginSuccess} from '../../services/ui/actions'
import {saveAccount} from '../../services/accounts'
import { Login } from './Login'

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.currentUser,
    loginFailed: state.ui.loginFailed,
    loginForm: state.ui.loginForm,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (u, p) => dispatch(loginUser(u, p)),
    push: (location) => dispatch(push(location)),
    updateLoginForm: (update) => dispatch(updateFormState(updateLoginFormState)(update)),
    saveAccount: (account) => dispatch(saveAccount(account)),
    setLoginSuccess: () => dispatch(setLoginSuccess())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)