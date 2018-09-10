import { connect } from 'react-redux'
import AppBar from './AppBar'

export const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.currentUser,
    users: state.entities.accounts
  }
}

export default connect(mapStateToProps)(AppBar)