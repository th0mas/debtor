import React from 'react'

import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'

import styles from './styles.scss'

export const UserCard = ({ user }) => {
  return (
    <Card className={styles.userCard}>
      <CardMedia
        component="img"
        src={user.profile_img}
        height="100%" />
      <CardContent className={styles.cardHeader}>
        <h1>{user.name}</h1>
        <p>{user.email}</p>
        <CardActions>
          <Button variant="contained" color="primary">
            Pay
          </Button>
          <Button variant="outlined" color="primary">
            Request
          </Button>

        </CardActions>
      </CardContent>
    </Card>
  )
}