import React from 'react'

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
export const TopBar = ({debts, credits}) => {
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
    </div >
  )
}