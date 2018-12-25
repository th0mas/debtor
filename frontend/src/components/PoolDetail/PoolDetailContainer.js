import { connect } from 'react-redux'
import { PoolDetail } from './PoolDetail'
import { push } from 'connected-react-router'

const mapStateToProps = (state) => {
  return {
    users: state.entities.accounts,
    debts: state.entities.debts,
    pools: state.entities.pools
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    push: (path) => dispatch(push(path))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PoolDetail)