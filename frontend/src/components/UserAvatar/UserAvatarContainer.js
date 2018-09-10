import { connect } from 'react-redux'
import { UserAvatar } from './UserAvatar'

const mapStateToProps = (state) => {
  return {
    users: state.entities.accounts
  }
}

export default connect(mapStateToProps)(UserAvatar)