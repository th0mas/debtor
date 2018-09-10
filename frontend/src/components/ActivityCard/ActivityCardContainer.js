import { connect } from 'react-redux'
import { ActivityCard } from './ActivityCard'
const mapStateToProps = (state) => {
  return {
    users: state.entities.accounts,
    currentUser: state.entities.currentUser
  }
}

export default connect(mapStateToProps)(ActivityCard)