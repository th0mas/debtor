import React from 'react'
import ActivityCard from '../ActivityCard'
import Button from '@material-ui/core/Button'
import LinearProgress from '@material-ui/core/LinearProgress'

import styles from './styles.scss'

export const PoolDetail = ({ match, pools, debts, users, deletePool }) => {
  const pool = pools.find(pool => pool.id === parseInt(match.params.id))
  if (!(users.length > 0 && debts.length > 0 && pools.length > 0 )) { return <h1>Loading</h1> }

  const owner = users.find(user => user.id === pool.owner.id)

  // TODO: Copied code - refractor out
  const associatedDebts = debts.filter((debt) => { // TODO: extract this out - same as ../Pool/Pool:`associatedDebts`
    return pool.associated_debts.map(debt => debt.id).includes(debt.id) // can be more efficient?
  })

  let totalOwed = 0
  associatedDebts.forEach(debt => totalOwed += debt.amount)

  let leftToPay = 0
  associatedDebts.forEach(debt => debt.paid ? null : leftToPay += debt.amount)

  const percentLeft = ((totalOwed - leftToPay) / totalOwed) * 100
  const colour = (leftToPay === 0 ) ? 'secondary' : 'primary'
  // ALL COPIED

  return (
    <div>
      <div className={styles.top}>
        <h1>{`Pool owed to ${owner.name}`}</h1>
        <Button variant='contained' color='primary' onClick={() => deletePool(pool.id)} className={styles.rmBtn}>Remove</Button>
      </div>
      <LinearProgress variant='determinate' value={percentLeft} color={colour}/>
      <div className={styles.contentHolder}>
        <div className={styles.content}>
          <h2>£{leftToPay / 100} left to pay out of £{totalOwed / 100}</h2>
          <p>{associatedDebts[0].description}</p> {/* All have same description */}
        </div>
        <div className={styles.content}>
          {
            associatedDebts.map(debt => <ActivityCard key={debt.id} activity={debt} type={debt} />)
          }
        </div>
      </div>
    </div>

  )
}