import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { UserCard } from './UserCard'
import { setCurrentUser } from '../../services/accounts'

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    push: (path) => dispatch(push(path)),
    setCurrentUser: (user) => dispatch(setCurrentUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserCard)