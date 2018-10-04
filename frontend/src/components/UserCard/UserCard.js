import React from 'react'

import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

import styles from './styles.scss'

export const UserCard = ({ user, currentUser, push, logoutUser }) => {
  let actions
  if (user.id === currentUser) {
    actions = (<CardActions>
      <Button variant="outlined" color="secondary" onClick={() => logoutUser()}>Logout</Button>
    </CardActions>)
  } else {
    actions = (
      <CardActions>
        <Button variant="contained" color="primary">
          Pay
        </Button>
        <Button variant="outlined" color="primary" onClick={() => push(`/debt/${currentUser}/${user.id}`)}>
          Request
        </Button>
      </CardActions>
    )
  }
  return (
    <Card className={styles.userCard}>
      <CardMedia
        component="img"
        src={user.profile_img}
        height="100%" />
      <CardContent className={styles.cardHeader}>
        <h1><Link to={`/user/${user.id}`} className={styles.userLink}>{user.name}</Link></h1>
        <p>{user.email}</p>
        { actions }
      </CardContent>
    </Card>
  )
}