import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import Chip from '@material-ui/core/Chip'
import UserAvatar from '../UserAvatar'
import ForwardArrow from '@material-ui/icons/ArrowForward'

import styles from './styles.scss'

export const ActivityCard = ({ activity, type, users, currentUser }) => {
  const getUser = (id) => {
    return users.filter(user => user.id === id)[0]
  }

  const debtorName = activity.debtor.id === currentUser ? 'You' : getUser(activity.debtor.id).name
  const creditorName = activity.creditor.id === currentUser ? 'You' : getUser(activity.creditor.id).name

  const textStyle = type === 'debt' ? styles.debtText : styles.creditText

  return (
    <Card className={styles.card}>
      <CardContent>
        <span className={styles.cardHeader}>
          <Chip label={debtorName} variant='outlined'
            avatar={<UserAvatar id={activity.debtor.id}/>}/>
          <h2 className={textStyle}> <ForwardArrow /></h2>
          <Chip label={creditorName} variant='outlined'
            avatar={<UserAvatar id={activity.creditor.id} /> }/>
        </span>
        <h1>£{(activity.amount / 100).toFixed(2)}</h1>
        <p>Interesting placeholder message.</p>
        {/*<span className={styles.subText}>{activity.time_created}</span> */}
        <CardActions>
          {type === 'debt'
            ? <Button variant='outlined' color='primary'>Pay</Button>
            : <Button variant='contained' color='secondary'>Nag</Button>
          }
        </CardActions>
      </CardContent>
    </Card>
  )
}