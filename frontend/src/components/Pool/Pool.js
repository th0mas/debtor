import React from 'react'
import Card from '@material-ui/core/Card'
import LinearProgress from '@material-ui/core/LinearProgress'
import CardContent from '@material-ui/core/CardContent'

export const Pool = ({ pool, users, debts, push }) => {

  const owner = users.find((user) => pool.owner.id === user.id)
  const associatedDebts = debts.filter((debt) => {
    return pool.associated_debts.map(debt => debt.id).includes(debt.id)
  })

  let totalOwed = 0
  associatedDebts.forEach(debt => totalOwed += debt.amount)

  let leftToPay = 0
  associatedDebts.forEach(debt => debt.paid ? null : leftToPay += debt.amount)

  const percentLeft = ((totalOwed - leftToPay) / totalOwed) * 100
  const currentOwed = totalOwed - leftToPay

  const colour = (leftToPay === 0 ) ? 'secondary' : 'primary'

  return (
    <Card onClick={() => push(`/pool/${pool.id}`)} style={{cursor: 'pointer'}}>
      <CardContent>
        <p style={{fontStyle: 'bold'}}>{owner.name}</p>
        £{currentOwed / 100} / £{totalOwed / 100}
      </CardContent>
      <LinearProgress variant='determinate' value={percentLeft} color={colour}/>
    </Card>
  )
}