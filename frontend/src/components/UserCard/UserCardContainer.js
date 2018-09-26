import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { UserCard } from './UserCard'

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    push: (path) => dispatch(push(path))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserCard)