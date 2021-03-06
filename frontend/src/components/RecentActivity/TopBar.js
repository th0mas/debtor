import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Add from '@material-ui/icons/AddCircleOutline'
import Pool from '../Pool'
import styles from './styles.scss'

const addDebt = (debts) => {
  let debtTotal = 0
  debts.forEach(element => {
    debtTotal = debtTotal + element.amount
  })
  return (debtTotal / 100).toFixed(2)
}

const addCredit = (credits) => {
  let creditTotal = 0
  credits.forEach(element => {
    creditTotal = creditTotal + element.amount
  })
  return (creditTotal / 100).toFixed(2)
}
export const TopBar = ({ debts, credits, pools = [], push }) => {
  return (
    <div className={styles.headerCardHolder} >
      <div className={styles.headerItem}>
        <h3 className={styles.bad}>DEBT</h3>
        <h2>
          £{addDebt(debts)}
        </h2>
      </div>
      <div className={styles.headerItem}>
        <h3 className={styles.good}>OWED</h3>
        <h2>
          £{addCredit(credits)}
        </h2>
      </div>
      <div className={styles.headerItem}>
        <Card classes={{root: styles.baseCard}} onClick={() => push('/pool/new')}><CardContent>
          <div className={styles.centerIcon}><Add/></div>
          <p>Create Pool</p>
        </CardContent></Card>
      </div>
      {
        pools.map((pool) => {
          return (
            <div key={pool.id} className={styles.headerItem}>
              <Pool pool={pool} />
            </div>
          )
        })
      }
    </div >
  )
}