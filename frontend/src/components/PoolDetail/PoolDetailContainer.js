import { connect } from 'react-redux'
import { PoolDetail } from './PoolDetail'
import { push } from 'connected-react-router'
import { deletePool } from '../../services/pools'

const mapStateToProps = (state) => {
  return {
    users: state.entities.accounts,
    debts: state.entities.debts,
    pools: state.entities.pools
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    push: (path) => dispatch(push(path)),
    deletePool: (id) => dispatch(deletePool(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PoolDetail)