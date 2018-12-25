import React from 'react'
import ActivityCard from '../ActivityCard'
import { DebtEditReducer } from '../../services/ui/reducer';

export const PoolDetail = ({match, params, pools, debts, users}) => {
  const pool = pools.find(pool => pool.id === parseInt(match.params.id))
  const owner = users.find(user => user.id === pool.owner.id)

  const associatedDebts = debts.filter((debt) => { // TODO: extract this out - same as ../Pool/Pool:`associatedDebts`
    return pool.associated_debts.map(debt => debt.id).includes(debt.id)
  })

  return (
    <div>
      <h1>{`Pool owed to ${owner.name}`}</h1>
      {
        associatedDebts.map(debt => <ActivityCard key={debt.id} activity={debt} type={debt}/>)
      }
    </div>
    
  )
}