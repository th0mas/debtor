import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import Chip from '@material-ui/core/Chip'
import UserAvatar from '../UserAvatar'
import ForwardArrow from '@material-ui/icons/ArrowForward'
import Tick from '@material-ui/icons/Done'
import { history } from '../../store'
import styles from './styles.scss'

export const ActivityCard = ({ activity, type, users, currentUser, saveDebt }) => {
  const getUser = (id) => {
    return users.filter(user => user.id === id)[0]
  }

  const renderButtons = () => {
    if (activity.paid) { return <Button variant='flat' disabled color='secondary'>PAID</Button> }

    if (activity.creditor.id === currentUser) {
      return <Button variant='contained' color='secondary' onClick={() => (saveDebt({ ...activity, paid: true }))}>Settle</Button>
    } else if (activity.debtor.id === currentUser) {
      return <Button variant='outlined' color='primary'>Pay</Button>
    } else { // Unrelated to current user
      return <Button variant='flat' disabled>OWED</Button>
    }

  }

  const handleChipClick = (id) => {
    history.push(`/user/${id}`)
  }

  const debtor = getUser(activity.debtor.id)
  const creditor = getUser(activity.creditor.id)
  const textStyle = type === 'debt' ? styles.debtText : styles.creditText
  const cardBackground = `${styles.card} ${activity.paid ? styles.cardPaid : ''}`
  return (
    <Card className={cardBackground}>
      <CardContent>
        <span className={styles.cardHeader}>
          <Chip label={debtor.id === currentUser ? 'You' : debtor.name} variant='outlined'
            avatar={<UserAvatar user={debtor} noPopUp/>} onClick={() => handleChipClick(debtor.id)}/>
          <h2 className={textStyle}>
            {activity.paid
              ? <Tick />
              : <ForwardArrow />
            }
          </h2>
          <Chip label={creditor.id === currentUser ? 'You' : creditor.name} variant='outlined'
            avatar={<UserAvatar user={creditor} noPopUp/>} onClick={() => handleChipClick(creditor.id)}/>
        </span>
        <h1>£{(activity.amount / 100).toFixed(2)}</h1>
        <p>{ activity.description ? activity.description : <i>No description provided</i> }</p>
        <CardActions>
          { renderButtons() }
        </CardActions>
      </CardContent>
    </Card>
  )
}