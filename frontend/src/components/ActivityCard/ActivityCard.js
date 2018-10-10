import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import Chip from '@material-ui/core/Chip'
import UserAvatar from '../UserAvatar'
import ForwardArrow from '@material-ui/icons/ArrowForward'
import Tick from '@material-ui/icons/Done'

import styles from './styles.scss'

export const ActivityCard = ({ activity, type, users, currentUser, saveDebt }) => {
  const getUser = (id) => {
    return users.filter(user => user.id === id)[0]
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
            avatar={<UserAvatar user={debtor}/>} />
          <h2 className={textStyle}> 
            {activity.paid
              ? <Tick />
              : <ForwardArrow />
            }
          </h2>
          <Chip label={creditor.id === currentUser ? 'You' : creditor.name} variant='outlined'
            avatar={<UserAvatar user={creditor} />} />
        </span>
        <h1>£{(activity.amount / 100).toFixed(2)}</h1>
        <p>Interesting placeholder message.</p>
        <CardActions>
          {activity.paid
            ? <Button variant='flat' disabled color='secondary'>PAID</Button>
            : type === 'debt'
              ? <Button variant='outlined' color='primary'>Pay</Button>
              : <Button variant='contained' color='secondary' onClick={() => (saveDebt({...activity, paid: true}))}>Settle</Button>
          }
        </CardActions>
      </CardContent>
    </Card>
  )
}