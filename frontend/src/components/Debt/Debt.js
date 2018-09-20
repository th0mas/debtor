import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import InputAdornment from '@material-ui/core/InputAdornment'
import UserAvatar from '../UserAvatar'

import styles from './styles.scss'

const submitDebt = (event, debt, push) => {
  event.preventDefault()
}

const getUserById = (userId, users) => {
  return users.find(user => user.id === userId)
}

export const Debt = ({ debts, users, push }) => {
  let title = 0
  let amount = 0
  if (users.length > 0) {
    return (
      <Card className={styles.debtCard} style={{flexDirection: 'column'}}>
        <CardContent>
          <h2>Add Debt </h2>
          <UserAvatar user={getUserById(1, users)} /> -> <UserAvatar user={getUserById(2, users)} />
          <form className={styles.formHolder} onSubmit={submitDebt}>
            <TextField
              label='Amount'
              id='amount'
              type='number'
              InputProps={{
                startAdornment: <InputAdornment position="start">£</InputAdornment>,
              }}
            />
            <TextField
              label='Description'
            />
            <CardActions>
              <Button type='submit'>Create</Button>
            </CardActions>
          </form>
        </CardContent>
      </Card>
    )
  } else {
    return <h1>Loading...</h1>
  }
}