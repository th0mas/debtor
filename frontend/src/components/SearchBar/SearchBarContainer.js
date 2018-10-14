import { connect } from 'react-redux'
import { SearchBar } from './SearchBar'

import {setForegroundOpen, setForegroundClosed} from '../../services/ui/actions'

const mapStateToProps = (state) => {
  return {
    users: state.entities.users,
    debts: state.entities.debts,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setForegroundOpen: () => dispatch(setForegroundOpen()),
    setForegroundClosed: () => dispatch(setForegroundClosed())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)