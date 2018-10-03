import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { UserCard } from './UserCard'
import { logoutUser } from '../../services/auth'

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    push: (path) => dispatch(push(path)),
    logoutUser: () => dispatch(logoutUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserCard)