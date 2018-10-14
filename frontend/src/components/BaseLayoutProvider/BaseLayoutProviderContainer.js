import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {Base} from './BaseLayoutProvider'

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.currentUser,
    foregroundOpen: state.ui.foregroundOpen
  }
}

export default withRouter(connect(mapStateToProps)(Base))