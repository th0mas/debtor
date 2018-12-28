import React from 'react'
import ActivityCard from '../ActivityCard'
import Button from '@material-ui/core/Button'

export const PoolDetail = ({match, pools, debts, users, deletePool}) => {
  const pool = pools.find(pool => pool.id === parseInt(match.params.id))
  if (!pool) { return <h1>Loading</h1>}

  const owner = users.find(user => user.id === pool.owner.id)

  const associatedDebts = debts.filter((debt) => { // TODO: extract this out - same as ../Pool/Pool:`associatedDebts`
    return pool.associated_debts.map(debt => debt.id).includes(debt.id) // TODO: Why does thia work - can be more efficient?
  })

  return (
    <div>
      <h1>{`Pool owed to ${owner.name}`}</h1>
      <Button variant='contained' color='primary' onClick={() => deletePool(pool.id)} >Delete</Button>
      {
        associatedDebts.map(debt => <ActivityCard key={debt.id} activity={debt} type={debt}/>)
      }
    </div>
    
  )
}