import React from 'react'

import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'

import styles from './styles.scss'

export class UserCard extends React.PureComponent {

  componentDidMount() {

  }
  render() {
    return (
      <Card className={styles.userCard}>
        <CardMedia
          component="img"
          src="https://avatars1.githubusercontent.com/u/9089056?s=460&v=4"
          height="100%" />
        <CardContent className={styles.cardHeader}>
          <h1>Example User</h1>
          <p>email@example.com</p>
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
}