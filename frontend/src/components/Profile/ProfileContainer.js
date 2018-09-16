import { connect } from 'react-redux'
import { Profile } from './Profile'

const mapStateToProps = (state) => {
  return {
    users: state.entities.accounts
  }
}

export default connect(mapStateToProps)(Profile)
