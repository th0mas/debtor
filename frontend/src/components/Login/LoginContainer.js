import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { setCurrentUser } from '../../services/accounts'
import { Login } from './Login'

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (id) => dispatch(setCurrentUser(id)),
    push: (location) => dispatch(push(location))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)